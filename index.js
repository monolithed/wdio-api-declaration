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
 * This wait command is your universal weapon if you want to wait on
 * something. It expects a condition and waits until that condition
 * is fulfilled with an truthy value.
 * A condition can be either a promise or a command that returns a promise.
 *
 * @param {Function|Promise} condition  condition to wait on
 * @param {Number=}          ms         timeout in ms (default: 500)
 * @param {Number=}          interval   interval between condition checks (default: 250)
 * @uses utility/pause
 * @type utility
 */
browser.hasFocus = (condition, ms, interval) => {};

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

/**
 * Apply left click on an element. If selector is not provided, click on the last
 * moved-to location.
 *
 * @param {String} selector element to click on
 * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
 * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
 * @uses protocol/element, protocol/buttonPress
 * @type action
 */
browser.leftClick = (selector, xoffset, yoffset) => {};

/**
 * Apply middle click on an element. If selector is not provided, click on the last
 * moved-to location.
 *
 * @param {String} selector element to click on
 * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
 * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
 * @uses protocol/element, protocol/buttonPress
 * @type action
 */
browser.middleClick = (selector, xoffset, yoffset) => {};

/**
 * Move the mouse by an offset of the specificed element.
 * If an element is provided but no offset, the mouse will be moved to the center of the element.
 * If the element is not visible, it will be scrolled into view.
 *
 * @param {String} selector  element to move to
 * @param {Number} xoffset   X offset to move to, relative to the top-left corner of the element.
 *                           If not specified, the mouse will move to the middle of the element.
 * @param {Number} yoffset   Y offset to move to, relative to the top-left corner of the element.
 *                           If not specified, the mouse will move to the middle of the element.
 *
 * @uses protocol/element, protocol/elementIdLocation
 * @type action
 */
browser.moveToObject = (selector, xoffset, yoffset) => {};

/**
 * Open new window in browser. This command is the equivalent function to `window.open()`. 
 * This command does not work in mobile environments.
 *
 * @param {String} url            website URL to open
 * @param {String} windowName     name of the new window
 * @param {String} windowFeatures features of opened window (e.g. size, position, scrollbars, etc.)
 * @uses protocol/execute, window/getTabIds, window/switchTab
 * @type window
 */
browser.newWindow = (url, windowName, windowFeatures) => {};

/**
 * Pauses queue execution for a specific amount of time
 *
 * @param {Number} milliseconds  time in ms
 * @type utility
 */
browser.pause = (milliseconds) => {};

/**
 * Release touch sequenz on specific element.
 *
 * @param {String} selector element to release on
 * @uses property/getLocation, protocol/touchUp
 * @type mobile
 */
browser.release = (selector) => {};

/**
 * Apply right click on an element. If selector is not provided, click on the last
 * moved-to location.
 *
 * @param {String} selector element to click on
 * @param {Number} xoffset  X offset to move to, relative to the top-left corner of the element.
 * @param {Number} yoffset  Y offset to move to, relative to the top-left corner of the element.
 * @uses protocol/element, protocol/buttonPress
 * @type action
 */
browser.rightClick = (selector, xoffset, yoffset) => {};

/**
 * Save a screenshot as a base64 encoded PNG with the current state of the browser. 
 * Be aware that some Selenium driver
 * are taking screenshots of the whole document (e.g. phantomjs) and others only of the current viewport. 
 * If you want to always be sure that the screenshot has the size of the whole document, use [WebdriverCSS](https://github.com/webdriverio/webdrivercss)
 * to enhance this command with that functionality.
 *
 * @param {Function|String=} filename  path to the generated image (relative to the execution directory)
 * @uses protocol/screenshot
 * @type utility
 */
browser.saveScreenshot = (filename) => {};

/**
 * Scroll to a specific element. 
 * You can also append/pass two offset values as parameter to scroll to a specific position.
 *
 * @param {String=} selector  element to scroll to
 * @param {Number}  xoffset   x offset to scroll to
 * @param {Number}  yoffset   y offset to scroll to
 * @uses protocol/element, protocol/elementIdLocation, protocol/touchScroll, protocol/execute
 * @type utility
 */
browser.scroll = (selector, xoffset, yoffset) => {};

/**
 * Select option with a specific value.
 *
 * @param {String} selector   select element that contains the options
 * @param {String} attribute  attribute of option element to get selected
 * @param {String} value      value of option element to get selected
 * @uses protocol/element, protocol/elementIdClick, protocol/elementIdElement
 * @type action
 */
browser.selectByAttribute = (selector, attribute, value) => {};

/**
 * Select option with a specific index.
 *
 * @param {String} selector   select element that contains the options
 * @param {Number} index      option index
 * @uses protocol/element, protocol/elementIdElements, protocol/elementIdClick
 * @type action
 */
browser.selectByIndex = (selector, index) => {};

