interface Member {
    name: String,
    group: String,
    menu: String
}

export default interface Dinner {
    members: Member[],
    shuffle: (array: Member[]) => Member[];
    organize: (array: Member[]) => void;
}