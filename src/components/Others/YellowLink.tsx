export const YellowLink = ({ word, link, noUnderline }: any) => {
    return (
        <a
            className={noUnderline ? "text-yellow" : "hover:text-yellow underline decoration-sky-500 underline decoration-4 underline underline-offset-8"}
            style={{
                textDecorationColor: noUnderline ? "" : "#D4B733",
            }}
            href={link ? link : "#"}
        >
            {word}
        </a>
    );
};
