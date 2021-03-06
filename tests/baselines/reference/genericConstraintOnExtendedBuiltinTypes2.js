//// [genericConstraintOnExtendedBuiltinTypes2.ts]
module EndGate {
    export interface ICloneable {
        Clone(): any;
    }
}

interface Number extends EndGate.ICloneable { }

module EndGate.Tweening {
    export class Tween<T extends ICloneable>{
        private _from: T;

        constructor(from: T) {
            this._from = from.Clone();
        }
    }
}

module EndGate.Tweening {
    export class NumberTween extends Tween<Number>{
        constructor(from: number) {
            super(from);
        }
    }
}

//// [genericConstraintOnExtendedBuiltinTypes2.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EndGate;
(function (EndGate) {
    var Tweening;
    (function (Tweening) {
        var Tween = (function () {
            function Tween(from) {
                this._from = from.Clone();
            }
            return Tween;
        })();
        Tweening.Tween = Tween;
    })(Tweening = EndGate.Tweening || (EndGate.Tweening = {}));
})(EndGate || (EndGate = {}));
var EndGate;
(function (EndGate) {
    var Tweening;
    (function (Tweening) {
        var NumberTween = (function (_super) {
            __extends(NumberTween, _super);
            function NumberTween(from) {
                _super.call(this, from);
            }
            return NumberTween;
        })(Tweening.Tween);
        Tweening.NumberTween = NumberTween;
    })(Tweening = EndGate.Tweening || (EndGate.Tweening = {}));
})(EndGate || (EndGate = {}));
