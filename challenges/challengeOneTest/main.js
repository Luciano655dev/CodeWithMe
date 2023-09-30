const trigger = document.querySelector('.trigger')
const distanciaTxt = document.querySelector('#distanciaTxt'), catetosTxt = document.querySelector('#catetosTxt'), raiosTxt = document.querySelector('#raiosTxt')

function spawn(playerDiametro, enemyDiametro){
    // Add Player
    const player = document.createElement('div')
    player.className = 'player'
    player.style.top = `${Math.round(Math.random() * (90 - 10 + 10) + 10)}%`
    player.style.left = `${Math.round(Math.random() * (90 - 10 + 10) + 10)}%`
    player.style.width = `${playerDiametro}px`
    player.style.height = `${playerDiametro}px`
    document.body.appendChild(player)

    // Add Enemy
    const enemy = document.createElement('div')
    enemy.className = 'enemy'
    enemy.style.top = `${Math.round(Math.random() * (90 - 10 + 10) + 10)}%`
    enemy.style.left = `${Math.round(Math.random() * (90 - 10 + 10) + 10)}%`
    enemy.style.width = `${enemyDiametro}px`
    enemy.style.height = `${enemyDiametro}px`
    document.body.appendChild(enemy)

    collision({
        player: {
            obj: document.querySelector('.player'),
            raio: playerDiametro/2
        },
        enemy: {
            obj: document.querySelector('.enemy'),
            raio: enemyDiametro/2
        }
    })

    return {playerDiametro, enemyDiametro}
}
const {playerDiametro, enemyDiametro} = spawn(50, 50)

function collision({ player, enemy }){
    // Pegando as posições
    let playerPosY = player.obj.getBoundingClientRect().y
    let playerPosX = player.obj.getBoundingClientRect().x
    let enemyPosY = enemy.obj.getBoundingClientRect().y
    let enemyPosX = enemy.obj.getBoundingClientRect().x

    // Calculo dos catetos e distancia
    let cateto1, cateto2
    playerPosY <= enemyPosY ? cateto1 = enemyPosY - playerPosY : cateto1 = playerPosY - enemyPosY
    playerPosX <= enemyPosX ? cateto2 = enemyPosX - playerPosX : cateto2 = playerPosX - enemyPosX
    let distancia = Math.sqrt(cateto1**2 + cateto2**2)

    // Muda os textos na tela
    distanciaTxt.innerText = `Distancia: ${distancia}`
    catetosTxt.innerText = `Cateto1: ${cateto1}, Cateto2: ${cateto2}`
    raiosTxt.innerText = `Raio1: ${player.raio}, Raio2: ${enemy.raio}`

    // Verifica se esta colidindo (se estiver, fica verde e se não estiver, vermelho)
    distancia <= player.raio + enemy.raio ? trigger.style.backgroundColor = 'green' : trigger.style.backgroundColor = 'red'
}

window.addEventListener('keydown', e=>{
    let tecla = e.key
    const player = document.querySelector('.player')
    let x = player.getBoundingClientRect().x, y = player.getBoundingClientRect().y
    switch (tecla) {
        case "d":
            x+=10
            player.style.left = `${x}px`
            break;
        case "w":
            y-=10
            player.style.top = `${y}px`
            break;
        case "s":
            y+=10
            player.style.top = `${y}px`
            break;
        case "a":
            x-=10
            player.style.left = `${x}px`
            break;
    }
    collision({
        player: {
            obj: document.querySelector('.player'),
            raio: playerDiametro/2
        },
        enemy: {
            obj: document.querySelector('.enemy'),
            raio: enemyDiametro/2
        }
    })
})