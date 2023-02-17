import * as Icon from "@/components/Others/Icons";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <main className="flex flex-col items-center justify-center w-full p-20 text-center gap-4">
                <Icon.WaveHand className="h-48 animate-wave origin-bottom-left mb-8" />

                <h1 className="text-6xl font-bold">
                    <span>Welcome to website </span>
                </h1>
            </main>
        </div>
    );
}
