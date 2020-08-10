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

export const filterReminders = (reminders, filter) => {
    const { show, searchText } = filter;
    const filtered = filterByShow(reminders, show);
    return searchText ? filtered.filter(reminder =>
        reminder.description.includes(searchText)) : filtered;
};

export const update = (reminders, data) => {
    if (data.hasOwnProperty('id')) {
        return reminders.filter(reminder => reminder.id !== data.id);
    } else if (data.hasOwnProperty('reminder')) {
        return reminders.map(reminder => reminder.id === data.reminder.id
            ? data.reminder : reminder);
    } else {
        return reminders;
    }
};
