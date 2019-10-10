(function(){
    // console.log("hello")

    team1 = {
        shotsTakenElement : document.querySelector("#teamone-numshots"),
        shotsTakenCounter : 0,
        goalsElement : document.querySelector("#teamone-numhits"),
        goalCounter : 0,
        shootButton : document.querySelector("#teamone-shoot"),
        shoot : function(){
            this.shotsTakenCounter = this.shotsTakenCounter + 1;
            if(Math.random() > .5){
                this.goalCounter++;
            } 
        },
        shotsTakentoString : function(){
            return this.shotsTakenCounter.toString();
        },
        goalstoString : function(){
            return this.goalCounter.toString();
        }
    }

    team1.shootButton.addEventListener("click", function(){
        team1.shoot();
        team1.shotsTakenElement.innerHTML = team1.shotsTakentoString();
        team1.goalsElement.innerHTML = team1.goalstoString();
        // console.log(team1.shotsTakentoString() + ": shot(s)");
        // console.log(team1.goalstoString() + ": goal(s)");
    })
    
    team2 = {
        shotsTakenElement : document.querySelector("#teamtwo-numshots"),
        shotsTakenCounter : 0,
        goalsElement : document.querySelector("#teamtwo-numhits"),
        goalCounter : 0, 
        shootButton : document.querySelector("#teamtwo-shoot"),

        shoot: function(){
            this.shotsTakenCounter++
            if(Math.random() > .4){
                this.goalCounter++;
            }
        },
        shotsTakentoString : function(){
            return this.shotsTakenCounter.toString();
        },
        goalstoString : function(){
            return this.goalCounter.toString();
        }
    }
    // console.log(team2.shootButton)
    team2.shootButton.addEventListener("click", function(){
        team2.shoot();
        team2.shotsTakenElement.innerHTML = team2.shotsTakentoString();
        team2.goalsElement.innerHTML = team2.goalstoString();
        // console.log(team2.shotsTakenElement)
        // console.log(team2.shotsTakentoString())
    })

    reset = {
        buttonElement : document.querySelector("#reset"),
        counter : 0, 
        counterElement: document.querySelector("#num-resets"),

        count: function(){
            this.counter++
        },

        getCounterString : function(){
            return this.counter.toString();
        },
    }

    reset.buttonElement.addEventListener("click", function(){
       reset.count();
    //    console.log(reset.getCounterString()) 
       reset.counterElement.innerHTML = reset.getCounterString();
       team1.shotsTakenCounter = 0
       team1.shotsTakenElement.innerHTML = 0
       team1.goalCounter = 0
       team1.goalsElement.innerHTML = 0
       team2.shotsTakenCounter = 0
       team2.shotsTakenElement.innerHTML = 0
       team2.goalCounter = 0
       team2.goalsElement.innerHTML = 0
    })
}())