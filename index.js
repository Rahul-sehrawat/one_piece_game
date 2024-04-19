const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gameOverEl = document.querySelector('.game-over');
const playAgainBtn = document.querySelector('.play-again');
let audio = document.getElementById("myAudio");
let player;
let enemy;

canvas.width = 1024
canvas.height = 576



c.fillRect(0, 0, canvas.width, canvas.height)
const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  }, 
  imageSrc: './img/background.jpg'  
})


//************ play as luffy ************/

const player1 = new Fighter({
  position: {
    x: 30,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player1/luffy/Idle.png',
  framesMax: 8,
  scale:1,
    
  offset: {
    x:10,
    y:35
  },

  sprites: {
    idle: {
      imageSrc: './img/player1/luffy/Idle.png',
      framesMax: 3,   
    },
    run: {
      imageSrc: './img/player1/luffy/Run.png',
      framesMax: 2
    },
    jump: {
      imageSrc: './img/player1/luffy/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/player1/luffy/Fall.png',
      framesMax: 1
    },
    attack1: {
      imageSrc: './img/player1/luffy/Attack.png',
      framesMax:2
    },
    takeHit: {
      imageSrc: './img/player1/luffy/Take Hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './img/player1/luffy/Death.png',
      framesMax: 2
    }
  },
  attackBox: {
    offset: {
      x: 30,
      y: 20
    },
    width: 500,
    height: 60
  }

})


//************ play as Ace ************/

const player2 = new Fighter({
  position: {
    x: 30,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player1/ace/Idle.png',
  framesMax: 8,
  scale:1,
  offset: {
    x:10,
    y:35
  },
  

  sprites: {
    idle: {
      imageSrc: './img/player1/ace/Idle.png',
      framesMax: 3   
    },
    run: {
      imageSrc: './img/player1/ace/Run.png',
      framesMax: 2
    },
    jump: {
      imageSrc: './img/player1/ace/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/player1/ace/Fall.png',
      framesMax: 1
    },
    attack1: {
      imageSrc: './img/player1/ace/Attack.png',
      framesMax:1
    },
    takeHit: {
      imageSrc: './img/player1/ace/Take Hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './img/player1/ace/Death.png',
      framesMax: 2
    }
  },
  attackBox: {
    offset: {
      x: 130,
      y: 20
    },
    width: 500,
    height: 60
  }

})


//************ play as zoro ************/

const player3 = new Fighter({
  position: {
    x: 30,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player1/zoro/Idle.png',
  framesMax: 8,
  scale:1,
  offset: {
    x:10,
    y:35
  },
  
  sprites: {
    idle: {
      imageSrc: './img/player1/zoro/Idle.png',
      framesMax: 3,   
    },
    run: {
      imageSrc: './img/player1/zoro/Run.png',
      framesMax: 2
    },
    jump: {
      imageSrc: './img/player1/zoro/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/player1/zoro/Fall.png',
      framesMax: 1
    },
    attack1: {
      imageSrc: './img/player1/zoro/Attack.png',
      framesMax:4
    },
    takeHit: {
      imageSrc: './img/player1/zoro/Take Hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './img/player1/zoro/Death.png',
      framesMax: 2
    }
  },
  attackBox: {
    offset: {
      x: 130,
      y: 20
    },
    width: 200,
    height: 60
  }

})


//************ play as Crocodile ************/

const enemy1 = new Fighter({
  
  position: {
    x: 800,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player2/crocodile/Idle.png',
  framesMax: 4,
  scale:1,
  offset: {
    x: 90,
    y: 35
  },

  sprites: {
    idle: {
      imageSrc: './img/player2/crocodile/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/player2/crocodile/Run.png',
      framesMax: 3
    },
    jump: {
      imageSrc: './img/player2/crocodile/Jump.png',
      framesMax: 4
    },
    fall: {
      imageSrc: './img/player2/crocodile/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/player2/crocodile/Attack.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/player2/crocodile/Take hit.png',
      framesMax: 5
    },
    death: {
      imageSrc: './img/player2/crocodile/Death.png',
      framesMax: 2    
    }
  },
  attackBox: {
    offset: {
      x: -250,
      y: 40
    },
    width: 300,
    height: 60
  }
})


//************ play as Doffy ************/

const enemy2 = new Fighter({
  
  position: {
    x: 800,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player2/doffy/Idle.png',
  framesMax: 4,
  scale:1,
  offset: {
    x: 90,
    y: 35
  },
  sprites: {
    idle: {
      imageSrc: './img/player2/doffy/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/player2/doffy/Run.png',
      framesMax: 2
    },
    jump: {
      imageSrc: './img/player2/doffy/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/player2/doffy/Fall.png',
      framesMax: 1
    },
    attack1: {
      imageSrc: './img/player2/doffy/Attack.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/player2/doffy/Take hit.png',
      framesMax: 1
    },
    death: {
      imageSrc: './img/player2/doffy/Death.png',
      framesMax: 1    
    }
  },
  attackBox: {
    offset: {
      x: -250,
      y: 40
    },
    width: 300,
    height: 60
  }
})


//************ play as marco ************/

const enemy3 = new Fighter({
  
  position: {
    x: 800,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/player2/marco/Idle.png',
  framesMax: 4,
  scale:1,
  offset: {
    x: 90,
    y: 35
  },
  sprites: {
    idle: {
      imageSrc: './img/player2/marco/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/player2/marco/Run.png',
      framesMax: 3
    },
    jump: {
      imageSrc: './img/player2/marco/Jump.png',
      framesMax: 3
    },
    fall: {
      imageSrc: './img/player2/marco/Fall.png',
      framesMax: 1
    },
    attack1: {
      imageSrc: './img/player2/marco/Attack.png',
      framesMax: 3
    },
    takeHit: {
      imageSrc: './img/player2/marco/Take hit.png',
      framesMax: 2
    },
    death: {
      imageSrc: './img/player2/marco/Death.png',
      framesMax: 2    
    }
  },
  attackBox: {
    offset: {
      x: -250,
      y: 40
    },
    width: 300,
    height: 60
  }
})


// future game functions :-

// function Player_powerUps(){
//   player1.scale = 1.4;
//   player1.health = 150;
//   player2.scale = 1.4;
//   player2.health = 150
//   player3.scale = 1.4;

// }

// function Enemy_powerUps(){
//   enemy1.scale = 1.4;
//   enemy2.scale = 1.4;
//   enemy3.scale = 1.4;
// }

player = player1;
enemy = enemy1;

//change characters
window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case '1':
      player = player1;
      break
    case '2':
      player = player2;
      break
    case '3':
      player = player3;
      break
    case '4':
      enemy = enemy1;
      break
    case '5':
      enemy = enemy2;
      break
    case '6':
      enemy = enemy3;
      break
    // case 'q':
    //   Player_powerUps();
    //   break
    // case 'p':
    //   Enemy_powerUps()
    //   break
  }
})

//music
function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else {
    enemy.switchSprite('idle')
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 2
  ) {
    enemy.takeHit()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 2) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit()
    enemy.isAttacking = false

    gsap.to('#playerHealth', {
      width: player.health + '%'
    })
  }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId })
    gameOverEl.classList.remove('hide');
  }
}

animate()

//restart the game
playAgainBtn.addEventListener('click',restartGame);

function restartGame(){
  gameOverEl.classList.add('hide');
  location.reload();
}

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case 's':
        player.attack()
        break
      case 'r':
        player.heathIncP1()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()
        break
      case 'Shift':
        enemy.heathIncP2()
        break
      
    }
    console.log(event.key);
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})