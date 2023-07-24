async function getData() {
  const a = await fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((json) => json);
  return a;
}
const b = getData();
b.then((res) => console.log(res));
