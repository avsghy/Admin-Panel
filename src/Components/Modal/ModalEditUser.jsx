import { useState } from "react";
function ModalEditUser({ close, data, onSubmit }) {
  const [form, setForm] = useState({
    name: data.name ?? "",
    userName: data.userName ?? "",
    email: data.email ?? "",
    password: data.password ?? "",
    role: data.role ?? "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: form.name.trim(),
      userName: form.userName.trim(),
      email: form.email.trim(),
      password: form.password,
      role: form.role,
    });
  };
  return (
    <div className="modal-screen update-modal">
      <form className="modal" onSubmit={handleSubmit}>
        <i className="ui-border top red"></i>
        <i className="ui-border bottom red"></i>
        <header className="modal-header">
          <h3>ویرایش</h3>
          <button type="button" className="close-modal-update" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <main className="modal-content">
          <input
            type="text"
            name="name"
            className="modal-input product-new-title"
            placeholder={"نام کاربر را وارد نمائید ..."}
            value={form.name}
            onChange={handleChange}
            required
            autoFocus
          />
          <input
            type="text"
            name="userName"
            className="modal-input product-new-price"
            placeholder={"نام کاربری را وارد نمائید ..."}
            value={form.userName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="modal-input product-new-Register-Count"
            placeholder={"ایمیل کاربر را وارد نمائید ..."}
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="password-holder">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="modal-input product-new-category"
              placeholder={"رمز عبور را وارد نمائید ..."}
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <i
                className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              ></i>
            </button>
          </div>
          <div className="role-selection">
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleChange}
              />
              <span className="role-label">کاربر</span>
            </label>
            <label className="role-option">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={form.role === "admin"}
                onChange={handleChange}
              />
              <span className="role-label">مدیر</span>
            </label>
          </div>
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
export default ModalEditUser;
