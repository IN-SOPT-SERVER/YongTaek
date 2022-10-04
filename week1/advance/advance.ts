import IDinner from './interfaces/IDinner';

const dinner: IDinner = {
    members: [ 
        { 
            name: "권세훈",
            group: "ob",
            menu: "봉구스"
        },
        {
            name: "이용택",
            group: "yb",
            menu: "봉구스햄"
        },
        {
            name: "장한빛",
            group: "yb",
            menu: "봉구스치즈"
        },
        {
            name: "정정빈",
            group: "ob",
            menu: "봉구스햄치즈"
        },
        {
            name: "백혜윤",
            group: "yb",
            menu: "봉구스제육"
        },
        {
            name:'남지윤',
            group: "ob",
            menu: "봉구스치즈제육"
        },
        {
            name:'전희선',
            group: "yb",
            menu: "봉구스김치제육"
        },
        {
            name:'양지영',
            group: "ob",
            menu: "봉구스닭갈비"
        },
        {
            name:'정준서',
            group: "yb",
            menu: "봉구스소불고기"
        },
        {
            name:'조예슬',
            group: "yb",
            menu: "봉구스청양불고기"
        },
        {
            name:'한유진',
            group: "ob",
            menu: "봉구스불족"
        },
        {
            name:'김민욱',
            group: "ob",
            menu: "봉구스맛있새우"
        }
    ],
    shuffle(array) {
        // fisher-Yates
        for(let i = 0; i < array.length; i++){
            let randomIdx = Math.floor(Math.random() * (i+1));
            let value = array[i];
            array[i] = array[randomIdx];
            array[randomIdx] = value;
        }
        return array;
    },
    organize(array) {
        this.shuffle(array);
        console.log(`${array.at(0).name}, ${array.at(1).name} 두분은 ${array.at(0).menu} 나눠드시면됩니다◕‿◕`);
    },
};

dinner.organize(dinner.members)