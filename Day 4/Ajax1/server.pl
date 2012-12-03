# Automatically enables "strict", "warnings" and Perl 5.10 features
use Dancer;

set public => '.';

my $data = {
    ideas => [
        { id => 'slayer', title => 'Zombie Slayer', text => 'Kill zombies and eat their brainz'},
        { id => 'mad', title => 'Mad Zombie', text => 'Kill humans and eat their brainz'},
        { id => 'vampire', title => 'Vampire Slayer Ultimate', text => 'Take over the world'},
    ]
};

# Route with placeholder
get '/' => sub {
    send_file './index.html';
};

get '/data/:idx' => sub {
    content_type 'application/json';
    my $idx = param 'idx';
    return to_json($data->{ideas}->[$idx]);
};

dance;
