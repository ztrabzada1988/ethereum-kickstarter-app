'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xf10b5900827C98Fe1bdd3c3271293f4e19f784c9' // this is our deployed contract address of our Campaign Factory
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUIsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsS0FBQSxBQUFLLE1BQU0sMEJBREUsQUFDYixBQUEyQixZQURkLEFBRWIsNkNBRkosQUFBaUIsQUFFZ0MsQUFHakQ7QUFMaUI7O2tCQUtqQixBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3p0cmFiemFkYTE5ODgvRGVza3RvcC91ZGVteS9jcnlwdG8va2lja3N0YXJ0In0=