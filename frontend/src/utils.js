export const filterByShow = (reminders, show) => {
    switch (show) {
        case "Active":
            return reminders.filter(reminder => reminder.isDone === false);
        case "Done":
            return reminders.filter(reminder => reminder.isDone);
        case "All":
            return reminders;
        default:
            return [];
    }
};

export const search = (reminders, searchText) => {
    return searchText ? reminders.filter(reminder =>
        reminder.description.includes(searchText)) : reminders;
}
