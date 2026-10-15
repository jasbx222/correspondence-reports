/* ASITS Reports prototype – jQuery-friendly vanilla. Drill-down + export. No sending, no scheduling. */
document.addEventListener('click',function(e){
  var d=e.target.closest('[data-drill]');
  if(d){location.href='09-drilldown.html?from='+encodeURIComponent(d.getAttribute('data-drill'));return}
  if(e.target.closest('[data-export]')){location.href='10-export.html';return}
  var c=e.target.closest('.chip:not(.add)');
  if(c){c.parentNode.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on')}
});
