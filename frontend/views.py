from django.shortcuts import render
from django.views.generic.detail import DetailView

from reminders.models import Reminder


def index(request):
    return render(request, 'index.html')


class ReminderDetailView(DetailView):
    model = Reminder
    template_name = 'index.html'
