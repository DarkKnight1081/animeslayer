var gameData = {
    FantasyCoin: 0,
    FantasyCoinPerClick: 1,
    FantasyCoinPerClickCost: 10
  }
  
  function CollectFantasyCoin() {
    gameData.FantasyCoin += gameData.FantasyCoinPerClick
    document.getElementById("FantasyCoinCollected").innerHTML = gameData.FantasyCoin + " Fantasy Coin Collected"
  }
  
  function buyFantasyCoinPerClick() {
    if (gameData.FantasyCoin >= gameData.FantasyCoinPerClickCost) {
      gameData.FantasyCoin -= gameData.FantasyCoinPerClickCost
      gameData.FantasyCoinPerClick += 1
      gameData.FantasyCoinPerClickCost *= 2
      document.getElementById("FantasyCoinCollected").innerHTML = gameData.FantasyCoin + " Fantasy Coin Collected"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Power (Currently Level " + gameData.FantasyCoinPerClick + ") Cost: " + gameData.FantasyCoinPerClickCost + " Fantasy Coin"
    }
  }

  var mainGameLoop = window.setInterval(function() {
    CollectFantasyCoin()
  }, 10)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("AnimeSlayerSave", JSON.stringify(gameData))
  }, 1500)