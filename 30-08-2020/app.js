new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.gameIsRunning= true;
            this.playerHealth= 100;
            this.monsterHealth= 100;
        },
        attack: function(){
            var damage= this.calculateDamage(3, 10);
            this.monsterHealth -=damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: true,
                text: "Player Hits the Monster for " + damage
            });
            // assume monster can damage us more
            this.monsterAttack();
        },
        specialAttack: function(){
            var damage= this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: true,
                text: "Player Hits the Monster for " + damage
            });
            this.monsterAttack();         
        },
        heal: function(){
            if(this.playerHealth<=90){
                this.playerHealth +=10;
            }

            this.monsterAttack()
        },
        giveUp: function(){
            this.gameIsRunning= false;
            this.playerHealth= 100;
            this.monsterHealth= 100;

        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function(){
            if(this.monsterHealth <=0){
                //player win
                if(confirm('You Won! New Game?')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning= false;
                }
                return true;
            }
            else if(this.playerHealth <= 0){
                //monster win
                if(confirm('You Lost! New Game?')){
                    this.startGame();
                }
                else{
                    this.gameIsRunning= false;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function(){
            var damage= this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: "Monster Hits Player for" + damage,
            });
        },

    }

});