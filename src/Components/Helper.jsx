const THEME_NAME = {
    Dark: 'dark',
    Light: 'light'
};

const LANGUAGE_NAME = {
    RU: 'ru',
    EN: 'en'
};

const buttons_ru = {
    'ru_language': 'ру',
    'en_language': 'англ',
    'dark': 'тёмная',
    'light': 'светлая',
    'print': 'Печать'
}

const buttons_en = {
    'ru_language': 'ru',
    'en_language': 'en',
    'dark': 'dark',
    'light': 'light',
    'print': 'Print'
}
export const buttonsDictionary = {
    'ru': buttons_ru,
    'en': buttons_en
}

export const getThemeName = (currentName, currentLanguage) => {
    return currentName === THEME_NAME.Dark ? buttonsDictionary[currentLanguage].light : buttonsDictionary[currentLanguage].dark
}

export const getTheme = (currentName) => {
    return currentName === THEME_NAME.Dark ? THEME_NAME.Light : THEME_NAME.Dark;
}

export const getLanguageName = (currentLanguage) => {
    return currentLanguage === LANGUAGE_NAME.RU ? buttonsDictionary[currentLanguage].en_language : buttonsDictionary[currentLanguage].ru_language;
}

export const getLanguage = (currentLanguage) => {
    return currentLanguage === LANGUAGE_NAME.RU ? LANGUAGE_NAME.EN : LANGUAGE_NAME.RU;
}

export const highlightKeywords = (text) => {
    const keywords = [
        'PHP 7.4', 'PHP 8.1', 'Symfony 5.4', 'JS',
        'Docker', 'Git', 'Jira', 'OAuth 2.0', 'jQuery', 'Twig',
        'Memcached', 'APC', 'RabbitMQ', 'MySQL', 'Redis', 'AWS Lambda', 'SQL',
        'Confluence', 'Google, Apple ID', 'customer.io', 'Firebase', 'CI/CD', 'GitHub Actions'
    ];
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

    return text.replace(regex, '<b>$1</b>');
};