import { Client } from './../Model/client';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from './DataService';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

const API_URL = 'https://banque.azurewebsites.net/api';
@Injectable()
export class DataRestHttpService implements DataService {
  clients = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  // readClients(): Client[] {
  //   this.httpClient.get<Client[]>(`${API_URL}/api/clients`).subscribe(data => {
  //     this.clients = data;
  //   })
  //   return this.clients;
  // }
  readClients(): Promise<Client[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Client[]>(`${API_URL}/clients`).subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }

  readClient(id: number): Promise<Client> {
    return new Promise((resolve, reject)=>{
      this.httpClient.get<Client>(`${API_URL}/clients/${id}`).subscribe(data=>{
        resolve(data);
      },error =>{
        reject(error);
      });
    });
  }
  createClient(client: Client):Promise<void> {
    return this.httpClient.post<void>(`${API_URL}/clients`, client).toPromise();
  }

}
