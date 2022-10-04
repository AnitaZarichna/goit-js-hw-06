const  categoriesNum = document.querySelectorAll (`li.item`);
console.log (`Number of categories: ${categoriesNum.length}`);

categoriesNum.forEach(function (category) {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
  });