import "./Loading.css";
function Loading() {
  return (
    <div className="loading-overlay" id="loadingOverlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">در حال بارگذاری...</p>
      </div>
    </div>
  );
}
export default Loading;
