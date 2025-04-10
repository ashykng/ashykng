$('body').terminal({
    ls: function() {
        this.echo('about -> About me! \n' +
                  'skill -> My skills \n' +
                  'education -> My educations \n' +
                  'experience -> My experiences \n' +
                  'contact -> Ways of contacting me \n' +
                  'resume -> Download pdf version of resume \n' +
                  '!? -> ?! \n');
    },
    about: function() {
        this.echo("Experienced programmer specialized in the design and development of application software. Strong skills in programming languages such as Python and JavaScript, and proficient in modern frameworks. Able to analyze user needs and provide effective and optimized solutions. Experience working in multidisciplinary teams and diverse projects, along with the ability to manage time and prioritize tasks. Interested in continuous learning and keeping technical knowledge up to date to improve software quality.");
        },
    skill: function() {
        this.echo(
                    'Python \n' +
                    'Web Scraping \n' +
                    'Django \n' +
                    'JavaScript \n' +
                    'Node.js \n' +
                    'React.js \n' +
                    'Database \n' +
                    'Docker \n' +
                    'Git \n' +
                    'Linux \n'
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
        this.echo($("<a href='https://github.com/ashykng/ashykng/raw/ashykng.github.io/Ashkan Tavassoli -En.pdf'>English Resume</a>"));
        this.echo($("<a href='https://github.com/ashykng/ashykng/raw/ashykng.github.io/Ashkan Tavassoli -Fa.pdf'>Persian Resume</a>"));
    },
    experience: function() {
        this.echo("[[;rgb(255,255,255);]Farasanat Electronic] October 2024 - April 2025\n[[;rgb(255,165,0,1);]Junior Backend Developer:]\n\t- Developing and maintaining web APIs using Node.js and Express frameworks.\n\t- Contributing to database design and implementation using Postgres and MySQL.\n\t- Collaborating with the front-end team to integrate and optimize the user interface.\n\t- Writing technical documentation and user guides for various projects.\n\t- Working on open-source projects and contributing to the programming community using Git and GitHub.\n");
        this.echo("[[;rgb(255,255,255);]CM Net] August 2024 - October 2024\n[[;rgb(255,165,0,1);]Junior Full Stack Developer:]\n\t- Developing and implementing several web projects using BootStrap and React.\n\t- Designing and implementing RESTful APIs for communication between systems using Django.\n\t- Collaborating with different teams to provide technical solutions and optimize website performance.\n\t- Contributing to API development and integrating it with the Postgres database.\n\t- Conducting software testing and debugging to ensure correct functionality and good performance.\n\t- Providing technical documentation to team members and end users.\n");
        this.echo("[[;rgb(255,255,255);]Mozayedegar] May 2023 - January 2024\n[[;rgb(255,165,0,1);]Junior Programmer:]\n\t- Developing and enhancing dynamic websites using HTML, CSS, and JavaScript programming languages.\n\t- Designing and implementing RESTful APIs for system communication using Flask and Django.\n\t- Swagger documentation for implemented APIs.\n\t- Working on open-source projects and contributing to the programming community using Git and GitHub.\n\t- Analyzing and debugging software and improving the performance of existing code.\n\t- Building and deploying using Docker on servers.\n");
    }
}, {
    checkArity: false,
    completion: true,
    greetings: '[[;rgb(255,255,255);]Welcome to my online resume; my name is Ashkan Tavassoli] \nUse [[;rgb(255,165,0);]ls] to see list of commands! \n'
});
