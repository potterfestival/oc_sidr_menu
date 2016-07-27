jQuery(document).ready(function() {
  /*
  * setup sidr menu
  */
  jQuery('#simple-menu').sidr({side: 'right'});
  /*
   * If a child has active trail , make sure it is not hidden on view.
   */
  var active_children_menu = jQuery('.oc_sidr_child_menu');
  jQuery.each(active_children_menu,function(index,child_menu){
      child_menu = jQuery(child_menu);
      var active_trail_child = child_menu.find('.active');
      if(active_trail_child.length != 0)
      {
          child_menu.css('display','block');
      }
  })
  /*
   * Handle dropdown menus
   */
  jQuery('.oc_sidr_parent_menu_btn').click(function(){
      var elem = jQuery(this).parent().find('.oc_sidr_child_menu');
      if(elem.css('display') == 'none')
      {
          elem.css('display','block');
      }
      else
      {
          elem.css('display','none');
      }
      return false;
  });
  /*
   * handle open/close of menu with custom selector.
   */
   //It works even if you just resize the window.
   jQuery('body').on('click',Drupal.settings.oc_sidr_menu.btn_selector,function(){
       //jQuery.sidr('open', 'sidr');

       var status = jQuery.sidr('status', 'sidr');       
       if(status.opened == false)
       {
            var swipeOptions =
            {
               swipeRight: oc_sidr_menu_close,
               threshold:20,
               allowPageScroll:"vertical",
               excludedElements: "label, button, input, select, textarea, .noSwipe"
            }
            jQuery("body").swipe( swipeOptions);
            jQuery('body').toggleClass('stop-scrolling');
            //Make close menu button available for bootstrap theme
            jQuery.sidr('open', 'sidr');
       }
       else
       {
           oc_sidr_menu_close();         
       }
       
       return false;
   });
   /*
    * Handle closing of menu via special btn.
    */
   jQuery('.oc-sidr-close-btn').click(function(){
        oc_sidr_menu_close();
        return false;
   })
});
    /*
    * Close oc_sidr_menu properly.
    */
    function oc_sidr_menu_close()
    {
        var status = jQuery.sidr('status', 'sidr');       
        if(status.opened != false)
        {
            
            jQuery("body").swipe("destroy");
            jQuery('body').toggleClass('stop-scrolling');
            jQuery.sidr('close', 'sidr');
        }
        return false;
    }
    