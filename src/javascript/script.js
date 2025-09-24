$(document).ready(function(){
    $('#mobile-btn').on('click', function () {      
        $('#mobile-menu').toggleClass('active');    
        $('#mobile-btn').find('i').toggleClass('fa-bars fa-xmark'); 
    });

    $('#nav-list .nav-item a, #mobile-nav-list .nav-item a').on('click', function(e) {
        const targetId = $(this).attr('href');
        if (targetId && targetId.startsWith('#') && $(targetId).length) {
            e.preventDefault();
            const headerHeight = $('header').outerHeight();
            const targetOffset = $(targetId).offset().top - headerHeight + 1;
            $('html, body').animate({ scrollTop: targetOffset }, 500);

            $('#mobile-menu').removeClass('active');
            $('#mobile-btn').find('i').removeClass('fa-xmark').addClass('fa-bars');
        }
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const headerHeight = header.outerHeight();
        const scrollPosition = $(window).scrollTop();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - headerHeight;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    $(".btn-toggle").on("click", function(){
        let $btn = $(this);
        let $detalhes = $btn.closest(".servico").find(".servico-detalhes");

        if ($detalhes.is(":visible")) {
            $detalhes.slideUp(400, function() {
                $btn.text("Saiba mais");
                setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
            });
        } else {
            $detalhes.slideDown(400, function() {
                $btn.text("Fechar");
                setTimeout(() => window.dispatchEvent(new Event('resize')), 50);
            });
        }
    });

    $(".carousel").each(function(){
        let $carousel = $(this);
        let $track = $carousel.find(".carousel-track");
        let $items = $carousel.find(".carousel-item");
        let index = 0;

        $carousel.find(".next").on("click", function(){
            index = (index + 1) % $items.length;
            $track.css("transform", `translateX(-${index * 100}%)`);
        });

        $carousel.find(".prev").on("click", function(){
            index = (index - 1 + $items.length) % $items.length;
            $track.css("transform", `translateX(-${index * 100}%)`);
        });
    });
});
    
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1850,
        distance: '20%',
        reset: true 
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 1850,
        distance: '20%',
        reset: true        
    });

    ScrollReveal().reveal('.shape', {
        origin: 'right',
        duration: 1850,
        distance: '20%',
        reset: true         
    });

    ScrollReveal().reveal('#sobremim-foto', {
        origin: 'left',
        duration: 1600,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('#sobremim-content', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('.servico-content-right', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('.servico-foto-right', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('.servico-content-left', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('.servico-foto-left', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true     
    })


    ScrollReveal().reveal('#avaliacoes-foto', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
        reset: true 
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
        reset: true 
    })