from .models import *
from rest_framework.views import APIView
from .serializers import DefaultAwardsSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render,get_list_or_404,get_object_or_404


# Create your views here.

class DefaultAwardsView(APIView):
    permission_classes=[AllowAny]
    
    def get_awards(self, pk):
        try:
            return Award.objects.get(id=pk)
        except Award.DoesNotExist:
            return None

    def get(self,request,pk=None):
        if pk:
            data = self.get_awards(pk)
            if data:
                serializer = DefaultAwardsSerializer(data)
                return Response(serializer.data)
            return Response({"message": "Services Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)
        else:
            data = Award.objects.all()
            serializer = DefaultAwardsSerializer(data, many=True)
            return Response(serializer.data)
