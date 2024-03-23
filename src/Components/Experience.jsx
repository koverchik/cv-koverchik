export const  Experience = ()=> {
    return   (
        <>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <p className={'title-basic-information-custom-list'}>Amasty</p>
                    <div><p>September 2024</p><span>—</span><p>till now</p></div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('Software developer').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>
                        Development of a microservices architecture to enhance the functionality and scalability of the system, utilizing the Symphony framework for service construction.
                        Integration of microservices using RabbitMQ to facilitate asynchronous communication between system components.
                        Creation and optimization of databases using PostgreSQL.
                        Development of APIs for interaction between microservices and external systems.
                        Testing and debugging microservices.
                        Creation of automation deployment for microservices using Docker and Git.
                        Documentation of development processes in Confluence, utilizing Jira.
                    </p>
                </div>
            </div>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <p className={'title-basic-information-custom-list'}>ScienceSoft</p>
                    <div>
                        <p>January 2022</p><span>—</span><p>September 2023</p>
                    </div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('PHP-programmer').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>
                        Development and maintenance of web applications using programming languages and frameworks:
                        React, PHP and Python.
                        Participation in all stages of development, including requirements analysis, design, development, testing, and deployment.
                        Creation and optimization of databases for web applications.
                        Integration of web applications with external services and APIs.
                        Collaboration within a development team and coordination with other departments: designers, QA engineers.
                        Utilization of Git version control systems for code management.
                        Documentation of development processes in Confluence. Using Jira and Teams for corporate and private work arrangement.
                    </p>
                </div>
            </div>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <p className={'title-basic-information-custom-list'}>Belitsoft</p>
                    <div><p>September 2021</p><span>—</span> <p>December 2021</p></div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('Programmer').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>
                        Development of mobile applications using React Native.
                        Integration of mobile applications with web services and APIs, ensuring efficient interaction with the server-side.
                        Optimization and testing mobile applications.
                        Participation in the implementation of new features and updates in mobile applications.
                    </p>
                </div>
            </div>
            <div className={'custom-list'}>
                <div className={'basic-information-custom-list'}>
                    <p className={'title-basic-information-custom-list'}>Yandex</p>
                    <div><p>April 2019</p><span>—</span><p>April 2020</p></div>
                </div>
                <div className={'description-custom-list'}>
                    <p className={'title-description-custom-list'}>{`${('Support Specialist').toUpperCase()}`}</p>
                    <p className={'content-description-custom-list'}>Handling user complaints</p>
                </div>
            </div>
        </>
    )
}
