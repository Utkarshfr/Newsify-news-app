function verifySources(){
    if(document.getElementsByName('sources')[0].checked){
        document.getElementsByName('country')[0].disabled = true;
        document.getElementsByName('category')[0].disabled = true;
        document.getElementById('sourcesList').style.display = "block";
    }
    else{
        document.getElementsByName('country')[0].disabled = false;
        document.getElementsByName('category')[0].disabled = false;
        document.getElementById('sourcesList').style.display = "none";
    }
}

var toggleCountry = () => {
    if(document.getElementsByName('country')[0].checked){
        document.getElementById('countryList').style.display = "block";
    }
    else{
        document.getElementById('countryList').style.display = "none";
    }
}

function toggleFromDate(){
    if(document.getElementsByName('fromDate')[0].checked){
        document.getElementById('datefrom').style.display = "block";
    }
    else{
        document.getElementById('datefrom').style.display = "none";
    }
}

function toggleToDate(){
    if(document.getElementsByName('toDate')[0].checked){
        document.getElementById('dateto').style.display = "block";
    }
    else{
        document.getElementById('dateto').style.display = "none";
    }
}

function toggleSources(){
    if(document.getElementsByName('sources')[0].checked){
        document.getElementById('sourcesList').style.display = "block";
    }
    else{
        document.getElementById('sourcesList').style.display = "none";
    }
}

function toggleDomains(){
    if(document.getElementsByName('domains')[0].checked){
        document.getElementById('domainsList').style.display = "block";
    }
    else{
        document.getElementById('domainsList').style.display = "none";
    }
}

function toggleSortBy(){
    if(document.getElementsByName('sortBy')[0].checked){
        document.getElementById('sortByList').style.display = "block";
    }
    else{
        document.getElementById('sortByList').style.display = "none";
    }
}


var toggleCategory = () => {
    if(document.getElementsByName('category')[0].checked){
        document.getElementById('categoryList').style.display = "block";
    }
    else{
        document.getElementById('categoryList').style.display = "none";
    }
}


function toggleQuery(){
    if(document.getElementsByName('query')[0].checked){
        document.getElementById('query').style.display = "block";
    }
    else{
        document.getElementById('query').style.display = "none";
    }
}

function toggleqInTitle(){
    if(document.getElementsByName('qInTitle')[0].checked){
        document.getElementById('qInTitle').style.display = "block";
    }
    else{
        document.getElementById('qInTitle').style.display = "none";
    }
}

var getResults = () => {
    let sources = document.getElementsByName('sources')[0];
    let country = document.getElementsByName('country')[0];
    let category = document.getElementsByName('category')[0];
    let query = document.getElementsByName('query')[0];

    if(sources.checked === false && country.checked === false && category.checked === false && query.checked === false){
        alert("select atleast 1 filter");
        return;
    }
    x = {'fetch':'headlines'}
    if(sources.checked){
        x['source'] = document.getElementsByName('sourcesList')[0].value;
    }
    else{
        if(country.checked){x['country'] = document.getElementsByName('countryList')[0].value;}
        if(category.checked){x['category'] = document.getElementsByName('categoryList')[0].value;}
        if(query.checked && document.getElementById('querybox').value.trim() !== ""){x['query'] = document.getElementById('querybox').value.trim();}
    }
    fetch(`${window.origin}/fetch_data`,{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(x),
    })
    .then(function (response){
        if(response.status !== 200){
            alert("Failed to fetch data " + response.status);
            return;
        }
        return response.json()
    })
    .then(displayResponse)
    .catch(function (err){
        alert("Failed to fetch data");
    });
}

