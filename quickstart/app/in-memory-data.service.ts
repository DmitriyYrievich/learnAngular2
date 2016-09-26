import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Dimon@Campion'},
      {id: 12, name: 'Vasua'},
      {id: 13, name: 'Petya'},
      {id: 14, name: 'Egorka'},
      {id: 15, name: 'Kolyna'},
      {id: 16, name: 'user_name'},
      {id: 17, name: 'Четкий'},
      {id: 18, name: 'Botan'},
      {id: 19, name: 'anonim'},
      {id: 20, name: 'Killer'}
    ];
    return {heroes};
  }
}
