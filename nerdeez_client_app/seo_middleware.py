# import requests
from django.http import HttpResponseRedirect
from django.conf import settings
import subprocess

 
class SeoMiddleware(object):
    """
        This middleware checks whether the user-agent is
        a search engine and if so, renders the page for it.
    """
 
    def process_request(self, request):

        # Check whether the user agent is of a search engine bot.
        bot_agent_list = ['google', 'bingbot', 'msn', 'yahoo', 'iaskspider', 'baiduspider']

        user_agent = (request.META.get('HTTP_USER_AGENT2', '') + request.META.get('HTTP_USER_AGENT', '')).lower()
        if any(bot_agent in user_agent for bot_agent in bot_agent_list):
        #if True:
            
            host = request.get_host()
            full_path = request.get_full_path()
            url = settings.NERDEEZ_SEO_SERVER_URL + '?url=' + 'http://' + host + full_path
#             text = subprocess.check_output([
#                 'phantom/phantomjs-linux', 
#                 'phantom/phantom-server.js', 
#                 url
#             ])
            # response = requests.get(settings.FITBLOK_SEO_SERVER_URL + request.get_full_path())
            return HttpResponseRedirect(url)
 
        return None

