import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ElemBlock from "../components/ProductBlock";
import Sceletone from "../components/ProductBlock/Sceletone";

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  });

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoading(true)
    fetch(`https://6679c18618a459f63951515e.mockapi.io/Items?${category}&sortBy=${sortBy}&order=${order}`)
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }, [categoryId, sortType]);

  console.log(`categoryId: ${categoryId}, sortType: ${sortType}`)
  
  return (
    <div className="container container--cart">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceletone key={index} />)
          : items.map((obj, idx) => <ElemBlock key={idx} {...obj} />)}
      </div>
    </div>
  );
}

