const titles_en = {
    'experience': 'Experience',
    'education': 'Education',
    'contact': 'Contact',
    'skills': 'Skills',
    'languages': 'Languages',
    'hobbies': 'Hobbies'
}

const titles_ru = {
    'experience': 'Опыт',
    'education': 'Образование',
    'contact': 'Контакты',
    'skills': 'Навыки',
    'languages': 'Языки',
    'hobbies': 'Хобби'
}

export const TitlesDictionary = {
    'ru': titles_ru,
    'en': titles_en
}

const education_en = {
    'nameBSU': 'Belarusian State University',
    'nameInstituteBSU': 'Institute of Business BSU',
    'specializationBSU': 'Lawyer, civil law',
    'specializationInstituteBSU': 'IT-technologies, Web designer programmer',
}

const education_ru = {
    'nameBSU': 'Белорусский государственный университет',
    'nameInstituteBSU': 'Институт бизнеса и менеджмента технологий  БГУ',
    'specializationBSU': 'Юрист, гражданское право',
    'specializationInstituteBSU': 'IT-технологии, программист-Веб-дизайнер',
}

export const EducationDictionary = {
    'ru': education_ru,
    'en': education_en
};

const experience_en = [
    {
        'name': 'DEVXED',
        'start': 'September 2024',
        'end': 'till now',
        'position': 'Software Engineer',
        'responsibilities':
            'Developed and maintained web applications using the PHP 7.4 (Symfony 3.4), ensuring clean, efficient, and maintainable code|' +
            'Implemented authentication through external providers (Google, Apple ID) based on the OAuth 2.0 protocol|' +
            'Integrated the customer data management and marketing automation platform (customer.io) with the app|' +
            'Developed a Bash script for automated testing of cache managers. Compared the performance and behavior of Memcached and APC under various loads, analyzed the results, and identified optimal configurations to improve caching efficiency|' +
            'Created dynamic and responsive user interfaces using jQuery and Twig templates|' +
            'Designed and optimized databases (MySQL, Redis) for high performance and scalability|' +
            'Debugged and optimized code for better system performance and stability|' +
            'Documented development processes, best practices, and technical workflows in Confluence|' +
            'Managed tasks and issue tracking using Jira improving workflow efficiency|'
    },
    {
        'name': 'Amasty',
        'start': 'September 2023',
        'end': 'August 2024',
        'position': 'Software developer',
        'responsibilities':
            'Developed microservices architecture to boost the functionality and scalability of the system, utilizing the Symfony 5.4 (PHP 8.0) framework for service construction, including there testing and debugging|' +
            'Integrated of microservices using RabbitMQ to facilitate asynchronous communication between system components|' +
            'Created and optimized of databases using SQL (PostgreSQL, SQLite)|' +
            'Created automation deployment for microservices using Docker and Git (GitLab)|' +
            'Draw up manuals for using apps in Confluence using Jira|' +
            'Increased speed of a set up and deployment process on 30% in microservices project| '
    },
    {
        'name': 'ScienceSoft',
        'start': 'January 2022',
        'end': 'September 2023',
        'position': 'PHP-programmer',
        'responsibilities':
            'Developed and maintained of web applications using JS (React, jQuery), PHP (Symfony, Oro) and Python (Django)|' +
            'Developed and deployed serverless applications based on AWS Lambda|' +
            'Participated in all stages of development, including requirements analysis, design, development, testing, and deployment|' +
            'Used Git (Bitbucket) version control systems for code management|' +
            'Developed solutions tailored to the unique requirements and preferences of a specific client (LinkedIn PDF parser)|'
    },
    {
        'name': 'Belitsoft',
        'start': 'September 2021',
        'end': 'December 2021',
        'position': 'Programmer',
        'responsibilities':
            'Developed mobile applications using JS (React Native)|' +
            'Integrated mobile applications with Firebase services and APIs, ensuring efficient interaction with the server-side|' +
            'Developed a CI/CD deployment process using GitHub Actions|' +
            'Participated in the implementation of new features and updates in mobile applications|'
    }
]

