import { Component, OnInit } from '@angular/core';
import { IParking } from '../../models/parking';
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  users = [];
  constructor(public naCtrl: NavController, private route: ActivatedRoute, private router: Router, private parkingProvider: ParkingProviderService) {
    this.users[0] = { id: 0, username: 'test', fullname: 'test' };
  }

  ngOnInit() {
  }
  save() {
    this.parkingProvider.addUser(this.users[0]).then((data: any) => {
      if (data.ok) {
        console.log('Add users sucess');
      }
    }, (error) => {
      console.error('Error save data!', error);
    });
  }


}
