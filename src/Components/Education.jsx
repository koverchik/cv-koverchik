export const  Education = ()=> {
    return   (
        <>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <div><p>2015 — 2018</p></div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('Institute of Business BSU').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>IT-technologies, Web designer programmer</p>
                </div>
            </div>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <div>
                        <p>2010 — 2015</p>
                    </div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('Belarusian State University').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>Lawyer, civil law</p>
                </div>
            </div>
        </>
    )
}
