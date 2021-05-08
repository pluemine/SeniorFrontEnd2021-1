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

export function dateMonthwMin(date) {
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
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = ("0" + hour).slice(-2);
  min = ("0" + min).slice(-2);
  return monthNames[month] + " " + day + ", " + year + " " + hour + ":" + min;
}

export function minToH(min) {
  if (min / 60 > 1) {
    return min / 60 + " Hours";
  } else {
    return min / 60 + " Hour";
  }
}

export function minwH(min) {
  var h = Math.floor(min/60);
  var m = min%60;
  var hh = " Hour ";
  if (h > 1) {
    hh = " Hours ";
  }
  var mm = " Min";
  if (m > 1) {
    mm = " Mins";
  }
  console.log(h,m);
  if (h >= 1) {
    return h.toString() + hh + m.toString() + mm;
  } else {
    return m.toString() + mm;
  }
}
