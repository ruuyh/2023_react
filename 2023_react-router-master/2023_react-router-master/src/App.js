import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './page/Layout';
import Home from './page/Home';
import Story from './page/Story';
import StoryList from './page/StoryList';
import { DataProvider } from './context/DataContext';

function App() {
    return (
        <div className="App">
        <DataProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/home' element={<Home />} />

                    <Route path='/story' element={<Story />} >
                        <Route path='/story/:name' element={<StoryList />} />
                    </Route>

                </Route>
            </Routes>
        </DataProvider>
        </div>
    );
    }

export default App;
