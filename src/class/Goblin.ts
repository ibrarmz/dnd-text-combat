import { IPlayer } from "../interfaces/IPlayer";

export class Goblin implements IPlayer {
    Name: string = 'Goblin';
    Strength: number = 11;
    Skill: number = 12;
    Constitution: number = 10;
    Intelligence: number = 10;
    Wisdom: number = 10;
    Charisma: number = 8;
    HP: number = 18;
    CA: number = 12;

    rollDice(): number {
        return Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1;
    }

    rollD20 () {
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