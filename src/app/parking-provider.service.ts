import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParking } from 'src/models/parking';


@Injectable({
  providedIn: 'root'
})
export class ParkingProviderService {

  constructor(private httpClient: HttpClient, @Inject('API_URL') private url: string) {

  }
  getParkingList() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  searchParkingList(query) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/search/' + query).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  getParkingID(query) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/get/' + query).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  addParking(parking: IParking) {
    return new Promise((resolve, rejectr) => {
      this.httpClient.post(this.url + '/parking/add', parking).subscribe((data: any) => {
        resolve(data);
      }, (error) => {
        rejectr(error);
      });
    });
  }
  listuser() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/listusers').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  searchUsers(query) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.url + '/parking/searchU/' + query).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  addUser(parking: IParking) {
    return new Promise((resolve, rejectr) => {
      this.httpClient.post(this.url + '/parking/adduser', parking).subscribe((data: any) => {
        resolve(data);
      }, (error) => {
        rejectr(error);
      });
    });
  }
}
