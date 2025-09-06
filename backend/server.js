import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/uchot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const EntrySchema = new mongoose.Schema({
    waterBathroom: Number,
    waterKitchen: Number,
    gaz: Number,
    date: String,
});
const Entry = mongoose.model("Entry", EntrySchema);

app.get("/history", async (req, res) => {
    const history = await Entry.find();
    res.json(history);
});

app.post("/history", async (req, res) => {
    const entry = new Entry(req.body);
    await entry.save();
    res.json(entry);
});

app.listen(5000, () => console.log("Server started on port 5000"));
