function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCounter = function() {
  return this.body.split(" ").length;
};

Entry.prototype.vowelCounter = function() {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  body_array = this.body.split("");
  body_array.forEach(function(letter){
    vowels.forEach(function(vowel){
      if (letter === vowel) {
        count++;
      }
    });
  });
  return count;
};

Entry.prototype.consonantCounter = function() {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var count = 0;
  body_array = this.body.split("");
  body_array.forEach(function(letter){
    consonants.forEach(function(consonant){
      if (letter === consonant) {
        count++;
      }
    });
  });
  return  count;
};

Entry.prototype.teaser = function() {
  body_array = this.body.split(" ");
  teaser_array = [];
  if(body_array.length > 8){
    for (i=0; i < 8; i++) {
      teaser_array.push(body_array[i]);
    }
    teaser_array.push('...');
  } else {
    for (i=0; i < body_array.length; i++) {
      teaser_array.push(body_array[i]);
    }
  }
  return teaser_array.join(' ');
};
