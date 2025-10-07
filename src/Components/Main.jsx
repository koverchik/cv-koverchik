import {InformationBlock} from "./InformationBlock";
import {Contacts} from "./Contacts";
import {Skils} from "./Skils";
import {Languages} from "./Languages";
import {Experience} from "./Experience";
import {Education} from "./Education";
import {TitlesDictionary} from "../dictionary";

export const  Main = ({language})=> {
    return   (
        <div className={'main-information'}>
            <div className={'main-information-block'}>
                <InformationBlock name={TitlesDictionary[language].experience} key={TitlesDictionary[language].experience} text={<Experience language={language}/>}/>
                <InformationBlock name={TitlesDictionary[language].education} key={TitlesDictionary[language].education} text={<Education language={language}/>}/>
            </div>
            <div className={'main-information-block extra-information'}>
                <InformationBlock name={TitlesDictionary[language].contact} key={TitlesDictionary[language].contact} text={<Contacts/>}/>
                <InformationBlock name={TitlesDictionary[language].skills} key={TitlesDictionary[language].skills} text={<Skils/>}/>
                <InformationBlock name={TitlesDictionary[language].languages} key={TitlesDictionary[language].languages} text={<Languages language={language}/>}/>
            </div>
        </div>
    )
}
