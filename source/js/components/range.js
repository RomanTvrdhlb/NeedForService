const range = [...document.querySelectorAll(".custom-range")];

range.map(function(item) {
  const slider = item.querySelector(".custom-range__range");
  const sliderCounter = item.querySelector(".custom-range__counter");
  let sliderValue = slider.value + '%';
  sliderCounter.innerText = sliderValue;

  function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== 'range') {
      target = slider
    }
    const min = target.min
    const max = target.max
    const val = target.value

    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  }

  slider.addEventListener('input',function() {
    let sliderValue = slider.value + '%';
    sliderCounter.innerText = sliderValue;
  });

  slider.addEventListener('input', handleInputChange)
})


