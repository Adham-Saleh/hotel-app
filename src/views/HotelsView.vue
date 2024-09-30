<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="bi bi-funnel-fill me-2"></i>
                Filter
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-start">
                <form action="" class="form">
                  <div class="input-group mt-4">
                    <span class="input-group-text">
                      <i class="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="e.g. hotel name"
                    />
                  </div>

                  <label for="name" class="form-label mt-4">City:</label>
                  <select name="" id="" class="form-control">
                    <option value="city" selected>City</option>
                    <option value="egypt">Egypt</option>
                    <option value="oman">Oman</option>
                  </select>

                  <label for="price" class="form-label mt-4">Budget</label>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <label for="start-price" class="form-label"
                          >from:</label
                        >
                        <input
                          type="text"
                          id="start-price"
                          class="form-control"
                          placeholder="e.g. 500L.E"
                        />
                      </div>
                      <div class="col">
                        <label for="start-price" class="form-label">to:</label>
                        <input
                          type="text"
                          id="start-price"
                          class="form-control"
                          placeholder="e.g. 20000L.E"
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-secondary mt-4">
                    Apply
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg">
        <div class="text-center text-lg-start">
          <h1 class="mt-4 mt-lg-0">Browse all hotels</h1>
          <p class="text-muted lead">find the best suits you...</p>
        </div>
        <div class="row gx-md-5 gy-3">
          <div class="col-md-6 col-lg-4">
            <div class="card mt-2 mt-lg-0 shadow" style="width: 18rem">
              <img src="../assets/hotel-1.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-start">
                <h5 class="card-title">Hotel 1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-success btn-sm">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
