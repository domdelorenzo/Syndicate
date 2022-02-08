from rest_framework import serializers
from .models import User, Folder, Subscription

class UserSerializer(serializers.HyperlinkedModelSerializer):
  subscriptions = serializers.HyperlinkedRelatedField(
    view_name='subscription_detail',
    many=True,
    read_only=True
  )

  folders = serializers.HyperlinkedRelatedField(
    view_name='folder_detail',
    many=True,
    read_only=True
  )

  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password', 'subscriptions', 'folders')

class FolderSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.HyperlinkedRelatedField(
    view_name='user_detail',
    read_only=True
  )

  user_id = serializers.PrimaryKeyRelatedField(
    queryset=User.objects.all(),
    source='user'
  )

  subscriptions = serializers.HyperlinkedRelatedField(
    view_name='subscription_detail',
    many=True,
    read_only=True
  )

  class Meta:
    model = Folder
    fields = ('id', 'user', 'user_id', 'folder_name', 'subscriptions')


class SubscriptionSerializer(serializers.HyperlinkedModelSerializer):
  user = serializers.HyperlinkedRelatedField(
    view_name ='user_detail', 
    read_only=True
    )
  user_id= serializers.PrimaryKeyRelatedField(
    queryset=User.objects.all(),
    source='user'
  )
  folder = serializers.HyperlinkedRelatedField(
    view_name ='folder_detail', 
    read_only=True
  )
  folder_id= serializers.PrimaryKeyRelatedField(
    queryset=Folder.objects.all(),
    source='folder'
  )
  # user = serializers.HyperlinkedRelatedField(
  #   view_name='user_detail',
  #   read_only=True
  # )

  # user_id = serializers.PrimaryKeyRelatedField(
  #   queryset=User.objects.all(),
  #   source='user'
  # )

  # folder = serializers.HyperlinkedRelatedField(
  #   view_name='folder_detail',
  #   read_only=True
  # )

  # folder_id = serializers.PrimaryKeyRelatedField(
  #   queryset=Folder.objects.all(),
  #   read_only=True
  # )

  class Meta:
    model = Subscription
    fields = ('id', 'user', 'user_id', 'folder', 'folder_id', 'name', 'url', 'favorite')