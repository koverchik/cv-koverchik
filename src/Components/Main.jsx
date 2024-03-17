import {InformationBlock} from "./InformationBlock";
import {Contacts} from "./Contacts";
import {Skils} from "./Skils";
import {Languages} from "./Languages";
import {Experience} from "./Experience";
import {Education} from "./Education";

export const  Main = ()=> {
    return   (
        <div className={'main-information'}>
            <div className={'main-information-block'}>
                <InformationBlock name={'Experience'} text={<Experience/>}/>
                <InformationBlock name={'Education'} text={<Education/>}/>
            </div>
            <div className={'main-information-block extra-information'}>
                <InformationBlock name={'Contact'} text={<Contacts/>}/>
                <InformationBlock name={'Skills'} text={<Skils/>}/>
                <InformationBlock name={'Hobbies'} text={'Dancing, gym, writing'}/>
                <InformationBlock name={'Languages'} text={<Languages/>}/>
            </div>
        </div>
    )
}
