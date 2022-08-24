/* eslint-disable */


class API_AUTH {
    GET = async (url, token) => {
        let response;

        response = await fetch(`http://localhost:5000/api/${url}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        })


        let finalData = await response.json()
        // console.log(finalData)
        return finalData
    }

    POST = async (url, data, token) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data),
        };
        let statusData = {};
        const response = await fetch(`http://localhost:5000/api/${url}`, requestOptions)
        let finalData = await response.json()

        statusData.status = response.status
        statusData.ok = response.ok
        if (statusData.ok === false) {
            statusData.message = finalData.message
        } else {
            statusData.content = finalData
        }
        return statusData
    }
}


const api_auth_Object = new API_AUTH();

export default api_auth_Object