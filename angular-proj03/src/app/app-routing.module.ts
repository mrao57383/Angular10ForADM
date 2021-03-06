import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './auth.guard';
import { CourseListComponent } from './course-list/course-list.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { LoginComponent } from './login/login.component';
import { StudentDashBoardComponent } from './student-dash-board/student-dash-board.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'signup',component:StudentFormComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminHomeComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'dashboard'},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'courses',component:CourseListComponent},
    {path:'addCourse',component:AddCourseComponent}
  ],canActivate:[AuthGuard],canActivateChild:[AuthGuard]},
  {path:'student',component:StudentHomeComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'dashboard'},
    {path:'dashboard',component:StudentDashBoardComponent},
    {path:'courses',component:CourseListComponent},
    {path:'enrolls',component:EnrollmentsComponent},
    {path:'edit',component:StudentFormComponent}
  ],canActivate:[AuthGuard],canActivateChild:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
