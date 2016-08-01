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
})
})
