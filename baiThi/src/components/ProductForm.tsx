import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductFormParams } from "../types/Product";

type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: ProductFormParams;
  product?: ProductFormParams;
};

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialValues,
  product,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormParams>({
    defaultValues: initialValues,
  });

  const handleFormSubmit: SubmitHandler<ProductFormParams> = async (data) => {
    onSubmit(data);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Quản lý sản phẩm</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Tên sản phẩm */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              id="title"
              placeholder="Nhập tên sản phẩm"
              {...register("title", { required: "Tên sản phẩm là bắt buộc" })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          {/* Giá sản phẩm */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Giá sản phẩm
            </label>
            <input
              type="number"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              id="price"
              placeholder="Nhập giá sản phẩm"
              {...register("price", {
                required: "Giá sản phẩm là bắt buộc",
                min: {
                  value: 0.01,
                  message: "Giá sản phẩm phải lớn hơn 0",
                },
              })}
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price.message}</div>
            )}
          </div>

          {/* Danh mục sản phẩm */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Danh mục sản phẩm
            </label>
            <select
              id="category"
              className={`form-select ${errors.category ? "is-invalid" : ""}`}
              {...register("category", {
                required: "Danh mục sản phẩm là bắt buộc",
              })}
            >
              <option value="">Chọn danh mục</option>
              <option value="Điện tử">Điện tử</option>
              <option value="Nội thất">Nội thất</option>
            </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category.message}</div>
            )}
          </div>

          {/* Hiển thị sản phẩm */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isShowProduct"
              defaultChecked={product?.isShowProduct}
              {...register("isShowProduct")}
            />
            <label className="form-check-label" htmlFor="isShowProduct">
              Hiển thị sản phẩm
            </label>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block">
              Xác nhận
            </button>
            <Link to="/" className="btn btn-danger btn-block">
              Huỷ
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
