let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
    //breakpoints
    breakpoints:{
      768:{
        slidesPerView:2
      },
      991:{
        slidesPerView:3
      },
      1199:{
        slidesPerView:4
      }
    },
    //space slides
    spaceBetween:"25px",
    //delay
    autoplay:{
      delay:2000,
    },
    //speed
    speed:2000,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let swipers = new Swiper('.secswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-most',
      prevEl: '.swiper-button-prev-most',
    },
    //breakpoints
    breakpoints:{
      768:{
        slidesPerView:2
      },
    },
    //space slides
    spaceBetween:"35px",
    //delay
    autoplay:{
      delay:2000,
    },
    //speed
    speed:2000,

  });