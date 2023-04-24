import React,{useContext} from 'react'
// import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';
import { Link, useParams } from 'react-router-dom';
import '../css/story.css'

export default function StoryList() {

    const {name} = useParams();

    const {data} = useContext(DataContext);
    const {fruits} = data;

    const newFruits = fruits.find((f)=>(f.name === name))

    return (
    <div className='box'>
        <h5>{newFruits.name}-story</h5>
        <img style={{width: '500px'}} src={newFruits.picture} alt="" />
        <h5>{newFruits.detail}</h5>
    </div>
    )
}
