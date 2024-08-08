import * as readline from 'readline';
import { Player } from './class/Player';
import { Goblin } from './class/Goblin';

// Configuración de readline para entrada de usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para simular un combate entre dos personajes
function combate(player : Player, enemy : Goblin) {
    console.log(`\n¡${player.Name} y ${enemy.Name} están en combate!`);
    let winner = false;

    while (winner == false) {
        const ataqueP1 = player.attack(player.rollD20(), enemy.CA);
        const ataqueP2 = enemy.attack(enemy.rollD20(), player.CA);

        console.log(`\n¡${player.Name} Ataco!`);
        if(ataqueP1 > 0) {
            enemy.decraseLifePoints(ataqueP1)
            console.log(`${enemy.Name} recibio ${ataqueP1} puntos de daño`);

            if (enemy.isDead()){
                console.log(`${player.Name} salio victoriozo`);
                break;
            }
        }else {
            console.log(`${player.Name} fallo`);
        }

        console.log(`\n¡${enemy.Name} Ataco!`);
        if(ataqueP2 > 0) {
            player.decraseLifePoints(ataqueP2)
            console.log(`${player.Name} recibio ${ataqueP2} puntos de daño`);

            if (player.isDead()){
                console.log(`${enemy.Name} salio victoriozo`);
                break;
            }
        }else {
            console.log(`${enemy.Name} fallo`);
        }

        console.log(`\n${player.Name} HP: ${player.HP}`);
        console.log(`${enemy.Name} HP: ${enemy.HP}`);
    }
}

function main() {
    rl.question('Enter the name of your hero: ', (Name) => {
        const player = new Player(Name);
        player.showStats();

        const enemy = new Goblin();

        combate(player, enemy)

        rl.close();
    });
}

main();