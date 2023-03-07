import { NextRouter } from "next/router";

export const SetupApp = async (words: string[], currentWord: string, setCurrentWord: Function, setModalOpen: Function, router: NextRouter) => {
    let open_date = Date.now();
    if (words.length) {
        setInterval(() => {
            const newWord = words.filter((word) => word !== currentWord)[Math.floor(Math.random() * (words.length - 1))];
            setCurrentWord(newWord);
        }, 3500);
    }

    let fetchErrored = false;
    const integrityFetch = await fetch(`api/integrity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
    }).catch((error: Error) => {
        fetchErrored = true;
        console.log("[Integrity Check] Critical API error encountered: " + error + "");
    });
    const integrityData = integrityFetch && (await integrityFetch.json());
    setTimeout(() => {
        console.log("[Debug] 1m on site, showing modal");
        setModalOpen(true);
    }, 1000 * 60);
    let ready_date = Date.now();
    if (!integrityData || integrityData.suspicious) {
        const handleContextmenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextmenu);
        console.log("[Debug] The detected user is suspicious, disabling right click. No further action is needded");
    }
    if (integrityData && integrityData.dangerous) {
        console.log("[Debug] The detected user is dangerous, blocking access to the site");
        router.push("https://pauldb09.dev/block/");
    }
    console.log(`[App Ready] Client-Side application loaded in ${ready_date - open_date}ms\n\nIntegrity data: ${fetchErrored ? "Data can't be retrieved" : integrityData}`);
    return { time: ready_date - open_date, integrity: { error: fetchErrored, data: fetchErrored ? "Data can't be retrieved" : integrityData } };
};