let countryCodes = {
    'United Arab Emirates':'ae',
    'Argentina':'ar',
    'Austria':'at',
    'Australia':'au',
    'Belgium':'be',
    'Bulgaria':'bg',
    'Brazil':'br',
    'Canada':'ca',
    'Switzerland':'ch',
    'China':'cn',
    'Colombia':'co',
    'Cuba':'cu',
    'Czechia':'cz',
    'Germany':'de',
    'Egypt':'eg',
    'France':'fr',
    'United Kingdom':'gb',
    'Greece':'gr',
    'Hong Kong':'hk',
    'Hungary':'hu',
    'Indonesia':'id',
    'Ireland':'ie', 
    'Israel':'il',
    'India':'in',
    'Italy':'it',
    'Japan':'jp',
    'Korea':'kr',
    'Lithuania':'lt',
    'Latvia':'lv',
    'Morocco':'ma',
    'Mexico':'mx',
    'Malaysia':'my',
    'Nigeria':'ng',
    'Netherlands':'nl',
    'Norway':'no',
    'New Zealand':'nz',
    'Philippines':'ph',
    'Poland':'pl',
    'Portugal':'pt',
    'Romania':'ro',
    'Serbia':'rs',
    'Russia':'ru',
    'Saudi Arabia':'sa',
    'Sweden':'se',
    'Singapore':'sg',
    'Slovenia':'si',
    'Slovakia':'sk',
    'Thailand':'th',
    'Turkey':'tr',
    'Taiwan':'tw',
    'Ukraine':'ua',
    'United States':'us',
    'Venezuela':'ve',
    'South Africa':'za',
    'Pakistan':'pk'
}


var sourceCodes = {
    'ABC News':'abc-news',
    'ABC News (AU)':'abc-news-au',
    'Aftenposten':'aftenposten',
    'Al Jazeera English':'al-jazeera-english',
    'ANSA.it':'ansa',
    'Argaam':'argaam',
    'Ars Technica':'ars-technica',
    'Ary News':'ary-news',
    'Associated Press':'associated-press',
    'Australian Financial Review':'australian-financial-review',
    'Axios':'axios',
    'BBC News':'bbc-news',
    'BBC Sport':'bbc-sport',
    'Bild':'bild',
    'Blasting News (BR)':'blasting-news-br',
    'Bleacher Report':'bleacher-report',
    'Bloomberg':'bloomberg',
    'Breitbart News':'breitbart-news',
    'Business Insider':'business-insider',
    'Business Insider (UK)':'business-insider-uk',
    'Buzzfeed':'buzzfeed',
    'CBC News':'cbc-news',
    'CBS News':'cbs-news',
    'CNN':'cnn',
    'CNN Spanish':'cnn-es',
    'Crypto Coins News':'crypto-coins-news',
    'Der Tagesspiegel':'der-tagesspiegel',
    'Die Zeit':'die-zeit',
    'El Mundo':'el-mundo',
    'Engadget':'engadget',
    'Entertainment Weekly':'entertainment-weekly',
    'ESPN':'espn',
    'ESPN Cric Info':'espn-cric-info',
    'Financial Post':'financial-post',
    'Focus':'focus',
    'Football Italia':'football-italia',
    'Fortune':'fortune',
    'FourFourTwo':'four-four-two',
    'Fox News':'fox-news',
    'Fox Sports':'fox-sports',
    'Globo':'globo',
    'Google News':'google-news',
    'Google News (Argentina)':'google-news-ar',
    'Google News (Australia)':'google-news-au',
    'Google News (Brasil)':'google-news-br',
    'Google News (Canada)':'google-news-ca',
    'Google News (France)':'google-news-fr',
    'Google News (India)':'google-news-in',
    'Google News (Israel)':'google-news-is',
    'Google News (Italy)':'google-news-it',
    'Google News (Russia)':'google-news-ru',
    'Google News (Saudi Arabia)':'google-news-sa',
    'Google News (UK)':'google-news-uk',
    'Goteborgs-Posten':'goteborgs-posten',
    'Gruenderszene':'gruenderszene',
    'Hacker News':'hacker-news',
    'Handelsblatt':'handelsblatt',
    'IGN':'ign',
    'Il Sole 24 Ore':'il-sole-24-ore',
    'Independent':'independent',
    'Infobae':'infobae',
    'InfoMoney':'info-money',
    'La Gaceta':'la-gaceta',
    'La Nacion':'la-nacion',
    'La Repubblica':'la-repubblica',
    'Le Monde':'le-monde',
    'Lenta':'lenta',
    "L'equipe":'lequipe',
    'Les Echos':'les-echos',
    'Liberation':'liberation',
    'Marca':'marca',
    'Mashable':'mashable',
    'Medical News Today':'medical-news-today',
    'MSNBC':'msnbc',
    'MTV News':'mtv-news',
    'MTV News (UK)':'mtv-news-uk',
    'National Geographic':'national-geographic',
    'National Review':'national-review',
    'NBC News':'nbc-news',
    'News24':'news24',
    'New Scientist':'new-scientist',
    'News.com.au':'news-com-au',
    'Newsweek':'newsweek',
    'New York Magazine':'new-york-magazine',
    'Next Big Future':'next-big-future',
    'NFL News':'nfl-news',
    'NHL News':'nhl-news',
    'NRK':'nrk',
    'Politico':'politico',
    'Polygon':'polygon',
    'RBC':'rbc',
    'Recode':'recode',
    'Reddit /r/all':'reddit-r-all',
    'Reuters':'reuters',
    'RT':'rt',
    'RTE':'rte',
    'RTL Nieuws':'rtl-nieuws',
    'SABQ':'sabq',
    'Spiegel Online':'spiegel-online',
    'Svenska Dagbladet':'svenska-dagbladet',
    'T3n':'t3n',
    'TalkSport':'talksport',
    'TechCrunch':'techcrunch',
    'TechCrunch (CN)':'techcrunch-cn',
    'TechRadar':'techradar',
    'The American Conservative':'the-american-conservative',
    'The Globe And Mail':'the-globe-and-mail',
    'The Hill':'the-hill',
    'The Hindu':'the-hindu',
    'The Huffington Post':'the-huffington-post',
    'The Irish Times':'the-irish-times',
    'The Jerusalem Post':'the-jerusalem-post',
    'The Lad Bible':'the-lad-bible',
    'The Next Web':'the-next-web',
    'The Sport Bible':'the-sport-bible',
    'The Times of India':'the-times-of-india',
    'The Verge':'the-verge',
    'The Wall Street Journal':'the-wall-street-journal',
    'The Washington Post':'the-washington-post',
    'The Washington Times':'the-washington-times',
    'Time':'time',
    'USA Today':'usa-today',
    'Vice News':'vice-news',
    'Wired':'wired',
    'Wired.de':'wired-de',
    'Wirtschafts Woche':'wirtschafts-woche',
    'Xinhua Net':'xinhua-net',
    'Ynet':'ynet'
}



