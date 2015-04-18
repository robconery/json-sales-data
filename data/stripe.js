var moment = require("moment");

exports.goodResponse = function(args){
  args || (args = {});
  var id =args.id || "ch_XXXXXXXX";
  var chargeDate = args.chargeDate ? args.chargeDate.unix() : moment().unix();
  var amount = 100 || parseInt(args.amount * 100) //$1.00 or whatever was passed in
  var response = {
    "id": id,
    "object": "charge",
    "created": chargeDate,
    "livemode": false,
    "paid": true,
    "status": "succeeded",
    "amount": amount,
    "currency": "usd",
    "refunded": false,
    "source": {
      "id": "card_XYZZ",
      "object": "card",
      "last4": "4242",
      "brand": "Visa",
      "funding": "credit",
      "exp_month": 8,
      "exp_year": 2019,
      "country": "US",
      "name": args.name,
      "cvc_check": "pass",
      "customer": null
    },
    "captured": true,
    "balance_transaction": "txn_ZZZZZ",
    "failure_message": null,
    "failure_code": null,
    "amount_refunded": 0,
    "customer": null,
    "invoice": null,
    "description": "Charge for " + args.name,
    "dispute": null,
    "statement_descriptor": null,
    "fraud_details": {
    },
    "receipt_email": null,
    "receipt_number": null,
    "shipping": null,
    "application_fee": null,
    "refunds": {
      "object": "list",
      "total_count": 0,
      "has_more": false,
      "url": "/v1/charges/XYZ/refunds",
      "data": [

      ]
    }
  };
  return response;
}
