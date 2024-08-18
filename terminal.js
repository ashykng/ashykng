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
        if (company === 'mozayedegar' || company === 'Mozayedegar' || company === 'all') {
            this.echo("[[;rgb(255,255,255);]Mozayedegar (On-Site)] April 2023 - October 2023\n[[;rgb(255,165,0,1);]FULL STACK DEVELOPER (JUNIOR):]\n\t- Developed an e-commerce website using HTML, CSS, JavaScript, and React that increased customer engagement by 40%\n\t- Developed a web application using Python and Django that improved scalability and reliability");
        }
        
        if (company === 'cmnet' || company === 'CMnet' || company === 'all') {
            this.echo("[[;rgb(255,255,255);]CMnet (Remote)] August 2024 - present\n[[;rgb(255,165,0,1);]FULL STACK DEVELOPER (MID-LEVEL):]\n\t- Developed a RESTful API that handled over .5 million requests per day with response times under 120 milliseconds\n\t- Developed a RESTful API to enable communication between the website and the backend services");
        }

        if (company !== 'mozayedegar' && company !== 'cmnet' && company !== 'all') {
            this.echo("[[;rgb(255,0,0);]Company not found!]");
        }
    }
}, {
    checkArity: false,
    completion: true,
    greetings: '[[;rgb(255,255,255);]Welcome to my online resume; my name is Ashkan Tavassoli] \nUse [[;rgb(255,165,0);]ls] to see list of commands! \n'
});
