# Voice Cloning Frontend

This is the frontend application for the Voice Cloning API. It provides a user-friendly interface for uploading audio, entering text, and receiving synthesized speech in the user's cloned voice.

## Features

- **Audio Upload**: Allows users to upload voice recordings.
- **Text Input**: Users can enter text for voice synthesis.
- **Generated Audio Output**: Provides a link to download the synthesized audio.
- Responsive and clean UI design.

## Technology Stack

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the user interface.
- **JavaScript**: Handles client-side interactions and API requests.

## Folder Structure

```
public/
|-- index.html      # Main HTML file
|-- styles.css      # CSS file for styling
|-- script.js       # JavaScript file for API interactions
```

## How to Use

### Prerequisites

- A running instance of the Voice Cloning API backend.

### Setup Steps

1. Clone this repository:
   ```bash
   git clone <frontend-repo-url>
   cd voice-cloning-frontend
   ```
2. Open `index.html` in your preferred browser.
3. Ensure the backend server is running and accessible at `http://localhost:3000` (or update the URLs in `script.js` accordingly).

### Workflow

1. Select an audio file using the "Upload Your Voice" section.
2. Click the **Upload Audio** button to send the file to the backend API.
3. Enter text in the "Enter Text for Synthesis" section.
4. Click the **Synthesize Voice** button to generate and download the synthesized audio file.

## API Endpoints Used

- **POST /upload**: Uploads the user’s voice recording to the backend.
- **POST /synthesize**: Sends the text input to the backend and retrieves the generated audio file.

## Customization

- Modify `styles.css` to change the look and feel of the UI.
- Update `script.js` to integrate additional API endpoints or handle errors differently.

## Example Code Snippets

### File Upload Request

```javascript
const formData = new FormData();
formData.append("audio", audioInput.files[0]);
fetch("/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((result) => alert("Audio uploaded successfully!"))
  .catch((error) => console.error("Error:", error));
```

### Text-to-Speech Request

```javascript
fetch("/synthesize", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: textInput }),
})
  .then((response) => response.json())
  .then((result) => {
    if (result.audioPath) {
      const output = document.getElementById("output");
      output.innerHTML = `<a href="${result.audioPath}" target="_blank">Download Synthesized Audio</a>`;
      output.style.display = "block";
    }
  })
  .catch((error) => console.error("Error:", error));
```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this repository and submit pull requests with enhancements or bug fixes.

---

### Acknowledgments

- Inspired by advancements in voice cloning and text-to-speech technology.
- Thanks to all contributors and open-source tools that made this project possible.

---

For questions or support, please open an issue or reach out via email.
