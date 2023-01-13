import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order.component';
import { PurchaseOrderAddComponent } from './purchase-order-add/purchase-order-add.component';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { PurchaseOrderManageComponent } from './purchase-order-manage/purchase-order-manage.component';
import { PurchaseOrderEditComponent } from './purchase-order-edit/purchase-order-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../login/shared/auth.guard';

const purchaseRoutes: Routes = [
  { path: '', redirectTo: 'purchase', pathMatch:'full'},
  { path: '', component: PurchaseOrderComponent, canActivate:[AuthGuard], data:{role: '2'}},
  {
    path: '', component: PurchaseOrderComponent, children: [
      { path: 'purchase-order-add', component: PurchaseOrderAddComponent, canActivate:[AuthGuard], data:{role: '2'} },
      { path: 'purchase-order-edit', component: PurchaseOrderEditComponent, canActivate:[AuthGuard], data:{role: '2'} },
      { path: 'purchase-order-manage', component: PurchaseOrderManageComponent, canActivate:[AuthGuard], data:{role: '2'} },
      { path: 'purchase-order-list', component: PurchaseOrderListComponent, canActivate:[AuthGuard], data:{role: '2'} }
    ]
  }


];

@NgModule({
  declarations: [PurchaseOrderComponent, PurchaseOrderAddComponent, PurchaseOrderListComponent, PurchaseOrderManageComponent, PurchaseOrderEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(purchaseRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PurchaseOrderModule { }
