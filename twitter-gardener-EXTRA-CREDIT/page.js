// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function onMessage(gardeningInProgress) {
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
  const tweets = document.getElementsByClassName('tweet');
  const cursorUrl = chrome.runtime.getURL('images/rose-cursor.gif');
  const backgroundUrl = chrome.runtime.getURL('images/sparkle.gif');
  
  if (gardeningInProgress) {
    Array.from(tweets).forEach((tweet) => {
      const tweetText = tweet.getElementsByClassName('tweet-text');
      tweet.addEventListener('mouseover', () => {
        tweet.style.cursor = `url(${cursorUrl}) 4 12, auto`;
        tweet.style.background = `url(${backgroundUrl})`;
        tweet.style.opacity='0.8';
      });
      tweet.addEventListener('mouseout', () => {
        tweet.style.cursor = ``;
        tweet.style.background = ``;
        tweet.style.opacity='1';
      });
      tweet.addEventListener('click', (event) => {
        event.stopPropagation();
        tweetText[0].textContent = POSITIVE_MESSAGES[Math.floor(Math.random() * POSITIVE_MESSAGES.length)];
      });
    });
  } else {

  }
}

console.log('twitter-gardener start');
