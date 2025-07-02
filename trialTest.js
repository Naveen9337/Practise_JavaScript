let c = [10,20,40,60,92]
let max1 = -1;
let secmax1 = -1;
for(let l=0;l<c.length;l++)
{
    if(c[l]>max1)
    {
       
        secmax1 = max1;
        max1 = c[l];
    }
}

console.log(secmax1,max1);