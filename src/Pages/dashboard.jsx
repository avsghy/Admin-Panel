import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProducts, getUsers } from "../Js/App";
function Dashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
    getUsers().then(setUsers).catch(console.error);
  }, []);
  const nonAdmins = users.filter((user) => user.role !== "admin");
  const latestUsers = nonAdmins.slice(-4).reverse();
  return (
    <>
      <section className="content">
        <div className="breadcrumbs">
          <Link to={"/dashboard"} className="breadcrumb">
            داشبورد
          </Link>
        </div>
        <section className="hero-cards">
          <article>
            <i className="ui-border emerald top"></i>
            <i className="ui-border emerald bottom"></i>
            <span className="hero-card-icon products-icon">
              <i className="fa-solid fa-box"></i>
            </span>
            <div>
              <p className="hero-card-title">دوره ها</p>
              <p className="hero-card-data products-data">{products.length}</p>
            </div>
          </article>
          <article>
            <i className="ui-border indigo top"></i>
            <i className="ui-border indigo bottom"></i>
            <span className="hero-card-icon users-icon">
              <i className="fa-solid fa-users"></i>
            </span>
            <div>
              <p className="hero-card-title">کاربران</p>
              <p className="hero-card-data users-data">{nonAdmins.length}</p>
            </div>
          </article>
          <article>
            <i className="ui-border red top"></i>
            <i className="ui-border red bottom"></i>
            <span className="hero-card-icon admins-icon">
              <i className="fa-solid fa-user-tie"></i>
            </span>
            <div>
              <p className="hero-card-title">مدیران</p>
              <p className="hero-card-data moderators-data">
                {users.length - nonAdmins.length}
              </p>
            </div>
          </article>
        </section>
        <section className="after-hero">
          <section className="latest-users">
            <i className="ui-border top indigo"></i>
            <div className="section-header">
              <p className="section-title">جدیدترین کاربران</p>
              <Link to={"/users"} className="section-link">
                بیشتر
                <i className="fa-solid fa-chevron-left"></i>
              </Link>
            </div>
            {latestUsers.map((user) => {
              return (
                <article key={user.id}>
                  <span className="icon-card">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <div>
                    <p className="user-name">{user.userName}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </article>
              );
            })}
          </section>
          <section className="table-component">
            <i className="ui-border emerald top"></i>
            <div className="section-header">
              <div>
                <p className="title-text">لیست دوره ها</p>
                <p className="products-count-text caption-text">
                  <span className="products-data">{products.length}</span>
                  <span> محصول در وبسایت شما وجود دارد </span>
                </p>
              </div>
              <Link to={"/products"} className="section-link">
                <span>
                  دوره ها
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
              </Link>
            </div>
            <div className="table-head-row">
              <p>عنوان محصول</p>
              <p>قیمت محصول</p>
              <p>تعداد دانشجو</p>
            </div>
            <div className="table-body">
              {products.slice(0, 4).map((pr) => {
                return (
                  <div key={pr.id} className="tableRow">
                    <p className="product-title">{pr.title}</p>
                    <p className="product-price">{pr.price.toLocaleString()}</p>
                    <p className="RegisterCount">{pr.registersCount}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
export default Dashboard;
