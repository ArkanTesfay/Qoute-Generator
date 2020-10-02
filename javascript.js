// Get Qoute From API
const qoute_Container=document.getElementById("quote-container");
const qoute_Text=document.getElementById("quote");
const author_Text=document.getElementById("author");
const twitter_Button=document.getElementById('twitter');
const new_Button=document.getElementById('new-quote');





async function getQoute()
{
	const proxy_url='https://cors-anywhere.herokuapp.com/';
	const api_irl='http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&lang=en&format=json';
	try{
		const response = await fetch(proxy_url+api_irl);
		const data = await response.json();
		if (data.quoteAuthor== '') {
			author_Text.innerText= "Unknown";
		}else{


		author_Text.innerText = data.quoteAuthor;
	}
		if (data.quoteText.length >150) 
		{
			qoute_Text.classList.add('long-qoute');
		}else{
			qoute_Text.classList.remove('long-qoute');
		}
		qoute_Text.innerText = data.quoteText;

	}catch(error){
		console.log('Whoops',error);
	}
}

function tweetQoute()
{
	const quote=qoute_Text.innerText;
	const author=author_Text.innerText;
	const twitter_url=`https://twitter.com/intent/tweet?text= ${quote} - ${author}`;
	window.open(twitter_url,'_blank');
}

new_Button.addEventListener('click',getQoute);
twitter_Button.addEventListener('click',tweetQoute)


//on Load 
getQoute();