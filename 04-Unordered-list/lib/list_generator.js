const listItem = content => `<li class="list-group-item">${content}</li>`;


const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  let html = "";
  items.forEach((element) => {
    html += listItem(element);
  });
  return `<ul class="list-group">${html}</ul>`;
};

module.exports = { listItem, unorderedList }; // Do not remove.
console.log(unorderedList(["milk", "butter", "bread"]));
