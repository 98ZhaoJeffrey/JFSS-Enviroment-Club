# Generated by Django 3.1.2 on 2020-11-08 20:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0005_auto_20201105_2039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promo',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 8, 15, 44, 20, 571301), help_text='Date for the promo. If it is year long, put the end date'),
        ),
        migrations.AlterField(
            model_name='resource',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 8, 15, 44, 20, 571301), help_text='Date the resource was created'),
        ),
    ]
