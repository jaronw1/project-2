
// async function getCarMake() {
//     const response = await fetch ('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json')
//     const jsonData = await response.json
//     console.log(jsonData)
// }
// getCarMake()



async function getCarMake() {
    try {
        const response = await fetch ("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/honda?format=json", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log("success", result)
    } catch(error){
        console.error("error", error);
    }

}


