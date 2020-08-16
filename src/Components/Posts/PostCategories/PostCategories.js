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
//         const fecthPostsNotEmptyCatsData = await fetch('https://radiant-citadel-22741.herokuapp.com/posts/cats/notempty');
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
    const fecthPostsNotEmptyCatsData = await fetch('https://radiant-citadel-22741.herokuapp.com/posts/cats/notempty');
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
        const fecthPostsNotEmptyCatsData = await fetch('https://radiant-citadel-22741.herokuapp.com/posts/cats/notempty');
        notEmptyCats = await fecthPostsNotEmptyCatsData.json();
    }

    // fecthPostsNotEmptyCats();

    return (
        <div>
            {/* // */}
            {/* same lb how is/was in singlePage similarPosts */}
            {/* <CategoryPosts cat={`${notEmptyCats[1]}`} /> */}

            <CategoryPosts cat='electronics' catPostsHeading='Electronics' />
            <CategoryPosts cat='vehicles' catPostsHeading='Vehicles' />
            <CategoryPosts cat='all' catPostsHeading='Show All' />
        </div>
    )
}

export default PostCategories;
