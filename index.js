document.addEventListener( 'DOMContentLoaded', function() {
    let mybutton = document.getElementById( "toTop" );
    mybutton.classList.add( "hidden" );

    const targetClass = 'nav-menu__mobile';
    const body = document.body;

    document.querySelector('#add-item-dropdown').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });

});

window.onscroll = function()
{
    scrollFunction()
};

function scrollFunction()
{
    let mybutton = document.getElementById( "toTop" );
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
    {
        mybutton.classList.remove( "hidden" );
    }
    else
    {
        mybutton.classList.add( "hidden" );
    }
}

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
