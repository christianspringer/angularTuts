import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName='';
  resetBtnDisabled=true;

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: any) {
    var value = event.target.value;

    if(value){
      this.resetBtnDisabled = false;
    }
  }

  onResetClick(){
    this.userName = '';
    this.resetBtnDisabled = true;
  }

}
