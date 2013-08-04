'''
nerdeez application urls will be defined here

@copyright: nerdeez.com Ltd.
@author: Yariv Katz
@version: 1.0

'''

#========================
# begin imports
#========================

from django.conf.urls import patterns
import nerdeez_client_app.views
from django.conf import settings

#========================
# end imports
#========================


#========================
# begin urls
#========================

urlpatterns = patterns('',
    (r'^$', nerdeez_client_app.views.spa),
    ('^channel/', nerdeez_client_app.views.channel),
)

urlpatterns += patterns('',
    (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
)

#========================
# end urls
#========================
