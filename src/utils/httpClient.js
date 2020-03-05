import { config } from './config';

export async function httpClient(url, params) {
    return await fetchData(url, params);
}

async function fetchData(url, {
    body,
    method = 'GET'
} = {}) {

    const response = await fetch(`${config.apiUrl}/${url}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        //If body exist, then append to the request
        [body ? 'body' : '']: JSON.stringify(body),
        method
    });

    return await response.json();
}