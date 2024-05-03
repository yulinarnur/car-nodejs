async function getCarsData() {
  try {
    const response = await fetch("../cars.json");
    if (!response.ok) {
      throw new Error("Failed to fetch cars data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car data:", error);
    return null;
  }
}

class App {
  constructor() {
    this.init();
  }

  async init() {
    // Panggil method untuk menambahkan event listener ke tombol "Cari Mobil"
    this.addSearchButtonListener();
  }

  addSearchButtonListener() {
    const searchButton = document.querySelector(".submit");
    searchButton.addEventListener("click", this.searchCars.bind(this));
  }

  async searchCars() {
    // Dapatkan nilai input dari form pencarian
    const driverType = document.getElementById("driverType").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const totalPassenger = document.getElementById("totalPassenger").value;

    // Lakukan permintaan HTTP GET untuk mengambil data mobil
    const data = await getCarsData();

    // Jika data berhasil diambil, lanjutkan proses
    if (data) {
      // Inisialisasikan objek Car untuk setiap mobil yang ditemukan
      Car.init(data);

      // Render hasil pencarian ke dalam DOM
      this.renderCars();
    }
  }

  renderCars() {
    // Dapatkan container tempat untuk menampilkan daftar mobil
    const carsContainer = document.querySelector(".insert-card-cars");

    // Bersihkan konten sebelumnya
    carsContainer.innerHTML = "";

    // Render setiap mobil ke dalam DOM
    Car.list.forEach((car) => {
      carsContainer.innerHTML += car.render();
    });
  }
}

// Inisialisasikan aplikasi
const app = new App();
