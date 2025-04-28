import React, { useContext, useEffect, useState } from 'react'
import { QuestionContext } from './QuestionContext'

export const QuestionForm = () => {
    const { setQuesData, QuesData } = useContext(QuestionContext)


    const [QuestionData, setQuestionData] = useState({
        name: '',
        type: '',
    })

    const handleChange = (e) => {
        setQuestionData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        console.log(QuestionData, 'QuestionData', QuesData)
    }, [QuestionData, QuesData])

    const hanldeSubmit = () => {
        setQuesData(QuestionData)
        setQuestionData({
            name: '',
            type: '',
        })
    }

    return (
        <div>

            <h2>
                QuestionForm
            </h2>

            <div>

                <label>
                    Question Name
                </label>

                <input name='name' value={QuestionData.name} onChange={e => handleChange(e)}>

                </input>

            </div>

            <div>

                <label>
                    Question Type
                </label>

                <select name='type' value={QuestionData.type} onChange={e => handleChange(e)}>
                    <option>Yes/No</option>
                    <option>CheckBOx</option>
                    <option>Short Answer</option>

                </select>

            </div>

            <div>

                {/* {QuesData} */}
            </div>


            <button onClick={hanldeSubmit()}>
                submit
            </button>

        </div>
    )
}
