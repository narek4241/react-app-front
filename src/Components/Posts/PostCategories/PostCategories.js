import React, { Component, useState } from 'react';
import CategoryPosts from './CategoryPosts/CategoryPosts';
import './PostCategories.scss';


// class NotEmptyCats extends Component {
//     constructor(props) {
//         super(props)
//     }
//     state = {
//         notEmptyCats: []
//     }

//     fecthPostsNotEmptyCats = async () => {
//         const fecthPostsNotEmptyCatsData = await fetch('http://localhost:3333/posts/cats/notempty');
//         const data = await fecthPostsNotEmptyCatsData.json();
//         this.setState({
//             notEmptyCats: data
//         })

//         console.log(this.state.notEmptyCats);
//     }

//     componentDidMount() {
//         this.fecthPostsNotEmptyCats();
//     }

//     render() {
//         return (
//             <div>{this.state.notEmptyCats}</div>
//         )
//     }
// }

// ///////////////////////////////////////////////////////////////

let notEmptyCats = [];

// const getAllPostsNotEmptyCats = () => {
// const [notEmptyCats, setNotEmptyCats] = useState([]);

const fecthPostsNotEmptyCats = async () => {
    const fecthPostsNotEmptyCatsData = await fetch('http://localhost:3333/posts/cats/notempty');
    notEmptyCats = await fecthPostsNotEmptyCatsData.json();
}

fecthPostsNotEmptyCats();
// }

// getAllPostsNotEmptyCats();

// ///////////////////////////////////////////////////////////////


const SetPostCategories = () => {
    console.log(notEmptyCats);

    return (
        <div>
            <CategoryPosts cat={'electronics'} />
        </div>
    )
}

let proper = [`electronics`, 'b', 'c'];


const PostCategories = (props) => {
    const fecthPostsNotEmptyCats = async () => {
        const fecthPostsNotEmptyCatsData = await fetch('http://localhost:3333/posts/cats/notempty');
        notEmptyCats = await fecthPostsNotEmptyCatsData.json();
    }

    // fecthPostsNotEmptyCats();

    return (
        <div>
            {/* // */}
            {/* same lb how is/was in singlePage similarPosts */}
            {/* <CategoryPosts cat={`${notEmptyCats[1]}`} /> */}

            {/* <CategoryPosts cat={'electronics'} />
            <CategoryPosts cat={'vehicles'} /> */}
        </div>
    )
}

export default PostCategories;













