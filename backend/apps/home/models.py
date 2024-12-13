from django.db import models
from apps.media.models import Image
# Create your models here.
class Award(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_received = models.DateField()
    image = models.ManyToManyField(Image,related_name="Award_image",blank=True)
#endha project ku vangunanganu venuma venama kekkanum
    def __str__(self):
        return self.title
    