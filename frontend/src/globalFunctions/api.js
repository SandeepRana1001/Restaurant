/* eslint-disable */


class API {
    GET = async (url) => {

    }

    POST = async (url, data) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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


const apiObject = new API();

export default apiObject