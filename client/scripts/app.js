var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


    // Poll for new messages every 3 sec
    // setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    console.log('enter fetch function');
    Parse.readAll((data) => {
      
      // Don't bother to update if we have no messages
      if (!JSON.parse(data).results || !JSON.parse(data).results.length) { return; }

      Rooms.update(JSON.parse(data).results, RoomsView.render);
      Messages.update(JSON.parse(data).results, MessagesView.render);
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
