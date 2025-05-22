import random


def generate_accessories(goal, injuries):
    base_accessories = {
        "hypertrophy": ["leg press", "lat pulldown", "dumbbell row", "triceps pushdown", "bicep curls"],
        "strength": ["pause squat", "pause bench", "deficit deadlift", "barbell row"],
        "general": ["lunges", "plank", "step-ups", "pushups"]
    }

    accessories = base_accessories.get(goal, base_accessories["general"])

    return random.sample(accessories, min(3, len(accessories)))


def generate_gpp_block(inputs):
    weeks = 4
    days_per_week = inputs["training_frequency"]
    goal = inputs["goal"]
    maxes = inputs["maxes"]
    injuries = inputs["injuries"]

    block = []

    for week in range(1, weeks + 1):
        week_plan = []

        for day in range(1, days_per_week + 1):
            session = {}

            if day % 2 == 1:
                session["primary"] = ["squat", "bench"]
            else:
                session["primary"] = ["deadlift", "overhead press"]

            main_lifts = []
            for lift in session["primary"]:
                if lift == "overhead press" and "shoulder" in str(injuries).lower():
                    continue

                max_val = maxes.get(lift)
                if not max_val:
                    continue

                intensity = 0.65 + (0.02 * (week - 1))
                sets = 4 if goal == "hypertrophy" else 3
                reps = 8 if goal == "hypertrophy" else 5

                main_lifts.append({
                    "lift": lift,
                    "sets": sets,
                    "reps": reps,
                    "weight": round(max_val * intensity, 1)
                })

            session["main_lifts"] = main_lifts
            session["accessories"] = generate_accessories(goal, injuries)
            week_plan.append(session)

        block.append({
            "week": week,
            "sessions": week_plan
        })

    return block


# Example
inputs = {
    "age": 25,
    "gender": "female",
    "bodyweight": 145,
    "height": 165,
    "experience": "intermediate",
    "training_frequency": 4,
    "maxes": {
        "squat": 275,
        "bench": 165,
        "deadlift": 315
    },
    "goal": "hypertrophy",
    "injuries": ["left shoulder impingement"]
}
