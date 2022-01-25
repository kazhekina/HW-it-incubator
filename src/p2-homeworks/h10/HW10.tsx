import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from '../h10/HW10.module.css';

function HW10() {
    // useSelector, useDispatch
    const loading = false

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (

            <div className={s.wrapperPage}>
                <span className={s.title}>homeworks 10</span>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW10
