import { data } from "autoprefixer";
import BookCard from "./BookCard";
function BookList(props) {
  const { data } = props;

  return (
    <div className=" flex sm:flex-row justify-evenly items-center flex-wrap content-around flex-col w-full">
      {data && data.map((item) => <BookCard key={item._id} item={item} />)}
    </div>
  );
}

export default BookList;
