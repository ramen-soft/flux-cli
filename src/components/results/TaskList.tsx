import { Task } from "./Task";
import { GenerationParameters } from "../../models/models";
import { EmptyResults } from "./EmptyResults";

export const TaskList = ({ tasks }: { tasks: GenerationParameters[] }) => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-hidden relative md:h-full h-[230px] w-full p-4">
                {!tasks.length && <EmptyResults />}
                <section className="absolute flex h-full md:h-auto md:relative md:grid md:grid-cols-4 items-start gap-2">
                    {tasks.map((task) => (
                        <Task key={task.id} info={task} />
                    ))}
                </section>
            </div>
        </>
    );
};
