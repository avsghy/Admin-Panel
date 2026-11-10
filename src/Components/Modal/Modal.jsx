import { useState } from "react";
function Modal({ close, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    price: "",
    registersCount: "",
    category: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: form.title.trim(),
      price: Number(form.price),
      registersCount: Number(form.registersCount),
      category: form.category.trim(),
    });
  };
  return (
    <div className="modal-screen update-modal">
      <form className="modal" onSubmit={handleSubmit}>
        <i className="ui-border top red"></i>
        <i className="ui-border bottom red"></i>
        <header className="modal-header">
          <h3>ایجاد محصول جدید</h3>
          <button type="button" className="close-modal-update" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <main className="modal-content">
          <input
            type="text"
            name="title"
            className="modal-input product-new-title"
            placeholder={"عنوان جدید دوره را وارد نمائید ..."}
            value={form.title}
            onChange={handleChange}
            required
            autoFocus
          />
          <input
            type="number"
            name="price"
            min="0"
            className="modal-input product-new-price"
            placeholder={"قیمت جدید دوره را وارد نمائید ..."}
            value={form.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="registersCount"
            min="0"
            className="modal-input product-new-Register-Count"
            placeholder={"تعداد دانشجوهای جدید دوره را وارد نمائید ..."}
            value={form.registersCount}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            className="modal-input product-new-category"
            placeholder={"کتگوری جدید دوره را وارد نمائید ..."}
            value={form.category}
            onChange={handleChange}
            required
          />
        </main>
        <footer className="modal-footer">
          <button
            type="button"
            className="cancel reject-update-course"
            onClick={close}
          >
            انصراف
          </button>
          <button type="submit" className="submit accpet-update-course">
            تایید
          </button>
        </footer>
      </form>
    </div>
  );
}
export default Modal;
