import { Component, OnInit } from '@angular/core';
import { IParking } from "../../models/parking";
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  users = [];
  constructor(public navCtrl: NavController, private parkingProvider: ParkingProviderService, private route: ActivatedRoute) {
    this.listuser();
  }
  listuser() {
    this.parkingProvider.listuser().then((data: any) => {
      this.users = data.rows;
    }, (error) => {
      console.log('Error get data!', error)
    })
  }
  doSearch(event) {
    let query = event.target.value || '';
    this.parkingProvider.searchUsers(query).then((data: any) => {
      this.users = data.rows;
    }, (error) => {
      console.log('Error get data!', error);
    });
  }
  addParking() {
    this.navCtrl.navigateForward('/qrcode');
  }

  ngOnInit() {
  }

}
