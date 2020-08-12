import React, { Component } from 'react';
import { Formik } from 'formik';
import Posts from '../../Posts';
import './Searchbar.scss'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class Searchbar extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        fileredPostsData: []
    }

    fetchAllPosts = async () => {
        try {
            const fetchAllPostsData = await fetch('http://localhost:3333/posts');
            const data = await fetchAllPostsData.json()
            this.setState({
                fileredPostsData: data
            })
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchAllPosts();
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

                        this.fetchFilteredPosts(values.search);
                        // window.location.href += `/${values.search}`
                        // fetchFunccc()

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

                            // #growth #change to 'material-ui textfield (pros = modernView, 'opions)
                            // <form onSubmit={handleSubmit} action={`http://localhost:3000/posts/search/${values.search}`}>
                            //     <Autocomplete
                            //         freeSolo
                            //         id="free-solo-2-demo"
                            //         disableClearable
                            //         // options={top100Films.map((option) => option.title)}
                            //         options={['mac', 'iphone', 'petros', 'poghos']}
                            //         renderInput={(values) => (
                            //             <form onSubmit={handleSubmit} action={`http://localhost:3000/posts/search/${values.search}`}>
                            //                 <TextField
                            //                     {...values}
                            //                     label="Search input"
                            //                     margin="normal"
                            //                     variant="outlined"
                            //                     value={values.search}
                            //                     InputProps={{ ...values.InputProps, type: 'search' }}
                            //                 />
                            //                 <input
                            //                     id={'submit'} name={'submit'} type={'submit'} value={'Submit'}
                            //                     className={''} placeholder={'Submit...'} onClick={() => {alert('clicked')}}
                            //                 ></input>
                            //             </form>
                            //         )}
                            //     />
                            // </form>
                        )
                    }}

                </Formik>

                {/* <form>
                    <input
                        id={'search'} name={'search'} type={'text'}
                        className={''} placeholder={'Search...'}
                    ></input>

                    <input
                        id={'submit'} name={'submit'} type={'submit'} value={'Submit'}
                        className={''} placeholder={'Submit...'}
                    ></input>
                </form> */}

                <Posts data={this.state.fileredPostsData} />

            </div>
        )
    }
}


export default Searchbar;

























