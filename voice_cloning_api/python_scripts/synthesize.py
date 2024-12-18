import sys
from synthesizer.inference import Synthesizer

synthesizer = Synthesizer("models/synthesizer")

# Get input text
text = sys.argv[1]

# Generate speech
audio_output = synthesizer.synthesize(text)
output_path = "output/generated.wav"
audio_output.save(output_path)
print(output_path)
