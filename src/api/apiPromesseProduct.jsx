import axios from "axios";

async function ApiPromesseProduct() {
    const result = await axios("https://fakestoreapi.com/products");
    return result.data;
}

export default ApiPromesseProduct;
