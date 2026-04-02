(function () {
  if (document.getElementById('omath-banner')) return;

  var banner = document.createElement('a');
  banner.id = 'omath-banner';
  banner.href = 'https://ru.omath.net/';
  banner.target = '_blank';
  banner.rel = 'noopener';

  banner.style.cssText =
    'position:fixed;top:0;left:0;width:100%;z-index:99999;' +
    'background:#1879d9;color:#fff;text-align:center;' +
    'padding:10px 40px;box-sizing:border-box;' +
    'text-decoration:none;font-family:sans-serif;' +
    'box-shadow:0 2px 8px rgba(0,0,0,.25);display:block;';

  var line1 = document.createElement('div');
  line1.textContent = 'Это старая версия сайта! Она больше не обновляется!';
  line1.style.cssText = 'font-weight:700;font-size:15px;';

  var line2 = document.createElement('div');
  line2.textContent = 'Переходите на новую версию: более удобную и с новым контентом! \u2192';
  line2.style.cssText = 'font-size:14px;';

  var closeBtn = document.createElement('span');
  closeBtn.textContent = '\u00d7';
  closeBtn.style.cssText =
    'position:absolute;top:50%;right:12px;transform:translateY(-50%);' +
    'font-size:22px;line-height:1;cursor:pointer;color:#fff;' +
    'opacity:.8;padding:4px 8px;';
  closeBtn.addEventListener('mouseenter', function () { closeBtn.style.opacity = '1'; });
  closeBtn.addEventListener('mouseleave', function () { closeBtn.style.opacity = '.8'; });
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    banner.style.display = 'none';
    document.body.style.paddingTop = '0';
  });

  banner.appendChild(line1);
  banner.appendChild(line2);
  banner.appendChild(closeBtn);
  document.body.prepend(banner);

  function adjustPadding() {
    document.body.style.paddingTop = banner.offsetHeight + 'px';
  }

  adjustPadding();
  window.addEventListener('resize', adjustPadding);
})();
