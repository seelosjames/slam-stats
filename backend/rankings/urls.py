from django.urls import path

from . import views

urlpatterns = [
    path("teams/", views.getTeams),
    path("teams/<str:team>", views.getTeams),
    path("teams/<int:num>", views.getTeams),
    path("teams/<str:conference>", views.getTeams),
    path("teams/<str:conference>/<int:num>", views.getTeams),
    
    path("players/", views.getTeams),
    path("players/<int:num>", views.getTeams),
    path("players/<str:player>", views.getTeams),
    path("players/<str:team>", views.getTeams),
    path("players/<str:team>/<int:num>", views.getTeams),
    path("players/<str:conference>", views.getTeams),
    path("players/<str:conference>/<int:num>", views.getTeams),

    path("conference/", views.getTeams),
    path("conference/<str:conference>", views.getTeams),
    path("conference/<str:team>", views.getTeams),
    path("conference/<str:team>/<int:num>", views.getTeams),
]