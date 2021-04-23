export function dateHyphen(date) {
  var date = new Date(date);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  if (parseInt(day) - 10 >= 0) {
    if (parseInt(month) - 10 >= 0) {
      return "" + year + "-" + month + "-" + day;
    } else {
      return "" + year + "-0" + month + "-" + day;
    }
  } else {
    if (parseInt(month) - 10 >= 0) {
      return "" + year + "-" + month + "-0" + day;
    } else {
      return "" + year + "-0" + month + "-0" + day;
    }
  }
}

export function dateMonth(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var date = new Date(date);
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  return monthNames[month] + " " + day + ", " + year;
}

export function minToH(min) {
  if (min / 60 > 1) {
    return min / 60 + " Hours";
  } else {
    return min / 60 + " Hour";
  }
}
