(function($) {
  $.fn.trunc = function(charLimit) {
    if (!$.isNumeric(charLimit) || charLimit < 1 || charLimit % 1 !== 0) {
      throw new Error('Argument must be positive integer number');
    }

    return this.each(() => {
      let strText = this.text(),
          hellip = $('<span>&hellip;</span>');

      hellip.on('click', () => {
          this.fadeOut('fast', () => {
            this.text(strText).fadeIn('fast');
          });
      });

      if (strText.length > charLimit) {
        this.text(strText.slice(0, charLimit - 1)).append(hellip);
      }
    });
  };
}(jQuery));