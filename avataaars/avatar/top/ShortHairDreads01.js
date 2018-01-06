"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var ShortHairDreads01 = /** @class */ (function (_super) {
    __extends(ShortHairDreads01, _super);
    function ShortHairDreads01() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        _this.path3 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    ShortHairDreads01.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z', id: path2 }),
                React.createElement("path", { d: 'M185.831676,73.928751 C187.588868,74.9173665 188.980206,84.8279256 189.047535,88.6176558 C189.08965,90.9562115 189.127358,99.8740101 186.654049,99.1031293 C185.901013,98.868423 184.751682,94.1472484 184.58821,91.3840965 C184.424737,88.6209446 182.855069,79.2200034 180.446757,74.8947261 C179.896491,73.9063366 178.320781,72.1708928 179.001547,71.3348066 C179.846064,70.2980597 180.666198,70.8995898 181.697184,71.3146953 C182.8124,71.7641482 185.6344,73.8180261 185.831676,73.928751 Z M186.636742,70.9565876 C185.890663,71.9188016 180.795829,69.217693 178.671174,68.0439722 C160.825581,58.1840558 157.361562,55.0486831 129.245707,55.4578453 C101.129853,55.8670074 81.8674779,69.0400225 80.7839818,70.3874406 C80.0301584,71.3248831 79.0677773,73.8279219 78.2764086,80.8005402 C77.48504,87.7731584 78.4952061,100.277789 75.6304859,100.262618 C73.1915094,100.249702 72.6608912,76.4770353 73.7137309,67.0463924 C73.8753757,65.5984852 74.4983655,63.0083957 74.0474223,61.7058802 C73.6532986,60.5682485 71.7253768,60.5705662 72.0331217,58.6750651 C72.3829065,56.5173393 74.5584694,57.5890837 75.5060085,56.5574014 C77.3005851,54.602966 74.5321945,54.1404306 74.0730403,52.4306721 C73.3905494,49.8892108 75.3628102,49.2336489 77.1396512,48.4310821 C79.1060001,47.5437559 78.8504766,48.3231462 80.4463492,46.5849138 C78.3147968,45.0224912 77.543628,42.8939014 80.4624425,41.7519655 C81.7019616,41.2669159 84.9268789,41.9089031 85.8980654,41.1801698 C86.1512899,40.9901231 86.251463,39.9008308 86.4074703,39.6780059 C87.9583471,37.4593592 87.5757186,35.8532324 87.4183976,33.3624282 C87.2889936,31.3242265 87.3064008,29.4532263 89.7466834,29.2496048 C91.3750712,29.1138571 92.6993269,30.4441843 94.1582415,30.835866 C95.7767762,31.2705896 95.1688403,31.5877757 96.4369334,30.7150174 C98.6630755,29.1817309 97.1479982,26.1942888 98.913344,24.4120212 C101.335891,21.9662454 102.923881,25.5513084 104.868882,25.8218105 C109.09126,26.4101607 107.736132,22.1218586 110.235861,20.5504965 C113.223647,18.6738677 113.512672,22.8012592 115.378847,22.948264 C116.996068,23.0750722 119.907657,19.9545311 121.317306,19.3731338 C125.499944,17.6471518 127.572378,22.5039387 131.554013,21.8844657 C134.443268,21.434843 135.223305,21.067662 137.830761,22.7115333 C140.361692,24.3070651 140.96306,23.1664535 143.828996,23.1436082 C145.853806,23.128378 147.093982,24.8202575 148.787729,24.9967295 C149.632467,25.085131 150.441078,24.2050888 151.347562,24.2603811 C154.58496,24.4567186 154.789576,28.6430444 157.361562,29.7955753 C159.711524,30.8487786 162.474332,29.3691289 164.806559,29.0953159 C170.497048,28.4275036 166.60015,33.7425217 166.760755,36.914713 C168.994451,37.4358517 171.261648,35.3509661 173.485163,35.7347015 C176.986623,36.3392753 175.664995,39.9680424 174.853429,42.4144804 C177.279589,42.3707762 183.612828,39.6776748 185.184725,43.1220237 C185.995306,44.8980006 184.106797,47.2689496 184.13767,49.0743937 C184.181023,51.615855 186.048513,53.7186196 186.709327,56.1240021 C187.601032,59.3710203 188.871834,68.0740038 186.636742,70.9565876 Z', id: path3 })),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Short-Hair/Dreads-01', mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement(facialHair_1.default, null),
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(1.000000, 0.000000)' },
                        React.createElement("mask", { id: mask1, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path3 })),
                        React.createElement("use", { id: 'Dreads-With-Cut', fill: '#2E3257', xlinkHref: '#' + path3 }),
                        React.createElement(HairColor_1.default, { maskID: mask1 })),
                    this.props.children))));
    };
    ShortHairDreads01.optionValue = 'ShortHairDreads01';
    return ShortHairDreads01;
}(React.Component));
exports.default = ShortHairDreads01;