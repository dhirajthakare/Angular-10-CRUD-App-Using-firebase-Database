import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactserviceService } from '../Resource/contactservice.service';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../Resource/model';
declare var M;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    displaySubmit="block"; // useful to display or hide Submit button whenver need
    displayUpdate="none"; // useful to display or hide update button whenver need
    data:any;  // get And Store data from information component
    idtype="";
    message="";
    color="";

  constructor(
    public contactservic:ContactserviceService,
    public router:ActivatedRoute
    
    ) { }


    //Initialize some requre things
  ngOnInit(): void {

    this.onreset();
    
    // to get data form information component
    this.router.queryParams.subscribe((res)=>{
      this.data = JSON.parse(atob(res.token))
      this.idtype=this.data.id;
      if(this.data.id!==''){
        this.Edit(this.data);
      }

    })
  }

    // for Submit form data
  onSubmit(form:NgForm){

    console.log("hello bro "+form.value);
    this.contactservic.insertData(form.value);
    this.message="Data Save Successfully";
    this.color="green";
    this.onreset();

  }
  
  //for Update existing data
  updateData(form:NgForm ){

    this.contactservic.updateData(form.value,this.idtype);
    this.onreset();
    this.displayUpdate="none";
    this.displaySubmit="block";
    this.message="Data Update Successfully";
    this.color="purple";


}


// reset form
  onreset(form?:NgForm){
    if(form)
    form.reset();

    this.contactservic.selectModel = {

      id: "",
      Name:"",
      Email:"",
      Mob:""

}

  }

  // add existing record to the form 
  Edit(data:Model){

    this.contactservic.selectModel = data;
    this.displayUpdate="block";
    this.displaySubmit="none";



  }


}
