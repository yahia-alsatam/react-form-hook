import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  ProductName: z
    .string()
    .min(3, { message: "description should beat least 3 character" })
    .max(50),
  Price: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_00),
});

const FormProduce = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="form-container-css d-flex flex-column align-items-center w-100">
          <div className="mb-3 div-css">
            <label
              className="form-label"
              htmlFor="ProductName
"
            >
              Product Name
            </label>
            <input
              {...register("ProductName")}
              className="form-control input-css w-100"
              id="ProductName"
              type="text"
              placeholder="Enter product name"
            />
            {errors.ProductName && (
              <p className="py-2 text-danger">{errors.ProductName.message} </p>
            )}
          </div>
          <div className="mb-3 div-css">
            <label className="form-label" htmlFor="Price">
              Price
            </label>
            <input
              {...register("Price", { valueAsNumber: true })}
              className="form-control input-css w-100"
              id="Price"
              type="number"
              placeholder="Enter product price"
            />
            {errors.Price && (
              <p className="py-2 text-danger">{errors.Price.message} </p>
            )}
          </div>
          <div className="div-css">
            <button className="btn submit-css btn-css mt-2" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProduce;
