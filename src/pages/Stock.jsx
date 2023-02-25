import React, { useEffect } from 'react';
import { useAppContext } from '../context';

const Stock = () => {
const { state, fetchProducts, deleteProduct } = useAppContext();

useEffect(() => {
fetchProducts();
}, [fetchProducts]);

return (
<div>
<h1>Gerenciar Estoque</h1>
{state.error && <p>{state.error}</p>}
{state.loading ? (
<p>Carregando...</p>
) : (
<ul>
{state.products.map((product) => (
<li key={product.id}>
<p>{product.name}</p>
<p>{product.quantity}</p>
<button onClick={() => deleteProduct(product.id)}>Excluir</button>
</li>
))}
</ul>
)}
</div>
);
};

export default Stock;