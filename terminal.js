$('body').terminal({
    ls: function() {
        this.echo('about -> About me! \n' +
                  'skill -> My skills \n' +
                  'education -> My educations \n' +
                  'experience company_name -> My experiences (company_name is optional) \n' +
                  'contact -> Ways of contacting me \n' +
                  'resume -> Download pdf version of resume \n' +
                  '!? -> ?! \n');
    },
    about: function() {
        let date = new Date();
        let age = date.getFullYear() - 2005;
        this.echo('Hi I am Ashkan Tavassoli and I am a Python backend developer.\n' +
                  'I am ' + age + ' years old. I like board games, online video games.\n');
    },
    skill: function() {
        this.echo('Python  4.5/5 \n' +
                  'Django  3/5 \n' + 
                  'Flask  3.5/5 \n' +
                  'SQL  3/5 \n' +
                  'React 3/5 \n' +
                  'Java 3/5 \n' +
                  'MVC  3/5 \n' + 
                  'Git  3/5 \n'+
                  'Docker  3/5 \n'+
                  'Linux  3/5 \n');
    },
    '!?': function() {
        this.echo("I like your curiosity :D \n");
    },
    education: function() {
        this.echo("Attempting at University of Tabriz  Bachelor's degree in Computer Engineering\n");
    },
    contact: function() {
        const github = $("<a target='_blank' href='https://github.com/ashykng'> Github </a>");
        const email = $("<a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWglSzNBqPrNBJmHtLqmJNwMXxHzXFwSGwdfnrjCRSFvdxHJWxZbWZpczlzmdXQTXKDJV'> Email </a>");
        this.echo(github);
        this.echo(email);
    },
    resume: function() {
        const resume = $("<a href='https://github.com/ashykng/ashykng/raw/ashykng.github.io/Ashkan Tavassoli.pdf'>Resume</a>");
        this.echo(resume);
    },
    experience: function(company='all') {
        switch (company) {
            case 'mozayedegar':
                this.echo("Intern Python Developer\nMozayedegar Full-time\n2023 May to 2024 January\nOn-Site\nMy Responsibilities:\n-ANPR (Automatic Number Plate Recognition):\nProject: Automatic Number Plate Recognition (ANPR) with YOLOv7\nTechnologies: YOLOv7, Flask, Swagger\nDescription: Developed an ANPR system using YOLOv7 for plate recognition. Created an API for the system with Flask and documented it using Swagger.\n-Car Price Prediction:\nProject: Car Price Prediction Model\nTechnologies: Web Scraping, DecisionTreeClassifier, Flask, Swagger\nDescription: Scraped data from Divar.ir to build a car price prediction model. Utilized a DecisionTreeClassifier with features like BrandType, Age, and Usage of the car. Developed an API for the model with Flask and documented it using Swagger.\n-Frontend Collaboration:\nDescription: Collaborated on frontend development for various projects, contributing approximately 30% to the design and implementation of user interfaces.");
                break;
            default:
                this.echo("mozayedegar \n");
        }
    }
}, {
    checkArity: false,
    completion: true,
    greetings: '[[;rgba(255, 255, 255, 1);]Welcome to my online resume; my name is Ashkan Tavassoli] \nUse "ls" to see list of commands! \n'
});
