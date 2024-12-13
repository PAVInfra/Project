from rest_framework import serializers
from .models import *
from apps.media.serializers import ImageSerializer
class DefaultAwardsSerializer(serializers.ModelSerializer):
    image=ImageSerializer(many=True, read_only=True)
    class Meta:
        model = Award
        fields = ['id','title','description','date_received','image']