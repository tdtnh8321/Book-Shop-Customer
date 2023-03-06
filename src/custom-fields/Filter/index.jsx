function Filter(props) {
  const { title, listItems, checked, setChecked } = props;
  return (
    <div className="w-full flex flex-col items-start py-5">
      {title}
      <div>
        <input
          type="checkbox"
          checked={checked === ""}
          onChange={() => setChecked("")}
        />
        All
      </div>

      {listItems &&
        listItems.map((item) => (
          <div className="py-1">
            <input
              key={item._id}
              type="checkbox"
              checked={checked === item.slug}
              onChange={() => setChecked(item.slug)}
            />
            {item.name}
          </div>
        ))}
    </div>
  );
}

export default Filter;
