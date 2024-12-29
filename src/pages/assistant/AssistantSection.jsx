import React, { useState } from 'react';
import '../../App.css';
import './AssistantSection.scss';
import axios from 'axios'; // Install axios if not already done: npm install axios

function AssistantSection() {
    const [messages, setMessages] = useState([]); // Holds chat history
    const [userInput, setUserInput] = useState(''); // Holds current user input

    // Function to send message to OpenAI API
    const sendMessage = async () => {
        if (!userInput.trim()) return; // Don't send empty messages

        // Add user message to messages state
        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');

        try {
            // Call OpenAI API
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions', // API endpoint
                {
                    model: 'gpt-3.5-turbo', // Model name
                    messages: newMessages.map((msg) => ({
                        role: msg.sender === 'user' ? 'user' : 'assistant',
                        content: msg.text,
                    })),
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
                    },
                }
            );

            // Add GPT response to messages state
            setMessages([
                ...newMessages,
                { sender: 'assistant', text: response.data.choices[0].message.content },
            ]);
        } catch (error) {
            console.error('Error communicating with OpenAI API:', error);
            setMessages([
                ...newMessages,
                { sender: 'assistant', text: 'Sorry, there was an error. Please try again.' },
            ]);
        }
    };

    return (
        <div className='assistant-container'>
            <div className='chat-window'>
                <div className='messages'>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.sender === 'user' ? 'user-message' : 'assistant-message'}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className='input-area'>
                    <input
                        type='text'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder='Type your message...'
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default AssistantSection;