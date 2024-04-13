from django.db import models

class PlayerRanking(models.Model):
    name = models.CharField(max_length=80)
    team = models.CharField(max_length=80)
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()

    def __str__(self):
        return self.name

class TeamRanking(models.Model):
    team = models.CharField(max_length=80)
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()

    def __str__(self):
        return self.team

class ConferenceRanking(models.Model):
    conference = models.CharField(max_length=80)
    rating = models.IntegerField()
    o_rating = models.IntegerField()
    d_rating = models.IntegerField()

    def __str__(self):
        return self.conference