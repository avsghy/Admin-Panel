function ModalDelete({ title, close, onConfirm }) {
  return (
    <div className="modal-screen">
      <div className="modal">
        <i className="ui-border top red"></i>
        <i className="ui-border bottom red"></i>
        <header className="modal-header">
          <h3>حذف {title}</h3>
          <button className="close-modal" onClick={close}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <main className="modal-content">
          <p className="remove-text">آیا از حذف این {title} اطمینان دارید؟</p>
        </main>
        <footer className="modal-footer">
          <button className="cancel" onClick={close}>
            انصراف
          </button>
          <button className="submit" onClick={onConfirm} autoFocus>
            تائید
          </button>
        </footer>
      </div>
    </div>
  );
}
export default ModalDelete;
