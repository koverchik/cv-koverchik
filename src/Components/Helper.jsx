const THEME_NAME = {
    Dark: 'dark',
    Light: 'light'
};

const LANGUAGE_NAME = {
    RU: 'ru',
    EN: 'en'
};

export const getThemeName  = (currentName) =>{
    return currentName === THEME_NAME.Dark ? THEME_NAME.Light : THEME_NAME.Dark;
}

export const getLanguageName  = (currentLanguage) =>{
    return currentLanguage === LANGUAGE_NAME.RU ? LANGUAGE_NAME.EN : LANGUAGE_NAME.RU;
}