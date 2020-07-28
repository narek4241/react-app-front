import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Homebar from '../../Home/Homebar/Homebar';
import Login from '../../Authotication/Login/Login';
import Register from '../../Authotication/Register/Register';
import Footer from '../../Footer/Footer';
import Input from '../../Authotication/Input';
import Error from '../../Authotication/Error';
import './AddPost.css';


const phoneRegExp = /^[+374]{4}[0-9]{8}/;
const priceExp = /^[1-9][0-9]*/;


const validation = Yup.object().shape(
    {
        cat: Yup.string()
        ,
        region: Yup.string()
        ,

        type: Yup.string()
        ,

        state: Yup.string()
        ,

        price: Yup.string()
            .max(15, 'Price max length is 30')
            .matches(priceExp, 'Must be a valid Price')
        ,
        currency: Yup.string()
        ,

        title: Yup.string()
            .required('Title is required')
            .min(2, 'Title min length is 2')
            .max(100, 'Title min length is 2')
        ,

        desc: Yup.string()
            .min(2, 'Desc min length is 2')
            .max(2000, 'Desc min length is 2')
        ,

        imgUrl: Yup.string()
            .min(2, 'ImgUrl min length is 2')
            .max(2000, 'ImgUrl min length is 2')
        ,
        imgUrl2: Yup.string()
            .min(2, 'ImgUrl2 min length is 2')
            .max(2000, 'ImgUrl2 min length is 2')
        ,
        imgUrl3: Yup.string()
            .min(2, 'ImgUrl3 min length is 2')
            .max(2000, 'ImgUrl3 min length is 2')
        ,
        imgUrl4: Yup.string()
            .min(2, 'ImgUrl4 min length is 2')
            .max(2000, 'ImgUrl4 min length is 2')
        ,
        imgUrl5: Yup.string()
            .min(2, 'ImgUrl5 min length is 2')
            .max(2000, 'ImgUrl5 min length is 2')
        ,

        role: Yup.string()
        ,

        contact: Yup.string()
            .required('Phone Number is required')
            .matches(phoneRegExp, 'Must be a valid Phone Number')
        ,
    }
);

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // https://agile-temple-62197.herokuapp.com/posts/add
    fetchAddPost = async (value) => {

        console.log(value, JSON.stringify(value));
        const fetchAddPostData = await fetch('http://localhost:3333/posts/add?titile=11111',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'applicaltion/json',
                }            })
        const data = await fetchAddPostData.json();
    }



    render() {
        return (
            <div id='addPost' className='AddPost'>
                <Login />
                <Register />

                <Homebar />

                <Formik
                    initialValues={{
                        cat: 'Other', region: '', type: 'offer', state: '', price: '', currency: 'usd',
                        title: '', desc: '', imgUrl: '', imgUrl2: '', imgUrl3: '', imgUrl4: '', mgUrl5: '',
                        role: 'owner', contact: ''
                    }}
                    // validationSchema={validation}
                    // onSubmit={(values, { setSubmitting, resetForm }) => {
                    //     setSubmitting(true);
                    //     setTimeout(() => {
                    //         console.log(JSON.stringify(values));
                    //         resetForm();
                    //         setSubmitting(false);
                    //     }, 500);
                    // }}

                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        this.fetchAddPost(values);
                        // console.log(JSON.stringify(values));
                        // alert(JSON.stringify(values));
                        resetForm();
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
                            <form className='add-post'
                                onSubmit={handleSubmit}
                            >
                                <div className='add-post-errors'>
                                    <Error touch={touched.price} error={errors.price} />
                                    <Error touch={touched.title} error={errors.title} />
                                    <Error touch={touched.desc} error={errors.desc} />
                                    <Error touch={touched.imgUrl} error={errors.imgUrl} />
                                    <Error touch={touched.imgUrl2} error={errors.imgUrl2} />
                                    <Error touch={touched.imgUrl3} error={errors.imgUrl3} />
                                    <Error touch={touched.imgUrl4} error={errors.imgUrl4} />
                                    <Error touch={touched.imgUrl5} error={errors.imgUrl5} />
                                    <Error touch={touched.contact} error={errors.contact} />
                                </div>
                                <div className="add-post-cat">
                                    <label>Category</label>
                                    <Field name="cat" as="select" onChange={handleChange} onBlur={handleBlur} className="add-post-field" >
                                        <option defaultValue>Խնդրում ենք ընտրել</option>
                                        <optgroup label="Marketplace">
                                            <option value="Real Estate">Անշարժ գույք</option>
                                            <option value="Vehicles">Տրանսպորտ</option>
                                            <option value="Electronics">Էլեկտրոնիկա</option>
                                            <option value="Appliances">Կենցաղային տեխնիկա</option>
                                            <option value="Household">Ամեն ինչ տան համար</option>
                                            <option value="Clothing and Fashion">Նորաձևություն եւ ոճ</option>
                                            <option value="Baby and Kids">Մանկական աշխարհ</option>
                                            <option value="Culture and Hobby">Մշակույթ և հոբբի</option>
                                            <option value="Tools and Materials">Գործիքներ և նյութեր</option>
                                            <option value="Pets and Plants">Կենդանիներ և բույսեր</option>
                                            <option value="Food and Beverages">Մթերք և ըմպելիքներ</option>
                                            <option value="Everything Else">Այլ</option>
                                        </optgroup>
                                    </Field>
                                </div>

                                <div className="add-post-region">
                                    <label>Region</label>
                                    <div>
                                        <Field name="region" as="select" onChange={handleChange} onBlur={handleBlur} className="add-post-field">
                                            <option defaultValue>Խնդրում ենք ընտրել</option>
                                            <optgroup label="Երևան">
                                                <option value="Երևան,Աջափնյակ">Աջափնյակ</option>
                                                <option value="Երևան,Արաբկիր">Արաբկիր</option>
                                                <option value="Երևան,Ավան">Ավան</option>
                                                <option value="Երևան,Դավիթաշեն">Դավիթաշեն</option>
                                                <option value="Երևան,Էրեբունի">Էրեբունի</option>
                                                <option value="Երևան,Քանաքեռ Զեյթուն">Քանաքեռ Զեյթուն</option>
                                                <option value="Երևան,Կենտրոն">Կենտրոն</option>
                                                <option value="Երևան,Մալաթիա Սեբաստիա">Մալաթիա Սեբաստիա</option>
                                                <option value="Երևան,Նոր Նորք">Նոր Նորք</option>
                                                <option value="Երևան,Նորք Մարաշ">Նորք Մարաշ</option>
                                                <option value="Երևան,Նուբարաշեն">Նուբարաշեն</option>
                                                <option value="Երևան,Շենգավիթ">Շենգավիթ</option>
                                            </optgroup>
                                            {/* <optgroup label="Գյումրի,Շիրակ">
                                                <option value="Պալիգոն,Գյումրի,Շիրակ">Պալիգոն</option>
                                                <option value="58,Գյումրի,Շիրակ">58</option>
                                                <option value="Սլաբոտկա,Գյումրի,Շիրակ">Սլաբոտկա</option>
                                                <option value="Ձորի Մայլա,Գյումրի,Շիրակ">Ձորի Մայլա</option>
                                                <option value="Վասմոյ,Գյումրի,Շիրակ">Վասմոյ</option>
                                                <option value="Կինոերևան,Գյումրի,Շիրակ">Կինոերևան</option>
                                                <option value="Բուլվարային,Գյումրի,Շիրակ">Բուլվարնի</option>
                                                <option value="Ստրոյմաշ,Գյումրի,Շիրակ">Ստրոյմաշ</option>
                                                <option value="Այլ,Գյումրի,Շիրակ">Այլ․․․</option>
                                            </optgroup> */}
                                            <optgroup label="Արագածոտն">
                                                <option value="Ապարան,Արագածոտն">Ապարան</option>
                                                <option value="Արագած,Արագածոտն">Արագած</option>
                                                <option value="Արուճ,Արագածոտն">Արուճ</option>
                                                <option value="Աշտարակ,Արագածոտն">Աշտարակ</option>
                                                <option value="Բյուրական,Արագածոտն">Բյուրական</option>
                                                <option value="Կոշ,Արագածոտն">Կոշ</option>
                                                <option value="Մուղնի,Արագածոտն">Մուղնի</option>
                                                <option value="Օշական,Արագածոտն">Օշական</option>
                                                <option value="Թալին,Արագածոտն">Թալին</option>
                                                <option value="Ծաղկահովիտ,Արագածոտն">Ծաղկահովիտ</option>
                                                <option value="Ուջան,Արագածոտն">Ուջան</option>
                                                <option value="Ոսկեվազ,Արագածոտն">Ոսկեվազ</option>
                                            </optgroup>
                                            <optgroup label="Արարատ">
                                                <option value="Արարատ,Արարատ">Արարատ</option>
                                                <option value=",Արարատ">Արգավանդ</option>
                                                <option value="Արգավանդ,Արարատ">Արտաշատ</option>
                                                <option value="Այնթապ,Արարատ">Այնթապ</option>
                                                <option value="Գեղանիստ,Արարատ">Գեղանիստ</option>
                                                <option value="Գետափնյա,Արարատ">Գետափնյա</option>
                                                <option value="Հայանիստ,Արարատ">Հայանիստ</option>
                                                <option value="Մասիս,Արարատ">Մասիս</option>
                                                <option value="Նոր Խարբերդ,Արարատ">Նոր Խարբերդ</option>
                                                <option value="Վեդի,Արարատ">Վեդի</option>
                                            </optgroup>
                                            <optgroup label="Արմավիր">
                                                <option value="Արմավիր,Արմավիր">Արմավիր</option>
                                                <option value="Էջմիածին,Արմավիր">Էջմիածին</option>
                                                <option value="Մեծամոր,Արմավիր">Մեծամոր</option>
                                                <option value="Մուսալեռ,Արմավիր">Մուսալեռ</option>
                                                <option value="Փարաքար,Արմավիր">Փարաքար</option>
                                                <option value="Թաիրով,Արմավիր">Թաիրով</option>
                                            </optgroup>
                                            <optgroup label="Արցախ">
                                                <option value="Ասկերան,Արցախ">Ասկերան</option>
                                                <option value="Հադրութ,Արցախ">Հադրութ</option>
                                                <option value="Քաշաթաղ,Արցախ">Քաշաթաղ</option>
                                                <option value="Լաչին,Արցախ">Լաչին</option>
                                                <option value="Մարտակերտ,Արցախ">Մարտակերտ</option>
                                                <option value="Մարտունի,Արցախ">Մարտունի</option>
                                                <option value="Շահումյան,Արցախ">Շահումյան</option>
                                                <option value="Շուշի,Արցախ">Շուշի</option>
                                                <option value="Ստեփանակերտ,Արցախ">Ստեփանակերտ</option>
                                            </optgroup>
                                            <optgroup label="Գեղարքունիք">
                                                <option value="Ճամբարակ,Գեղարքունիք">Ճամբարակ</option>
                                                <option value="Գավառ,Գեղարքունիք">Գավառ</option>
                                                <option value="Մարտունի,Գեղարքունիք">Մարտունի </option>
                                                <option value="Սևան,Գեղարքունիք">Սևան</option>
                                                <option value="Վարդենիս,Գեղարքունիք">Վարդենիս</option>
                                            </optgroup>
                                            <optgroup label="Կոտայք">
                                                <option value="Աբովյան,Կոտայք">Աբովյան</option>
                                                <option value="Աղվերան,Կոտայք">Աղվերան</option>
                                                <option value="Արգել,Կոտայք">Արգել</option>
                                                <option value="Առինջ,Կոտայք">Առինջ</option>
                                                <option value="Արզնի,Կոտայք">Արզնի</option>
                                                <option value="Բջնի,Կոտայք">Բջնի</option>
                                                <option value="Բյուրեղավան,Կոտայք">Բյուրեղավան</option>
                                                <option value="Չարենցավան,Կոտայք">Չարենցավան</option>
                                                <option value="Ձորաղբյուր,Կոտայք">Ձորաղբյուր</option>
                                                <option value="Գառնի,Կոտայք">Գառնի</option>
                                                <option value="Գետամեջ,Կոտայք">Գետամեջ</option>
                                                <option value="Գողթ,Կոտայք">Գողթ</option>
                                                <option value="Հրազդան,Կոտայք">Հրազդան</option>
                                                <option value="Ջրաբեր,Կոտայք">Ջրաբեր</option>
                                                <option value="Ջրվեժ,Կոտայք">Ջրվեժ</option>
                                                <option value="Քանաքեռավան,Կոտայք">Քանաքեռավան</option>
                                                <option value="Քասախ,Կոտայք">Քասախ</option>
                                                <option value="Մայակովսկի,Կոտայք">Մայակովսկի</option>
                                                <option value="Մրգաշեն,Կոտայք">Մրգաշեն</option>
                                                <option value="Նոր Հաճըն,Կոտայք">Նոր Հաճըն</option>
                                                <option value="Նուռնուս,Կոտայք">Նուռնուս</option>
                                                <option value="Պռոշյան,Կոտայք">Պռոշյան</option>
                                                <option value="Պտղնի,Կոտայք">Պտղնի</option>
                                                <option value="Ծաղկաձոր,Կոտայք">Ծաղկաձոր</option>
                                                <option value="Եղվարդ,Կոտայք">Եղվարդ</option>
                                                <option value="Զովունի,Կոտայք">Զովունի</option>
                                            </optgroup>
                                            <optgroup label="Լոռի">
                                                <option value="Ալավերդի,Լոռի">Ալավերդի</option>
                                                <option value="Դսեղ,Լոռի">Դսեղ</option>
                                                <option value="Սպիտակ,Լոռի">Սպիտակ</option>
                                                <option value="Ստեփանավան,Լոռի">Ստեփանավան</option>
                                                <option value="Տաշիր,Լոռի">Տաշիր</option>
                                                <option value="Վանաձոր,Լոռի">Վանաձոր</option>
                                            </optgroup>
                                            <optgroup label="Շիրակ">
                                                <option value="Արթիկ,Շիրակ">Արթիկ</option>
                                                <option value="Գյումրի,Շիրակ">Գյումրի</option>
                                                <option value="Մարալիկ,Շիրակ">Մարալիկ</option>
                                            </optgroup>
                                            <optgroup label="Սյունիք">
                                                <option value="Գորիս,Սյունիք">Գորիս</option>
                                                <option value="Քաջարան,Սյունիք">Քաջարան</option>
                                                <option value="Կապան,Սյունիք">Կապան</option>
                                                <option value="Մեղրի,Սյունիք">Մեղրի</option>
                                                <option value="Սիսիան,Սյունիք">Սիսիան</option>
                                            </optgroup>
                                            <optgroup label="Տավուշ">
                                                <option value="Բերդ,Տավուշ">Բերդ</option>
                                                <option value="Դիլիջան,Տավուշ">Դիլիջան</option>
                                                <option value="Իջևան,Տավուշ">Իջևան</option>
                                                <option value="Նոյեմբերյան,Տավուշ">Նոյեմբերյան</option>
                                            </optgroup>
                                            <optgroup label="Վայոց Ձոր">
                                                <option value="Ջերմուկ,Վայոց Ձոր">Ջերմուկ</option>
                                                <option value="Վայք,Վայոց Ձոր">Վայք</option>
                                                <option value="Եղեգնաձոր,Վայոց Ձոր">Եղեգնաձոր</option>
                                            </optgroup>
                                            <option value="Հայաստանից դուրս">Հայաստանից դուրս</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="add-post-type">
                                    {/* <label>Type</label> */}
                                    <div><span>Offer</span><Field type="radio" name="type" value="offer" className='add-post-field' /></div>
                                    <div><span>Exchange</span><Field type="radio" name="type" value="exchange" className='add-post-field' /></div>
                                    <div><span>Search</span><Field type="radio" name="type" value="search" className='add-post-field' /></div>
                                </div>

                                <div className="add-post-state">
                                    <label>State</label>
                                    <Field style={{ width: '100%', maxWidth: '300px', height: '50px' }} name="state" as="select" className="add-post-field">
                                        <option value="">Please Select</option>
                                        <option value="new">New</option>
                                        <option value="used">Used</option>
                                    </Field>
                                </div>

                                <div className="add-post-price-currency">
                                    <label>Price :</label>
                                    <div>
                                        <input
                                            id={'price'} name={'price'} type={'text'} value={values.price}
                                            className={''} placeholder={'Price...'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                        <Field name="currency" as="select" className='add-post-field'>
                                            <option value="usd">USD</option>
                                            <option value="amd">AMD</option>
                                            <option value="rub">RUB</option>
                                            <option value="eur">EUR</option>
                                        </Field>
                                    </div>
                                </div>

                                <div className="add-post-title">
                                    <label>Title:</label>
                                    <input
                                        id={'title'} name={'title'} type={'text'} value={values.title}
                                        className={''} placeholder={'Title (required)'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>

                                <div className="add-post-desc">
                                    <label>Description:</label>
                                    <Field name="desc" as="textarea" className="add-post-field"></Field>
                                </div>

                                <div className="add-post-imgUrl">
                                    <div>
                                        <label>ImgUrl(s):</label>
                                        <input
                                            id={'imgUrl'} name={'imgUrl'} type={'text'} value={values.imgUrl}
                                            className={''} placeholder={'ImgUrl...'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            id={'imgUrl2'} name={'imgUrl2'} type={'text'} value={values.imgUrl2}
                                            className={''} placeholder={'ImgUrl2 (optional)'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                        <input
                                            id={'imgUrl3'} name={'imgUrl3'} type={'text'} value={values.imgUrl3}
                                            className={''} placeholder={'ImgUrl3 (optional)'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                    </div>
                                    <div>
                                        <input
                                            id={'imgUrl4'} name={'imgUrl4'} type={'text'} value={values.imgUrl4}
                                            className={''} placeholder={'ImgUrl4 (optional)'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                        <input
                                            id={'imgUrl5'} name={'imgUrl5'} type={'text'} value={values.imgUrl5}
                                            className={''} placeholder={'ImgUrl5 (optional)'}
                                            onChange={handleChange} onBlur={handleBlur}
                                        ></input>
                                    </div>
                                </div>
                                <div className="add-post-role">
                                    {/* <label>Role</label> */}
                                    <div>
                                        <Field type="radio" name="role" value="owner" className="add-post-field" />
                                        <div>
                                            <span>Owner</span>
                                            <label>If you are selling your own item and you are its owner.</label>
                                        </div>
                                    </div>
                                    <div>
                                        <Field type="radio" name="role" value="organization" className="add-post-field" />
                                        <div>
                                            <span>Organization</span>
                                            <label>If you sell wholesale, represent a store or an organization.</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="add-post-contact">
                                    <label>Contact:</label>
                                    <input
                                        id={'contact'} name={'contact'} type={'text'} value={values.contact}
                                        className={''} placeholder={'+374CCNNNNNN'}
                                        onChange={handleChange} onBlur={handleBlur}
                                    ></input>
                                </div>

                                <div className="add-post-submit">
                                    <input
                                        id={'submit'} name={'submit'} type={'submit'} value={''}
                                        className={''} placeholder={'Submit...'}
                                    ></input>
                                    <div className='add-post-submit-triangle-dot'></div>
                                </div>
                            </form>
                        )
                    }}

                </Formik>

                <Footer />
            </div >
        );
    }
}

export default AddPost;






