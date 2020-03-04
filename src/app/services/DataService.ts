import { Client } from './../Model/client';

export interface DataService {
    readClients(): Promise<Client[]>;
    readClient(id: number): Promise<Client>;
    createClient(client: Client): Promise<void>;
}