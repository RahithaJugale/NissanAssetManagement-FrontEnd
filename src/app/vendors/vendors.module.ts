import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VendorComponent } from './vendor.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorManageComponent } from './vendor-manage/vendor-manage.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { AuthGuard } from '../login/shared/auth.guard';

const vendorRoutes: Routes = [
  { path: 'vendor', component: VendorComponent , canActivate:[AuthGuard], data:{role: '1'}},
  { path: 'vendor-add', component: VendorAddComponent , canActivate:[AuthGuard], data:{role: '1'}},
  { path: 'vendor-edit', component: VendorEditComponent , canActivate:[AuthGuard], data:{role: '1'}},
  { path: 'vendor-list', component: VendorListComponent, canActivate:[AuthGuard], data:{role: '1'} },
  { path: 'vendor-manage', component: VendorManageComponent, canActivate:[AuthGuard], data:{role: '1'} }
];

@NgModule({
  declarations: [VendorComponent, VendorAddComponent, VendorManageComponent, VendorListComponent, VendorEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(vendorRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class VendorsModule { }
