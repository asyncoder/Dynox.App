import { Entity, Tab } from "./";

export interface Form {
	key: number;
	id: string;
	displayName: string;
	entity?: Entity;
	tabs?: Tab[];
}