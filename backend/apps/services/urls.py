from django.urls import path,include
from .views import *

urlpatterns = [
    path("<int:pk>/", DefaultServicesView.as_view()),
    path("",DefaultServicesView.as_view()),
]