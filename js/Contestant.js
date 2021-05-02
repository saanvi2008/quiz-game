class Contestant {
    constructor(){

      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      //we have written "players/player" because we want a column in which player's index will be there :- player1, player2
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    //static means we can it directly in a class
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      //=> is used to do changes
      contestantInfoRef.on("value" , (data)=>{
        allContestants = data.val();
      })
    }
  }