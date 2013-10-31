# import requests
from django.http import HttpResponse
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
        if True: #any(bot_agent in user_agent for bot_agent in bot_agent_list):
            
            url = settings.NERDEEZ_SEO_SERVER_URL + request.get_full_path()
            text = subprocess.check_output([
                'phantom/phantomjs-linux', 
                'phantom/phantom-server.js', 
                url
            ])
            # response = requests.get(settings.FITBLOK_SEO_SERVER_URL + request.get_full_path())
            return HttpResponse(text)
 
        return None

