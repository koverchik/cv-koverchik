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