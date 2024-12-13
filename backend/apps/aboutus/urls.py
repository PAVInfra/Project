from django.urls import path,include
from .views import *

urlpatterns = [
    path("social/<int:pk>/", DefaultSocialView.as_view()),
    path("social/",DefaultSocialView.as_view()),
    path("whywestandapart/<int:pk>/", DefaultWhyWeStandApartView.as_view()),
    path("whywestandapart/",DefaultWhyWeStandApartView.as_view()),
]