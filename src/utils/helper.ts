export const isPhone = () => {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

export const isContain = (dom: HTMLElement) => {
  const totalHeight = window.innerHeight || document.documentElement.clientHeight;
  const totalWidth = window.innerWidth || document.documentElement.clientWidth;
  // 当滚动条滚动时，top, left, bottom, right时刻会发生改变。
  const { top, right, bottom, left } = dom.getBoundingClientRect();
  return (top >= 0 && left >= 0 && right <= totalWidth && bottom <= totalHeight);
}
