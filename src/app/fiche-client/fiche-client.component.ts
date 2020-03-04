import { DataService } from './../services/DataService';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../Model/client';

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.css']
})
export class FicheClientComponent implements OnInit {
  constructor(private route: ActivatedRoute, @Inject('DataService') private data: DataService) { }
  client: Client = new Client();
  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id']);
    if (!isNaN(id)) {
      this.data.readClient(Number(id)).then(
        (client: Client) => this.client = client)
        .catch(console.error);
    }
  }

}
