'use strict';

/** @namespace browser */

/** 
 * Add custom command to client/browser instance. Read more about `addCommand` [here](/guide/usage/customcommands.html).
 * 
 * @param {String}   commandName   name of your custom command
 * @param {Function} customMethod  your custom method
 * @param {Boolean}  overwrite     if set to `true` you can overwrite existing commands
 * @type utility
 */
browser.addCommand = (commandName, customMethod, overwrite) => {};


/** 
 * Add a value to an object found by given selector. You can also use unicode
 * characters like Left arrow or Back space. WebdriverIO will take care of
 * translating them into unicode characters. You’ll find all supported characters
 * [here](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-character-types).
 * To do that, the value has to correspond to a key from the table.
 * 
 * @param {String}        selector  Input element
 * @param {String|Number} values    value to be added
 * @uses protocol/elements, protocol/elementIdValue
 * @type action
 */
browser.addValue = (selector, values) => {};


/** 
 * Call an own function within running chain. 
 * It is mostly used to end an async BDD/TDD block
 * (see example below) when running in standalone mode. 
 * Using the wdio test runner this command
 * is obsolete and should not be used.
 * 
 * @param {Function} callback  function to be called
 * @type utility
 */
browser.call = (callback) => {};


/** 
 * Given a selector corresponding to an `<input type=file>`, will upload the local
 * file to the browser machine and fill the form accordingly. 
 * It does not submit the form for you.
 * 
 * @param {String} selector   input element
 * @param {String} localPath  local path to file to be uploaded
 * @uses utility/uploadFile, action/addValue
 * @type utility
 */
browser.chooseFile = (selector, localPath) => {};


/** 
 * Clear a `<textarea>` or text `<input>` element’s value.
 * 
 * @param {String} selector input element
 * @uses protocol/elements, protocol/elementIdClear
 * @type action
 */
browser.clearElement = (selector) => {};


/** 
 * Click on an element based on given selector.
 * 
 * @param {String} selector  element to click on. 
 *                           If it matches with more than one DOM-element 
 *                           it automatically clicks on the first element
 * @uses protocol/element, protocol/elementIdClick
 * @type action
 */
browser.click = (selector) => {};


/** 
 * Close current window (and focus on an other window). 
 * If no window handle is given it automatically switches back to the first handle.
 * 
 * @param {String=} windowHandle new window to focus on
 * @uses protocol/window, window/switchTab
 * @type window
 */
browser.close = (windowHandle) => {};


/** 
 * This command helps you to debug your integration tests. 
 * It stops the running queue and gives
 * you time to jump into the browser and check the state of your application 
 * (e.g. using the dev tools). Once you are done go to the command line and press Enter.
 *
 * Make sure you increase the timeout property of your test framework your are using 
 * (e.g. Mocha or Jasmine) in order to prevent the continuation due to a test timeout.
 * 
 * @type utility
 */
browser.debug = () => {};


/** 
 * Delete cookies visible to the current page. 
 * By providing a cookie name it just removes the single cookie.
 * 
 * @param {String=} name  name of cookie to be deleted
 * @uses protocol/cookie
 * @type cookie
 */
browser.deleteCookie = (name) => {};


/** 
 * Double-click on an element based on given selector.
 * 
 * @param {String} selector  element to double click on. 
 *                           If it matches with more than on DOM-element 
 *                           it automatically clicks on the first element
 * @uses protocol/element, protocol/moveTo, protocol/doDoubleClick, protocol/touchDoubleClick
 * @type action
 */
browser.doubleClick = (selector) => {};


/** 
 * Drag an item to a destination element.
 *
 * @param {String} sourceElem       source selector
 * @param {String} destinationElem  destination selector
 * @uses action/moveToObject, protocol/buttonDown, protocol/buttonUp, property/getLocation, protocol/touchDown, protocol/touchMove, protocol/touchUp
 * @type action
 */
browser.dragAndDrop = (sourceElem, destinationElem) => {};


/** 
 * End the session and close browser.
 * 
 * @uses protocol/session
 * @type utility
 */
browser.end = () => {};


/** 
* End all selenium server sessions at once.
 *
 * @uses protocol/sessions, protocol/session
 * @type utility
  */
