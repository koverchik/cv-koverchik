import { Mail } from "../Icons/Mail";
import {Public} from "../Icons/Public";
import {Telegram} from "../Icons/Telegram";
import {Github} from "../Icons/Github";
import {Linkedin} from "../Icons/Linkedin";

export const  Contacts = ()=> {
    return   (
        <>
            <div className={'contact-item'}>
                <Mail/>
                <a href="mailto:koverchik.o@gmail.com">koverchik.o@gmail.com</a>
            </div>
            <div className={'contact-item'}>
                <Linkedin/>
                <a href={'https://www.linkedin.com/in/koverchik-olga/'}>linkedin.com</a>
            </div>
            <div className={'contact-item'}>
                <Github/>
                <a href={'https://github.com/koverchik'}>github.com/koverchik</a>
            </div>
            <div className={'contact-item'}>
                <Telegram/>
                <a href={'https://t.me/tree_KO'}>tree_KO</a>
            </div>
            <div className={'contact-item'}>
                <Public/>
                <p>Minsk, Belarus</p>
            </div>

        </>
    )
}
