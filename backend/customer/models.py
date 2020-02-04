from django.db import models

class Customer(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=17)
    email = models.CharField(max_length=50)
    # user_id = models.ForeignKey(User)

    def _str_(self):
        return self.first_name + " " + self.last_name
