from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    # re_path(r'^static/(?P<path>.*)$', serve,
    #         {'document_root': settings.STATIC_ROOT}),

]
