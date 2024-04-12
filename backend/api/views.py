from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getTeams(request):
    return Response([
    {"team": "Gonzaga Bulldogs", "ranking": 1, "rating": 98},
    {"team": "Baylor Bears", "ranking": 2, "rating": 97},
    {"team": "Villanova Wildcats", "ranking": 3, "rating": 95},
    {"team": "Michigan Wolverines", "ranking": 4, "rating": 94},
    {"team": "Iowa Hawkeyes", "ranking": 5, "rating": 92},
    {"team": "Texas Longhorns", "ranking": 6, "rating": 90},
    {"team": "Kansas Jayhawks", "ranking": 7, "rating": 89},
    {"team": "Houston Cougars", "ranking": 8, "rating": 88},
    {"team": "Ohio State Buckeyes", "ranking": 9, "rating": 87},
    {"team": "Virginia Cavaliers", "ranking": 10, "rating": 86},
    {"team": "Alabama Crimson Tide", "ranking": 11, "rating": 85},
    {"team": "Creighton Bluejays", "ranking": 12, "rating": 84},
    {"team": "Florida State Seminoles", "ranking": 13, "rating": 83},
    {"team": "Tennessee Volunteers", "ranking": 14, "rating": 82},
    {"team": "Wisconsin Badgers", "ranking": 15, "rating": 81},
    {"team": "Texas Tech Red Raiders", "ranking": 16, "rating": 80},
    {"team": "West Virginia Mountaineers", "ranking": 17, "rating": 79},
    {"team": "Oregon Ducks", "ranking": 18, "rating": 78},
    {"team": "Missouri Tigers", "ranking": 19, "rating": 77},
    {"team": "Clemson Tigers", "ranking": 20, "rating": 76},
    {"team": "Oklahoma Sooners", "ranking": 21, "rating": 75},
    {"team": "UCLA Bruins", "ranking": 22, "rating": 74},
    {"team": "Louisville Cardinals", "ranking": 23, "rating": 73},
    {"team": "Illinois Fighting Illini", "ranking": 24, "rating": 72},
    {"team": "Minnesota Golden Gophers", "ranking": 25, "rating": 71}
  ])