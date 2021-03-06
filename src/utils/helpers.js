export const getDayByAbbreviation = (day) => {
  switch (day) {
    case "sun":
      return "Sunday";
      break;
    case "mon":
      return "Monday";
      break;
    case "tues":
      return "Tuesday";
      break;
    case "wed":
      return "Wednesday";
      break;
    case "thurs":
      return "Thursday";
      break;
    case "fri":
      return "Friday";
      break;
    case "sat":
      return "Saturday";
  }
};

export const getDayByNumber = (day) => {
  switch (day) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
  }
};

export const getIndexedUserList = (users) => {
  const usersObj = {};
  for (let i = 0; i < users?.length; i++) {
    usersObj[users[i]["id"]] = users[i];
  }
  return usersObj;
};
