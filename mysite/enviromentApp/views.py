from django.shortcuts import render
from django.http import HttpResponse

from .models import promo, resource
from .serializers import PromoSerializer, ResourceSerializer, EmailSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
def index(request):
    return HttpResponse("Welcome to JFSS Enviromental Club website!")

def resources(request):
    return HttpResponse("Here are the resources from members of our club!")

def contacts(request):
    return HttpResponse("If you have any questions, please contact us!")

def newsletter(request):
    return HttpResponse("Signup for newsletter.")

def news(request):
    return HttpResponse("Latest from climate news, updated weekly.")

def promotions(request):
    return HttpResponse("Promos brought to you by the enviromental club!")

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'GET Promos': 'promo-list',
        'GET Resource' : 'resource-list',
        'Add Email': 'add-email'
    }
    return Response(api_urls)

@api_view(['GET'])
def promoList(request):
    promos = promo.objects.all()
    serializer = PromoSerializer(promos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def resourceList(request):
    resources = resource.objects.all()
    serializer = ResourceSerializer(resources, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addEmail(request):
    #check if the email exists and throw error when there isn't
    serializer = EmailSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        