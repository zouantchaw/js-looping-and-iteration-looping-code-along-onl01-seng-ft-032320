  let writeCards = function(names, event_name) {
      let thankYouMessages = []
      for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
          
      }
      return thankYouMessages
  }

  let countDown = function(number) {
    let ticker = number  
    while (ticker >= 0) {
          console.log(ticker);
          ticker--;
      }
  }