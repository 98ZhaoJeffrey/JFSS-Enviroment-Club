# Generated by Django 3.1.2 on 2020-11-17 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enviromentApp', '0018_email_hashcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='hashCode',
            field=models.CharField(default=None, max_length=32),
        ),
    ]
