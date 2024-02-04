const infoCleaner = (arr)=>{
    if (Array.isArray(arr)){
        return arr.map((driver)=>{
            return{
                id:driver.id,
                name:driver.name.forename,
                forename:driver.name.surname,
                description:driver.description,
                image:driver.image.url,
                nationality:driver.nationality,
                dob:driver.dob,
                created: false
            }
        })
    }
}
module.exports = {
    infoCleaner
}