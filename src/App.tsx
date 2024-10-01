import { useEffect, useState } from "react";
import "./App.css";
import { ToolPane } from "./components/toolpane/ToolPane";
import { GenerationParameters } from "./models/models";
import { TaskList } from "./components/results/TaskList";
import { v4 as uuid } from "uuid";

function App() {
    const [loading, setLoading] = useState(false);

    const [tasks, setTasks] = useState<GenerationParameters[]>([]);

    const handleOnGenerate = (data: GenerationParameters) => {
        data.id = uuid();
        setTasks([data, ...tasks]);
    };

    useEffect(() => {
        let to: number;
        if (loading) {
            to = setTimeout(() => setLoading(false), 500);
        }
        return () => clearTimeout(to);
    }, [loading]);

    return (
        <>
            <main className="flex flex-col md:flex-row h-full justify-between">
                <ToolPane
                    onGenerate={(data) => handleOnGenerate(data)}
                    loading={loading}
                />
                <TaskList tasks={tasks} />
            </main>
        </>
    );
}

export default App;
