import {User} from './user';
export class Post{
    constructor(
        public id:number,
        public tittle:string,
        public author:string,
        public publishdate:string,
        public excert:string,
        public image?:string,
        
    ){

    }
}