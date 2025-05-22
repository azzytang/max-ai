from flask import Flask, request, jsonify
from flask_cors import CORS
from generalized_model import generate_gpp_block

app = Flask(__name__)
CORS(app, resources={
     r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}})


@app.route('/')
def home():
    return "Welcome to the Training Program Generator API!"


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        program_inputs = {
            "age": int(data['age']),
            "gender": data['gender'],
            "bodyweight": float(data['weight']),
            "height": float(data['height']),
            "experience": data['experience'],
            "training_frequency": int(data['frequency']),
            "maxes": {
                "squat": float(data['squat1RM']),
                "bench": float(data['bench1RM']),
                "deadlift": float(data['deadlift1RM'])
            },
            "goal": data.get('goals', 'strength'),
            "injuries": data.get('injuries', '')
        }

        program = generate_gpp_block(program_inputs)

        return jsonify({'program': program})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
