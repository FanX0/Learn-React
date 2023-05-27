import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import clsx from 'clsx';

export default function App() {
    return (
        <div className='bg-blue-900 grid place-content-center min-h-screen'>
            <div className={'flex gap-x-2'}>
                <Button
                    {...{
                        type: 'submit',
                        onClick: () => console.log('Login with another style'),
                    }}>
                    <IconBrandFacebook />
                    Facebook
                </Button>
                <Button onClick={() => console.log(' Facebook')} type='reset'>
                    <IconBrandFacebook />
                    Facebook
                </Button>
                <Button className='bg-blue-600' onClick={() => console.log(' Twitter')} type='submit'>
                    <IconBrandTwitter />
                    Twitter
                </Button>
                <Button className='bg-black' onClick={() => console.log(' Github')} type='submit'>
                    <IconBrandGithub />
                    Github
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-red-600', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                `[&>svg]:w-5 [&>svg]:h-5  [&>svg]:stroke-1 flex item-center gap-x-2  text-white px-4 py-2 rounded`
            )}>
            {text || children}
        </button>
    );
}