browser.endAll = () => {};


/** 
 * Get an attribute from an DOM-element based on the selector and attribute name.
 * Returns a list of attribute values if selector matches multiple elements.
 * 
 * @param {String} selector         element with requested attribute
 * @param {String} attributeName    requested attribute
 * @returns {String|String[]|null}  The value of the attribute(s), or null if it is not set on the element.
 * @uses protocol/elements, protocol/elementIdAttribute
 * @type property
 */
browser.getAttribute = (selector, attributeName) => {};


/** 
 * Returns a list of previous called commands + their arguments.
 * 
 * @returns {Object[]} list of recent called commands + their arguments
 * @type utility
 */
browser.getCommandHistory = () => {};


/** 
 * Retrieve a cookie visible to the current page. 
 * You can query a specific cookie by providing the cookie name or
 * retrieve all.
 * 
 * @param {String=} name name of requested cookie
 * @returns {Object|null} requested cookie if existing
 * @uses protocol/cookie
 * @type cookie
 */
browser.getCookie = (name) => {};


/** 
 * Get a css property from a DOM-element selected by given selector. The return value
 * is formatted to be testable. Colors gets parsed via [rgb2hex](https://www.npmjs.org/package/rgb2hex)
 * and all other properties gets parsed via [css-value](https://www.npmjs.org/package/css-value).
 *
 * Note that shorthand CSS properties (e.g. background, font, border, margin, padding, list-style, outline,
 * pause, cue) are not returned, in accordance with the DOM CSS2 specification- you should directly access
 * the longhand properties (e.g. background-color) to access the desired values.
 * 
 * @param {String} selector     element with requested style attribute
 * @param {String} cssProperty  css property name
 * @uses protocol/elements, protocol/elementIdCssProperty
 * @type property
 */
browser.getCssProperty = (selector, cssProperty) => {};


/** 
 * Retrieve the current window handle.
 * 
 * @returns {String} the window handle URL of the current focused window
 * @uses protocol/windowHandle
 * @type window
 */
browser.getCurrentTabId = () => {};


/** 
 * Get the width and height for an DOM-element based given selector.
 * 
 * @param   {String} selector  element with requested size
 * @returns {Object}           requested element size (`{width:number, height:number}`)
 *
 * @uses protocol/elements, protocol/elementIdSize
 * @type property
 */
browser.getElementSize = (selector) => {};


/** 
 * Get the current geolocation.
 *
 * @returns {Object} the current geo location (`{latitude: number, longitude: number, altitude: number}`)
 * @uses protocol/location
 * @type mobile
 */
browser.getGeoLocation = () => {};


/** 
 * Get the details of the Selenium Grid node running a session
 * 
 * @uses protocol/gridTestSession, protocol/gridProxyDetails
 * @type grid
 */
browser.getGridNodeDetails = () => {};


/** 
 * Get source code of specified DOM element by selector.
 * 
 * @param {String}   selector            element to get the current DOM structure from
 * @param {Boolean=} includeSelectorTag  if true it includes the selector element tag (default: true)
 *
 * @uses action/selectorExecute
 * @type property
 */
browser.getHTML = (selector, includeSelectorTag) => {};


/** 
 * Determine an element’s location on the page. The point (0, 0) refers to
 * the upper-left corner of the page.
 * 
 * @param {String} selector    element with requested position offset
 * @returns {Object|Object[]}  The X and Y coordinates for the element on the page (`{x:number, y:number}`)
 * @uses protocol/elements, protocol/elementIdLocation
 * @type property
 */
browser.getLocation = (selector) => {};


/** 
 * Determine an element’s location on the screen once it has been scrolled into view.
 * 
 * @param {String} selector    element with requested position offset
 * @returns {Object|Object[]}  The X and Y coordinates for the element on the page (`{x:number, y:number}`)
 * @uses protocol/elements, protocol/elementIdLocationInView
 * @type property
 */
browser.getLocationInView = (selector) => {};


/** 
 * Get the current browser orientation.
 * 
 * @returns {String} device orientation (`landscape/portrait`)
 * @uses protocol/orientation
 * @for android, ios
 * @type mobile
 */
browser.getOrientation = () => {};


