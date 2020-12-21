import { Component, OnInit } from '@angular/core';
import { IParking } from "../../models/parking";
import { NavController, NavParams } from '@ionic/angular';
import { ParkingProviderService } from '../parking-provider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.page.html',
  styleUrls: ['./parking-detail.page.scss'],
})
export class ParkingDetailPage implements OnInit {
  parking: Array<IParking> = [];
  q: any;
  constructor(public navCtrl: NavController, private parkingProvider: ParkingProviderService, private route: ActivatedRoute) {
    let p = this.route.snapshot.paramMap.get('p');
    this.q = p;
    this.doSearch()
  }
  doSearch() {
    this.parkingProvider.getParkingID(this.q).then((data: any) => {
      this.parking = data.rows;
    }, (error) => {
      console.error('Error get data!', error);
    });
  }
  ngOnInit() {
  }

}
