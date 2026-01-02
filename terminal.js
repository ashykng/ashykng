$('body').terminal({
    ls: function() {
        this.echo(
                  'skill -> My skills \n' +
                  'education -> My educations \n' +
                  'experience -> My experiences \n' +
                  'contact -> Ways of contacting me \n' +
                  'resume -> Download pdf version of resume \n' +
                  '!? -> ?! \n');
    },
    skill: function() {
        this.echo(
                    'Python \n' +
                    'JavaScript \n' +
                    'SQL \n' +
                    'Django \n' +
                    'Flask \n' +
                    'FastAPI \n' +
                    'BeautifulSoap \n' +
                    'Selenium \n' +
                    'React.JS \n' +
                    'Linux \n' +
                    'Web \n' +
                    'Arduino \n' +
                    'Next.Js \n'
                );
    },
    '!?': function() {
        this.echo("I like your curiosity :D \n");
    },
    education: function() {
        this.echo("Attempting at University of Tabriz Bachelor's degree in Computer Engineering from October 2023\n");
    },
    contact: function() {
        const github = $("<a target='_blank' href='https://github.com/ashykng'> Github </a>");
        const email = $("<a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWglSzNBqPrNBJmHtLqmJNwMXxHzXFwSGwdfnrjCRSFvdxHJWxZbWZpczlzmdXQTXKDJV'> Email </a>");
        this.echo(github);
        this.echo(email);
    },
    resume: function() {
        this.echo($("<a href='https://github.com/ashykng/ashykng/raw/ashykng.github.io/Ashkan Tavassoli.pdf'>Resume</a>"));
    },
    experience: function() {
        this.echo("[[;rgb(255,255,255);]Mepat https://tabrizpm.ir] June 2024 - Present\n[[;rgb(255,165,0,1);]Full Stack Developer:]\n\t- Develop and maintain web APIs using the Django framework\n\t- Participate in database design and implementation using SQLite\n\t- Write technical documentation using Swagger and user guides for various projects\n\t- Develop and implement web applications using modern frameworks such as React and Tailwind\n\t- Implement an integrated system with a PWA version usable for IOS and APK version\n\t- Use version control tools such as Git to control changes and collaborate effectively on projects\n");
        this.echo("[[;rgb(255,255,255);]Charkheshgar IT (hardware and network) https://sschar.com] May 2024 - June 2025 (2 monthes)\n[[;rgb(255,165,0,1);]Network and hardware systems support expert:]\n\t- Technical support for network and hardware systems, and solving everyday user problems\n\t- Monitoring and optimizing the performance of local and wide area networks (LAN/WAN)\n\t- Installing and configuring network equipment, including routers and switches\n\t- Analyzing and documenting technical issues and providing appropriate solutions\n\t- Training users in using hardware and software systems\n");
        this.echo("[[;rgb(255,255,255);]Farasanat Electronic https://fselec.ir] October 2024 - April 2025 (7 monthes)\n[[;rgb(255,165,0,1);]Python Backend Developer:]\n\t- Developing and maintaining web APIs using Django and Flask frameworks\n\t- Contributing to database design and implementation using Postgres and MySQL\n\t- Collaborating with the front-end team to integrate and optimize the user interface\n\t- Writing technical documentation with Swagger and user guides for various projects\n\t- orking on open-source projects and contributing to the programming community using Git and GitHub\n");
        this.echo("[[;rgb(255,255,255);]CM Net] August 2024 - October 2024 (3 monthes)\n[[;rgb(255,165,0,1);]Full Stack Developer:]\n\t- Developing and implementing several web projects using Bootstrap and React\n\t- Designing and implementing RESTful APIs for communication between systems using Django\n\t- Collaborating with different teams to provide technical solutions and optimize website performance\n\t- Contributing to API development and integrating it with the Postgres database\n\t- Conducting software testing and debugging to ensure correct functionality and good performance\n\t- Providing technical documentation with Swagger to team members and end users\n\t- Building and deploying using Docker on servers\n");
        this.echo("[[;rgb(255,255,255);]Mozayedegar https://mozayedegar.ir] May 2023 - January 2024 (11 monthes)\n[[;rgb(255,165,0,1);]Python Developer:]\n\t- Developing and enhancing dynamic websites using HTML, CSS, and JavaScript programming languages\n\t- Designing and implementing RESTful APIs for system communication using Flask and Django\n\t- Swagger documentation for implemented APIs\n\t- Scraping with BeautifulSoup and Selenium in Python and storing in the Postgres database \n\t- Building and deploying using Docker on servers\n");
    }
}, {
    checkArity: false,
    completion: true,
    greetings: '[[;rgb(255,255,255);]Welcome to my online resume; my name is Ashkan Tavassoli] \nUse [[;rgb(255,165,0);]ls] to see list of commands! \n'
});
