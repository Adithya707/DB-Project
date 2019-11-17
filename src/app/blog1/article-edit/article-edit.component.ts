 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../config.service';
import { Location } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../../Post';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  postEditForm: FormGroup;
  id: number;
  title:string;author:string;image:string;publishdate:string;excert:string;
  allItems: any[];
  pages: any[];
  pageSize = 3;
  pager: any = {};
  posts: Post[];
  formData: NgForm;
  post:Post

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private http:HttpClient,
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      'id' : [null, Validators.required],
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publishdate' : [null, Validators.required],
      'excert' : [null, Validators.required],
      'image' : [null, Validators.required],
    });
    this.id = this.route.snapshot.params['id'] || null ;
    this.title = this.route.snapshot.params['title'] || null ;
    this.author = this.route.snapshot.params['author'] || null ;
    this.image = this.route.snapshot.params['image'] || null ;
    this.publishdate = this.route.snapshot.params['publishdate'] || null ;
    this.excert = this.route.snapshot.params['excert'] || null ;
    if (this.id) {
      
    this.getPoostById(this.id);

   }
  
  }



  getPoostById(id: number) {
    this.config.getPoostByID(id).subscribe(
      post => {
      this.postEditForm.setValue({
        id: post.id,
        title: post.title,
        author: post.author,
        publishdate: post.publishdate,
        excert: post.excert,
        image: post.image
      });
      }
    );
  }

  updatePooost(formData: NgForm,id:number,title:string,author:string,image:string,publishdate:string,excert:string) {
    console.log(this.title)
    this.config.updatePooost(formData,this.id,this.title,this.author,this.image,this.publishdate,this.excert).subscribe(
      () => this.getBack()
    );
  }

  getBack() {
    this.location.back();
  }


  
}
