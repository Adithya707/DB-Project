import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent implements OnInit {



  postEditForm: FormGroup;
  id: number;

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
      'author' : [null, Validators.required],
      'publishdate' : [null, Validators.required],
      'excert' : [null, Validators.required],
      'image' : [null, Validators.required],
    });
    this.id = this.route.snapshot.params['id'] || null ;
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


  deletePoost(formData: NgForm,id:number) {
    this.config.deletePoost(formData,this.id).subscribe(
      () => this.getBack()
    );
  }

  getBack() {
    this.location.back();
  }

}

