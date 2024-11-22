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

function moveFiltersToMobile(el) {
    const filters = document.getElementById('product-filters');
    const mobileFilters = document.getElementById('product-filters-mobile');
    while (filters.firstChild) {
        mobileFilters.appendChild(filters.firstChild);
    }
    el.onclick = function () {
        moveFiltersBack(el);
    };
    el.textContent = "Close Filters"; // Update button text
}

function moveFiltersBack(el) {
    const filters = document.getElementById('product-filters');
    const mobileFilters = document.getElementById('product-filters-mobile');
    while (mobileFilters.firstChild) {
        filters.appendChild(mobileFilters.firstChild);
    }
    el.onclick = function () {
        moveFiltersToMobile(el);
    };
    el.textContent = "Open Filters"; // Update button text
}

