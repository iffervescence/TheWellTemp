var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'flow1.json'
});