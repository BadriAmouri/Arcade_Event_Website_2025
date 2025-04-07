const previous = document.getElementById('previous');
const next = document.getElementById('next');
let dayoj = document.querySelectorAll('.box_agenda');
let ob = 0;

function updat(index) {
  dayoj.forEach((dayoj, i) => {
    if (i === index) {
      dayoj.classList.add("active");
    } else {
      dayoj.classList.remove("active");
    }
  });
}

next.addEventListener("click", () => {
  ob = (ob + 1) % dayoj.length;
  dayoj.forEach(box_agenda => {
    box_agenda.style.transform = `translateX(-${ob * 100}%)`;
  });
  updat(ob);
});

previous.addEventListener("click", () => {
  ob = (ob - 1 + dayoj.length) % dayoj.length;
  dayoj.forEach(box_agenda => {
    box_agenda.style.transform = `translateX(-${ob * 100}%)`;
  });
  updat(ob);
});