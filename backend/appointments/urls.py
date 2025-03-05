from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, CustomerViewSet, AuthViewSet

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'auth', AuthViewSet, basename='auth')  # Registering the AuthViewSet

urlpatterns = [
    # This will include the auth actions (register_doctor, register_customer, login)
    path('api/', include(router.urls)),  # Add this to the router, including auth views
]
