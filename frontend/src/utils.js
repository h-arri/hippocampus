export const filterByShow = (reminders, show) => {
    switch (show) {
        case "Active":
            return reminders.filter(reminder => reminder.isDone === false);
        case "Done":
            return reminders.filter(reminder => reminder.isDone);
        case "":
            return [];
        case "All":
        default:
            return reminders;
    }
};

export const filter = (reminders, filter) => {
    const { show, searchText } = filter;
    const filtered = filterByShow(reminders, show);
    return searchText ? filtered.filter(reminder =>
        reminder.description.includes(searchText)) : filtered;
};
