import rampsReducer from '../../../redux/reducers/rampsReducer';
import * as types from '../../../redux/actionTypes';

describe('rampsReducers', () => {
    let initialState;
    beforeEach(() => {
        initialState = {
            ramps: [],
            loading: false,
            error: false,
            count: 0
        }
    });

    it('return initial state', () => {
        const action = {};
        const reducer = rampsReducer(undefined, action);

        expect(reducer).toEqual(initialState);
    })

    it('should return initial state and loading to true', () => {
        const action = {
            type:  types.REQUEST_RAMPS
        }
        const reducer = rampsReducer(initialState, action);

        expect(reducer).toEqual({
            ramps: [],
            loading: true,
            error: false,
            count: 0
        })
    })

    it('should return initial state with ramps values', () => {
        const action = {
            type: types.SUCCESS_RAMPS,
            payload: [{ramps: ['ramps']}]
        }
        const reducer = rampsReducer(initialState, action);

        expect(reducer).toEqual({
            ramps: [{ramps: ['ramps']}],
            loading: false,
            error: false,
            count: 0
        })
    })

    it('should return error to true', () => {
        const action = {
            type: types.ERROR_RAMPS
        }
        const reducer = rampsReducer(initialState, action);

        expect(reducer).toEqual({
            ramps: [],
            loading: false,
            error: true,
            count: 0
        })
    })

    it('should return count ramps value', () => {
        const action = {
            type: types.COUNT_RAMPS,
            payload: 5
        }
        const reducer = rampsReducer(initialState, action);

        expect(reducer).toEqual({
            ramps: [],
            loading: false,
            error: false,
            count: 5
        })
    })
})
