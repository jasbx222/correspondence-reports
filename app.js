/* ASITS Reports prototype: drill-down, letter path, export. No sending, no scheduling. */
document.addEventListener('click',function(e){
  if(e.target.closest('.li')){location.href='09b-letter-path.html';return}
  if(e.target.closest('.back')){location.href='09-drilldown.html';return}
  if(e.target.closest('[data-export]')){location.href='10-export.html';return}
  if(e.target.closest('.x,.scrim,.mf .btn:not(.pri)')){location.href='02-overdue.html';return}
  if(e.target.closest('.hat')){document.querySelector('.hatmenu')?location.href='index.html':location.href='01b-hat-switch.html';return}
  if(e.target.closest('[data-drill]')){location.href='09-drilldown.html'}
});
