$(document).ready(function () {
    console.log("jQuery is working!");

    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css({
                'background': 'rgba(0, 0, 0, 0.95)',
                'box-shadow': '0 4px 20px rgba(0,0,0,0.5)',
                'padding': '10px 0'
            });
        } else {
            $('.navbar').css({
                'background': 'rgba(0, 0, 0, 0.8)',
                'box-shadow': 'none',
                'padding': '15px 0'
            });
        }
    });

    // 3. Smooth Scrolling for Nav Links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 65
            }, 300);
            $('.navbar-collapse').collapse('hide');
        }
    });

    // 4. Scroll Spy (Update Active Link on Scroll)
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function (i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav li.nav-item').removeClass('active');
                $('.navbar-nav li.nav-item').eq(i).addClass('active');
            }
        });
    }).scroll();

    // 5. Initialize Venobox
    if ($.isFunction($.fn.venobox)) {
        $('.venobox').venobox({
            bgcolor: '#1a1a1e',
            share: false,
            spinner: 'wave'
        });
    }

    // 6. Project Slider (Slick)
    var $slider = $('.project-slider');

    // Fix for icons inside Slick clones
    $slider.on('init breakpoint', function() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });

     // Initialize Slider
    $slider.slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    });
    // Force re-layout to fix width issues
    setTimeout(function() {
        $slider.slick('setPosition');
    }, 500);

    // 7. Form Submission
    $('form').on('submit', function (e) {
        e.preventDefault();
        const btn = $(this).find('.btn-custom');
        const originalText = btn.text();
        btn.text('Sending...').attr('disabled', true);
        
        setTimeout(() => {
            alert('Thank you, Prantika! Your message has been "sent" (simulated).');
            btn.text(originalText).attr('disabled', false);
            $(this).trigger('reset');
        }, 2000);
    });

    
});


$(document).ready(function() {
    var $slider = $('.project-slider');

    // Fix for icons inside Slick clones
    $slider.on('init breakpoint', function() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }


        // 8. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120
        });
    }
    
        setTimeout(function() {
    $('.project-slider').slick('setPosition');
}, 500);
    });
});


// ১. EmailJS Initialize করা
// (function() {
//     emailjs.init("pJDDpiDCrGc1h6zWq"); // Public Key
// })();

// // ২. উইন্ডো লোড হওয়ার পর ফর্ম লিসেনার সেট করা
// window.onload = function() {
//     const contactForm = document.getElementById('contact-form');
    
//     // চেক করা হচ্ছে ফর্মটি পেজে আছে কি না
//     if(contactForm) {
//         contactForm.addEventListener('submit', function(event) {
//             event.preventDefault(); // পেজ রিলোড হওয়া বন্ধ করবে
            
//             // সাবমিট বাটন এবং সেটির মূল টেক্সট ধরা
//             const submitBtn = this.querySelector('button');
//             const originalBtnText = submitBtn.innerText;
            
//             // পাঠানোর সময় বাটনের অবস্থা পরিবর্তন
//             submitBtn.innerText = 'Sending...';
//             submitBtn.disabled = true;

//             // EmailJS এর মাধ্যমে ইমেইল পাঠানো
//             // service_id এবং template_id এখানে বসানো হয়েছে
//             emailjs.sendForm('service_nwdydu9', 'template_r23llys', this)
//                 .then(function() {
//                     // সফলভাবে মেসেজ গেলে
//                     alert('ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে।');
//                     contactForm.reset(); // ফর্মের সব টেক্সট মুছে দিবে
//                 }, function(error) {
//                     // কোনো ভুল হলে
//                     alert('দুঃখিত! মেসেজ পাঠানো যায়নি। দয়া করে আপনার ইন্টারনেট চেক করুন।');
//                     console.error('EmailJS Error:', error);
//                 })
//                 .finally(function() {
//                     // কাজ শেষ হওয়ার পর বাটন আগের অবস্থায় ফিরিয়ে আনা
//                     submitBtn.innerText = originalBtnText;
//                     submitBtn.disabled = false;
//                 });
//         });
//     }
// };


(function() {
    // আপনার পাবলিক কি pJDDpiDCrGc1h6zWq
    emailjs.init("pJDDpiDCrGc1h6zWq");
})();

// ফর্ম সাবমিট হ্যান্ডলার
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const btn = this.querySelector('button');
    btn.innerText = 'Sending...';

    // আপনার আইডিগুলো ব্যবহার করে
    emailjs.sendForm('service_u7gx33x', 'template_1y8g8ca', this)
        .then(function() {
            alert('Your message has been sent successfully! ');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Error: ' + JSON.stringify(error));
        })
        .finally(() => {
            btn.innerText = 'Send Message';
        });
});