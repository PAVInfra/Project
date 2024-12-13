from rest_framework import serializers
from .models import *
from apps.media.serializers import ImageSerializer

class DefaultWhyWeStandApartSerializer(serializers.ModelSerializer):
    image=ImageSerializer(many=True, read_only=True)
    class Meta:
        model = WhyWeStandApart
        fields = ['id','name','description','image']

class DefaultSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = ['id','title','description','date','image']        

