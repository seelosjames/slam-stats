from django.urls import path

from . import views

urlpatterns = [
    path("teams/", views.getPlayers),
    path("teams/<str:team>", views.getPlayers),
    path("teams/<int:num>", views.getPlayers),
    path("teams/<str:conference>", views.getPlayers),
    path("teams/<str:conference>/<int:num>", views.getPlayers),
    
    path("players/", views.getPlayers),
    path("players/<int:num>", views.getPlayers),
    path("players/<str:player>", views.getPlayers),
    path("players/<str:team>", views.getPlayers),
    path("players/<str:team>/<int:num>", views.getPlayers),
    path("players/<str:conference>", views.getPlayers),
    path("players/<str:conference>/<int:num>", views.getPlayers),

    path("conferences/", views.getPlayers),
    path("conferences/<str:conference>", views.getPlayers),
    path("conferences/<str:team>", views.getPlayers),
    path("conferences/<str:team>/<int:num>", views.getPlayers),
]