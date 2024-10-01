import { useForm } from "../../hooks/useForm";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import {
    availableModels,
    availableSchedulers,
    GenerationParameters,
} from "../../models/models";
import { useEffect } from "react";

export const Settings = ({
    loading,
    onGenerate,
}: {
    loading: boolean;
    onGenerate: (data: GenerationParameters) => void;
}) => {
    const { formState, onInputChange, setValue } =
        useForm<GenerationParameters>({
            prompt: "a cat",
            model: "runware:100@1",
            width: 1024,
            height: 1024,
        });

    useEffect(() => {
        setValue(
            "modelType",
            availableModels.find((am) => am.id === formState.model)!.type
        );
    }, [formState.model]);

    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1">
                <label>Model</label>
                <select
                    className="rounded-md text-sm p-2"
                    name="model"
                    value={formState.model}
                    disabled={loading}
                    onChange={onInputChange}
                >
                    <option></option>
                    {availableModels
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => (
                            <option key={item.id} value={item.id}>
                                [{item.type}] {item.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label>Prompt</label>
                <textarea
                    className="rounded-md text-sm p-2"
                    name="prompt"
                    value={formState.prompt}
                    disabled={loading}
                    onChange={onInputChange}
                ></textarea>
            </div>

            {formState.modelType != "FLUX" && (
                <div className="flex flex-col gap-1">
                    <label>Neg. Prompt</label>
                    <textarea
                        className="rounded-md text-sm p-2"
                        name="negativePrompt"
                        value={formState.negativePrompt}
                        disabled={loading}
                        onChange={onInputChange}
                    ></textarea>
                </div>
            )}

            <div className="flex gap-1">
                <div className="flex flex-col gap-1 flex-1">
                    <label>Width</label>
                    <input
                        className="w-full rounded-md text-sm p-2"
                        name="width"
                        value={formState.width}
                        disabled={loading}
                        onChange={onInputChange}
                    ></input>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label>Height</label>
                    <input
                        className="w-full rounded-md text-sm p-2"
                        name="height"
                        value={formState.height}
                        disabled={loading}
                        onChange={onInputChange}
                    ></input>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label>Seed</label>
                <input
                    className="rounded-md text-sm p-2"
                    name="seed"
                    value={formState.seed}
                    disabled={loading}
                    onChange={onInputChange}
                ></input>
            </div>

            <div className="flex gap-1">
                <div className="flex flex-col gap-1 flex-1">
                    <label>CFG Scale</label>
                    <input
                        className="w-full rounded-md text-sm p-2"
                        name="cfgScale"
                        value={formState.cfgScale}
                        disabled={loading}
                        onChange={onInputChange}
                    ></input>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <label>Steps</label>
                    <input
                        className="w-full rounded-md text-sm p-2"
                        name="steps"
                        value={formState.steps}
                        disabled={loading}
                        onChange={onInputChange}
                    ></input>
                </div>
            </div>

            {formState.modelType != "FLUX" && (
                <div className="flex flex-col gap-1">
                    <label>Scheduler</label>
                    <select
                        className="rounded-md text-sm p-2"
                        name="scheduler"
                        value={formState.scheduler}
                        disabled={loading}
                        onChange={onInputChange}
                    >
                        <option>Default</option>
                        {availableSchedulers.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="flex justify-end">
                <Button
                    variant="primary"
                    onClick={() => onGenerate({ ...formState })}
                    icon={
                        <Spinner
                            className={`ad ${loading ? "block" : "hidden"}`}
                        />
                    }
                >
                    Generate
                </Button>
            </div>
        </div>
    );
};
