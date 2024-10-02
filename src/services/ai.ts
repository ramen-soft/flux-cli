import { Runware, RunwareClient } from "@runware/sdk-js";
import { GenerationParameters } from "../models/models";

let runware: RunwareClient | null = null;

export const generate = (apiKey: string, params: GenerationParameters) => {
    if (!runware) {
        runware = new Runware({ apiKey });
    }
    const { prompt, width, height } = params;
    console.log(params);
    return runware.requestImages({
        positivePrompt: prompt,
        negativePrompt: params.negativePrompt,
        width: +width!,
        height: +height!,
        model: params.model || "civitai:25694@143906",
        seed: +params.seed!,
        CFGScale: +params.cfgScale!,
        steps: +params.steps!,
        scheduler: params.modelType != "FLUX" ? params.scheduler : "",
        outputType: "URL",
        outputFormat: "WEBP",
    });
};
