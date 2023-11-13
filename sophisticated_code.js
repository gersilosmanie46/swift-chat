/* sophisticated_code.js */

// This code demonstrates the implementation of a complex algorithm called the Traveling Salesman Problem(TSP) using genetic algorithm.

// Class representing a city
class City {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Calculate the distance to another city
  distanceTo(city) {
    const xDistance = Math.abs(this.x - city.x);
    const yDistance = Math.abs(this.y - city.y);

    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }

  // Override toString
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

// Class representing the tour
class Tour {
  constructor() {
    this.cities = [];
    this.distance = 0;
  }

  // Add a city to the tour
  addCity(city) {
    this.cities.push(city);
    this.distance += city.distanceTo(this.cities[this.cities.length - 2]);
  }

  // Get the total distance of the tour
  getTotalDistance() {
    return this.distance;
  }

  // Override toString
  toString() {
    let tourString = "";
    for (let i = 0; i < this.cities.length; i++) {
      tourString += this.cities[i].toString() + " -> ";
    }
    tourString += this.cities[0].toString(); // Return to the starting city
    return tourString;
  }
}

// Class representing the population of tours
class Population {
  constructor(populationSize, initialTour) {
    this.tours = [];
    for (let i = 0; i < populationSize; i++) {
      this.tours.push(this.mutateTour(initialTour));
    }
  }

  // Mutate a tour by randomly swapping cities
  mutateTour(tour) {
    const mutatedTour = new Tour();
    const tourSize = tour.cities.length;

    for (let i = 0; i < tourSize; i++) {
      mutatedTour.addCity(tour.cities[i]);
    }

    const indexA = Math.floor(Math.random() * tourSize);
    const indexB = Math.floor(Math.random() * tourSize);
    mutatedTour.cities[indexA] = tour.cities[indexB];
    mutatedTour.cities[indexB] = tour.cities[indexA];
    mutatedTour.distance = tour.distance - tour.cities[indexA].distanceTo(tour.cities[(indexA + 1) % tourSize]);
    mutatedTour.distance += mutatedTour.cities[indexA].distanceTo(mutatedTour.cities[(indexA + 1) % tourSize]);
    mutatedTour.distance = Math.round(mutatedTour.distance);

    return mutatedTour;
  }

  // Get the fittest tour from the population
  getFittest() {
    let fittestIndex = 0;
    let fittestDistance = this.tours[0].getTotalDistance();

    for (let i = 1; i < this.tours.length; i++) {
      const currentDistance = this.tours[i].getTotalDistance();
      if (currentDistance < fittestDistance) {
        fittestDistance = currentDistance;
        fittestIndex = i;
      }
    }

    return this.tours[fittestIndex];
  }
}

// Function to solve the TSP using the genetic algorithm
function solveTSP(cities, populationSize, generations) {
  const initialTour = new Tour();
  for (const city of cities) {
    initialTour.addCity(city);
  }

  let generationCount = 0;
  let currentPopulation = new Population(populationSize, initialTour);

  while (generationCount < generations) {
    const fittestTour = currentPopulation.getFittest();
    console.log("Generation " + generationCount + ": " + fittestTour.getTotalDistance());
    
    const newPopulation = new Population(populationSize, fittestTour);
    currentPopulation = newPopulation;
    
    generationCount++;
  }

  const bestTour = currentPopulation.getFittest();
  console.log("Best tour found: " + bestTour.toString());
}

// Create an array of cities
const cities = [];
cities.push(new City(60, 200));
cities.push(new City(180, 200));
cities.push(new City(80, 180));
cities.push(new City(140, 180));
cities.push(new City(20, 160));
cities.push(new City(100, 160));
cities.push(new City(200, 160));
cities.push(new City(140, 140));
cities.push(new City(40, 120));
cities.push(new City(100, 120));
cities.push(new City(180, 100));
cities.push(new City(60, 80));
cities.push(new City(120, 80));
cities.push(new City(180, 60));
cities.push(new City(20, 40));
cities.push(new City(100, 40));
cities.push(new City(200, 40));
cities.push(new City(20, 20));
cities.push(new City(60, 20));
cities.push(new City(160, 20));

// Run the TSP solver
solveTSP(cities, 100, 1000);