$( document ).ready(function() {

  var isPlaying = false;

  // initialize GIF playing in DT project
	var playGifReady = function(){
		$( ".gif-play" ).click( function(){
      if( !isPlaying ){
				var id = $( this ).attr( "id" );
				$( this ).attr( "src", "../img/works/design/" + id + ".gif" );

        isPlaying = true;
      } // on click, if not playing, change to to animated GIF
      else{
        var id = $( this ).attr( "id" );
				$( this ).attr( "src", "../img/works/design/" + id + ".png" );
  
        isPlaying = false;
      } // else, stop playing and change back to static PNG
		});
	}
	
	playGifReady();
});