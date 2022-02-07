from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username

class Folder(models.Model):
    folder_name = models.CharField(max_length=100)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='folders')

    def __str__(self):
        return self.folder_name

class Subscription(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=200)
    favorite = models.BooleanField()
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='subscriptions')
    folder = models.ForeignKey(
      Folder, on_delete=models.SET_NULL, blank=True, null=True, related_name='folders'
    )

    def __str__(self):
        return self.name