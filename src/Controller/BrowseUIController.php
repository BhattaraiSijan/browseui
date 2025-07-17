<?php

namespace Drupal\browseui\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for displaying the Custom EMIT Interface.
 */
class BrowseUIController extends ControllerBase {

  /**
   * Renders the page with the placeholder for the React application.
   *
   * @return array
   * A render array.
   */
  public function viewPage() {
    $build = [];

    $build['content'] = [
      '#markup' => '<div style="width: 100%;" class="browseui-interface">Loading Browse UI Interface...</div>',
      '#attached' => [
        'library' => [
          'browseui/main',
        ],
      ],
    ];

    return $build;
  }

}
