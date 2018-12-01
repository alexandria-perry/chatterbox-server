var Parse = {

  server: 'http://127.0.0.1:3000/classes/messages',

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    console.log('enter readAll function')
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'GET',
      data: {},
      contentType: 'application/json',
      success: successCB,
      // success: (data) => {console.log('inside readall', JSON.parse(data))},
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};