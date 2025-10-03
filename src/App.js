import './Styles/App.css';
import './Styles/Print.css';
import './Styles/Mobile.css';
import './Styles/MainBlock.css';
import './Styles/Contacts.css';
import './Styles/Button.css';
import './Styles/ButtonDownload.css';
import './Styles/CustomList.css';
import './Styles/Skils.css';
import './Styles/Footer.css';
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
    const [buttonName, setButtonName] = useLocalStorage('buttonName', getThemeName(theme, language));
    const {toPDF, targetRef} = usePDF({
        filename: 'koverchik_cv.pdf', method: 'open', page: {
            margin: Margin.SMALL, orientation: "portrait"
        }
    });
    useEffect(() => {
        setButtonName(getThemeName(theme, language))
    }, [language, setButtonName, theme]);
    const switchTheme = () => {
        setTheme(getTheme(theme));
    }
    const switchLanguage = () => {
        setLanguage(getLanguage(language));
    }

    return (
        <div className="app" data-theme={theme} ref={targetRef}>
            <div>
                <div className="theme-container">
                    <div className="center">
                        <button onClick={switchTheme} className="btn">
                            <span> {buttonName}</span>
                        </button>
                    </div>
                </div>
                <div className="language-container">
                    <div className="center">
                        <button onClick={switchLanguage} className="btn">
                            <span> {language}</span>
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
