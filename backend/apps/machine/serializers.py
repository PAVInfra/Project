from rest_framework import serializers
from .models import *
from apps.media.serializers import ImageSerializer
class DefaultMachineSerializer(serializers.ModelSerializer):
    image=ImageSerializer(many=True, read_only=True)
    class Meta:
        model = Machine
        fields = ['id','name','description','image']