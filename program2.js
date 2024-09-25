function decodeTheRing(message, pattern) {
  const m = message.length;
  const p = pattern.length;

  // Create a DP table where dp[i][j] will be true if pattern[0...j-1] matches message[0...i-1]
  const dp = Array(m + 1).fill(false).map(() => Array(p + 1).fill(false));

  // Empty pattern matches empty message
  dp[0][0] = true;

  // If pattern starts with *, it can match an empty string (dp[0][j] is true)
  for (let j = 1; j <= p; j++) {
      if (pattern[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= p; j++) {
          if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
              // Characters match, or ? matches any one character
              dp[i][j] = dp[i - 1][j - 1];
          } else if (pattern[j - 1] === '*') {
              // * can match zero characters (dp[i][j-1]) or one or more characters (dp[i-1][j])
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          }
      }
  }

  return dp[m][p];
}

// Example test cases
console.log(decodeTheRing("aa", "a")); // Output: false
console.log(decodeTheRing("aa", "*")); // Output: true
console.log(decodeTheRing("cb", "?a")); // Output: false
