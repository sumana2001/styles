var animData = {
  wrapper: document.querySelector('#animationWindow'),
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);


