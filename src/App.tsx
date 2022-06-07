import { FC, useEffect, useState } from 'react';
import { Router } from './pages/Router';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';
import { Loader } from './design-system/_common/Loader';

import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';


interface AppProps {
  name?: any
  children?: Element
  ebconfig?: any
  options?: any
}



const App: FC<AppProps> = ({ children,
  ebconfig,
  options }) => {
    const [posts, fetchState, getPosts] = useGetPosts();




  const [data, setData] = useState(false);


  const setDataTimeout = () => {
    setTimeout(() => {
      setData(true);
      getPosts()
    }, 3500);
  }


  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

      setDataTimeout()
      console.log(data);
  }, []);


  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Router />
        {!data ?  <Loader /> : ''}

        {fetchState === FetchState.DEFAULT && (
        <>
          <p>
            Hello there, click the button below to get the list of posts from
            the API.
          </p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Here's the list of posts:</p>
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <h3>
                  {post.id} - {post.title}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
 
      </ThemeProvider>
    </div>
  );
}

export default App;
