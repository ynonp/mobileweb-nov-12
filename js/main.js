/**
 * Created with JetBrains WebStorm.
 * User: ynonperek
 * Date: 11/22/12
 * Time: 3:06 PM
 * To change this template use File | Settings | File Templates.
 */
(function() {

    var Person = function( name ) {
        var self = {
            name: name,
            kills: {
                zombies: 7,
                vampires: 2,
                aliens: 19
            }
        };

        self.kill_a_zombie = function() {
            console.log( self.name + ' Killed a zombie');
            console.log('AAAAAAAAhhhhhhhHHH');
            self.kills.zombies += 1;
        };

        return self;
    };

    var jimmy = new Person( 'Jimmy' );
    jimmy.kill_a_zombie();


}());

