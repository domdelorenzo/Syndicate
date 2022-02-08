from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('users', views.UserList.as_view(), name='user_list'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('folders/', views.FolderList.as_view(), name='folder_list'),
    path('folder/<int:pk>', views.FolderDetail.as_view(), name='folder_detail'),
    path('subscriptions', views.SubscriptionList.as_view(), name='subscription_list'),
    path('subscription/<int:pk>', views.SubscriptionDetail.as_view(), name='subscription_detail'),
]