jQuery(document).ready(function() {
  /*
  * setup sidr menu
  */
  jQuery('#simple-menu').sidr();
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
        debugger;
       //jQuery.sidr('open', 'sidr');
       var status = jQuery.sidr('status', 'sidr');       
       if(status.opened == false)
       {
        jQuery.sidr('open', 'sidr');
       }
       else
       {
           jQuery.sidr('close', 'sidr');           
       }
       
       return false;
   });
   /*
    * Make it so swipe left closes the menu.
    */
   jQuery('#sidr-swipe-fix').swipe( {
        //Single swipe handler for left swipes
        swipeLeft: function () {
            var status = jQuery.sidr('status', 'sidr');       
            if(status.opened != false)
            {
                jQuery.sidr('close', 'sidr');
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 45
    });
});