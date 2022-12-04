import { BaseModel } from '../base/base.model';

export interface Category extends BaseModel {
  id: string | number;
  name: string;
}
