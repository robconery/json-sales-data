module.exports = function(){
  return {
    id : "GUID",
    source : "Web",
    completed_at : "",
    started_at : "",
    status : "complete",
    referral: {
      site : "",
      identifier : "",
      arrived_at : "",
      landing_page : ""
    },
    customer : {
      name : "",
      email : "",
      member_id: null,
      country : "",
      lat : "",
      lon : "",
      ip_address : ""
    },
    payment : {
      amount : 0,
      authorization : "",
      gateway : "",
      last_four : "4242"
    },
    processor_response : {},
    billing_address : {},
    shipping_address : {},
    discounts : [],
    items : [],
    notes : []
  }
};
