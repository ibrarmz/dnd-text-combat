import { IPlayer } from "../interfaces/IPlayer";

export class Player implements IPlayer {
    Name: string;
    Strength: number;
    Skill: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
    HP: number;
    CA: number;

    constructor(name : string){
        this.Name = name;
        this.Strength = this.rollDice();
        this.Skill = this.rollDice();
        this.Constitution = this.rollDice();
        this.Intelligence = this.rollDice();
        this.Wisdom = this.rollDice();
        this.Charisma = this.rollDice();
        this.HP = 10 + this.Wisdom;
        this.CA = this.rollDice();
    }

    showStats() {
        console.log(`Nombre: ${this.Name}`);
        console.log(`Fuerza: ${this.Strength}`);
        console.log(`Destreza: ${this.Skill}`);
        console.log(`Constitución: ${this.Constitution}`);
        console.log(`Inteligencia: ${this.Intelligence}`);
        console.log(`Sabiduría: ${this.Wisdom}`);
        console.log(`Carisma: ${this.Charisma}`);
        console.log(`HP: ${this.HP}`);
        console.log(`CA: ${this.CA}`);
    }

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1;
    }

    rollD20 () : number {
        return Math.floor(Math.random() * 20) + 1;
    }

    decraseLifePoints(atack : number): void {
        this.HP = this.HP - atack;
    }


    isDead() : boolean{
        return this.HP <= 0;
    }

    escape(): number {
        throw new Error("Method not implemented.");
    }

    attack(atack : number, ca : number) : number {
        if((atack + this.Strength) > ca) {
            return (atack + this.Strength) - ca;
        }
        
        return 0;
    }
    
    
}