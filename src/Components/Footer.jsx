import {buttonsDictionary} from "./Helper";

export const Footer = ({language}) => {
    return (
        <div className="wrapper-download-button">
            <div className="container-download-button">
                <div className="center">
                    <button onClick={() => window.print()} className="btn">
                        <span>{buttonsDictionary[language].print}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
