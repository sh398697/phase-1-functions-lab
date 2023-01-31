function distanceFromHqInBlocks(pickUpLocation) {
    //returns the number of blocks given a value
    return Math.abs((pickUpLocation - 42));
  }

  function distanceFromHqInFeet(pickUpLocation) {
    return (distanceFromHqInBlocks(pickUpLocation) * 264);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return (Math.abs(destination - start)) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return ((distanceTravelled - 400) * .02);
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else if (distanceTravelled > 2500) {
        return "cannot travel that far";
    }
  }