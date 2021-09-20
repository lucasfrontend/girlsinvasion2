var text = {
    "Virtual Folio - Martinez Lucas": {
        en: "Lucas Martinez - Portfolio"
    },
    "Welcome": {
        en: "Hola"
    }
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var translator = $('body').translate({ lang: "en", t: text }); //use English
if (getUrlParameter('lang') == 'pt') {
    translator.lang("pt");
}