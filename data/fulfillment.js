
module.exports = function(args){
  return {
    created_at: args.created_at,
    downloaded : 0,
    sale_id: args.sale_id,
    status: "pending",
    shipping_company: "UPS",
    email: args.email,
    destination: args.destination,
    tracking_number: "XXXXXXXX",
    tracking_url: "http://www.example.com/orders/" + args.sale_id,
    items: [],
    notifications : [],
    notes : []
  }
}
