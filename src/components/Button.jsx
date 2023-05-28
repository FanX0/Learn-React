import clsx from 'clsx';

export default function Button(props) {
    const { className = 'bg-black', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                `[&>svg]:w-5 [&>svg]:h-5  [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center item-center gap-x-2  text-white px-4 py-2 h-10 rounded`
            )}>
            {text || children}
        </button>
    );
}