/**
 * Get source code of specified DOM element by selector.
 *
 * @param {String} selector   select element that contains the options
 * @param {String} value      value of option element to get selected
 * @uses protocol/element, protocol/elementIdClick, protocol/elementIdElement
 * @type action
 */
browser.selectByValue = (selector, value) => {};

/**
 * Select option that display text matching the argument.
 *
 * @param {String} selector  select element that contains the options
 * @param {String} text      text of option element to get selected
 * @uses protocol/element, protocol/elementIdClick, protocol/elementIdElement
 * @type action
 */
browser.selectByVisibleText = (selector, text) => {};

/**
 * Works just like execute, only you can use selectors to pass html elements to
 * the function you wish to execute in the browser.
 *
 * The function fn will receive every resolved selector as an array of html elements,
 * even if there is only one result, or no result.
 * These arrays are the first arguments the function fn receives.
 * If you pass an array of selectors, the resulting html element arrays are returned in the same order.
 *
 * All arguments you append after function fn are added as the arguments after the html arrays.
 * You can use any JSON value or a function as such an argument.
 *
 * @param {String|Array.<String>} selectors                  single selector or array of selectors
 * @param {Function}              script                     function to get executed in the browser
 * @param {...*}                  [argument1,...,argumentN]  arguments added to fn. Can be any JSON value or function
 * @uses protocol/execute
 * @type action
 */
browser.selectorExecute = (selector, script) => {};

/**
 * Works just like execute, only you can use Selenium selector strategies to pass html elements to
 * the asynchronous function you wish to execute in the browser.
 *
 * The asynchronous function fn will receive every resolved selector as an array of html elements,
 * even if there is only one result, or no result.
 * These arrays are the first arguments the function fn receives.
 * If you pass an array of selectors, the resulting html element arrays are returned in the same order.
 *
 * All arguments you append after function fn are added as the arguments after the html arrays.
 * You can use any JSON value or a function as such an argument.
 *
 * @param {String|Array.<String>} selectors                  single selector or array of selectors
 * @param {Function}              script                     asynchronous function to get executed in the browser
 * @param {...*}                  [argument1,...,argumentN]  arguments added to fn. Can be any JSON value or function
 * @uses protocol/execute
 * @type action
 */
browser.selectorExecuteAsync = (selector, script) => {};

/**
 * Sets a [cookie](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object)
 * for current page.
 *
 * @param {Object} cookie  cookie object
 * @uses protocol/cookie
 * @type cookie
 */
browser.setCookie = (cookie) => {};

/**
 * Set the current geo location
 *
 * @param {Object} location  the new location (`{latitude: number, longitude: number, altitude: number}`)
 *
 * @uses protocol/location
 * @type mobile
 */
browser.setGeoLocation = (location) => {};

/**
 * Set the current browser orientation.
 *
 * @param {String} orientation  the new browser orientation (`landscape/portrait`)
 * @uses protocol/orientation
 * @type mobile
 * @for android, ios
 */
browser.setOrientation = (orientation) => {};

/**
 * Send a sequence of key strokes to an element (clears value before). 
 * You can also use unicode characters like Left arrow or Back space. 
 * WebdriverIO will take care of translating them into unicode characters. 
 * You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#dfn-character-types).
 * To do that, the value has to correspond to a key from the table.
 *
 * @param {String}         selector  Input element
 * @param {String|Number=} values    Input element
 * @uses protocol/elements, protocol/elementIdClear, protocol/elementIdValue
 * @type action
 */
browser.setValue = (selector, values) => {};

/**
 * This command changes the viewport size of the browser. 
 * When talking about browser size we have to differentiate
 * between the actual window size of the browser application and the document/viewport 
 * size of the website. The window size will always be bigger since it includes 
 * the height of any menu or status bars.
 *
 * @param {Object}  size  window width/height
 * @param {Boolean} type  set to `false` to change window size, `true` (default) to change viewport size
 * @uses protocol/execute, protocol/windowHandleSize
 * @type window
 */
browser.setViewportSize = (size, type) => {};

/**
 * Submits a form found by given selector. 
 * The submit command may also be applied to any element that is a descendant of a `<form>` element.
 *
 * @param {String} selector form element
 * @uses protocol/element, protocol/submit
 * @type action
 */
browser.submitForm = (selector) => {};

/**
 * Perform a swipe on the screen or an element. 
 * If you want to swipe on a specific element make sure you provide a selector argument. 
 * If not just pass `xoffset` and `yoffset` as command arguments.
 *
 * @param {String=} selector   element to swipe on
 * @param {Number=} xoffset    x offset of swipe gesture (in pixels or relative units)
 * @param {Number=} yoffset    y offset of swipe gesture (in pixels or relative units)
 * @param {Number=} speed      time (in seconds) to spend performing the swipe
 * @uses protocol/element, protocol/touchFlick
 * @type mobile
 */
