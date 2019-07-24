import { Component, OnInit ,ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormGroup, FormControl,FormArray,NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
   regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   regexpCompanyCd = new RegExp(/^\w{10}$/g);
   regexpPolicyNo = new RegExp(/^\w{10}$/g);
   title = 'ttptforms';
   emailFlag: boolean;
   emailFlag1: string;

   policyFormData ;
   companyCd ;
   policyNo ;

  constructor() {}

  ngOnInit() {
    this.policyFormData = new FormGroup({
       //companyCd: new FormControl("02003"),
       //policyNo: new FormControl("abcd123456")
       'companyCd': new FormControl("",Validators.compose([ Validators.required, Validators.pattern("/^\w{10}$/g")])),
       'policyNo': new FormControl("",Validators.compose([ Validators.required, Validators.pattern("/^\w{10}$/g")])),
       //formArray: new FromArray([new FormControl('')]) 
    });
 }


  onClickSubmit(data) {
    let email = data.emailId ;
    let passwd = data.passwd ;
    email = email.trim() ;
    passwd = passwd.trim() ;
    console.log(email);
    this.emailFlag = this.regexpEmail.test(email);
    // alert('Entered Email id : ' + this.emailFlag);
    alert('Email -> ' + email + ': ' + 'passwd :' + passwd );
    

  }


  onClickSubmit1(data) {
    this.companyCd = data.companyCd ;
    this.policyNo = data.policyNo ;
    
    //alert('companyCd -> ' + this.companyCd + ': ' + 'policyNo :' + this.policyNo );
    alert('policyFormData -> ' + data.valid.toString());
    this.printPolicyFormData() ;
  }

  printPolicyFormData(){
    console.log(this.policyFormData);
  }

}



