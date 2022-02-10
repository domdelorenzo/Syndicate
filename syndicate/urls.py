from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    #auth0 urls
    # path('', views.index),
    # path('dashboard', views.dashboard),
    # path('logout', views.logout),
    path("", include("django.contrib.auth.urls")),
    path("", include("social_django.urls")),
    # REST urls
    path('users', views.UserList.as_view(), name='user_list'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('folders/', views.FolderList.as_view(), name='folder_list'),
    path('folder/<int:pk>', views.FolderDetail.as_view(), name='folder_detail'),
    path('subscriptions', views.SubscriptionList.as_view(), name='subscription_list'),
    path('subscription/<int:pk>', views.SubscriptionDetail.as_view(), name='subscription_detail'),
]