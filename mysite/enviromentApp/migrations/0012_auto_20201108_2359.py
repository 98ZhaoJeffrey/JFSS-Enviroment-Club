# Generated by Django 3.1.2 on 2020-11-08 23:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0011_auto_20201108_2359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promo',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 8, 23, 59, 45, 503201), help_text='Date for the promo. If it is year long, put the end date'),
        ),
        migrations.AlterField(
            model_name='resource',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 8, 23, 59, 45, 504202), help_text='Date the resource was created'),
        ),
    ]
