from django.db import models
# import CustomUser model from accounts app
# from accounts.models import CustomUser
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings


# Create your models here.
class User(models.Model):
  username = models.CharField(max_length=50)
  email = models.CharField(max_length=100)
  password = models.CharField(max_length=50)
  # custom_user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)

  def __str__(self):
    return self.username

# # # Hook User model to Custom User
# #   @receiver(post_save, sender=CustomUser)
# #   def create_user(sender, instance, created, **kwargs):
# #       if created:
# #         User.objects.create(customuser=instance)

# #   @receiver(post_save, sender=CustomUser)
# #   def save_user(sender, instance, **kwargs):
# #       instance.user.save()

class Folder(models.Model):
  folder_name = models.CharField(max_length=100)
  user = models.ForeignKey(
    settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='folders')

  def __str__(self):
      return self.folder_name

class Subscription(models.Model):
  name = models.CharField(max_length=100)
  url = models.CharField(max_length=200)
  favorite = models.BooleanField()
  user = models.ForeignKey(
    settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='subscriptions')
  folder = models.ForeignKey(
    Folder, on_delete=models.SET_NULL, blank=True, null=True, related_name='subscriptions'
  )

  def __str__(self):
    return self.name