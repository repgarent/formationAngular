import { Client } from './../Model/client';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client = new Client();

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  addNewClients() {
    this.snackBar.open(`Client crée : ${this.client.nom} ${this.client.prenom}`,null, { duration:2000 })
  }
}
