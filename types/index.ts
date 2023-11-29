import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	textStyles?: string;
	btnType?: 'button' | 'submit';
	rightIcon?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	isDisabled?: boolean;
}
export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}
export interface CustomFilterProps {
	title: string;
}

export interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}
