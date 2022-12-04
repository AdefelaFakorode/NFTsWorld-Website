let carts = document.querySelectorAll('.add-cart');



let products = [
{   
    name: 'Bored Ape Club #2201',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2202',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2203',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2204',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2205',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2206',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2207',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2208',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2209',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2210',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2211',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2212',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2213',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2214',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2215',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2216',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2218',
    inCart: 0
},
{   
    name: 'Bored Ape Club #2219',
    inCart: 0
},
{   
    name: 'Cool Cat #1001',
    inCart: 0
},
{   
    name: 'Cool Cat #1002',
    inCart: 0
},
{   
    name: 'Cool Cat #1003',
    inCart: 0
},
{   
    name: 'Cool Cat #1004',
    inCart: 0
},
{   
    name: 'Cool Cat #1005',
    inCart: 0
},
{   
    name: 'Cool Cat #1006',
    inCart: 0
},
{   
    name: 'Cool Cat #1007',
    inCart: 0
},
{   
    name: 'Cool Cat #1008',
    inCart: 0
},
{   
    name: 'Cool Cat #1009',
    inCart: 0
},
{   
    name: 'Cool Cat #1010',
    inCart: 0
},
{   
    name: 'Cool Cat #1011',
    inCart: 0
},
{   
    name: 'Cool Cat #1012',
    inCart: 0
}


]


for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();

    })

}

function cartNumbers() {
    let prodcutNumbers = localStorage.getItem('cartNumbers');

    if (prodcutNumbers){
        localStorage.setItem('cartNumbers', prodcutNumbers + 1);
        document.querySelector('.cart span').textContent = prodcutNumbers + 1;
    }
    
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    prodcutNumbers = parseInt(prodcutNumbers);
    localStorage.setItem('cartNumbers', 1);
}