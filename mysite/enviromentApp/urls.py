from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('resources', views.resources, name='resources'),
    path('contacts', views.contacts, name='contacts'),
    path('newsletter', views.newsletter, name='newsletter'),
    path('news', views.news, name='news'),
    path('promos', views.promotions, name='promos'),
]