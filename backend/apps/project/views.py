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

class DefaultProjectView(APIView):
    permission_classes=[AllowAny]
    
    def get_project(self, pk):
        try:
            return Project.objects.get(id=pk)
        except Project.DoesNotExist:
            return None

    def get(self,request,pk=None):
        if pk:
            data = self.get_project(pk)
            if data:
                serializer = DefaultProjectSerializer(data)
                return Response(serializer.data)
            return Response({"message": "Project Does Not Exist"}, status=status.HTTP_404_NOT_FOUND)
        else:
            data = Project.objects.all()
            serializer = DefaultProjectSerializer(data, many=True)
            return Response(serializer.data)

class OngoingProjectView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        data = Project.objects.filter(status='ongoing')
        serializer = DefaultProjectSerializer(data, many=True)
        return Response(serializer.data)

class CompletedProjectView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        data = Project.objects.filter(status='completed')
        serializer = DefaultProjectSerializer(data, many=True)
        return Response(serializer.data)

class CBProjectView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        data = Project.objects.filter(customer_name='chigon')
        serializer = DefaultProjectSerializer(data, many=True)
        return Response(serializer.data)
