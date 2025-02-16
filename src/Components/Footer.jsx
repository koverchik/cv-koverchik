export const  Footer = ()=> {
    return   (
        <div className="wrapper-download-button">
            <div className="container-download-button">
                <div className="center">
                    <button onClick={() => window.print()} className="btn">
                        <svg width="180px" height="40px" viewBox="0 0 180 40" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line"/>
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line"/>
                        </svg>
                        <span>Print</span>
                    </button>
                </div>
            </div>
    </div>
    )
}
