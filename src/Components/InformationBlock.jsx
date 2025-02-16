import '../Styles/App.css';
import {Title} from "./Title";
export const  InformationBlock = ({name, text})=> {
    return   (
        <div>
            <div className={'title-information-block'}>
                <Title name={name}/>
                <div className={'top-border-line'}></div>
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}
