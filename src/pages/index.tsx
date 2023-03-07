/* eslint-disable @next/next/no-html-link-for-pages */
import { YellowLink } from "@/components/Others/YellowLink";
import { Video } from "@/components/Sections/video";

import Script from "next/script";
import { useEffect, useState } from "react";
import { words, features, stats, advantages, waysOfAction } from "@/lib/data";
import { SetupApp } from "@/lib/functions";
import { Navbar } from "@/components/Sections/Navbar";
import { Modal } from "@/components/Others/Modal";
import { useRouter } from "next/router";
let appLoaded = false;

export default function Example() {
    let open_date = Date.now();
    const [currentWord, setCurrentWord]: any = useState(words[0]);
    let [currentSection, setCurrentSection]: any = useState(0);
    const [isModalOpen, setModalOpen]: any = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (appLoaded) return;
        appLoaded = true;
        SetupApp(words, currentWord, setCurrentWord, setModalOpen, router);
    }, [currentWord, open_date, router]);

    const handleSwitch = () => {
        console.log("[Debug] Handling section switch");
        setCurrentSection(1);
    };

    return (
        <div className="">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}></Modal>
            {currentSection === 0 && <Video></Video>}
            <div
                className="content"
                style={{
                    position: currentSection == 0 ? "fixed" : "initial",
                    background: currentSection == 1 ? "rgb(6 27 64 / 92%)" : "opacity-90",
                    color: "#f1f1f1",
                    width: "100%",
                    padding: "53px",
                }}
            >
                <Navbar setModalOpen={setModalOpen}></Navbar>
                <main className="scroll-smooth ">
                    <div className="relative px-4 lg:px-12 ">
                        <div className="mx-auto max-w-2xl">
                            {currentSection === 0 && (
                                <div className={`hidden sm:mb-8 sm:flex sm:justify-center mx-auto max-w-2xl py-12 sm:py-16 lg:py-4s`}>
                                    <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-sm font-semibold leading-6 text-white-900 relative rounded-full py-1 px-3 text-sm leading-6 text-white-600 ring-1 ring-white-900/10 hover:ring-white-900/20 bg-black border-black">
                                        Our response to the fraud accusations.{" "}
                                        <a href="/blog/fraud-accusations" className="font-semibold text-indigo-600">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read article <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                            <div className={`${currentSection === 0 ? "text-center" : "text-left"}`}>
                                {currentSection === 0 && (
                                    <h1 className="text-4xl font-bold  tracking-tight text-white-900 sm:text-6xl">
                                        Because our <YellowLink word={currentWord}></YellowLink> deserves something better.
                                    </h1>
                                )}
                                {currentSection === 1 && (
                                    <div className="md:flex md:items-stretch  py-32">
                                        <h1 className="text-4xl font-bold  tracking-tight text-white-900 sm:text-6xl px-0">
                                            Together, we preserve <YellowLink word={"Kenya's wildlife"}></YellowLink>
                                            <br></br>
                                            <br></br>
                                            <a href="#about">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="56"
                                                    height="56"
                                                    fill="#fff"
                                                    className=" animate-bounce text-base font-semibold leading-7 text-white-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                                    />
                                                </svg>
                                            </a>
                                        </h1>

                                        <br></br>
                                        <br></br>
                                        <img
                                            src="/images/picture_1.jpg"
                                            className="w-[12rem] sm:w-[42rem] md:-ml-4 lg:-ml-0 hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 rounded-md border-double shadow-2xl rotate-12 scale-100 translate-x-6 "
                                            alt="Sus picture immo"
                                        ></img>
                                    </div>
                                )}
                                {currentSection === 0 && (
                                    <p className="mt-6 text-lg leading-8 text-white-600">
                                        Since <YellowLink word={"1969"}></YellowLink> we're engaged <YellowLink word={"together"}></YellowLink> to make a difference. Come join us!
                                    </p>
                                )}

                                {currentSection === 1 && (
                                    <div>
                                        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="about">
                                            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 ">
                                                <div>
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                        What's the <YellowLink word={"matter"}></YellowLink> with Kenya?
                                                    </h2>
                                                    <p className="mt-4 text-gray-500">
                                                        Kenya, faces ecological challenges such as deforestation, soil erosion.. due to human activities but we can{" "}
                                                        <YellowLink word={"fix it"}></YellowLink>.
                                                    </p>
                                                    <br></br>
                                                    <dl className="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-3">
                                                        {features.map((feature) => (
                                                            <div
                                                                key={feature.name}
                                                                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer px-2 py-2 rounded-lg hover:bg-blue"
                                                            >
                                                                <div className="flex items-stretch ">
                                                                    <feature.icon className="top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />

                                                                    <dt className="font-medium text-gray-900"> {feature.name}</dt>
                                                                </div>
                                                                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                                            </div>
                                                        ))}
                                                    </dl>
                                                </div>
                                            </div>
                                            <section className="relative isolate  overflow-hidden py-24 px-6 sm:py-32 lg:px-8">
                                                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                                                    <figure className="mt-10">
                                                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                                            <p>
                                                                “A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our
                                                                people. ”
                                                            </p>
                                                        </blockquote>
                                                        <figcaption className="mt-10">
                                                            <img className="mx-auto h-16 w-16 rounded-full" src="/images/roosevelt.jpg" alt="" />
                                                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                                                <div className="font-semibold text-gray-900">Franklin Delano Roosevelt</div>
                                                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                                                    <circle cx={1} cy={1} r={1} />
                                                                </svg>
                                                                <div className="text-gray-600">32th president of the USA</div>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </section>
                                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                                <div className="mx-auto max-w-2xl lg:mx-0">
                                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                                        Our <YellowLink word={"achievements"}></YellowLink>
                                                    </h2>
                                                    <p className="mt-6 text-lg leading-8 text-gray-300">
                                                        If we've gone this far, this is because of your determination to change the world
                                                        <i> and big companies wanting to change their image</i>
                                                    </p>
                                                </div>
                                                <br></br>
                                                <div className="flex items-stretch">
                                                    <div className="flex -space-x-2">
                                                        <img
                                                            className="hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block h-8 w-8 rounded-full ring-2 ring-yellow"
                                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block h-8 w-8 rounded-full ring-2 ring-yellow"
                                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block h-8 w-8 rounded-full ring-2 ring-yellow"
                                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 inline-block h-8 w-8 rounded-full ring-2 ring-yellow"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p>
                                                        &nbsp;&nbsp;<YellowLink word={"join"} link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></YellowLink> the others <b>264</b> daily donators now!
                                                    </p>
                                                </div>
                                                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                                                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                                        {stats.map((stat) => (
                                                            <div
                                                                key={stat.name}
                                                                className="hover:cursor-pointer flex flex-col-reverse transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100"
                                                            >
                                                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                                            </div>
                                                        ))}
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                                <div className="lg:pr-8 lg:pt-4">
                                                    <div className="lg:max-w-lg">
                                                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Support Us</h2>
                                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What do we do with donations?</p>
                                                        <p className="mt-6 text-lg leading-8 text-gray-600">
                                                            You deserve the <YellowLink word={"right"}></YellowLink> to know where your money goes
                                                        </p>
                                                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                                            {advantages.map((feature) => (
                                                                <div
                                                                    key={feature.name}
                                                                    className="relative pl-9 hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100"
                                                                >
                                                                    <dt className="inline font-semibold text-gray-900">
                                                                        <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                                        {feature.name}
                                                                    </dt>{" "}
                                                                    <dd className="inline">{feature.description}</dd>
                                                                </div>
                                                            ))}
                                                        </dl>
                                                    </div>
                                                </div>
                                                <img
                                                    src="/images/picture_2.jpg"
                                                    alt="Product screenshot"
                                                    className="-rotate-12 w-[12rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[42rem] md:-ml-4 lg:-ml-0 hover:cursor-pointer  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100"
                                                    width={2432}
                                                    height={1442}
                                                />

                                                <div className=""></div>
                                            </div>
                                        </div>

                                        <div className=" py-24 sm:py-32">
                                            <div className="mx-auto  max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8">
                                                <div className="max-w-2xl">
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                        How do we <YellowLink word={"act"}></YellowLink>
                                                    </h2>
                                                    <p className="mt-6 text-lg leading-8 text-gray-600">Depending on the situation, we have chosen different types of actions.</p>
                                                </div>
                                                <br></br> <br></br>
                                                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                                    {waysOfAction.map((person) => (
                                                        <li key={person.name}>
                                                            <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 gap-x-6">
                                                                <img
                                                                    className={`rounded-lg ${person.id % 2 == 0 ? "rotate-3 skew-y-3" : "-rotate-3 -skew-y-3"}  ring-2 ring-yellow h-48 w-80`}
                                                                    src={person.imageUrl}
                                                                    alt=""
                                                                />
                                                                <br></br> <br></br>
                                                                <div>
                                                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                                    <br></br>
                                                                    <p className="text-sm leading-6 text-gray">{person.role}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                                    That's up to you <br></br> Act <YellowLink word={"now"}></YellowLink>.
                                                </h2>
                                                <p className="mt-6 text-lg leading-8 text-gray-300">Now you can't say that you don't know what's going on.</p>
                                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                                    <button
                                                        type="button"
                                                        onClick={() => setModalOpen(true)}
                                                        className="animate-bounce  text-gray-900 bg-green hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                                                    >
                                                        Save the planet
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className=" hover:animate-spin  text-gray-900 bg-red hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                                                    >
                                                        Watch Netlfix
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="relative mt-16 h-80 lg:mt-8">
                                                <img
                                                    className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                                    src="/images/picture_1.jpg"
                                                    alt="App screenshot"
                                                    width={1824}
                                                    height={1080}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {currentSection === 0 && (
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#"
                                        onClick={() => setModalOpen(true)}
                                        className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Donate now!
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => handleSwitch()}
                                        className=" animate-bounce text-base font-semibold leading-7 text-white-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                                    >
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    {currentSection === 1 && (
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            All right reserved © 2023, Kenyan Environement Matters™ is a non profit organization under the law of 1905{" "}
                            <a href="//www.dmca.com/Protection/Status.aspx?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" title="DMCA.com Protection Status" className="dmca-badge">
                                {" "}
                                <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" alt="DMCA.com Protection Status" />
                            </a>
                            <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></Script>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
