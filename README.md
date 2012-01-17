Shopify Scripts
===========

In this repo, you'll find some of the scripts we use on our [ecommerce site](http://www.pappysquilting.com).


ProductDetailsLinker
------------------------------

This is a simple block of JavaScript that we use on our product page to automatically generate links inside of the product's description to other collections on our site.

If you use this js code, be sure to modify it to match your own site's URL. The following two lines need to be changed:

	$(this).html(singleItems[i] + ': ' + '<a href="http://www.YOURWEBSITE.com/collections/' + replaceAll(url, " ", "-") + '">' + val + '</a>');

	newHtml += '<a href="http://www.YOURWEBSITE.com/collections/' + replaceAll(url, " ", "-") + '">' + val + '</a>';

Furthermore, note the function `sanitize(text)` where I explicitely remove characters that Shopify trims from collection names. You may need to add your own characters to this list as I only added characters as I found them.


SimpleCalculator
-------------------------

The shipping costs on our [ecommerce site](http://www.pappysquilting.com) are really straightforward. The shipping prices are just based on the total price of the customer's purchase. For example, if your purchase is to be shipped within the U.S., and it's between $25 and $50, your shipping price is always $7.50. If your purchase is between $50 and $75, the shipping price is always $10. Thus, this shipping calculator simply checks to see where you're shipping the product to and what price range your total falls into and spits out a predefined price. Very simple.

On our site, we drop this shipping calculator onto the checkout page. You would need to do make some adjustments to the given js to get this to properly work on non-checkout pages.


ShopifyGreaseMonkey
---------------------------------

ShopfiyGreaseMonkey is (obviously) a grease monkey script that uses jQuery to automatically hide the Smart Collections that appear at the top of the collections page. Both `Show` and `Hide` links are available if you'd like to interact with Smart Collections. However, on our site, we have hundreds of standard collections and it becomes cumbersome paging through those collections with the Smart Collections always coming up first.
