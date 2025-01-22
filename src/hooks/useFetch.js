import { useEffect, useState } from 'react'
import { URL } from '../apiCofig/api';

export const useFetch = (setFilterData, baseUrl) => {
    const [response, setResponse] = useState(null);
    const [responseError, setResponseError] = useState({});

    useEffect(() => {
        if (!baseUrl) {
            setResponseError({
                message: "Base url is required",
                error : true
            });
            return;
        }
        async function fetchData() {
            try {
                const response = fetch(`${URL}/${baseUrl}`);
                await response?.then((res) => res?.json()).then((data) => {
                    console.log(data, 'data')
                    setResponse(data)
                    setFilterData(data)
                }).catch((err) => {
                    setResponseError(err)
                })
            } catch (error) {
                setResponseError(error)
            }
        }
        fetchData();

    }, [baseUrl, setFilterData]);
    return [response, responseError]
}
