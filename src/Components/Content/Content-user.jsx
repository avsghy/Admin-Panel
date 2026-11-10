import { Link } from "react-router";
function Contentuser({ data, onAdd, children }) {
  return (
    <>
      <section className="content">
        <div className="breadcrumbs">
          <Link to={"/dashboard"} className="breadcrumb">
            صفحه اصلی
          </Link>
          <span className="backslash"> / </span>
          <Link to={"/users"} className="breadcrumb">
            کاربران
          </Link>
        </div>
        <div className="table-component">
          <i className="ui-border indigo top"></i>
          <div className="section-header">
            <div>
              <p className="title-text">لیست کاربران</p>
              <p className="users-count-text caption-text">
                <span className="users-data user-Data-Counter">
                  {data.length}
                </span>
                <span> کاربر ثبت نام کرده اند.</span>
              </p>
            </div>
            <button className="section-link" onClick={onAdd}>
              <span>ایجاد کاربر</span>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="table-head-row">
            <p>نام</p>
            <p>نام کاربری</p>
            <p>ایمیل</p>
            <p>رمز عبور</p>
            <p>مدیریت</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
export default Contentuser;
