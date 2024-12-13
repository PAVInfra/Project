from django.db import models
from apps.media.models import Image
from apps.services.models import Services
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut, GeocoderServiceError

# Create your models here.
class Project(models.Model):
    STATUS_CHOICES = [
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
    ]

    name = models.CharField(max_length=255)
    customer_name = models.CharField(max_length=255)
    service = models.ManyToManyField(Services,related_name="Project_Service")
    description = models.TextField()
    short_description = models.TextField(null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    image = models.ManyToManyField(Image,related_name='project', blank=True)
    commencement = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.latitude or not self.longitude:
            self.geocode_location()
        super(Project, self).save(*args, **kwargs)

    def geocode_location(self):
        geolocator = Nominatim(user_agent="myapp")
        location = f"{self.city}, {self.state}"
        try:
            location = geolocator.geocode(location)
            if location:
                self.latitude = location.latitude
                self.longitude = location.longitude
        except (GeocoderTimedOut, GeocoderServiceError):
            # Handle geocoding errors (e.g., log the error, set default coordinates, etc.)
            pass
    def __str__(self):
        return self.name