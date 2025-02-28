import pandas as pd
from utilities.helper import *

def to_db(year):
    box_scores_df = pd.read_csv("data/organized/" + str(year) + "/box_scores.csv")
    matchups_df = pd.read_csv("data/organized/" + str(year) + "/matchups.csv")
    player_stats_df = pd.read_csv("data/organized/" + str(year) + "/player_stats.csv")
    scorings_df = pd.read_csv("data/organized/" + str(year) + "/scorings.csv")
    settings_df = pd.read_csv("data/organized/" + str(year) + "/settings.csv")
    
    df = pd.concat([matchups_df, settings_df, scorings_df], axis=1)
    
    teams = []
    for row in df.itertuples(index=False):
        teams.append(normalize_team_name(row.home_team))
        teams.append(normalize_team_name(row.away_team))
    teams_set = set(teams)
        
    print(teams_set)
    for team in teams_set:
        print(team)
    with open("output.txt", "w") as file:
        for item in teams_set:
            if item != None:
                file.write(item + "\n")
    
    
to_db(2010)