function vowel()
{
    var text = document.getElementById('m_text').value ;
    console.log(text) ;
    var alphabet = text.split('') ;
    console.log(alphabet);
    var vowels = ['a','e','i','o','u'] ;
    console.log(text.length) ;

    var i = 0 ;
    var j = 0 ;
    var answerTotal = 0 ;
    var answer0 = 0 ;
    var answer1 = 0 ;
    var answer2 = 0 ;
    var answer3 = 0 ;
    var answer4 = 0 ;


    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[0] || alphabet[j] == vowels[1] || alphabet[j] == vowels[2] || alphabet[j] == vowels[3] || alphabet[j] == vowels[4] )
      {
        answerTotal = answerTotal + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` Total Vowels Alphabets is ${answerTotal}`);

    
   
    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[0])
      {
        answer0 = answer0 + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` (a) Vowel Alphabets is ${answer0}`);


    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[1])
      {
        answer1 = answer1 + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` (e) Vowel Alphabets is ${answer1}`);


    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[2])
      {
        answer2 = answer2 + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` (i) Vowel Alphabets is ${answer2}`);


    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[3])
      {
        answer3 = answer3 + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` (o) Vowel Alphabets is ${answer3}`);



    for(i=1; i<=text.length; i++)
    {
      if(alphabet[j] == vowels[4])
      {
        answer4 = answer4 + 1 ;
      }
      j++ ;
    }
    j = 0 ;
    console.log(` (u) Vowel Alphabets is ${answer4}`);
}

function clearAll()
{
    document.getElementById('m_text').value = '' ;
}