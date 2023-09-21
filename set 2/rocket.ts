import { payload } from "./payload.js";
import { cargo } from "./cargo.js";
import { astronaut } from "./astronaut.js";

class Rocket implements payload{
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: cargo[];
    astronauts: astronaut [];
    constructor(name: string, totalCapacityKg: number, cargoItems: cargo[],
        astronautList: astronaut[]){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = cargoItems;
        this.astronauts = astronautList;
    }
    sumMass( items: payload[] ): number{
        let sum: number = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }
    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        }
    }
    addCargo(Cargo: cargo): boolean{
        if(this.canAdd(Cargo)){
            this.cargoItems.push(Cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(Astronaut: astronaut): boolean{
        if (this.canAdd(Astronaut)){
            this.astronauts.push(Astronaut);
            return true;
        } else {
            return false;
        }
    }
}

export {Rocket}