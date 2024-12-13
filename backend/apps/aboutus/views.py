from .models import *
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render,get_list_or_404,get_object_or_404


# Create your views here.

class DefaultWhyWeStandApartView(APIView):
    permission_classes=[AllowAny]
    
    def get_data(self, pk):
        try:
            return WhyWeStandApart.objects.get(id=pk)
        except WhyWeStandApart.DoesNotExist:
            return None

    def get(self,request,pk=None):
        if pk:
            data = self.get_data(pk)
            if data:
                serializer = DefaultWhyWeStandApartSerializer(data)
                return Response(serializer.data)
            return Response({"message": "Data Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)
        else:
            data = WhyWeStandApart.objects.all()
            serializer = DefaultWhyWeStandApartSerializer(data, many=True)
            return Response(serializer.data)

class DefaultSocialView(APIView):
    permission_classes=[AllowAny]
    
    def get_data(self, pk):
        try:
            return Social.objects.get(id=pk)
        except Social.DoesNotExist:
            return None

    def get(self,request,pk=None):
        if pk:
            data = self.get_data(pk)
            if data:
                serializer = DefaultSocialSerializer(data)
                return Response(serializer.data)
            return Response({"message": "Data Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)
        else:
            data = Social.objects.all()
            serializer = DefaultSocialSerializer(data, many=True)
            return Response(serializer.data)
