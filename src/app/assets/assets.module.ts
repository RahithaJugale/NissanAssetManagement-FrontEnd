import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetHomeComponent } from './asset-home/asset-home.component';
import { AssetTypeComponent } from './asset-type/asset-type.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { AssetTypeListComponent } from './asset-type/asset-type-list/asset-type-list.component';
import { AssetTypeManageComponent } from './asset-type/asset-type-manage/asset-type-manage.component';
import { AssetAddComponent } from './asset-type/asset-add/asset-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';
import { AssetTypeEditComponent } from './asset-type/asset-type-edit/asset-type-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AssetDefinitionAddComponent } from './asset-definition/asset-definition-add/asset-definition-add.component';
import { AssetDefinitionEditComponent } from './asset-definition/asset-definition-edit/asset-definition-edit.component';
import { AssetDefinitionManageComponent } from './asset-definition/asset-definition-manage/asset-definition-manage.component';
import { AssetDefinitionListComponent } from './asset-definition/asset-definition-list/asset-definition-list.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetMasterEditComponent } from './asset-master/asset-master-edit/asset-master-edit.component';
import { AssetMasterListComponent } from './asset-master/asset-master-list/asset-master-list.component';
import { AssetMasterManageComponent } from './asset-master/asset-master-manage/asset-master-manage.component';
//import {NgxPaginationModule} from 'ngx-pagination';

const assetRoutes: Routes = [

  { path: '', component: AssetHomeComponent,},
  { path: 'asset-home', component:AssetHomeComponent},
  {path:'asset-type', component: AssetTypeComponent},
  { path: 'asset-master', component: AssetMasterComponent },
  { path: 'asset-master-manage', component: AssetMasterManageComponent },
  { path: 'asset-master-edit', component: AssetMasterEditComponent },
  { path: 'asset-master-list', component: AssetMasterListComponent },
  {path:'asset-type-list', component: AssetTypeListComponent},
  { path: 'asset-type-manage', component: AssetTypeManageComponent },
  { path: 'asset-add', component: AssetAddComponent },
  { path: 'asset-definition', component: AssetDefinitionComponent },
  { path: 'asset-type-edit', component: AssetTypeEditComponent },
  { path: 'asset-definition-edit', component: AssetDefinitionEditComponent },
  { path: 'asset-definition-add', component: AssetDefinitionAddComponent },
  { path: 'asset-definition-list', component: AssetDefinitionListComponent },
  { path: 'asset-definition-manage', component: AssetDefinitionManageComponent }

 // { path: '**', component: LoginPageComponent },

];

@NgModule({
  declarations: [AssetHomeComponent, AssetTypeComponent, AssetTypeListComponent, AssetTypeManageComponent, AssetAddComponent, AssetDefinitionComponent, AssetTypeEditComponent, AssetDefinitionAddComponent, AssetDefinitionEditComponent, AssetDefinitionManageComponent, AssetDefinitionListComponent, AssetMasterComponent, AssetMasterEditComponent, AssetMasterListComponent, AssetMasterManageComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(assetRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    //NgxPaginationModule
  ]
})
export class AssetsModule { }
