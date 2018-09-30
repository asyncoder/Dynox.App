import { Entity } from "./";

export interface Field {
  key: number;
  id: string;
  displayName: string;
  entity?: Entity;
}