//in-seminar task
const Members: member[] = [
    {
        name:'최승빈',
        age: 24
    },
    {
        name:'남지윤',
        age: 23
    },
    {
        name:'전희선',
        age: 24
    }
]

interface member {
    name: String,
    age: number
}

Members.map(item => console.log(item));
