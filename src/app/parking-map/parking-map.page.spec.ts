import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingMapPage } from './parking-map.page';

describe('ParkingMapPage', () => {
  let component: ParkingMapPage;
  let fixture: ComponentFixture<ParkingMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
