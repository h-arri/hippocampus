from django.urls import path

from .views import index, ReminderDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', ReminderDetailView.as_view()),
    path('delete/<int:pk>', ReminderDetailView.as_view()),
]