const experience_ru = [
    {
        'name': 'ДЕВХЭД',
        'start': 'Сентябрь 2024',
        'end': 'сейчас',
        'position': 'PHP программист',
        'responsibilities':
            'Разрабатывала и поддерживала веб-приложения на PHP 7.4 (Symfony 3.4), обеспечивая чистый, эффективный и легко сопровождаемый код|' +
            'Реализовывала аутентификацию через внешние провайдеры (Google, Apple ID) на основе протокола OAuth 2.0|' +
            'Разработала bash-скрипт для автоматизированного тестирования работы кеш-менеджеров. Сравнила производительность и поведение Memcached и APC при различных нагрузках, проанализировала результаты и выявила оптимальные настройки для повышения эффективности кеширования|' +
            'Интегрировала платформу для управления клиентскими данными и автоматизации маркетинговых сообщений (customer.io) с приложением|' +
            'Создавала динамичные и адаптивные пользовательские интерфейсы с применением jQuery и шаблонов Twig|' +
            'Проектировала и оптимизировала базы данных (MySQL, Redis) для высокой производительности и масштабируемости|' +
            'Вела документацию по процессам разработки, лучшим практикам и техническим рабочим процессам в Confluence|' +
            'Создавала задачи и отслеживала прогресс с помощью Jira, что повышало эффективность рабочих процессов|'
    },
    {
        'name': 'АмДев',
        'start': 'Сентябрь 2023',
        'end': 'Август 2024',
        'position': 'Разработчик',
        'responsibilities':
            'Разрабатывала архитектуру микросервисов для повышения функциональности и масштабируемости системы, используя фреймворк Symfony 5.4 (PHP 8.0) для построения сервисов, включая их тестирование и отладку|' +
            'Реализовала интеграцию микросервисов через RabbitMQ, обеспечив эффективное асинхронное взаимодействие компонентов системы|' +
            'Разработала и оптимизировала базы данных SQL (PostgreSQL, SQLite), что улучшило производительность и надежность работы приложений|' +
            'Автоматизировала процесс развертывания микросервисов с использованием Docker и Git (GitLab), значительно сократив время ручных операций|' +
            'Подготовила подробные руководства по использованию приложений в Confluence и организовала процесс управления задачами через Jira, что упростило командное взаимодействие|' +
            'Добилась ускорения процессов настройки и развертывания в проекте микросервисов на 30%, что напрямую повлияло на эффективность разработки|'
    },
    {
        'name': 'Научсофт',
        'start': 'Январь 2022',
        'end': 'Сентябрь 2023',
        'position': 'PHP программист',
        'responsibilities':
            'Разрабатывала и поддерживала веб-приложения с использованием JS (React, jQuery), PHP (Symfony, Oro) и Python (Django)|' +
            'Разрабатывала и развертывала serverless-приложения на базе AWS Lambda|' +
            'Участвовала во всех этапах жизненного цикла разработки: от анализа требований и проектирования до разработки, тестирования, развертывания и презентации|' +
            'Эффективно использовала системы контроля версий Git (Bitbucket) для управления кодом и командной работы|' +
            'Разрабатывала решения адаптированные под уникальные требования и предпочтения конкретного заказчика (парсер PDF LinkedIn)|',
    },
    {
        'name': 'Белитсофт Интернешнл',
        'start': 'Сентябрь 2021',
        'end': 'Декабрь 2021',
        'position': 'Программист',
        'responsibilities':
            'Разрабатывала мобильные приложения с использованием JS (React Native)|' +
            'Интегрировала мобильные приложения с сервисами и API Firebase, обеспечив эффективное взаимодействие с серверной частью|' +
            'Разрабатывала CI/CD-процесс деплоя с помощью GitHub Actions|' +
            'Участвовала во внедрении новых функций и обновлений в мобильные приложения, способствуя повышению их функциональности и удобства для пользователей|'
    }
]

export const experienceDictionary = {
    'ru': experience_ru,
    'en': experience_en
};