//Learn to implement a function in JavaScript that calculates and prints the cumulative sum of numbers from 1
//to a given `n`.


function Sum(n)
{
    let sum = 0;
    for (i=1; i<=n; i++)
    {
        sum = sum+i;
    }
    return sum;
}

function cumulative()
{
    const numb = 5;
    const CumulativeSum = Sum(numb);
    console.log(`The cumulative sum of ${numb} is: ${CumulativeSum}`);
}
cumulative();