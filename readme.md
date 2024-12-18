# Voice Cloning Repository

This repository contains the complete implementation of a Voice Cloning API system. It includes both the backend and frontend components, enabling users to clone a voice from an uploaded audio sample and generate speech using text input.

## Features

- **Audio Upload**: Users can upload voice recordings for cloning.
- **Text-to-Speech Synthesis**: Generates audio in the cloned voice from text input.
- **Frontend Interface**: A web-based UI for interacting with the API.
- **Backend API**: Processes uploaded audio, performs voice cloning, and synthesizes speech.

## Technology Stack

### Backend

- **Node.js** with **Express.js**: Handles API endpoints for file uploads and text synthesis.
- **Python Scripts**:
  - `process_audio.py`: Processes uploaded audio to extract voice features.
  - `synthesize.py`: Synthesizes speech using text and extracted voice features.
- **Machine Learning Models**: Pre-trained models for voice cloning and text-to-speech synthesis.

### Frontend

- **HTML**, **CSS**, and **JavaScript**: Provides a simple, responsive UI for interacting with the API.

## Repository Structure

```
voice-cloning-repo/
|-- backend/
|   |-- process_audio.py       # Python script for voice feature extraction
|   |-- synthesize.py          # Python script for text-to-speech synthesis
|   |-- server.js              # Express.js server
|-- frontend/
|   |-- index.html             # Frontend UI
|   |-- styles.css             # CSS file for styling
|   |-- script.js              # JavaScript for API interactions
|-- uploads/                   # Directory for uploaded audio files
|-- output/                    # Directory for generated audio files
|-- README.md                  # Project documentation
```

## How to Run the Project

### Prerequisites

- **Node.js** and **npm** installed.
- **Python 3.x** installed.
- Install required Python packages:
  ```bash
  pip install -r requirements.txt
  ```

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd voice-cloning-repo
   ```
2. Start the backend server:
   ```bash
   cd backend
   npm install
   node server.js
   ```
3. Open the frontend:
   - Navigate to the `frontend/` directory.
   - Open `index.html` in your preferred browser.

### API Endpoints

1. **POST /upload**:
   - Upload an audio file to clone a voice.
   - Request Body: `multipart/form-data` with field `audio`.
2. **POST /synthesize**:
   - Send text input to generate speech in the cloned voice.
   - Request Body: JSON `{ "text": "Your input text here" }`.

## Example Workflow

1. Upload a `.wav` file through the "Upload Your Voice" form on the frontend.
2. Enter text in the "Enter Text for Synthesis" form.
3. Click "Synthesize Voice" to generate and download the audio file.

## Customization

- Modify **CSS** in `frontend/styles.css` for a customized UI design.
- Update **server.js** for additional backend functionality or routes.
- Extend Python scripts (`process_audio.py` and `synthesize.py`) to integrate new models or features.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

## Acknowledgments

- Inspired by advancements in AI-driven voice cloning and text-to-speech technology.
- Special thanks to open-source libraries and pre-trained models that made this project possible.

---

For any questions or support, please open an issue in the repository or contact the maintainer directly.
