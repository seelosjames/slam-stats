from rest_framework import serializers
from .models import *

class PlayerRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerRanking
        fields = ["name", "team", "conference", "rating", "o_rating", "d_rating"]