/** 
 * Get source code of the page.
 * 
 * @returns {String} source code of current website
 * @uses protocol/source
 * @type property
 */
browser.getSource = () => {};


/** 
 * Retrieve a list of all window handles available in the session.
 * 
 * @returns {String[]} a list of window handles
 * @uses protocol/windowHandles
 * @type window
 */
browser.getTabIds = () => {};


/** 
 * Get tag name of a DOM-element found by given selector.
 * 
 * @param   {String}           selector   element with requested tag name
 * @returns {String|String[]}             the element's tag name, as a lowercase string
 *
 * @uses protocol/elements, protocol/elementIdName
 * @type property
 */
browser.getTagName = (selector) => {};


/** 
 * Get the text content from a DOM-element found by given selector. Make sure the element
 * you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
 * otherwise you will get an empty string as return value. If the element is disabled or not
 * visible and you still want to receive the text content use [getHTML](http://webdriver.io/api/property/getHTML.html) as a workaround.
 * 
 * @param   {String}           selector   element with requested text
 * @returns {String|String[]}             content of selected element (all HTML tags are removed)
 *
 * @uses protocol/elements, protocol/elementIdText
 * @type property
 */
browser.getText = (selector) => {};


/** 
 * Get the title of current opened website.
 * 
 * @returns {String} current page title
 * @uses protocol/title
 * @type property
 */
browser.getTitle = () => {};


/** 
 * Get the url of current opened website.
 * 
 * @returns {String} current page url
 * @uses protocol/url
 * @type property
 */
browser.getUrl = () => {};


/** 
 * Get the value of a `<textarea>` or text `<input>` found by given selector.
 * 
 * @param   {String} selector  input or textarea element
 * @returns {String}           requested input value
 *
 * @uses protocol/elements, protocol/elementIdAttribute
 * @type property
 */
browser.getValue = (selector) => {};


/** 
 * Get viewport size of the current browser window.
 * 
 * @param {String} property  if "width" or "height" is set it returns only that property
 * @returns {Object}  viewport width and height of the browser
 * @uses protocol/execute
 * @type window
 */
browser.getViewportSize = (property) => {};


/** 
 * Long press on an element using finger motion events. This command works only in a
 * mobile context.
 *
 * @param {String} selector element to hold on
 * @uses protocol/element, protocol/touchLongClick
 * @type mobile
 */
browser.hold = (commandName, customMethod, overwrite) => {};


/** 
 * Return true or false if the selected DOM-element found by given selector is enabled.
 * 
 * @param   {String}             selector  DOM-element
 * @returns {Boolean|Boolean[]}            true if element(s)* (is|are) enabled
 * @uses protocol/elements, protocol/elementIdEnabled
 * @type state
 */
browser.isEnabled = (selector) => {};


/** 
 * Returns true if at least one element is existing by given selector
 * 
 * @param   {String}             selector  DOM-element
 * @returns {Boolean|Boolean[]}            true if element(s)* [is|are] existing
 * @uses protocol/elements
 * @type state
 */
browser.isExisting = (selector) => {};


/** 
 * Return true or false if an `<option>` element, or an `<input>` element of type
 * checkbox or radio is currently selected found by given selector.
 * 
 * @param   {String}             selector  option element or input of type checkbox or radio
 * @returns {Boolean|Boolean[]}            true if element is selected
 *
 * @uses protocol/elements, protocol/elementIdSelected
 * @type state
 */
browser.isSelected = (selector) => {};


/** 
 * Return true if the selected DOM-element found by given selector is visible. 
 * Returns an array if multiple DOM-elements are found for the given selector.
 * 
 * @param   {String}             selector  DOM-element
 * @returns {Boolean|Boolean[]}            true if element(s)* [is|are] visible
 * @uses protocol/elements, protocol/elementIdDisplayed
 * @type state
 */
browser.isVisible = (selector) => {};


/** 
 * Return true if the selected DOM-element found by given selector is visible 
 * and within the viewport.
 * 
 * @param   {String}             selector  DOM-element
 * @returns {Boolean|Boolean[]}            true if element(s)* [is|are] visible
 * @uses protocol/selectorExecute, protocol/timeoutsAsyncScript
 * @type state
 */
browser.isVisibleWithinViewport = (selector) => {};
