import * as EmployeeActions from '../actions/employee.actions';

export const initialState = {
    employees: []
};

export function employeeReducer(state = initialState, action: EmployeeActions.Actions) {
    switch (action.type) {
        case EmployeeActions.ActionTypes.EmployeeLoadSuccess:
            return { ...state, employees: action.payload };
        default:
            return state;
    }
}