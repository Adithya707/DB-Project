import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { Post } from './Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PostComponent } from './post/post.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;
  apiUrl = 'api/posts';


  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);//
    };
  }

  getConfig() {
    return this.config;
  }

  getPosts(id:number): Observable<Post[]> {
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Posts', []))
    );
  }

  getPoosts(id:number): Observable<Post[]> {
    return this.http.get<any>('http://127.0.0.1:5002/Blog1/article/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Posts', []))
    );
  }

  getSettings(database: string, id?: any): Observable<any[]> {
    let uid = id || null;
    let url: string;
    if (uid !== null) {
      url = `api/${database}/${id}`;
    } else {
      url = `api/${database}`;
    }

    return this.http.get<any>(url).pipe(
      tap(
        setting => console.log(setting)
      ),
      catchError(this.handleError( ` get for ${database}`, []))
    );
  }

  updatePost(formData: NgForm): Observable<Post> {
    return this.http.put<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }

  updatePoost(formData: NgForm,id:number,title:string,author:string,image:string,publishdate:string,excert:string): Observable<Post> {
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article-edit/'+String(id)+'/'+String(title)+'/'+String(author)+'/'+String(image)+'/'+String(publishdate)+'/'+String(excert)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }
  updatePooost(formData: NgForm,id:number,title:string,author:string,image:string,publishdate:string,excert:string): Observable<Post> {
    return this.http.get<any>('http://127.0.0.1:5002/Blog1/article-edit/'+String(id)+'/'+String(title)+'/'+String(author)+'/'+String(image)+'/'+String(publishdate)+'/'+String(excert)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }

  deletePost(formData: NgForm,id:number): Observable<Post> {
     
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article-delete/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }

  deletePoost(formData: NgForm,id:number): Observable<Post> {
     
    return this.http.get<any>('http://127.0.0.1:5002/Blog1/article-delete/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }



  buyPost(id:number,title:string,author:string,image:string,publishdate:string,excert:string): Observable<Post> {
     
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article-buy/'+String(id)+'/'+String(title)+'/'+String(author)+'/'+String(image)+'/'+String(publishdate)+'/'+String(excert)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }


  buyPoost(id:number,title:string,author:string,image:string,publishdate:string,excert:string): Observable<Post> {
     
    return this.http.get<any>('http://127.0.0.1:5002/Blog1/article-buy/'+String(id)+'/'+String(title)+'/'+String(author)+'/'+String(image)+'/'+String(publishdate)+'/'+String(excert)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Update Post', []))
    );
  }

  addPost(formData: NgForm,id:number,title:string,author:string,image:string,publishdate:string,excert:string): Observable<PostComponent> {
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article-create/'+String(id)+'/'+String(title)+'/'+String(image)+'/'+String(publishdate)+'/'+String(excert)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Add New Post', []))
    );
  }

  getPostByID(id: number) {
    return this.http.get<any>('http://127.0.0.1:5002/Blog/article/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Post by ID', []))
    );
  }
  getPoostByID(id: number) {
    return this.http.get<any>('http://127.0.0.1:5002/Blog1/article/'+String(id)).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Get Post by ID', []))
    );
  }


}