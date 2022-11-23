import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
    CardModule
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
