"use client"


import {FC} from "react";

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: FC<MenuItemProps> = ({onClick, label}) => {
    return (
        <div
            onClick={onClick}
            className="
            px-4
            py-3
            bg-neutral-100
            font-semibold
            transition
        ">
            {label}
        </div>
    );
};

export default MenuItem;