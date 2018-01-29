<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    'siteUrl' => 'http://mbarseattle.com/',
    'environmentVariables' => array(
		'basePath' => $_SERVER['DOCUMENT_ROOT'].'/',
		'siteUrl'  => 'http://mbarseattle.com/',
    ),
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => 'auto',
    'cpTrigger' => 'admin',
    'devMode' => false

);
