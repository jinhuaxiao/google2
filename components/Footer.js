import {GlobeIcon } from "@heroicons/react/solid";

function Footer() {
    return (
        <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
            <div className="px-8 py-3">
                <p>Unite Kingdom</p>
            </div>
            <div className="grid grid-cols-1">
                <div>
                    <GlobeIcon className='h-5 mr-1 text-green-700 rounded-full hover:bg-gray-400 cursor-pointer' />
                    Carbon neutral since 2007
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How search works</p>
                </div>

                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Setting</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer