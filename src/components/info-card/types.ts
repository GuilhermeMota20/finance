import { ReactNode } from "react";

export type InfoCardProps = {
	title: string;
	value?: string | number;
	icon?: ReactNode;
	type?: "PERCENT" | "ENTRADA" | "SAIDA" | "TOTAL";
};