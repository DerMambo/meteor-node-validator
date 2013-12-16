Package.describe({
  summary: "Meteor wrapper for npm node-validator"
});

Package.on_use(function(api){
  var both = ['client', 'server'];

  api.add_files(".npm/package/node_modules/validator/validator.js", both);
});