// Learn how to count the occurrences of a specific element in an array using JavaScript.
function ArrayOccurence(nums, k)
{
    let count = 0;
    for (i=0; i<nums.length; i++)
    {
        if (nums[i] === k)
        {
            count++;
        }
    }
    return count;
}

function array()
{
    const numbers = [2,4,5,2,1,2];
    const k = 2;
    const countOccurence = ArrayOccurence(numbers, k);
    console.log(`The number of occcurence of ${k} is: ${countOccurence}`);
}
array();

