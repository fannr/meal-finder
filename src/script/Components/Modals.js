class Modals extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Details (Teriyaki Chismallken Casserole)
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-6 col-sm-12 text-center">
              <img
                src=""
                alt=""
                width="100%"
                class="rounded img-thumbnail images"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="group">
                <a class="linkY" href="" target="_blank"
                  ><i class="bi bi-youtube"></i
                ></a>
              </div>
              <div class="group">
                <p>1. Name Meal</p>
                <small class="nameMeal"></small>
              </div>
              <div class="group">
                <p>2. Category</p>
                <small class="nameCategory"></small>
              </div>
              <div class="group">
                <p>3. Area</p>
                <small class="nameArea"></small>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-sm-12">
              <p>- Intructions</p>
              <small class="intructions"> </small>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div class="tags">
            <span></span>
          </div>

          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("modal-component", Modals);
