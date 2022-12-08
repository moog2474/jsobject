const users = [
    {
        name:   "Alex",
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   "Job",
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   "Brook",
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   "Daniel",
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   "John",
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   "Thomas",
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    "Paul",
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]

console.log(users[2]);

function multi() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].skills.length>4) {
            console.log(users[i].name, users[i].skills.length);
        }
    }
}
multi()

function point() {
    for (let j = 0; j < users.length; j++) {
        if (users[j].points >= 50) {
            console.log(users[j].name, users[j].points);
        }
       
    }
}
point()

function skill() {
    for (let a = 0; a < users.length; a++) {
        if (users[a].skills == users[a].skills['Node'] ) {
            console.log((users[a].name, users[a].skills));
        }
    }
}
skill()