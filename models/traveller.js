const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourneys = this.journeys.filter((journey) => journey.transport === transport);
  return foundJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const foundJourneys = this.journeys.filter((journey) => journey.distance > minDistance);
  return foundJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.reduce((runningTotal, journey) => runningTotal + journey.distance, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportList = this.journeys.map((journey) => journey.transport);
  const uniqueTransports = [];
  transportList.forEach(function(transport) {
    if (!uniqueTransports.includes(transport))
      uniqueTransports.push(transport);
  })

  return uniqueTransports;
  
}


module.exports = Traveller;
