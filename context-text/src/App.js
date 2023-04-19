import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import React from 'react'

// App에 쓰기위해, 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext'
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
function App() {
  return (
    <div className="App">
      {/** 작성한 context를 값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
      <ObjectContext.Provider value={ {name:"홍길동", login:true} } >
        {/** ThemeContext와 ObjectContext값 확인 */}
      <Toolbar/>
      </ObjectContext.Provider>
      </ThemeContext.Provider>
      
    <DataProvider>
      {/** DataProvider 값 확인 */}
      <Toolbar />
    </DataProvider>
    {/** ContextBox를 가져와서 ThemeContext를 이용하여 
     * blue값을 전달하기
     */}
<ThemeContext.Provider value='blue'>
  <ContextBox/>
</ThemeContext.Provider>
    </div>
  );
}

export default App;
