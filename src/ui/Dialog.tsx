import {ReactNode} from "react";
import {Button} from "./Button";
import clsx from "clsx";

export function Dialog({children, onClose, open}: { children: ReactNode, onClose: (value:boolean) => void,open: boolean }) {
    return (
        <div className={clsx(
            "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full",
            open ? "" : "hidden"
            )}
        >
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 border border-orange-200 w-96 shadow-lg rounded-[10px] bg-white z-20"
        >
            <div className="flex justify-end mb-5">
                <Button onClick={() => onClose(false)}>×</Button>
            </div>
            {children}
        </div>
        </div>
    )
}
