const CheckBox = (props) => {
  const { data, check, setCheck, root } = props;

  const handleToggle = (e) => {
    setCheck((prev) => {
      const newState = { ...prev, [data.id]: e.target.checked };

      const updateChild = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = e.target.checked;
          if (child?.children) {
            updateChild(child);
          }
        });
      };

      updateChild(data);

      const updateParents = (node) => {
        if (node.children && node.children.length > 0) {
          // First, recursively update all child nodes
          node.children.forEach((child) => updateParents(child));

          // Then update this node's state based on its direct children
          let checkedCount = 0;
          let childCount = node.children.length;

          node.children.forEach((child) => {
            if (newState[child.id] === true) {
              checkedCount++;
            }
          });

          // Update parent based on children's states
          if (checkedCount === childCount) {
            newState[node.id] = true;
          } else {
            newState[node.id] = false;
          }
        }
      };

      // Apply parent updates to each root node
      root.forEach((r) => {
        updateParents(r);
      });

      return newState;
    });
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={check[data.id] || false}
          onChange={(e) => handleToggle(e)}
        />
        <label>{data.label}</label>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        {data.children?.map((child) => {
          return (
            <CheckBox
              key={child.id}
              data={child}
              //   handleToggleChange={handleToggleChange}
              check={check}
              setCheck={setCheck}
              root={root}
            />
          );
        })}
      </div>
    </>
  );
};

export default CheckBox;
