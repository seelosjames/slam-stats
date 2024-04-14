from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import *
from .serializers import *

@api_view(['GET'])
def getPlayers(request):
    player_rankings = PlayerRanking.objects.order_by('-rating')
    serializer = PlayerRankingSerializer(player_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getNumPlayers(request, num):
    player_rankings = PlayerRanking.objects.order_by('-rating')[:int(num)]
    serializer = PlayerRankingSerializer(player_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getTeams(request):
    team_rankings = TeamRanking.objects.order_by('-rating')
    serializer = TeamRankingSerializer(team_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getNumTeams(request, num):
    team_rankings = TeamRanking.objects.order_by('-rating')[:int(num)]
    serializer = TeamRankingSerializer(team_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getConference(request):
    conference_rankings = ConferenceRanking.objects.order_by('-rating')
    serializer = ConferenceRankingSerializer(conference_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def getNumConference(request, num):
    conference_rankings = ConferenceRanking.objects.order_by('-rating')[:int(num)]
    serializer = ConferenceRankingSerializer(conference_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)