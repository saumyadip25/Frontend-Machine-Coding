const Products = (props) => {
  const { product } = props;
  const { title, price, thumbnail } = product;

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "solid 1px black",
        margin: "5px",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ height: "250px", width: "250px" }}
      />
      <div>Item: {title}</div>
      <div>Price: ${price}</div>
    </div>
  );
};

export default Products;
