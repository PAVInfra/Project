from .models import *
from rest_framework.views import APIView
from .serializers import DefaultServicesSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render,get_list_or_404,get_object_or_404
# Create your views here.
