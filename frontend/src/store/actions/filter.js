import { UPDATE_FILTER } from "../types";

export const updateFilter = (filter) => ({
    type: UPDATE_FILTER,
    filter,
});
