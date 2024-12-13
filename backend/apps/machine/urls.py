from django.urls import path,include
from .views import *

urlpatterns = [
    path("<int:pk>/", DefaultMachineView.as_view()),
    path("",DefaultMachineView.as_view()),
]