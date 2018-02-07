export function timeConverter(UNIX_timestamp){
  var dateTime = new Date(UNIX_timestamp);
  return dateTime.toLocaleString(); // -> "2/1/2013 7:37:08 AM"
}