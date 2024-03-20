import { useEffect, useState } from "react";
import upArrow from '../../assets/up-arrow.svg'

const PostsViewAndSearch = () => {

    const [posts, setPosts] = useState([]);
    const [searchText, setSearchText] = useState('')

    // fetch posts on initial render
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(posts => {
            // console.log(response)
            setPosts(posts);
        })
    }, [])

    const filteredPosts = posts.filter(post => {
        return (post.title).includes(searchText);
      });

    // console.log(filteredPosts);

    return (
        <>
            <div className="main-content">
                <div className="search" id="search">
                    <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="search ....."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="cards">
                    {
                        filteredPosts && filteredPosts.map((post, index) => (
                            <div key={`post-${index}`} className="card">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="to-top">
                    <a href="#search">
                        <img src={upArrow} alt="up arrow" width="20"/>
                    </a>
                </div>
            </div>
        </>
    );

}

export default PostsViewAndSearch;