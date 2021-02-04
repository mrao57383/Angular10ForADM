import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { InWordsPipe } from './pipe/in-words.pipe';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';

const routes : Routes = [
  {path:'',redirectTo:'/loan',pathMatch:'full'},
  {path:'loan',component:LoanFormComponent},
  {path:'pipes',component:BuiltInPipesComponent},
  {path:'sddc',component:StructuralDirectivesDemoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    BuiltInPipesComponent,
    InWordsPipe,
    MenuBarComponent,
    StructuralDirectivesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
