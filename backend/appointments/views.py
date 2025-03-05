from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import Doctor, Customer
from .serializers import DoctorSerializer, CustomerSerializer
from rest_framework import status

class AuthViewSet(viewsets.ViewSet):
    
    @action(detail=False, methods=['post'])
    def register_doctor(self, request):
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Doctor registered successfully"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def register_customer(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Customer registered successfully"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


# Doctor ViewSet
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    # Optional: Custom actions for Doctor
    @action(detail=True, methods=['get'])
    def appointments(self, request, pk=None):
        doctor = self.get_object()
        appointments = doctor.appointment_set.all()  # Assuming appointments are related to Doctor
        # You would need to serialize these appointments
        appointment_data = AppointmentSerializer(appointments, many=True).data
        return Response(appointment_data)

# Customer ViewSet
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
