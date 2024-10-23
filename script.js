let allProducts = [];

  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    console.log(json);

    allProducts = json;
    displayProducts(allProducts);
  });


  function displayProducts(products) {

    let productE1 = "";

    for (let product of products) {
      productE1 += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 product">
          <div class="card h-100 w-100 ">
            <img id="cardimg" src="${product.image}" class="card-img-top " alt="...">
            <div class="card-body" d-flex flex-column">
              <h5 class="card-title">${product.title}</h5>
              <p class="text-success">$${product.price}</p>
               <p class="card-content" id="product-description">${product.description}</p>
                 <div class="mb-auto d-flex justify-content-around">
                 <button class="btn btn-warning">View Product</button>
                 <button  class="btn btn-primary">Add to cart</button>
                 </div>
               </div>
             </div>
          </div>
        `;
    }

    let productList = document.getElementById('product-list');
    productList.innerHTML = productE1;
 
  };


 
const searchInput = document.getElementById('search');

searchInput.addEventListener('input',(event)=>{
  const searchTerm = event.target.value.toLowerCase();
  
 
  const filteredProducts = allProducts .filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm))


    displayProducts(filteredProducts); 

});


  




