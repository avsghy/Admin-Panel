import PaginatedList from "../Components/Pagination/Pagination";
import Modal from "../Components/Modal/ModalUser";
import ModalDelete from "../Components/Modal/ModalDel";
import { useState, useEffect } from "react";
import { getUsers, addUser, editUser, deleteUser } from "../Js/App";
import Contentuser from "../Components/Content/Content-user";
import ModalEditUser from "../Components/Modal/ModalEditUser";
function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const nonadmins = users.filter((user) => user.role !== "admin");
  useEffect(() => {
    getUsers()
      .then(setUsers)
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
    setSelectedUser(users.find((user) => user.id === id));
    setIsOpenEdit(true);
  }
  function openDelModal(id) {
    setSelectedUser(users.find((user) => user.id === id));
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
  function handleAdd(user) {
    addUser(user)
      .then((newUser) => {
        setUsers((prev) => [...prev, newUser]);
        closeAddModal();
      })
      .catch(console.error);
  }
  function handleEdit(user) {
    editUser(selectedUser.id, user)
      .then((updatedUser) => {
        setUsers((prev) =>
          prev.map((item) => (item.id === updatedUser.id ? updatedUser : item)),
        );
        closeEditModal();
      })
      .catch(console.error);
  }
  function handleDelete() {
    deleteUser(selectedUser.id)
      .then(() => {
        setUsers((prev) => prev.filter((item) => item.id !== selectedUser.id));
        closeDelModal();
      })
      .catch(console.error);
  }
  return (
    <>
      <Contentuser data={nonadmins} onAdd={openAddModal}>
        {loading ? (
          <p className="empty-text">در حال لود کردن اطلاعات</p>
        ) : (
          <PaginatedList
            data={nonadmins}
            fields={["name", "userName", "email", "password"]}
            onEdit={openEditModal}
            onDelete={openDelModal}
          />
        )}
      </Contentuser>
      {isOpenAdd && <Modal close={closeAddModal} onSubmit={handleAdd} />}
      {isOpenEdit && (
        <ModalEditUser
          close={closeEditModal}
          data={selectedUser}
          onSubmit={handleEdit}
        />
      )}
      {isOpenDel && (
        <ModalDelete
          title="کاربر"
          close={closeDelModal}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}
export default Users;
