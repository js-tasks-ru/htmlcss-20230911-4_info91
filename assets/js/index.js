window.addEventListener('load', () => {
  const html = document.getElementsByTagName('body')[0];
  const themeToggler = document.querySelectorAll('.theme');
  console.log('theme', html);
  themeToggler.forEach((item) => {
    console.log('item', item);
    item.addEventListener('click', () => {
      //   if (html.hasAttribute('data-theme')) {
      //     html.removeAttribute('data-theme');
      //   } else {
      item.addAttribute('data-theme', 'dark');
      //   }
    });
  });
});
