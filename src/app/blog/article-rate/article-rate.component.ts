import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ConfigService } from 'src/app/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-article-rate',
  templateUrl: './article-rate.component.html',
  styleUrls: ['./article-rate.component.css']
})
export class ArticleRateComponent implements OnInit {
  postEditForm: FormGroup;
  id: number;author:string;image:string;publishdate:string;title:string;excert:string;rating:string;oid:string;comp_id:string;odate:string;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private config: ConfigService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      'id' : [null, Validators.required],
      'oid' : [null, Validators.required],
      'author' : [this.getAuthor(), Validators.required],
      'odate' : [null, Validators.required],
      'rating' : [null, Validators.required],
      'comp_id' : [null, Validators.required],
      
    });
    this.id = this.route.snapshot.params['id'] || null ;
    this.oid = this.route.snapshot.params['oid'] || null ;
    this.rating = this.route.snapshot.params['rating'] || null ;
    this.comp_id = this.route.snapshot.params['comp_id'] || null ;
    this.odate = this.route.snapshot.params['odate'] || null ;
    this.author = this.route.snapshot.params['author'] || null ;
    if (this.id) {
    this.getPostById(this.id);
   }
  }
  getPostById(id: number) {
    this.config.getPostByID(id).subscribe(
      post => {
      this.postEditForm.setValue({
        id: post.id,
        oid: post.oid,
        author: post.author,
        odate: post.odate,
        comp_id: post.comp_id,
        rating: post.rating
      });
      }
    );
  }

  ratePost(id:number,title:string,author:string,image:string,publishdate:string,excert:string) {
    this.config.ratePost(this.id,this.oid,this.author,this.odate,this.comp_id,this.rating).subscribe(
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
