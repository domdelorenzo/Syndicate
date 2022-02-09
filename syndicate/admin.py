from django.contrib import admin
from .models import Folder, Subscription
from accounts.models import CustomUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

# admin.site.register(User)
admin.site.register(Folder)
admin.site.register(Subscription)

# class UserInline(admin.StackedInline):
#   model = User
#   can_delete = False
#   verbose_name_plural = 'user'

# class CustomUserAdmin(BaseUserAdmin):
#   inlines = (UserInline,)

# admin.site.register(CustomUser, CustomUserAdmin)