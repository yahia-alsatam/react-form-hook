const ListProduce = ({ expenses }) => {
  return (
    <>
      <div className="list-container-css d-flex flex-column justify-content-evenly align-items-center ">
        {expenses.map((expense) => (
          <div
            className="list-div-css d-flex flex-column flex-md-row justify-content-between p-4 mt-4 align-items-center gap-2 bg-body-secondary bg-opacity-75 shadow 
  "
          >
            <div className="text-css fw-bold ">
              {expense.ProductName}-${expense.Price}
            </div>
            <div className="div-btn-css d-flex gap-2 pr-5">
              <button className="btn btn-primary">Increase Price</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProduce;
