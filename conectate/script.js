$(function() {

    /* btn mobile responsive */
    let $btnMobile = $('.btn-mobile');

    $btnMobile.on('click', function () {
        $('.rowOptions').toggle();
        $('.rowContentOne').css('z-index', '5');

    });

    /**Cambio de tema bg on button */
    let $body = $('body'),
        $button = $('#butt');
     $('button').on('click', function () {
         if ($body.attr('id') == 'dark') {
             $body.attr('id', 'white');
             $button.text('negro');
         } else {
             $body.attr('id', 'dark');
             $button.text('blanco');
         }

     });
    
    let TOPIC = '<label for="" id="areatextLabel"> - Sitio web: <a href="https://portalmybot.com/" target="_blank">portalmybot</a></label>'
    /*DateTime*/
    let fecha = new Date(),
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth() + 1,
        anio = fecha.getFullYear();

    if(dia < 10){
        dia = '0'+dia
    }

    if (mes < 10) {
        mes = '0'+ mes;
    }
    /* Arranque General*/
    let $areaTextHeader = $('#areatextTitle');
    $('#FechaNickName').text(`${dia}/${mes}/${anio}`);

    
    /************/
    /*** Portal **/
    $('.img-adaptable').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                
            })
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                
            });
        },
        click: function () {
            let URLimagen = $(this).attr('src');
            $('.rowModalImage').fadeOut(300, function () {
                $('.body-modal img').attr('src', URLimagen);

            }).fadeIn(300)
        }
    });
    
    $(".rowModalImage").click(function () {
        $('.rowModalImage').fadeOut(300);

    });

    let $optinfo = $('.info'),
        $optanuncios = $('.anuncios'),
        $optgeneral = $('.general'),
        $optcomandos = $('.comandos');

    let $idinfo = $('#informacion'),
        $idanuncios = $('#anuncios'),
        $idgeneral = $('#general'),
        $idcomandos = $('#comandos');

    /*Arranque*/ 
    $optinfo
        .addClass('active')
        .siblings()
        .removeClass('active');

    $idinfo
        .show()
        .siblings()
        .hide()
    $areaTextHeader.html(`# Informacion
                <label for="" id="areatextLabel"> |  Información del canal </label>
                ${TOPIC}
            `);
    

    /*Canales opt*/
    $($optinfo).on('click', function () {
        $optinfo
            .addClass('active')
            .siblings()
            .removeClass('active');
        $optgeneral
            .removeClass('active')
            .siblings()
            .removeClass('active');

        $idinfo
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# informacion
                <label for="" id="areatextLabel"> |  Información del canal </label>
                ${TOPIC}
            `);

    });

    $($optanuncios).on('click', function () {
        $optanuncios
            .addClass('active')
            .siblings()
            .removeClass('active');
        $optgeneral
            .removeClass('active')
            .siblings()
            .removeClass('active');
        $idanuncios
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# anuncios
                <label for="" id="areatextLabel"> |  Anuncios del servidor </label>
                ${TOPIC}
            `);
    });

    $($optgeneral).on('click', function(){
        $optinfo
            .removeClass('active')
            .siblings()
            .removeClass('active');
        
        $optgeneral
            .addClass('active')
            .siblings()
            .removeClass('active');
        $idgeneral
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# general
                <label for="" id="areatextLabel"> | Canal general </label>
                ${TOPIC}
            `);
    });

    $($optcomandos).on('click', function(){
        $optinfo
            .removeClass('active')
            .siblings()
            .removeClass('active');
        
        $optcomandos
            .addClass('active')
            .siblings()
            .removeClass('active');
        $idcomandos
            .show()
            .siblings()
            .hide();
        $areaTextHeader.html(`# comandos
                <label for="" id="areatextLabel"> | Comandos de bots </label>
                ${TOPIC}
            `);
    });

/******/ /******/ /******/ /******/
/******/ /******/ /******/ /******/

});