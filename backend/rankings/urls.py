from django.urls import path

from . import views

urlpatterns = [    
    path("players/", views.getPlayers),
    path("players/<int:num>/", views.getNumPlayers),
    path("teams/", views.getTeams),
    path("teams/<int:num>/", views.getNumTeams),
    path("conferences/", views.getConference),
    path("conferences/<int:num>/", views.getNumConference),
]