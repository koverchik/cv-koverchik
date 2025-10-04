import './App.css';
import './Styles/Print.css';
import './Styles/Mobile.css';
import './Styles/MainBlock.css';
import './Styles/Contacts.css';
import './Styles/Button.css';
import './Styles/ButtonDownload.css';
import './Styles/CustomList.css';
import './Styles/Skils.css';
import './Styles/Footer.css';
import './Styles/index.css'
import useLocalStorage from 'use-local-storage'
import {getLanguage, getLanguageName, getTheme, getThemeName} from "./Components/Helper";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Main} from "./Components/Main";
import {Margin, usePDF} from 'react-to-pdf';
import {useEffect} from "react";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [buttonThemeName, setButtonThemeName] = useLocalStorage('buttonThemeName', getThemeName(theme, language));
    const [buttonLanguageName, setButtonLanguageName] = useLocalStorage('buttonLanguageName', getLanguageName(language));
    const {toPDF, targetRef} = usePDF({
        filename: 'koverchik_cv.pdf', method: 'open', page: {
            margin: Margin.SMALL, orientation: "portrait"
        }
    });
    useEffect(() => {
        setButtonThemeName(getThemeName(theme, language))
        setButtonLanguageName(getLanguageName(language))
    }, [language, setButtonLanguageName, setButtonThemeName, theme]);

    return (
        <div className="app" data-theme={theme} ref={targetRef}>
            <div>
                <div className="theme-container">
                    <div className="center">
                        <button onClick={() => setTheme(getTheme(theme))} className="btn">
                            <span> {buttonThemeName}</span>
                        </button>
                    </div>
                </div>
                <div className="language-container">
                    <div className="center">
                        <button onClick={() => setLanguage(getLanguage(language))} className="btn">
                            <span> {buttonLanguageName}</span>
                        </button>
                    </div>
                </div>
            </div>
            <Header language={language}/>
            <Main language={language}/>
            <Footer toPDF={toPDF} language={language}/>
        </div>
    );
}

export default App;
