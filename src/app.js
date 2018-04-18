const openStream = require('./openStream');

const $ = require('jquery');

//openStream();

const Peer = require('simple-peer');

const p = new Peer({ initiator: location.hash === '#1', trickle: false});

p.on('signal', token => {
  $('#txtMySignal').val(JSON.stringify(token));
});

p.on('connect', () => console.log('connected'));

$('#btnConnect').click(() => {
  const friendSignal = JSON.parse($('#txtFriendSignal').val());
  p.signal(friendSignal);
})

console.log('Hello World');
