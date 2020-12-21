import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingAddPage } from './parking-add.page';

describe('ParkingAddPage', () => {
  let component: ParkingAddPage;
  let fixture: ComponentFixture<ParkingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
