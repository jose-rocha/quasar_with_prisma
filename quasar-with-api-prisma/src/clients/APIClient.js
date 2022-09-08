export const apiBaseUrl = process.env.API_BASE_URL;

export const getProducts = async () => (await fetch(`${apiBaseUrl}/products`)).json();
export const postProducts = async (payload) => (await fetch(`${apiBaseUrl}/product_tech`, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify(payload),
})).json();

export default {
  getProducts,
  postProducts,
};
