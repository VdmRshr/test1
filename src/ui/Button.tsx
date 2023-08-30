import clsx from "clsx";

export function Button({...props}: JSX.IntrinsicElements["button"]) {
    return (
        <button
            className={clsx(
                "bg-white text-stone-950 border border-orange-200 hover:bg-orange-200 h-8 rounded-[10px] px-3 text-body-5-m whitespace-nowrap transition disabled:bg-gray-300 disabled:text-gray-400",
                props.className,
            )}
            {...props}
        >
            {props.children}
        </button>
    );
}
