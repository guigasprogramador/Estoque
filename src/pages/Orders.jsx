export default function OrdersPage  () {
  const { useAppContext } = context();
  const { orders, loading, error } = state;

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    await deleteOrder(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      <Link to="/add-order">Add Order</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>
                <button onClick={() => handleDeleteOrder(order.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
