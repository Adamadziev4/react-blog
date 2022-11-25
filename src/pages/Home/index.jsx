import React from "react";
import axios from "axios";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Pagination from "../../components/Pagination";

import styles from "./Home.module.css";

const Home = () => {
  const [posts, setPosts] = React.useState([]);
  const [postsCount, setPostsCount] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const limitPostsOnPage = 6;

  React.useEffect(() => {
    axios // Для того чтобы вычислить общее кол-во постов (для пагинации)
      .get(
        "https://62c1dce62af60be89ecefccf.mockapi.io/react-blog-mockapi_posts"
      )
      .then(({ data }) => {
        setPostsCount(data.length);
      });

    if (searchValue) {
      axios
        .get(
          `https://62c1dce62af60be89ecefccf.mockapi.io/react-blog-mockapi_posts?limit=${limitPostsOnPage}`
        )
        .then(({ data }) => {
          setPostsCount(data.length);
          setPosts(data);
        });
    } else {
      axios
        .get(
          `https://62c1dce62af60be89ecefccf.mockapi.io/react-blog-mockapi_posts?page=${currentPage}&limit=${limitPostsOnPage}`
        )
        .then(({ data }) => {
          setPosts(data);
        });
    }
  }, [currentPage, searchValue]);

  const postItems = posts
    .filter((post) =>
      post.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((post) => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        category={post.subCategory}
        img={post.img}
        description={post.description}
      />
    ));

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className={styles.root}>
        {postItems}
        {searchValue && !postItems.length && (
          <h3>По вашему запросу ничего не найдено</h3>
        )}
      </div>
      {!searchValue && (
        <Pagination
          changePage={(num) => {
            setCurrentPage(num);
          }}
          pageCount={Math.ceil(postsCount / limitPostsOnPage)} // Кол-во страниц
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Home;
