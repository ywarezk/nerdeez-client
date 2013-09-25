'''
nerdeez client views will be defined here

@copyright: nerdeez.com Ltd.
@version: 1.0
@author: Yariv Katz
'''

#=============================
# begin imports
#=============================

import os
from django.template import RequestContext
from django.shortcuts import render_to_response
import settings
from django.views.decorators.cache import cache_page

#=============================
# end imports
#=============================

#=============================
# begin application views
#=============================

def spa(request):
    '''
    main nerdeez client application
    '''
    
    return render_to_response(
        'base.html',
        {'SERVER_URL': settings.SERVER_URL, 'FACEBOOK_APP_ID': settings.FACEBOOK_APP_ID},
        context_instance=RequestContext(request)
        )

@cache_page(60*60*24*365)
def channel(request):
    '''
    channel file to load facebook
    '''
    
    return render_to_response(
        'channel.html',
        {},
        context_instance=RequestContext(request)
        )
    
#=============================
# end application views
#=============================