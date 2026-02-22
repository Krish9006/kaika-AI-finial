import prisma from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createuser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const finduser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (finduser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
        });
        res.status(201).json({ message: "User created successfully", user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret_key", { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });

    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Failed to login" });
    }
};