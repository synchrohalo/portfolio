$( document ).ready(function() {

  var isPlaying = false;

  // initialize gif playing in DT project
	var playGifReady = function(){
		$( ".gif-play" ).click( function(){
      if(!isPlaying){
				var id = $( this ).attr( "id" );
				$( this ).attr( "src", "../img/works/design/" + id + ".gif" );

        isPlaying = true;
      }
      else{
        var id = $( this ).attr( "id" );
				$( this ).attr( "src", "../img/works/design/" + id + ".png" );
  
        isPlaying = false;
      }
		});
	}
	
	playGifReady();
});