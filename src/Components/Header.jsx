export const Header = ({language}) => {
    const name = language === 'en' ? 'Koverchik Olga' : 'Коверчик Ольга';
    const position = language === 'en' ? 'PHP developer' : 'PHP разработчик';
    return (
        <div className={'header'}>
            <div className={'background-signature'}></div>
            <div className={'header-description'}>
                <div className={'signature'}>
                    <h1>{(name).toUpperCase()}</h1>
                    <h2>{position}</h2>
                </div>
            </div>
        </div>
    )
}
