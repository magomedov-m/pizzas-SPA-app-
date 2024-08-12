import React from "react";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ElemBlock from "../components/ProductBlock";
import Sceletone from "../components/ProductBlock/Sceletone";
import Pagination from "../components/Pagination/Index";
import { SearchContext } from "../App";


export default function Home() {
  const categoryId = useSelector(state => state.test);
  const setCategoryId = () => {}
  console.log('redux-state', categoryId)
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  const onChangeSort = (id) => {
    console.log(id);
  };

  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6679c18618a459f63951515e.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj, idx) => <ElemBlock key={idx} {...obj} />);

  const skeletone = [...new Array(6)].map((_, index) => (
    <Sceletone key={index} />
  ));

  return (
    <div className="container container--cart">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => onChangeSort(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => console.log(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletone : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
