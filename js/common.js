function switchLang(lang) {
    var path = window.location.pathname;
    var pathWithoutLang = path.slice(4,path.length);
    var newUrl = '/' + lang + '/' + pathWithoutLang;
    window.location.href = newUrl;
}
