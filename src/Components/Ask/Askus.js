import React, { useState } from 'react';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai"
import styles from './Askus.module.css'; // Import the modular CSS styles
import Navbar from './../Navbar/Nav';
import Foot from './../Footer/Foot';

const Ask = () => {
    const [query, setQuery] = useState('');
    const [answer, setAnswer] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const openAi = new OpenAIApi(
        new Configuration({
            apiKey: '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',
        })
    )

    const handleSearch = async () => {
        try {
            // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key.
            // const apiKey = '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';
            // const model = 'gpt-3.5-turbo';
            // const messages = [{ role: 'user', content: query }];

            const response = await axios.post.openAi.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: query }],
            })
            // Get the answer from the response and set it in the state.
            const answer = response.data.choices[0].message.content;
            setAnswer(answer);
        } catch (error) {
            console.error('Error fetching answer from OpenAI API:', error);
            setAnswer('Error fetching answer. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.askContainer}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Enter your query..."
                        className={styles.inputText}
                    />
                    <button onClick={handleSearch} className={styles.searchButton}> {/* Apply the modular CSS */}
                        Search
                    </button>
                </div>
                {answer && (
                    <div className={styles.answerContainer}>
                        <div className={styles.answerBox}>{answer}</div>
                    </div>
                )}
            </div>
            <Foot />
        </>
    );
};

export default Ask;
