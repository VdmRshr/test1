import clsx from "clsx";

export function Textarea({...props}: JSX.IntrinsicElements["textarea"]) {

    return (
        <textarea
            placeholder={props.placeholder}
            className={clsx(
                "h-full w-full resize-none border-0 border-b border-gray-600 pb-8 focus:outline-none", props.className
            )}
            {...props}
        />

    );
}

