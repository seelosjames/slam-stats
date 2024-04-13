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
    player_rankings = PlayerRanking.objects.all()
    serializer = PlayerRankingSerializer(player_rankings, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)