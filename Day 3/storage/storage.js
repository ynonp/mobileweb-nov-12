/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/27/12
 * Time: 9:47 AM
 * To change this template use File | Settings | File Templates.
 */

function getNumVisits() {
    var num_visits = localStorage.getItem('visits');

    // if a value was found
    if ( num_visits != null ) {
        return Number(num_visits);
    } else {
        return 0;
    }
}

function setNumVisits( visits ) {
    localStorage.setItem( 'visits', visits );
}


var dst_el = document.querySelector('.times');
var num_visits = getNumVisits();

dst_el.innerHTML = num_visits;

setNumVisits( num_visits + 1 );

/*
 * Wait for load event
 * Not needed if JS is at the bottom
 *
window.onload = function() {
    var dst_el = document.querySelector('.times');

}

*/