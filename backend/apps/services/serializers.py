from rest_framework import serializers
from .models import *
from apps.media.serializers import ImageSerializer
class DefaultServicesSerializer(serializers.ModelSerializer):
    image=ImageSerializer(many=True, read_only=True)
    class Meta:
        model = Services
        fields = ['id','name','description','shortDescription','image']