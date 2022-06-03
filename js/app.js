const URLBASE = 'https://g.tenor.com/v1/search?';
const APIKEY = 	'IZZUJNM3UQHE';

const limitInput = $("#limit");
const cardContainer = $( 'section.row' )
const card = $( '#results' );
const searchInput = $( '#searchInput' );
const searchBtn = $( 'button' ).click( buscar );
const searchTextLabel = $( '#searchText' );
const cantTextLabel = $( '#cant' );

async function buscar () {
	const searchText = searchInput.val();
	const limit = limitInput.val();
	const queryText = encodeURIComponent( searchText );
	try {
		const { results } = await $.getJSON( `${URLBASE}q=${queryText}&media_filter=tinygif&limit=${limit}&key=${APIKEY}` );
        mostrar( searchText, limit, results );
	} catch( err ) {
		console.log( err.responseJSON.error.message
	}
}

function mostrar( searchText, limit, queryResults ) {
	cardContainer.html("");
    searchTextLabel.text( searchText );
    cantTextLabel.text( 'cantidad: ' + limit );
    
    queryResults.forEach( item =>{
        const url = item.media[0].tinygif.url;
        const tmplt = $( card ).clone();
        tmplt.find( '.card-text' ).text( item.content_description );
        tmplt.find( 'img.card-img-top' ).attr( 'src', url )
        cardContainer.append( tmplt );
    });

    cardContainer.removeClass( 'd-none' );
}
