// when you import message since it was not exported using default then you have to import it by the original name
export const message = "this is a variable that was exported";

export const name = "Rod";

const name2 = "Juan";

const returnMessage = () => {
  return "this is a func that was exported default";
};
export default returnMessage;
// when you import returnMessage you can rename it to whatever you want

// const mes2 = "can you have two export defaults?";
// export default mes2;
