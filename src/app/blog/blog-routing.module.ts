import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDeleteComponent } from './article-delete/article-delete.component';
import { ArticleBuyComponent } from './article-buy/article-buy.component';

const routes: Routes = [
  {path: '', component: BlogPageComponent},
  {path: 'article-buy/:id', component: ArticleBuyComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'article-edit/:id/:title/:author/:image/:publishdate/:excert', component: ArticleEditComponent},
  {path: 'article-buy/:id/:title/:author/:image/:publishdate/:excert', component: ArticleBuyComponent},
  {path: 'article-delete/:id', component: ArticleDeleteComponent},
  {path: 'article-buy/:id', component: ArticleBuyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
