import { Form, Field } from "./";

export interface Entity {
	key: number;
	id: string;
	displayName: string;
	forms?: Form[];
	fields?: Field[];
}