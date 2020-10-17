import { UPDATE_FILTER } from "../types";

const initialState = {
    show: ["Active"],
    searchText: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return {
                ...state,
                ...action.filter,
            };
        default:
            return state;
    }
};
