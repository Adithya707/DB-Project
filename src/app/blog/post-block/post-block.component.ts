import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../../Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css']
})
export class PostBlockComponent implements OnInit {
  @Input()  post:Post;
  image:string;
  constructor() { }

  ngOnInit() {
   // this.image='/assets/images/gallery-images'+this.post.image;
  }

}