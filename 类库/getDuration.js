function getDuration(second) {
  let duration
  let days = Math.floor(second / 86400);
  let hours = Math.floor((second % 86400) / 3600);
  let minutes = Math.floor(((second % 86400) % 3600) / 60);
  let seconds = Math.floor(((second % 86400) % 3600) % 60);
  if (days > 0) duration = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
  else if (hours > 0) duration = hours + "小时" + minutes + "分" + seconds + "秒";
  else if (minutes > 0) duration = minutes + "分" + seconds + "秒";
  else if (seconds > 0) duration = seconds + "秒";
  return duration;
}