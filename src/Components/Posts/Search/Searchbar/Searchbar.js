import React, { Component } from 'react';
import { Formik } from 'formik';
import Posts from '../../Posts';
import './Searchbar.scss'


class Searchbar extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        query: '',
        fileredPostsData: []
    }

    fetchFilteredPosts = async (value) => {
        try {
            const fetchFilteredPostsData = await fetch(`http://localhost:3333/posts/search/${value}`);
            const data = await fetchFilteredPostsData.json();

            this.setState({
                fileredPostsData: data
            })

        } catch (error) {
            console.log(error);
        }
    }

    // handleInputChange(){
    //     this.setState({
    //         query: this.Searchbar.value
    //     })
    // }

    render() {
        return (
            <div className='Searchbar'>
                <Formik
                    initialValues={{ search: '' }}
                    // validationSchema = {}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        // fetchFunccc()
                        this.fetchFilteredPosts(values.search);

                        // resetForm();
                        setSubmitting(false);
                    }}
                >
                    {(
                        {
                            values,
                            touched,
                            errors,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }
                    ) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <input
                                    id={'search'} name={'search'} type={'text'} value={values.search}
                                    className={''} placeholder={'Search...'}
                                    onChange={handleChange} onBlur={handleBlur}
                                ></input>

                                <input
                                    id={'submit'} name={'submit'} type={'submit'} value={'Submit'}
                                    className={''} placeholder={'Submit...'}
                                ></input>
                            </form>
                        )
                    }}

                </Formik>

                {/* <form action='http://localhost:3000/posts/search/actioon'>
                    <input
                        id={'search'} name={'search'} type={'text'}
                        className={''} placeholder={'Search...'}
                    ></input>

                    <input
                        id={'submit'} name={'submit'} type={'submit'} value={'Submit'}
                        className={''} placeholder={'Submit...'}
                    ></input>
                </form> */}
                <Posts data={this.state.fileredPostsData}/>

            </div>
        )
    }
}


export default Searchbar;

























