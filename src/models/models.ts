export interface GenerationParameters {
    id?: string;
    prompt: string;
    negativePrompt?: string;
    width?: number;
    height?: number;
    model: string;
    modelType?: string;
    seed?: number;
    cfgScale?: number;
    steps?: number;
    scheduler?: string;
}

export interface ModelEntry {
    id: string;
    name: string;
    type: "SD15" | "SDXL" | "FLUX";
}

export interface SchedulerEntry {
    id: string;
    name: string;
}

export const availableSchedulers: SchedulerEntry[] = [
    { id: "DDIMScheduler", name: "DDIM" },
    { id: "DDIMInverseScheduler", name: "DDIM Inverse" },
    { id: "DDPMScheduler", name: "DDPM" },
    { id: "DEISMultistepScheduler", name: "DEIS Multistep" },
    { id: "DPMSolverSinglestepScheduler", name: "DPM-Solver Single-step" },
    { id: "DPMSolverMultistepScheduler", name: "DPM-Solver Multi-step" },
    { id: "DPMSolverMultistepInverse", name: "DPM-Solver Multi-step Inverse" },
    { id: "DPMSolverSDEScheduler", name: "DPM-Solver SDE" },
    { id: "HeunDiscreteScheduler", name: "Heun" },
    { id: "KDPM2DiscreteScheduler", name: "KDPM2" },
    { id: "KDPM2AncestralDiscreteScheduler", name: "KDPM2 Ancestral" },
    { id: "KarrasVeScheduler", name: "Karras VE" },
    { id: "LMSDiscreteScheduler", name: "LMS" },
    { id: "PNDMScheduler", name: "PNDM" },
    { id: "ScoreSdeVeScheduler", name: "Score SDE VE" },
    { id: "ScoreSdeVpScheduler", name: "Score SDE VP" },
    { id: "IPNDMScheduler", name: "IPNDM" },
    { id: "EulerDiscreteScheduler", name: "Euler" },
    { id: "EulerAncestralDiscreteScheduler", name: "Euler Ancestral" },
    { id: "EDMEulerScheduler", name: "EDM Euler" },
    { id: "FlowMatchEulerDiscreteScheduler", name: "FlowMatch Euler" },
    { id: "VQDiffusionScheduler", name: "VQ Diffusion" },
    { id: "UniPCMultistepScheduler", name: "UniPC Multistep" },
    { id: "RePaintScheduler", name: "RePaint" },
    { id: "DPM++ 2M Karras", name: "DPM++ 2M Karras" },
    { id: "DPM++ 2M SDE Karras", name: "DPM++ 2M SDE Karras" },
    { id: "DPM++ SDE Karras", name: "DPM++ SDE Karras" },
    { id: "DPM++ SDE", name: "DPM++ SDE" },
    { id: "LCMScheduler", name: "LCM" },
    { id: "EDMDPMSolverMultistepScheduler", name: "EDM DPM-Solver Multi-step" },
    { id: "TCDScheduler", name: "TCD" },
];

export const availableModels: ModelEntry[] = [
    {
        id: "runware:100@1",
        name: "Flux",
        type: "FLUX",
    },
    {
        id: "civitai:43331@176425",
        name: "majicMIX realistic 麦橘写实",
        type: "SD15",
    },
    {
        id: "civitai:4384@128713",
        name: "DreamShaper",
        type: "SD15",
    },
    {
        id: "civitai:4468@57618",
        name: "Counterfeit-V3.0",
        type: "SD15",
    },
    {
        id: "civitai:7240@119057",
        name: "MeinaMix",
        type: "SD15",
    },
    {
        id: "civitai:7371@425083",
        name: "ReV Animated",
        type: "SD15",
    },
    {
        id: "civitai:7808@9208",
        name: "EasyNegative",
        type: "SD15",
    },
    {
        id: "civitai:58390@62833",
        name: "Detail Tweaker LoRA (细节调整LoRA)",
        type: "SD15",
    },
    {
        id: "civitai:6755@105924",
        name: "Cetus-Mix",
        type: "SD15",
    },
    {
        id: "civitai:12606@100675",
        name: "MeinaHentai",
        type: "SD15",
    },
    {
        id: "civitai:4629@5637",
        name: "Deep Negative V1.x",
        type: "SD15",
    },
    {
        id: "civitai:36520@76907",
        name: "GhostMix",
        type: "SD15",
    },
    {
        id: "civitai:25694@143906",
        name: "epiCRealism",
        type: "SD15",
    },
    {
        id: "civitai:47274@102222",
        name: "XXMix_9realistic",
        type: "SD15",
    },
    {
        id: "civitai:133005@782002",
        name: "Juggernaut XL",
        type: "SDXL",
    },
    {
        id: "civitai:12597@14856",
        name: "墨心 MoXin",
        type: "SD15",
    },
    {
        id: "civitai:25494@177164",
        name: "Beautiful Realistic Asians",
        type: "SD15",
    },
    {
        id: "civitai:9409@384264",
        name: "万象熔炉 | Anything XL",
        type: "SDXL",
    },
    {
        id: "civitai:15003@846876",
        name: "CyberRealistic",
        type: "SD15",
    },
];
