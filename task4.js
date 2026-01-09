export class FriendAge {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = Number(year);
    this.month = Number(month);
    this.day = Number(day);
  }

  returnAge() {
    let today = new Date();
    let birthday = new Date(this.year, this.month, this.day);

    let age = today.getFullYear() - birthday.getFullYear();
    let monthDiff = today.getMonth() - birthday.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthday.getDate())
    ) {
      age--;
    }

    return `${this.name} is ${age} today!`;
  }
}
