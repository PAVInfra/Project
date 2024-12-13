from django.urls import path,include
from .views import *

urlpatterns = [
    path("awards/<int:pk>/", DefaultAwardsView.as_view()),
    path("awards/",DefaultAwardsView.as_view()),
]