/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/22/12
 * Time: 4:02 PM
 * To change this template use File | Settings | File Templates.
 */


(function() {

    var enlargeImage = function( ev ) {

        if ( ev.target.nodeName === 'IMG' ) {
            ev.target.classList.toggle('large');
        }
        console.dir( ev.target );
    };

    var ul = document.querySelector('ul');
    ul.addEventListener('click', enlargeImage);


}());