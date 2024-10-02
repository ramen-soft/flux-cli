import { useRef } from "react";
import { Button } from "./Button";

export const APIKeyForm = ({
    onKeySet,
}: {
    onKeySet: (key: string) => void;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const saveKey = () => {
        const key = inputRef.current?.value;
        if (key) {
            onKeySet(key);
        }
    };

    return (
        <>
            <section className="p-4">
                <h1 className="mb-4 text-3xl">Runware API key not set.</h1>
                <p className="mb-2">
                    To use Flux-Cli, you must provide your own Runware API key
                </p>
                <p className="mb-2">
                    In order to get a valid API key, sign up on Runware at the
                    following URL:
                </p>
                <p className="mb-2 text-center">
                    <a
                        className="text-orange-500"
                        target="_blank"
                        href="https://my.runware.ai/signup"
                    >
                        https://my.runware.ai/signup
                    </a>
                </p>
                <p className="mb-2">
                    Once you create a new account,{" "}
                    <b>you'll get $15 in free credits</b>.
                </p>
                <p className="mb-2">
                    Log in to your account and create a new API key at{" "}
                </p>
                <p className="mb-2 text-center">
                    <a
                        className="text-orange-500"
                        href="https://my.runware.ai/api-keys"
                    >
                        https://my.runware.ai/api-keys
                    </a>
                </p>
                <p className="mb-2">
                    Once you have an API key, enter it in the field below and
                    save it for future use:
                </p>

                <div className="flex flex-col gap-1 mt-8">
                    <label>Your API Key</label>
                    <div className="flex">
                        <input
                            ref={inputRef}
                            className="w-full rounded-md text-sm p-2 flex-auto mr-2"
                            name="width"
                        ></input>
                        <Button variant="primary" onClick={() => saveKey()}>
                            Set API Key
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
