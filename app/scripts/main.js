// Get a reference to the root of the chat data.
var fbName = 'https://webgeeks-secret-santa.firebaseio.com/';
var messagesRef = new Firebase(fbName);

$('#cSubmit').on('click', function (e) {
  e.preventDefault();
  var oname = $('#oname').val();
  var email = $('#email').val();
  var ename = $('#ename').val();
  var date = $('#date').val();
  var maxAmount = $('#max-amount').val();
  var edescription = $('#edescription').val();
  messagesRef = new Firebase(fbName+oname+"/details");
  messagesRef.set({name:name, email:email, ename:ename, date:date, maxAmount:maxAmount, edescription:edescription});

  // When the user presses enter on the message input, write the message to firebase.
  $('#fSubmit').on('click',function (e) {
      'use strict';
      var name = $('#nameInput').val();

      messagesRef = new Firebase(fbName+oname+"/users/"+name);
      messagesRef.set({name:name});

  });

});


// Add a callback that is triggered for each chat message.
messagesRef.limit(10).on('child_added', function (snapshot) {
    'use strict';
    var message = snapshot.val();
    $('<div/>').text(message.name).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
});

/*
import json

from firebase import firebase
from firebase import jsonutil

firebase = firebase.FirebaseApplication('https://xxx.firebaseio.com', authentication=None)

# print firebase.get('/users', None, {'print': 'pretty'})
data = {'name': 'John Doe', 'text': 'Jane Doe'}
result = firebase.post('/chat', data)
*/
