/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    //First thing we'll do is that we'll save the lengths of of the input string s as well as
    //the length of the input pattern t
    const len1 = s.length;
    const len2 = t.length;
    //Now, we need to check if the pattern actually has a bigger length than the string that
    //is supposed to contain that pattern, if that's the case,
    //we automatically return an empty string to indicate that there is no way the
    //pattern actually exists in the string in that case
    if (len1 < len2) {
      return "";
    }
    /*
      Now that we're done with this case, let's start with the actual logic, 
      and for us to do that we'll need to have 2 maps, 
      one for the pattern and one for the string 
      */
  
    const hashPat = {};
    const hashStr = {};
  
    //Now we are going to fill the pattern map accordingly,
    //we'll do a loop over the pattern and increment the no of occurrence  of the element at
    //the current position in our dictionary,
    for (let i = 0; i < len2; i++) {
      //of course we'll need to have a check to see id that current element doesn't exist in our
      //map at all, if that's the case then we would need to set the vauebof that element
      //to 0 in the map first before we attempt to increment it, to avoid errors
      if (!hashPat[t[i]]) hashPat[t[i]] = 0;
      hashPat[t[i]]++;
      //=>character occurence of pattern
    }
  
    //Now that our pattern dictionary is ready, we are going to start with initializing 4 variables,
    //first is the count, which is initially 0, this is going to be incremented as long as we still
    // need characters from our string to satisfy our pattern
    let count = 0;
    //Next variable we will call left, this is also initialized to zero,
    //this will represent the left pointer of our candidate window,
    //and yes we'll see a right pointer being defined in a minute
    let left = 0;
    //Next we'll have a couple more variables that will actually be directly related to the
    //final answer, First we'll have a variable called startIndex, this will initially be equal to - 1,
    // now this will actually be the true start of. Our window when we return the final answer,
    //the left pointer will have us when we're in the actual process of finding the answer,
    //the start index will eventually be updated to point at the actual start of our answer pattern
    let startIndex = -1;
    /*
      Lastly, we'll have a variable called called minLen, which stands for minimum length, 
      and that variable will actually eventually be the minimum length for the substring that 
      contains our pattern, this as you might expect will be used with our startIndex to give us 
      the final answer eventually, for now however, we'll set it to a huge number that we'll try to 
      minimize as much as possible later in our logic
    */
    let minLen = Number.MAX_VALUE;
  
    //Ok, so now we're done with the prep work, let's jump in to the actual work
  
    //First thing we'll do is to create a loop, that will have it's index be the right pointer actually, that will loop over the string input
    for (let right = 0; right < len1; right++) {
      /*
          Now first thing we'll do is to increment the no.of occurence lf the current element in the 
          string dictionary Of course before we do we'll have to take into account that this may be 
          the first occurence of that element. And if that's the case we would have to set it to zero
           before we attempt to increment it
        */
      if (!hashStr[s[right]]) hashStr[s[right]] = 0;
      hashStr[s[right]]++;
      //=> adding character count in input string hash
  
      if (!hashPat[s[right]]) hashPat[s[right]] = 0;
  
      if (hashStr[s[right]] <= hashPat[s[right]]) count++; //=> keep incrementing the count if string hash is less then pattern hash
      //=> count==len2 means a window is found that contains all character of pattern string
  
      if (count == len2) {
        while (hashStr[s[left]] > hashPat[s[left]] || hashPat[s[left]] == 0) {
          //=> minimizing the windows range from left side
          if (hashStr[s[left]] > hashPat[s[left]]) hashStr[s[left]]--;
          left++; //=> incrementing the left pointer
        }
  
        let windowLen = right - left + 1; // calculating the windows length
        if (minLen > windowLen) {
          minLen = windowLen;
          startIndex = left;
        }
      }
    }
  
    if (startIndex == -1) {
      return "";
    }
    return s.substring(startIndex, startIndex + minLen);
  };