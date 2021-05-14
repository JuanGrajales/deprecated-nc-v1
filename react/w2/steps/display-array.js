// How to display an array using map

displayArray = () => {
  let arrayOfHtml = this.state.arrayName.map((eachElement) => {
    return <li>{eachElement}</li>;
  });
  return arrayOfHtml;
};
