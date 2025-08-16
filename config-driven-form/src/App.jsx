import { userConfig } from "./configData";
import Form from "./Form";

const App = () => {
  const data = userConfig;
  return <Form config={data} />;
};

export default App;
