import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssetHomeComponent } from '../assets/asset-home/asset-home.component';
import { AssetTypeComponent } from '../assets/asset-type/asset-type.component';
import { AssetTypeListComponent } from '../assets/asset-type/asset-type-list/asset-type-list.component';
import { AssetTypeManageComponent } from '../assets/asset-type/asset-type-manage/asset-type-manage.component';
import { AssetAddComponent } from '../assets/asset-type/asset-add/asset-add.component';
import { AssetDefinitionComponent } from '../assets/asset-definition/asset-definition.component';
import { AssetTypeEditComponent } from '../assets/asset-type/asset-type-edit/asset-type-edit.component';
import { AssetDefinitionAddComponent } from '../assets/asset-definition/asset-definition-add/asset-definition-add.component';
import { AssetDefinitionEditComponent } from '../assets/asset-definition/asset-definition-edit/asset-definition-edit.component';
import { AssetDefinitionListComponent } from '../assets/asset-definition/asset-definition-list/asset-definition-list.component';
import { AssetDefinitionManageComponent } from '../assets/asset-definition/asset-definition-manage/asset-definition-manage.component';
import { VendorComponent } from '../vendors/vendor.component';
import { VendorAddComponent } from '../vendors/vendor-add/vendor-add.component';
import { VendorEditComponent } from '../vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from '../vendors/vendor-list/vendor-list.component';
import { VendorManageComponent } from '../vendors/vendor-manage/vendor-manage.component';
import { PurchaseOrderComponent } from '../purchase-order/purchase-order.component';
import { AssetMasterComponent } from '../assets/asset-master/asset-master.component';
import { AssetMasterEditComponent } from '../assets/asset-master/asset-master-edit/asset-master-edit.component';
import { AssetMasterListComponent } from '../assets/asset-master/asset-master-list/asset-master-list.component';
import { AssetMasterManageComponent } from '../assets/asset-master/asset-master-manage/asset-master-manage.component';
import { AuthGuard } from './shared/auth.guard';

const loginRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginPageComponent, canActivate:[AuthGuard], data:{role: '1'} },
  { path: 'purchase', component: PurchaseOrderComponent,canActivate:[AuthGuard], data:{role: '2'} },
  {

    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], data:{role: '1'}, children: [
      { path: 'asset-home', component: AssetHomeComponent , canActivate:[AuthGuard], data:{role: '1'}},
      { path: 'signup', component: SignupComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-type', component: AssetTypeComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-master', component: AssetMasterComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-master-manage', component: AssetMasterManageComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-master-edit', component: AssetMasterEditComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-master-list', component: AssetMasterListComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-type-list', component: AssetTypeListComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-type-manage', component: AssetTypeManageComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-add', component: AssetAddComponent ,canActivate:[AuthGuard], data:{role: '1'}},
      { path: 'asset-definition', component: AssetDefinitionComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-type-edit', component: AssetTypeEditComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-definition-edit', component: AssetDefinitionEditComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-definition-add', component: AssetDefinitionAddComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-definition-list', component: AssetDefinitionListComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'asset-definition-manage', component: AssetDefinitionManageComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'vendor', component: VendorComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'vendor-add', component: VendorAddComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'vendor-edit', component: VendorEditComponent,canActivate:[AuthGuard], data:{role: '1'} },
      { path: 'vendor-list', component: VendorListComponent ,canActivate:[AuthGuard], data:{role: '1'}},
      { path: 'vendor-manage', component: VendorManageComponent ,canActivate:[AuthGuard], data:{role: '1'}}
    ]
  },

  { path: '**', component: LoginPageComponent }

];


@NgModule({
  declarations: [LoginPageComponent, DashboardComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(loginRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
