from django.contrib import admin
from .models import User, Folder, Subscription
# Register your models here.

admin.site.register(User)
admin.site.register(Folder)
admin.site.register(Subscription)
