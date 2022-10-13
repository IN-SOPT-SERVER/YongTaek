import IMember from "./IMember"; 

export default interface IDinner {
    members: IMember[],
    shuffle: (array: IMember[]) => IMember[];
    organize: (array: IMember[]) => void;
}