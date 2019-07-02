// @flow

angular.module('portal.resume', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume/resume.html',
    controller: 'ResumeCtrl',
    controllerAs: 'rc'
  });
}])

.controller('ResumeCtrl', [
  function () {
    var rc = this;
    _.set(rc, 'resume', {
      name: 'Jeffery Burroughs',
      address: 'REDACTED',
      phone: 'PRIVATE',
      email: 'jburroughs@sparkimaginations.com',
      link: 'http://linkedin.com/in/jixion',
      github: 'https://www.github.com/jixion',
      intro: 'MID-SENIOR SOFTWARE ENGINEER with in-depth experience programming with Angular.js, HTML, CSS, Node.js, JavaScript, ' +
      'LoDash, Grunt, Gulp, PHP, and CSS. Adept in web application design, implementation, and deployment. ' +
      'Consistently designs high quality applications and easy to maintain code. Exceptional communicator and ' +
      'positive team leader; consistently translates the benefits of soft skills to improve teamwork and ' +
      'productivity.',
      expertise: {
            'AngularJS': 8,
            'JavaScript': 8,
            'Bootstrap': 7,
            'HTML': 9,
            'Node.js': 7,
            'LoDash': 7,
            'Jasmine': 8,
            'Karma': 4,
            'Grunt': 7,
            'Gulp': 6,
            'JIRA': 8,
            'Stash': 6,
            'ExpressJS': 6,
            'Agile Methodology': 7,
            'IntelliJ IDEA': 8,
            'Git': 8,
            'Java': 6,
            'SVN': 4,
            'JSP': 3,
            'C#': 6,
            'C++': 7,
            'MSSQL': 5,
            'MySQL': 6,
            'Angular Material': 3,
            'Python': 3
        },
        achievements: ['Recipient of multiple Akamai Spot Awards',
            'Lead Engineer for angular/node based projects',
            'Former Fort Lauderdale location representative for out@akamai employee resource group',
            'Third place team in Akamai\'s global TechJam programming competition 2015',
            'Selected to be participant in Akamai Tech Summit 2016',
            'Scored 100% in Coursera Single Page Web Applications with AngularJS',
            'Co-Founder and Charter President of the Wyoming Alpha Chapter of Upislon Pi Epsilon Honorary',
            'Co-Founder of University of Wyoming Collegiate Cyber Defense Team (Cyber Defense Action League)',
            '1st Place Team North Central Regional CCDC 2011',
            '5th Place Team National CCDC 2011',
            'Co-Founder of DEF CON Group 254 in Waco, TX',
            'As student senator helped to oversee use of $750,000+ student senate budget spending'
        ],
        experience: [
            {
                employer: 'Akamai Technolgies, Inc.',
                startDate: 'June 2015',
                endDate: 'Present',
                title: 'Software Engineer II',
                description: [
                    'Akamai Spot Award recipient',
                    'Nominee for multiple Akamai Spot Awards',
                    'Programmer on tool front end, entering tickets in JIRA, tracking progress, reporting',
                    'Designing and implementing user interface for a web based tool (Angular, JS, HTML, CSS, API)',
                    'Former Fort Lauderdale location representative for out@akamai employee resource group',
                    'Programming in html, css, php, supporting legacy products',
                    'Assisting with refinement and support for internal tools user interface',
                    'Created, refined and maintained library of routing script templates for internal tools',
                    'Creator/Pilot of rechargeable battery bank program. Saved Akamai an average of $4/cycle/user',
                    '3rd place team globally Akamai CodeJam coding competition 2015',
                    'Selected to be a participant in Akamai Tech Summit 2016',
                    'Active participant in Akamai Wizards innovation program'
                ]
            },
            {
                employer: 'Akamai Technologies, Inc.',
                startDate: 'October 2014',
                endDate: 'June 2015',
                title: 'Application Software Engineer',
                description: [
                    'Assisting with php web based sofware upgrades, bugs, and maintenance (PHP, MySQL, SalesForce)',
                    'Assisting with an automation tool front end work (Angular, Node, JS)',
                    'Programming in html, css, php, supporting legacy products',
                    'Assisting with refinement and support for internal tools user interface',
                    'Created, refined and maintained library of routing script templates for internal tools',
                    'Active participant in Akamai Wizards innovation program'
                ]
            },
            {
                employer: 'Support Services Group',
                startDate: 'May 2014',
                endDate: 'August 2014',
                title: 'IT Programmer and Developer',
                description: [
                    'Solve complex administration problems using Bash, Python, Expect, Cron, Mutt, Sed, and Grep',
                    'Maintain reporting frameworks using Bash scripting, Java, HTML, JSP, and MySQL databases',
                    'Administer database system using MySQL, MySQL Workbench, SQL scripting, and direct manipulation of DB system',
                    'Maintain IBM BladeCenter chassis, Fibre Channel, SAN, PBX, and Routing/Switching equipment'
                ]
            },
            {
                employer: 'Red Lambda, Inc.',
                startDate: 'May 2011',
                endDate: 'November 2013',
                title: 'Quality Assurance Engineer',
                description: [
                    'Conduct product testing for products using Scrum methology including but not limited to product security, eas of use, functionality, functional correctness, and aesthetics',
                    'Designed and implemented web-based solution to track and distribute employee product testing data.  (Linux, Apache 2, MySQL, and Bash)',
                    'Developed product related ease of use scripts and software for dynamically updating artifacts repository, booting of grid infrastructure, and job creation (Java, PHP, MySQL, and Bash)',
                    'Created web-based automated testing framework for reporting test cases/suites optimized across multiple hardware clusters with little to no human action (Perl, Bash, PHP, and MySQL)',
                    'Official company culture liason responsible for ensuring new office culture would make for a fun and productive working environment',
                    'Lead QA Engineer in charge of reviewing candidates for QA roles including QA Manager'
                ]
            },
            {
                employer: 'Snowfly, Inc',
                startDate: 'October 2009',
                endDate: 'January 2011',
                title: 'Contract Software Engineer',
                description: [
                    'Assisting with work place incentive software upgrades, bugs, and maintenance (Java, JSP, MSSQL, Spring WebFlow, Spring MVC)',
                    'Creating efficient MSSQL queries and triggers'
                ]
            },
            {
                employer: 'Wyoming Energy Council, Inc.',
                startDate: 'April 2008',
                endDate: 'December 2010',
                title: 'Systems Administrator and Programmer',
                description: [
                    'Developed/implemented an effective solution to track contract jobs using C#, ASP.NET, MSSQL, CSS, and HTML.',
                    'Post development was able to increase performance in reporting and lookups by 75%.'
                ]
            },
            {
                employer: 'Dakota State University',
                startDate: 'May 2010',
                endDate: 'August 2010',
                title: 'REU Security Intern',
                description: [
                    'Using wireshark to capture attack traffic',
                    'Sanitizing attack traffic',
                    'Classifying attack traffic',
                    'Build presentation of bundled attack traffic pcaps and CAPEC definitions'
                ]
            }
        ]
    });
    _.set(rc, 'showAddress', false);
  }]);
