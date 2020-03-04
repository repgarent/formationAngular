import { DataService } from './../services/DataService';
import { Client } from './../Model/client';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(
    @Inject('DataService') private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.readClients().then(
      (clients) => this.clients = clients)
      .catch(console.error);
  }

}
