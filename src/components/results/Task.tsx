import { useEffect, useState } from "react";
import { GenerationParameters } from "../../models/models";
import { Spinner } from "../Spinner";
import { generate } from "../../services/ai";
import { ITextToImage } from "@runware/sdk-js";
import { useStoredAPIKey } from "../../hooks/useStoredAPIKey";

export const Task = ({ info }: { info: GenerationParameters }) => {
    const [isPending, setIsPending] = useState(true);
    const [result, setResult] = useState<ITextToImage | null>(null);
    const { APIKey } = useStoredAPIKey();

    useEffect(() => {
        console.log("generating");
        if (APIKey) {
            generate(APIKey, info).then((result) => {
                if (result) {
                    setIsPending(false);
                    setResult(result[0]);
                }
            });
        }
    }, [info, APIKey]);

    return (
        <div className="p-4 bg-black flex flex-col flex-shrink-0 items-center aspect-square">
            {isPending && <Spinner />}

            {!isPending && result && (
                <img
                    src={result.imageURL}
                    className="h-[150px] md:h-auto cursor-pointer"
                    onClick={() => window.open(result.imageURL, "_blank")}
                />
            )}
            <span className="max-w-[150px] md:max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">
                {info.prompt}
            </span>
        </div>
    );
};
