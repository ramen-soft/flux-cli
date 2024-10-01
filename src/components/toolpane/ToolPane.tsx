import { Settings } from "./Settings";
import { ToolPaneHeader } from "./ToolPaneHeader";
import { GenerationParameters } from "../../models/models";

export const ToolPane = ({
    onGenerate,
    loading,
}: {
    onGenerate: (data: GenerationParameters) => void;
    loading: boolean;
}) => {
    return (
        <div className="p-4 md:max-w-[320px] md:h-full overflow-auto flex-shrink-0 flex-grow-1">
            <ToolPaneHeader />

            <Settings onGenerate={onGenerate} loading={loading} />
        </div>
    );
};