let displayResponse = (data) => {
    console.log(data);
    let node = document.getElementsByClassName('data-stack')[0];
    node.innerHTML = "";
    let articles = data['data']['articles'];
    for(let i=0;i<articles.length;i++){
        node.innerHTML += `<div class="newsbox">
            <img src="${articles[i]['urlToImage']}">
            <h2 style="margin-top: 8px"><a href="${articles[i]['url']}" target="_blank">${articles[i]['title']}</a></h2>
            <p>${articles[i]['description']}</p>
            <span class="source-name">${articles[i]['source']['name']}</span>
            <span class="timestamp">${parseDate(articles[i]['publishedAt'])}</span>
        </div>`

    }
}

let showCountry = () => {
    let select = document.getElementsByName('countryList')[0];
    console.log(select);
    for(let i in countryCodes){
        let node = document.createElement('option');
        node.value = countryCodes[i];
        node.innerHTML = i;
        select.appendChild(node);
    }
}

function fillSourceTags(){
    let select = document.getElementsByName('sourcesList')[0];
    for(let i in sourceCodes){
        select.innerHTML += `<option value=${sourceCodes[i]}>${i}</option>`;
    }
}

function fillCountryTags(){
    let select = document.getElementsByName('countryList')[0];
    for(let i in countryCodes){
        let node = document.createElement('option');
        node.value = countryCodes[i];
        node.innerHTML = i;
        if(i === 'United States'){
            node.selected = true;
            console.log(1);
        }
        select.appendChild(node);
    }
}

function fillSourceDataList(){
    let node = document.getElementById('sList');
    for(let i in sourceCodes){
        node.innerHTML += `<option value="${sourceCodes[i]}">${i}</option>`
    }
}

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}


let getKey = (obj,value) => {
    for(let key in obj)
        if(obj[key] == value){
            return key;
        }
}


