export default function PlaceContentCenter({ children }) {
    return (
        <div className='bg-black'>
            <div className='bg-violet-900 text-violet-50 min-h-screen flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg wfull'>{children}</div>
            </div>
        </div>
    );
}
