const filterObject = (object, condition = null) => {
    let filteredObj = Object.keys(object).reduce((r, e) => {
        console.log(object[e])
        if(object[e]) {
            r[e] = object[e]
        }
        return r
    }, {})

    return filteredObj
}

export default filterObject