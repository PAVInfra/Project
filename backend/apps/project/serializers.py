from rest_framework import serializers
from .models import *
from apps.media.serializers import ImageSerializer

class DefaultProjectSerializer(serializers.ModelSerializer):
    image=ImageSerializer(many=True,read_only=True)
    class Meta:
        model = Project
        fields = ['name','customer_name','service','description','short_description','status','image','commencement','city','state','latitude','longitude']