import { useEffect, useState } from "react";
import { GenerationParameters } from "../../models/models";
import { Spinner } from "../Spinner";
import { generate } from "../../services/ai";
import { ITextToImage } from "@runware/sdk-js";

export const Task = ({ info }: { info: GenerationParameters }) => {
    const [isPending, setIsPending] = useState(true);
    const [result, setResult] = useState<ITextToImage | null>(null);

    useEffect(() => {
        console.log("generating");
        generate(info).then((result) => {
            if (result) {
                setIsPending(false);
                setResult(result[0]);
            }
        });
    }, [info]);

    return (
        <div className="p-4 bg-black flex flex-col flex-shrink-0 items-center">
            {isPending && <Spinner />}

            {!isPending && result && (
                <img
                    src={result.imageURL}
                    className="h-[150px] md:h-auto cursor-pointer"
                    onClick={() => window.open(result.imageURL, "_blank")}
                />
            )}
            {info.prompt}
        </div>
    );
};
