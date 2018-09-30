import { Form, Section } from "./";

export interface Tab {
	key: number;
	id: string;
	displayName: string;
	order: number;
	form?: Form;
	sections?: Section[];
}