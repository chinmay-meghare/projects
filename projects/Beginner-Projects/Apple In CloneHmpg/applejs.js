var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1.5", //total no. of slides per view: 1 slides and half part(0.5) of another slides
    centeredSlides: true, //slides are always stopping at the centre
    spaceBetween: 15, //space between slides
    autoplay: { 
        delay: 2500, //delaytime:2.5 sec
        disableOnInteraction: false, // If made true them when we will hover on tha slide then the scrolling(interaction) will stop//
      },
    pagination: {
      el: ".swiper-pagination", //for the bullets page no. dots below slides, currently it's not appearing.
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
  });
  

function store() {
  let output1 = `<section class="mega2">
                <ul>
                <li>Shop</li>
                <li>Shop the Latest</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Apple Watch</li>
                <li>Accessories</li>
                </ul>
                <ul>
                <li>Quick Links</li>
                <li>Find a Store</li>
                <li>Order Status</li>
                <li>Ways to buy</li>
                </ul>
                <ul>
                <li>Shop Special Stores</li>
                <li>Education</li>
                <li>Business</li>
                </ul>
            </section>`;

  const navElement = document.querySelector('.nav');
  navElement.innerHTML = output1; // Insert mega menu into the nav
  navElement.style.display = 'block'; // Show the mega menu
  navElement.style.maxHeight = '500px'; // Trigger the transition
}

function closenav() {
  const navElement = document.querySelector('.nav');
  navElement.style.maxHeight = '0'; // Close the mega menu with transition
  setTimeout(() => {
    navElement.style.display = 'none'; // Hide the nav after transition ends
  }, 300); // Match this duration with the CSS transition duration
}
