exports.migrate = function() {

  persistence.defineMigration(1, {
    up: function() {
      this.createTable('Task', function(t){
        t.text('name');
        t.text('description');
        t.boolean('done');
      });
    },
    down: function() {
      this.dropTable('Task')
    }
  });
  
  console.log(persistence.migrations)

  persistence.migrations.init()

  persistence.migrate(function(){})

}
