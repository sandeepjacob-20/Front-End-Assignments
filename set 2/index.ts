import { astronaut } from "./astronaut.js";
import { cargo } from "./cargo.js";
import { Rocket } from "./rocket.js";

class combined{
    static cargo1 = new cargo(1000, "food");
    static cargo2 = new cargo(2000, "water");
    static astronaut1 = new astronaut(75, "Bob");
    static astronaut2 = new astronaut(80, "Vance");
    
    static cargoLoad : cargo[] = [this.cargo1, this.cargo2];
    static astronautLoad : astronaut[] = [this.astronaut1, this.astronaut2];

    static rocket1 = new Rocket("falcon II", 5100,this.cargoLoad, this.astronautLoad);
    static main(opt:number){
        if(opt==1)
            return this.rocket1.sumMass(combined.cargoLoad);
        else if(opt==2)
            return this.rocket1.currentMassKg();
        else if(opt==3){
            const newCargo = new cargo(4000, "chakka");
            return this.rocket1.canAdd(newCargo);
        }
        else if(opt==4){
            const newCargo = new cargo(500, "chakka");
            return this.rocket1.addCargo(newCargo);
        }
        else if(opt==5){
            const newAstronaut = new astronaut(64,"Ryan");
            return this.rocket1.addAstronaut(newAstronaut);   
        }
    }
}
const opt = parseInt(prompt("choose an option\n1.sumMass\n2.currentMassKg\n3.canAdd\n4.addCargo\n5.addAstronaut"));
console.log(combined.main(opt));   
