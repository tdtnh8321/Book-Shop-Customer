function Pagination(props) {
  const { numpages, currentpage, onClickChangePage } = props;
  return (
    <div className="flex flex-row items-center justify-center bg-white rounded-lg font-semibold w-auto my-5">
      <button
        className="h-12 border-2 border-r-0 border-orange-600 px-4 rounded-l-lg hover:bg-orange-500 hover:text-white"
        onClick={() => onClickChangePage(currentpage - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      {(() => {
        let listbtn = [];
        for (let i = 1; i <= numpages; i++) {
          listbtn.push(
            <button
              key={i}
              className={`h-12 border-2 border-r-0 border-orange-600 w-12 ${
                i == currentpage ? "bg-orange-400 text-white" : ""
              }`}
              onClick={() => onClickChangePage(i)}
            >
              {i}
            </button>
          );
        }
        return listbtn;
      })()}
      <button
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
        onClick={() => onClickChangePage(currentpage + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
