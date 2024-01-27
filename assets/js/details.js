async function getEachProduct(){
    const urlParams=new URLSearchParams(window.location.search);
    const productId= urlParams.get('id');
    console.log(productId);

    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    const data =response.data;
    console.log(data);

    const {title ,description,price,category,thumbnail,images,discountPercentage}=data;
    console.log(images);

    const result=`</h1><h2 class="title">${title}</h2>
                   <span class="category">"${category}"</span>
                   <p class="desc">${description}</p>
                   <div class="swiper">
                   <!-- Additional required wrapper -->
                   <div class="swiper-wrapper">
                     <!-- Slides -->
           
                     ...
                   </div>
                   <!-- If we need pagination -->
                   <div class="swiper-pagination"></div>
                 </div>
                 <div class=priseDis>
                 <span class="discount">${discountPercentage}$ OFF</span>
                 <span class="price">${price}$</span>
                 </div>

                   <a href="./index.html">Back</a>
            `;
            document.querySelector('.product').innerHTML=result;
            


/************************* swiper for images****************/
        
       const swiperResult=images.map(function(image)
       {
        console.log(image);
        return `<img class="swiper-slide" src="${image}"/>`;

       }).join('');
       
    
        document.querySelector('.product .swiper-wrapper').innerHTML=swiperResult;

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

                autoplay: {
                  delay: 2000,
                },

                slidesPerView: 1,
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

getEachProduct();
