import { Component, OnInit } from '@angular/core';
import { IParking } from '../../models/parking';
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parking-add',
  templateUrl: './parking-add.page.html',
  styleUrls: ['./parking-add.page.scss'],
})
export class ParkingAddPage implements OnInit {

  parking: Array<IParking> = [];
  constructor(public naCtrl: NavController, private route: ActivatedRoute, private router: Router, private parkingProvider: ParkingProviderService) {
    this.parking[0] = { id: 0, name: 'test', available: 1 };
  }

  ngOnInit() {
  }
  save() {
    this.parkingProvider.addParking(this.parking[0]).then((data: any) => {
      if (data.ok) {
        console.log('Add parking sucess');
      }
    }, (error) => {
      console.error('Error save data!', error);
    });
  }

}
