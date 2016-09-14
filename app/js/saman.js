require('./script.js')

var msg = "hejs";

console.log(msg);

(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this);