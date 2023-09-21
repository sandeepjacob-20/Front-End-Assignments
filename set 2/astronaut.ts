import { payload } from "./payload.js";

class astronaut implements payload{
    massKg: number;
    name: string;
    constructor(massKg: number, name: string){
        this.massKg = massKg;
        this.name = name;
    }
}

export{astronaut}