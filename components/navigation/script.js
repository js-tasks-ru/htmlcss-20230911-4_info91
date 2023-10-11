window.addEventListener('load', () => {
  const button = document.getElementById('navigation__toggler');
  const navigation = document.querySelector('.navigation');
  console.log(button);
  button.addEventListener('click', () => {
    if (navigation.style.display === 'block') {
      navigation.style.display = 'none';
      document.body.overflow = 'initial';
    } else {
      navigation.style.display = 'block';
      document.body.overflow = 'hidden';
    }
  });
});
