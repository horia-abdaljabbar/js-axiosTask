
async function getProducts(){
    const response =await axios.get('https://dummyjson.com/products'); 
        const data = response.data;
        const products= data.products;
        console.log(products);
        const result=products.map(function(product)
        {
            return ` <div class="product"> 
            <h2>${product.title}</h2><img src="${product.thumbnail}"/><span>${product.price}$</span>
                     <a href="./details.html?id=${product.id}">Details</a></div>`;
    
        }).join('');
    
        document.querySelector('.products').innerHTML=result;

        const swiperResult=products.map(function(product)
        {
            return `<img class="swiper-slide" src="${product.thumbnail}"/>`;
    
        }).join('');
        document.querySelector('.swiper-wrapper').innerHTML=swiperResult;


        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

                autoplay: {
                  delay: 2000,
                },

                slidesPerView: 4,
                spaceBetween: 10,
        
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });


}

getProducts();

