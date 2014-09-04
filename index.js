/**
 * Implements polyfill for querySelectorAll to use in old IE browsers.
 *
 * Supports multiple / grouped selectors and the attribute selector with a "for"
 * attribute.
 *
 * @see http://www.codecouch.com/2012/05/adding-document-queryselectorall-support-to-ie-7/
 */
(function () {
  if (!window.document.querySelectorAll) {
    Object.querySelectorAll = function querySelectorAllPolyfill(r, c, i, j, a) {
      var d=document, 
          s=d.createStyleSheet();
      a = d.all;
      c = [];
      r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
      for (i = r.length; i--;) {
        s.addRule(r[i], 'k:v');
        for (j = a.length; j--;) {
          a[j].currentStyle.k && c.push(a[j]);
        }
        s.removeRule(0);
      }
      return c;
    };
  }
})();
