<?php
function oc_sidr_menu_admin($form, &$form_state) {
  $form = array();
  /*
   * Target url for the program js to pass the collected nid's too.
   */
  $form['oc_sidr_menu_selector'] = array(
        '#type' => 'textfield',
        '#title' => t('Jquery selector for binding the show/hide of sidr menu.'),
        '#default_value' => variable_get('oc_sidr_menu_selector',''),
        '#attributes' => array(
            'placeholder' => t('jQuery selector'),
        ),
    );
  /*
   * Allow users to select which menu/menus to display
   */
  $available_menus = menu_get_menus(TRUE);
  # the drupal checkboxes form field definition
    $form['oc_sidr_selected_menu'] = array(
      '#title' => t('Pizza Toppings'),
      '#type' => 'radios',
      '#default_value' => variable_get('oc_sidr_selected_menu',''),
      '#description' => t('Select the pizza toppings you would like.'),
      '#options' => $available_menus,
    );
  
  /*
   * Header Html
   */
  $form['oc_sidr_menu_header_html'] = array(
        '#type' => 'textarea',
        '#title' => t('Header html'),
        '#default_value' => variable_get('oc_sidr_menu_header_html','<i  class="fa fa-times fa-2x pull-right oc-sidr-close-btn" aria-hidden="true"></i>'),
        '#attributes' => array(
            'placeholder' => t('html'),
        ),
    );
  /*
   * Footer Html
   */
  $form['oc_sidr_menu_footer_html'] = array(
        '#type' => 'textarea',
        '#title' => t('Footer html'),
        '#default_value' => variable_get('oc_sidr_menu_footer_html',''),
        '#attributes' => array(
            'placeholder' => t('html'),
        ),
    );
  return system_settings_form($form);
}
