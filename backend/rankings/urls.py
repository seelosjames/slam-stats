from django.urls import path

from . import views

urlpatterns = [    
    path("players/", views.getPlayers),
    path("players/<int:num>/", views.getNumPlayers),
    
    # path("players/<str:player>/", views.getPlayers),
    # path("players/<str:team>/", views.getPlayers),
    # path("players/<str:team>/<int:num>/", views.getPlayers),
    # path("players/<str:conference>/", views.getPlayers),
    # path("players/<str:conference>/<int:num>/", views.getPlayers),

    path("teams/", views.getTeams),
    # path("teams/<str:team>", views.GetNumTeams),

    path("teams/<int:num>/", views.getNumTeams),
#     path("teams/<str:conference>", views.getPlayers),
#     path("teams/<str:conference>/<int:num>", views.getPlayers),

    path("conferences/", views.getConference),
    path("conferences/<int:num>/", views.getNumConference),

#     path("conferences/<str:team>", views.getPlayers),
#     path("conferences/<str:team>/<int:num>", views.getPlayers),
]