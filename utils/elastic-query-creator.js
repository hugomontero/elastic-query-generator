const operators ={
    EQUAL:"eq",
    GREATER_AND_EQUAL_THAN:"glt",
    LOWER_AND_EQUAL_THAN:"llt",
    GREATER_THAN:"gt",
    LOWER_THAN:"lt",
    LIKE:"like",
    IN:"in",
    EXIST:"exist",
    IS:"is",
    RANGE: "range"

}
Object.freeze(operators)

const operatorSign = {
    POSITIVE: "+",
    NEGATIVE: "-"
}


const convert = async ({query}) => {
    
}

module.exports = {
    convert
}
