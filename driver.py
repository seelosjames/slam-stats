import pandas as pd
from helper import *

def to_db(year):
    box_scores_df = pd.read_csv("data/organized/" + str(year) + "/box_scores.csv")
    matchups_df = pd.read_csv("data/organized/" + str(year) + "/matchups.csv")
    player_stats_df = pd.read_csv("data/organized/" + str(year) + "/player_stats.csv")
    scorings_df = pd.read_csv("data/organized/" + str(year) + "/scorings.csv")
    settings_df = pd.read_csv("data/organized/" + str(year) + "/settings.csv")
    
    df = pd.concat([matchups_df, settings_df, scorings_df], axis=1)
    
    for row in df.itertuples(index=False):
        normalize_team_name(row.home_team)
    
    
to_db(2010)