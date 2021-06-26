import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//import components
import Nav from './components/nav/nav'
import AllDesigners from './components/allDesigners/allDesigners';
import EachProduct from './components/eachProduct/eachProduct';
import AllProjectPage from './components/viewProduct/viewAllProduct/allProjectPage';
import EachProductPage from './components/viewProduct/viewEachProduct/eachProductPage';

function App() {
   //const [isTrue, setisTrue] = useState(false)
   
   /* const handleIsTrue = (childData) => {
      setisTrue(childData)
   } */
   
   return (
      <BrowserRouter>
         <div className="side-drawer-is-ou">
            <Nav />
              <Switch>
                  <Route path='/' exact component={AllDesigners}/>
                  <Route path='/eachproduct/:id' exact component={EachProduct}/>
                  <Route path='/eachproduct/:id/:gender'exact component={AllProjectPage}/>
                  {/* <Route exact path='/eachproduct/:id/:gender/:genderItemIndex'><EachProductPage /></Route> */}
                  <Route path='/eachproduct/:id/:gender/:genderItemIndex' exact component={EachProductPage}/>
                  {/*The Route path here is included so that it is different from the route path to EachProductPage*/}
                  <Route path='/eachproduct/:id/:gender/1/:type' exact component={AllProjectPage}/>
                  <Route path='/*'><h1>Error</h1></Route>
              </Switch>
          </div>
      </BrowserRouter>
    );
}

export default App;