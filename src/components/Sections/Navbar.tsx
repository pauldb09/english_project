/* eslint-disable @next/next/no-html-link-for-pages */
export const Navbar = ({ setModalOpen }: any) => {
    return (
        <div className="px-6 pt-6 lg:px-8 text-white hover:cursor-pointer">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="hidden lg:flex lg:flex-1 lg:justify-start">
                    <a href="/" className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-sm font-semibold leading-6 text-white-900">
                        <img className="h-8" src="/images/kem.png" alt="" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        onClick={() => setModalOpen(true)}
                        className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-sm font-semibold leading-6 text-white-900"
                    >
                        Donate <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};
