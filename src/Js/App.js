const baseUrl = "http://localhost:3000";
async function request(path, options) {
  const response = await fetch(`${baseUrl}/${path}`, options);
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
}
function sendData(path, method, data) {
  return request(path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
export function getProducts() {
  return request("courses");
}
export function getUsers() {
  return request("users");
}
export function addProduct(product) {
  return sendData("courses", "POST", product);
}
export function editProduct(id, product) {
  return sendData(`courses/${id}`, "PATCH", product);
}
export function deleteProduct(id) {
  return request(`courses/${id}`, { method: "DELETE" });
}
export function addUser(user) {
  return sendData("users", "POST", user);
}
export function editUser(id, user) {
  return sendData(`users/${id}`, "PATCH", user);
}
export function deleteUser(id) {
  return request(`users/${id}`, { method: "DELETE" });
}
