import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercitazioneComponent } from './esercitazione.component';

describe('EsercitazioneComponent', () => {
  let component: EsercitazioneComponent;
  let fixture: ComponentFixture<EsercitazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsercitazioneComponent]
    });
    fixture = TestBed.createComponent(EsercitazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
