import { PropsWithChildren, ReactElement } from "react";

export const Button = ({
    variant,
    onClick,
    disabled,
    className,
    icon,
    children,
}: PropsWithChildren<{
    icon?: ReactElement;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    variant?: string;
}>) => {
    const variantStyle = `
        ${className} text-nowrap rounded-md px-4 py-2 text-sm font-semibold focus:ring-2 flex align-center justify-center gap-2 fill-blue-600  disabled:bg-gray-600 disabled:text-gray-400
        ${
            !variant &&
            " text-gray-800 bg-white hover:bg-gray-200 focus:ring-gray-400 fill-gray-100"
        }
        ${
            variant == "primary" &&
            "bg-blue-700 text-white hover:bg-blue-600 focus:ring-blue-400 fill-blue-500"
        }
        ${
            variant == "secondary" &&
            "bg-teal-700 text-white hover:bg-teal-600 focus:ring-teal-400 fill-teal-600"
        }
        ${
            variant == "warn" &&
            "bg-orange-700 text-white hover:bg-orange-600 focus:ring-orange-400 fill-orange-600"
        }
        ${
            variant == "danger" &&
            "bg-red-700 text-white hover:bg-red-600 focus:ring-red-400 fill-red-500"
        }
        ${disabled ? "bg-gray-600 text-gray-400" : ""}
    `;
    return (
        <button disabled={disabled} onClick={onClick} className={variantStyle}>
            {icon}
            <div>{children}</div>
        </button>
    );
};
