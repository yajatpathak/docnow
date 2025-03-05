from django.db import models
from django.contrib.auth.models import User

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username


class TimeSlot(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f'{self.date} {self.start_time}-{self.end_time}'


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Appointment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    time_slot = models.ForeignKey(TimeSlot, on_delete=models.CASCADE)
    date_booked = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.customer} booked with {self.doctor} on {self.time_slot.date} {self.time_slot.start_time}'
