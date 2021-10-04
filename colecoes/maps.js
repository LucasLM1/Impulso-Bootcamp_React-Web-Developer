function getAdmins(map) {
    let adm =[];

    for ([key, value] of map){
        if(value === 'adm'){
            adm.push(key) //adiciona todos os usuarios adm, //key é o nome de cada usuario adm
        }
    }
    return adm;
}

const usuarios = new Map();

usuarios.set('Lucas', 'adm'); // key, value
usuarios.set('Rapha', 'adm');
usuarios.set('Heloisa', 'user');
usuarios.set('Paulo', 'user');
usuarios.set('Davi', 'user');
usuarios.set('Gustavo', 'adm');

console.log(getAdmins(usuarios));