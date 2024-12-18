# Voice Cloning API

This project provides a simple web-based interface for a Voice Cloning API. Users can upload their voice recordings and generate synthesized speech in their cloned voice using input text.

## Features

- Upload audio files to clone a user's voice.
- Enter text to synthesize speech in the cloned voice.
- Download the generated audio file.

## Technology Stack

### Backend

- **Node.js** with **Express.js**: Handles API requests.
- **Python** scripts:
  - `process_audio.py`: Processes the uploaded audio and extracts voice features.
  - `synthesize.py`: Synthesizes speech using extracted voice features and input text.
- **Machine Learning Models**: Pre-trained models for voice cloning and text-to-speech synthesis.

### Frontend

- **HTML**, **CSS**, and **JavaScript**: For the user interface.

## Folder Structure

```
root/
|-- backend/
|   |-- process_audio.py
|   |-- synthesize.py
|-- public/
|   |-- index.html
|   |-- styles.css
|   |-- script.js
|-- uploads/
|   |-- (Uploaded audio files)
|-- output/
    |-- (Generated audio files)
```

## How to Run the Project

### Prerequisites

- **Node.js** and **npm** installed.
- **Python 3.x** installed.
- Install necessary Python libraries:
  ```bash
  pip install -r requirements.txt
  ```

### Setup Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd voice-cloning-api
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open the frontend in a browser:
   ```
   http://localhost:3000
   ```

### Endpoints

1. **POST /upload**:
   - Upload an audio file for cloning.
   - Request Body: `multipart/form-data` with a field `audio`.
2. **POST /synthesize**:
   - Input text to generate speech.
   - Request Body: JSON `{ "text": "Your input text here" }`.

## Example Workflow

1. Upload a `.wav` file via the "Upload Your Voice" form.
2. Input some text in the "Enter Text for Synthesis" form.
3. Click "Synthesize Voice" to generate and download the audio file.

## Customization

- Modify the **CSS** in the `style` section of `index.html` for custom UI styling.
- Extend backend functionality in `process_audio.py` and `synthesize.py` for additional features.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this repository and contribute. Submit a pull request for any enhancements or bug fixes.

---

### Acknowledgments

- Pre-trained models used for voice cloning and TTS synthesis.
- Open-source libraries and tools that made this project possible.

---

For any questions or support, please open an issue in the repository or reach out via email.
