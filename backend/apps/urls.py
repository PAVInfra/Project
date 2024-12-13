from django.urls import path,include

urlpatterns = [
    path("services/", include("apps.services.urls")),
    path("projects/", include("apps.project.urls")),
    path("machine/", include("apps.machine.urls")),
    path("home/", include("apps.home.urls")),
    path("aboutus/", include("apps.aboutus.urls")),
]
