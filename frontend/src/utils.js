export const filterByShow = (reminders, show) => {
  if (show.length === 1) {
    if (show.includes("Active")) {
      return reminders.filter((reminder) => reminder.isDone === false);
    } else if (show.includes("Done")) {
      return reminders.filter((reminder) => reminder.isDone);
    }
  } else {
    return reminders;
  }
};

export const filterReminders = (reminders, filter) => {
  const { show, searchText } = filter;
  const filtered = show.length > 0 ? filterByShow(reminders, show) : [];
  return searchText
    ? filtered.filter((reminder) => reminder.description.includes(searchText))
    : filtered;
};

export const update = (reminders, data) => {
  if (data.hasOwnProperty("id")) {
    return reminders.filter((reminder) => reminder.id !== data.id);
  } else if (data.hasOwnProperty("reminder")) {
    return reminders.map((reminder) =>
      reminder.id === data.reminder.id ? data.reminder : reminder
    );
  } else {
    return reminders;
  }
};
