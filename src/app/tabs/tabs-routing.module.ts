import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'home',
          loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
        },
        {
          path: 'parking-list',
          loadChildren: () => import('../parking-list/parking-list.module').then(m => m.ParkingListPageModule)
        },
        {
          path: 'map',
          loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
        },
        {
          path: 'qrcode',
          loadChildren: () => import('../qrcode/qrcode.module').then(m => m.QrcodePageModule)
        },
        {
          path: 'setting',
          loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
