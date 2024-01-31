let tableGenerator = function (){
    let sNumber = document.getElementById('starting_number').value
    let eNumber = document.getElementById('ending_number').value

    console.log(sNumber);
    console.log(eNumber);

    let i = 1 ;
    let ans = 0 ;
    let printData = '' ;

    // for(i = 1; i<=10; i++)
    // {
    //     ans = sNumber * i ;

    //     console.log(`${sNumber} x ${i} = ${ans}`);
    // } 

    for(j=sNumber; j<=eNumber; j++)
    {
        printData += ` <div class='col-12 col-md-3'> <table class='table table-bordered table-hover'>`
        for(i = 1; i<=10; i++)
    {
        ans = sNumber * i ;

        printData += ` <tr><td> ${sNumber} x ${i} = ${ans} </td></tr> `;
    } 
        sNumber++; 
        printData += `</table></div>` 
    }
     
    console.log(printData);

    document.getElementById('table').innerHTML = printData ;


}
