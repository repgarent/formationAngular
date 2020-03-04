import { RouterModule, Router } from '@angular/router';
import { Client } from './../Model/client';
import { DataService } from './../services/DataService';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-form-reactive',
  templateUrl: './client-form-reactive.component.html',
  styleUrls: ['./client-form-reactive.component.css']
})
export class ClientFormReactiveComponent implements OnInit {

  clientForm: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    comptes: new FormArray([])
  });

  get comptesFormArray(): FormArray {
    return <FormArray>this.clientForm.get('comptes');
  }

  constructor(private snackBar: MatSnackBar, @Inject('DataService') private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.clientForm.patchValue(new Client());
  }

  addAccount(){
    this.comptesFormArray.push(
      new FormGroup({
        numero: new FormControl(''),
        intitule: new FormControl('')
      }),
    )
  }

  addNewClients() {
    this.data.createClient(this.clientForm.value).then(()=>{
      this.snackBar.open(`Client crée : ${this.clientForm.value.nom} ${this.clientForm.value.prenom}`, null, { duration: 2000 })
    this.router.navigate(['clients']);
    })
      .catch(console.error);
    
  }
}
