import React, { useState, useEffect } from "react";
import axios from "axios";
import "./faq.css";

const FaqSection = () => {
    const [faqItems, setFaqItems] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    useEffect(() => {
        axios
            .get("https://fruit-ai-7.onrender.com/faqs")
            .then((response) => setFaqItems(response.data))
            .catch((error) => console.error("Error fetching FAQs:", error));
    }, []);

    const handleAddFaq = () => {
        axios
            .post("https://fruit-ai-7.onrender.com/faqs", {
                question: newQuestion,
                answer: newAnswer,
            })
            .then((response) => {
                setFaqItems([...faqItems, response.data]);
                setNewQuestion(""); // Clear input after adding
                setNewAnswer(""); // Clear input after adding
            })
            .catch((error) => console.error("Error adding FAQ:", error));
    };

    const handleUpdateFaq = (id) => {
        const updatedQuestion = prompt("Enter the new question:", "");
        const updatedAnswer = prompt("Enter the new answer:", "");
        if (updatedQuestion && updatedAnswer) {
            axios
                .put(`https://fruit-ai-7.onrender.com/faqs/${id}`, {
                    question: updatedQuestion,
                    answer: updatedAnswer,
                })
                .then((response) => {
                    setFaqItems(
                        faqItems.map((faq) => (faq._id === id ? response.data : faq))
                    );
                })
                .catch((error) => console.error("Error updating FAQ:", error));
        }
    };

    const handleDeleteFaq = (id) => {
        axios
            .delete(`https://fruit-ai-7.onrender.com/faqs/${id}`)
            .then(() => {
                setFaqItems(faqItems.filter((faq) => faq._id !== id));
            })
            .catch((error) => console.error("Error deleting FAQ:", error));
    };

    return (
        <div className="container faq-container">
            <div className="ce">
                <h1 className="title">FAQ Section</h1>
                <p className="subtitle">
                    Find answers to common questions about tangerines
                </p>
                <div className="faq-list">
                    {faqItems.map((item) => (
                        <div key={item._id} className="faq-item">
                            <h2 className="faq-question">{item.question}</h2>
                            <p className="faq-answer">{item.answer}</p>
                            <button onClick={() => handleUpdateFaq(item._id)}>
                                Update
                            </button>
                            <button onClick={() => handleDeleteFaq(item._id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="add-faq">
                    <input
                        type="text"
                        placeholder="New Question"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="New Answer"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                    />
                    <button onClick={handleAddFaq}>Add FAQ</button>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
