// Scuber headquarters is on 42nd Street
const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

// 1️⃣ distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(pickupBlock - HQ_BLOCK);
}

// 2️⃣ distanceFromHqInFeet
function distanceFromHqInFeet(pickupBlock) {
  const blocks = distanceFromHqInBlocks(pickupBlock);
  return blocks * FEET_PER_BLOCK;
}

// 3️⃣ distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * FEET_PER_BLOCK;
}

// 4️⃣ calculatesFarePrice
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
