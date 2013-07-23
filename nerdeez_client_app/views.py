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

#=============================
# end imports
#=============================

#=============================
# begin application views
#=============================

def spa(request):
    '''
    main nerdeez client application
    @param request: the request object
    '''
    
    return render_to_response(
        'base.html',
        {'SERVER_URL': settings.SERVER_URL},
        context_instance=RequestContext(request)
        )
    
#=============================
# end application views
#=============================