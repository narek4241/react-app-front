import React, { Component } from 'react';
import Posts from '../../Posts'
import './CategoryPosts.scss';


class CategoryPosts extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        catPosts: [],
        cat: '',
    }

    fetchPostsByCat = async (cat) => {
        try {
            const fetchPostsByCatData = await fetch(`https://radiant-citadel-22741.herokuapp.com/posts/cat/${cat}`)
            const data = await fetchPostsByCatData.json();
            this.setState({
                catPosts: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        // works 1 and 2 (equally)(1 preferred) (2 explores another goal))

        // 1
        // this.fetchPostsByCat(this.props.cat);
        // console.log(`0.5 CatPosts.js this.props.cat '${this.props.cat}`);

        // 2
        await this.setState({ cat: this.props.cat });
        this.fetchPostsByCat(this.state.cat);

    }


    render() {
        return (
            <div className='category-posts'>
                {this.props.catPostsHeading ? <h1 style={{ textTransform: 'capitalize' }}>{this.props.catPostsHeading}</h1> : null}
                <div className='category-posts-content'>
                    <Posts data={this.state.catPosts} />
                </div>
            </div>
        )
    }
}

export default CategoryPosts;

