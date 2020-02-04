from django.db import models

# Create your models here.
class Job(models.Model):
    customer_id = models.ForeignKey('customer.Customer', on_delete=models.CASCADE)
    scheduled = models.DateTimeField()
    job_type = models.CharField(max_length=30)
    total = models.FloatField()

    def _str_(self):
        return self.customer_id + " " + self.job_type