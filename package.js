Package.describe({
  summary: "Meteor wrapper for npm node-validator"
});

Package.on_use(function(api){
  var both = ['client', 'server'];

  api.use('coffeescript', both);

  if(api.export){
    api.export('MyValidator');
  }

  api.add_files("my_validator.coffee", both);
  api.add_files(".npm/package/node_modules/validator/validator.js", both);
});