<?php
/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
?>

<div id="sidr">
    <div class='col-md-12 oc_sidr_menu_header'>
        <?php
            echo $header_html;
        ?>
    </div>
 <div class='col-md-12 oc_sidr_menu_content'> 
     <div class='swipe-magic' style="z-index: 100000;">
    <ul>
    <?php
    foreach(reset($menus) as $menu)
    {
        if($menu != null)
        {
            $menu_data = menu_tree_page_data($menu);
            /*
             * Loop over all the menu elements in the menu
             */
            foreach($menu_data as $menu_elem) {
                $links = $menu_elem['link'];
                if($links['hidden'])
                {
                    continue;
                }
                $active_trail = $links['in_active_trail'] ? 'active' : '';
                if(empty($menu_elem['below']))
                {
                    echo "<li class='".$active_trail."'><a href=".url($links['link_path']).">".$links['link_title']."</a></li>";
                }
                else
                {
                    /*
                     * There are child elements create a "dropdown"
                     */

                    echo "<li class='oc_sidr_parent_menu ".$active_trail." '><a class='oc_sidr_parent_menu_btn' href=".url($links['link_path']).">".$links['link_title']."</a>";
                    $children = $menu_elem['below'];
                    echo '<ul class="oc_sidr_child_menu" style="display:none;">';
                    foreach( $children as $child_menu)
                    {
                        //[in_active_trail]	boolean	1	
                        $child_link = $child_menu['link'];
                        if($child_link['hidden'])
                        {
                            continue;
                        }
                        $active_trail = $child_link['in_active_trail'] ? 'active' : '';
                        echo "<li class='".$active_trail."'><a href=".url($child_link['link_path']).">".$child_link['link_title']."</a></li>";
                    }
                    echo '</ul>';
                    echo '</li>';
                }

            }
        }
    }
    ?>

    </ul>
         </div>
</div>
    <div class='col-md-12 oc_sidr_menu_footer'>
<?php
echo $footer_html;
?>
    </div>
</div>
</div>
