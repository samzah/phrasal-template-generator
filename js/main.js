var popup = alert('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj = prompt('An adjective (beautiful, super, etc.)');
var past = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning');

var writeAstoryA = function () {
  document.write('After snacking on ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');
};

var writeAstoryB = function () {
  document.write('Ameilia ' + past + ' through the ' + adj + ' ' + colour + ' nebula escaping the space ' + creature + '.');
};

var writeAstoryC = function () {
  document.write('Jackson chose his ' + adj + ' ' + colour + ' ' + creature + ' card and ' + past + ' it to the table knowing he won.');
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
