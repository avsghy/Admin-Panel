import { useState } from "react";
function PaginatedList({ data, fields, onEdit, onDelete }) {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));
  const safePage = Math.min(page, totalPages);
  const shownItems = data.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage,
  );
  if (data.length === 0)
    return <p className="empty-text">موردی برای نمایش نیست</p>;
  return (
    <>
      <div className="table-body">
        {shownItems.map((item) => (
          <div key={item.id} className="tableRow">
            {fields.map((field) => (
              <p key={field}>
                {typeof item[field] === "number"
                  ? item[field].toLocaleString()
                  : item[field]}
              </p>
            ))}
            <div className="product-manage">
              <button
                className="edit-btn"
                aria-label="ویرایش"
                onClick={() => onEdit(item.id)}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="remove-btn"
                aria-label="حذف"
                onClick={() => onDelete(item.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="table-footer">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`page ${p === safePage ? "active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default PaginatedList;
