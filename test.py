import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

# Sample dataset with synthetic player stats (replace with real data)
data = {
    'player_id': [1, 1, 1, 2, 2, 2, 3, 3, 3],
    'game_id': [101, 102, 103, 101, 102, 103, 101, 102, 103],
    'opponent_id': [20, 21, 22, 20, 21, 22, 20, 21, 22],
    'home_game': [1, 0, 1, 1, 0, 1, 1, 0, 1],  # 1 = Home, 0 = Away
    'points': [152, 182, 210, 10, 12, 9, 5, 7, 8],
    'rebounds': [5, 7, 6, 8, 6, 7, 3, 4, 3],
    'assists': [3, 2, 4, 5, 6, 4, 1, 1, 2]
}

df = pd.DataFrame(data)

# Features and target variables
X = df[['player_id', 'opponent_id', 'home_game']]
y = df[['points', 'rebounds', 'assists']]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest Regressor
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
print(f'Mean Absolute Error: {mae:.2f}')

# Function to update the model with new game results
def update_model(new_data):
    global X, y, model
    new_df = pd.DataFrame(new_data)
    X_new = new_df[['player_id', 'opponent_id', 'home_game']]
    y_new = new_df[['points', 'rebounds', 'assists']]
    
    # Append new data
    X = pd.concat([X, X_new], ignore_index=True)
    y = pd.concat([y, y_new], ignore_index=True)
    
    # Retrain the model
    model.fit(X, y)
    print("Model updated with new game data!")

# Example of updating the model with new game results
new_game_results = {
    'player_id': [1],
    'game_id': [104],
    'opponent_id': [23],
    'home_game': [0],
    'points': [22],
    'rebounds': [8],
    'assists': [5]
}
# update_model(new_game_results)

# Function to predict player stats for a future game
def predict_future_game(player_data):
    future_df = pd.DataFrame(player_data)
    X_future = future_df[['player_id', 'opponent_id', 'home_game']]
    predictions = model.predict(X_future)
    
    predicted_stats = future_df[['player_id']].copy()
    predicted_stats[['points', 'rebounds', 'assists']] = predictions
    print("Predicted stats for the future game:")
    print(predicted_stats)
    return predicted_stats

# Example usage
future_game = {
    'player_id': [1, 2, 3],
    'opponent_id': [21, 20, 21],
    'home_game': [1, 1, 1]
}
predict_future_game(future_game)