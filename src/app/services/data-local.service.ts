import { Injectable } from '@angular/core';
import { DataService } from "./DataService"
import { Client } from '../Model/client';

@Injectable()
export class DataLocalService implements DataService {

  private clients: Client[] = [];
  load() {
    this.clients = JSON.parse(localStorage.getItem('data'));
  }
  save() {
    localStorage.setItem('data', JSON.stringify(this.clients));
  }

  // readClients(): Client[] {
  //   return this.clients;
  // }

  readClients(): Promise<Client[]> {
    return Promise.resolve(this.clients);
  }
  readClient(id: number): Promise<Client> {
    return Promise.resolve(this.clients.find(cli => cli.id === id));
  }
  createClient(client: Client): Promise<void> {
    const maxId = this.clients
      .map(cli => cli.id)
      .reduce((id1, id2) => id1 > id2 ? id1 : id2);
    client.id = maxId + 1;
    this.clients.push(client);
    return Promise.resolve(this.save());
  }

  constructor() {
    this.load();
   }
}
