import { Runware } from "@runware/sdk-js";
import { GenerationParameters } from "../models/models";

const runware = new Runware({
    apiKey: import.meta.env.VITE_RUNWARE_API_KEY,
});

export const generate = (params: GenerationParameters) => {
    const { prompt, width, height } = params;
    return runware.requestImages({
        positivePrompt: prompt,
        width: +width!,
        height: +height!,
        model: params.model || "civitai:25694@143906",
        //scheduler: "EulerAncestralDiscreteScheduler",
        outputType: "URL",
        outputFormat: "WEBP",
    });
};
