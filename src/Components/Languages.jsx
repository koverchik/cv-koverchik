export const  Languages = ({language})=> {
    return   (
        <>
            {language === 'en' ?
                <ul>
                    <li>Belarusian — Native</li>
                    <li>Russian — Native</li>
                    <li>English — B2</li>
                </ul> :
                <ul>
                    <li>Белорусский — родной</li>
                    <li>Русский — родной</li>
                    <li>Английский — B2</li>
                </ul>
            }
        </>
    )
}
