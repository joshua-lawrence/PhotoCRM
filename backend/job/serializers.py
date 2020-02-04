#todo/serializers.py

from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('customer_id', 'scheduled', 'job_type', 'total')