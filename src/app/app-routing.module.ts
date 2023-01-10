import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/login/shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: "./login/login.module#LoginModule" },
  { path: 'asset', loadChildren: "./assets/assets.module#AssetsModule", canActivate:[AuthGuard], data:{role: '1'}},
  { path: 'purchase', loadChildren: "./purchase-order/purchase-order.module#PurchaseOrderModule", canActivate:[AuthGuard], data:{role: '2'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
