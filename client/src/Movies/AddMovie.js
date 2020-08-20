import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const initialFormValues = {
    title:'',
    director: '',
    metascore: '',
    star1: '',
    star2: '',
    star3: ''
}

const AddMovie = (props) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const history = useHistory()
    const { id } = useParams()

    const changeHandler = e => {
        const value = e.target.value
        const name = e.target.name

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div>
            <form className="movie-card" onSubmit ={handleSubmit}>
                <h3>Title</h3>
                <input
                    type="string"
                    name="title"
                    onChange={changeHandler}
                    value={formValues.title}
                />
                <h3>Director</h3>
                <input
                    type="string"
                    name="director"
                    onChange={changeHandler}
                    value={formValues.director}
                />
                <h3>Metascore</h3>
                <input
                    type="string"
                    name="metascore"
                    onChange={changeHandler}
                    value={formValues.metascore} />
                <h3>Stars</h3>
                <input
                    type="string"
                    name="star1"
                    onChange={changeHandler}
                    value={formValues.star1}
                />

                <input
                    type="string"
                    name="star2"
                    onChange={changeHandler}
                    value={formValues.star2}
                />

                <input
                    type="string"
                    name="star3"
                    onChange={changeHandler}
                    value={formValues.star3}
                />

                <button>Update</button>
            </form>
        </div>
    )
}

export default AddMovie