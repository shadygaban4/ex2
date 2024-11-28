//shady and Saed

console.log(1);
for (let i = 2; i < 238; i++) 
  {
  let counter = 0;
  for (let j = 2; j < i - 1; j++) 
    {
    if (i % j == 0) 
      {
      counter++;
      }
  }
  if (counter == 0)
  {
    console.log(i);
  }
}
