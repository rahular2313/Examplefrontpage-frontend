import { Component, OnInit} from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any={};
 getData: any={Boolean};

  constructor(private userservice: UserserviceService,private router:Router){}

  ngOnInit() {
  }
loginUser(){
  var username = this.model.username;
  var password=this.model.password;

  console.log(username+" "+password)

  this.userservice.getUserData(username,password).subscribe((res:any)=>{
    this.getData=res;
    if(this.getData==true)
    {
      this.router.navigate(["/home"]);
    }
    else{
      alert("invalid username/password");
    }
  })

}
}
