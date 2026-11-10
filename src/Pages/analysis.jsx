import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProducts } from "../Js/App";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
function Analysis() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);
  return (
    <>
      <section className="content">
        <div className="breadcrumbs">
          <Link to={"/dashboard"} className="breadcrumb">
            صفحه اصلی
          </Link>
          <span className="backslash"> / </span>
          <Link to={"/analysis"} className="breadcrumb">
            تحلیل
          </Link>
        </div>
        <div className="table-component">
          <i className="ui-border emerald top"></i>
          <div className="section-header">
            <div>
              <p className="title-text">نمودار دوره ها</p>
              <p className="caption-text">قیمت و تعداد دانشجوی هر دوره</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={products}>
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis dataKey={"title"} tick={false}></XAxis>
              <YAxis yAxisId="count" width={60}></YAxis>
              <YAxis
                yAxisId="price"
                orientation="right"
                width={90}
                tickFormatter={(value) => value.toLocaleString()}
              ></YAxis>
              <Tooltip formatter={(value) => value.toLocaleString()}></Tooltip>
              <Legend></Legend>
              <Line
                yAxisId="price"
                type={"monotone"}
                dataKey={"price"}
                name="قیمت"
                stroke="#6366f1"
              ></Line>
              <Line
                yAxisId="count"
                type={"monotone"}
                dataKey={"registersCount"}
                name="دانشجو"
                stroke="#10b981"
              ></Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}
export default Analysis;
