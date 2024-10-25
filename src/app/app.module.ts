import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { TrimPipe } from './trim.pipe';
import { SlicePipe } from '@angular/common';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FetchApiComponent,
    TemplateDrivenFormComponent,
    ColorChangeComponent,
    ColorDirectiveDirective,
    TrimPipe,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlicePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
