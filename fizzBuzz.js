/* Print	out	all	the	numbers	from	1	to	100.	But	for	every	
number	divisible	by	3	print	replace it	with	the	
word	“Fizz,”	for	any	number	divisible	by	5	replace	it	with	
the	word	“Buzz”	and	for	a	number	divisible	
by	both	3	and	5	replace	it	with	the	word	“FizzBuzz.” */

let i = 1;
while (i <= 100) {
  if (i % 3 === 0) {
    console.log(i + " Fizz" + "\n");
    i++;
  } else if (i % 5 === 0) {
    console.log(i + "Buzz" + "\n");
    i++;
  } else {
    console.log(i + "\n");
    i++;
  }
}
