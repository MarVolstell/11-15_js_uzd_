const mokiniai = {
    '5b': [
        {
            id:1,
            firstName:"Jonas",
            lastName:"Jonaitis",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Geografija","Fizika",],
            ivertinimai:[5, 3, 7, 5, 9]
        },
        {
            id:2,
            firstName:"Stase",
            lastName:"Stasaite",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Geografija","Fizika",],
            ivertinimai:[7, 4, 4, 9, 7]
        }
    ],
    '7a': [
        {
            id:22,
            firstName:"Asta",
            lastName:"atsA",
            dalykai: ["Matematika","Lietuviu kalba","Vokiecu kalba","Geografija","Fizika",],
            ivertinimai:[9, 3, 8, 5, 7]
        },
        {
            id:23,
            firstName:"Fergis",
            lastName:"sigreF",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Geografija","Fizika",],
            ivertinimai:[6, 6, 6, 6, 7]
        },
        {
            id:26,
            firstName:"Kristupas",
            lastName:"saputsirK",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Geografija","Fizika",],
            ivertinimai:[10, 6, 2, 6, 9]
        }
    ],
    '10': [
        {
            id:25,
            firstName:"Jesus",
            lastName:"Kristus",
            dalykai: ["Matematika","Lotynu kalba","Hebraju kalba","Biologija","Teologija",],
            ivertinimai:[6, 6, 10, 7, 9]
        },
        {
            id:6,
            firstName:"Lebron",
            lastName:"James",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Geografija","Fizinis ugdymas",],
            ivertinimai:[7, 2, 10, 7, 10]
        },
        {
            id:56,
            firstName:"Sigmund",
            lastName:"Freud",
            dalykai: ["Matematika","Vokieciu kalba","Anglu kalba","Biologija","Psichologija",],
            ivertinimai:[4, 9, 6, 2, 8]
        }
    ],
    '11': [
        {
            id:12,
            firstName:"Im",
            lastName:"Tired...",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","zZzZZzZzzz","ShooMimimi",],
            ivertinimai:[6, 5, 10, 7, 7]
        },
        {
            id:123,
            firstName:"Barely",
            lastName:"Typing",
            dalykai: ["Matematika","Lietuviu kalba","Anglu kalba","Programavimas","hhhhhhh",],
            ivertinimai:[4, 9, 9, 5, 1]
        },
    ]
}
for(let key in mokiniai){
    for(let i = 0; mokiniai[key][i] !== undefined;i++){
        console.log(`Mokinys: ${mokiniai[key][i].firstName} ${mokiniai[key][i].lastName};
            Klase: ${Object.keys(mokiniai[key])/* I HAVE NO IDEA HOW TO DO THIS PLEASE TELL ME */};
            Dalykų sąrašas: ${mokiniai[key][i].dalykai};
            Ivertinimai: ${mokiniai[key][i].ivertinimai};
            vidurkis: ${mokiniai[key][i].ivertinimai.reduce((a, b) => a + b, 0)/mokiniai[key][i].ivertinimai.length}`)
        }
}