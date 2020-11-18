from django.contrib import admin
from django.db.models.query import QuerySet
from .models import promo, resource, email
from django.http import HttpResponse
import csv
import os
import datetime


# Register your models here.

def removeData(data):
    try:
        if str(data.photo) != 'static/img/logo.png':
            os.remove(str(data.photo))
    finally:
        return(data.delete())

class PromoAdmin(admin.ModelAdmin):
    list_display = ('title','dateOfEvent', 'description','link','photo')
    search_fields = ['title']
    actions = ['delete_selected', 'delete_expired']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            removeData(obj)
    
    def delete_expired(self, request, queryset):
        for obj in queryset:
            if obj.date < datetime.datetime.now():
                removeData(obj)

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title','dateOfCreation', 'description', 'photo')
    search_fields =['title']
    actions = ['delete_selected']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            removeData(obj)

def getEmails(self, request, queryset):
    response = HttpResponse(content_type='text/csv')
    writer = csv.writer(response)
    writer.writerow(['Email', 'Date Signed Up', 'HashCode'])

    for address in queryset:
        writer.writerow([address.email, address.dateOfCreation, address.hashCode])
    response['Content-Disposition'] = 'attachment; filename="email.csv"'
    return response

class EmailAdmin(admin.ModelAdmin):
    list_display = ('email','dateOfCreation', 'hashCode')
    search_fields =['email']
    actions=[getEmails]

admin.site.register(resource, ResourceAdmin)
admin.site.register(promo, PromoAdmin)
admin.site.register(email, EmailAdmin)