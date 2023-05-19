

export class House {
    constructor(data){
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.address = data.address
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.year = data.year
        this.description = data.description
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.creator = data.creator

    }

    get HouseCard(){
        return /*html*/ `
        
        <div class="col-md-4 my-3">
            <div class="card elevation-1">
                <img class="rounded-top" src="${this.imgUrl}" alt="${this.address}">
                <div class="card-body">
                <p class="fs-4 mb-2 d-flex justify-content-between">
                    <span>
                    ${this.address}
                    </span>
                    <span>
                    ${this.price}
                    </span>
                    <span>
                    ${this.bedrooms} ${this.bathrooms}
                    </span>
                    <span>
                    ${this.price}
                    </span>
                </p>
                <div class="d-flex align-items-center justify-content-between border-top pt-2">

                <div>
                    <span class="text-capitalize">${this.creator.name}</span>
                    <img class="rounded seller-picture" src="${this.creator.picture}"
                    alt="${this.creator.name}">
                </div>
                </div>
                </div>
                </div>
                </div>

            
        
        `
    }

    static HouseForm(){
        return /*html*/ `

        <div class="modal-header">
            <h1 class="modal=title fs-5" id="exampleModalLabel">List Home</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form onsubmit="app.HousesController.createHouse()">
        <div class="modal-body container-fluid">
          <section class="row">
            <div class="mb-3 col-6">
              <label for="bedrooms" class="form-label">Bedrooms</label>
              <input required minlength="1" maxlength="20" type="number" class="form-control" id="bedrooms" name="bedrooms"
                placeholder="Bedrooms">
            </div>
            <div class="mb-3 col-6">
              <label for="model" class="form-label">bathrooms</label>
              <input required minlength="1" maxlength="20" type="number" class="form-control" id="bathrooms" name="bathrooms"
                placeholder="Bathrooms">
            </div>
            <div class="mb-3 col-6">
              <label for="year" class="form-label">Year Built</label>
              <input required min="1900" type="number" class="form-control" id="year" name="year"  placeholder="Year Built">
            </div>
            <div class="mb-3 col-6">
              <label for="price" class="form-label">Listing Price</label>
              <input required min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
                placeholder="Listing Price">
            </div>
            <div class="mb-3 col-12">
              <label for="description" class="form-label">Address</label>
              <input required minlength="3" maxlength="50" type="text" class="form-control" id="address" name="address"
                placeholder="Address">
            </div>
            <div class="mb-3 col-12">
              <label for="imgUrl" class="form-label">House Image</label>
              <input required type="text" class="form-control" id="imgUrl" name="imgUrl" placeholder="House Image">
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Create Listing</button>
        </div>
      </form>

        `
    }
}