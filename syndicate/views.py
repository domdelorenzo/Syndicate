from django.shortcuts import render, redirect
from .serializers import UserSerializer, FolderSerializer, SubscriptionSerializer
from .models import Folder, Subscription
from rest_framework import generics,status
from rest_framework.decorators import action
from rest_framework.response import Response
# auth0 imports
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as log_out
from urllib.parse import urlencode
from django.conf import settings
from django.http import HttpResponseRedirect
from accounts.models import CustomUser as User

import json

# Create your views here.
def index(request):
    user = request.user
    if user.is_authenticated:
        return redirect(dashboard)
    else:
        return render(request, 'index.html')


@login_required
def dashboard(request):
    user = request.user
    auth0user = user.social_auth.get(provider='auth0')
    userdata = {
        'user_id': auth0user.uid,
        'name': user.first_name,
        'picture': auth0user.extra_data['picture'],
        'email': auth0user.extra_data['email']
    }

    return render(request, 'dashboard.html', {
        'auth0User': auth0user,
        'userdata': json.dumps(userdata, indent=4)
    })

def logout(request):
    log_out(request)
    return_to = urlencode({'returnTo': request.build_absolute_uri('/')})
    logout_url = 'https://%s/v2/logout?client_id=%s&%s' % \
                (settings.SOCIAL_AUTH_AUTH0_DOMAIN, settings.SOCIAL_AUTH_AUTH0_KEY, return_to)
    return HttpResponseRedirect(logout_url)

class UserList(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class FolderList(generics.ListCreateAPIView):
  queryset = Folder.objects.all()
  serializer_class = FolderSerializer

class FolderDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Folder.objects.all()
  serializer_class = FolderSerializer
  

class SubscriptionList(generics.ListCreateAPIView):
  queryset = Subscription.objects.all()
  serializer_class = SubscriptionSerializer

class SubscriptionDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Subscription.objects.all()
  serializer_class = SubscriptionSerializer