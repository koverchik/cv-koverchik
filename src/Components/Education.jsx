import {EducationDictionary} from "../dictionary";

export const  Education = ({language})=> {
    return   (
        <>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <div><p>2015 — 2018</p></div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${(EducationDictionary[language].nameInstituteBSU).toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>{EducationDictionary[language].specializationInstituteBSU}</p>
                </div>
            </div>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <div>
                        <p>2010 — 2015</p>
                    </div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${(EducationDictionary[language].nameBSU).toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>{EducationDictionary[language].specializationBSU}</p>
                </div>
            </div>
        </>
    )
}
