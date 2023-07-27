// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { doc, getFirestore, setDoc, getDoc, addDoc, collection, getDocs, query, where, deleteDoc } from "firebase/firestore";


import {
    getDownloadURL, getStorage, ref, uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBOflZ1QmTT1-u02L_GD21W6qqV2cpZS6I",
    authDomain: "projecthub-b131c.firebaseapp.com",
    projectId: "projecthub-b131c",
    storageBucket: "projecthub-b131c.appspot.com",
    messagingSenderId: "767687806071",
    appId: "1:767687806071:web:fb22029e7b052429470a72",
    measurementId: "G-KSYDCGHWT2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
// const firestore = getFirestore(app); // Expose firestore here
const storage = getStorage(app);

const updateUserDB = async (user, uid) => {
    if (typeof user !== "object") return;

    // Check if the user object has the 'profileImage' field and it's not undefined.
    // If it's undefined, you may provide a default image URL or any other appropriate handling.
    if (user.profileImage === undefined) {
        user.profileImage = "https://drive.google.com/file/d/1q1Z2_ObbFopWr85MKLOHnqyO4WE6ahHY/view?usp=sharing"; // Provide a default image URL or handle accordingly.
    }

    const docRef = doc(db, "users", uid);
    await setDoc(docRef, { ...user, uid });
};


const getUserFromDatabase = async (uid) => {
    const docRef = doc(db, "users", uid);
    const result = await getDoc(docRef);

    if (!result.exists()) return null;
    return result.data();
};

const uploadImage = (file, progressCallback, urlCallback, errorCallback) => {
    if (!file) {
        errorCallback("File not found");
        return;
    }

    const fileType = file.type;
    const fileSize = file.size / 1024 / 1024;

    if (!fileType.includes("image")) {
        errorCallback("File must an image");
        return;
    }
    if (fileSize > 3) {
        errorCallback("File must smaller than 3MB");
        return;
    }

    const storageRef = ref(storage, `images/${file.name}`);

    const task = uploadBytesResumable(storageRef, file);

    task.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressCallback(progress);
        },
        (error) => {
            errorCallback(error.message);
        },
        () => {
            getDownloadURL(storageRef).then((url) => {
                urlCallback(url);
            });
        }
    );
};



const addProjectInDatabase = async (project) => {
    if (typeof project !== "object") return;

    const collectionRef = collection(db, "projects");
    await addDoc(collectionRef, { ...project });
};

const updateProjectInDatabase = async (project, pid) => {
    if (typeof project !== "object") return;

    const docRef = doc(db, "projects", pid);
    await setDoc(docRef, { ...project });
};

const getAllProjects = async () => {
    return await getDocs(collection(db, "projects"));
};

const getAllProjectsForUser = async (uid) => {
    if (!uid) return;

    const collectionRef = collection(db, "projects");
    const condition = where("refUser", "==", uid);
    const dbQuery = query(collectionRef, condition);

    return await getDocs(dbQuery);
};

const deleteProject = async (pid) => {
    const docRef = doc(db, "projects", pid);
    await deleteDoc(docRef);
};


export { app as default, auth, db, db as addContactToDatabase, updateUserDB, getUserFromDatabase, uploadImage, addProjectInDatabase, updateProjectInDatabase, getAllProjects, getAllProjectsForUser, deleteProject };