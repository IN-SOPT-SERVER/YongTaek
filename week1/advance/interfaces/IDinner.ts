import IMember from "./IMember"; 

export default interface Dinner {
    members: IMember[],
    shuffle: (array: IMember[]) => IMember[];
    organize: (array: IMember[]) => void;
}