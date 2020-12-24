from datetime import datetime
from .models import promo, resource, email
from .serializers import PromoSerializer, ResourceSerializer, EmailSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'GET Promos': 'promo-list',
        'GET Resource' : 'resource-list',
        'POST Email': 'add-email',
        'DELETE Email': 'unsubcribe-email'
    }
    return Response(api_urls)

@api_view(['GET'])
def promoList(request):
    promos = promo.objects.raw("select * from enviromentApp_promo where (date > (SELECT strftime('%Y-%m-%d %H:%M:%S', datetime('now'))))")
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
        return Response({'result': 'success', 'message': 'Your email has been added to our newsletter :)'}, status=status.HTTP_201_CREATED)
    return Response({'result': 'error', 'message': serializer.errors['email'][0]}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def unsubEmail(request, hash):
    try:
        email.objects.get(hashCode=hash).delete()
        return Response('Email has been removed :(', status=status.HTTP_200_OK)
    except Exception as e:
        return Response("Email either doesn't exist or is already unsubscribed", status=status.HTTP_400_BAD_REQUEST)