/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/27/12
 * Time: 10:13 AM
 * To change this template use File | Settings | File Templates.
 */



var form   = document.querySelector('form');

form.addEventListener('input', function() {
    var inputs = document.querySelectorAll('input');
    var values = [];

    for ( var i=0; i < inputs.length; i++ ) {
        values.push( inputs[i].value );
    }

    var values_str = JSON.stringify(values);
    localStorage.setItem('values', values_str);

});

var values_str = localStorage.getItem('values');
var values     = JSON.parse(values_str);

console.log( values_str );
console.dir( values );
if ( values != null ) {
    var inputs = document.querySelectorAll('input');
    for ( var i=0; i < inputs.length; i++ ) {
        inputs[i].value = values[i];
    }
}





/*

 Can also use map
 var values = inputs.map( function(el) {
 return el.value;
 });

 */

