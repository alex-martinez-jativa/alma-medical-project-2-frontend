import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../redux/actions/rampsActions';
import * as types from '../../../redux/actionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get ramps action', () => {
    afterEach(() => fetchMock.restore())

    it('getRampsAction', () => {
        fetchMock.getOnce('http://localhost:3001/ramps', {
            body: { ramps: ['ramps'] },
            headers: { 'content-type': 'application/json' }
          })
      
          const expectedActions = [
            { type: types.REQUEST_RAMPS },
            { type: types.SUCCESS_RAMPS }
          ]
          const store = mockStore()
      
          return store.dispatch(actions.getRampsAction()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })
    })
})