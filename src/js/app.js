// TODO: write your code here

export default function getSpecialAttack(pers) {
  const returnArray = [];
  pers.special.forEach((el) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = el;
    const objSpecial = {
      id,
      name,
      icon,
      description,
    };
    returnArray.push(objSpecial);
  });
  return returnArray;
}
