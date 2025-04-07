import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load your data
data = pd.read_csv('powerlifting_data.csv')

# Encode categorical values (e.g., Gender, Goal)
data = pd.get_dummies(data)

# Split data
X = data.drop('Weekly Volume', axis=1)  # Replace with your target label
y = data['Weekly Volume']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Normalize
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Build model
model = keras.Sequential([
    layers.Dense(128, activation='relu'),
    layers.Dense(64, activation='relu'),
    layers.Dense(1)  # For regression
])

model.compile(optimizer='adam', loss='mse', metrics=['mae'])
model.fit(X_train, y_train, epochs=50, validation_split=0.2)

# Evaluate
model.evaluate(X_test, y_test)

# Make predictions
predictions = model.predict(X_test)
