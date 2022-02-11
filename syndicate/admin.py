from django.contrib import admin
from .models import Folder, Subscription, User
# from accounts.models import CustomUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

admin.site.register(User)
admin.site.register(Folder)
admin.site.register(Subscription)

