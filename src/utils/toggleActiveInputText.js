export default toggleActive = (e, wrapClass, labelClass) => {
  const { target } = e;
  const wrapper = target.closest(wrapClass);
  const label = wrapper.querySelector(labelClass);
  if (target.value) {
    label.classList.add('active');
  } else {
    label.classList.remove('active');
  }
};