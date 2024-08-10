import * as readline from 'readline';
import { Player } from '../class/Player';
import { Goblin } from '../class/Goblin';

export class GameEngine {
    private rl: readline.Interface;

    constructor() {
        // Configuración de readline para entrada de usuario
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Función para simular un combate entre dos personajes
    private combate(player: Player, enemy: Goblin) {
        console.log(`\n¡${player.Name} y ${enemy.Name} están en combate!`);
        let winner = false;

        while (!winner) {
            const ataqueP1 = player.attack(player.rollD20(), enemy.CA);
            const ataqueP2 = enemy.attack(enemy.rollD20(), player.CA);

            console.log(`\n¡${player.Name} Atacó!`);
            if (ataqueP1 > 0) {
                enemy.decraseLifePoints(ataqueP1);
                console.log(`${enemy.Name} recibió ${ataqueP1} puntos de daño`);

                if (enemy.isDead()) {
                    console.log(`${player.Name} salió victorioso`);
                    break;
                }
            } else {
                console.log(`${player.Name} falló`);
            }

            console.log(`\n¡${enemy.Name} Atacó!`);
            if (ataqueP2 > 0) {
                player.decraseLifePoints(ataqueP2);
                console.log(`${player.Name} recibió ${ataqueP2} puntos de daño`);

                if (player.isDead()) {
                    console.log(`${enemy.Name} salió victorioso`);
                    break;
                }
            } else {
                console.log(`${enemy.Name} falló`);
            }

            console.log(`\n${player.Name} HP: ${player.HP}`);
            console.log(`${enemy.Name} HP: ${enemy.HP}`);
        }
    }

    // Función para preguntar si el jugador quiere reiniciar el juego
    private restartGame() {
        this.rl.question('¿Quieres jugar otra vez? (sí/no): ', (respuesta) => {
            if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                this.start(); // Reinicia el juego
            } else {
                console.log('Gracias por jugar!');
                this.rl.close(); // Cierra la interfaz de readline
            }
        });
    }


    // Función principal que ejecuta el juego
    public start() {
        this.rl.question('Enter the name of your hero: ', (Name) => {
            const player = new Player(Name);
            player.showStats();

            const enemy = new Goblin();

            this.combate(player, enemy);
            this.restartGame();
        });
    }
}
