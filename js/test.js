const species = [
    gremlins.species.formFiller(),
    gremlins.species.clicker({ clickerTipe: ['click'] }),
    gremlins.species.typer(),
]

const mogwais = [
    gremlins.mogwais.gizmo(),
    gremlins.mogwais.alert(),
    gremlins.mogwais.fps(),
]

function run(){
    const horde = gremlins.createHorde({ species, mogwais });
    horde.unleash();
}

$( 'button.btn-warning' ).click( run );
