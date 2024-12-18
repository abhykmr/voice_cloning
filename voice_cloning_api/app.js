// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const { exec } = require("child_process");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Configure Multer for file uploads
// const upload = multer({ dest: "uploads/" });

// // Routes
// app.get("/", (req, res) => {
//   res.send("Voice Cloning API is running!");
// });

// // Process audio using process_audio.py
// app.post("/upload", upload.single("audio"), (req, res) => {
//   const audioPath = path.join(__dirname, req.file.path);

//   // Call process_audio.py
//   exec(
//     `python python-scripts/process_audio.py ${audioPath}`,
//     (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error: ${stderr}`);
//         return res.status(500).send({ message: "Error processing audio" });
//       }

//       res.send({ message: stdout.trim() });
//     }
//   );
// });

// // Generate speech using synthesize.py
// app.post("/synthesize", (req, res) => {
//   const { text } = req.body;

//   // Call synthesize.py
//   exec(
//     `python python-scripts/synthesize.py "${text}"`,
//     (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error: ${stderr}`);
//         return res.status(500).send({ message: "Error synthesizing speech" });
//       }

//       res.send({ message: "Speech synthesized", audioPath: stdout.trim() });
//     }
//   );
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// const express = require("express");
// const multer = require("multer");
// const { cloneVoice } = require("./voice_cloning"); // Your voice cloning function

// const app = express();
// const upload = multer({ dest: "uploads/" });

// app.post("/upload", upload.single("audio"), async (req, res) => {
//   try {
//     const audioFile = req.file;
//     const clonedAudio = await cloneVoice(audioFile.path);

//     // Send the cloned audio as a response (e.g., base64 encoded or as a file download)
//     res.send(clonedAudio);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error cloning voice");
//   }
// });

// // ... other API endpoints

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });
