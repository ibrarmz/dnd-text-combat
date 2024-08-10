export interface ICreature {
    Name : string;
    Strength: number;
    Skill : number;
    Constitution: number;
    Intelligence : number;
    Wisdom : number;
    Charisma : number;
    HP : number;
    CA : number;

    rollDice() : number;
    decraseLifePoints(atack : number) : void;
    escape() : number;
}