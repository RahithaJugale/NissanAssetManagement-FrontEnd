import { AssetDefinition } from "src/app/assets/asset-definition/shared/asset-definition";
import { AssetType } from "src/app/assets/asset-type/shared/asset-type";
import { Vendor } from "src/app/vendors/shared/vendor";

export class PurchaseOrder {
    purchaseOrderId: number = 0;
    purchaseOrderNo: string = '';
    assetDefinitionId: number = 0;
    assetTypeId: number = 0;
    quantity: number = 0;
    vendorId: number = 0;
    orderDate: Date = new Date;
    deliveryDate: Date = new Date;
    statusId: number = 0;

    assetType:AssetType;
    assetDefinition: AssetDefinition;
    vendor:Vendor;
}
