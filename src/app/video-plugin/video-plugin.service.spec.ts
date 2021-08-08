import { TestBed } from '@angular/core/testing';

import { VideoPluginService } from './video-plugin.service';

describe('VideoPluginService', () => {
  let service: VideoPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
