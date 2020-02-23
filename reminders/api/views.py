from rest_framework import viewsets

from .serializers import ReminderSerializer
from reminders.models import Reminder


class ReminderViewSet(viewsets.ModelViewSet):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
