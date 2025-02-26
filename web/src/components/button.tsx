import type { ComponentProps } from "react";

/*Tem acesso as todas as propriedades de um botão normal*/
interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex justify-between px-5 h-12 items-center bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/>
	);
}
