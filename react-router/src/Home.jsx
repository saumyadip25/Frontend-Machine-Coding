function Home(props) {
  const { name } = props;
  return (
    <div>
      This is Home component <span>{name}</span>.
    </div>
  );
}

export default Home;
