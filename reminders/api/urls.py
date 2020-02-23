from rest_framework import routers

from .views import ReminderViewSet

router = routers.DefaultRouter()
router.register('reminders', ReminderViewSet, 'reminders')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls
