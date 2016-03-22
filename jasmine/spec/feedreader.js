"use strict";

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Feed URLs', function() {
            allFeeds.forEach(function (feed) {
                // Ensure URL is defined
                expect(feed.url).toBeDefined();

                // Ensure URLs are not empty
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('Feed Names', function() {
            allFeeds.forEach(function (feed) {
                // Ensure URL is defined
                expect(feed.name).toBeDefined();

                // Ensure URLs are not empty
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        /* When the menu is invisible, the menu-hidden class is applied to the <body> tag.
         * Therefore, we can test whether or not the menu-hidden class is active on body.
         * The body tag is declared in our body variable, and we expect the class to be applied when the page loads (default).
        */

        var body = $('body');

        it('Is the menu hidden by default?', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });


        /* When the page loads the test will trigger the menuIcon and test if menu-hidden class has been removed from the the body tag.
         * It will then trigger the menuIcon again to see if the class has been re-applied.
        */

        var menuIcon = $('.menu-icon-link');

        it('Does the menu show when clicked, then hide when clicked again?', function() {
            // Click the menu icon (class should be removed)
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);

            // Click the menu icon again (class should be applied)
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Search for each article that has been added to the <div class="feed">.
         * Since the .entry class is added to each article, we can search for each instance of the class inside the feed. 
         * As long as .entry appears at least once, the test will pass.
        */

        var feed = $('.feed')

        it('At least one element is inside the feed container', function(done) {
            var entries = feed.find('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });

    });


    describe('New Feed Selection', function() { 

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());

// For
var i;
for(i = 0; i < array.length; i++) { }

// ForEach
array.forEach(function (i) { });
