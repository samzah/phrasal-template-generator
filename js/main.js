var popup = alert('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj = prompt('An adjective (beautiful, super, etc.)');
var past = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning');

var writeAstoryA = function (colour, creature, adj, past) {
  document.write('After snacking on ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');
};

var writeAstoryB = function (colour, creature, adj, past) {
  document.write('Ameilia ' + past + ' through the ' + adj + ' ' + colour + ' nebula escaping the space ' + creature +'.');
};

var writeAstoryC = function (colour, creature, adj, past) {
  document.write('shitting in a box ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');
};


if (story === 'a') {
  writeAstoryA(colour, creature, adj, past);

}

if (story === 'b') {
  writeAstoryB(colour, creature, adj, past);

}

if (story === 'c') {

  writeAstoryC(colour, creature, adj, past);

}

