"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.get("/about", (req, res) => {
    res.send("This is the about page.");
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
