from django.shortcuts import render, redirect
from .serializers import UserSerializer, FolderSerializer, SubscriptionSerializer
from .models import Folder, Subscription, User
from rest_framework import generics,status
from rest_framework.decorators import action
from rest_framework.response import Response
import json



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