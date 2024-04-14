from rest_framework import serializers
from .models import *

class PlayerRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerRanking
        fields = ["name", "team", "conference", "rating", "o_rating", "d_rating"]

class TeamRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerRanking
        fields = ["team", "conference", "rating", "o_rating", "d_rating"]

class ConferenceRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerRanking
        fields = ["conference", "rating", "o_rating", "d_rating"]