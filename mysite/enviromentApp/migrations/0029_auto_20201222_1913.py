# Generated by Django 3.1.2 on 2020-12-22 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0028_resource_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='promo',
            name='photo_description',
            field=models.TextField(blank=True, help_text='Description for the image'),
        ),
        migrations.AddField(
            model_name='resource',
            name='photo_description',
            field=models.TextField(blank=True, help_text='Description for the image'),
        ),
    ]