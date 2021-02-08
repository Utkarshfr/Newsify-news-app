import flask
from flask import render_template,request, jsonify, make_response
import requests
from NewsAPI.FetchAPI import fetchHeadlines,fetchSource,fetchLatest


# Place your API_KEY here as a parameter
API_KEY = "apiKey=" + "API_KEY here"

app = flask.Flask(__name__)
app.config['DEBUG'] = True

@app.route('/',methods=['GET'])
def home():
    URL = f"http://newsapi.org/v2/top-headlines?country=us&{API_KEY}"
    data = requests.get(URL)
    return render_template('headlines.html',data={'status':'ok','data':data.json()})


@app.route('/latest',methods=['GET'])
def latestnews():
    URL = f"http://newsapi.org/v2/everything?domains=indiatimes.com,theverge.com&{API_KEY}"
    data = requests.get(URL)
    return render_template('latest.html',data={'status':'ok','data':data.json()})


@app.route('/source',methods=['GET'])
def getNewsFromSource():
    URL = f"http://newsapi.org/v2/sources?{API_KEY}"
    sources = requests.get(URL)
    return render_template('sources.html',sources=sources.json())


@app.route('/fetch_data',methods=["POST"])
def fetch_data():
    data = request.get_json()
    res = None
    try:
        if data['fetch'] == 'headlines':
            res = fetchHeadlines(data)
        elif data['fetch'] == "latest":
            res = fetchLatest(data)
        elif data['fetch'] == 'source':
            res = fetchSource(data)

    #     return jsonify({'sample':'success'})

        if res.get('status') == 'noParamters':
            return jsonify({'status':'BadResquest'}),400
    except:
        return jsonify({'status':'error'}),500
        
    return jsonify({'status':'ok','data':res}),200

app.run(port=8000)
