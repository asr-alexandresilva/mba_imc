const THINNESS_TEXT = "Magreza";
const NORMAL_TEXT = "Normal";
const OVERWEIGHT_TEXT = "Sobrepeso";
const OBESITY_TEXT = "Obesidade";

const form = document.querySelector("form");

const getImcMessage = (imc) => {
  const hasThinness = imc < 18.5;
  const hasNormal = imc >= 18.5 && imc < 24.9;
  const hasOverweight = imc >= 24.9 && imc < 30;

  if (hasThinness) return THINNESS_TEXT;

  if (hasNormal) return NORMAL_TEXT;

  if (hasOverweight) return OVERWEIGHT_TEXT;

  return OBESITY_TEXT;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value);

  console.log(weight);
  const imc = weight / height ** 2;

  alert(`Seu IMC é: ${imc.toFixed(2)} | Classificação: ${getImcMessage(imc)}`);

  form.reset();
});
