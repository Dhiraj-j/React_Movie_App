import React from 'react';
// import Filter from './components/Filter.jsx';
import HomeScreen from './Pages/HomeScreen.jsx';

const App =() => {
  // const [page , setPage] = useState(2);
  // useEffect(() => {
  
  //   return () => {
  //     console.log("render")
  //   }
  // }, [page])
  
  return (
    <>
    {/* <UncontrolledExample/> */}
      {/* <Filter/> */}
      {/* <pageContext.Provider value={{page , setPage}}> */}
        <HomeScreen />
      {/* </pageContext.Provider> */}
    </>
  );
}

export default App;
// export {pageContext};