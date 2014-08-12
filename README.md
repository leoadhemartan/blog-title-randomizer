Blog Title Randomizer
====

A simple JavaScript File that prints out a new Blog Title every page load.

The titles are stored in an Array. This file currently holds 44 effective entries that were generated from an anagram engine. The randomizer script randomly selects entries from Array count[1] to [44]. The entry on Array count[0] is never called.

This script has been tested on WordPress, Ghost.org and NibbleBlog. However, it would work on any CMS that allows for JavaScript.

For WordPress: 
When using the TwentyTwelve theme, look for this line in the header.php file:

    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

and change it to:

    <h1 class="site-title"><a id="changeTitle" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"></a></h1>

