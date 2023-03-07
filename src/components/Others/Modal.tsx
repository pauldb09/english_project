import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { YellowLink } from "./YellowLink";
export const Modal = ({ isModalOpen, setModalOpen }: any) => {
    let [modalOpenTimes, setModalOpenCount]: any = useState(0);
    let nullRef = useRef(null);

    const closeModal = () => {
        console.log("[Debug] Attempting to close Dialog");
        setModalOpenCount(0);

        setModalOpen(false);
    };

    const handeModalClick = () => {
        console.log("[Debug] Handling modal click");
        if (modalOpenTimes === 2) {
            setModalOpenCount(0);
            closeModal();
        } else {
            setModalOpenCount(2);
        }
    };
    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal} initialFocus={nullRef}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-12 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="bg-black1 w-full max-w-md transform overflow-hidden rounded- p-2 text-left align-middle shadow-xl transition-all">
                                <div className="bg-black1 border-none py-24 sm:py-32">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="mx-auto max-w-2xl sm:text-center">
                                            {modalOpenTimes === 0 && (
                                                <h2 ref={nullRef} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                                    Do you want to make a <YellowLink word={"difference"}></YellowLink> ?
                                                </h2>
                                            )}
                                            {(modalOpenTimes === 2 || modalOpenTimes === 2) && (
                                                <h2 ref={nullRef} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                                    Donation to support Kenya's Environement
                                                </h2>
                                            )}
                                            {modalOpenTimes === 0 && <p className="mt-6 text-lg leading-8 text-white">The kenyan environment can't wait anymore, we need you to help us now!</p>}
                                            {modalOpenTimes === 2 && <p className="mt-6 text-lg leading-8 text-white">Please select the size of your donation</p>}
                                        </div>
                                        <div className="mx-auto mt-16 max-w-2xl rounded-3xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                                {modalOpenTimes === 2 && (
                                                    <div>
                                                        <Link href={"https://www.patreon.com/join/6247943"}>
                                                            <div className="hover:cursor-pointer hover:bg-black3 rounded-2xl bg-black2 py-4 text-center ring-1 ring-inset ring-black2 lg:flex lg:flex-col lg:justify-center lg:py-4">
                                                                <div className="mx-auto max-w-xs px-8">
                                                                    <p className="text-base font-semibold text-white">100 new trees / 2kg less plastic!</p>
                                                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                                        <span className="text-5xl font-bold tracking-tight text-white">$150</span>
                                                                        <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                                                                    </p>
                                                                    <p className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                                        Select
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <br></br>
                                                        <Link href={"https://www.patreon.com/join/6247943"}>
                                                            <div className="hover:cursor-pointer hover:bg-black3 rounded-2xl bg-black2 py-4 text-center ring-1 ring-inset ring-black2 lg:flex lg:flex-col lg:justify-center lg:py-4">
                                                                <div className="mx-auto max-w-xs px-8">
                                                                    <p className="text-base font-semibold text-white">50 new trees / 1kg less plastic!</p>
                                                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                                        <span className="text-5xl font-bold tracking-tight text-white">$70</span>
                                                                        <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                                                                    </p>
                                                                    <a
                                                                        href="#"
                                                                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                                    >
                                                                        Select
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )}
                                                <div
                                                    onClick={() => handeModalClick()}
                                                    className="place-content-center hover:cursor-pointer content-center mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none hover:bg-white hover:text-black text-white"
                                                >
                                                    <div className="place-content-center text-center content-center -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                                        <button
                                                            type="button"
                                                            className="hover:text-black text-center place-self-center rounded-md border border-transparent text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        >
                                                            {modalOpenTimes === 0 ? "Donate" : "Cancel, go back to watch the world burning!"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
