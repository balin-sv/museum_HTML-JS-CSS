const firstArr = [
  "./assets/img/galery/galery1.jpg",
  "./assets/img/galery/galery2.jpg",
  "./assets/img/galery/galery3.jpg",
  "./assets/img/galery/galery4.jpg",
  "./assets/img/galery/galery5.jpg",
  "./assets/img/galery/galery6.jpg",
  "./assets/img/galery/galery7.jpg",
  "./assets/img/galery/galery8.jpg",
  "./assets/img/galery/galery9.jpg",
  "./assets/img/galery/galery2.jpg",
  "./assets/img/galery/galery11.jpg",
  "./assets/img/galery/galery12.jpg",
];

const a = document.querySelector("#a");

show(firstArr, a);

function shuffle(arr) {
  return arr.sort(() => Math.random() * 100 - 50);
}

function show(arr, col) {
  let shuffleArr = shuffle(arr);
  for (let i = 0; i < shuffleArr.length; i++) {
    let div = document.createElement("div");
    div.className = "galery-item";
    let img = document.createElement("img");
    img.src = arr[i];
    div.append(img);
    col.append(div);
  }
}
