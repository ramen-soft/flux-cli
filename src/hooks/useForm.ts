import { useState } from "react";

export const useForm = <T>(initialState: T) => {
    const [formState, setFormState] = useState<T>(initialState);

    const setValue = (name: string, value: string) => {
        setFormState({ ...formState, [name]: value });
    };

    const onInputChange = ({
        target,
    }: {
        target: HTMLElement & { name: string; value: string };
    }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialState);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        setValue,
        onResetForm,
    };
};
