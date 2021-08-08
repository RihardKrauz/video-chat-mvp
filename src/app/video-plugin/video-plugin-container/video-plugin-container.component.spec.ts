import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPluginContainerComponent } from './video-plugin-container.component';

describe('VideoPluginContainerComponent', () => {
  let component: VideoPluginContainerComponent;
  let fixture: ComponentFixture<VideoPluginContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPluginContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPluginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
