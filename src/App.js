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
import {getThemeName} from "./Components/Helper";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Main} from "./Components/Main";
import {Margin, usePDF} from 'react-to-pdf';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const { toPDF, targetRef } = usePDF({filename: 'koverchik_cv.pdf', method: 'open', page: {
            margin: Margin.SMALL, orientation: "portrait"
        }});
    const switchTheme = () =>{
        setTheme(getThemeName(theme));
    }

    const buttonName = `Switch to ${getThemeName(theme)}`;

    return (
        <div className="app" data-theme={theme} ref={targetRef}>
            <div className="container">
                <div className="center">
                    <button onClick={switchTheme}  className="btn">
                        <svg width="180px" height="40px" viewBox="0 0 180 40" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line"/>
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line"/>
                        </svg>
                    <span> {buttonName}</span>
                    </button>
                </div>
            </div>
            <Header/>
            <Main/>
            <Footer toPDF={toPDF} />
        </div>
    );
}

export default App;
