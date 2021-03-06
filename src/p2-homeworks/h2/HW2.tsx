import React, { useState } from 'react'
import Affairs from './Affairs'
import s from '../../p1-main/m1-ui/u1-app/App.module.css';

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: 'high' | 'middle' | 'low'
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    if (filter === 'high') {
        return affairs.filter(affair => affair.priority === 'high')
    }
    if (filter === 'middle') {
        return affairs.filter(affair => affair.priority === 'middle')
    }
    if (filter === 'low') {
        return affairs.filter(affair => affair.priority === 'low')
    } else return affairs // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => { // need to fix any
    return affairs.filter(affair => affair._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            {/*<hr/>*/}
            <span className={s.title}>homeworks 2</span>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
