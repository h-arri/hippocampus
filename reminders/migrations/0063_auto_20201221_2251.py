# Generated by Django 3.1.4 on 2020-12-21 21:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reminders', '0062_auto_20201219_1650'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reminder',
            name='remindAt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 26, 22, 51, 20, 287277)),
        ),
    ]
