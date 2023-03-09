function switchLang(lang) {
    var path = window.location.pathname;
    var langPrefixIndex = lang === 'de' ? path.indexOf('/en/') : path.indexOf('/de/');
    var hasLangPrefix = langPrefixIndex !== -1;
    var newLangPrefix = '/' + lang + '/';
    
    if (hasLangPrefix) {
        window.location.href = newLangPrefix + path.substr(4);
    } else {
        window.location.href = newLangPrefix;
    }
}
