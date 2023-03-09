/* eslint-disable @next/next/no-html-link-for-pages */
import { YellowLink } from "@/components/Others/YellowLink";
import Script from "next/script";
import { useEffect, useState } from "react";
import { corruptionNumbers, corruptionStats } from "@/lib/data";
import { SetupApp } from "@/lib/functions";
import { Navbar } from "@/components/Sections/Navbar";
import { Modal } from "@/components/Others/Modal";
import { useRouter } from "next/router";
let appLoaded = false;

export default function Example() {
    let open_date = Date.now();
    const [isModalOpen, setModalOpen]: any = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (appLoaded) return;
        appLoaded = true;
        SetupApp([], null, () => null, setModalOpen, router);
    }, [open_date, router]);

    return (
        <div className="">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}></Modal>

            <div
                className="content"
                style={{
                    position: "initial",
                    background: "rgb(6 27 64 / 92%)",
                    color: "#f1f1f1",
                    width: "100%",
                    padding: "53px",
                }}
            >
                <Navbar setModalOpen={setModalOpen}></Navbar>
                <main>
                    <div className="relative px-2 lg:px-8 ">
                        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-4s">
                            <div className={`text-left`}>
                                <h1 className="text-4xl font-bold  tracking-tight text-white-900 sm:text-6xl px-0">
                                    Fraud scandal: <YellowLink word={"Our response"}></YellowLink>
                                </h1>
                                <br></br>
                                <br></br>
                                <div className="flex justify-between">
                                    <div className="flex justify-start ">
                                        <div>
                                            {" "}
                                            <img
                                                className="hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100  h-7 w-7 rounded-full ring-2 ring-yellow"
                                                src="https://avatars.githubusercontent.com/u/70904183?v=4"
                                                alt=""
                                            />
                                        </div>
                                        <div className="">
                                            {" "}
                                            &nbsp;&nbsp; <YellowLink url={"https://pauldb09.dev"} word={"Pauldb09"}></YellowLink>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="">
                                            {" "}
                                            <a>Published on: 20/02/2023</a>
                                            <br></br>
                                            <a>Estimated read: 5 minutes</a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-24" id="about">
                                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 ">
                                            <div>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                    1. What happened <YellowLink word={"exactly"}></YellowLink>
                                                </h2>
                                                <br></br>
                                                <p className="mt-4 text-gray-500">Before we start, it is crucial to provide more context so you can have an objective opinion.</p>
                                                <p className="mt-4 text-gray-500">
                                                    It all started with{" "}
                                                    <YellowLink
                                                        word={"the annual report "}
                                                        noUnderline={true}
                                                        link={"https://www.amnesty.org/en/location/africa/east-africa-the-horn-and-great-lakes/kenya/report-kenya/"}
                                                    ></YellowLink>
                                                    of Amnesty International. The report, comprising 100 lines, detailed the state of affairs in Kenya. Given our status as the foremost environmental
                                                    organization operating in the region, our inclusion in the report was inevitable. Regrettably, our organization was not portrayed in the manner we
                                                    had hoped. Rather than highlighting our activities, Amnesty International exposed a corruption scandal within our ranks. The key points of the
                                                    scandal are as follows:
                                                </p>
                                                <br></br>
                                                <dl className="grid gap-x-8 gap-y-4 grid-cols-2 md:grid-cols-3">
                                                    {corruptionStats.map((feature) => (
                                                        <div
                                                            key={feature.name}
                                                            className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:cursor-pointer px-2 py-2 rounded-lg bg-blue"
                                                        >
                                                            <div className="flex items-stretch ">
                                                                <dt className="font-medium text-gray-900"> {feature.name}</dt>
                                                            </div>
                                                            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                                        </div>
                                                    ))}
                                                </dl>
                                                <p className="mt-4 text-gray-500">
                                                    As you might imagine, as soon as this rapport came out I, as CEO of Kenyan Environement Matters™ I contacted Amnesty. They kindly accepted my
                                                    request and proceeded to show me the evidences they had. Among the evidence, were{" "}
                                                    <YellowLink
                                                        word={"15+ "}
                                                        noUnderline={true}
                                                        link={"https://www.amnesty.org/en/location/africa/east-africa-the-horn-and-great-lakes/kenya/report-kenya/"}
                                                    ></YellowLink>
                                                    classified mails from the organization leaked by an employee
                                                </p>
                                                <br></br> <br></br>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                    2. The <YellowLink word={"impact"}></YellowLink>
                                                </h2>
                                                <br></br> <br></br>
                                                <p className="mt-4 text-gray-500">
                                                    The corruption scandal exposed by Amnesty International's report has had a significant impact on our organization. The revelation of financial
                                                    impropriety and misappropriation of funds has damaged our reputation and led to a loss of trust among our stakeholders. Employees within the
                                                    organization have been affected, as the scandal has led to layoffs and a decrease in funding for our programs. The prevalence of nepotism and
                                                    cronyism has also led to a sense of disillusionment among staff members who were passed over for promotions or felt their contributions were
                                                    undervalued. In addition, the lack of accountability highlighted in the report has led to increased scrutiny from regulatory bodies and a need for
                                                    greater transparency and oversight within the organization. As we move forward, it is imperative that we take action to address the issues raised by
                                                    the report and work to rebuild the trust of our stakeholders.
                                                </p>
                                                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                                                    {corruptionNumbers.map((stat) => (
                                                        <div
                                                            key={stat.name}
                                                            className="hover:cursor-pointer flex flex-col-reverse transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100"
                                                        >
                                                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                                            <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                                        </div>
                                                    ))}
                                                </dl>
                                                <br></br> <br></br>
                                                <p className="mt-4 text-gray-500">
                                                    The loss of $900,000 in funds, termination of 80 employees, and loss of 2,143 donors is a significant blow to the organization. The impact of the
                                                    corruption scandal will require immediate action to rebuild the organization's reputation and regain the trust of stakeholders.
                                                </p>
                                                <br></br> <br></br>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                                    2. What's <YellowLink word={"Next"} link={"https://nextjs.org"}></YellowLink> ?
                                                </h2>
                                                <br></br> <br></br>
                                                <p className="mt-4 text-gray-500">
                                                    Moving forward, we recognize the need to take immediate action to address the issues raised by the corruption scandal. To begin, we will be
                                                    conducting a thorough review of our financial management and accountability practices, with the goal of implementing more robust oversight
                                                    mechanisms to prevent further instances of financial impropriety. We will also be implementing a clear policy regarding nepotism and cronyism to
                                                    ensure that promotions and hiring are based on merit rather than personal connections. Additionally, we will be redoubling our efforts to
                                                    communicate with our stakeholders, working to rebuild the trust that has been lost and engaging in open and transparent communication regarding the
                                                    actions we are taking to address the issues raised by the report. It is our hope that through these measures, we can begin to move forward from this
                                                    difficult situation and continue to work toward our mission of environmental conservation and sustainability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        All right reserved © 2023, Kenyan Environement Matters™ is a non profit organization under the law of 1905{" "}
                        <a href="//www.dmca.com/Protection/Status.aspx?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" title="DMCA.com Protection Status" className="dmca-badge">
                            {" "}
                            <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=4c046004-1ab5-4a39-b60b-cb5f2b92ff12" alt="DMCA.com Protection Status" />
                        </a>
                        <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></Script>
                    </div>
                </main>
            </div>
        </div>
    );
}