function displaySourcesData(data){
    console.log(data);
    let sourcesList = data['sources'];
    let node = document.getElementsByClassName('data-stack')[0];
    node.innerHTML = "";
    for(let i=0;i < sourcesList.length;i++){
        node.innerHTML += `<div class="newsbox">
        <h2 style="margin-top: 8px;"><a href="${sourcesList[i]['url']}" target="_blank">${sourcesList[i]['name']}</a></h2>
        <p>${sourcesList[i]['description']}</p>
        <span class="source-name">${sourcesList[i]['category']}</span>
        <span class="timestamp">${sourcesList[i]['language']}</span><br>
        <span class="source-name">${getKey(countryCodes,sourcesList[i]['country'])}</span>
    </div>`;
    }
}

function filterSourceResults(data){
    let country = document.getElementsByName('country')[0];
    let category = document.getElementsByName('category')[0];
    if(country.checked === false && category.checked === false){
        alert("select atleast 1 filter");
        return;
    }

    x = {'fetch':'source'};
    if(country.checked){x['country'] = document.getElementsByName('countryList')[0].value;}
    if(category.checked){x['category'] = document.getElementsByName('categoryList')[0].value;}
    console.log(x);

    fetch(`${window.origin}/fetch_data`,{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(x),
    })
    .then(function (response){
        if(response.status !== 200){
            alert("Failed to fetch data " + response.status);
            return;
        }
        
        return response.json();
    })
    .then(function(pendingPromise){
        return pendingPromise.data;
    })
    .then(displaySourcesData)
    .catch(function (err){
        alert("Failed to fetch data"+err);
    });
}

function getLatestData(data){
    let sortby = document.getElementsByName('sortBy')[0];
    let sources = document.getElementsByName('sources')[0];
    let domains = document.getElementsByName('domains')[0];
    let q = document.getElementsByName('query')[0];
    let qit = document.getElementsByName('qInTitle')[0];
    let from = document.getElementsByName('fromDate')[0];
    let to = document.getElementsByName('toDate')[0];
    if(from.checked === false && to.checked === false && sortby.checked === false && sources.checked === false && domains.checked === false && q.checked === false && qit.checked === false){
        alert("Choose atleast 1 filter");
        return;
    }

    x = {'fetch':'latest'};
    if(to.checked && from.checked && document.getElementById('toDateBox').value < document.getElementById('fromDateBox').value){alert("Choose to date ahead of from date"); return;}
    if(sortby.checked){x['sortBy'] = document.getElementsByName('sortByList')[0].value;}
    if(sources.checked){x['sources'] = document.getElementsByName('sourcesList')[0].value;}
    if(domains.checked){x['domains'] = document.getElementById('domainsBox').value;}
    if(q.checked){x['q'] = document.getElementById('querybox').value;}
    if(qit.checked){x['qInTitle'] = document.getElementById('qInTitlebox').value;}
    if(to.checked){x['to'] = document.getElementById('toDateBox').value;}
    if(from.checked){x['from'] = document.getElementById('fromDateBox').value;}
    console.log(x);

    fetch(`${window.origin}/fetch_data`,{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(x),
    })
    .then(function (response){
        if(response.status !== 200){
            alert("Failed to fetch data " + response.status);
            return;
        }
        return response.json();
    })
    .then(function(pendingPromise){
        console.log(pendingPromise);
        return pendingPromise;
    })
    .then(displayLatestData)
    .catch(function (err){
        alert("Failed to fetch data"+err);
    });
}

function parseDate(UTC){
    var dt = new Date(UTC);
    return dt.toLocaleDateString() + " " + dt.toLocaleTimeString();
}

function displayLatestData(data){
    console.log(data);
    data = data.data.articles;
    let node = document.getElementsByClassName('data-stack')[0];
    console.log(data);
    node.innerHTML = "";
    for(let d of data){
        node.innerHTML += `<div class="newsbox">
        <img src="${d['urlToImage']}">
        <h2 style="margin-top: 8px;"><a href="${d['url']}" target="_blank">${d['title']}</a></h2>
        <p>${d['description']}</p>
        <span class="source-name">${d['source']['name']}</span>
        <span class="timestamp">${parseDate(d['publishedAt'])}</span>
    </div>`
    }
}