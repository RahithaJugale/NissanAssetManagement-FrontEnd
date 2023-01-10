import { AssetType } from "../../asset-type/shared/asset-type";

export class AssetDefinition {

    assetDefinitionId: number = 0;
    name: string = '';
    assetTypeId: number = 0;
    classId: number = 0;
    isActive: boolean = false;

    assetType: AssetType;
}
