/**
 * Updated by inm on 2018/6/5.
 */
var Tip = {};
Tip.install = (Vue, options) => {
  Vue.prototype.$tip = (tips) => {
    let TipTpl = Vue.extend({
      template: '<div class="wym-tip"><span>' + tips + '</span></div>'
    });
    let tpl = new TipTpl().$mount().$el;
    document.body.appendChild(tpl);
    setTimeout(() => {
      document.body.removeChild(tpl);
    }, 1500);
  }
}
module.exports = Tip;