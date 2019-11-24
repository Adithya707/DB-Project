import {User} from './user';
export class Post{
    constructor(
        public id:number,
        public tittle:string,
        public author:string,
        public publishdate:string,
        public excert:string,
        public image?:string,
        public oid?:string,
        public comp_id?:string,
        public odate?:string,
        public rating?:string,
        public price?:string
    ){

    }
}