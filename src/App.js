import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import rampsAction from './redux/actions/rampsActions';

function App() {

  const {ramps, loading, error} = useSelector(state => state.ramps)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(rampsAction())
  },[])


  return (

      <div className="App">
        
      </div>

  );
}

export default App;
