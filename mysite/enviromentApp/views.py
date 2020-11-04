from django.shortcuts import render
from django.http import HttpResponse

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

