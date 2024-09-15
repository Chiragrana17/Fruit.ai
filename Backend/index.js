// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/faqdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const faqSchema = new mongoose.Schema({
    question: String,
    answer: String,
});

const Faq = mongoose.model("Faq", faqSchema);

// Routes
app.get("/faqs", async(req, res) => {
    try {
        const faqs = await Faq.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/faqs", async(req, res) => {
    const faq = new Faq({
        question: req.body.question,
        answer: req.body.answer,
    });

    try {
        const newFaq = await faq.save();
        res.status(201).json(newFaq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put("/faqs/:id", async(req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) return res.status(404).json({ message: "FAQ not found" });

        faq.question = req.body.question;
        faq.answer = req.body.answer;
        await faq.save();
        res.json(faq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete("/faqs/:id", async(req, res) => {
    try {
        const faq = await Faq.findByIdAndDelete(req.params.id);
        if (!faq) return res.status(404).json({ message: "FAQ not found" });
        res.json({ message: "FAQ deleted" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});