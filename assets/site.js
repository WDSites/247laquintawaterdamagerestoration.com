(function(){
  var t=document.getElementById('nav-toggle'),m=document.getElementById('mobile-menu');
  if(!t||!m)return;
  function set(o){m.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');t.setAttribute('aria-label',o?'Close menu':'Open menu');}
  t.addEventListener('click',function(){set(!m.classList.contains('open'));});
  window.addEventListener('resize',function(){if(window.innerWidth>900)set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();
