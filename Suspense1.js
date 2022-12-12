import * as React from 'react';
export default function App() {
    // const [posts, setPosts] = React.useState([]);
    // const [isLoading, setIsLoading] = React.useState(true);
  
    // React.useEffect(() => {
    //   fetchPosts().then((data) => {
    //     setIsLoading(false);
    //     setPosts(data);
    //   });
    // }, [posts]);
  
    // const posts = resource.posts.read();
    // return (
    //   <div>
    //     {isLoading
    //       ? 'loading'
    //       : posts.map((post) => {
    //           return <div className="post">{post.title}</div>;
    //         })}
    //   </div>
    // );
  
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostDetails />
      </Suspense>
    );
  }