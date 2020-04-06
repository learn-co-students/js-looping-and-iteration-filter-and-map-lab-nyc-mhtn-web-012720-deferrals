const driversWithRevenueOver = (drivers, revenue) => {
    return drivers.filter(driver => driver.revenue >= revenue)
};

const driverNamesWithRevenueOver = (drivers,revenue) => {
    return driversWithRevenueOver(drivers, revenue).map( driver => driver.name)
};

const exactMatch = (drivers, obj) => {
    return drivers.filter(driver => {
        for (const key in obj){
            return driver[key] === obj[key]
        }
    })
};

const exactMatchToList = (drivers, obj) => {
    return exactMatch(drivers, obj).map( driver => driver.name)
}
