# JSON Fake Data Generator

This project generates a massive amount of JSON data which you can then pull into a database of your choice.

I use it for RethinkDB, but feel free to use it however you like.

## RethinkDB Instructions

To run this, open up index.js and change the `SaleCount` variable to be what you want. By default, it's 100,000 records. This will generate 100,000 sales and fullfillment records which you can play with to your heart's content.

To import this into a RethinkDB database, install the modules and then run the import command (assuming you have RethinkDB installed):

```
npm install
rethinkdb import -f drop/sales.json --table test.sales
rethinkdb import -f drop/fullfillments.json --table test.fullfillments
```

If the tables exist already, be sure to add `--force`

That's it, have fun.
