import { Control } from "./";

export interface Box {
  key: number;
  id: string;
  type: BoxType;
  tile?: string;
  controls?: Control[]
}

type BoxType = "grid" | "detail";