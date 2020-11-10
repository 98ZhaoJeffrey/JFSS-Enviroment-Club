from django.core.exceptions import ValidationError
from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

class promo(models.Model):
    title = models.CharField(max_length=140, help_text='Title for the promo')
    dateOfEvent = models.DateTimeField(default=timezone.now, help_text='Date for the promo. If it is year long, put the end date')
    description = models.TextField(blank=True, help_text='Description for the resource')
    link = models.URLField(blank=True, help_text='Link to the website assoicated')
    photo = models.ImageField(default='static/img/logo.png', upload_to='static/img/promo')
    

    def __str__(self):
        return (f"{self.title}")
    
    def clean(self):
        if datetime.datetime.now() > self.dateOfEvent :
            raise ValidationError("Date of promotion must be later than the current time")
    
class resource(models.Model):
    title = models.CharField(max_length=140, help_text='Title for the promo')
    description = models.TextField(blank=True, help_text='Description for the resource')
    dateOfCreation = models.DateTimeField(default=timezone.now, help_text='Date the resource was created')
    photo = models.ImageField(default='static/img/logo.png', upload_to='static/img/resource')

    def __str__(self):
        return (f"{self.title}")

class email(models.Model):
    email = models.EmailField(blank=False, unique=True)
    dateOfCreation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (f"{self.email}")