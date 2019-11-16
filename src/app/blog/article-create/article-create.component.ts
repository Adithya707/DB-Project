import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  postCreateForm: FormGroup;
  id: number;
  title:string;author:string;image:string;publishdate:string;excert:string;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.postCreateForm = this.fb.group({
      'id' : [null, Validators.required],
      'title' : [null, Validators.required],
      'author' : [null, Validators.required],
      'publishdate' : [null, Validators.required],
      'excert' : [null, Validators.required],
      'image' : [null, Validators.required],
    });

   // this.id = this.route.snapshot.params['id'] || null ;
    this.title = this.route.snapshot.params['title'] || null ;
    this.author = this.route.snapshot.params['author'] || null ;
    this.image = this.route.snapshot.params['image'] || null ;
    this.publishdate = this.route.snapshot.params['publishdate'] || null ;
    this.excert = this.route.snapshot.params['excert'] || null ;

    this.getPostById(this.id);
  }
  getPostById(id: number) {
    this.config.getPostByID(id).subscribe(
      post => {
      this.postCreateForm.setValue({
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

  addPost(formData: NgForm) {
    this.config.addPost(formData,this.id,this.title,this.author,this.image,this.publishdate,this.excert).subscribe(
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