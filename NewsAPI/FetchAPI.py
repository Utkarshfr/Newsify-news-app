import requests
from urllib.parse import urlencode

# Place your API_KEY here as a parameter
API_KEY = "&apiKey=" + "API_KEY here"
BASE_URL = "http://newsapi.org/v2/"
HEADLINES = "top-headlines?"
EVERYTHING = "everything?"
SOURCES = "sources?"
LANGUAGE = "&language=en"

def fetchHeadlines(data):
    if 'source' in data:
        temp = requests.get(f"{BASE_URL}{HEADLINES}sources={data['source']}{API_KEY}")
        print(f"{BASE_URL}{HEADLINES}sources={data['source']}{API_KEY}")
        return temp.json()
    
    params = ""
    if 'country' in data:
        params = f"country={data['country']}&" if 'category' in data else f"country={data['country']}"
    if 'category' in data:
        params += f"category={data['category']}"
    if 'query' in data:
        params += "&" + f"q={data['query']}" if params != "" else f"q={data['query']}"
    
    if len(params) == 0:
        return {'status':'noParamters'}

    temp = requests.get(f"{BASE_URL}{HEADLINES}{params}{API_KEY}")
    return temp.json()


def fetchSource(filters):
    params = ""
    if 'country' in filters:
        params = f"country={filters['country']}&" if 'category' in filters else f"country={filters['country']}"
    if 'category' in filters:
        params += f"category={filters['category']}"

    if len(params) == 0:
        return {'status':'noParamters'}

    temp = requests.get(f"{BASE_URL}{SOURCES}{params}{API_KEY}")
    return temp.json()

def fetchLatest(filters):
    filters.pop('fetch')
    params = urlencode(filters)
    if len(params) == 0:
        return {'status':'noParamters'}
    
    temp = requests.get(f"{BASE_URL}{EVERYTHING}{params}{API_KEY}")
    return temp.json()
