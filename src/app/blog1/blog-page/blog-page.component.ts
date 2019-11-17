import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Post } from '../../Post';
import { PagerService } from '../../pager.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  [x: string]: any;

  blog: { id: string,
    tagline: string,
    title: string,
    description: string,
  }[];

  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  posts: Post[];
  id:number

  constructor(private config: ConfigService, private pagerService: PagerService,private http:HttpClient) { }

  ngOnInit() {
    
    



    this.getPageData('pages', 'blog');
    this.getBlockData('posts');
    

  }


  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.blog = data;
        console.log(this.blog);
      }
    );
  }

  getBlockData(database: string ) {
    this.http.get<Post[]>('http://127.0.0.1:5002/Blog1').subscribe(
       
      data=>{
        this.posts = data;
        this.allItems = this.posts;
        this.setPage(1);
        console.log(this.posts);
      }

    );
  }
  

  setPage(pageNumber: number) {
    // create a pager using paging service
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);

    // current page posts
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

    console.log(this.pager);
  }

}
