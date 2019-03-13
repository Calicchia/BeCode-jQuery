$(function() {
  $('#target').click(function() {
    $('#output').html(function(i, val) {
      return val * 1 + 1;
    });
  });
});

$(function() {
  $('#target2').click(function() {
    $('#output').html(function(i, val) {
      return val * 1 - 1;
    });
  });
});
