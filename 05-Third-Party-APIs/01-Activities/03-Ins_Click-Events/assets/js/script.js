const alertButtonEl = $('#alert-btn');
const themeButtonEl = $('#theme-btn');
const lotteryButtonEl = $('#lottery-btn');
const lotteryNumberEl = $('#lottery-number');
const refreshButtonEl = $('#refresh-btn');

// light theme state
let isDark = true;

// Click event causes alert "Hello World"
// Vanilla JS equivalent: `addEventListener`
alertButtonEl.on('click', function () {
  alert('Hello World');
});

// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});

// Click event causes random number
lotteryButtonEl.on('click', function () {
  const random = Math.floor(Math.random() * 100000000) + 10000000;
  console.log(random);
  lotteryNumberEl.text(random);
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();
});
