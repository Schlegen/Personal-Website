$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat nicolas-schlegel<br/>" +
      "><span class='caret'>$</span> job: Research engineer <br/> ^100" +
      "><span class='caret'>$</span> institution: RFF-CMCC European Institute on Economics and the Environment <br/> ^100" +
      "><span class='caret'>$</span> skills: Data Science, Optimization, Software Development, Economics <br/> ^100" +
      "><span class='caret'>$</span> hobbies: Rugby, Climbing, Swimming, Cooking, Tinkering<br/> ^300" +
      "><span class='caret'>$</span> now: Probably eating... <br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.002,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
