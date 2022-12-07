const calc = document.querySelector('#submit');
calc?.addEventListener('click', calculate);

function calculate(e: Event) {
  e.preventDefault();

  const width: number = parseInt(
    (<HTMLInputElement>document.getElementById('width')).value
  );

  const length: number = parseInt(
    (<HTMLInputElement>document.getElementById('length')).value
  );
  alert(width * length);
}
