from django.urls import path

from . import views

urlpatterns = [
    path("rankings/teams/", views.getTeams)
]