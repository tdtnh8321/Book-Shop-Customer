function InputSearch(props) {
  const { value, setValue } = props;
  return (
    <div className="flex flex-row py-5">
      <p className="mr-5">Tìm kiếm theo tên</p>
      <input
        type="text"
        className="w-[50%] h-5"
        placeholder="..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default InputSearch;
