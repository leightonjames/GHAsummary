(function($, window, document, undefined){
  var $cube;
  var $side;
  var $colorChanger;
  var $sizeChanger;
  var color; 
  var size;

  $(function(){
    $side = $('.side');
    $cube = $('.box');
    $colorChanger = $('.color-chager');
    $sizeChanger = $('.size-chager');
    size = $sizeChanger.val();
    color = $colorChanger.val();

    $cube.on('click', '.target', function(e){ 
      e.preventDefault();
      var $target = $(e.target);
      var $parent = $target.parent();
      var $closestSide = $target.closest('.side');
      var closedLashes = 0; 

      $parent.toggleClass('folded');

      if ($parent.is('.latch')) {
        closedLashes = $('.latch.folded').length;
        $closestSide.css({
          zIndex: closedLashes
        });
      }
    });

    $cube.on('click', '.all', function(e){
      e.preventDefault();
      $side.addClass('folded');
    });

    $sizeChanger.on('change', function(){
      size = $(this).val();
      $cube.css({
        height: size,
        width: size,
        fontSize: size / 3 + 'px'
      });
    });

    $colorChanger.on('change', function(){
      color = $(this).val();
      $cube.css({
        background: color
      });
    });

  });
})(jQuery, window, document);