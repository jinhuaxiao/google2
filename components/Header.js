import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/dist/client/image'
import { useRouter } from 'next/router'
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {

    const searchInputRef = useRef(null);
    const router = useRouter();
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) {
            return;
        }

        console.log(term);
        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
                <Image 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" 
                height={40} width={120} className="cursor-pointer" 
                onClick={() => router.push('/')}
                />
                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center '>
                    <input ref={searchInputRef} type="text" placeholder="Search" className="flex w-full flex-grow focus:outline-none" />
                    <XIcon 
                        className='h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                        onClick={() => searchInputRef.current.value = ''}
                    />
                    <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 cursor-pointer' />
                    <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer' />
                    <button hidden type="submit" onClick={search}  >search</button>
                </form>
                <Avatar className='ml-auto' url="https://thispersondoesnotexist.com/image"/>
            </div>

            <HeaderOptions />
        </header>
    )

}

export default Header;