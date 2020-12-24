from django.core.exceptions import ValidationError
from django.db import models
import datetime
from django.utils import timezone
import hashlib

# Create your models here.

class promo(models.Model):
    title = models.CharField(max_length=140, help_text='Title for the promo')
    date = models.DateTimeField(default=timezone.now, help_text='Date for the promo. If it is year long, put the end date')
    description = models.TextField(blank=True, help_text='Description for the resource')
    link = models.URLField(blank=True, help_text='Link to the website assoicated')
    photo = models.ImageField(default='frontend/static/img/logo.png', upload_to='frontend/public/img/promotions')
    photo_description = models.TextField(blank=True, help_text='Description for the image')
    def __str__(self):
        return (f"{self.title}")
    
    def clean(self):
        if datetime.datetime.now() > self.dateOfEvent :
            raise ValidationError("Date of promotion must be later than the current time")
    
class resource(models.Model):
    title = models.CharField(max_length=140, help_text='Title for the promo')
    description = models.TextField(blank=True, help_text='Description for the resource')
    date = models.DateTimeField(default=timezone.now, help_text='Date the resource was created')
    link = models.URLField(blank=True, help_text='Link to the website assoicated')
    photo = models.ImageField(default='frontend/static/img/logo.png', upload_to='frontend/public/img/resources')
    photo_description = models.TextField(blank=True, help_text='Description for the image')

    def __str__(self):
        return (f"{self.title}")

class email(models.Model):
    email = models.EmailField(blank=False, unique=True)
    date = models.DateTimeField(auto_now_add=True, help_text='Date the email was added to the list')
    hashCode = models.CharField(max_length=32, blank=True, editable=False)

    def __str__(self):
        return (f"{self.email}")

    def createHash(self):
        emailDate = self.email + str(self.dateOfCreation)
        return(hashlib.md5(emailDate.encode('utf8')).hexdigest())
    
    def save(self, *args, **kwargs):
        if self.hashCode == '':
            self.hashCode = self.createHash()
        super(email, self).save(*args, **kwargs)

    