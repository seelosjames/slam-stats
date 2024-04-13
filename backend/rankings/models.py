from django.db import models

class PlayerRanking(models.Model):
    rank = models.IntegerField()
    name = models.CharField(max_length=80)
    team = models.CharField(max_length=80)
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()

class TeamRanking(models.Model):
    rank = models.IntegerField()
    team = models.CharField(max_length=80)
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()

class ConferenceRanking(models.Model):
    rank = models.IntegerField()
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()