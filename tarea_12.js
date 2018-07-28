let uno= duckDuckGoose(["Alberto", "Ramiro", "Pepe","Jose"],1);
let dos= duckDuckGoose(["Felipe", "Toño", "Richard", "Tito"],4);

function duckDuckGoose(player, goose) {

    for (i=0; i < 4 ; i++) { 

        for (a=0; a < player.length ; a++) { 
            if (i == 1) {
                console.log(player[i]);
    
                break; 
            if (a == 4) {  
                console.log(player[a]);
    
            }
        }
    }
    
  return player[(goose - 1) % player.length].name;
    

}
}
