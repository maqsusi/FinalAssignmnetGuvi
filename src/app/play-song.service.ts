import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaySongService {

  public source = new BehaviorSubject('');
  path = this.source.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.source.next(message)
  }
}
