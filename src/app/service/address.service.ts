import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Address } from 'src/app/models/Address.model';
import { server_url } from 'src/app/app.constant';
import { Booking } from '../models/Booking.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  form: FormGroup = new FormGroup({
    id:new FormControl(null),
    booking:new FormControl(''),
    street1: new FormControl('', [Validators.required]),
    street2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country:new FormControl('INDIA', [Validators.required]),
    pinCode: new FormControl('', [Validators.required])   
    
   });

  constructor(private http: HttpClient) { }

  retrieveUserAddress(){
    return this.http.get<Address>(server_url+`/address-user`);
  }


  saveUserAddress(address: any){
    return this.http.post(server_url+`/saveuseraddress`,address);
  }

  
  populateForm(row: any) {
    this.form.setValue(row);
  }
}
