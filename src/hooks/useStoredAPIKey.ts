import { createContext, useEffect, useState } from "react";

const RUNWARE_APIKEY_ITEM_KEY = "fluxcli-runware-api-key";

export const StoredAPIContext = createContext<{ key: string | null }>({
    key: null,
});

export const useStoredAPIKey = () => {
    const [APIKey, setAPIKey] = useState<string | null>(() => {
        return localStorage.getItem(RUNWARE_APIKEY_ITEM_KEY);
    });

    useEffect(() => {
        if (APIKey) {
            localStorage.setItem(RUNWARE_APIKEY_ITEM_KEY, APIKey);
        }
    }, [APIKey]);

    return { APIKey, setAPIKey };
};
