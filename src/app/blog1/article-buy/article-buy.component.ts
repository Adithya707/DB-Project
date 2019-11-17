import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-buy',
  templateUrl: './article-buy.component.html',
  styleUrls: ['./article-buy.component.css']
})
export class ArticleBuyComponent implements OnInit {

  postEditForm: FormGroup;
  id: number;author:string;image:string;publishdate:string;title:string;excert:string;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      'id' : [null, Validators.required],
      'title' : [null, Validators.required],
      'author' : [this.getAuthor(), Validators.required],
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

  updatePost(formData: NgForm) {
    this.config.updatePost(formData).subscribe(
      () => this.getBack()
    );
  }
  buyPoost(id:number,title:string,author:string,image:string,publishdate:string,excert:string) {
    this.config.buyPoost(this.id,this.title,this.author,this.image,this.publishdate,this.excert).subscribe(
      () => this.getBack()
    );
  }

  getBack() {
    this.location.back();
  }


  getAuthor() {
    return this.auth.getUser()['id'];
  }
}

