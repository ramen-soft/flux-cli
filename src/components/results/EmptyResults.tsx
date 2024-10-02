export const EmptyResults = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="text-2xl md:text-4xl text-center italic text-slate-400">
                Enter your first prompt and click{" "}
                <strong className="font-semibold rainbow-text">Generate</strong>
                .
            </p>
        </div>
    );
};
