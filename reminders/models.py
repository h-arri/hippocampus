from django.db import models
from django.utils import timezone
from datetime import timedelta, datetime

class Reminder(models.Model):
    description = models.CharField(max_length=255)
    extra = models.CharField(max_length=255, default='Tips...')
    remind_at = models.DateTimeField(default=datetime.now()+timedelta(days=5))
    forWho = models.CharField(max_length=255, default='You')
    byWho = models.CharField(max_length=255, default='You')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.reminder
