console.log('loading sketch demo');
var iframe = $( '#api-frame' )[ 0 ];
var version = '1.0.0';
var urlid = '4feb91b7e8a543cea282cc8fc8b921a6';

var client = new Sketchfab( version, iframe );

var error = function () {
    console.error( 'Error api Sketchfab !' );
};

var success = function ( api ) {

    api.start( function () {
        console.log("The viewer is ready to use.");
    } );

};

client.init( urlid, {
    success: success,
    error: error
} );