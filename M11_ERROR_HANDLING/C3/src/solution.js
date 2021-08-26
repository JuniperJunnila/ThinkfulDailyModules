function getCarColor(car) {
    try {
        if (!car||!"color" in car){
            throw "Color unknown"
        } else {
            return car.color
        }
    } catch (error) {
        return error;
    }
}

//do not remove
module.exports = getCarColor;
