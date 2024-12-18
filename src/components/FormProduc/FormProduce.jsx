const FormProduce = () => {
  return (
    <>
      <form>
        <div className="form-container-css">
          <div className="mb-3 div-css">
            <label
              className="form-label"
              htmlFor="Product Name
"
            >
              Product Name
            </label>
            <input
              className="form-control input-css"
              id="Product Name"
              type="text"
            />
          </div>
          <div className="mb-3 div-css">
            <label className="form-label" htmlFor="Price">
              Price
            </label>
            <input
              className="form-control  input-css"
              id="Price"
              type="number"
            />
          </div>
          <div className="div-css">
            <button className="btn submit-css btn-css" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProduce;
