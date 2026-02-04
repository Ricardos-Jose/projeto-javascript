export default function outsideClick(elements, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!elements.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    elements.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    if (!elements.contains(event.target)) {
      elements.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
