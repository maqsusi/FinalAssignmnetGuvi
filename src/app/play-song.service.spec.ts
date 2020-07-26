import { TestBed } from '@angular/core/testing';

import { PlaySongService } from './play-song.service';

describe('PlaySongService', () => {
  let service: PlaySongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaySongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
