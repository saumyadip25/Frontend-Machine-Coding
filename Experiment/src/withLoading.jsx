import { useState } from "react";

const withLoading = (Component) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (loading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};

export default withLoading;
