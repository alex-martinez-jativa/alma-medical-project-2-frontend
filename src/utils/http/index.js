const get = async (url) => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'  
        },
        method: 'GET',
    })
    return await response.json();
};

export const http = {
    get
};