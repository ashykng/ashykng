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
        const email = $("<a target='_blank' href='ashkan.tavassoli.2005@gmail.com'> Email </a>");
        this.echo(github);
        this.echo(email);
    },
    resume: function() {
        const resume = $("<a href='https://github.com/ashykng/ashykng/raw/ashykng.github.io/Ashkan Tavassoli.pdf'>Resume</a>");
        this.echo(resume);
    },
    experience: function(company='all') {
        switch (company) {
            case 'Mozayedegar':
                this.echo("Intern Python Developer \nMozayedegar Full-time \n2023 May to 2024 January\nOn-Site \n");
                break;
            default:
                this.echo("Mozayedegar \n");
        }
    }
}, {
    checkArity: false,
    completion: true,
    greetings: '[[;rgba(255, 255, 255, 1);]Welcome to my online resume; my name is Ashkan Tavassoli] \nUse ls to see list of commands! \n'
});
