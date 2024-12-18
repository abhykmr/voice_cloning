import sys
from encoder.inference import Synthesizer

# Load the synthesizer model
synthesizer = Synthesizer("models/synthesizer")

# Get the input audio file
audio_file = sys.argv[1]

# Process and extract voice features
synthesizer.load_pretrained_embeddings(audio_file)
print("Voice cloned successfully")
