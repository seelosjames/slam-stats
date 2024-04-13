from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import team_rankings


@api_view(['GET'])
def getTeams(request):
    return Response(team_rankings.team_rankings)