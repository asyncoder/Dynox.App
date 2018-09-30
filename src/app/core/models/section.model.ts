import { Box, Tab, Control } from "./";

export interface Section {
	key: number;
	id: string;
	displayName: string;
	order: number;
	boxes: Box[];
	tab?: Tab;	
}