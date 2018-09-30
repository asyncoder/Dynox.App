import { Field } from "./";

export interface Control {
  key: number;
  visible: boolean;
  readOnly: boolean;
  searchable: boolean;
  field?: Field;
}