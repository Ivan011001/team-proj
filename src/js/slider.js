  const swiper = new swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: { enable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
