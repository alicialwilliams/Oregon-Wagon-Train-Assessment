
class Wagon {
    constructor (capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
    }   
    join (traveler) {
        if(this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }   
    shouldQuarantine(){
        for(let index = 0; this.passengers.length; index += 1){
            if(this.passengers[index].isHealthy === false) {
                return true;
            }
        }
    }
        
    totalFood(){
        let totalNumber = 0
        for(let index = 0; index < this.passengers.length ; index += 1 ) {
            totalNumber += this.passengers[index].food 
        }
    return totalNumber
    }
    
}
