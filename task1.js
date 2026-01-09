export function costCalculator(amount) {
  amount = Number(amount);

  const fee = 3;
  const interest = 0.01;

  return amount + fee + (amount * interest);
}
