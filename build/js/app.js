(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require("./../js/entry.js").entryModule;

$(document).ready(function(){
  $(".journal-entry").submit(function(event){
  event.preventDefault();
  var title = $("#title").val();
  var body = $("#body").val();
  var newEntry =new Entry(title, body);
  $(".journal-entry").hide();
  $(".description").append("<p>Title: " + newEntry.title + "</p><p>Entry: "+ newEntry.body + "</p>");
  $(".counters").append("<p>There are this many words: " + newEntry.wordCounter() + "</p><p>There are this many vowels: " + newEntry.vowelCounter() + "</p><p>There are this many consonants: " + newEntry.consonantCounter() + "</p>");
  $(".teaser").append(newEntry.teaser());
  });
});

},{"./../js/entry.js":1}]},{},[2]);
