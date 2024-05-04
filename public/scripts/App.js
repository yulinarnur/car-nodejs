class App {
  constructor() {
    this.formSearch = document.getElementById("search-form");
    this.insertCardCar = document.getElementById("insert-car");
    this.btnSearch = document.getElementById("btn-search");
    this.driverType = document.getElementById("driverType");
    this.totalPassanger = document.getElementById("totalPassanger");
    this.carInstances = [];
    this.btnSearch.onclick = this.click.bind(this);

    if (!this.insertCardCar) {
      console.error("Elemen dengan ID 'insert-car' tidak ditemukan!");
    }
  }

  async init() {
    this.formSearch.addEventListener("submit", (e) => this.getCar(e));
  }

  async getCar(e) {
    e.preventDefault();
    try {
      if (this.carInstances.length === 0) {
        const response = await fetch(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );

        const cars = await response.json();

        cars.forEach((car) => {
          const carInstance = new Car(car);
          this.carInstances.push(carInstance);
        });
      }
      this.addFilterCar();
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }

  addFilterCar() {
    const available = this.driverType.value === "true";
    const capacity = this.totalPassanger.value
      ? parseInt(this.totalPassanger.value)
      : 0;

    const filteredCars = this.carInstances.filter(
      (car) => car.available === available && car.capacity >= capacity
    );

    this.cardRender(filteredCars);
  }

  click(e) {
    this.getCar(e);
  }

  cardRender(cars) {
    let card = "";
    if (cars.length === 0) {
      card = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                  <div class="text-center">
                      Mobil Tidak Ditemukan
                  </div>
              </div>`;
    } else {
      cars.forEach((car) => {
        card += car.render();
      });
    }
    this.insertCardCar.innerHTML = card;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
