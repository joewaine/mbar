<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  // Base site URL
    'siteUrl' => 'http://mamnoon.webfactional.com/',
    // Environment-specific variables (see https://craftcms.com/docs/multi-environment-configs#environment-specific-variables)
    'environmentVariables' => array(
                'basePath' => $_SERVER['DOCUMENT_ROOT'].'/',
                'siteUrl'  => 'http://mamnoon.webfactional.com/',
    ),
    // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
    'enableCsrfProtection' => true,
    // Whether "index.php" should be visible in URLs (true, false, "auto")
    'omitScriptNameInUrls' => 'auto',
    // Control Panel trigger word
    'cpTrigger' => 'admin',
	// Dev Mode (see https://craftcms.com/support/dev-mode)
	'devMode' => false
);