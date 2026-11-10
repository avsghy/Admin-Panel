import { useEffect, useState } from "react";
import ContentPro from "../Components/Content/Content-pro";
import { getProducts, addProduct, editProduct, deleteProduct } from "../Js/App";
import PaginatedList from "../Components/Pagination/Pagination";
import Modal from "../Components/Modal/Modal";
import ModalDelete from "../Components/Modal/ModalDel";
import ModalEdit from "../Components/Modal/ModalEdit";
function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    function closeOnEscape(ev) {
      if (ev.code === "Escape") {
        setIsOpenAdd(false);
        setIsOpenEdit(false);
        setIsOpenDel(false);
      }
    }
    document.addEventListener("keyup", closeOnEscape);
    return () => document.removeEventListener("keyup", closeOnEscape);
  }, []);
  function openAddModal() {
    setIsOpenAdd(true);
  }
  function openEditModal(id) {
    setSelectedProduct(products.find((product) => product.id === id));
    setIsOpenEdit(true);
  }
  function openDelModal(id) {
    setSelectedProduct(products.find((product) => product.id === id));
    setIsOpenDel(true);
  }
  function closeAddModal() {
    setIsOpenAdd(false);
  }
  function closeEditModal() {
    setIsOpenEdit(false);
  }
  function closeDelModal() {
    setIsOpenDel(false);
  }
  function handleAdd(product) {
    addProduct(product)
      .then((newProduct) => {
        setProducts((prev) => [...prev, newProduct]);
        closeAddModal();
      })
      .catch(console.error);
  }
  function handleEdit(product) {
    editProduct(selectedProduct.id, product)
      .then((updatedProduct) => {
        setProducts((prev) =>
          prev.map((item) =>
            item.id === updatedProduct.id ? updatedProduct : item,
          ),
        );
        closeEditModal();
      })
      .catch(console.error);
  }
  function handleDelete() {
    deleteProduct(selectedProduct.id)
      .then(() => {
        setProducts((prev) =>
          prev.filter((item) => item.id !== selectedProduct.id),
        );
        closeDelModal();
      })
      .catch(console.error);
  }
  return (
    <>
      <ContentPro onAdd={openAddModal} data={products}>
        {loading ? (
          <p className="empty-text">در حال لود کردن اطلاعات</p>
        ) : (
          <PaginatedList
            data={products}
            fields={["title", "category", "price", "registersCount"]}
            onEdit={openEditModal}
            onDelete={openDelModal}
          />
        )}
      </ContentPro>
      {isOpenAdd && <Modal close={closeAddModal} onSubmit={handleAdd} />}
      {isOpenEdit && (
        <ModalEdit
          close={closeEditModal}
          data={selectedProduct}
          onSubmit={handleEdit}
        />
      )}
      {isOpenDel && (
        <ModalDelete
          title="دوره"
          close={closeDelModal}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}
export default Products;
