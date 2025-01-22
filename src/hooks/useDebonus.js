import { useEffect, useState } from 'react'

export const useDebonus12 = (inputValue, time) => {
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setSearchValue(inputValue)
        }, [time]);

        return () => clearTimeout(timerId);
    }, [time, inputValue])
    return searchValue;
}
