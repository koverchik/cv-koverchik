export const textSummary = "Programmer with expertise in PHP and JavaScript, specializing in backend development. Proficient in using frameworks such as Symfony and React to create robust and scalable web applications. Possess strong leadership skills and have successfully led development teams in delivering software solutions.";

const THEME_NAME = {
    Dark: 'dark',
    Light: 'light'
};

export const getThemeName  = (currentName) =>{
    return currentName === THEME_NAME.Dark ? THEME_NAME.Light : THEME_NAME.Dark;
}