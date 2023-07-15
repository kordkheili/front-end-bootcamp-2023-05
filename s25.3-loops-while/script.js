//example1 - print 1 to 100

let i = 0;
while (i <= 100) {
  let color = i % 2 === 0 ? "lightblue" : "pink";
  if (i === 40) {
    i++;
    continue;
  }
  if (i === 70) {
    break;
  }
  document.write(`
    <div style="background-color:${color};margin-bottom:5px;">
      ${i}
    </div>
  `);
  i++;
}
