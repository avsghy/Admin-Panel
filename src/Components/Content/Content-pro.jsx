import { Link } from "react-router";
function ContentPro({ data, onAdd, children }) {
  return (
    <>
      <section className="content">
        <div className="breadcrumbs">
          <Link to={"/dashboard"} className="breadcrumb">
            صفحه اصلی
          </Link>
          <span className="backslash"> / </span>
          <Link to={"/products"} className="breadcrumb">
            دوره ها
          </Link>
        </div>
        <div className="table-component">
          <i className="ui-border emerald top"></i>
          <div className="section-header">
            <div>
              <p className="title-text">لیست دوره ها</p>
              <p className="products-count-text caption-text">
                <span className="products-data">{data.length}</span>
                <span> محصول در وبسایت شما وجود دارد </span>
              </p>
            </div>
            <button className="section-link" onClick={onAdd}>
              <span>ایجاد دوره</span>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="table-head-row">
            <p>عنوان دوره</p>
            <p>دسته بندی</p>
            <p>قیمت دوره</p>
            <p>تعداد دانشجو</p>
            <p>مدیریت</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
export default ContentPro;
