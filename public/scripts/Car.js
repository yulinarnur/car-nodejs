class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  constructor(props) {
    super(props);
    let {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card-cars">
            <img class="cars-img" src="${this.image}" alt="">
            <div class="title-cars">
               <h5>${this.manufacture}/${this.model}</h5>
               <h3>Rp. ${this.rentPerDay} / hari</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam magni fugit repellendus fugiat dolorem dignissimos nam consequuntur.</p>
            </div>

            <div class="spec-cars">
                <div class="spec-detail d-flex justify-content-start">
                    <p class="align-self-center mb-0">${this.capacity} orang</p>
                </div>
                <div class="spec-detail d-flex justify-content-start">
                    <p class="align-self-center mb-0">${this.transmission} orang</p>
                </div>
                <div class="spec-detail d-flex justify-content-start">
                    <p class="align-self-center mb-0">${this.year} orang</p>
                </div>
            </div>
            <div class="choose-cars">
               <button class="btn btn-choose-cars">
                  <a href="#">Pilih Mobil</a>
               </button>
            </div>
          </div>
        </div>
    `;
  }
}
