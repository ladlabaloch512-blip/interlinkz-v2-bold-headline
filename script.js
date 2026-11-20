
document.addEventListener('DOMContentLoaded',function(){
 var t=document.querySelector('.nav-toggle'),n=document.querySelector('.main-nav');
 if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.classList.toggle('open',o);t.setAttribute('aria-expanded',o);});}
 var chips=document.querySelectorAll('.chip'),cards=document.querySelectorAll('.demo-card');
 chips.forEach(function(ch){ch.addEventListener('click',function(){
   chips.forEach(function(c){c.classList.remove('active')});ch.classList.add('active');
   var f=ch.getAttribute('data-filter');
   cards.forEach(function(card){card.style.display=(f==='all'||card.getAttribute('data-cat')===f)?'':'none';});
 });});
 var form=document.getElementById('contactForm');
 if(form){form.addEventListener('submit',function(e){e.preventDefault();document.getElementById('formNote').hidden=false;});}
});

// FAQ accordion: answers visible without JS; with JS they collapse and open smoothly.
document.querySelectorAll('.faq-item').forEach(function (item) {
  var btn = item.querySelector('.faq-q');
  var panel = item.querySelector('.faq-a');
  if (!btn || !panel) return;
  panel.style.maxHeight = '0px';
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', function () {
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (other) {
      other.classList.remove('open');
      other.querySelector('.faq-a').style.maxHeight = '0px';
      other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// FAQ page: open the first question by default so the pattern is visible.
if (/faq\.html$/.test(window.location.pathname)) {
  var firstItem = document.querySelector('.faq-item');
  if (firstItem) {
    var fp = firstItem.querySelector('.faq-a');
    firstItem.classList.add('open');
    fp.style.maxHeight = fp.scrollHeight + 'px';
    firstItem.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
  }
}
