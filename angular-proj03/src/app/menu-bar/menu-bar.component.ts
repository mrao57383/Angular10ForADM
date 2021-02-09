import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  links:string[][];
  islogedIn:boolean;
  
  constructor(
    private userService:UserService,
    private router:Router) {
    this.links=[];
    this.islogedIn=false;
  }
  
  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.islogedIn=true;
      let role = this.userService.currentUser().role;
      if(role=="ADMIN"){
        this.links=[
          ["/","Home"],
          ["/","Courses"],
          ["/","Add Course"]
        ];
      }else{
        this.links=[
          ["/","Home"],
          ["/","Courses"],
          ["/","Enrollments"],
          ["/","Profile"]
        ];
      }
    }else{
      this.links=[
        ["/","Home"],
        ["/signUp","Sign Up"]
      ];
    }
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/");
  }
}
