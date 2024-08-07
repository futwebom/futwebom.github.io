(function ($) {
    'use strict';
    $(document).on('ready', function () {   

		// Header Sticky
		const getHeaderId = document.getElementById("navbar");
		if (getHeaderId) {
			window.addEventListener('scroll', event => {
				const height = 10;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
			});
		}
 
		// topBanner Sticky
		const getBannerId = document.getElementById("topBanner");
		if (getBannerId) {
			window.addEventListener('scroll', event => {
				const height = 500;
				const { scrollTop } = event.target.scrollingElement;
				document.querySelector('#topBanner').classList.toggle('hidden', scrollTop >= height);
			});
		}
		 
		// Back to Top JS
		const getId = document.getElementById("backtotop");
		if (getId) {
			const topbutton = document.getElementById("backtotop");
			topbutton.onclick = function (e) {
				window.scrollTo({ top: 0, behavior: "smooth" });
			};
			window.onscroll = function () {
				if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
					topbutton.style.opacity = "1";
				} else {
					topbutton.style.opacity = "0";
				}
			};
		}

		// Masonry
        $('.masonry-grid').masonry({
            itemSelector: '.masonry-grid-item'
        });

		// Preloader JS
		const getPreloaderId = document.getElementById('preloader');
		if (getPreloaderId) {
			getPreloaderId.style.display = 'none';
		}
		
		// Banner Three Area TweenMax JS
		const getAboutId = document.getElementById("banner-three-area");
		if (getAboutId) {
			document.querySelector('.banner-three-area').addEventListener('mousemove', function(e) {
				var wx = window.innerWidth;
				var wy = window.innerHeight;
				var x = e.pageX - this.offsetLeft;
				var y = e.pageY - this.offsetTop;
				var newx = x - wx / 2;
				var newy = y - wy / 2;

				document.querySelectorAll('.banner-shape').forEach(function(element) {
					var speed = element.getAttribute('data-speed');
					if (element.getAttribute('data-revert')) {
						speed *= -0.8;
					}
					TweenMax.to(element, 1, {x: (1 - newx * speed), y: (1 - newy * speed)});
				});
			});
		}

		// OPT Code JS
		const getAboutsId = document.getElementById("banners-three-area");
		if (getAboutsId) {
			document.addEventListener('DOMContentLoaded', () => {
				const form = document.getElementById('otp-form')
				const inputs = [...form.querySelectorAll('input[type=text]')]
				const submit = form.querySelector('button[type=submit]')
			
				const handleKeyDown = (e) => {
					if (
						!/^[0-9]{1}$/.test(e.key)
						&& e.key !== 'Backspace'
						&& e.key !== 'Delete'
						&& e.key !== 'Tab'
						&& !e.metaKey
					) {
						e.preventDefault()
					}
			
					if (e.key === 'Delete' || e.key === 'Backspace') {
						const index = inputs.indexOf(e.target);
						if (index > 0) {
							inputs[index - 1].value = '';
							inputs[index - 1].focus();
						}
					}
				}
			
				const handleInput = (e) => {
					const { target } = e
					const index = inputs.indexOf(target)
					if (target.value) {
						if (index < inputs.length - 1) {
							inputs[index + 1].focus()
						} else {
							submit.focus()
						}
					}
				}
			
				const handleFocus = (e) => {
					e.target.select()
				}
			
				const handlePaste = (e) => {
					e.preventDefault()
					const text = e.clipboardData.getData('text')
					if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
						return
					}
					const digits = text.split('')
					inputs.forEach((input, index) => input.value = digits[index])
					submit.focus()
				}
			
				inputs.forEach((input) => {
					input.addEventListener('input', handleInput)
					input.addEventListener('keydown', handleKeyDown)
					input.addEventListener('focus', handleFocus)
					input.addEventListener('paste', handlePaste)
				})
			})  
		}

		document.addEventListener("DOMContentLoaded", function() {
			var listItems = document.querySelectorAll(".accordion .accordion-item");
		
			listItems.forEach(function(item) {
				item.addEventListener("click", function() {
					var activeItems = document.querySelectorAll(".accordion .accordion-item.active");
					activeItems.forEach(function(activeItem) {
						activeItem.classList.remove("active");
					});
					this.classList.add("active");
				});
			});
		});

		// Background Images JS
		// Find all elements with a "data-background" attribute
		var elements = document.querySelectorAll("[data-background]");

		// Loop through each element
		elements.forEach(function (element) {
			// Get the value of the "data-background" attribute
			var backgroundValue = element.getAttribute("data-background");

			// Set the "background-image" CSS property
			element.style.backgroundImage = "url(" + backgroundValue + ")";
		});
	});
  

	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			// Partner Slide JS
			var swiper = new Swiper(".partner-slide", {
				slidesPerView: 1,
				spaceBetween: 24,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 2,
					},
					340: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 5,
					},
					1200: {
						slidesPerView: 6,
					},
					1440: {
						slidesPerView: 6,
					},
				}
			});

			// Testomonial Slide JS
			var swiper = new Swiper(".testomonial-slide", {
				slidesPerView: 1,
				spaceBetween: 50,
				centeredSlides: false,
				preventClicks: true,
				autoHeight: true,
				loop: true, 
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
					1600: {
						slidesPerView: 4.5,
					},
				}
			});

			// Banner Slide 1 JS
			var smoothSwiper = new Swiper(".banner-slide-1", {
				slidesPerView: 1,
				spaceBetween: 0,
				space: 0,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				},
				speed:18000,
				direction: 'horizontal',
				zoom: true,
				keyboard: 
				{
					enabled: true,
					onlyInViewport: false,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					340: {
						slidesPerView: 1,
					},
					450: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					800: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2.5,
					},
					1440: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 3,
					},
					1881: {
						slidesPerView: 4,
					},
				}
			});

			// Banner Slide 2 JS
			var smoothSwiper = new Swiper(".banner-slide-2", {
				slidesPerView: 1,
				spaceBetween: 0,
				space: 0,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				},
				speed:18000,
				direction: 'horizontal',
				zoom: true,
				keyboard: 
				{
					enabled: true,
					onlyInViewport: false,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					370: {
						slidesPerView: 1.5,
					},
					450: {
						slidesPerView: 1,
					},
					450: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					800: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2.5,
					},
					1440: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 3.5,
					},
				}
			});

			// Banner Slide 3 JS
			var smoothSwiper = new Swiper(".banner-slide-3", {
				slidesPerView: 1,
				spaceBetween: 0,
				space: 0,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: false,
				},
				speed:18000,
				direction: 'horizontal',
				zoom: true,
				keyboard: 
				{
					enabled: true,
					onlyInViewport: false,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					450: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2.5,
					},
					1440: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				}
			});

			// Movies Slide JS
			var swiper = new Swiper(".movies-slide", {
				slidesPerView: 1,
				spaceBetween: 24,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1440: {
						slidesPerView: 6,
					},
				}
			});

			// Testomonial Slide Two JS
			var swiper = new Swiper(".testomonial-slide-two", {
				slidesPerView: 1,
				spaceBetween: 50,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				navigation: {
					nextEl: ".prev",
					prevEl: ".next",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1,
					},
					992: {
						slidesPerView: 2,
					},
					1440: {
						slidesPerView: 2,
					},
					1600: {
						slidesPerView: 2,
					},
				}
			});

			// Odometer JS
			if ("IntersectionObserver" in window) {  
				let counterObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
						let counter = entry.target;
						let target = parseInt(counter.innerText);
						let step = target / 200;
						let current = 0;
						let timer = setInterval(function () {
							current += step;
							counter.innerText = Math.floor(current);
							if (parseInt(counter.innerText) >= target) {
							clearInterval(timer);
							}
						}, 10);
						counterObserver.unobserve(counter);
						}
					});
				});
				let counters = document.querySelectorAll(".counter");
				counters.forEach(function (counter) {
					counterObserver.observe(counter);
				});
			}

			// Reviews Slide JS
			var swiper = new Swiper(".reviews-slide", {
				slidesPerView: 1,
				spaceBetween: 0,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				navigation: {
					nextEl: ".prev2",
					prevEl: ".next2",
				},
			});

			// Explore Speeds Slide JS
			var swiper = new Swiper(".explore-speeds-slide", {
				slidesPerView: 1,
				spaceBetween: 24,
				centeredSlides: false,
				preventClicks: true,
				loop: true, 
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
					1600: {
						slidesPerView: 5,
					},
				}
			});


			// Popup Video
			$('.popup-video').magnificPopup({
				disableOn: 320,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});

			// Masonry
			$('.masonry-grid').masonry({
				itemSelector: '.masonry-grid-item'
			});
		});
    });
}(jQuery));