from django.db import models
from apps.media.models import Image
# Create your models here.
class Machine(models.Model):
    name = models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    image = models.ManyToManyField(Image, related_name="Machine_Image",blank=True)

    def __str__(self):
        return self.name
    