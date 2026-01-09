export function ageCalculator(year, month, day) {
  year = Number(year);
  month = Number(month);
  day = Number(day);

  const today = new Date();
  const birthday = new Date(year, month, day);

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
}
