"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import django
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from django.conf import settings
from django.views.static import serve

urlpatterns = [ 
    path('api/', include('enviromentApp.urls')),
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('promotions/', TemplateView.as_view(template_name='index.html')),
    path('resources/', TemplateView.as_view(template_name='index.html')),
    path('newsletter', TemplateView.as_view(template_name='index.html')),
    path('contact/', TemplateView.as_view(template_name='index.html')),
    path('unsubscribe/', TemplateView.as_view(template_name='index.html')),
    url(r'^static/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,}),
    url(r'^media/(?P<path>.*)$', django.views.static.serve, {
    'document_root': settings.MEDIA_ROOT})
]
