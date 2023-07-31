AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coinA" },      
    },
    update: function() {
      this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", e => {
        if (elementId.includes("#coin")) {          
          console.log("Coin Collided!!");
        }
        else if(elementId.includes("#fish")){
          console.log("Fish Collided!!");
        }         
      });
    }
    
  });
  