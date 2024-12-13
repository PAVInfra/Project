from django.db import models
from apps.media.models import Image

#cusname
#location
#des
#service
#image
#status
#commencement period

class Services(models.Model):
    name = models.CharField(max_length=250)
    shortDescription = models.TextField()
    description = models.TextField()
    image = models.ManyToManyField(Image, related_name='services', blank=True)
    def __str__(self):
        return self.name

    
