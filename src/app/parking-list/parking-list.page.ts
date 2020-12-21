import { Component, OnInit } from '@angular/core';
import { IParking } from "../../models/parking";
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.page.html',
  styleUrls: ['./parking-list.page.scss'],
})
export class ParkingListPage implements OnInit {
  parkings: Array<IParking> = [];
  constructor(public navCtrl: NavController, private parkingProvider: ParkingProviderService, private route: ActivatedRoute) {

  }
  getParkingList() {
    this.parkingProvider.getParkingList().then((data: any) => {
      this.parkings = data.rows;
    }, error => {
      console.error('Error get data!', error);
    });
  }
  ionViewWillEnter() {
    this.getParkingList();
  }
  doSearch(event) {
    let query = event.target.value || '';
    this.parkingProvider.searchParkingList(query).then((data: any) => {
      this.parkings = data.rows;
    }, (error) => {
      console.log('Error get data!', error);
    });
  }
  viewParkingDetail(parking: IParking) {
    console.log(parking.id);
    let p = parking.id
    this.navCtrl.navigateForward(['/parking-detail', { p }]);
  }
  ngOnInit() {
  }
  addParking() {
    this.navCtrl.navigateForward('/parking-add');
  }


}
