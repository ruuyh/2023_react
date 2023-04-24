import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom';
import DataContext from '../context/DataContext';
import '../css/story.css'

export default function Story() {
    const value = useContext(DataContext);

    return (
        <div>
            <h3>StoryList</h3>
            <div className='name-story'>
            { value.data.fruits.map((f, i)=>(
                <Link to={`/story/${f.name}`} key={i}>{f.name}Story</Link>
                ))
            }
            </div>

            <Outlet />

        </div>
    )
}
