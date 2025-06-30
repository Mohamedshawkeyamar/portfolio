document.querySelectorAll('.fill').forEach(fill => {
    const percent = parseInt(fill.getAttribute('data-percent'));

    if (percent <= 40) {
      fill.classList.add('low');
    } else if (percent <= 75) {
      fill.classList.add('mid');
    } else {
      fill.classList.add('high');
    }
  });

