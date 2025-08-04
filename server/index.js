const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

// Налаштування CORS з обмеженнями
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://misha-vynnyk.github.io"]
        : ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// Обмеження розміру запиту
app.use(express.json({ limit: "1mb" }));

// Middleware для валідації email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Middleware для валідації HTML
const validateHTML = (html) => {
  if (!html || typeof html !== "string") return false;
  if (html.length > 50000) return false; // Обмеження розміру HTML
  return true;
};

app.post("/api/send-email", async (req, res) => {
  const { html, subject, userEmail, senderEmail, appPassword } = req.body;

  // Валідація обов'язкових полів
  if (!html || !userEmail || !senderEmail || !appPassword) {
    return res.status(400).json({
      error:
        "Missing required fields: html, userEmail, senderEmail, or appPassword",
    });
  }

  // Валідація email адрес
  if (!validateEmail(userEmail) || !validateEmail(senderEmail)) {
    return res.status(400).json({
      error: "Invalid email format",
    });
  }

  // Валідація HTML
  if (!validateHTML(html)) {
    return res.status(400).json({
      error: "Invalid HTML content or content too large",
    });
  }

  // Валідація subject
  if (subject && subject.length > 200) {
    return res.status(400).json({
      error: "Subject too long (max 200 characters)",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: appPassword,
      },
    });

    // Перевірка з'єднання
    await transporter.verify();

    await transporter.sendMail({
      from: userEmail,
      to: senderEmail,
      subject: subject || "No subject",
      html,
    });

    res.json({ message: "✅ Email sent successfully" });
  } catch (error) {
    console.error("❌ Send email error:", error);

    // Більш детальні повідомлення про помилки
    let errorMessage = "❌ Failed to send email";
    if (error.code === "EAUTH") {
      errorMessage =
        "❌ Authentication failed. Please check your email and app password.";
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "❌ Connection failed. Please check your internet connection.";
    }

    res.status(500).json({ error: errorMessage });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
