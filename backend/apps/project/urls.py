from django.urls import path,include
from .views import *

urlpatterns = [
    path("<int:pk>/", DefaultProjectView.as_view()),
    path("",DefaultProjectView.as_view()),
    path("ongoing/",OngoingProjectView.as_view()),
    path("completed/",CompletedProjectView.as_view()),
    path("cb/",CBProjectView.as_view()),
]
