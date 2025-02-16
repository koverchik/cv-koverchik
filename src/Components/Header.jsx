import avatar from "../Icons/avatar.png"
import {InformationBlock} from "./InformationBlock";
import {textSummary} from "./Helper";

export const  Header = ()=> {
    return   (
        <div className={'header'}>
            <div className={'background-signature'}></div>
            <img src={avatar} width={350} height={350} alt='avatar'/>
            <div className={'header-description'}>
                <div className={'signature'}>
                    <h1>{('Koverchik Olga').toUpperCase()}</h1>
                    <h2>PHP developer</h2>
                </div>
                <InformationBlock name={'Profile'} text={textSummary}/>
            </div>
        </div>
    )
}
