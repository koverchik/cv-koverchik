import {experienceDictionary} from "../dictionary";
import {highlightKeywords} from "./Helper";

export const Experience = ({language}) => {
    return (
        <>
            {experienceDictionary[language].map(({name, start, end, position, responsibilities}) => {
                const sentences = responsibilities.split(/(?<=\|)/).map(s => s.trim().replace("|", ".")).filter(Boolean);
                return (
                    <div className={'custom-list'} key={name}>
                        <div className={'basic-information-custom-list'}>
                            <p className={'title-basic-information-custom-list'}>{name}</p>
                            <div><p>{start}</p><span>—</span><p>{end}</p></div>
                        </div>
                        <div className={'description-custom-list'}>
                            <p className={'title-description-custom-list'}>{`${position.toUpperCase()}`}</p>
                            <div className={'content-description-custom-list'}>
                                {sentences.map((data, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: highlightKeywords(data) }} />
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}
