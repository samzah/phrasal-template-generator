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
  document.write('slurping on an ass ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');
};

var writeAstoryC = function (colour, creature, adj, past) {
  document.write('shitting in a box ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');
};


writeAstoryA(colour, creature, adj, past);
writeAstoryB(colour, creature, adj, past);
writeAstoryC(colour, creature, adj, past);



