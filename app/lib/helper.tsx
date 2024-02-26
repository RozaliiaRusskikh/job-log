export function convertUnixToDateString(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

  // Extract year, month, and day from the date object
  const year = date.getFullYear();
  // Months are 0 indexed, so we add 1 to get the correct month
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Construct the YYYY-MM-DD format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

export function convertUnixToDateLetterString(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds

  // Define an array to map numerical month values to their letter representation
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

  // Extract year, month, and day from the date object
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");

  // Construct the Month DD, YYYY format
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}
