from django.db import models
from apps.media.models import Image
# Create your models here.
class WhyWeStandApart(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ManyToManyField(Image,related_name="WhyWeStandApart_image",blank=True)

    def __str__(self):
        return self.name
    

class Social(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    image = models.ManyToManyField(Image,related_name="Social_image",blank=True)

    def __str__(self):
        return self.name
     