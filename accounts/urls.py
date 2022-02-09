from django.urls import path, include
# from django.contrib.auth import views as auth_views
from . import views


# urlpatterns = [
#   path('accounts/login/', auth_views.LoginView.as_view(template_name='acounts/login.html'), name='login'),
#   path('acccounts/logout', auth_views.LogoutView.as_view(template_name='accounts/logout.html'), name='logout'),
# ]


urlpatterns = [
    path('', views.index),
    path('dashboard', views.dashboard),
    path('logout', views.logout),
    path('', include('django.contrib.auth.urls')),
    path('', include('social_django.urls')),
]
