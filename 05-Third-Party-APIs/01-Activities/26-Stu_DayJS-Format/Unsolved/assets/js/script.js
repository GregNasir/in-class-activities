// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2023-09-19').format('MMMM D YYYY');
$('#1a').text(gradDate);
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const dayWeek = dayjs('2027-01-01').format('dddd');
$('#2a').text(dayWeek);
// TODO: 3. What is the current time in the format: hours:minutes:seconds

function start() {
    //start timer
    setInterval(function () {
        const timeIs = dayjs().format('hh:mm:ss');
        $('#3a').text(timeIs);
    }, 1000)
};
start();

// TODO: 4. What is the current Unix timestamp?
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs(1548381600000) // 1548381600000
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