browser.swipe = (selector, xoffset, yoffset, speed) => {};

/**
 * Perform a swipe down on an element.
 *
 * @param {String} selector  element to swipe on
 * @param {Number} speed     time (in seconds) to spend performing the swipe
 * @uses mobile/swipe
 * @type mobile
 */
browser.swipeDown = (selector, speed) => {};

/**
 * Perform a swipe left on an element.
 *
 * @param {String} selector  element to swipe on
 * @param {Number} speed     time (in seconds) to spend performing the swipe
 * @uses mobile/flick
 * @type mobile
 */
browser.swipeLeft = (selector, speed) => {};

/**
 * Perform a swipe right on an element.
 *
 * @param {String} selector  element to swipe on
 * @param {Number} speed     time (in seconds) to spend performing the swipe
 * @uses mobile/swipe
 * @type mobile
 */
browser.swipeRight = (selector, speed) => {};

/**
 * Perform a swipe up on an element.
 *
 * @param {String} selector  element to swipe on
 * @param {Number} speed     time (in seconds) to spend performing the swipe
 *
 * @uses mobile/swipe
 * @type mobile
 */
browser.swipeUp = (selector, speed) => {};

/**
 * Switch focus to a particular tab / window handle.
 *
 * @param {String=} windowHandle window handle URL to focus on 
 * (if no handle was specified the command switches to the first available one)
 *
 * @uses protocol/window, window/getTabIds, window/switchTab
 * @type window
 */
browser.switchTab = (windowHandle) => {};

/**
 * Put finger on an element (only in mobile context).
 *
 * @param {String}  selector  element to put finger on
 * @param {Boolean} longClick if true touch click will be long (default: false)
 *
 * @uses property/getLocation, protocol/touchClick
 * @type mobile
 * @uses android
 */
browser.touch = (selector, longClick) => {};

/**
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to be (dis/en)abled. 
 * If multiple elements get queryied by given selector, it returns true 
 * (or false if reverse flag is set) if at least one element is (dis/en)abled.
 *
 * @param {String}   selector element to wait for
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 *
 * @uses util/waitUntil, property/isEnabled
 * @type utility
 */
browser.waitForEnabled = (selector, ms, reverse) => {};

/**
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to be present within the DOM. Returns true if the selector
 * matches at least one element that exists in the DOM. If the reverse flag
 * is true, the command will instead return true if the selector does not
 * match any elements.
 *
 * @param {String}   selector CSS selector to query
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it instead waits for the selector to not match any elements (default: false)
 * @uses utility/waitUntil, state/isExisting
 * @type utility
 */
browser.waitForExist = (selector, ms, reverse) => {};

/**
 * Wait for an option or radio/checkbox element (selected by css selector) for the provided amount of
 * milliseconds to be (un)selected or (un)checked. If multiple elements get queryied by given
 * selector, it returns true (or false if reverse flag is set) if at least one element is (un)selected.
 *
 * @param {String}   selector element to wait for
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @uses util/waitUntil, property/isSelected
 * @type utility
 */
browser.waitForSelected = (selector, ms, reverse) => {};

/**
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to have text/content. If multiple elements get queryied by given
 * selector, it returns true (or false if reverse flag is set) if at least one
 * element has text/content.
 *
 * @param {String}   selector element to wait for
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @uses util/waitUntil, property/getText
 * @type utility
 */
browser.waitForText = (selector, ms, reverse) => {};

/**
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to have a value. 
 * If multiple elements get queryied by given selector, 
 * it returns true (or false if reverse flag is set) if at least one element has a value.
 *
 * @param {String}   selector element to wait
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @uses util/waitUntil, property/getValue
 * @type utility
 */
browser.waitForValue = (selector, ms, reverse) => {};

/**
 * Wait for an element (selected by css selector) for the provided amount of
 * milliseconds to be (in)visible. If multiple elements get queryied by given
 * selector, it returns true (or false if reverse flag is set) if at least one
 * element is visible.
 *
 * @param {String}   selector element to wait for
 * @param {Number=}  ms       time in ms (default: 500)
 * @param {Boolean=} reverse  if true it waits for the opposite (default: false)
 * @uses util/waitUntil, property/isVisible
 * @type utility
 */
browser.waitForVisible = (selector, ms, reverse) => {};

/**
 * This wait command is your universal weapon if you want to wait on
 * something. It expects a condition and waits until that condition
 * is fulfilled with an truthy value. 
 * A condition can be either a promise or a command that returns a promise.
 *
 * @param {Function|Promise} condition  condition to wait on
 * @param {Number=}          ms         timeout in ms (default: 500)
 * @param {Number=}          interval   interval between condition checks (default: 250)
 * @uses utility/pause
 * @type utility
 */
browser.waitUntil = (condition, ms, interval) => {};
