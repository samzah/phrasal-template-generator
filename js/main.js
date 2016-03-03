var popup = alert('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj = prompt('An adjective (beautiful, super, etc.)');
var past = prompt('A past tense verb (ran, burped, etc.)');
var story = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning');

var writeAstory = function (colour, creature, adj, past) {
  document.write('After snacking on' + adj + ' treats, the ' + colour + 'bellied' + creature + past + 'for hours');
};



