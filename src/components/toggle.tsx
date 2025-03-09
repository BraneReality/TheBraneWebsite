
import { ReactNode, useState } from "react";

interface ToggleArgs {
    children?: ReactNode,
    className?: string
}

export default function Toggle({ children, className }: ToggleArgs) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className}>
            <p onClick={() => setIsOpen((prev) => !prev)}
                className="cursor-pointer select-none">{(isOpen ? " hide ↑" : "show ↕")}</p>
            {isOpen && (
                <div className="mt-4 p-3 border rounded">
                    {children}
                </div>
            )}
        </div>
    );
};
