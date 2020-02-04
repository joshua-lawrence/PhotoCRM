from django.contrib import admin
from .models import Job

class JobAdmin(admin.ModelAdmin):
    list_display = ('customer_id', 'scheduled', 'job_type', 'total')

# Register your models here.
admin.site.register(Job, JobAdmin)
