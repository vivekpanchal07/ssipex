import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth, private router: Router,private toastr: ToastrService
  ) { }

  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['']);
    },err => {
      this.toastr.error('Error', err.message,{timeOut:3000});
    })
  }

  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      this.router.navigate(['']);
    },err => {
      this.toastr.error('Error', err.message,{timeOut:3000});
    })
  }

  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
    },err => {
      this.toastr.error('Error', err.message,{timeOut:3000});
    })
  }
}
