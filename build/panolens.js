(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(global = global || self, factory(global.PANOLENS = {}, global.THREE));
}(this, function (exports, THREE) { 'use strict';

	const version="0.12.1";const dependencies={three:"^0.126.1"};

	/**
	 * REVISION
	 * @module REVISION
	 * @example PANOLENS.REVISION
	 * @type {string} revision
	 */
	const REVISION = version.split( '.' )[ 1 ];

	/**
	 * VERSION
	 * @module VERSION
	 * @example PANOLENS.VERSION
	 * @type {string} version
	 */
	const VERSION = version;

	/**
	 * THREEJS REVISION
	 * @module THREE_REVISION
	 * @example PANOLENS.THREE_REVISION
	 * @type {string} threejs revision
	 */
	const THREE_REVISION = dependencies.three.split( '.' )[ 1 ];

	/**
	 * THREEJS VERSION
	 * @module THREE_VERSION
	 * @example PANOLENS.THREE_VERSION
	 * @type {string} threejs version
	 */
	const THREE_VERSION = dependencies.three.replace( /[^0-9.]/g, '' );

	/**
	 * CONTROLS
	 * @module CONTROLS
	 * @example PANOLENS.CONTROLS.ORBIT
	 * @property {number} ORBIT 0
	 * @property {number} DEVICEORIENTATION 1
	 */
	const CONTROLS = { ORBIT: 0, DEVICEORIENTATION: 1 };

	/**
	 * MODES
	 * @module MODES
	 * @example PANOLENS.MODES.UNKNOWN
	 * @property {number} UNKNOWN 0
	 * @property {number} NORMAL 1
	 * @property {number} CARDBOARD 2
	 * @property {number} STEREO 3
	 */
	const MODES = { UNKNOWN: 0, NORMAL: 1, CARDBOARD: 2, STEREO: 3 };

	/**
	 * CONTROL_BUTTONS
	 * @module CONTROL_BUTTONS
	 * @example PANOLENS.VIEWER.CONTROL_BUTTONS
	 * @property {string} FULLSCREEN
	 * @property {string} SETTING
	 * @property {string} VIDEO
	 */
	const CONTROL_BUTTONS = { FULLSCREEN: 'fullscreen', SETTING: 'setting', VIDEO: 'video' };

	/**
	 * OUTPUTS
	 * @module OUTPUTS
	 * @example PANOLENS.VIEWER.OUTPUTS
	 * @property {string} NONE
	 * @property {string} CONSOLE
	 * @property {string} OVERLAY
	 */
	const OUTPUTS = { NONE: 'none', CONSOLE: 'console', OVERLAY: 'overlay' };

	/**
	 * Data URI Images
	 * @module DataImage
	 * @example PANOLENS.DataImage.Info
	 * @property {string} Info Information Icon
	 * @property {string} Arrow Arrow Icon
	 * @property {string} FullscreenEnter Fullscreen Enter Icon
	 * @property {string} FullscreenLeave Fullscreen Leave Icon
	 * @property {string} VideoPlay Video Play Icon
	 * @property {string} VideoPause Video Pause Icon
	 * @property {string} WhiteTile White Tile Icon
	 * @property {string} Setting Settings Icon
	 * @property {string} ChevronRight Chevron Right Icon
	 * @property {string} Check Check Icon
	 * @property {string} ViewIndicator View Indicator Icon
	 */
	const DataImage = {
	    Info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADBklEQVR42u2bP08UQRiHnzFaSYCI/xoksdBIqGwIiYWRUBISExpCQ0ej38FWOmlIKKhoMPEbaCxsrrHiYrQgOSlQEaICrT+LHSPZzNzt3s3c3Hn7lHvLzvv82L2dm30XKioqKgYY062BJF0HpoA7wARwBbhsPz4DjoEG8AnYNcZ8Sx1Op8IXJM1KWpdUV3nq9m9nJV1I7VNGfEzSM0mNNqR9NOwxx1L7NRMflbQm6SSgeJ4TO8Zoat+8/LKkg4jieQ4kLaf2RtKwpJ0uiufZkTScSn5S0l5C+b/sSZrstvyMpKPU5uc4kjTTjkvpeYCkaeA1/+7hvcIZMGuMqUULQNIU8Aa4ltrWwyHwyBizGzwASSPAe+B2assW7AH3jTE/i+xcZoa12Qfy2Bo3i+5cKABl99zF1GYlWFTBeULLS0DZrOsDcDNggTXgc27bLWA64BhfgHvGmB8dHUXZ1DM0S45xliKMs9bKr+klIOkqsBrwv9JtVq1DewEAT4Ch1BYdMGQdygeg7Df4SmqDAKyoyXpCszPgITCeuvoAjFuX0gE8jljUdv7bCtiOOJ7XpdUZ8L/gdXHOA5QtYH5NXXVgbrgWWn1nwFTqaiPgdPIFcDd1tRFwOl307DwRuZgXwLvctgfA04hjOp18AcReZ6sZY16e3yDpUuQxnU6+S2AkcjEpcDr1zxOXSPgCKLSa0mc4nXwB/EpdbQScTr4AGqmrjYDTyRfAx9TVRsDp5Aug8LJyH+F0cgZg58z11BUHpO5ruGh2G3ybuuqAeF2aBfAqddUB8bq0OgP2U1cegH3aOQOMMb+BrdTVB2DLupQLwLIOnKY26IBT6+ClaQDGmO/ARmqLDtiwDn7HVkcY+EdjNoTlCI+tYhO2iUppm6HKslPUq2qQKHpUe8AFsjaUXuUQWCgqXyoAG8IuME/WkNRrnAHzZfqDSgdgQ6gBc2Td3b3CMTBXtkOsIzTIjZLnQhjcVtlcEIPZLJ0LoVvt8s/Va+3yuSAG84UJRxB98cpM9dJURUVFxSDzBxKde4Lk3/h2AAAAAElFTkSuQmCC', 
	    Arrow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADPklEQVR42u2bMUscQRiG30/SRaJEI1ZKUiRErNIELRUbQYSAnX8hpVUgkDYp0wgWVjYW+QcJaQzYpLojJIXhtDDEKBpj65ti58ixmdmb2ZvZ7+T2AUHudmfmeXf2bnb3O6CmpqZmgJGqOiI5AWAWwEMA0wDuArht3r4CcAagBeAbgIaI/NQOp1fhIZKLJN+SbDKcptl3keSQtk+I+BjJVyRbJaRdtEybY9p+ReKjJN+QvIwonufS9DGq7ZuXXyd5nFA8zzHJdW1vkLxDcrdC8Ty7JO9oyc+QPFCUb3NAcqZq+TmSp9rmHZySnCvjErwOIPkUwHv8+w7vF64ALIrIfrIASM4C+ADgnratgxMACyLSiB4AyREAnwE80LbswgGAJyJy4bNxyApr6wbIw4xxy3djrwCYfeeuaZsFsEbPdULXU4DZqusLgMkEA21P05EEbf8A8FhEzos28pkBLxLKL5s/r/M1kEkz9vKQHGeatf05yfmOfubNa7G5JDle5NhtBjwHMBz5yFwAWBaRT+0XzP8pZsKwcQiH2fX8Ycojb+kzxUw4ZJn7CSQXqpRPHMKCq7+iZJ71Mvdy/DftXSQ6HcJdSDaqPPKW/mPOBO+lcbvzCU35RCFM2PpwnQKzZQfdgfe0dxH5dLA6uQJ4pC2fIASrkyuA6X6QjxyC1ckVQNn7bNHlI4ZgdXIFUObiJJl8pBCsTjGfuIwA2Cv4FN7xbYjkjqsRAHuIePXoCiDF1Zk2VidXAL+1R5sAq5MrgJb2aBNgdXIF8FV7tAmwOrkCCFs73wysTtYATHFCU3vEEWm6Ci6KvgY/ao86Ik6XogDeaY86Ik6XbjPgSHvkEThCwQy45XpDRK5JbgN4GWkgUyR9H65MRQxgW0SunZ5FezK7pfwd8e8MV8UfAPdF5Jdrg8JrAbPjprZFD2wWyQP6j8ZSEufRmGlgQ9umBBvd5IOgbjFUKLu+XnWBhG+rpsFVZGUo/coJgFVf+aAATAgNACvICpL6jSsAKyH1QcEBmBD2ASwhq+7uF84ALIVWiPUEB7lQsiOEwS2VzQUxmMXSuRCqKpd/zX4rl88FMZg/mLAEcSN+MlP/aKqmpqZmkPkL0hSjwOpNKxwAAAAASUVORK5CYII=',
	    FullscreenEnter: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIvPgo8L3N2Zz4=',
	    FullscreenLeave: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE0SDE5VjE2SDE2VjE5SDE0VjE0TTUsMTRIMTBWMTlIOFYxNkg1VjE0TTgsNUgxMFYxMEg1VjhIOFY1TTE5LDhWMTBIMTRWNUgxNlY4SDE5WiIgLz48L3N2Zz4=',
	    VideoPlay: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTgsNS4xNFYxOS4xNEwxOSwxMi4xNEw4LDUuMTRaIiAvPjwvc3ZnPg==',
	    VideoPause: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3R5bGU9ImZpbGw6I2ZmZiIgZD0iTTE0LDE5LjE0SDE4VjUuMTRIMTRNNiwxOS4xNEgxMFY1LjE0SDZWMTkuMTRaIiAvPjwvc3ZnPg==',
	    WhiteTile: 'data:image/png;base64,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',
	    Setting: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAABAAAAAQADq8/hgAAADn0lEQVR42u2bzUsVURjGnyO6CPzAMnTjppAo3LTwH1CqTfaxbeOiRS37A0wXtROFVi1aRBs3LWohSIGbQAQXViBGRhG0UIRKUCpK7q/FnOB2uc6cOXNmRnGe3eW+H8/7zLln3vNxpQoVKlQ4wjBFJAFOSRqX1O7osivpvjHmU1nChBZglvSYLYJbS0EanCvIJzWK+gnsyH34/8OuMaYjb265jwCgz6N4SWq3vodbAEmnS/KtBDgoAgyU5BteAOAkMAPcBroc7PskDWfgN+wyDwBdltMMcDI3tYBnde/pHeARMNTErgd4APzweP834oeN1dMkz5DlsFNn/yyv4kdiSK4At4AO4CqwGaDwRmza2B0210qM7YhrXU59ANAq6bWkwQTTn5KO5fIE0uVYlXTeGLOXFMx1DrjlULwKKN41x6DlnIjEEQCckPRe0okCiguJr5LOGGO+xhm5jICJQ1i8LOeJJKPYEQAMKvrtt5ZdjSf2FM0Fq/sZJI2A6UNcvCz36TiDfUcAcE1SPu/U6Mm8k/TFfu6XdFb5iX3dGPM8lQfwNod3+TowBnQ3yddtv1vPIe+b1JIBiwEJ1IAJ208k5W21trWA+V/5CHAcmAtU/A2P/DcCiTAHHE8tgCVhgLvAXgYCk17Jo/yTGfLuWe7Zd72AC8CWB4n3OAz7mLytNkZabAEXMhfeQKYfWEpJZCxA3rGUOZeA/qDF15FpAz47EvlNk9neI2e3jeWCz0BbmvipNkSMMX8kuSZYM8Z8zyqAjbHmaN5mOeYjgIXrU93MWrxHrNQjrqiDkQMLHwG+OdqF3NN3jeXKzU8AoF1SzdH8XKhJUO7HZDXLMbwAwICkJUULFxe0SbqSVQAbw3Xi7Ze0ZLmGAzAKbHs0JGU1QtvAaIjCW4B7ZOvJy2qFa5a730RPtBiaz0CgnkiZi6F5fBZDVMvho7EhcuS3xJJ2hV9IupgTqaLw0hhzab8vq23xOG/r+LDsKjLgYVzxUnU0ltwK2wDezUyJmEwqXgp/PL4rvxthaeCSI+zxuA10J8ZkWdJNSb2SLkvayKHwDRu71+ZajrG941J8agALDQ3GU/a/IvMkYCPzmCbtLNEVmacNtgs5iP9fYVNEV1Q6Hez7yNZSL+J2SarTcpqiyV2iUkG0IvPFvbz5FbEn+KEk3wMjwMeSfCsBXFBdly9CAPk9ydyffpECuB5tZfVJjaKWueOSfinln6YK4lahQoUKRxd/AcRPGTcQCAUQAAAAAElFTkSuQmCC',
	    ChevronRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTguNTksMTYuNThMMTMuMTcsMTJMOC41OSw3LjQxTDEwLDZMMTYsMTJMMTAsMThMOC41OSwxNi41OFoiIC8+PC9zdmc+',
	    Check: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WiIgLz48L3N2Zz4=',
	    ViewIndicator: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0idmlldy1pbmRpY2F0b3IiIGhlaWdodD0iMzAiIHdpZHRoPSIzMCIgdmlld0JveD0iLTIuNSAtMSAzMCAzMCI+Cgk8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7ZmlsbDpub25lO30uc3Qxe3N0cm9rZS13aWR0aDo2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCTwvc3R5bGU+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNIDEyLjUgMCBBIDEyLjUgMTIuNSAwIDAgMCAtMTIuNSAwIEEgMTIuNSAxMi41IDAgMCAwIDEyLjUgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0gMTMgMCBMIDEwIDIgTCAxNiAyIFoiPjwvcGF0aD4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNIDIgMCBBIDIgMiAwIDAgMCAtMiAwIEEgMiAyIDAgMCAwIDIgMCIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwxMywxNS41KSI+PC9wYXRoPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGlkPSJpbmRpY2F0b3IiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMTMsMTUuNSkiPjwvcGF0aD4KCTwvZz4KPC9zdmc+'
	};

	/**
	 * @module ImageLoader
	 * @description Image loader with progress based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/ImageLoader.js}
	 */
	const ImageLoader = {

	    /**
	     * Load image
	     * @example PANOLENS.ImageLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     */
	    load: function ( url, onLoad = () => {}, onProgress = () => {}, onError = () => {} ) {

	        // Enable cache
	        THREE.Cache.enabled = true;

	        let cached, request, arrayBufferView, blob, urlCreator, image, reference;

	        // Reference key
	        for (let iconName in DataImage) {

	            if (DataImage.hasOwnProperty(iconName) && url === DataImage[iconName]) {

	                reference = iconName;

	            }

	        }

	        // Cached
	        cached = THREE.Cache.get(reference ? reference : url);

	        if (cached !== undefined) {

	            if (onLoad) {

	                if ( cached.complete && cached.src ) {
	                    setTimeout( function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, 0 );
	                } else {
	                    cached.addEventListener( 'load', function () {

	                        onProgress( { loaded: 1, total: 1 } );
	                        onLoad( cached );

	                    }, false );
	                }

	            }

	            return cached;

	        }

	        // Construct a new XMLHttpRequest
	        urlCreator = window.URL || window.webkitURL;
	        image = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');

	        // Add to cache
	        THREE.Cache.add(reference ? reference : url, image);

	        const onImageLoaded = () => {

	            urlCreator.revokeObjectURL(image.src);
	            onLoad(image);

	        };

	        if (url.indexOf('data:') === 0) {

	            image.addEventListener('load', onImageLoaded, false);
	            image.src = url;
	            return image;
	        }

	        image.crossOrigin = this.crossOrigin !== undefined ? this.crossOrigin : '';

	        request = new window.XMLHttpRequest();
	        request.open('GET', url, true);
	        if (process.env.npm_lifecycle_event !== 'test') {
	            /* istanbul ignore next */
	            request.onreadystatechange = function () {
	                if (this.readyState === 4 && this.status >= 400) {
	                    onError();
	                }
	            };
	        }
	        request.responseType = 'arraybuffer';
	        request.addEventListener( 'error', onError );
	        request.addEventListener( 'progress', event => {

	            if  ( !event ) return;

	            const { loaded, total, lengthComputable } = event;
	            
	            if ( lengthComputable ) {
		
	                onProgress( { loaded, total } );
		
	            }
		
	        } );
	        
	        request.addEventListener( 'loadend', event => {

	            if  ( !event ) return;
	            const { currentTarget: { response } } = event;

	            arrayBufferView = new Uint8Array( response );
	            blob = new window.Blob( [ arrayBufferView ] );
					
	            image.addEventListener( 'load', onImageLoaded, false );
	            image.src = urlCreator.createObjectURL( blob );
		
	        } );
		
	        request.send(null);
		
	    }

	};

	/**
	 * @module TextureLoader
	 * @description Texture loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/TextureLoader.js}
	 */
	const TextureLoader = {

	    /**
	     * Load image texture
	     * @example PANOLENS.TextureLoader.load( IMAGE_URL )
	     * @method load
	     * @param  {string}   url        - An image url
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.Texture}   	 - Image texture
	     */
	    load: function ( url, onLoad = () => {}, onProgress, onError ) {

	        var texture = new THREE.Texture(); 

	        ImageLoader.load( url, function ( image ) {

	            texture.image = image;

	            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
	            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

	            texture.format = isJPEG ? THREE.RGBFormat : THREE.RGBAFormat;
	            texture.needsUpdate = true;

	            onLoad( texture );

	        }, onProgress, onError );

	        return texture;

	    }

	};

	/**
	 * @module CubeTextureLoader
	 * @description Cube Texture Loader based on {@link https://github.com/mrdoob/three.js/blob/master/src/loaders/CubeTextureLoader.js}
	 */
	const CubeTextureLoader = {

	    /**
	     * Load 6 images as a cube texture
	     * @example PANOLENS.CubeTextureLoader.load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] )
	     * @method load
	     * @param  {array}   urls        - array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	     * @param  {function} onLoad     - On load callback
	     * @param  {function} onProgress - In progress callback
	     * @param  {function} onError    - On error callback
	     * @return {THREE.CubeTexture}   - Cube texture
	     */
	    load: function ( urls, onLoad = () => {}, onProgress = () => {}, onError ) {

		   var texture, loaded, progress, all, loadings;

		   texture = new THREE.CubeTexture( [] );

		   loaded = 0;
		   progress = {};
		   all = {};

		   urls.map( function ( url, index ) {

			   ImageLoader.load( url, function ( image ) {

				   texture.images[ index ] = image;

				   loaded++;

				   if ( loaded === 6 ) {

					   texture.needsUpdate = true;

					   onLoad( texture );

				   }

			   }, function ( event ) {

				   progress[ index ] = { loaded: event.loaded, total: event.total };

				   all.loaded = 0;
				   all.total = 0;
				   loadings = 0;

				   for ( var i in progress ) {

					   loadings++;
					   all.loaded += progress[ i ].loaded;
					   all.total += progress[ i ].total;

				   }

				   if ( loadings < 6 ) {

					   all.total = all.total / loadings * 6;

				   }

				   onProgress( all );

			   }, onError );

		   } );

		   return texture;

	    }

	};

	/**
	 * @classdesc User Media
	 * @constructor
	 * @param {object} [constraints={ video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false }]
	 */
	function Media ( constraints ) {

	    const defaultConstraints = { video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: { exact: 'environment' } }, audio: false };

	    this.constraints = Object.assign( defaultConstraints, constraints );

	    this.container = null;
	    this.scene = null;
	    this.element = null;
	    this.devices = [];
	    this.stream = null;
	    this.ratioScalar = 1;
	    this.videoDeviceIndex = 0;

	}
	Media.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    setContainer: function ( container ) {

	        this.container = container;

	    },

	    setScene: function ( scene ) {

	        this.scene = scene;

	    },

	    /**
	     * Enumerate devices
	     * @memberOf Media
	     * @instance
	     * @returns {Promise}
	     */
	    enumerateDevices: function () {

	        const devices = this.devices;
	        const resolvedPromise = new Promise( resolve => { resolve( devices ); } );

	        return devices.length > 0 ? resolvedPromise : window.navigator.mediaDevices.enumerateDevices();

	    },

	    /**
	     * Switch to next available video device
	     * @memberOf Media
	     * @instance
	     */
	    switchNextVideoDevice: function () {

	        const stop = this.stop.bind( this );
	        const start = this.start.bind( this );
	        const setVideDeviceIndex = this.setVideDeviceIndex.bind( this );

	        let index = this.videoDeviceIndex;

	        this.getDevices( 'video' )
	            .then( devices => {
	                stop();
	                index++;
	                if ( index >= devices.length ) {
	                    setVideDeviceIndex( 0 );
	                    index--;
	                } else {
	                    setVideDeviceIndex( index );
	                }

	                start( devices[ index ] );
	            

	            } );

	    },

	    /**
	     * Get devices
	     * @param {string} type - type keyword to match device.kind
	     * @memberOf Media
	     * @instance
	     */
	    getDevices: function ( type = 'video' ) {

	        const devices = this.devices;
	        const validate = _devices => {

	            return _devices.map( device => { 
	                
	                if ( !devices.includes( device ) ) { devices.push( device ); }
	                return device; 
	            
	            } );
	            
	        };
	        const filter = _devices => {

	            const reg = new RegExp( type, 'i' );
	            return _devices.filter( device => reg.test( device.kind ) );

	        };

	        return this.enumerateDevices()
	            .then( validate )
	            .then( filter );

	    },

	    /**
	     * Get user media
	     * @param {MediaStreamConstraints} constraints
	     * @memberOf Media
	     * @instance
	     */
	    getUserMedia: function ( constraints ) {

	        const setMediaStream = this.setMediaStream.bind( this );
	        const playVideo = this.playVideo.bind( this );
	        const onCatchError = error => { console.warn( `PANOLENS.Media: ${error}` ); };

	        return window.navigator.mediaDevices.getUserMedia( constraints )
	            .then( setMediaStream )
	            .then( playVideo )
	            .catch( onCatchError );

	    },

	    /**
	     * Set video device index
	     * @param {number} index 
	     * @memberOf Media
	     * @instance
	     */
	    setVideDeviceIndex: function ( index ) {

	        this.videoDeviceIndex = index;

	    },

	    /**
	     * Start streaming
	     * @param {MediaDeviceInfo} [targetDevice]
	     * @memberOf Media
	     * @instance
	     */
	    start: function( targetDevice ) {

	        const constraints = this.constraints;
	        const getUserMedia = this.getUserMedia.bind( this );
	        const onVideoDevices = devices => {

	            if ( !devices || devices.length === 0 ) {

	                throw Error( 'no video device found' );

	            }

	            const device = targetDevice || devices[ 0 ];
	            constraints.video.deviceId = device.deviceId;

	            return getUserMedia( constraints );

	        };

	        this.element = this.createVideoElement();

	        return this.getDevices().then( onVideoDevices );

	    },

	    /**
	     * Stop streaming
	     * @memberOf Media
	     * @instance
	     */
	    stop: function () {

	        const stream = this.stream;

	        if ( stream && stream.active ) {

	            const track = stream.getTracks()[ 0 ];

	            track.stop();

	            window.removeEventListener( 'resize', this.onWindowResize.bind( this ) );

	            this.element = null;
	            this.stream = null;

	        }

	    },

	    /**
	     * Set media stream
	     * @param {MediaStream} stream 
	     * @memberOf Media
	     * @instance
	     */
	    setMediaStream: function ( stream ) {

	        this.stream = stream;
	        this.element.srcObject = stream;

	        if ( this.scene ) {

	            this.scene.background = this.createVideoTexture();

	        }
	        
	        window.addEventListener( 'resize', this.onWindowResize.bind( this ) );

	    },

	    /**
	     * Play video element
	     * @memberOf Media
	     * @instance
	     */
	    playVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.play();
	            this.dispatchEvent( { type: 'play' } );

	        }

	    },

	    /**
	     * Pause video element
	     * @memberOf Media
	     * @instance
	     */
	    pauseVideo: function () {

	        const { element } = this;

	        if ( element ) {

	            element.pause();
	            this.dispatchEvent( { type: 'pause' } );

	        }

	    },

	    /**
	     * Create video texture
	     * @memberOf Media
	     * @instance
	     * @returns {THREE.VideoTexture}
	     */
	    createVideoTexture: function () {

	        const video = this.element;
	        const texture = new THREE.VideoTexture( video );

	        texture.generateMipmaps = false;
	        texture.minFilter = THREE.LinearFilter;
	        texture.magFilter = THREE.LinearFilter;
	        texture.format = THREE.RGBFormat;
	        texture.center.set( 0.5, 0.5 );

	        video.addEventListener( 'canplay', this.onWindowResize.bind( this ) );

	        return texture;

	    },

	    /**
	     * Create video element
	     * @memberOf Media
	     * @instance
	     * @returns {HTMLVideoElement}
	     * @fires Media#canplay
	     */
	    createVideoElement: function() {

	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const video = document.createElement( 'video' );

	        /**
	         * Video can play event
	         * @type {object}
	         * @event Media#canplay
	         */
	        const canPlay = () => dispatchEvent( { type: 'canplay' } );
	        
	        video.setAttribute( 'autoplay', '' );
	        video.setAttribute( 'muted', '' );
	        video.setAttribute( 'playsinline', '' );

	        video.style.position = 'absolute';
	        video.style.top = '0';
	        video.style.left = '0';
	        video.style.width = '100%';
	        video.style.height = '100%';
	        video.style.objectPosition = 'center';
	        video.style.objectFit = 'cover';
	        video.style.display = this.scene ? 'none' : '';

	        video.addEventListener( 'canplay', canPlay );

	        return video;

	    },

	    /**
	     * On window resize event
	     * @param {Event} event 
	     * @memberOf Media
	     * @instance
	     */
	    onWindowResize: function () {

	        if ( this.element && this.element.videoWidth && this.element.videoHeight && this.scene ) {

	            const { clientWidth: width, clientHeight: height } = this.container;
	            const texture = this.scene.background;
	            const { videoWidth, videoHeight } = this.element;
	            const cameraRatio = videoHeight / videoWidth;
	            const viewportRatio = this.container ? width / height : 1.0;
	            const ratio = cameraRatio * viewportRatio * this.ratioScalar;

	            if ( width > height ) {
	                texture.repeat.set( ratio, 1 );
	            } else {
	                texture.repeat.set( 1, 1 / ratio );
	            }

	        }

	    }

	} );

	/**
	 * @classdesc Reticle 3D Sprite
	 * @constructor
	 * @param {THREE.Color} [color=0xffffff] - Color of the reticle sprite
	 * @param {boolean} [autoSelect=true] - Auto selection
	 * @param {number} [dwellTime=1500] - Duration for dwelling sequence to complete
	 */

	function Reticle ( color = 0xffffff, autoSelect = true, dwellTime = 1500 ) {

	    this.dpr = window.devicePixelRatio;

	    const { canvas, context } = this.createCanvas();
	    const material = new THREE.SpriteMaterial( { color, map: this.createCanvasTexture( canvas ) } );

	    THREE.Sprite.call( this, material );
	    // this = new THREE.Sprite(material);
	    console.log('Qua haha 22');

	    this.canvasWidth = canvas.width;
	    this.canvasHeight = canvas.height;
	    this.context = context;
	    this.color = color instanceof THREE.Color ? color : new THREE.Color( color );    

	    this.autoSelect = autoSelect;
	    this.dwellTime = dwellTime;
	    this.rippleDuration = 500;
	    this.position.z = -10;
	    this.center.set( 0.5, 0.5 );
	    this.scale.set( 0.5, 0.5, 1 );

	    this.startTimestamp = null;
	    this.timerId = null;
	    this.callback = null;

	    this.frustumCulled = false;

	    this.updateCanvasArcByProgress( 0 );

	}
	Reticle.prototype = Object.create( THREE.Sprite.prototype);
	Reticle.prototype.constructor = Reticle;

	Reticle.prototype.setColor = Object.assign( Object.create( THREE.Sprite.prototype ), {

	    /**
	     * Set material color
	     * @param {THREE.Color} color 
	     * @memberOf Reticle
	     * @instance
	     */
	    setColor: function ( color ) {

	        this.material.color.copy( color instanceof THREE.Color ? color : new THREE.Color( color ) );

	    },

	    /**
	     * Create canvas texture
	     * @param {HTMLCanvasElement} canvas 
	     * @memberOf Reticle
	     * @instance
	     * @returns {THREE.CanvasTexture}
	     */
	    createCanvasTexture: function ( canvas ) {

	        const texture = new THREE.CanvasTexture( canvas );
	        texture.minFilter = THREE.LinearFilter;
	        texture.magFilter = THREE.LinearFilter;
	        texture.generateMipmaps = false;

	        return texture;

	    },

	    /**
	     * Create canvas element
	     * @memberOf Reticle
	     * @instance
	     * @returns {object} object
	     * @returns {HTMLCanvasElement} object.canvas
	     * @returns {CanvasRenderingContext2D} object.context
	     */
	    createCanvas: function () {

	        const width = 32;
	        const height = 32;
	        const canvas = document.createElement( 'canvas' );
	        const context = canvas.getContext( '2d' );
	        const dpr = this.dpr;

	        canvas.width = width * dpr;
	        canvas.height = height * dpr;
	        context.scale( dpr, dpr );

	        context.shadowBlur = 5;
	        context.shadowColor = 'rgba(200,200,200,0.9)';

	        return { canvas, context };

	    },

	    /**
	     * Update canvas arc by progress
	     * @param {number} progress 
	     * @memberOf Reticle
	     * @instance
	     */
	    updateCanvasArcByProgress: function ( progress ) {

	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const dpr = this.dpr;
	        const degree = progress * Math.PI * 2;
	        const color = this.color.getStyle();
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;
	        const lineWidth = 3;
	        
	        context.clearRect( 0, 0, canvasWidth, canvasHeight );
	        context.beginPath();

	        if ( progress === 0 ) {
	            context.arc( x, y, canvasWidth / 16, 0, 2 * Math.PI );
	            context.fillStyle = color;
	            context.fill();
	        } else {
	            context.arc( x, y, canvasWidth / 4 - lineWidth, -Math.PI / 2, -Math.PI / 2 + degree );
	            context.strokeStyle = color;
	            context.lineWidth = lineWidth;
	            context.stroke();
	        }

	        context.closePath();

	        material.map.needsUpdate = true;

	    },

	    /**
	     * Ripple effect
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-ripple-start
	     * @fires Reticle#reticle-ripple-end
	     */
	    ripple: function () {

	        const context = this.context;
	        const { canvasWidth, canvasHeight, material } = this;
	        const duration = this.rippleDuration;
	        const timestamp = performance.now();
	        const color = this.color;
	        const dpr = this.dpr;
	        const x = canvasWidth * 0.5 / dpr;
	        const y = canvasHeight * 0.5 / dpr;

	        const update = () => {

	            const timerId = window.requestAnimationFrame( update );
	            const elapsed = performance.now() - timestamp;
	            const progress = elapsed / duration;
	            const opacity = 1.0 - progress > 0 ? 1.0 - progress : 0;
	            const radius = progress * canvasWidth * 0.5 / dpr;

	            context.clearRect( 0, 0, canvasWidth, canvasHeight );
	            context.beginPath();
	            context.arc( x, y, radius, 0, Math.PI * 2 );
	            context.fillStyle = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${opacity})`;
	            context.fill();
	            context.closePath();

	            if ( progress >= 1.0 ) {

	                window.cancelAnimationFrame( timerId );
	                this.updateCanvasArcByProgress( 0 );

	                /**
	                 * Reticle ripple end event
	                 * @type {object}
	                 * @event Reticle#reticle-ripple-end
	                 */
	                this.dispatchEvent( { type: 'reticle-ripple-end' } );

	            }

	            material.map.needsUpdate = true;

	        };

	        /**
	         * Reticle ripple start event
	         * @type {object}
	         * @event Reticle#reticle-ripple-start
	         */
	        this.dispatchEvent( { type: 'reticle-ripple-start' } );

	        update();

	    },

	    /**
	     * Make reticle visible
	     * @memberOf Reticle
	     * @instance
	     */
	    show: function () {

	        this.visible = true;

	    },

	    /**
	     * Make reticle invisible
	     * @memberOf Reticle
	     * @instance
	     */
	    hide: function () {

	        this.visible = false;

	    },

	    /**
	     * Start dwelling
	     * @param {function} callback 
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-start
	     */
	    start: function ( callback ) {

	        if ( !this.autoSelect ) {

	            return;

	        }

	        /**
	         * Reticle start event
	         * @type {object}
	         * @event Reticle#reticle-start
	         */
	        this.dispatchEvent( { type: 'reticle-start' } );

	        this.startTimestamp = performance.now();
	        this.callback = callback;
	        this.update();

	    },

	    /**
	     * End dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-end
	     */
	    end: function(){

	        if ( !this.startTimestamp ) { return; }

	        window.cancelAnimationFrame( this.timerId );

	        this.updateCanvasArcByProgress( 0 );
	        this.callback = null;
	        this.timerId = null;
	        this.startTimestamp = null;

	        /**
	         * Reticle end event
	         * @type {object}
	         * @event Reticle#reticle-end
	         */
	        this.dispatchEvent( { type: 'reticle-end' } );

	    },

	    /**
	     * Update dwelling
	     * @memberOf Reticle
	     * @instance
	     * @fires Reticle#reticle-update
	     */
	    update: function () {

	        this.timerId = window.requestAnimationFrame( this.update.bind( this ) );

	        const elapsed = performance.now() - this.startTimestamp;
	        const progress = elapsed / this.dwellTime;

	        this.updateCanvasArcByProgress( progress );

	        /**
	         * Reticle update event
	         * @type {object}
	         * @event Reticle#reticle-update
	         */
	        this.dispatchEvent( { type: 'reticle-update', progress } );

	        if ( progress >= 1.0 ) {

	            window.cancelAnimationFrame( this.timerId );
	            if ( this.callback ) { this.callback(); }
	            this.end();
	            this.ripple();

	        }

	    }

	} );

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var Tween = createCommonjsModule(function (module, exports) {
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */


	var _Group = function () {
		this._tweens = {};
		this._tweensAddedDuringUpdate = {};
	};

	_Group.prototype = {
		getAll: function () {

			return Object.keys(this._tweens).map(function (tweenId) {
				return this._tweens[tweenId];
			}.bind(this));

		},

		removeAll: function () {

			this._tweens = {};

		},

		add: function (tween) {

			this._tweens[tween.getId()] = tween;
			this._tweensAddedDuringUpdate[tween.getId()] = tween;

		},

		remove: function (tween) {

			delete this._tweens[tween.getId()];
			delete this._tweensAddedDuringUpdate[tween.getId()];

		},

		update: function (time, preserve) {

			var tweenIds = Object.keys(this._tweens);

			if (tweenIds.length === 0) {
				return false;
			}

			time = time !== undefined ? time : TWEEN.now();

			// Tweens are updated in "batches". If you add a new tween during an update, then the
			// new tween will be updated in the next batch.
			// If you remove a tween during an update, it may or may not be updated. However,
			// if the removed tween was added during the current batch, then it will not be updated.
			while (tweenIds.length > 0) {
				this._tweensAddedDuringUpdate = {};

				for (var i = 0; i < tweenIds.length; i++) {

					var tween = this._tweens[tweenIds[i]];

					if (tween && tween.update(time) === false) {
						tween._isPlaying = false;

						if (!preserve) {
							delete this._tweens[tweenIds[i]];
						}
					}
				}

				tweenIds = Object.keys(this._tweensAddedDuringUpdate);
			}

			return true;

		}
	};

	var TWEEN = new _Group();

	TWEEN.Group = _Group;
	TWEEN._nextId = 0;
	TWEEN.nextId = function () {
		return TWEEN._nextId++;
	};


	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (self) === 'undefined' && typeof (process) !== 'undefined' && process.hrtime) {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use self.performance.now if it is available.
	else if (typeof (self) !== 'undefined' &&
	         self.performance !== undefined &&
			 self.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = self.performance.now.bind(self.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}


	TWEEN.Tween = function (object, group) {
		this._object = object;
		this._valuesStart = {};
		this._valuesEnd = {};
		this._valuesStartRepeat = {};
		this._duration = 1000;
		this._repeat = 0;
		this._repeatDelayTime = undefined;
		this._yoyo = false;
		this._isPlaying = false;
		this._reversed = false;
		this._delayTime = 0;
		this._startTime = null;
		this._easingFunction = TWEEN.Easing.Linear.None;
		this._interpolationFunction = TWEEN.Interpolation.Linear;
		this._chainedTweens = [];
		this._onStartCallback = null;
		this._onStartCallbackFired = false;
		this._onUpdateCallback = null;
		this._onRepeatCallback = null;
		this._onCompleteCallback = null;
		this._onStopCallback = null;
		this._group = group || TWEEN;
		this._id = TWEEN.nextId();

	};

	TWEEN.Tween.prototype = {
		getId: function () {
			return this._id;
		},

		isPlaying: function () {
			return this._isPlaying;
		},

		to: function (properties, duration) {

			this._valuesEnd = Object.create(properties);

			if (duration !== undefined) {
				this._duration = duration;
			}

			return this;

		},

		duration: function duration(d) {
			this._duration = d;
			return this;
		},

		start: function (time) {

			this._group.add(this);

			this._isPlaying = true;

			this._onStartCallbackFired = false;

			this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
			this._startTime += this._delayTime;

			for (var property in this._valuesEnd) {

				// Check if an Array was provided as property value
				if (this._valuesEnd[property] instanceof Array) {

					if (this._valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (this._object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				this._valuesStart[property] = this._object[property];

				if ((this._valuesStart[property] instanceof Array) === false) {
					this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

			}

			return this;

		},

		stop: function () {

			if (!this._isPlaying) {
				return this;
			}

			this._group.remove(this);
			this._isPlaying = false;

			if (this._onStopCallback !== null) {
				this._onStopCallback(this._object);
			}

			this.stopChainedTweens();
			return this;

		},

		end: function () {

			this.update(Infinity);
			return this;

		},

		stopChainedTweens: function () {

			for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
				this._chainedTweens[i].stop();
			}

		},

		group: function (group) {
			this._group = group;
			return this;
		},

		delay: function (amount) {

			this._delayTime = amount;
			return this;

		},

		repeat: function (times) {

			this._repeat = times;
			return this;

		},

		repeatDelay: function (amount) {

			this._repeatDelayTime = amount;
			return this;

		},

		yoyo: function (yoyo) {

			this._yoyo = yoyo;
			return this;

		},

		easing: function (easingFunction) {

			this._easingFunction = easingFunction;
			return this;

		},

		interpolation: function (interpolationFunction) {

			this._interpolationFunction = interpolationFunction;
			return this;

		},

		chain: function () {

			this._chainedTweens = arguments;
			return this;

		},

		onStart: function (callback) {

			this._onStartCallback = callback;
			return this;

		},

		onUpdate: function (callback) {

			this._onUpdateCallback = callback;
			return this;

		},

		onRepeat: function onRepeat(callback) {

			this._onRepeatCallback = callback;
			return this;

		},

		onComplete: function (callback) {

			this._onCompleteCallback = callback;
			return this;

		},

		onStop: function (callback) {

			this._onStopCallback = callback;
			return this;

		},

		update: function (time) {

			var property;
			var elapsed;
			var value;

			if (time < this._startTime) {
				return true;
			}

			if (this._onStartCallbackFired === false) {

				if (this._onStartCallback !== null) {
					this._onStartCallback(this._object);
				}

				this._onStartCallbackFired = true;
			}

			elapsed = (time - this._startTime) / this._duration;
			elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

			value = this._easingFunction(elapsed);

			for (property in this._valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (this._valuesStart[property] === undefined) {
					continue;
				}

				var start = this._valuesStart[property] || 0;
				var end = this._valuesEnd[property];

				if (end instanceof Array) {

					this._object[property] = this._interpolationFunction(end, value);

				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						this._object[property] = start + (end - start) * value;
					}

				}

			}

			if (this._onUpdateCallback !== null) {
				this._onUpdateCallback(this._object, elapsed);
			}

			if (elapsed === 1) {

				if (this._repeat > 0) {

					if (isFinite(this._repeat)) {
						this._repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in this._valuesStartRepeat) {

						if (typeof (this._valuesEnd[property]) === 'string') {
							this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
						}

						if (this._yoyo) {
							var tmp = this._valuesStartRepeat[property];

							this._valuesStartRepeat[property] = this._valuesEnd[property];
							this._valuesEnd[property] = tmp;
						}

						this._valuesStart[property] = this._valuesStartRepeat[property];

					}

					if (this._yoyo) {
						this._reversed = !this._reversed;
					}

					if (this._repeatDelayTime !== undefined) {
						this._startTime = time + this._repeatDelayTime;
					} else {
						this._startTime = time + this._delayTime;
					}

					if (this._onRepeatCallback !== null) {
						this._onRepeatCallback(this._object);
					}

					return true;

				} else {

					if (this._onCompleteCallback !== null) {

						this._onCompleteCallback(this._object);
					}

					for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						this._chainedTweens[i].start(this._startTime + this._duration);
					}

					return false;

				}

			}

			return true;

		}
	};


	TWEEN.Easing = {

		Linear: {

			None: function (k) {

				return k;

			}

		},

		Quadratic: {

			In: function (k) {

				return k * k;

			},

			Out: function (k) {

				return k * (2 - k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return - 0.5 * (--k * (k - 2) - 1);

			}

		},

		Cubic: {

			In: function (k) {

				return k * k * k;

			},

			Out: function (k) {

				return --k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);

			}

		},

		Quartic: {

			In: function (k) {

				return k * k * k * k;

			},

			Out: function (k) {

				return 1 - (--k * k * k * k);

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return - 0.5 * ((k -= 2) * k * k * k - 2);

			}

		},

		Quintic: {

			In: function (k) {

				return k * k * k * k * k;

			},

			Out: function (k) {

				return --k * k * k * k * k + 1;

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);

			}

		},

		Sinusoidal: {

			In: function (k) {

				return 1 - Math.cos(k * Math.PI / 2);

			},

			Out: function (k) {

				return Math.sin(k * Math.PI / 2);

			},

			InOut: function (k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));

			}

		},

		Exponential: {

			In: function (k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);

			},

			Out: function (k) {

				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

			}

		},

		Circular: {

			In: function (k) {

				return 1 - Math.sqrt(1 - k * k);

			},

			Out: function (k) {

				return Math.sqrt(1 - (--k * k));

			},

			InOut: function (k) {

				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

			}

		},

		Elastic: {

			In: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

			},

			Out: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

			},

			InOut: function (k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

			}

		},

		Back: {

			In: function (k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);

			},

			Out: function (k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;

			},

			InOut: function (k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

			}

		},

		Bounce: {

			In: function (k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);

			},

			Out: function (k) {

				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}

			},

			InOut: function (k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

		},

		Bezier: function (v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;

		},

		CatmullRom: function (v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

			}

		},

		Utils: {

			Linear: function (p0, p1, t) {

				return (p1 - p0) * t + p0;

			},

			Bernstein: function (n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);

			},

			Factorial: (function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;

				};

			})(),

			CatmullRom: function (p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		{

			// Node.js
			module.exports = TWEEN;

		}

	})();
	});

	/**
	 * @classdesc Information spot attached to panorama
	 * @constructor
	 * @param {number} [scale=300] - Default scale
	 * @param {string} [imageSrc=PANOLENS.DataImage.Info] - Image overlay info
	 * @param {boolean} [animated=true] - Enable default hover animation
	 */
	function Infospot ( scale = 300, imageSrc, animated ) {
		
	    const duration = 500, scaleFactor = 1.3;

	    imageSrc = imageSrc || DataImage.Info;

	    THREE.Sprite.call( this );

	    this.type = 'infospot';

	    this.animated = animated !== undefined ? animated : true;
	    this.isHovering = false;

	    /*
	     * TODO: Three.js bug hotfix for sprite raycasting r104
	     * https://github.com/mrdoob/three.js/issues/14624
	     */
	    this.frustumCulled = false;

	    this.element = null;
	    this.toPanorama = null;
	    this.cursorStyle = null;

	    this.mode = MODES.NORMAL;

	    this.scale.set( scale, scale, 1 );
	    this.rotation.y = Math.PI;

	    this.container = null;

	    this.originalRaycast = this.raycast;

	    // Event Handler
	    this.HANDLER_FOCUS = null;	

	    this.material.side = THREE.DoubleSide;
	    this.material.depthTest = false;
	    this.material.transparent = true;
	    this.material.opacity = 0;

	    this.scaleUpAnimation = new Tween.Tween();
	    this.scaleDownAnimation = new Tween.Tween();


	    const postLoad = function ( texture ) {

	        if ( !this.material ) { return; }

	        const ratio = texture.image.width / texture.image.height;
	        const textureScale = new THREE.Vector3();

	        texture.image.width = texture.image.naturalWidth || 64;
	        texture.image.height = texture.image.naturalHeight || 64;

	        this.scale.set( ratio * scale, scale, 1 );

	        textureScale.copy( this.scale );

	        this.scaleUpAnimation = new Tween.Tween( this.scale )
	            .to( { x: textureScale.x * scaleFactor, y: textureScale.y * scaleFactor }, duration )
	            .easing( Tween.Easing.Elastic.Out );

	        this.scaleDownAnimation = new Tween.Tween( this.scale )
	            .to( { x: textureScale.x, y: textureScale.y }, duration )
	            .easing( Tween.Easing.Elastic.Out );

	        this.material.map = texture;
	        this.material.needsUpdate = true;

	    }.bind( this );

	    // Add show and hide animations
	    this.showAnimation = new Tween.Tween( this.material )
	        .to( { opacity: 1 }, duration )
	        .onStart( this.enableRaycast.bind( this, true ) )
	        .easing( Tween.Easing.Quartic.Out );

	    this.hideAnimation = new Tween.Tween( this.material )
	        .to( { opacity: 0 }, duration )
	        .onStart( this.enableRaycast.bind( this, false ) )
	        .easing( Tween.Easing.Quartic.Out );

	    // Attach event listeners
	    this.addEventListener( 'click', this.onClick );
	    this.addEventListener( 'hover', this.onHover );
	    this.addEventListener( 'hoverenter', this.onHoverStart );
	    this.addEventListener( 'hoverleave', this.onHoverEnd );
	    this.addEventListener( 'panolens-dual-eye-effect', this.onDualEyeEffect );
	    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
	    this.addEventListener( 'dismiss', this.onDismiss );
	    this.addEventListener( 'panolens-infospot-focus', this.setFocusMethod );

	    TextureLoader.load( imageSrc, postLoad );	

	}
	Infospot.prototype = Object.assign( Object.create( THREE.Sprite.prototype ), {

	    constructor: Infospot,

	    /**
	     * Set infospot container
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Infospot
	     * @instance
	     */
	    setContainer: function ( data ) {

	        let container;
		
	        if ( data instanceof HTMLElement ) {
		
	            container = data;
		
	        } else if ( data && data.container ) {
		
	            container = data.container;
		
	        }
		
	        // Append element if exists
	        if ( container && this.element ) {
		
	            container.appendChild( this.element );
		
	        }
		
	        this.container = container;
		
	    },

	    /**
	     * Get container
	     * @memberOf Infospot
	     * @instance
	     * @return {HTMLElement} - The container of this infospot
	     */
	    getContainer: function () {

	        return this.container;

	    },

	    /**
	     * This will be called by a click event
	     * Translate and lock the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onClick: function ( event ) {

	        if ( this.element && this.getContainer() ) {

	            this.onHoverStart( event );

	            // Lock element
	            this.lockHoverElement();

	        }

	    },

	    /**
	     * Dismiss current element if any
	     * @param  {object} event - Dismiss event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDismiss: function () {

	        if ( this.element ) {

	            this.unlockHoverElement();
	            this.onHoverEnd();

	        }

	    },

	    /**
	     * This will be called by a mouse hover event
	     * Translate the hovering element if any
	     * @param  {object} event - Event containing mouseEvent with clientX and clientY
	     * @memberOf Infospot
	     * @instance
	     */
	    onHover: function () {},

	    /**
	     * This will be called on a mouse hover start
	     * Sets cursor style to 'pointer', display the element and scale up the infospot
	     * @param {object} event
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverStart: function ( event ) {

	        if ( !this.getContainer() ) { return; }

	        const cursorStyle = this.cursorStyle || ( this.mode === MODES.NORMAL ? 'pointer' : 'default' );
	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = true;
	        this.container.style.cursor = cursorStyle;
			
	        if ( this.animated ) {

	            scaleDownAnimation.stop();
	            scaleUpAnimation.start();

	        }
			
	        if ( element && event.mouseEvent.clientX >= 0 && event.mouseEvent.clientY >= 0 ) {

	            const { left, right, style } = element;

	            if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	                style.display = 'none';
	                left.style.display = 'block';
	                right.style.display = 'block';

	                // Store element width for reference
	                element._width = left.clientWidth;
	                element._height = left.clientHeight;

	            } else {

	                style.display = 'block';
	                if ( left ) { left.style.display = 'none'; }
	                if ( right ) { right.style.display = 'none'; }

	                // Store element width for reference
	                element._width = element.clientWidth;
	                element._height = element.clientHeight;

	            }
				
	        }

	    },

	    /**
	     * This will be called on a mouse hover end
	     * Sets cursor style to 'default', hide the element and scale down the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    onHoverEnd: function () {

	        if ( !this.getContainer() ) { return; }

	        const { scaleDownAnimation, scaleUpAnimation, element } = this;

	        this.isHovering = false;
	        this.container.style.cursor = 'default';

	        if ( this.animated ) {

	            scaleUpAnimation.stop();
	            scaleDownAnimation.start();

	        }

	        if ( element && !this.element.locked ) {

	            const { left, right, style } = element;

	            style.display = 'none';
	            if ( left ) { left.style.display = 'none'; }
	            if ( right ) { right.style.display = 'none'; }

	            this.unlockHoverElement();

	        }

	    },

	    /**
	     * On dual eye effect handler
	     * Creates duplicate left and right element
	     * @param  {object} event - panolens-dual-eye-effect event
	     * @memberOf Infospot
	     * @instance
	     */
	    onDualEyeEffect: function ( event ) {
			
	        if ( !this.getContainer() ) { return; }

	        let element, halfWidth, halfHeight;

	        this.mode = event.mode;

	        element = this.element;

	        halfWidth = this.container.clientWidth / 2;
	        halfHeight = this.container.clientHeight / 2;

	        if ( !element ) {

	            return;

	        }

	        if ( !element.left && !element.right ) {

	            element.left = element.cloneNode( true );
	            element.right = element.cloneNode( true );

	        }

	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	            element.left.style.display = element.style.display;
	            element.right.style.display = element.style.display;
	            element.style.display = 'none';

	        } else {

	            element.style.display = element.left.style.display;
	            element.left.style.display = 'none';
	            element.right.style.display = 'none';

	        }

	        // Update elements translation
	        this.translateElement( halfWidth, halfHeight );

	        this.container.appendChild( element.left );
	        this.container.appendChild( element.right );

	    },

	    /**
	     * Translate the hovering element by css transform
	     * @param  {number} x - X position on the window screen
	     * @param  {number} y - Y position on the window screen
	     * @memberOf Infospot
	     * @instance
	     */
	    translateElement: function ( x, y ) {

	        if ( !this.element._width || !this.element._height || !this.getContainer() ) {

	            return;

	        }

	        let left, top, element, width, height, delta, container;

	        container = this.container;
	        element = this.element;
	        width = element._width / 2;
	        height = element._height / 2;
	        delta = element.verticalDelta !== undefined ? element.verticalDelta : 40;

	        left = x - width;
	        top = y - height - delta;

	        if ( ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) 
					&& element.left && element.right
					&& !( x === container.clientWidth / 2 && y === container.clientHeight / 2 ) ) {

	            left = container.clientWidth / 4 - width + ( x - container.clientWidth / 2 );
	            top = container.clientHeight / 2 - height - delta + ( y - container.clientHeight / 2 );

	            this.setElementStyle( 'transform', element.left, 'translate(' + left + 'px, ' + top + 'px)' );

	            left += container.clientWidth / 2;

	            this.setElementStyle( 'transform', element.right, 'translate(' + left + 'px, ' + top + 'px)' );

	        } else {

	            this.setElementStyle( 'transform', element, 'translate(' + left + 'px, ' + top + 'px)' );

	        }

	    },

	    /**
	     * Set vendor specific css
	     * @param {string} type - CSS style name
	     * @param {HTMLElement} element - The element to be modified
	     * @param {string} value - Style value
	     * @memberOf Infospot
	     * @instance
	     */
	    setElementStyle: function ( type, element, value ) {

	        const style = element.style;

	        if ( type === 'transform' ) {

	            style.webkitTransform = style.msTransform = style.transform = value;

	        }

	    },

	    /**
	     * Set hovering text content
	     * @param {string} text - Text to be displayed
	     * @memberOf Infospot
	     * @instance
	     */
	    setText: function ( text ) {

	        if ( this.element ) {

	            this.element.textContent = text;

	        }

	    },

	    /**
	     * Set cursor css style on hover
	     * @memberOf Infospot
	     * @instance
	     */
	    setCursorHoverStyle: function ( style ) {

	        this.cursorStyle = style;

	    },

	    /**
	     * Add hovering text element
	     * @param {string} text - Text to be displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverText: function ( text, delta = 40 ) {

	        if ( !this.element ) {

	            this.element = document.createElement( 'div' );
	            this.element.style.display = 'none';
	            this.element.style.color = '#fff';
	            this.element.style.top = 0;
	            this.element.style.maxWidth = '50%';
	            this.element.style.maxHeight = '50%';
	            this.element.style.textShadow = '0 0 3px #000000';
	            this.element.style.fontFamily = '"Trebuchet MS", Helvetica, sans-serif';
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	        this.setText( text );

	    },

	    /**
	     * Add hovering element by cloning an element
	     * @param {HTMLDOMElement} el - Element to be cloned and displayed
	     * @param {number} [delta=40] - Vertical delta to the infospot
	     * @memberOf Infospot
	     * @instance
	     */
	    addHoverElement: function ( el, delta = 40 ) {

	        if ( !this.element ) { 

	            this.element = el.cloneNode( true );
	            this.element.style.display = 'none';
	            this.element.style.top = 0;
	            this.element.style.position = 'absolute';
	            this.element.classList.add( 'panolens-infospot' );
	            this.element.verticalDelta = delta;

	        }

	    },

	    /**
	     * Remove hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    removeHoverElement: function () {

	        if ( this.element ) { 

	            if ( this.element.left ) {

	                this.container.removeChild( this.element.left );
	                this.element.left = null;

	            }

	            if ( this.element.right ) {

	                this.container.removeChild( this.element.right );
	                this.element.right = null;

	            }

	            this.container.removeChild( this.element );
	            this.element = null;

	        }

	    },

	    /**
	     * Lock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    lockHoverElement: function () {

	        if ( this.element ) { 

	            this.element.locked = true;

	        }

	    },

	    /**
	     * Unlock hovering element
	     * @memberOf Infospot
	     * @instance
	     */
	    unlockHoverElement: function () {

	        if ( this.element ) { 

	            this.element.locked = false;

	        }

	    },

	    /**
	     * Enable raycasting
	     * @param {boolean} [enabled=true]
	     * @memberOf Infospot
	     * @instance
	     */
	    enableRaycast: function ( enabled = true ) {

	        if ( enabled ) {

	            this.raycast = this.originalRaycast;

	        } else {

	            this.raycast = () => {};

	        }

	    },

	    /**
	     * Show infospot
	     * @param  {number} [delay=0] - Delay time to show
	     * @memberOf Infospot
	     * @instance
	     */
	    show: function ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material } = this;

	        if ( animated ) {

	            hideAnimation.stop();
	            showAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( true );
	            material.opacity = 1;

	        }

	    },

	    /**
	     * Hide infospot
	     * @param  {number} [delay=0] - Delay time to hide
	     * @memberOf Infospot
	     * @instance
	     */
	    hide: function ( delay = 0 ) {

	        const { animated, hideAnimation, showAnimation, material, element } = this;

	        if ( element ) {
	            const { style } = element;
	            style.display = 'none';
	        }

	        if ( animated ) {

	            showAnimation.stop();
	            hideAnimation.delay( delay ).start();

	        } else {

	            this.enableRaycast( false );
	            material.opacity = 0;

	        }
			
	    },

	    /**
	     * Set focus event handler
	     * @memberOf Infospot
	     * @instance
	     */
	    setFocusMethod: function ( event ) {

	        if ( event ) {

	            this.HANDLER_FOCUS = event.method;

	        }

	    },

	    /**
	     * Focus camera center to this infospot
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Infospot
	     * @instance
	     */
	    focus: function ( duration, easing ) {

	        if ( this.HANDLER_FOCUS ) {

	            this.HANDLER_FOCUS( this.position, duration, easing );
	            this.onDismiss();

	        }

	    },

	    /**
	     * Dispose
	     * @memberOf Infospot
	     * @instance
	     */
	    dispose: function () {

	        const { geometry, material } = this;
	        const { map } = material;

	        this.removeHoverElement();

	        if ( this.parent ) {

	            this.parent.remove( this );

	        }

	        if ( map ) { map.dispose(); material.map = null; }
	        if ( geometry ) { geometry.dispose(); this.geometry = null; }
	        if ( material ) { material.dispose(); this.material = null; }

	    }

	} );

	/**
	 * @classdesc Widget for controls
	 * @constructor
	 * @param {HTMLElement} container - A domElement where default control widget will be attached to
	 */
	function Widget ( container ) {

	    if ( !container ) {

	        console.warn( 'PANOLENS.Widget: No container specified' );

	    }

	    THREE.EventDispatcher.call( this );

	    this.DEFAULT_TRANSITION  = 'all 0.27s ease';
	    this.TOUCH_ENABLED = !!(( 'ontouchstart' in window ) || window.DocumentTouch && document instanceof DocumentTouch);
	    this.PREVENT_EVENT_HANDLER = function ( event ) {
	        event.preventDefault();
	        event.stopPropagation();
	    };

	    this.container = container;

	    this.barElement = null;
	    this.fullscreenElement = null;
	    this.videoElement = null;
	    this.settingElement = null;

	    this.mainMenu = null;

	    this.activeMainItem = null;
	    this.activeSubMenu = null;
	    this.mask = null;

	}

	Widget.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: Widget,

	    /**
	     * Add control bar
	     * @memberOf Widget
	     * @instance
	     */
	    addControlBar: function () {

	        if ( !this.container ) {

	            console.warn( 'Widget container not set' ); 
	            return; 
	        }

	        var scope = this, bar, styleTranslate, styleOpacity, gradientStyle;

	        gradientStyle = 'linear-gradient(bottom, rgba(0,0,0,0.2), rgba(0,0,0,0))';

	        bar = document.createElement( 'div' );
	        bar.style.width = '100%';
	        bar.style.height = '44px';
	        bar.style.float = 'left';
	        bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = 'translateY(-100%)';
	        bar.style.background = '-webkit-' + gradientStyle;
	        bar.style.background = '-moz-' + gradientStyle;
	        bar.style.background = '-o-' + gradientStyle;
	        bar.style.background = '-ms-' + gradientStyle;
	        bar.style.background = gradientStyle;
	        bar.style.transition = this.DEFAULT_TRANSITION;
	        bar.style.pointerEvents = 'none';
	        bar.isHidden = false;
	        bar.toggle = function () {
	            bar.isHidden = !bar.isHidden;
	            styleTranslate = bar.isHidden ? 'translateY(0)' : 'translateY(-100%)';
	            styleOpacity = bar.isHidden ? 0 : 1;
	            bar.style.transform = bar.style.webkitTransform = bar.style.msTransform = styleTranslate;
	            bar.style.opacity = styleOpacity;
	        };

	        // Menu
	        var menu = this.createDefaultMenu();
	        this.mainMenu = this.createMainMenu( menu );
	        bar.appendChild( this.mainMenu );

	        // Mask
	        var mask = this.createMask();
	        this.mask = mask;
	        this.container.appendChild( mask );

	        // Dispose
	        bar.dispose = function () {

	            if ( scope.fullscreenElement ) {

	                bar.removeChild( scope.fullscreenElement );
	                scope.fullscreenElement.dispose();
	                scope.fullscreenElement = null;

	            }

	            if ( scope.settingElement ) {

	                bar.removeChild( scope.settingElement );
	                scope.settingElement.dispose();
	                scope.settingElement = null;

	            }

	            if ( scope.videoElement ) {

	                bar.removeChild( scope.videoElement );
	                scope.videoElement.dispose();
	                scope.videoElement = null;

	            }

	        };

	        this.container.appendChild( bar );

	        // Mask events
	        this.mask.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );
	        this.mask.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', function ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mask.hide();
	            scope.settingElement.deactivate();

	        }, false );

	        // Event listener
	        this.addEventListener( 'control-bar-toggle', bar.toggle );

	        this.barElement = bar;

	    },

	    /**
	     * Create default menu
	     * @memberOf Widget
	     * @instance
	     */
	    createDefaultMenu: function () {

	        var scope = this, handler;

	        handler = function ( method, data ) {

	            return function () {

	                scope.dispatchEvent( { 

	                    type: 'panolens-viewer-handler', 
	                    method: method, 
	                    data: data 

	                } ); 

	            };

	        };

	        return [

	            { 
	                title: 'Control', 
	                subMenu: [ 
	                    { 
	                        title: this.TOUCH_ENABLED ? 'Touch' : 'Mouse', 
	                        handler: handler( 'enableControl', CONTROLS.ORBIT )
	                    },
	                    { 
	                        title: 'Sensor', 
	                        handler: handler( 'enableControl', CONTROLS.DEVICEORIENTATION ) 
	                    } 
	                ]
	            },

	            { 
	                title: 'Mode', 
	                subMenu: [ 
	                    { 
	                        title: 'Normal',
	                        handler: handler( 'disableEffect' )
	                    }, 
	                    { 
	                        title: 'Cardboard',
	                        handler: handler( 'enableEffect', MODES.CARDBOARD )
	                    },
	                    { 
	                        title: 'Stereoscopic',
	                        handler: handler( 'enableEffect', MODES.STEREO )
	                    }
	                ]
	            }

	        ];

	    },

	    /**
	     * Add buttons on top of control bar
	     * @param {string} name - The control button name to be created
	     * @memberOf Widget
	     * @instance
	     */
	    addControlButton: function ( name ) {

	        let element;

	        switch( name ) {

	        case 'fullscreen':

	            element = this.createFullscreenButton();
	            this.fullscreenElement = element; 

	            break;

	        case 'setting':

	            element = this.createSettingButton();
	            this.settingElement = element;

	            break;

	        case 'video':

	            element = this.createVideoControl();
	            this.videoElement = element;

	            break;

	        default:

	            return;

	        }

	        if ( !element ) {

	            return;

	        }

	        this.barElement.appendChild( element );

	    },

	    /**
	     * Create modal mask
	     * @memberOf Widget
	     * @instance
	     */
	    createMask: function () {

	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.top = 0;
	        element.style.left = 0;
	        element.style.width = '100%';
	        element.style.height = '100%';
	        element.style.background = 'transparent';
	        element.style.display = 'none';

	        element.show = function () {

	            this.style.display = 'block';

	        };

	        element.hide = function () {

	            this.style.display = 'none';

	        };

	        return element;

	    },

	    /**
	     * Create Setting button to toggle menu
	     * @memberOf Widget
	     * @instance
	     */
	    createSettingButton: function () {

	        let scope = this, item;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            scope.mainMenu.toggle();

	            if ( this.activated ) {
		
	                this.deactivate();

	            } else {

	                this.activate();

	            }

	        }

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.Setting + '")',
	                webkitTransition: this.DEFAULT_TRANSITION,
	                transition: this.DEFAULT_TRANSITION

	            },

	            onTap: onTap

	        } );

	        item.activate = function () {

	            this.style.transform = 'rotate3d(0,0,1,90deg)';
	            this.activated = true;
	            scope.mask.show();

	        };

	        item.deactivate = function () {

	            this.style.transform = 'rotate3d(0,0,0,0)';
	            this.activated = false;
	            scope.mask.hide();

	            if ( scope.mainMenu && scope.mainMenu.visible ) {

	                scope.mainMenu.hide();
					
	            }

	            if ( scope.activeSubMenu && scope.activeSubMenu.visible ) {

	                scope.activeSubMenu.hide();

	            }

	            if ( scope.mainMenu && scope.mainMenu._width ) {

	                scope.mainMenu.changeSize( scope.mainMenu._width );
	                scope.mainMenu.unslideAll();

	            }
				
	        };

	        item.activated = false;

	        return item;

	    },

	    /**
	     * Create Fullscreen button
	     * @return {HTMLSpanElement} - The dom element icon for fullscreen
	     * @memberOf Widget
	     * @instance
	     * @fires Widget#panolens-viewer-handler
	     */
	    createFullscreenButton: function () {

	        let scope = this, item, isFullscreen = false, tapSkipped = true, stylesheetId;

	        const { container } = this;

	        stylesheetId = 'panolens-style-addon';

	        // Don't create button if no support
	        if ( !document.fullscreenEnabled       && 
				!document.webkitFullscreenEnabled &&
				!document.mozFullScreenEnabled    &&
				!document.msFullscreenEnabled ) {
	            return;
	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            tapSkipped = false;

	            if ( !isFullscreen ) {

	                if ( container.requestFullscreen ) { container.requestFullscreen(); }
	                if ( container.msRequestFullscreen ) { container.msRequestFullscreen(); }
	                if ( container.mozRequestFullScreen ) { container.mozRequestFullScreen(); }
	                if ( container.webkitRequestFullscreen ) { container.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT ); }
	              
	                isFullscreen = true;

	            } else {

	                if ( document.exitFullscreen ) { document.exitFullscreen(); }
	                if ( document.msExitFullscreen ) { document.msExitFullscreen(); }
	                if ( document.mozCancelFullScreen ) { document.mozCancelFullScreen(); }
	                if ( document.webkitExitFullscreen ) { document.webkitExitFullscreen( ); }

	                isFullscreen = false;

	            }

	            this.style.backgroundImage = ( isFullscreen ) 
	                ? 'url("' + DataImage.FullscreenLeave + '")' 
	                : 'url("' + DataImage.FullscreenEnter + '")';

	        }

	        function onFullScreenChange () {

	            if ( tapSkipped ) {

	                isFullscreen = !isFullscreen; 

	                item.style.backgroundImage = ( isFullscreen ) 
	                    ? 'url("' + DataImage.FullscreenLeave + '")' 
	                    : 'url("' + DataImage.FullscreenEnter + '")';

	            }

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'onWindowResize' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onWindowResize' } );

	            tapSkipped = true;

	        }

	        document.addEventListener( 'fullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'webkitfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'mozfullscreenchange', onFullScreenChange, false );
	        document.addEventListener( 'MSFullscreenChange', onFullScreenChange, false );

	        item = this.createCustomItem( { 

	            style: { 

	                backgroundImage: 'url("' + DataImage.FullscreenEnter + '")' 

	            },

	            onTap: onTap

	        } );

	        // Add fullscreen stlye if not exists
	        if ( !document.querySelector( stylesheetId ) ) {
	            const sheet = document.createElement( 'style' );
	            sheet.id = stylesheetId;
	            sheet.innerHTML = ':-webkit-full-screen { width: 100% !important; height: 100% !important }';
	            document.body.appendChild( sheet );
	        }
			
	        return item;

	    },

	    /**
	     * Create video control container
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     */
	    createVideoControl: function () {

	        const item = document.createElement( 'span' );
	        item.style.display = 'none';
	        item.show = function () { 

	            item.style.display = '';

	        };

	        item.hide = function () { 

	            item.style.display = 'none';
	            item.controlButton.paused = true;
	            item.controlButton.update();

	        };

	        item.controlButton = this.createVideoControlButton();
	        item.seekBar = this.createVideoControlSeekbar();
			
	        item.appendChild( item.controlButton );
	        item.appendChild( item.seekBar );

	        item.dispose = function () {

	            item.removeChild( item.controlButton );
	            item.removeChild( item.seekBar );

	            item.controlButton.dispose();
	            item.controlButton = null;

	            item.seekBar.dispose();
	            item.seekBar = null;

	        };

	        this.addEventListener( 'video-control-show', item.show );
	        this.addEventListener( 'video-control-hide', item.hide );

	        return item;

	    },

	    /**
	     * Create video control button
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video control
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlButton: function () {

	        const scope = this;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Widget#panolens-viewer-handler
	             * @property {string} method - 'toggleVideoPlay' function call on Viewer
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'toggleVideoPlay', data: !this.paused } );

	            this.paused = !this.paused;

	            item.update();

	        }
	        const item = this.createCustomItem( { 

	            style: { 

	                float: 'left',
	                backgroundImage: 'url("' + DataImage.VideoPlay + '")'

	            },

	            onTap: onTap

	        } );

	        item.paused = true;

	        item.update = function ( paused ) {

	            this.paused = paused !== undefined ? paused : this.paused;

	            this.style.backgroundImage = 'url("' + ( this.paused 
	                ? DataImage.VideoPlay 
	                : DataImage.VideoPause ) + '")';

	        };

	        return item;

	    },

	    /**
	     * Create video seekbar
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon for video seekbar
	     * @fires Widget#panolens-viewer-handler
	     */
	    createVideoControlSeekbar: function () {

	        let scope = this, item, progressElement, progressElementControl,
	            isDragging = false, mouseX, percentageNow, percentageNext;

	        progressElement = document.createElement( 'div' );
	        progressElement.style.width = '0%';
	        progressElement.style.height = '100%';
	        progressElement.style.backgroundColor = '#fff';

	        progressElementControl = document.createElement( 'div' );
	        progressElementControl.style.float = 'right';
	        progressElementControl.style.width = '14px';
	        progressElementControl.style.height = '14px';
	        progressElementControl.style.transform = 'translate(7px, -5px)';
	        progressElementControl.style.borderRadius = '50%';
	        progressElementControl.style.backgroundColor = '#ddd';

	        progressElementControl.addEventListener( 'mousedown', onMouseDown, { passive: true } );
	        progressElementControl.addEventListener( 'touchstart', onMouseDown,  { passive: true } );

	        function onMouseDown ( event ) {

	            event.stopPropagation();
				
	            isDragging = true;
				
	            mouseX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );

	            percentageNow = parseInt( progressElement.style.width ) / 100;

	            addControlListeners();
	        }

	        function onVideoControlDrag ( event ) {

	            if( isDragging ){

	                const clientX = event.clientX || ( event.changedTouches && event.changedTouches[0].clientX );
					
	                percentageNext = ( clientX - mouseX ) / item.clientWidth;

	                percentageNext = percentageNow + percentageNext;

	                percentageNext = percentageNext > 1 ? 1 : ( ( percentageNext < 0 ) ? 0 : percentageNext );

	                item.setProgress ( percentageNext );

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @event Widget#panolens-viewer-handler
	                 * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	                 * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	                 */
	                scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentageNext } );

	            }

	        }

	        function onVideoControlStop ( event ) {

	            event.stopPropagation();

	            isDragging = false;

	            removeControlListeners();

	        }

	        function addControlListeners () {

	            scope.container.addEventListener( 'mousemove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'mouseup', onVideoControlStop, { passive: true } );
	            scope.container.addEventListener( 'touchmove', onVideoControlDrag, { passive: true } );
	            scope.container.addEventListener( 'touchend', onVideoControlStop, { passive: true } );


	        }

	        function removeControlListeners () {

	            scope.container.removeEventListener( 'mousemove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'mouseup', onVideoControlStop, false );
	            scope.container.removeEventListener( 'touchmove', onVideoControlDrag, false );
	            scope.container.removeEventListener( 'touchend', onVideoControlStop, false );

	        }

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            if ( event.target === progressElementControl ) { return; }

	            const percentage = ( event.changedTouches && event.changedTouches.length > 0 )
	                ? ( event.changedTouches[0].pageX - event.target.getBoundingClientRect().left ) / this.clientWidth
	                : event.offsetX / this.clientWidth;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'setVideoCurrentTime' function call on Viewer
	             * @property {number} data - Percentage of current video. Range from 0.0 to 1.0
	             */
	            scope.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setVideoCurrentTime', data: percentage } );

	            item.setProgress( event.offsetX / this.clientWidth );

	        }
	        function onDispose () {

	            removeControlListeners();
	            progressElement = null;
	            progressElementControl = null;

	        }

	        progressElement.appendChild( progressElementControl );

	        item = this.createCustomItem( {

	            style: { 

	                float: 'left',
	                width: '30%',
	                height: '4px',
	                marginTop: '20px',
	                backgroundColor: 'rgba(188,188,188,0.8)'

	            },

	            onTap: onTap,
	            onDispose: onDispose

	        } );

	        item.appendChild( progressElement );

	        item.setProgress = function( percentage ) {

	            progressElement.style.width = percentage * 100 + '%';

	        };		

	        this.addEventListener( 'video-update', function ( event ) { 

	            item.setProgress( event.percentage ); 

	        } );

	        item.progressElement = progressElement;
	        item.progressElementControl = progressElementControl;

	        return item;

	    },

	    /**
	     * Create menu item
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItem: function ( title ) {

	        const scope = this; 
	        const item = document.createElement( 'a' );
	        item.textContent = title;
	        item.style.display = 'block';
	        item.style.padding = '10px';
	        item.style.textDecoration = 'none';
	        item.style.cursor = 'pointer';
	        item.style.pointerEvents = 'auto';
	        item.style.transition = this.DEFAULT_TRANSITION;

	        item.slide = function ( right ) {

	            this.style.transform = 'translateX(' + ( right ? '' : '-' ) + '100%)';

	        };

	        item.unslide = function () {

	            this.style.transform = 'translateX(0)';

	        };

	        item.setIcon = function ( url ) {

	            if ( this.icon ) {

	                this.icon.style.backgroundImage = 'url(' + url + ')';

	            }

	        };

	        item.setSelectionTitle = function ( title ) {

	            if ( this.selection ) {

	                this.selection.textContent = title;

	            }

	        };

	        item.addSelection = function ( name ) {
				
	            const selection = document.createElement( 'span' );
	            selection.style.fontSize = '13px';
	            selection.style.fontWeight = '300';
	            selection.style.float = 'right';

	            this.selection = selection;
	            this.setSelectionTitle( name );
	            this.appendChild( selection );
				
	            return this;

	        };

	        item.addIcon = function ( url = DataImage.ChevronRight, left = false, flip = false ) {
				
	            const element = document.createElement( 'span' );
	            element.style.float = left ? 'left' : 'right';
	            element.style.width = '17px';
	            element.style.height = '17px';
	            element.style[ 'margin' + ( left ? 'Right' : 'Left' ) ] = '12px';
	            element.style.backgroundSize = 'cover';

	            if ( flip ) {

	                element.style.transform = 'rotateZ(180deg)';

	            }

	            this.icon = element;
	            this.setIcon( url );
	            this.appendChild( element );

	            return this;

	        };

	        item.addSubMenu = function ( title, items ) {

	            this.subMenu = scope.createSubMenu( title, items );

	            return this;

	        };

	        item.addEventListener( 'mouseenter', function () {
				
	            this.style.backgroundColor = '#e0e0e0';

	        }, false );

	        item.addEventListener( 'mouseleave', function () {
				
	            this.style.backgroundColor = '#fafafa';

	        }, false );

	        return item;

	    },

	    /**
	     * Create menu item header
	     * @param  {string} title - Title to display
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - An anchor tag element
	     */
	    createMenuItemHeader: function ( title ) {

	        const header = this.createMenuItem( title );

	        header.style.borderBottom = '1px solid #333';
	        header.style.paddingBottom = '15px';

	        return header;

	    },

	    /**
	     * Create main menu
	     * @param  {array} menus - Menu array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMainMenu: function ( menus ) {
			
	        let scope = this, menu = this.createMenu();

	        menu._width = 200;
	        menu.changeSize( menu._width );

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            let mainMenu = scope.mainMenu, subMenu = this.subMenu;

	            function onNextTick () {

	                mainMenu.changeSize( subMenu.clientWidth );
	                subMenu.show();
	                subMenu.unslideAll();

	            }

	            mainMenu.hide();
	            mainMenu.slideAll();
	            mainMenu.parentElement.appendChild( subMenu );

	            scope.activeMainItem = this;
	            scope.activeSubMenu = subMenu;

	            window.requestAnimationFrame( onNextTick );

	        }
	        for ( var i = 0; i < menus.length; i++ ) {

	            var item = menu.addItem( menus[ i ].title );

	            item.style.paddingLeft = '20px';

	            item.addIcon()
	                .addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( menus[ i ].subMenu && menus[ i ].subMenu.length > 0 ) {

	                var title = menus[ i ].subMenu[ 0 ].title;

	                item.addSelection( title )
	                    .addSubMenu( menus[ i ].title, menus[ i ].subMenu );

	            }

	        }

	        return menu;

	    },

	    /**
	     * Create sub menu
	     * @param {string} title - Sub menu title
	     * @param {array} items - Item array list
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createSubMenu: function ( title, items ) {

	        let scope = this, menu, subMenu = this.createMenu();

	        subMenu.items = items;
	        subMenu.activeItem = null;

	        function onTap ( event ) {

	            event.preventDefault();
	            event.stopPropagation();

	            menu = scope.mainMenu;
	            menu.changeSize( menu._width );
	            menu.unslideAll();
	            menu.show();
	            subMenu.slideAll( true );
	            subMenu.hide();

	            if ( this.type !== 'header' ) {

	                subMenu.setActiveItem( this );
	                scope.activeMainItem.setSelectionTitle( this.textContent );

	                if ( this.handler ) { this.handler(); }

	            }

	        }

	        subMenu.addHeader( title ).addIcon( undefined, true, true ).addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	        for ( let i = 0; i < items.length; i++ ) {

	            const item = subMenu.addItem( items[ i ].title );

	            item.style.fontWeight = 300;
	            item.handler = items[ i ].handler;
	            item.addIcon( ' ', true );
	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', onTap, false );

	            if ( !subMenu.activeItem ) {

	                subMenu.setActiveItem( item );

	            }

	        }

	        subMenu.slideAll( true );

	        return subMenu;
			
	    },

	    /**
	     * Create general menu
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - A span element
	     */
	    createMenu: function () {

	        const scope = this;
	        const menu = document.createElement( 'span' );
	        const style = menu.style;

	        style.padding = '5px 0';
	        style.position = 'fixed';
	        style.bottom = '100%';
	        style.right = '14px';
	        style.backgroundColor = '#fafafa';
	        style.fontFamily = 'Helvetica Neue';
	        style.fontSize = '14px';
	        style.visibility = 'hidden';
	        style.opacity = 0;
	        style.boxShadow = '0 0 12pt rgba(0,0,0,0.25)';
	        style.borderRadius = '2px';
	        style.overflow = 'hidden';
	        style.willChange = 'width, height, opacity';
	        style.pointerEvents = 'auto';
	        style.transition = this.DEFAULT_TRANSITION;

	        menu.visible = false;

	        menu.changeSize = function ( width, height ) {

	            if ( width ) {

	                this.style.width = width + 'px';

	            }

	            if ( height ) {

	                this.style.height = height + 'px';

	            }

	        };

	        menu.show = function () {

	            this.style.opacity = 1;
	            this.style.visibility = 'visible';
	            this.visible = true;

	        };

	        menu.hide = function () {

	            this.style.opacity = 0;
	            this.style.visibility = 'hidden';
	            this.visible = false;

	        };

	        menu.toggle = function () {

	            if ( this.visible ) {

	                this.hide();

	            } else {

	                this.show();

	            }

	        };

	        menu.slideAll = function ( right ) {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].slide ) {

	                    menu.children[ i ].slide( right );

	                }

	            }

	        };

	        menu.unslideAll = function () {

	            for ( let i = 0; i < menu.children.length; i++ ){

	                if ( menu.children[ i ].unslide ) {

	                    menu.children[ i ].unslide();

	                }

	            }

	        };

	        menu.addHeader = function ( title ) {

	            const header = scope.createMenuItemHeader( title );
	            header.type = 'header';

	            this.appendChild( header );

	            return header;

	        };

	        menu.addItem = function ( title ) {

	            const item = scope.createMenuItem( title );
	            item.type = 'item';

	            this.appendChild( item );

	            return item;

	        };

	        menu.setActiveItem = function ( item ) {

	            if ( this.activeItem ) {

	                this.activeItem.setIcon( ' ' );

	            }

	            item.setIcon( DataImage.Check );

	            this.activeItem = item;

	        };

	        menu.addEventListener( 'mousemove', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mouseup', this.PREVENT_EVENT_HANDLER, true );
	        menu.addEventListener( 'mousedown', this.PREVENT_EVENT_HANDLER, true );

	        return menu;

	    },

	    /**
	     * Create custom item element
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLSpanElement} - The dom element icon
	     */
	    createCustomItem: function ( options = {} ) {

	        const scope = this;
	        const item = options.element || document.createElement( 'span' );
	        const { onDispose } = options;

	        item.style.cursor = 'pointer';
	        item.style.float = 'right';
	        item.style.width = '44px';
	        item.style.height = '100%';
	        item.style.backgroundSize = '60%';
	        item.style.backgroundRepeat = 'no-repeat';
	        item.style.backgroundPosition = 'center';
	        item.style.webkitUserSelect = 
			item.style.MozUserSelect = 
			item.style.userSelect = 'none';
	        item.style.position = 'relative';
	        item.style.pointerEvents = 'auto';

	        // White glow on icon
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchstart' : 'mouseenter', function() {
	            item.style.filter = 
				item.style.webkitFilter = 'drop-shadow(0 0 5px rgba(255,255,255,1))';
	        }, { passive: true });
	        item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'mouseleave', function() {
	            item.style.filter = 
				item.style.webkitFilter = '';
	        }, { passive: true });

	        this.mergeStyleOptions( item, options.style );

	        if ( options.onTap ) {

	            item.addEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	        }

	        item.dispose = function () {

	            item.removeEventListener( scope.TOUCH_ENABLED ? 'touchend' : 'click', options.onTap, false );

	            if ( onDispose ) { options.onDispose(); }

	        };
			
	        return item;

	    },

	    /**
	     * Merge item css style
	     * @param  {HTMLElement} element - The element to be merged with style
	     * @param  {object} options - The style options
	     * @memberOf Widget
	     * @instance
	     * @return {HTMLElement} - The same element with merged styles
	     */
	    mergeStyleOptions: function ( element, options = {} ) {

	        for ( let property in options ){

	            if ( options.hasOwnProperty( property ) ) {

	                element.style[ property ] = options[ property ];

	            }

	        }

	        return element;

	    },

	    /**
	     * Dispose widgets by detaching dom elements from container
	     * @memberOf Widget
	     * @instance
	     */
	    dispose: function () {

	        if ( this.barElement ) {
	            this.container.removeChild( this.barElement );
	            this.barElement.dispose();
	            this.barElement = null;

	        }

	    }
		
	} );

	/**
	 * @classdesc Base Panorama
	 * @constructor
	 * @param {THREE.Geometry} geometry - The geometry for this panorama
	 * @param {THREE.Material} material - The material for this panorama
	 */
	function Panorama ( geometry, material ) {

	    THREE.Mesh.call( this, geometry, material );

	    this.type = 'panorama';

	    this.ImageQualityLow = 1;
	    this.ImageQualityFair = 2;
	    this.ImageQualityMedium = 3;
	    this.ImageQualityHigh = 4;
	    this.ImageQualitySuperHigh = 5;

	    this.animationDuration = 1000;

	    this.defaultInfospotSize = 350;

	    this.container = undefined;

	    this.loaded = false;

	    this.linkedSpots = [];

	    this.isInfospotVisible = false;
		
	    this.linkingImageURL = undefined;
	    this.linkingImageScale = undefined;

	    this.material.side = THREE.BackSide;
	    this.material.opacity = 0;

	    this.scale.x *= -1;
	    this.renderOrder = -1;

	    this.active = false;

	    this.infospotAnimation = new Tween.Tween( this ).to( {}, this.animationDuration / 2 );

	    this.addEventListener( 'load', this.fadeIn.bind( this ) );
	    this.addEventListener( 'panolens-container', this.setContainer.bind( this ) );
	    this.addEventListener( 'click', this.onClick.bind( this ) );

	    this.setupTransitions();

	}

	Panorama.prototype = Object.assign( Object.create( THREE.Mesh.prototype ), {

	    constructor: Panorama,

	    /**
	     * Adding an object
	     * To counter the scale.x = -1, it will automatically add an 
	     * empty object with inverted scale on x
	     * @memberOf Panorama
	     * @instance
	     * @param {THREE.Object3D} object - The object to be added
	     */
	    add: function ( object ) {

	        let invertedObject;

	        if ( arguments.length > 1 ) {

	            for ( var i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        // In case of infospots
	        if ( object instanceof Infospot ) {

	            invertedObject = object;

	            if ( object.dispatchEvent ) {

	                const { container } = this;

	                if ( container ) { object.dispatchEvent( { type: 'panolens-container', container } ); }
					
	                object.dispatchEvent( { type: 'panolens-infospot-focus', method: function ( vector, duration, easing ) {

	                    /**
	                     * Infospot focus handler event
	                     * @type {object}
	                     * @event Panorama#panolens-viewer-handler
	                     * @property {string} method - Viewer function name
	                     * @property {*} data - The argument to be passed into the method
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'tweenControlCenter', data: [ vector, duration, easing ] } );


	                }.bind( this ) } );
	            }

	        } else {

	            // Counter scale.x = -1 effect
	            invertedObject = new THREE.Object3D();
	            invertedObject.scale.x = -1;
	            invertedObject.scalePlaceHolder = true;
	            invertedObject.add( object );

	        }

	        THREE.Object3D.prototype.add.call( this, invertedObject );

	    },

	    load: function () {

	        this.onLoad();
			
	    },

	    /**
	     * Click event handler
	     * @param  {object} event - Click event
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#dismiss
	     */
	    onClick: function ( event ) {

	        if ( event.intersects && event.intersects.length === 0 ) {

	            this.traverse( function ( object ) {

	                /**
	                 * Dimiss event
	                 * @type {object}
	                 * @event Infospot#dismiss
	                 */
	                object.dispatchEvent( { type: 'dismiss' } );

	            } );

	        }

	    },

	    /**
	     * Set container of this panorama 
	     * @param {HTMLElement|object} data - Data with container information
	     * @memberOf Panorama
	     * @instance
	     * @fires Infospot#panolens-container
	     */
	    setContainer: function ( data ) {

	        let container;

	        if ( data instanceof HTMLElement ) {

	            container = data;

	        } else if ( data && data.container ) {

	            container = data.container;

	        }

	        if ( container ) {

	            this.children.forEach( function ( child ) {

	                if ( child instanceof Infospot && child.dispatchEvent ) {

	                    /**
	                     * Set container event
	                     * @type {object}
	                     * @event Infospot#panolens-container
	                     * @property {HTMLElement} container - The container of this panorama
	                     */
	                    child.dispatchEvent( { type: 'panolens-container', container: container } );

	                }

	            } );

	            this.container = container;

	        }

	    },

	    /**
	     * This will be called when panorama is loaded
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#load
	     */
	    onLoad: function () {

	        this.loaded = true;

	        /**
	         * Load panorama event
	         * @type {object}
	         * @event Panorama#load
	         */
	        this.dispatchEvent( { type: 'load' } );

	    },

	    /**
	     * This will be called when panorama is in progress
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#progress
	     */
	    onProgress: function ( progress ) {

	        /**
	         * Loading panorama progress event
	         * @type {object}
	         * @event Panorama#progress
	         * @property {object} progress - The progress object containing loaded and total amount
	         */
	        this.dispatchEvent( { type: 'progress', progress: progress } );

	    },

	    /**
	     * This will be called when panorama loading has error
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#error
	     */
	    onError: function () {

	        /**
	         * Loading panorama error event
	         * @type {object}
	         * @event Panorama#error
	         */
	        this.dispatchEvent( { type: 'error' } );

	    },

	    /**
	     * Get zoom level based on window width
	     * @memberOf Panorama
	     * @instance
	     * @return {number} zoom level indicating image quality
	     */
	    getZoomLevel: function () {

	        let zoomLevel;

	        if ( window.innerWidth <= 800 ) {

	            zoomLevel = this.ImageQualityFair;

	        } else if ( window.innerWidth > 800 &&  window.innerWidth <= 1280 ) {

	            zoomLevel = this.ImageQualityMedium;

	        } else if ( window.innerWidth > 1280 && window.innerWidth <= 1920 ) {

	            zoomLevel = this.ImageQualityHigh;

	        } else if ( window.innerWidth > 1920 ) {

	            zoomLevel = this.ImageQualitySuperHigh;

	        } else {

	            zoomLevel = this.ImageQualityLow;

	        }

	        return zoomLevel;

	    },

	    /**
	     * Update texture of a panorama
	     * @memberOf Panorama
	     * @instance
	     * @param {THREE.Texture} texture - Texture to be updated
	     */
	    updateTexture: function ( texture ) {

	        this.material.map = texture;
	        this.material.needsUpdate = true;

	    },

	    /**
	     * Toggle visibility of infospots in this panorama
	     * @param  {boolean} isVisible - Visibility of infospots
	     * @param  {number} delay - Delay in milliseconds to change visibility
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#infospot-animation-complete
	     */
	    toggleInfospotVisibility: function ( isVisible, delay ) {

	        delay = ( delay !== undefined ) ? delay : 0;

	        const visible = ( isVisible !== undefined ) ? isVisible : ( this.isInfospotVisible ? false : true );

	        this.traverse( function ( object ) {

	            if ( object instanceof Infospot ) {

	                if ( visible ) {

	                    object.show( delay );

	                } else {

	                    object.hide( delay );

	                }

	            }

	        } );

	        this.isInfospotVisible = visible;

	        // Animation complete event
	        this.infospotAnimation.onComplete( function () {

	            /**
	             * Complete toggling infospot visibility
	             * @event Panorama#infospot-animation-complete
	             * @type {object} 
	             */
	            this.dispatchEvent( { type: 'infospot-animation-complete', visible: visible } );

	        }.bind( this ) ).delay( delay ).start();

	    },

	    /**
	     * Set image of this panorama's linking infospot
	     * @memberOf Panorama
	     * @instance
	     * @param {string} url   - Url to the image asset
	     * @param {number} scale - Scale factor of the infospot
	     */
	    setLinkingImage: function ( url, scale ) {

	        this.linkingImageURL = url;
	        this.linkingImageScale = scale;

	    },

	    /**
	     * Link one-way panorama
	     * @param  {Panorama} pano  - The panorama to be linked to
	     * @param  {THREE.Vector3} position - The position of infospot which navigates to the pano
	     * @param  {number} [imageScale=300] - Image scale of linked infospot
	     * @param  {string} [imageSrc=DataImage.Arrow] - The image source of linked infospot
	     * @memberOf Panorama
	     * @instance
	     */
	    link: function ( pano, position, imageScale, imageSrc ) {

	        let scale, img;

	        this.visible = true;

	        if ( !position ) {

	            console.warn( 'Please specify infospot position for linking' );

	            return;

	        }

	        // Infospot scale
	        if ( imageScale !== undefined ) {

	            scale = imageScale;

	        } else if ( pano.linkingImageScale !== undefined ) {

	            scale = pano.linkingImageScale;

	        } else {

	            scale = 300;

	        }


	        // Infospot image
	        if ( imageSrc ) {

	            img = imageSrc;

	        } else if ( pano.linkingImageURL ) {

	            img = pano.linkingImageURL;

	        } else {

	            img = DataImage.Arrow;

	        }

	        // Creates a new infospot
	        const spot = new Infospot( scale, img );
	        spot.position.copy( position );
	        spot.toPanorama = pano;
	        spot.addEventListener( 'click', function () {

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @event Panorama#panolens-viewer-handler
	             * @property {string} method - Viewer function name
	             * @property {*} data - The argument to be passed into the method
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'setPanorama', data: pano } );

	        }.bind( this ) );

	        this.linkedSpots.push( spot );

	        this.add( spot );

	        this.visible = false;

	    },

	    reset: function () {

	        this.children.length = 0;	

	    },

	    setupTransitions: function () {

	        this.fadeInAnimation = new Tween.Tween( this.material )
	            .easing( Tween.Easing.Quartic.Out )
	            .onStart( function () {

	                this.visible = true;
	                // this.material.visible = true;

	                /**
	                 * Enter panorama fade in start event
	                 * @event Panorama#enter-fade-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-fade-start' } );

	            }.bind( this ) );

	        this.fadeOutAnimation = new Tween.Tween( this.material )
	            .easing( Tween.Easing.Quartic.Out )
	            .onComplete( function () {

	                this.visible = false;
	                // this.material.visible = true;

	                /**
	                 * Leave panorama complete event
	                 * @event Panorama#leave-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'leave-complete' } );

	            }.bind( this ) );

	        this.enterTransition = new Tween.Tween( this )
	            .easing( Tween.Easing.Quartic.Out )
	            .onComplete( function () {

	                /**
	                 * Enter panorama and animation complete event
	                 * @event Panorama#enter-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-complete' } );

	            }.bind ( this ) )
	            .start();

	        this.leaveTransition = new Tween.Tween( this )
	            .easing( Tween.Easing.Quartic.Out );

	    },

	    onFadeAnimationUpdate: function () {

	        const alpha = this.material.opacity;
	        const { uniforms } = this.material;

	        if ( uniforms && uniforms.opacity ) {
	            uniforms.opacity.value = alpha;
	        }

	    },

	    /**
	     * Start fading in animation
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter-fade-complete
	     */
	    fadeIn: function ( duration ) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeOutAnimation.stop();
	        this.fadeInAnimation
	            .to( { opacity: 1 }, duration )
	            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
	            .onComplete( function () {

	                this.toggleInfospotVisibility( true, duration / 2 );

	                /**
	                 * Enter panorama fade complete event
	                 * @event Panorama#enter-fade-complete
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-fade-complete' } );			

	            }.bind( this ) )
	            .start();

	    },

	    /**
	     * Start fading out animation
	     * @memberOf Panorama
	     * @instance
	     */
	    fadeOut: function ( duration ) {

	        duration = duration >= 0 ? duration : this.animationDuration;

	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation
	            .to( { opacity: 0 }, duration )
	            .onUpdate( this.onFadeAnimationUpdate.bind( this ) )
	            .start();

	    },

	    /**
	     * This will be called when entering a panorama 
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#enter
	     * @fires Panorama#enter-start
	     */
	    onEnter: function () {

	        const duration = this.animationDuration;

	        this.leaveTransition.stop();
	        this.enterTransition
	            .to( {}, duration )
	            .onStart( function () {

	                /**
	                 * Enter panorama and animation starting event
	                 * @event Panorama#enter-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'enter-start' } );
					
	                if ( this.loaded ) {

	                    this.fadeIn( duration );

	                } else {

	                    this.load();

	                }
					
	            }.bind( this ) )
	            .start();

	        /**
	         * Enter panorama event
	         * @event Panorama#enter
	         * @type {object} 
	         */
	        this.dispatchEvent( { type: 'enter' } );

	        this.children.forEach( child => {

	            child.dispatchEvent( { type: 'panorama-enter' } );

	        } );

	        this.active = true;

	    },

	    /**
	     * This will be called when leaving a panorama
	     * @memberOf Panorama
	     * @instance
	     * @fires Panorama#leave
	     */
	    onLeave: function () {

	        const duration = this.animationDuration;

	        this.enterTransition.stop();
	        this.leaveTransition
	            .to( {}, duration )
	            .onStart( function () {

	                /**
	                 * Leave panorama and animation starting event
	                 * @event Panorama#leave-start
	                 * @type {object} 
	                 */
	                this.dispatchEvent( { type: 'leave-start' } );

	                this.fadeOut( duration );
	                this.toggleInfospotVisibility( false );

	            }.bind( this ) )
	            .start();

	        /**
	         * Leave panorama event
	         * @event Panorama#leave
	         * @type {object} 
	         */
	        this.dispatchEvent( { type: 'leave' } );

	        this.children.forEach( child => {

	            child.dispatchEvent( { type: 'panorama-leave' } );

	        } );

	        this.active = false;

	    },

	    /**
	     * Dispose panorama
	     * @memberOf Panorama
	     * @instance
	     */
	    dispose: function () {

	        this.infospotAnimation.stop();
	        this.fadeInAnimation.stop();
	        this.fadeOutAnimation.stop();
	        this.enterTransition.stop();
	        this.leaveTransition.stop();

	        /**
	         * On panorama dispose handler
	         * @type {object}
	         * @event Panorama#panolens-viewer-handler
	         * @property {string} method - Viewer function name
	         * @property {*} data - The argument to be passed into the method
	         */
	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onPanoramaDispose', data: this } );

	        // recursive disposal on 3d objects
	        function recursiveDispose ( object ) {

	            const { geometry, material } = object;

	            for ( var i = object.children.length - 1; i >= 0; i-- ) {

	                recursiveDispose( object.children[i] );
	                object.remove( object.children[i] );

	            }

	            if ( object instanceof Infospot ) {

	                object.dispose();

	            }
				
	            if ( geometry ) { geometry.dispose(); object.geometry = null; }
	            if ( material ) { material.dispose(); object.material = null; }

	        }

	        recursiveDispose( this );

	        if ( this.parent ) {

	            this.parent.remove( this );

	        }

	    }

	} );

	/**
	 * @classdesc Equirectangular based image panorama
	 * @constructor
	 * @param {string} image - Image url or HTMLImageElement
	 */
	function ImagePanorama ( image, _geometry, _material ) {

	    const radius = 5000;
	    const geometry = _geometry || new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = _material || new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );

	    Panorama.call( this, geometry, material );

	    this.src = image;
	    this.radius = radius;

	}

	ImagePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: ImagePanorama,

	    /**
	     * Load image asset
	     * @param  {*} src - Url or image element
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    load: function ( src ) {

	        src = src || this.src;

	        if ( !src ) { 

	            console.warn( 'Image source undefined' );

	            return; 

	        } else if ( typeof src === 'string' ) {

	            TextureLoader.load( src, this.onLoad.bind( this ), this.onProgress.bind( this ), this.onError.bind( this ) );

	        } else if ( src instanceof HTMLImageElement ) {

	            this.onLoad( new THREE.Texture( src ) );

	        }

	    },

	    /**
	     * This will be called when image is loaded
	     * @param  {THREE.Texture} texture - Texture to be updated
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    onLoad: function ( texture ) {

	        texture.minFilter = texture.magFilter = THREE.LinearFilter;
	        texture.needsUpdate = true;
			
	        this.updateTexture( texture );

	        window.requestAnimationFrame( Panorama.prototype.onLoad.bind( this ) );

	    },

	    /**
	     * Reset
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    reset: function () {

	        Panorama.prototype.reset.call( this );

	    },

	    /**
	     * Dispose
	     * @memberOf ImagePanorama
	     * @instance
	     */
	    dispose: function () {

	        const { material: { map } } = this;

	        // Release cached image
	        THREE.Cache.remove( this.src );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Empty panorama
	 * @constructor
	 */
	function EmptyPanorama () {

	    const geometry = new THREE.BufferGeometry();
	    const material = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );

	    geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array(), 1 ) );

	    Panorama.call( this, geometry, material );

	}

	EmptyPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: EmptyPanorama

	} );

	/**
	 * @classdesc Cubemap-based panorama
	 * @constructor
	 * @param {array} images - Array of 6 urls to images, one for each side of the CubeTexture. The urls should be specified in the following order: pos-x, neg-x, pos-y, neg-y, pos-z, neg-z
	 */
	function CubePanorama ( images = [] ){

	    const edgeLength = 10000;
	    const shader = Object.assign( {}, THREE.ShaderLib[ 'cube' ] );
	    const geometry = new THREE.BoxBufferGeometry( edgeLength, edgeLength, edgeLength );
	    const material = new THREE.ShaderMaterial( {

	        fragmentShader: shader.fragmentShader,
	        vertexShader: shader.vertexShader,
	        uniforms: shader.uniforms,
	        side: THREE.BackSide,
	        transparent: true

	    } );

	    Panorama.call( this, geometry, material );

	    this.images = images;
	    this.edgeLength = edgeLength;
	    this.material.uniforms.opacity.value = 0;

	}

	CubePanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: CubePanorama,

	    /**
	     * Load 6 images and bind listeners
	     * @memberOf CubePanorama
	     * @instance
	     */
	    load: function () {

	        CubeTextureLoader.load( 	

	            this.images, 

	            this.onLoad.bind( this ), 
	            this.onProgress.bind( this ), 
	            this.onError.bind( this ) 

	        );

	    },

	    /**
	     * This will be called when 6 textures are ready
	     * @param  {THREE.CubeTexture} texture - Cube texture
	     * @memberOf CubePanorama
	     * @instance
	     */
	    onLoad: function ( texture ) {
			
	        this.material.uniforms[ 'tCube' ].value = texture;

	        Panorama.prototype.onLoad.call( this );

	    },

	    /**
	     * Dispose
	     * @memberOf CubePanorama
	     * @instance
	     */
	    dispose: function () {	

	        const { value } = this.material.uniforms.tCube;

	        this.images.forEach( ( image ) => { THREE.Cache.remove( image ); } );

	        if ( value instanceof THREE.CubeTexture ) {

	            value.dispose();

	        }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Basic panorama with 6 pre-defined grid images
	 * @constructor
	 */
	function BasicPanorama () {

	    const images = [];

	    for ( let i = 0; i < 6; i++ ) {

	        images.push( DataImage.WhiteTile );

	    }

	    CubePanorama.call( this, images );

	}

	BasicPanorama.prototype = Object.assign( Object.create( CubePanorama.prototype ), {

	    constructor: BasicPanorama

	} );

	/**
	 * @classdesc Video Panorama
	 * @constructor
	 * @param {string} src - Equirectangular video url
	 * @param {object} [options] - Option for video settings
	 * @param {HTMLElement} [options.videoElement] - HTML5 video element contains the video
	 * @param {boolean} [options.loop=true] - Specify if the video should loop in the end
	 * @param {boolean} [options.muted=true] - Mute the video or not. Need to be true in order to autoplay on some browsers
	 * @param {boolean} [options.autoplay=false] - Specify if the video should auto play
	 * @param {boolean} [options.playsinline=true] - Specify if video should play inline for iOS. If you want it to auto play inline, set both autoplay and muted options to true
	 * @param {string} [options.crossOrigin="anonymous"] - Sets the cross-origin attribute for the video, which allows for cross-origin videos in some browsers (Firefox, Chrome). Set to either "anonymous" or "use-credentials".
	 * @param {number} [radius=5000] - The minimum radius for this panoram
	 */
	function VideoPanorama ( src, options = {} ) {

	    const radius = 5000;
	    const geometry = new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = new THREE.MeshBasicMaterial( { opacity: 0, transparent: true } );

	    Panorama.call( this, geometry, material );

	    this.src = src;

	    this.options = {

	        videoElement: document.createElement( 'video' ),
	        loop: true,
	        muted: true,
	        autoplay: false,
	        playsinline: true,
	        crossOrigin: 'anonymous'

	    };

	    Object.assign( this.options, options );

	    this.videoElement = this.options.videoElement;
	    this.videoProgress = 0;
	    this.radius = radius;

	    this.addEventListener( 'leave', this.pauseVideo.bind( this ) );
	    this.addEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	    this.addEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	    this.addEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

	}
	VideoPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: VideoPanorama,

	    isMobile: function () {

	        let check = false;
	        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})( window.navigator.userAgent || window.navigator.vendor || window.opera );
	        return check;

	    },

	    /**
	     * Load video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires  Panorama#panolens-viewer-handler
	     */
	    load: function () {

	        const { muted, loop, autoplay, playsinline, crossOrigin } = this.options;
	        const video = this.videoElement;
	        const material = this.material;
	        const onProgress = this.onProgress.bind( this );
	        const onLoad = this.onLoad.bind( this );

	        video.loop = loop;
	        video.autoplay = autoplay;
	        video.playsinline = playsinline;
	        video.crossOrigin = crossOrigin;
	        video.muted = muted;
			
	        if ( playsinline ) {

	            video.setAttribute( 'playsinline', '' );
	            video.setAttribute( 'webkit-playsinline', '' );

	        } 

	        const onloadeddata = function() {

	            this.setVideoTexture( video );

	            if ( autoplay ) {

	                /**
	                 * Viewer handler event
	                 * @type {object}
	                 * @property {string} method - 'updateVideoPlayButton'
	                 * @property {boolean} data - Pause video or not
	                 */
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	            }

	            // For mobile silent autoplay
	            if ( this.isMobile() ) {

	                video.pause();

	                if ( autoplay && muted ) {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	                } else {

	                    /**
	                     * Viewer handler event
	                     * @type {object}
	                     * @property {string} method - 'updateVideoPlayButton'
	                     * @property {boolean} data - Pause video or not
	                     */
	                    this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	                }
					
	            }

	            const loaded = () => {

	                // Fix for threejs r89 delayed update
	                material.map.needsUpdate = true;

	                onProgress( { loaded: 1, total: 1 } );
	                onLoad();

	            };

	            window.requestAnimationFrame( loaded );
				
	        };

	        /**
	         * Ready state of the audio/video element
	         * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready
	         * 1 = HAVE_METADATA - metadata for the audio/video is ready
	         * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
	         * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
	         * 4 = HAVE_ENOUGH_DATA - enough data available to start playing
	         */
	        if ( video.readyState > 2 ) {

	            onloadeddata.call( this );

	        } else {

	            if ( video.querySelectorAll( 'source' ).length === 0 ) {

	                const source = document.createElement( 'source' );
	                source.src = this.src;
	                video.appendChild( source );

	            }

	            video.load();
	        }

	        video.addEventListener( 'loadeddata', onloadeddata.bind( this ) );
			
	        video.addEventListener( 'timeupdate', function () {

	            this.videoProgress = video.duration >= 0 ? video.currentTime / video.duration : 0;

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'onVideoUpdate'
	             * @property {number} data - The percentage of video progress. Range from 0.0 to 1.0
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: this.videoProgress } );

	        }.bind( this ) );

	        video.addEventListener( 'ended', function () {
				
	            if ( !loop ) {

	                this.resetVideo();
	                this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	            }

	        }.bind( this ), false ); 

	    },

	    /**
	     * Set video texture
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {HTMLVideoElement} video  - The html5 video element
	     * @fires Panorama#panolens-viewer-handler
	     */
	    setVideoTexture: function ( video ) {

	        if ( !video ) return;

	        const videoTexture = new THREE.VideoTexture( video );
	        videoTexture.minFilter = THREE.LinearFilter;
	        videoTexture.magFilter = THREE.LinearFilter;
	        videoTexture.format = THREE.RGBFormat;

	        this.updateTexture( videoTexture );
		
	    },

	    /**
	     * Reset
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    reset: function () {

	        this.videoElement = undefined;	

	        Panorama.prototype.reset.call( this );

	    },

	    /**
	     * Check if video is paused
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video paused or not
	     */
	    isVideoPaused: function () {

	        return this.videoElement.paused;

	    },

	    /**
	     * Toggle video to play or pause
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    toggleVideo: function () {

	        const video = this.videoElement;

	        if ( !video ) { return; }

	        video[ video.paused ? 'play' : 'pause' ]();

	    },

	    /**
	     * Set video currentTime
	     * @memberOf VideoPanorama
	     * @instance
	     * @param {object} event - Event contains percentage. Range from 0.0 to 1.0
	     */
	    setVideoCurrentTime: function ( { percentage } ) {

	        const video = this.videoElement;

	        if ( video && !Number.isNaN( percentage ) && percentage !== 1 ) {

	            video.currentTime = video.duration * percentage;

	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'onVideoUpdate', data: percentage } );

	        }

	    },

	    /**
	     * Play video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#play
	     * @fires VideoPanorama#play-error
	     */
	    playVideo: function () {

	        const video = this.videoElement;
	        const playVideo = this.playVideo.bind( this );
	        const dispatchEvent = this.dispatchEvent.bind( this );
	        const onSuccess = () => {

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play
	             *
	             */
	            dispatchEvent( { type: 'play' } );

	        };
	        const onError = ( error ) => {

	            // Error playing video. Retry next frame. Possibly Waiting for user interaction
	            window.requestAnimationFrame( playVideo );

	            /**
	             * Play event
	             * @type {object}
	             * @event VideoPanorama#play-error
	             *
	             */
	            dispatchEvent( { type: 'play-error', error } );

	        };

	        if ( video && video.paused ) {

	            video.play().then( onSuccess ).catch( onError );

	        }

	    },

	    /**
	     * Pause video
	     * @memberOf VideoPanorama
	     * @instance
	     * @fires VideoPanorama#pause
	     */
	    pauseVideo: function () {

	        const video = this.videoElement;

	        if ( video && !video.paused ) {

	            video.pause();

	        }

	        /**
	         * Pause event
	         * @type {object}
	         * @event VideoPanorama#pause
	         *
	         */
	        this.dispatchEvent( { type: 'pause' } );

	    },

	    /**
	     * Resume video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resumeVideoProgress: function () {

	        const video = this.videoElement;

	        if ( video.readyState >= 4 && video.autoplay && !this.isMobile() ) {

	            this.playVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: false } );

	        } else {

	            this.pauseVideo();

	            /**
	             * Viewer handler event
	             * @type {object}
	             * @property {string} method - 'updateVideoPlayButton'
	             * @property {boolean} data - Pause video or not
	             */
	            this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'updateVideoPlayButton', data: true } );

	        }

	        this.setVideoCurrentTime( { percentage: this.videoProgress } );

	    },

	    /**
	     * Reset video at stating point
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    resetVideo: function () {

	        const video = this.videoElement;

	        if ( video ) {

	            this.setVideoCurrentTime( { percentage: 0 } );

	        }

	    },

	    /**
	     * Check if video is muted
	     * @memberOf VideoPanorama
	     * @instance
	     * @return {boolean} - is video muted or not
	     */
	    isVideoMuted: function () {

	        return this.videoElement.muted;

	    },

	    /**
	     * Mute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    muteVideo: function () {

	        const video = this.videoElement;

	        if ( video && !video.muted ) {

	            video.muted = true;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    },

	    /**
	     * Unmute video
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    unmuteVideo: function () {

	        const video = this.videoElement;

	        if ( video && this.isVideoMuted() ) {

	            video.muted = false;

	        }

	        this.dispatchEvent( { type: 'volumechange' } );

	    },

	    /**
	     * Returns the video element
	     * @memberOf VideoPanorama
	     * @instance
	     * @returns {HTMLElement}
	     */
	    getVideoElement: function () {

	        return this.videoElement;

	    },

	    /**
	     * Dispose video panorama
	     * @memberOf VideoPanorama
	     * @instance
	     */
	    dispose: function () {

	        const { material: { map } } = this;

	        this.pauseVideo();
			
	        this.removeEventListener( 'leave', this.pauseVideo.bind( this ) );
	        this.removeEventListener( 'enter-fade-start', this.resumeVideoProgress.bind( this ) );
	        this.removeEventListener( 'video-toggle', this.toggleVideo.bind( this ) );
	        this.removeEventListener( 'video-time', this.setVideoCurrentTime.bind( this ) );

	        if ( map ) { map.dispose(); }

	        Panorama.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Google Street View Loader
	 * @constructor
	 * @param {object} parameters 
	 */
	function GoogleStreetviewLoader ( parameters = {} ) {

	    this._parameters = parameters;
	    this._zoom = null;
	    this._panoId = null;
	    this._panoClient = new google.maps.StreetViewService();
	    this._count = 0;
	    this._total = 0;
	    this._canvas = [];
	    this._ctx = [];
	    this._wc = 0;
	    this._hc = 0;
	    this.result = null;
	    this.rotation = 0;
	    this.copyright = '';
	    this.onSizeChange = null;
	    this.onPanoramaLoad = null;

	    this.levelsW = [ 1, 2, 4, 7, 13, 26 ];
	    this.levelsH = [ 1, 1, 2, 4, 7, 13 ];

	    this.widths = [ 416, 832, 1664, 3328, 6656, 13312 ];
	    this.heights = [ 416, 416, 832, 1664, 3328, 6656 ];

	    this.maxW = 6656;
	    this.maxH = 6656;

	    let gl;

	    try {

	        const canvas = document.createElement( 'canvas' );

	        gl = canvas.getContext( 'experimental-webgl' );

	        if( !gl ) {

	            gl = canvas.getContext( 'webgl' );

	        }

	    }
	    catch ( error ) {

	    }

	    this.maxW = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxW );
	    this.maxH = Math.max( gl.getParameter( gl.MAX_TEXTURE_SIZE ), this.maxH );

	}

	Object.assign( GoogleStreetviewLoader.prototype, {

	    constructor: GoogleStreetviewLoader,

	    /**
	     * Set progress
	     * @param {number} loaded 
	     * @param {number} total 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setProgress: function ( loaded, total ) {

	        if ( this.onProgress ) {

	            this.onProgress( { loaded: loaded, total: total } );

	        }
			
	    },

	    /**
	     * Adapt texture to zoom
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    adaptTextureToZoom: function () {

	        const w = this.widths [ this._zoom ];
	        const h = this.heights[ this._zoom ];

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        this._wc = Math.ceil( w / maxW );
	        this._hc = Math.ceil( h / maxH );

	        for( let y = 0; y < this._hc; y++ ) {
	            for( let x = 0; x < this._wc; x++ ) {
	                const c = document.createElement( 'canvas' );
	                if( x < ( this._wc - 1 ) ) c.width = maxW; else c.width = w - ( maxW * x );
	                if( y < ( this._hc - 1 ) ) c.height = maxH; else c.height = h - ( maxH * y );
	                this._canvas.push( c );
	                this._ctx.push( c.getContext( '2d' ) );
	            }
	        }

	    },

	    /**
	     * Compose from tile
	     * @param {number} x 
	     * @param {number} y 
	     * @param {*} texture 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composeFromTile: function ( x, y, texture ) {

	        const maxW = this.maxW;
	        const maxH = this.maxH;

	        x *= 512;
	        y *= 512;

	        const px = Math.floor( x / maxW );
	        const py = Math.floor( y / maxH );

	        x -= px * maxW;
	        y -= py * maxH;

	        this._ctx[ py * this._wc + px ].drawImage( texture, 0, 0, texture.width, texture.height, x, y, 512, 512 );

	        this.progress();
			
	    },

	    /**
	     * Progress
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    progress: function() {

	        this._count++;
			
	        this.setProgress( this._count, this._total );
			
	        if ( this._count === this._total) {

	            this.canvas = this._canvas;
	            this.panoId = this._panoId;
	            this.zoom = this._zoom;

	            if ( this.onPanoramaLoad ) {

	                this.onPanoramaLoad( this._canvas[ 0 ] );

	            }

	        }
	    },

	    /**
	     * Compose panorama
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    composePanorama: function () {

	        this.setProgress( 0, 1 );
			
	        const w = this.levelsW[ this._zoom ];
	        const h = this.levelsH[ this._zoom ];
	        const self = this;
				
	        this._count = 0;
	        this._total = w * h;

	        const { useWebGL } = this._parameters;

	        for( let y = 0; y < h; y++ ) {
	            for( let x = 0; x < w; x++ ) {
	                const url = 'https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&output=tile&zoom=' + this._zoom + '&x=' + x + '&y=' + y + '&panoid=' + this._panoId + '&nbt&fover=2';
	                ( function( x, y ) { 
	                    if( useWebGL ) {
	                        const texture = TextureLoader.load( url, null, function() {
	                            self.composeFromTile( x, y, texture );
	                        } );
	                    } else {
	                        const img = new Image();
	                        img.addEventListener( 'load', function() {
	                            self.composeFromTile( x, y, this );			
	                        } );
	                        img.crossOrigin = '';
	                        img.src = url;
	                    }
	                } )( x, y );
	            }
	        }
			
	    },

	    /**
	     * Load
	     * @param {string} panoid 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    load: function ( panoid ) {

	        this.loadPano( panoid );

	    },

	    /**
	     * Load panorama
	     * @param {string} id
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    loadPano: function( id ) {

	        const self = this;
	        this._panoClient.getPanoramaById( id, function (result, status) {
	            if (status === google.maps.StreetViewStatus.OK) {
	                self.result = result;
	                self.copyright = result.copyright;
	                self._panoId = result.location.pano;
	                self.composePanorama();
	            }
	        });
			
	    },

	    /**
	     * Set zoom level
	     * @param {number} z 
	     * @memberOf GoogleStreetviewLoader
	     * @instance
	     */
	    setZoom: function( z ) {

	        this._zoom = z;
	        this.adaptTextureToZoom();
	    }
		
	} );

	/**
	 * @classdesc Google streetview panorama
	 * @description [How to get Panorama ID]{@link http://stackoverflow.com/questions/29916149/google-maps-streetview-how-to-get-panorama-id}
	 * @constructor
	 * @param {string} panoId - Panorama id from Google Streetview 
	 * @param {string} [apiKey] - Google Street View API Key
	 */
	function GoogleStreetviewPanorama ( panoId, apiKey ) {

	    ImagePanorama.call( this );

	    this.panoId = panoId;

	    this.gsvLoader = null;

	    this.loadRequested = false;

	    this.setupGoogleMapAPI( apiKey );

	}

	GoogleStreetviewPanorama.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

	    constructor: GoogleStreetviewPanorama,

	    /**
	     * Load Google Street View by panorama id
	     * @param {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    load: function ( panoId ) {

	        this.loadRequested = true;

	        panoId = ( panoId || this.panoId ) || {};

	        if ( panoId && this.gsvLoader ) {

	            this.loadGSVLoader( panoId );

	        }

	    },

	    /**
	     * Setup Google Map API
	     * @param {string}  apiKey
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setupGoogleMapAPI: function ( apiKey ) {

	        const script = document.createElement( 'script' );
	        script.src = 'https://maps.googleapis.com/maps/api/js?';
	        script.src += apiKey ? 'key=' + apiKey : '';
	        script.onreadystatechange = this.setGSVLoader.bind( this );
	        script.onload = this.setGSVLoader.bind( this );

	        document.querySelector( 'head' ).appendChild( script );

	    },

	    /**
	     * Set GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    setGSVLoader: function () {

	        this.gsvLoader = new GoogleStreetviewLoader();

	        if ( this.loadRequested ) {

	            this.load();

	        }

	    },

	    /**
	     * Get GSV Loader
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     * @return {GoogleStreetviewLoader} GSV Loader instance
	     */
	    getGSVLoader: function () {

	        return this.gsvLoader;

	    },

	    /**
	     * Load GSV Loader
	     * @param  {string} panoId - Gogogle Street View panorama id
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    loadGSVLoader: function ( panoId ) {

	        this.loadRequested = false;

	        this.gsvLoader.onProgress = this.onProgress.bind( this );

	        this.gsvLoader.onPanoramaLoad = this.onLoad.bind( this );

	        this.gsvLoader.setZoom( this.getZoomLevel() );

	        this.gsvLoader.load( panoId );

	        this.gsvLoader.loaded = true;
	    },

	    /**
	     * This will be called when panorama is loaded
	     * @param  {HTMLCanvasElement} canvas - Canvas where the tiles have been drawn
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    onLoad: function ( canvas ) {

	        ImagePanorama.prototype.onLoad.call( this, new THREE.Texture( canvas ) );

	    },

	    /**
	     * Reset
	     * @memberOf GoogleStreetviewPanorama
	     * @instance
	     */
	    reset: function () {

	        this.gsvLoader = undefined;

	        ImagePanorama.prototype.reset.call( this );

	    }

	} );

	/**
	 * Stereographic projection shader
	 * based on http://notlion.github.io/streetview-stereographic
	 * @author pchen66
	 */

	/**
	 * @description Stereograhpic Shader
	 * @module StereographicShader
	 * @property {object} uniforms
	 * @property {THREE.Texture} uniforms.tDiffuse diffuse map
	 * @property {number} uniforms.resolution image resolution
	 * @property {THREE.Matrix4} uniforms.transform transformation matrix
	 * @property {number} uniforms.zoom image zoom factor
	 * @property {number} uniforms.opacity image opacity
	 * @property {string} vertexShader vertex shader
	 * @property {string} fragmentShader fragment shader
	 */
	const StereographicShader = {

	    uniforms: {

	        'tDiffuse': { value: new THREE.Texture() },
	        'resolution': { value: 1.0 },
	        'transform': { value: new THREE.Matrix4() },
	        'zoom': { value: 1.0 },
	        'opacity': { value: 1.0 }

	    },

	    vertexShader: [

	        'varying vec2 vUv;',

	        'void main() {',

	        'vUv = uv;',
	        'gl_Position = vec4( position, 1.0 );',

	        '}' 

	    ].join( '\n' ),

	    fragmentShader: [

	        'uniform sampler2D tDiffuse;',
	        'uniform float resolution;',
	        'uniform mat4 transform;',
	        'uniform float zoom;',
	        'uniform float opacity;',

	        'varying vec2 vUv;',

	        'const float PI = 3.141592653589793;',

	        'void main(){',

	        'vec2 position = -1.0 +  2.0 * vUv;',

	        'position *= vec2( zoom * resolution, zoom * 0.5 );',

	        'float x2y2 = position.x * position.x + position.y * position.y;',
	        'vec3 sphere_pnt = vec3( 2. * position, x2y2 - 1. ) / ( x2y2 + 1. );',

	        'sphere_pnt = vec3( transform * vec4( sphere_pnt, 1.0 ) );',

	        'vec2 sampleUV = vec2(',
	        '(atan(sphere_pnt.y, sphere_pnt.x) / PI + 1.0) * 0.5,',
	        '(asin(sphere_pnt.z) / PI + 0.5)',
	        ');',

	        'gl_FragColor = texture2D( tDiffuse, sampleUV );',

	        'gl_FragColor.a *= opacity;',

	        '}'

	    ].join( '\n' )

	};

	/**
	 * @classdesc Little Planet
	 * @constructor
	 * @param {string} type 		- Type of little planet basic class
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	function LittlePlanet ( type = 'image', source, size = 10000, ratio = 0.5 ) {

	    if ( type === 'image' ) {

	        ImagePanorama.call( this, source, this.createGeometry( size, ratio ), this.createMaterial( size ) );

	    }

	    this.size = size;
	    this.ratio = ratio;
	    this.EPS = 0.000001;
	    this.frameId = null;

	    this.dragging = false;
	    this.userMouse = new THREE.Vector2();

	    this.quatA = new THREE.Quaternion();
	    this.quatB = new THREE.Quaternion();
	    this.quatCur = new THREE.Quaternion();
	    this.quatSlerp = new THREE.Quaternion();

	    this.vectorX = new THREE.Vector3( 1, 0, 0 );
	    this.vectorY = new THREE.Vector3( 0, 1, 0 );

	    this.addEventListener( 'window-resize', this.onWindowResize );

	}

	LittlePlanet.prototype = Object.assign( Object.create( ImagePanorama.prototype ), {

	    constructor: LittlePlanet,

	    add: function ( object ) {

	        if ( arguments.length > 1 ) {
				
	            for ( let i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        if ( object instanceof Infospot ) {

	            object.material.depthTest = false;
				
	        }

	        ImagePanorama.prototype.add.call( this, object );

	    },

	    createGeometry: function ( size, ratio ) {

	        return new THREE.PlaneBufferGeometry( size, size * ratio );

	    },

	    createMaterial: function ( size ) {

	        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

	        uniforms.zoom.value = size;
	        uniforms.opacity.value = 0.0;

	        return new THREE.ShaderMaterial( {

	            uniforms: uniforms,
	            vertexShader: shader.vertexShader,
	            fragmentShader: shader.fragmentShader,
	            side: THREE.BackSide,
	            transparent: true

	        } );
			
	    },

	    registerMouseEvents: function () {

	        this.container.addEventListener( 'mousedown', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousemove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mouseup', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchstart', this.onMouseDown.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchmove', this.onMouseMove.bind( this ), { passive: true } );
	        this.container.addEventListener( 'touchend', this.onMouseUp.bind( this ), { passive: true } );
	        this.container.addEventListener( 'mousewheel', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), { passive: false } );
	        this.container.addEventListener( 'contextmenu', this.onContextMenu.bind( this ), { passive: true } );
			
	    },

	    unregisterMouseEvents: function () {

	        this.container.removeEventListener( 'mousedown', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'mousemove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'mouseup', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'touchstart', this.onMouseDown.bind( this ), false );
	        this.container.removeEventListener( 'touchmove', this.onMouseMove.bind( this ), false );
	        this.container.removeEventListener( 'touchend', this.onMouseUp.bind( this ), false );
	        this.container.removeEventListener( 'mousewheel', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'DOMMouseScroll', this.onMouseWheel.bind( this ), false );
	        this.container.removeEventListener( 'contextmenu', this.onContextMenu.bind( this ), false );
			
	    },

	    onMouseDown: function ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            this.dragging = true;
	            this.userMouse.set( x, y );

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );
	            this.userMouse.pinchDistance = distance;

	            break;

	        default:

	            break;

	        }

	        this.onUpdateCallback();

	    },

	    onMouseMove: function ( event ) {

	        const inputCount = ( event.touches && event.touches.length ) || 1 ;

	        switch ( inputCount ) {

	        case 1:

	            const x = ( event.clientX >= 0 ) ? event.clientX : event.touches[ 0 ].clientX;
	            const y = ( event.clientY >= 0 ) ? event.clientY : event.touches[ 0 ].clientY;

	            const angleX = THREE.Math.degToRad( x - this.userMouse.x ) * 0.4;
	            const angleY = THREE.Math.degToRad( y - this.userMouse.y ) * 0.4;

	            if ( this.dragging ) {
	                this.quatA.setFromAxisAngle( this.vectorY, angleX );
	                this.quatB.setFromAxisAngle( this.vectorX, angleY );
	                this.quatCur.multiply( this.quatA ).multiply( this.quatB );
	                this.userMouse.set( x, y );
	            }

	            break;

	        case 2:

	            const dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            const dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            const distance = Math.sqrt( dx * dx + dy * dy );

	            this.addZoomDelta( this.userMouse.pinchDistance - distance );

	            break;

	        default:

	            break;

	        }

	    },

	    onMouseUp: function () {

	        this.dragging = false;

	    },

	    onMouseWheel: function ( event ) {

	        event.preventDefault();
	        event.stopPropagation();

	        let delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }

	        this.addZoomDelta( delta );
	        this.onUpdateCallback();

	    },

	    addZoomDelta: function ( delta ) {

	        const uniforms = this.material.uniforms;
	        const lowerBound = this.size * 0.1;
	        const upperBound = this.size * 10;

	        uniforms.zoom.value += delta;

	        if ( uniforms.zoom.value <= lowerBound ) {

	            uniforms.zoom.value = lowerBound;

	        } else if ( uniforms.zoom.value >= upperBound ) {

	            uniforms.zoom.value = upperBound;

	        }

	    },

	    onUpdateCallback: function () {

	        this.frameId = window.requestAnimationFrame( this.onUpdateCallback.bind( this ) );

	        this.quatSlerp.slerp( this.quatCur, 0.1 );

	        if ( this.material ) {

	            this.material.uniforms.transform.value.makeRotationFromQuaternion( this.quatSlerp );

	        }
	        
	        if ( !this.dragging && 1.0 - this.quatSlerp.clone().dot( this.quatCur ) < this.EPS ) {
				
	            window.cancelAnimationFrame( this.frameId );

	        }

	    },

	    reset: function () {

	        this.quatCur.set( 0, 0, 0, 1 );
	        this.quatSlerp.set( 0, 0, 0, 1 );
	        this.onUpdateCallback();

	    },

	    onLoad: function ( texture ) {

	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

	        this.registerMouseEvents();
	        this.onUpdateCallback();
			
	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'disableControl' } );

	        ImagePanorama.prototype.onLoad.call( this, texture );
			
	    },

	    onLeave: function () {

	        this.unregisterMouseEvents();

	        this.dispatchEvent( { type: 'panolens-viewer-handler', method: 'enableControl', data: CONTROLS.ORBIT } );

	        window.cancelAnimationFrame( this.frameId );

	        ImagePanorama.prototype.onLeave.call( this );
			
	    },

	    onWindowResize: function () {

	        this.material.uniforms.resolution.value = this.container.clientWidth / this.container.clientHeight;

	    },

	    onContextMenu: function () {

	        this.dragging = false;

	    },

	    dispose: function () {	

	        this.unregisterMouseEvents();

	        ImagePanorama.prototype.dispose.call( this );

	    }

	});

	/**
	 * @classdesc Image Little Planet
	 * @constructor
	 * @param {string} source 		- URL for the image source
	 * @param {number} [size=10000] - Size of plane geometry
	 * @param {number} [ratio=0.5]  - Ratio of plane geometry's height against width
	 */
	function ImageLittlePlanet ( source, size, ratio ) {

	    LittlePlanet.call( this, 'image', source, size, ratio );

	}

	ImageLittlePlanet.prototype = Object.assign( Object.create( LittlePlanet.prototype ), {

	    constructor: ImageLittlePlanet,

	    /**
	     * On loaded with texture
	     * @param {THREE.Texture} texture
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    onLoad: function ( texture ) {

	        this.updateTexture( texture );

	        LittlePlanet.prototype.onLoad.call( this, texture );

	    },
	    
	    /**
	     * Update texture
	     * @param {THREE.Texture} texture 
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    updateTexture: function ( texture ) {

	        texture.minFilter = texture.magFilter = THREE.LinearFilter;
			
	        this.material.uniforms[ 'tDiffuse' ].value = texture;

	    },

	    /**
	     * Dispose
	     * @memberOf ImageLittlePlanet
	     * @instance
	     */
	    dispose: function () {

	        const tDiffuse = this.material.uniforms[ 'tDiffuse' ];

	        if ( tDiffuse && tDiffuse.value ) {

	            tDiffuse.value.dispose();

	        }

	        LittlePlanet.prototype.dispose.call( this );

	    }

	} );

	/**
	 * @classdesc Camera panorama
	 * @description See {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints|MediaStreamConstraints} for constraints
	 * @param {object} - camera constraints
	 * @constructor
	 */
	function CameraPanorama ( constraints ) {

	    const radius = 5000;
	    const geometry = new THREE.SphereBufferGeometry( radius, 60, 40 );
	    const material = new THREE.MeshBasicMaterial( { visible: false });

	    Panorama.call( this, geometry, material );

	    this.media = new Media( constraints );
	    this.radius = radius;

	    this.addEventListener( 'enter', this.start.bind( this ) );
	    this.addEventListener( 'leave', this.stop.bind( this ) );
	    this.addEventListener( 'panolens-container', this.onPanolensContainer.bind( this ) );
	    this.addEventListener( 'panolens-scene', this.onPanolensScene.bind( this ) );

	}

	CameraPanorama.prototype = Object.assign( Object.create( Panorama.prototype ), {

	    constructor: CameraPanorama,

	    /**
	     * On container event
	     * @param {object} event
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensContainer: function ( { container } ) {

	        this.media.setContainer( container );

	    },

	    /**
	     * On scene event
	     * @param {object} event 
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    onPanolensScene: function ( { scene } ) {

	        this.media.setScene( scene );

	    },

	    /**
	     * Start camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     * @returns {Promise}
	     */
	    start: function () {

	        return this.media.start();

	    },

	    /**
	     * Stop camera streaming
	     * @memberOf CameraPanorama
	     * @instance
	     */
	    stop: function () {

	        this.media.stop();

	    },

	} );

	/**
	 * @classdesc Orbit Controls
	 * @constructor
	 * @external OrbitControls
	 * @param {THREE.Object} object 
	 * @param {HTMLElement} domElement 
	 */
	function OrbitControls ( object, domElement ) {

	    this.object = object;
	    this.domElement = ( domElement !== undefined ) ? domElement : document;
	    this.frameId = null;

	    // API

	    // Set to false to disable this control
	    this.enabled = true;

	    /*
	     * "target" sets the location of focus, where the control orbits around
	     * and where it pans with respect to.
	     */
	    this.target = new THREE.Vector3();

	    // center is old, deprecated; use "target" instead
	    this.center = this.target;

	    /*
	     * This option actually enables dollying in and out; left as "zoom" for
	     * backwards compatibility
	     */
	    this.noZoom = false;
	    this.zoomSpeed = 1.0;

	    // Limits to how far you can dolly in and out ( PerspectiveCamera only )
	    this.minDistance = 0;
	    this.maxDistance = Infinity;

	    // Limits to how far you can zoom in and out ( OrthographicCamera only )
	    this.minZoom = 0;
	    this.maxZoom = Infinity;

	    // Set to true to disable this control
	    this.noRotate = false;
	    this.rotateSpeed = -0.15;

	    // Set to true to disable this control
	    this.noPan = true;
	    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	    // Set to true to automatically rotate around the target
	    this.autoRotate = false;
	    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	    /*
	     * How far you can orbit vertically, upper and lower limits.
	     * Range is 0 to Math.PI radians.
	     */
	    this.minPolarAngle = 0; // radians
	    this.maxPolarAngle = Math.PI; // radians

	    // Momentum
	  	this.momentumDampingFactor = 0.90;
	  	this.momentumScalingFactor = -0.005;
	  	this.momentumKeydownFactor = 20;

	  	// Fov
	  	this.minFov = 30;
	  	this.maxFov = 120;

	    /*
	     * How far you can orbit horizontally, upper and lower limits.
	     * If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	     */
	    this.minAzimuthAngle = - Infinity; // radians
	    this.maxAzimuthAngle = Infinity; // radians

	    // Set to true to disable use of the keys
	    this.noKeys = false;

	    // The four arrow keys
	    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	    // Mouse buttons
	    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	    /*
	     * //////////
	     * internals
	     */

	    var scope = this;

	    var EPS = 10e-8;
	    var MEPS = 10e-5;

	    var rotateStart = new THREE.Vector2();
	    var rotateEnd = new THREE.Vector2();
	    var rotateDelta = new THREE.Vector2();

	    var panStart = new THREE.Vector2();
	    var panEnd = new THREE.Vector2();
	    var panDelta = new THREE.Vector2();
	    var panOffset = new THREE.Vector3();

	    var offset = new THREE.Vector3();

	    var dollyStart = new THREE.Vector2();
	    var dollyEnd = new THREE.Vector2();
	    var dollyDelta = new THREE.Vector2();

	    var theta = 0;
	    var phi = 0;
	    var phiDelta = 0;
	    var thetaDelta = 0;
	    var scale = 1;
	    var pan = new THREE.Vector3();

	    var lastPosition = new THREE.Vector3();
	    var lastQuaternion = new THREE.Quaternion();

	    var momentumLeft = 0, momentumUp = 0;
	    var eventPrevious;
	    var momentumOn = false;

	    var keyUp, keyBottom, keyLeft, keyRight;

	    var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	    var state = STATE.NONE;

	    // for reset

	    this.target0 = this.target.clone();
	    this.position0 = this.object.position.clone();
	    this.zoom0 = this.object.zoom;

	    // so camera.up is the orbit axis

	    var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
	    var quatInverse = quat.clone().inverse();

	    // events

	    var changeEvent = { type: 'change' };
	    var startEvent = { type: 'start' };
	    var endEvent = { type: 'end' };

	    this.setLastQuaternion = function ( quaternion ) {
	        lastQuaternion.copy( quaternion );
	        scope.object.quaternion.copy( quaternion );
	    };

	    this.getLastPosition = function () {
	        return lastPosition;
	    };

	    this.rotateLeft = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        thetaDelta -= angle;


	    };

	    this.rotateUp = function ( angle ) {

	        if ( angle === undefined ) {

	            angle = getAutoRotationAngle();

	        }

	        phiDelta -= angle;

	    };

	    // pass in distance in world space to move left
	    this.panLeft = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get X column of matrix
	        panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
	        panOffset.multiplyScalar( - distance );

	        pan.add( panOffset );

	    };

	    // pass in distance in world space to move up
	    this.panUp = function ( distance ) {

	        var te = this.object.matrix.elements;

	        // get Y column of matrix
	        panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
	        panOffset.multiplyScalar( distance );

	        pan.add( panOffset );

	    };

	    /*
	     * pass in x,y of change desired in pixel space,
	     * right and down are positive
	     */
	    this.pan = function ( deltaX, deltaY ) {

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            // perspective
	            var position = scope.object.position;
	            var offset = position.clone().sub( scope.target );
	            var targetDistance = offset.length();

	            // half of the fov is center to top of screen
	            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

	            // we actually don't use screenWidth, since perspective camera is fixed to screen height
	            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
	            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            // orthographic
	            scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
	            scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

	        } else {

	            // camera neither orthographic or perspective
	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

	        }

	    };

	    this.momentum = function(){
			
	        if ( !momentumOn ) return;

	        if ( Math.abs( momentumLeft ) < MEPS && Math.abs( momentumUp ) < MEPS ) { 

	            momentumOn = false; 
	            return;
	        }

	        momentumUp   *= this.momentumDampingFactor;
	        momentumLeft *= this.momentumDampingFactor;

	        thetaDelta -= this.momentumScalingFactor * momentumLeft;
	        phiDelta   -= this.momentumScalingFactor * momentumUp;

	    };

	    this.dollyIn = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            scale /= dollyScale;

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom * dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.dollyOut = function ( dollyScale ) {

	        if ( dollyScale === undefined ) {

	            dollyScale = getZoomScale();

	        }

	        if ( scope.object instanceof THREE.PerspectiveCamera ) {

	            scale *= dollyScale;

	        } else if ( scope.object instanceof THREE.OrthographicCamera ) {

	            scope.object.zoom = Math.max( this.minZoom, Math.min( this.maxZoom, this.object.zoom / dollyScale ) );
	            scope.object.updateProjectionMatrix();
	            scope.dispatchEvent( changeEvent );

	        } else {

	            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );

	        }

	    };

	    this.update = function ( ignoreUpdate ) {

	        var position = this.object.position;

	        offset.copy( position ).sub( this.target );

	        // rotate offset to "y-axis-is-up" space
	        offset.applyQuaternion( quat );

	        // angle from z-axis around y-axis

	        theta = Math.atan2( offset.x, offset.z );

	        // angle from y-axis

	        phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

	        if ( this.autoRotate && state === STATE.NONE ) {

	            this.rotateLeft( getAutoRotationAngle() );

	        }

	        this.momentum();

	        theta += thetaDelta;
	        phi += phiDelta;

	        // restrict theta to be between desired limits
	        theta = Math.max( this.minAzimuthAngle, Math.min( this.maxAzimuthAngle, theta ) );

	        // restrict phi to be between desired limits
	        phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

	        // restrict phi to be betwee EPS and PI-EPS
	        phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

	        var radius = offset.length() * scale;

	        // restrict radius to be between desired limits
	        radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

	        // move target to panned location
	        this.target.add( pan );

	        offset.x = radius * Math.sin( phi ) * Math.sin( theta );
	        offset.y = radius * Math.cos( phi );
	        offset.z = radius * Math.sin( phi ) * Math.cos( theta );

	        // rotate offset back to "camera-up-vector-is-up" space
	        offset.applyQuaternion( quatInverse );

	        position.copy( this.target ).add( offset );

	        this.object.lookAt( this.target );

	        thetaDelta = 0;
	        phiDelta = 0;
	        scale = 1;
	        pan.set( 0, 0, 0 );

	        /*
	         * update condition is:
	         * min(camera displacement, camera rotation in radians)^2 > EPS
	         * using small-angle approximation cos(x/2) = 1 - x^2 / 8
	         */
	        if ( lastPosition.distanceToSquared( this.object.position ) > EPS
			    || 8 * (1 - lastQuaternion.dot(this.object.quaternion)) > EPS ) {

	            if ( ignoreUpdate !== true ) { this.dispatchEvent( changeEvent ); }

	            lastPosition.copy( this.object.position );
	            lastQuaternion.copy (this.object.quaternion );

	        }

	    };


	    this.reset = function () {

	        state = STATE.NONE;

	        this.target.copy( this.target0 );
	        this.object.position.copy( this.position0 );
	        this.object.zoom = this.zoom0;

	        this.object.updateProjectionMatrix();
	        this.dispatchEvent( changeEvent );

	        this.update();

	    };

	    this.getPolarAngle = function () {

	        return phi;

	    };

	    this.getAzimuthalAngle = function () {

	        return theta;

	    };

	    function getAutoRotationAngle() {

	        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	    }

	    function getZoomScale() {

	        return Math.pow( 0.95, scope.zoomSpeed );

	    }

	    function onMouseDown( event ) {

	        momentumOn = false;

	   		momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;
	        event.preventDefault();

	        if ( event.button === scope.mouseButtons.ORBIT ) {
	            if ( scope.noRotate === true ) return;

	            state = STATE.ROTATE;

	            rotateStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.ZOOM ) {
	            if ( scope.noZoom === true ) return;

	            state = STATE.DOLLY;

	            dollyStart.set( event.clientX, event.clientY );

	        } else if ( event.button === scope.mouseButtons.PAN ) {
	            if ( scope.noPan === true ) return;

	            state = STATE.PAN;

	            panStart.set( event.clientX, event.clientY );

	        }

	        if ( state !== STATE.NONE ) {
	            document.addEventListener( 'mousemove', onMouseMove, false );
	            document.addEventListener( 'mouseup', onMouseUp, false );
	            scope.dispatchEvent( startEvent );
	        }

	        scope.update();

	    }

	    function onMouseMove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        if ( state === STATE.ROTATE ) {

	            if ( scope.noRotate === true ) return;

	            rotateEnd.set( event.clientX, event.clientY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.clientX - eventPrevious.clientX;
	                momentumUp = event.clientY - eventPrevious.clientY;
	            }

	            eventPrevious = event;

	        } else if ( state === STATE.DOLLY ) {

	            if ( scope.noZoom === true ) return;

	            dollyEnd.set( event.clientX, event.clientY );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y > 0 ) {

	                scope.dollyIn();

	            } else if ( dollyDelta.y < 0 ) {

	                scope.dollyOut();

	            }

	            dollyStart.copy( dollyEnd );

	        } else if ( state === STATE.PAN ) {

	            if ( scope.noPan === true ) return;

	            panEnd.set( event.clientX, event.clientY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	        }

	        if ( state !== STATE.NONE ) scope.update();

	    }

	    function onMouseUp( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        document.removeEventListener( 'mousemove', onMouseMove, false );
	        document.removeEventListener( 'mouseup', onMouseUp, false );
	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    function onMouseWheel( event ) {

	        if ( scope.enabled === false || scope.noZoom === true || state !== STATE.NONE ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var delta = 0;

	        if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

	            delta = event.wheelDelta;

	        } else if ( event.detail !== undefined ) { // Firefox

	            delta = - event.detail;

	        }

	        if ( delta > 0 ) {

	            // scope.dollyOut();
	            scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                ? scope.object.fov + 1
	                : scope.maxFov;
	            scope.object.updateProjectionMatrix();

	        } else if ( delta < 0 ) {

	            // scope.dollyIn();
	            scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                ? scope.object.fov - 1
	                : scope.minFov;
	            scope.object.updateProjectionMatrix();

	        }

	        scope.update();
	        scope.dispatchEvent( changeEvent );
	        scope.dispatchEvent( startEvent );
	        scope.dispatchEvent( endEvent );

	    }

	    function onKeyUp ( event ) {

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = false;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = false;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = false;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = false;
	            break;

	        }

	    }

	    function onKeyDown( event ) {

	        if ( scope.enabled === false || scope.noKeys === true || scope.noRotate === true ) return;

	        switch ( event.keyCode ) {

	        case scope.keys.UP:
	            keyUp = true;
	            break;

	        case scope.keys.BOTTOM:
	            keyBottom = true;
	            break;

	        case scope.keys.LEFT:
	            keyLeft = true;
	            break;

	        case scope.keys.RIGHT:
	            keyRight = true;
	            break;

	        }

	        if (keyUp || keyBottom || keyLeft || keyRight) {

	            momentumOn = true;

	            if (keyUp) momentumUp = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyBottom) momentumUp = scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyLeft) momentumLeft = - scope.rotateSpeed * scope.momentumKeydownFactor;
	            if (keyRight) momentumLeft = scope.rotateSpeed * scope.momentumKeydownFactor;

	        }

	    }

	    function touchstart( event ) {

	        momentumOn = false;

	        momentumLeft = momentumUp = 0;

	        if ( scope.enabled === false ) return;

	        switch ( event.touches.length ) {

	        case 1:	// one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;

	            state = STATE.TOUCH_ROTATE;

	            rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        case 2:	// two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;

	            state = STATE.TOUCH_DOLLY;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyStart.set( 0, distance );

	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;

	            state = STATE.TOUCH_PAN;

	            panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            break;

	        default:

	            state = STATE.NONE;

	        }

	        if ( state !== STATE.NONE ) scope.dispatchEvent( startEvent );

	    }

	    function touchmove( event ) {

	        if ( scope.enabled === false ) return;

	        event.preventDefault();
	        event.stopPropagation();

	        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

	        switch ( event.touches.length ) {

	        case 1: // one-fingered touch: rotate

	            if ( scope.noRotate === true ) return;
	            if ( state !== STATE.TOUCH_ROTATE ) return;

	            rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            rotateDelta.subVectors( rotateEnd, rotateStart );

	            // rotating across whole screen goes 360 degrees around
	            scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
	            // rotating up and down along whole screen attempts to go 360, but limited to 180
	            scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

	            rotateStart.copy( rotateEnd );

	            if( eventPrevious ){
	                momentumLeft = event.touches[ 0 ].pageX - eventPrevious.pageX;
	                momentumUp = event.touches[ 0 ].pageY - eventPrevious.pageY;
	            }

	            eventPrevious = {
	                pageX: event.touches[ 0 ].pageX,
	                pageY: event.touches[ 0 ].pageY,
	            };

	            scope.update();
	            break;

	        case 2: // two-fingered touch: dolly

	            if ( scope.noZoom === true ) return;
	            if ( state !== STATE.TOUCH_DOLLY ) return;

	            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
	            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
	            var distance = Math.sqrt( dx * dx + dy * dy );

	            dollyEnd.set( 0, distance );
	            dollyDelta.subVectors( dollyEnd, dollyStart );

	            if ( dollyDelta.y < 0 ) {

	                scope.object.fov = ( scope.object.fov < scope.maxFov ) 
	                    ? scope.object.fov + 1
	                    : scope.maxFov;
	                scope.object.updateProjectionMatrix();

	            } else if ( dollyDelta.y > 0 ) {

	                scope.object.fov = ( scope.object.fov > scope.minFov ) 
	                    ? scope.object.fov - 1
	                    : scope.minFov;
	                scope.object.updateProjectionMatrix();

	            }

	            dollyStart.copy( dollyEnd );

	            scope.update();
	            scope.dispatchEvent( changeEvent );
	            break;

	        case 3: // three-fingered touch: pan

	            if ( scope.noPan === true ) return;
	            if ( state !== STATE.TOUCH_PAN ) return;

	            panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
	            panDelta.subVectors( panEnd, panStart );

	            scope.pan( panDelta.x, panDelta.y );

	            panStart.copy( panEnd );

	            scope.update();
	            break;

	        default:

	            state = STATE.NONE;

	        }

	    }

	    function touchend( /* event */ ) {

	        momentumOn = true;

	        eventPrevious = undefined;

	        if ( scope.enabled === false ) return;

	        scope.dispatchEvent( endEvent );
	        state = STATE.NONE;

	    }

	    this.dispose = function() {

	        this.domElement.removeEventListener( 'mousedown', onMouseDown );
	        this.domElement.removeEventListener( 'mousewheel', onMouseWheel );
	        this.domElement.removeEventListener( 'DOMMouseScroll', onMouseWheel );

	        this.domElement.removeEventListener( 'touchstart', touchstart );
	        this.domElement.removeEventListener( 'touchend', touchend );
	        this.domElement.removeEventListener( 'touchmove', touchmove );

	        window.removeEventListener( 'keyup', onKeyUp );
	        window.removeEventListener( 'keydown', onKeyDown );

	    };

	    // this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	    this.domElement.addEventListener( 'mousedown', onMouseDown, { passive: false } );
	    this.domElement.addEventListener( 'mousewheel', onMouseWheel, { passive: false } );
	    this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, { passive: false } ); // firefox

	    this.domElement.addEventListener( 'touchstart', touchstart, { passive: false } );
	    this.domElement.addEventListener( 'touchend', touchend, { passive: false } );
	    this.domElement.addEventListener( 'touchmove', touchmove, { passive: false } );

	    window.addEventListener( 'keyup', onKeyUp, { passive: false } );
	    window.addEventListener( 'keydown', onKeyDown, { passive: false } );

	    // force an update at start
	    this.update();

	}
	OrbitControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: OrbitControls

	} );

	/**
	 * @classdesc Device Orientation Control
	 * @constructor
	 * @external DeviceOrientationControls
	 * @param {THREE.Camera} camera 
	 * @param {HTMLElement} domElement 
	 */
	function DeviceOrientationControls ( camera, domElement ) {

	    var scope = this;
	    var changeEvent = { type: 'change' };

	    var rotY = 0;
	    var rotX = 0;
	    var tempX = 0;
	    var tempY = 0;

	    this.camera = camera;
	    this.camera.rotation.reorder( 'YXZ' );
	    this.domElement = ( domElement !== undefined ) ? domElement : document;

	    this.enabled = true;

	    this.deviceOrientation = {};
	    this.screenOrientation = 0;

	    this.alpha = 0;
	    this.alphaOffsetAngle = 0;


	    var onDeviceOrientationChangeEvent = function( event ) {

	        scope.deviceOrientation = event;

	    };

	    var onScreenOrientationChangeEvent = function() {

	        scope.screenOrientation = window.orientation || 0;

	    };

	    var onTouchStartEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    var onTouchMoveEvent = function (event) {

	        event.preventDefault();
	        event.stopPropagation();

	        rotY += THREE.Math.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
	        rotX += THREE.Math.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

	        scope.updateAlphaOffsetAngle( rotY );

	        tempX = event.touches[ 0 ].pageX;
	        tempY = event.touches[ 0 ].pageY;

	    };

	    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

	        var zee = new THREE.Vector3( 0, 0, 1 );

	        var euler = new THREE.Euler();

	        var q0 = new THREE.Quaternion();

	        var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

	        var vectorFingerY;
	        var fingerQY = new THREE.Quaternion();
	        var fingerQX = new THREE.Quaternion();

	        if ( scope.screenOrientation == 0 ) {

	            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        } else if ( scope.screenOrientation == 180 ) {

	            vectorFingerY = new THREE.Vector3( 1, 0, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == 90 ) {

	            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

	        } else if ( scope.screenOrientation == - 90) {

	            vectorFingerY = new THREE.Vector3( 0, 1, 0 );
	            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

	        }

	        q1.multiply( fingerQY );
	        q1.multiply( fingerQX );

	        euler.set( beta, alpha, - gamma, 'YXZ' ); // 'ZXY' for the device, but 'YXZ' for us

	        quaternion.setFromEuler( euler ); // orient the device

	        quaternion.multiply( q1 ); // camera looks out the back of the device, not the top

	        quaternion.multiply( q0.setFromAxisAngle( zee, - orient ) ); // adjust for screen orientation

	    };

	    this.connect = function() {

	        onScreenOrientationChangeEvent(); // run once on load

	        window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, { passive: true } );
	        window.addEventListener( 'deviceorientation', this.update.bind( this ), { passive: true } );

	        scope.domElement.addEventListener( 'touchstart', onTouchStartEvent, { passive: false } );
	        scope.domElement.addEventListener( 'touchmove', onTouchMoveEvent, { passive: false } );

	        scope.enabled = true;

	    };

	    this.disconnect = function() {

	        window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );
	        window.removeEventListener( 'deviceorientation', this.update.bind( this ), false );

	        scope.domElement.removeEventListener( 'touchstart', onTouchStartEvent, false );
	        scope.domElement.removeEventListener( 'touchmove', onTouchMoveEvent, false );

	        scope.enabled = false;

	    };

	    this.update = function( ignoreUpdate ) {

	        if ( scope.enabled === false ) return;

	        var alpha = scope.deviceOrientation.alpha ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
	        var beta = scope.deviceOrientation.beta ? THREE.Math.degToRad( scope.deviceOrientation.beta ) : 0; // X'
	        var gamma = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
	        var orient = scope.screenOrientation ? THREE.Math.degToRad( scope.screenOrientation ) : 0; // O

	        setCameraQuaternion( scope.camera.quaternion, alpha, beta, gamma, orient );
	        scope.alpha = alpha;

	        if ( ignoreUpdate !== true ) { scope.dispatchEvent( changeEvent ); }

	    };

	    this.updateAlphaOffsetAngle = function( angle ) {

	        this.alphaOffsetAngle = angle;
	        this.update();

	    };

	    this.dispose = function() {

	        this.disconnect();

	    };

	    this.connect();

	}
	DeviceOrientationControls.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype), {

	    constructor: DeviceOrientationControls

	} );

	/**
	 * @classdesc Google Cardboard Effect Composer
	 * @constructor
	 * @external CardboardEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	function CardboardEffect ( renderer ) {

	    var _camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

	    var _scene = new THREE.Scene();

	    var _stereo = new THREE.StereoCamera();
	    _stereo.aspect = 0.5;

	    var _params = { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat };

	    var _renderTarget = new THREE.WebGLRenderTarget( 512, 512, _params );
	    _renderTarget.scissorTest = true;
	    _renderTarget.texture.generateMipmaps = false;

	    /*
	     * Distortion Mesh ported from:
	     * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
	     */

	    var distortion = new THREE.Vector2( 0.441, 0.156 );

	    var geometry = new THREE.PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();

	    var positions = geometry.attributes.position.array;
	    var uvs = geometry.attributes.uv.array;

	    // duplicate
	    geometry.attributes.position.count *= 2;
	    geometry.attributes.uv.count *= 2;

	    var positions2 = new Float32Array( positions.length * 2 );
	    positions2.set( positions );
	    positions2.set( positions, positions.length );

	    var uvs2 = new Float32Array( uvs.length * 2 );
	    uvs2.set( uvs );
	    uvs2.set( uvs, uvs.length );

	    var vector = new THREE.Vector2();
	    var length = positions.length / 3;

	    for ( var i = 0, l = positions2.length / 3; i < l; i ++ ) {

	        vector.x = positions2[ i * 3 + 0 ];
	        vector.y = positions2[ i * 3 + 1 ];

	        var dot = vector.dot( vector );
	        var scalar = 1.5 + ( distortion.x + distortion.y * dot ) * dot;

	        var offset = i < length ? 0 : 1;

	        positions2[ i * 3 + 0 ] = ( vector.x / scalar ) * 1.5 - 0.5 + offset;
	        positions2[ i * 3 + 1 ] = ( vector.y / scalar ) * 3.0;

	        uvs2[ i * 2 ] = ( uvs2[ i * 2 ] + offset ) * 0.5;

	    }

	    geometry.attributes.position.array = positions2;
	    geometry.attributes.uv.array = uvs2;

	    //

	    var material = new THREE.MeshBasicMaterial( { map: _renderTarget.texture } );
	    var mesh = new THREE.Mesh( geometry, material );
	    _scene.add( mesh );

	    //

	    this.setSize = function ( width, height ) {

	        renderer.setSize( width, height );

	        var pixelRatio = renderer.getPixelRatio();

	        _renderTarget.setSize( width * pixelRatio, height * pixelRatio );

	    };

	    this.render = function ( scene, camera ) {

	        scene.updateMatrixWorld();

	        if ( camera.parent === null ) camera.updateMatrixWorld();

	        _stereo.update( camera );

	        var width = _renderTarget.width / 2;
	        var height = _renderTarget.height;

	        if ( renderer.autoClear ) renderer.clear();

	        _renderTarget.scissor.set( 0, 0, width, height );
	        _renderTarget.viewport.set( 0, 0, width, height );
	        renderer.setRenderTarget( _renderTarget );
	        renderer.render( scene, _stereo.cameraL );

	        renderer.clearDepth();

	        _renderTarget.scissor.set( width, 0, width, height );
	        _renderTarget.viewport.set( width, 0, width, height );
	        renderer.setRenderTarget( _renderTarget );
	        renderer.render( scene, _stereo.cameraR );

	        renderer.clearDepth();

	        renderer.setRenderTarget( null );
	        renderer.render( _scene, _camera );
	    };

	}

	/**
	 * @classdesc Stereo Effect Composer
	 * @constructor
	 * @external StereoEffect
	 * @param {THREE.WebGLRenderer} renderer 
	 */
	const StereoEffect = function ( renderer ) {

	    var _stereo = new THREE.StereoCamera();
	    _stereo.aspect = 0.5;
	    var size = new THREE.Vector2();

	    this.setEyeSeparation = function ( eyeSep ) {

	        _stereo.eyeSep = eyeSep;

	    };

	    this.setSize = function ( width, height ) {

	        renderer.setSize( width, height );

	    };

	    this.render = function ( scene, camera ) {

	        scene.updateMatrixWorld();

	        if ( camera.parent === null ) camera.updateMatrixWorld();

	        _stereo.update( camera );

	        renderer.getSize( size );

	        if ( renderer.autoClear ) renderer.clear();
	        renderer.setScissorTest( true );

	        renderer.setScissor( 0, 0, size.width / 2, size.height );
	        renderer.setViewport( 0, 0, size.width / 2, size.height );
	        renderer.render( scene, _stereo.cameraL );

	        renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
	        renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );
	        renderer.render( scene, _stereo.cameraR );

	        renderer.setScissorTest( false );

	    };

	};

	/**
	 * @classdesc Viewer contains pre-defined scene, camera and renderer
	 * @constructor
	 * @param {object} [options] - Use custom or default config options
	 * @param {HTMLElement} [options.container] - A HTMLElement to host the canvas
	 * @param {THREE.Scene} [options.scene=THREE.Scene] - A THREE.Scene which contains panorama and 3D objects
	 * @param {THREE.Camera} [options.camera=THREE.PerspectiveCamera] - A THREE.Camera to view the scene
	 * @param {THREE.WebGLRenderer} [options.renderer=THREE.WebGLRenderer] - A THREE.WebGLRenderer to render canvas
	 * @param {boolean} [options.controlBar=true] - Show/hide control bar on the bottom of the container
	 * @param {array}   [options.controlButtons=[]] - Button names to mount on controlBar if controlBar exists, Defaults to ['fullscreen', 'setting', 'video']
	 * @param {boolean} [options.autoHideControlBar=false] - Auto hide control bar when click on non-active area
	 * @param {boolean} [options.autoHideInfospot=true] - Auto hide infospots when click on non-active area
	 * @param {boolean} [options.horizontalView=false] - Allow only horizontal camera control
	 * @param {number}  [options.clickTolerance=10] - Distance tolerance to tigger click / tap event
	 * @param {number}  [options.cameraFov=60] - Camera field of view value
	 * @param {boolean} [options.reverseDragging=false] - Reverse dragging direction
	 * @param {boolean} [options.enableReticle=false] - Enable reticle for mouseless interaction other than VR mode
	 * @param {number}  [options.dwellTime=1500] - Dwell time for reticle selection in ms
	 * @param {boolean} [options.autoReticleSelect=true] - Auto select a clickable target after dwellTime
	 * @param {boolean} [options.viewIndicator=false] - Adds an angle view indicator in upper left corner
	 * @param {number}  [options.indicatorSize=30] - Size of View Indicator
	 * @param {string}  [options.output='none'] - Whether and where to output raycast position. Could be 'event', 'console' or 'overlay'.
	 * @param {boolean} [options.autoRotate=false] - Auto rotate
	 * @param {number}  [options.autoRotateSpeed=2.0] - Auto rotate speed as in degree per second. Positive is counter-clockwise and negative is clockwise.
	 * @param {number}  [options.autoRotateActivationDuration=5000] - Duration before auto rotatation when no user interactivity in ms
	 */
	function Viewer ( options ) {

	    let container;

	    options = options || {};
	    options.controlBar = options.controlBar !== undefined ? options.controlBar : true;
	    options.controlButtons = options.controlButtons || [ 'fullscreen', 'setting', 'video' ];
	    options.autoHideControlBar = options.autoHideControlBar !== undefined ? options.autoHideControlBar : false;
	    options.autoHideInfospot = options.autoHideInfospot !== undefined ? options.autoHideInfospot : true;
	    options.horizontalView = options.horizontalView !== undefined ? options.horizontalView : false;
	    options.clickTolerance = options.clickTolerance || 10;
	    options.cameraFov = options.cameraFov || 60;
	    options.reverseDragging = options.reverseDragging || false;
	    options.enableReticle = options.enableReticle || false;
	    options.dwellTime = options.dwellTime || 1500;
	    options.autoReticleSelect = options.autoReticleSelect !== undefined ? options.autoReticleSelect : true;
	    options.viewIndicator = options.viewIndicator !== undefined ? options.viewIndicator : false;
	    options.indicatorSize = options.indicatorSize || 30;
	    options.output = options.output ? options.output : 'none';
	    options.autoRotate = options.autoRotate || false;
	    options.autoRotateSpeed = options.autoRotateSpeed || 2.0;
	    options.autoRotateActivationDuration = options.autoRotateActivationDuration || 5000;

	    this.options = options;

	    /*
	     * CSS Icon
	     * const styleLoader = new StyleLoader();
	     * styleLoader.inject( 'icono' );
	     */

	    // Container
	    if ( options.container ) {

	        container = options.container;
	        container._width = container.clientWidth;
	        container._height = container.clientHeight;

	    } else {

	        container = document.createElement( 'div' );
	        container.classList.add( 'panolens-container' );
	        container.style.width = '100%';
	        container.style.height = '100%';
	        container._width = window.innerWidth;
	        container._height = window.innerHeight;
	        document.body.appendChild( container );

	    }

	    this.container = container;

	    this.camera = options.camera || new THREE.PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
	    this.scene = options.scene || new THREE.Scene();
	    this.renderer = options.renderer || new THREE.WebGLRenderer( { alpha: true, antialias: false } );
	    this.sceneReticle = new THREE.Scene();

	    this.viewIndicatorSize = this.options.indicatorSize;

	    this.reticle = {};
	    this.tempEnableReticle = this.options.enableReticle;

	    this.mode = MODES.NORMAL;

	    this.panorama = null;
	    this.widget = null;

	    this.hoverObject = null;
	    this.infospot = null;
	    this.pressEntityObject = null;
	    this.pressObject = null;

	    this.raycaster = new THREE.Raycaster();
	    this.raycasterPoint = new THREE.Vector2();
	    this.userMouse = new THREE.Vector2();
	    this.updateCallbacks = [];
	    this.requestAnimationId = null;

	    this.cameraFrustum = new THREE.Frustum();
	    this.cameraViewProjectionMatrix = new THREE.Matrix4();

	    this.autoRotateRequestId = null;

	    this.outputDivElement = null;

	    this.touchSupported = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;

	    // Handler references
	    this.HANDLER_MOUSE_DOWN = this.onMouseDown.bind( this );
	    this.HANDLER_MOUSE_UP = this.onMouseUp.bind( this );
	    this.HANDLER_MOUSE_MOVE = this.onMouseMove.bind( this );
	    this.HANDLER_WINDOW_RESIZE = this.onWindowResize.bind( this );
	    this.HANDLER_KEY_DOWN = this.onKeyDown.bind( this );
	    this.HANDLER_KEY_UP = this.onKeyUp.bind( this );
	    this.HANDLER_TAP = this.onTap.bind( this, {
	        clientX: this.container.clientWidth / 2,
	        clientY: this.container.clientHeight / 2
	    } );

	    // Flag for infospot output
	    this.OUTPUT_INFOSPOT = false;

	    // Animations
	    this.tweenLeftAnimation = new Tween.Tween();
	    this.tweenUpAnimation = new Tween.Tween();

	    // Renderer
	    this.renderer.setPixelRatio( window.devicePixelRatio );
	    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	    this.renderer.setClearColor( 0x000000, 0 );
	    this.renderer.autoClear = false;

	    // Append Renderer Element to container
	    this.renderer.domElement.classList.add( 'panolens-canvas' );
	    this.renderer.domElement.style.display = 'block';
	    this.container.style.backgroundColor = '#000';
	    this.container.appendChild( this.renderer.domElement );

	    // Camera Controls
	    this.OrbitControls = new OrbitControls( this.camera, this.container );
	    this.OrbitControls.id = 'orbit';
	    this.OrbitControls.minDistance = 1;
	    this.OrbitControls.noPan = true;
	    this.OrbitControls.autoRotate = this.options.autoRotate;
	    this.OrbitControls.autoRotateSpeed = this.options.autoRotateSpeed;

	    this.DeviceOrientationControls = new DeviceOrientationControls( this.camera, this.container );
	    this.DeviceOrientationControls.id = 'device-orientation';
	    this.DeviceOrientationControls.enabled = false;
	    this.camera.position.z = 1;

	    // Register change event if passiveRenering
	    if ( this.options.passiveRendering ) {

	        console.warn( 'passiveRendering is now deprecated' );

	    }

	    // Controls
	    this.controls = [ this.OrbitControls, this.DeviceOrientationControls ];
	    this.control = this.OrbitControls;

	    // Cardboard effect
	    this.CardboardEffect = new CardboardEffect( this.renderer );
	    this.CardboardEffect.setSize( this.container.clientWidth, this.container.clientHeight );

	    // Stereo effect
	    this.StereoEffect = new StereoEffect( this.renderer );
	    this.StereoEffect.setSize( this.container.clientWidth, this.container.clientHeight );

	    this.effect = this.CardboardEffect;

	    // Add default hidden reticle
	    this.addReticle();

	    // Lock horizontal view
	    if ( this.options.horizontalView ) {
	        this.OrbitControls.minPolarAngle = Math.PI / 2;
	        this.OrbitControls.maxPolarAngle = Math.PI / 2;
	    }

	    // Add Control UI
	    if ( this.options.controlBar !== false ) {
	        this.addDefaultControlBar( this.options.controlButtons );
	    }

	    // Add View Indicator
	    if ( this.options.viewIndicator ) {
	        this.addViewIndicator();
	    }

	    // Reverse dragging direction
	    if ( this.options.reverseDragging ) {
	        this.reverseDraggingDirection();
	    }

	    // Register event if reticle is enabled, otherwise defaults to mouse
	    if ( this.options.enableReticle ) {
	        this.enableReticleControl();
	    } else {
	        this.registerMouseAndTouchEvents();
	    }

	    // Output infospot position to an overlay container if specified
	    if ( this.options.output === 'overlay' ) {
	        this.addOutputElement();
	    }

	    // Register dom event listeners
	    this.registerEventListeners();

	    // Animate
	    this.animate.call( this );

	}
	Viewer.prototype = Object.assign( Object.create( THREE.EventDispatcher.prototype ), {

	    constructor: Viewer,

	    /**
	     * Add an object to the scene
	     * Automatically hookup with panolens-viewer-handler listener
	     * to communicate with viewer method
	     * @param {THREE.Object3D} object - The object to be added
	     * @memberOf Viewer
	     * @instance
	     */
	    add: function ( object ) {

	        if ( arguments.length > 1 ) {

	            for ( let i = 0; i < arguments.length; i ++ ) {

	                this.add( arguments[ i ] );

	            }

	            return this;

	        }

	        this.scene.add( object );

	        // All object added to scene has 'panolens-viewer-handler' event to handle viewer communication
	        if ( object.addEventListener ) {

	            object.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

	        }

	        // All object added to scene being passed with container
	        if ( object instanceof Panorama && object.dispatchEvent ) {

	            object.dispatchEvent( { type: 'panolens-container', container: this.container } );

	        }

	        if ( object instanceof CameraPanorama ) {

	            object.dispatchEvent( { type: 'panolens-scene', scene: this.scene } );

	        }

	        // Hookup default panorama event listeners
	        if ( object.type === 'panorama' ) {

	            this.addPanoramaEventListener( object );

	            if ( !this.panorama ) {

	                this.setPanorama( object );

	            }

	        }

	    },

	    /**
	     * Remove an object from the scene
	     * @param  {THREE.Object3D} object - Object to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    remove: function ( object ) {

	        if ( object.removeEventListener ) {

	            object.removeEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );

	        }

	        this.scene.remove( object );

	    },

	    /**
	     * Add default control bar
	     * @param {array} array - The control buttons array
	     * @memberOf Viewer
	     * @instance
	     */
	    addDefaultControlBar: function ( array ) {

	        if ( this.widget ) {

	            console.warn( 'Default control bar exists' );
	            return;

	        }

	        const widget = new Widget( this.container );
	        widget.addEventListener( 'panolens-viewer-handler', this.eventHandler.bind( this ) );
	        widget.addControlBar();
	        array.forEach( buttonName => {

	            widget.addControlButton( buttonName );

	        } );

	        this.widget = widget;

	    },

	    /**
	     * Set a panorama to be the current one
	     * @param {Panorama} pano - Panorama to be set
	     * @memberOf Viewer
	     * @instance
	     */
	    setPanorama: function ( pano ) {

	        const leavingPanorama = this.panorama;

	        if ( pano.type === 'panorama' && leavingPanorama !== pano ) {

	            // Clear exisiting infospot
	            this.hideInfospot();

	            const afterEnterComplete = function () {

	                if ( leavingPanorama ) { leavingPanorama.onLeave(); }
	                pano.removeEventListener( 'enter-fade-start', afterEnterComplete );

	            };

	            pano.addEventListener( 'enter-fade-start', afterEnterComplete );

	            // Assign and enter panorama
	            (this.panorama = pano).onEnter();
				
	        }

	    },

	    /**
	     * Event handler to execute commands from child objects
	     * @param {object} event - The dispatched event with method as function name and data as an argument
	     * @memberOf Viewer
	     * @instance
	     */
	    eventHandler: function ( event ) {

	        if ( event.method && this[ event.method ] ) {

	            this[ event.method ]( event.data );

	        }

	    },

	    /**
	     * Dispatch event to all descendants
	     * @param  {object} event - Event to be passed along
	     * @memberOf Viewer
	     * @instance
	     */
	    dispatchEventToChildren: function ( event ) {

	        this.scene.traverse( function ( object ) {

	            if ( object.dispatchEvent ) {

	                object.dispatchEvent( event );

	            }

	        });

	    },

	    /**
	     * Set widget content
	     * @method activateWidgetItem
	     * @param  {integer} controlIndex - Control index
	     * @param  {integer} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    activateWidgetItem: function ( controlIndex, mode ) {

	        const mainMenu = this.widget.mainMenu;
	        const ControlMenuItem = mainMenu.children[ 0 ];
	        const ModeMenuItem = mainMenu.children[ 1 ];

	        let item;

	        if ( controlIndex !== undefined ) {

	            switch ( controlIndex ) {

	            case 0:

	                item = ControlMenuItem.subMenu.children[ 1 ];

	                break;

	            case 1:

	                item = ControlMenuItem.subMenu.children[ 2 ];

	                break;
						
	            default:

	                item = ControlMenuItem.subMenu.children[ 1 ];

	                break;	

	            }

	            ControlMenuItem.subMenu.setActiveItem( item );
	            ControlMenuItem.setSelectionTitle( item.textContent );

	        }

	        if ( mode !== undefined ) {

	            switch( mode ) {

	            case MODES.CARDBOARD:

	                item = ModeMenuItem.subMenu.children[ 2 ];

	                break;

	            case MODES.STEREO:

	                item = ModeMenuItem.subMenu.children[ 3 ];
						
	                break;

	            default:

	                item = ModeMenuItem.subMenu.children[ 1 ];

	                break;
	            }

	            ModeMenuItem.subMenu.setActiveItem( item );
	            ModeMenuItem.setSelectionTitle( item.textContent );

	        }

	    },

	    /**
	     * Enable rendering effect
	     * @param  {MODES} mode - Modes for effects
	     * @memberOf Viewer
	     * @instance
	     */
	    enableEffect: function ( mode ) {

	        if ( this.mode === mode ) { return; }
	        if ( mode === MODES.NORMAL ) { this.disableEffect(); return; }
	        else { this.mode = mode; }

	        const fov = this.camera.fov;

	        switch( mode ) {

	        case MODES.CARDBOARD:

	            this.effect = this.CardboardEffect;
	            this.enableReticleControl();

	            break;

	        case MODES.STEREO:

	            this.effect = this.StereoEffect;
	            this.enableReticleControl();
					
	            break;

	        default:

	            this.effect = null;
	            this.disableReticleControl();

	            break;

	        }

	        this.activateWidgetItem( undefined, this.mode );

	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

	        // Force effect stereo camera to update by refreshing fov
	        this.camera.fov = fov + 10e-3;
	        this.effect.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();
	        this.camera.fov = fov;

	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );

	    },

	    /**
	     * Disable additional rendering effect
	     * @memberOf Viewer
	     * @instance
	     */
	    disableEffect: function () {

	        if ( this.mode === MODES.NORMAL ) { return; }

	        this.mode = MODES.NORMAL;
	        this.disableReticleControl();

	        this.activateWidgetItem( undefined, this.mode );

	        /**
	         * Dual eye effect event
	         * @type {object}
	         * @event Infospot#panolens-dual-eye-effect
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEventToChildren( { type: 'panolens-dual-eye-effect', mode: this.mode } );

	        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
	        this.render();

	        /**
	         * Dispatch mode change event
	         * @type {object}
	         * @event Viewer#mode-change
	         * @property {MODES} mode - Current display mode
	         */
	        this.dispatchEvent( { type: 'mode-change', mode: this.mode } );
	    },

	    /**
	     * Enable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableReticleControl: function () {

	        if ( this.reticle.visible ) { return; }

	        this.tempEnableReticle = true;

	        // Register reticle event and unregister mouse event
	        this.unregisterMouseAndTouchEvents();
	        this.reticle.show();
	        this.registerReticleEvent();
	        this.updateReticleEvent();

	    },

	    /**
	     * Disable reticle control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableReticleControl: function () {

	        this.tempEnableReticle = false;

	        // Register mouse event and unregister reticle event
	        if ( !this.options.enableReticle ) {

	            this.reticle.hide();
	            this.unregisterReticleEvent();
	            this.registerMouseAndTouchEvents();

	        } else {

	            this.updateReticleEvent();

	        }

	    },

	    /**
	     * Enable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    enableAutoRate: function () {

	        this.options.autoRotate = true;
	        this.OrbitControls.autoRotate = true;

	    },

	    /**
	     * Disable auto rotation
	     * @memberOf Viewer
	     * @instance
	     */
	    disableAutoRate: function () {

	        clearTimeout( this.autoRotateRequestId );
	        this.options.autoRotate = false;
	        this.OrbitControls.autoRotate = false;

	    },

	    /**
	     * Toggle video play or stop
	     * @param {boolean} pause
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-toggle
	     */
	    toggleVideoPlay: function ( pause ) {

	        if ( this.panorama instanceof VideoPanorama ) {

	            /**
	             * Toggle video event
	             * @type {object}
	             * @event Viewer#video-toggle
	             */
	            this.panorama.dispatchEvent( { type: 'video-toggle', pause: pause } );

	        }

	    },

	    /**
	     * Set currentTime in a video
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-time
	     */
	    setVideoCurrentTime: function ( percentage ) {

	        if ( this.panorama instanceof VideoPanorama ) {

	            /**
	             * Setting video time event
	             * @type {object}
	             * @event Viewer#video-time
	             * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	             */
	            this.panorama.dispatchEvent( { type: 'video-time', percentage: percentage } );

	        }

	    },

	    /**
	     * This will be called when video updates if an widget is present
	     * @param {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#video-update
	     */
	    onVideoUpdate: function ( percentage ) {

	        const { widget } = this;

	        /**
	         * Video update event
	         * @type {object}
	         * @event Viewer#video-update
	         * @property {number} percentage - Percentage of a video. Range from 0.0 to 1.0
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-update', percentage: percentage } ); }

	    },

	    /**
	     * Add update callback to be called every animation frame
	     * @param {function} callback
	     * @memberOf Viewer
	     * @instance
	     */
	    addUpdateCallback: function ( fn ) {

	        if ( fn ) {

	            this.updateCallbacks.push( fn );

	        }

	    },

	    /**
	     * Remove update callback
	     * @param  {function} fn - The function to be removed
	     * @memberOf Viewer
	     * @instance
	     */
	    removeUpdateCallback: function ( fn ) {

	        const index = this.updateCallbacks.indexOf( fn );

	        if ( fn && index >= 0 ) {

	            this.updateCallbacks.splice( index, 1 );

	        }

	    },

	    /**
	     * Show video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    showVideoWidget: function () {

	        const { widget } = this;

	        /**
	         * Show video widget event
	         * @type {object}
	         * @event Viewer#video-control-show
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-show' } ); }

	    },

	    /**
	     * Hide video widget
	     * @memberOf Viewer
	     * @instance
	     */
	    hideVideoWidget: function () {

	        const { widget } = this;

	        /**
	         * Hide video widget
	         * @type {object}
	         * @event Viewer#video-control-hide
	         */
	        if( widget ) { widget.dispatchEvent( { type: 'video-control-hide' } ); }

	    },

	    /**
	     * Update video play button
	     * @param {boolean} paused 
	     * @memberOf Viewer
	     * @instance
	     */
	    updateVideoPlayButton: function ( paused ) {

	        const { widget } = this;

	        if ( widget && widget.videoElement && widget.videoElement.controlButton ) {

	            widget.videoElement.controlButton.update( paused );

	        }

	    },

	    /**
	     * Add default panorama event listeners
	     * @param {Panorama} pano - The panorama to be added with event listener
	     * @memberOf Viewer
	     * @instance
	     */
	    addPanoramaEventListener: function ( pano ) {

	        // Set camera control on every panorama
	        pano.addEventListener( 'enter-fade-start', this.setCameraControl.bind( this ) );

	        // Show and hide widget event only when it's VideoPanorama
	        if ( pano instanceof VideoPanorama ) {

	            pano.addEventListener( 'enter-fade-start', this.showVideoWidget.bind( this ) );
	            pano.addEventListener( 'leave', function () {

	                if ( !(this.panorama instanceof VideoPanorama) ) {

	                    this.hideVideoWidget.call( this );

	                }
					
	            }.bind( this ) );

	        }

	    },

	    /**
	     * Set camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraControl: function () {

	        this.OrbitControls.target.copy( this.panorama.position );

	    },

	    /**
	     * Get current camera control
	     * @return {object} - Current navigation control
	     * @memberOf Viewer
	     * @instance
	     * @returns {THREE.OrbitControls|THREE.DeviceOrientationControls}
	     */
	    getControl: function () {

	        return this.control;

	    },

	    /**
	     * Get scene
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Scene} - Current scene which the viewer is built on
	     */
	    getScene: function () {

	        return this.scene;

	    },

	    /**
	     * Get camera
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.Camera} - The scene camera
	     */
	    getCamera: function () {

	        return this.camera;

	    },

	    /**
	     * Get renderer
	     * @memberOf Viewer
	     * @instance
	     * @return {THREE.WebGLRenderer} - The renderer using webgl
	     */
	    getRenderer: function () {

	        return this.renderer;

	    },

	    /**
	     * Get container
	     * @memberOf Viewer
	     * @instance
	     * @return {HTMLElement} - The container holds rendererd canvas
	     */
	    getContainer: function () {

	        return this.container;

	    },

	    /**
	     * Get control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Control id. 'orbit' or 'device-orientation'
	     */
	    getControlId: function () {

	        return this.control.id;

	    },

	    /**
	     * Get next navigation control id
	     * @memberOf Viewer
	     * @instance
	     * @return {string} - Next control id
	     */
	    getNextControlId: function () {

	        return this.controls[ this.getNextControlIndex() ].id;

	    },

	    /**
	     * Get next navigation control index
	     * @memberOf Viewer
	     * @instance
	     * @return {number} - Next control index
	     */
	    getNextControlIndex: function () {

	        const controls = this.controls;
	        const control = this.control;
	        const nextIndex = controls.indexOf( control ) + 1;

	        return ( nextIndex >= controls.length ) ? 0 : nextIndex;

	    },

	    /**
	     * Set field of view of camera
	     * @param {number} fov
	     * @memberOf Viewer
	     * @instance
	     */
	    setCameraFov: function ( fov ) {

	        this.camera.fov = fov;
	        this.camera.updateProjectionMatrix();

	    },

	    /**
	     * Enable control by index
	     * @param  {CONTROLS} index - Index of camera control
	     * @memberOf Viewer
	     * @instance
	     */
	    enableControl: function ( index ) {

	        index = ( index >= 0 && index < this.controls.length ) ? index : 0;

	        this.control.enabled = false;

	        this.control = this.controls[ index ];

	        this.control.enabled = true;

	        switch ( index ) {

	        case CONTROLS.ORBIT:

	            this.camera.position.copy( this.panorama.position );
	            this.camera.position.z += 1;

	            break;

	        case CONTROLS.DEVICEORIENTATION:

	            this.camera.position.copy( this.panorama.position );

	            break;

	        default:

	            break;
	        }

	        this.control.update();

	        this.activateWidgetItem( index, undefined );

	    },

	    /**
	     * Disable current control
	     * @memberOf Viewer
	     * @instance
	     */
	    disableControl: function () {

	        this.control.enabled = false;

	    },

	    /**
	     * Toggle next control
	     * @memberOf Viewer
	     * @instance
	     */
	    toggleNextControl: function () {

	        this.enableControl( this.getNextControlIndex() );

	    },

	    /**
	     * Screen Space Projection
	     * @memberOf Viewer
	     * @instance
	     */
	    getScreenVector: function ( worldVector ) {

	        const vector = worldVector.clone();
	        const widthHalf = ( this.container.clientWidth ) / 2;
	        const heightHalf = this.container.clientHeight / 2;

	        vector.project( this.camera );

	        vector.x = ( vector.x * widthHalf ) + widthHalf;
	        vector.y = - ( vector.y * heightHalf ) + heightHalf;
	        vector.z = 0;

	        return vector;

	    },

	    /**
	     * Check Sprite in Viewport
	     * @memberOf Viewer
	     * @instance
	     */
	    checkSpriteInViewport: function ( sprite ) {

	        this.camera.matrixWorldInverse.getInverse( this.camera.matrixWorld );
	        this.cameraViewProjectionMatrix.multiplyMatrices( this.camera.projectionMatrix, this.camera.matrixWorldInverse );
	        this.cameraFrustum.setFromMatrix( this.cameraViewProjectionMatrix );

	        return sprite.visible && this.cameraFrustum.intersectsSprite( sprite );

	    },

	    /**
	     * Reverse dragging direction
	     * @memberOf Viewer
	     * @instance
	     */
	    reverseDraggingDirection: function () {

	        this.OrbitControls.rotateSpeed *= -1;
	        this.OrbitControls.momentumScalingFactor *= -1;

	    },

	    /**
	     * Add reticle 
	     * @memberOf Viewer
	     * @instance
	     */
	    addReticle: function () {

	        this.reticle = new Reticle( 0xffffff, true, this.options.dwellTime );
	        this.reticle.hide();
	        this.camera.add( this.reticle );
	        this.sceneReticle.add( this.camera );

	    },

	    /**
	     * Tween control looking center
	     * @param {THREE.Vector3} vector - Vector to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenter: function ( vector, duration, easing ) {

	        if ( this.control !== this.OrbitControls ) {

	            return;

	        }

	        // Pass in arguments as array
	        if ( vector instanceof Array ) {

	            duration = vector[ 1 ];
	            easing = vector[ 2 ];
	            vector = vector[ 0 ];

	        }

	        duration = duration !== undefined ? duration : 1000;
	        easing = easing || Tween.Easing.Exponential.Out;

	        let scope, ha, va, chv, cvv, hv, vv, vptc, ov, nv;

	        scope = this;

	        chv = this.camera.getWorldDirection( new THREE.Vector3() );
	        cvv = chv.clone();

	        vptc = this.panorama.getWorldPosition( new THREE.Vector3() ).sub( this.camera.getWorldPosition( new THREE.Vector3() ) );

	        hv = vector.clone();
	        // Scale effect
	        hv.x *= -1;
	        hv.add( vptc ).normalize();
	        vv = hv.clone();

	        chv.y = 0;
	        hv.y = 0;

	        ha = Math.atan2( hv.z, hv.x ) - Math.atan2( chv.z, chv.x );
	        ha = ha > Math.PI ? ha - 2 * Math.PI : ha;
	        ha = ha < -Math.PI ? ha + 2 * Math.PI : ha;
	        va = Math.abs( cvv.angleTo( chv ) + ( cvv.y * vv.y <= 0 ? vv.angleTo( hv ) : -vv.angleTo( hv ) ) );
	        va *= vv.y < cvv.y ? 1 : -1;

	        ov = { left: 0, up: 0 };
	        nv = { left: 0, up: 0 };

	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();

	        this.tweenLeftAnimation = new Tween.Tween( ov )
	            .to( { left: ha }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateLeft( ov.left - nv.left );
	                nv.left = ov.left;
	            })
	            .start();

	        this.tweenUpAnimation = new Tween.Tween( ov )
	            .to( { up: va }, duration )
	            .easing( easing )
	            .onUpdate(function(ov){
	                scope.control.rotateUp( ov.up - nv.up );
	                nv.up = ov.up;
	            })
	            .start();

	    },

	    /**
	     * Tween control looking center by object
	     * @param {THREE.Object3D} object - Object to be looked at the center
	     * @param {number} [duration=1000] - Duration to tween
	     * @param {function} [easing=TWEEN.Easing.Exponential.Out] - Easing function
	     * @memberOf Viewer
	     * @instance
	     */
	    tweenControlCenterByObject: function ( object, duration, easing ) {

	        let isUnderScalePlaceHolder = false;

	        object.traverseAncestors( function ( ancestor ) {

	            if ( ancestor.scalePlaceHolder ) {

	                isUnderScalePlaceHolder = true;

	            }
	        } );

	        if ( isUnderScalePlaceHolder ) {

	            const invertXVector = new THREE.Vector3( -1, 1, 1 );

	            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ).multiply( invertXVector ), duration, easing );

	        } else {

	            this.tweenControlCenter( object.getWorldPosition( new THREE.Vector3() ), duration, easing );

	        }

	    },

	    /**
	     * This is called when window size is changed
	     * @fires Viewer#window-resize
	     * @param {number} [windowWidth] - Specify if custom element has changed width
	     * @param {number} [windowHeight] - Specify if custom element has changed height
	     * @memberOf Viewer
	     * @instance
	     */
	    onWindowResize: function ( windowWidth, windowHeight ) {

	        let width, height;

	        const expand = this.container.classList.contains( 'panolens-container' ) || this.container.isFullscreen;

	        if ( windowWidth !== undefined && windowHeight !== undefined ) {

	            width = windowWidth;
	            height = windowHeight;
	            this.container._width = windowWidth;
	            this.container._height = windowHeight;

	        } else {

	            const isAndroid = /(android)/i.test(window.navigator.userAgent);

	            const adjustWidth = isAndroid 
	                ? Math.min(document.documentElement.clientWidth, window.innerWidth || 0) 
	                : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	            const adjustHeight = isAndroid 
	                ? Math.min(document.documentElement.clientHeight, window.innerHeight || 0) 
	                : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	            width = expand ? adjustWidth : this.container.clientWidth;
	            height = expand ? adjustHeight : this.container.clientHeight;

	            this.container._width = width;
	            this.container._height = height;

	        }

	        this.camera.aspect = width / height;
	        this.camera.updateProjectionMatrix();

	        this.renderer.setSize( width, height );

	        // Update reticle
	        if ( this.options.enableReticle || this.tempEnableReticle ) {

	            this.updateReticleEvent();

	        }

	        /**
	         * Window resizing event
	         * @type {object}
	         * @event Viewer#window-resize
	         * @property {number} width  - Width of the window
	         * @property {number} height - Height of the window
	         */
	        this.dispatchEvent( { type: 'window-resize', width: width, height: height });
	        this.scene.traverse( function ( object ) {

	            if ( object.dispatchEvent ) {

	                object.dispatchEvent( { type: 'window-resize', width: width, height: height });

	            }

	        } );

	    },

	    /**
	     * Add output element
	     * @memberOf Viewer
	     * @instance
	     */
	    addOutputElement: function () {

	        const element = document.createElement( 'div' );
	        element.style.position = 'absolute';
	        element.style.right = '10px';
	        element.style.top = '10px';
	        element.style.color = '#fff';
	        this.container.appendChild( element );
	        this.outputDivElement = element;

	    },

	    /**
	     * Output position in developer console by holding down Ctrl button
	     * @memberOf Viewer
	     * @instance
	     */
	    outputPosition: function () {

	        const intersects = this.raycaster.intersectObject( this.panorama, true );

	        if ( intersects.length > 0 ) {

	            const point = intersects[ 0 ].point.clone();
	            const converter = new THREE.Vector3( -1, 1, 1 );
	            const world = this.panorama.getWorldPosition( new THREE.Vector3() );
	            point.sub( world ).multiply( converter );

	            const position = {
	                x: point.x.toFixed(2),
	                y: point.y.toFixed(2),
	                z: point.z.toFixed(2),
	            };

	            const message = `${position.x}, ${position.y}, ${position.z}`;

	            if ( point.length() === 0 ) { return; }

	            switch ( this.options.output ) {

	            case 'event':
	                /**
	                 * Dispatch raycast position as event
	                 * @type {object}
	                 * @event Viewer#position-output
	                 */
	                this.dispatchEvent( { type: 'position-output', position: position } );
	                break;

	            case 'console':
	                console.info( message );
	                break;

	            case 'overlay':
	                this.outputDivElement.textContent = message;
	                break;

	            default:
	                break;

	            }

	        }

	    },

	    /**
	     * On mouse down
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseDown: function ( event ) {

	        event.preventDefault();

	        this.userMouse.x = ( event.clientX >= 0 ) ? event.clientX : event.touches[0].clientX;
	        this.userMouse.y = ( event.clientY >= 0 ) ? event.clientY : event.touches[0].clientY;
	        this.userMouse.type = 'mousedown';
	        this.onTap( event );

	    },

	    /**
	     * On mouse move
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseMove: function ( event ) {

	        event.preventDefault();
	        this.userMouse.type = 'mousemove';
	        this.onTap( event );

	    },

	    /**
	     * On mouse up
	     * @param {MouseEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onMouseUp: function ( event ) {

	        let onTarget = false;

	        this.userMouse.type = 'mouseup';

	        const type = ( this.userMouse.x >= event.clientX - this.options.clickTolerance 
					&& this.userMouse.x <= event.clientX + this.options.clickTolerance
					&& this.userMouse.y >= event.clientY - this.options.clickTolerance
					&& this.userMouse.y <= event.clientY + this.options.clickTolerance ) 
					||  ( event.changedTouches 
					&& this.userMouse.x >= event.changedTouches[0].clientX - this.options.clickTolerance
					&& this.userMouse.x <= event.changedTouches[0].clientX + this.options.clickTolerance 
					&& this.userMouse.y >= event.changedTouches[0].clientY - this.options.clickTolerance
					&& this.userMouse.y <= event.changedTouches[0].clientY + this.options.clickTolerance ) 
	            ? 'click' : undefined;

	        // Event should happen on canvas
	        if ( event && event.target && !event.target.classList.contains( 'panolens-canvas' ) ) { return; }

	        event.preventDefault();

	        if ( event.changedTouches && event.changedTouches.length === 1 ) {

	            onTarget = this.onTap( { clientX: event.changedTouches[0].clientX, clientY: event.changedTouches[0].clientY }, type );
			
	        } else {

	            onTarget = this.onTap( event, type );

	        }

	        this.userMouse.type = 'none';

	        if ( onTarget ) { 

	            return; 

	        }

	        if ( type === 'click' ) {

	            const { options: { autoHideInfospot, autoHideControlBar }, panorama, toggleControlBar } = this;

	            if ( autoHideInfospot && panorama ) {

	                panorama.toggleInfospotVisibility();

	            }

	            if ( autoHideControlBar ) {

	                toggleControlBar();

	            }

	        }

	    },

	    /**
	     * On tap eveny frame
	     * @param {MouseEvent} event 
	     * @param {string} type 
	     * @memberOf Viewer
	     * @instance
	     */
	    onTap: function ( event, type ) {

	        const { left, top } = this.container.getBoundingClientRect();
	        const { clientWidth, clientHeight } = this.container;

	        this.raycasterPoint.x = ( ( event.clientX - left ) / clientWidth ) * 2 - 1;
	        this.raycasterPoint.y = - ( ( event.clientY - top ) / clientHeight ) * 2 + 1;

	        this.raycaster.setFromCamera( this.raycasterPoint, this.camera );

	        // Return if no panorama 
	        if ( !this.panorama ) { 

	            return; 

	        }

	        // output infospot information
	        if ( event.type !== 'mousedown' && this.touchSupported || this.OUTPUT_INFOSPOT ) { 

	            this.outputPosition(); 

	        }


	        const intersects = this.raycaster.intersectObjects( this.panorama.children, true );
	        const intersect_entity = this.getConvertedIntersect( intersects );
	        const intersect = ( intersects.length > 0 ) ? intersects[0].object : undefined;

	        if ( this.userMouse.type === 'mouseup'  ) {

	            if ( intersect_entity && this.pressEntityObject === intersect_entity && this.pressEntityObject.dispatchEvent ) {

	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

	            }

	            this.pressEntityObject = undefined;

	        }

	        if ( this.userMouse.type === 'mouseup'  ) {

	            if ( intersect && this.pressObject === intersect && this.pressObject.dispatchEvent ) {

	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

	            }

	            this.pressObject = undefined;

	        }

	        if ( type === 'click' ) {

	            this.panorama.dispatchEvent( { type: 'click', intersects: intersects, mouseEvent: event } );

	            if ( intersect_entity && intersect_entity.dispatchEvent ) {

	                intersect_entity.dispatchEvent( { type: 'click-entity', mouseEvent: event } );

	            }

	            if ( intersect && intersect.dispatchEvent ) {

	                intersect.dispatchEvent( { type: 'click', mouseEvent: event } );

	            }

	        } else {

	            this.panorama.dispatchEvent( { type: 'hover', intersects: intersects, mouseEvent: event } );

	            if ( ( this.hoverObject && intersects.length > 0 && this.hoverObject !== intersect_entity )
					|| ( this.hoverObject && intersects.length === 0 ) ){

	                if ( this.hoverObject.dispatchEvent ) {

	                    this.hoverObject.dispatchEvent( { type: 'hoverleave', mouseEvent: event } );

	                    this.reticle.end();

	                }

	                this.hoverObject = undefined;

	            }

	            if ( intersect_entity && intersects.length > 0 ) {

	                if ( this.hoverObject !== intersect_entity ) {

	                    this.hoverObject = intersect_entity;

	                    if ( this.hoverObject.dispatchEvent ) {

	                        this.hoverObject.dispatchEvent( { type: 'hoverenter', mouseEvent: event } );

	                        // Start reticle timer
	                        if ( this.options.autoReticleSelect && this.options.enableReticle || this.tempEnableReticle ) {
	                            this.reticle.start( this.onTap.bind( this, event, 'click' ) );
	                        }

	                    }

	                }

	                if ( this.userMouse.type === 'mousedown' && this.pressEntityObject != intersect_entity ) {

	                    this.pressEntityObject = intersect_entity;

	                    if ( this.pressEntityObject.dispatchEvent ) {

	                        this.pressEntityObject.dispatchEvent( { type: 'pressstart-entity', mouseEvent: event } );

	                    }

	                }

	                if ( this.userMouse.type === 'mousedown' && this.pressObject != intersect ) {

	                    this.pressObject = intersect;

	                    if ( this.pressObject.dispatchEvent ) {

	                        this.pressObject.dispatchEvent( { type: 'pressstart', mouseEvent: event } );

	                    }

	                }

	                if ( this.userMouse.type === 'mousemove' || this.options.enableReticle ) {

	                    if ( intersect && intersect.dispatchEvent ) {

	                        intersect.dispatchEvent( { type: 'hover', mouseEvent: event } );

	                    }

	                    if ( this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

	                        this.pressEntityObject.dispatchEvent( { type: 'pressmove-entity', mouseEvent: event } );

	                    }

	                    if ( this.pressObject && this.pressObject.dispatchEvent ) {

	                        this.pressObject.dispatchEvent( { type: 'pressmove', mouseEvent: event } );

	                    }

	                }

	            }

	            if ( !intersect_entity && this.pressEntityObject && this.pressEntityObject.dispatchEvent ) {

	                this.pressEntityObject.dispatchEvent( { type: 'pressstop-entity', mouseEvent: event } );

	                this.pressEntityObject = undefined;

	            }

	            if ( !intersect && this.pressObject && this.pressObject.dispatchEvent ) {

	                this.pressObject.dispatchEvent( { type: 'pressstop', mouseEvent: event } );

	                this.pressObject = undefined;

	            }

	        }

	        // Infospot handler
	        if ( intersect && intersect instanceof Infospot ) {

	            this.infospot = intersect;
				
	            if ( type === 'click' ) {

	                return true;

	            }
				

	        } else if ( this.infospot ) {

	            this.hideInfospot();

	        }

	        // Auto rotate
	        if ( this.options.autoRotate && this.userMouse.type !== 'mousemove' ) {

	            // Auto-rotate idle timer
	            clearTimeout( this.autoRotateRequestId );

	            if ( this.control === this.OrbitControls ) {

	                this.OrbitControls.autoRotate = false;
	                this.autoRotateRequestId = window.setTimeout( this.enableAutoRate.bind( this ), this.options.autoRotateActivationDuration );

	            }

	        }		

	    },

	    /**
	     * Get converted intersect
	     * @param {array} intersects 
	     * @memberOf Viewer
	     * @instance
	     */
	    getConvertedIntersect: function ( intersects ) {

	        let intersect;

	        for ( let i = 0; i < intersects.length; i++ ) {

	            if ( intersects[i].distance >= 0 && intersects[i].object && !intersects[i].object.passThrough ) {

	                if ( intersects[i].object.entity && intersects[i].object.entity.passThrough ) {
	                    continue;
	                } else if ( intersects[i].object.entity && !intersects[i].object.entity.passThrough ) {
	                    intersect = intersects[i].object.entity;
	                    break;
	                } else {
	                    intersect = intersects[i].object;
	                    break;
	                }

	            }

	        }

	        return intersect;

	    },

	    /**
	     * Hide infospot
	     * @memberOf Viewer
	     * @instance
	     */
	    hideInfospot: function () {

	        if ( this.infospot ) {

	            this.infospot.onHoverEnd();

	            this.infospot = undefined;

	        }

	    },

	    /**
	     * Toggle control bar
	     * @memberOf Viewer
	     * @instance
	     * @fires Viewer#control-bar-toggle
	     */
	    toggleControlBar: function () {

	        const { widget } = this;

	        /**
	         * Toggle control bar event
	         * @type {object}
	         * @event Viewer#control-bar-toggle
	         */
	        if ( widget ) {

	            widget.dispatchEvent( { type: 'control-bar-toggle' } );

	        }

	    },

	    /**
	     * On key down
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyDown: function ( event ) {

	        if ( this.options.output && this.options.output !== 'none' && event.key === 'Control' ) {

	            this.OUTPUT_INFOSPOT = true;

	        }

	    },

	    /**
	     * On key up
	     * @param {KeyboardEvent} event 
	     * @memberOf Viewer
	     * @instance
	     */
	    onKeyUp: function () {

	        this.OUTPUT_INFOSPOT = false;

	    },

	    /**
	     * Update control and callbacks
	     * @memberOf Viewer
	     * @instance
	     */
	    update: function () {

	        Tween.update();

	        this.updateCallbacks.forEach( function( callback ){ callback(); } );

	        this.control.update();

	        this.scene.traverse( function( child ){
	            if ( child instanceof Infospot 
					&& child.element 
					&& ( this.hoverObject === child 
						|| child.element.style.display !== 'none' 
						|| (child.element.left && child.element.left.style.display !== 'none')
						|| (child.element.right && child.element.right.style.display !== 'none') ) ) {
	                if ( this.checkSpriteInViewport( child ) ) {
	                    const { x, y } = this.getScreenVector( child.getWorldPosition( new THREE.Vector3() ) );
	                    child.translateElement( x, y );
	                } else {
	                    child.onDismiss();
	                }
					
	            }
	        }.bind( this ) );

	    },

	    /**
	     * Rendering function to be called on every animation frame
	     * Render reticle last
	     * @memberOf Viewer
	     * @instance
	     */
	    render: function () {

	        if ( this.mode === MODES.CARDBOARD || this.mode === MODES.STEREO ) {

	            this.renderer.clear();
	            this.effect.render( this.scene, this.camera );
	            this.effect.render( this.sceneReticle, this.camera );
				

	        } else {

	            this.renderer.clear();
	            this.renderer.render( this.scene, this.camera );
	            this.renderer.clearDepth();
	            this.renderer.render( this.sceneReticle, this.camera );

	        }

	    },

	    /**
	     * Animate
	     * @memberOf Viewer
	     * @instance
	     */
	    animate: function () {

	        this.requestAnimationId = window.requestAnimationFrame( this.animate.bind( this ) );

	        this.onChange();

	    },

	    /**
	     * On change
	     * @memberOf Viewer
	     * @instance
	     */
	    onChange: function () {

	        this.update();
	        this.render();

	    },

	    /**
	     * Register mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    registerMouseAndTouchEvents: function () {

	        const options = { passive: false };

	        this.container.addEventListener( 'mousedown' , 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'mousemove' , 	this.HANDLER_MOUSE_MOVE, options );
	        this.container.addEventListener( 'mouseup'	 , 	this.HANDLER_MOUSE_UP  , options );
	        this.container.addEventListener( 'touchstart', 	this.HANDLER_MOUSE_DOWN, options );
	        this.container.addEventListener( 'touchend'  , 	this.HANDLER_MOUSE_UP  , options );

	    },

	    /**
	     * Unregister mouse and touch event on container
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterMouseAndTouchEvents: function () {

	        this.container.removeEventListener( 'mousedown' ,  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'mousemove' ,  this.HANDLER_MOUSE_MOVE, false );
	        this.container.removeEventListener( 'mouseup'	,  this.HANDLER_MOUSE_UP  , false );
	        this.container.removeEventListener( 'touchstart',  this.HANDLER_MOUSE_DOWN, false );
	        this.container.removeEventListener( 'touchend'  ,  this.HANDLER_MOUSE_UP  , false );

	    },

	    /**
	     * Register reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    registerReticleEvent: function () {

	        this.addUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Unregister reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterReticleEvent: function () {

	        this.removeUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Update reticle event
	     * @memberOf Viewer
	     * @instance
	     */
	    updateReticleEvent: function () {

	        const clientX = this.container.clientWidth / 2 + this.container.offsetLeft;
	        const clientY = this.container.clientHeight / 2;

	        this.removeUpdateCallback( this.HANDLER_TAP );
	        this.HANDLER_TAP = this.onTap.bind( this, { clientX, clientY } );
	        this.addUpdateCallback( this.HANDLER_TAP );

	    },

	    /**
	     * Register container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    registerEventListeners: function () {

	        // Resize Event
	        window.addEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

	        // Keyboard Event
	        window.addEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.addEventListener( 'keyup'  , this.HANDLER_KEY_UP	 , true );

	    },

	    /**
	     * Unregister container and window listeners
	     * @memberOf Viewer
	     * @instance
	     */
	    unregisterEventListeners: function () {

	        // Resize Event
	        window.removeEventListener( 'resize' , this.HANDLER_WINDOW_RESIZE, true );

	        // Keyboard Event
	        window.removeEventListener( 'keydown', this.HANDLER_KEY_DOWN, true );
	        window.removeEventListener( 'keyup'  , this.HANDLER_KEY_UP  , true );

	    },

	    /**
	     * Dispose all scene objects and clear cache
	     * @memberOf Viewer
	     * @instance
	     */
	    dispose: function () {

	        this.tweenLeftAnimation.stop();
	        this.tweenUpAnimation.stop();

	        // Unregister dom event listeners
	        this.unregisterEventListeners();

	        // recursive disposal on 3d objects
	        function recursiveDispose ( object ) {

	            for ( let i = object.children.length - 1; i >= 0; i-- ) {

	                recursiveDispose( object.children[i] );
	                object.remove( object.children[i] );

	            }

	            if ( object instanceof Panorama || object instanceof Infospot ) {

	                object.dispose();
	                object = null;

	            } else if ( object.dispatchEvent ){

	                object.dispatchEvent( 'dispose' );

	            }

	        }

	        recursiveDispose( this.scene );

	        // dispose widget
	        if ( this.widget ) {

	            this.widget.dispose();
	            this.widget = null;

	        }

	        // clear cache
	        if ( THREE.Cache && THREE.Cache.enabled ) {

	            THREE.Cache.clear();

	        }

	    },

	    /**
	     * Destroy viewer by disposing and stopping requestAnimationFrame
	     * @memberOf Viewer
	     * @instance
	     */
	    destroy: function () {

	        this.dispose();
	        this.render();
	        window.cancelAnimationFrame( this.requestAnimationId );		

	    },

	    /**
	     * On panorama dispose
	     * @memberOf Viewer
	     * @instance
	     */
	    onPanoramaDispose: function ( panorama ) {

	        if ( panorama instanceof VideoPanorama ) {

	            this.hideVideoWidget();

	        }

	        if ( panorama === this.panorama ) {

	            this.panorama = null;

	        }

	    },

	    /**
	     * Load ajax call
	     * @param {string} url - URL to be requested
	     * @param {function} [callback] - Callback after request completes
	     * @memberOf Viewer
	     * @instance
	     */
	    loadAsyncRequest: function ( url, callback = () => {} ) {

	        const request = new window.XMLHttpRequest();
	        request.onloadend = function ( event ) {
	            callback( event );
	        };
	        request.open( 'GET', url, true );
	        request.send( null );

	    },

	    /**
	     * View indicator in upper left
	     * @memberOf Viewer
	     * @instance
	     */
	    addViewIndicator: function () {

	        const scope = this;

	        function loadViewIndicator ( asyncEvent ) {

	            if ( asyncEvent.loaded === 0 ) return;

	            const viewIndicatorDiv = asyncEvent.target.responseXML.documentElement;
	            viewIndicatorDiv.style.width = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.height = scope.viewIndicatorSize + 'px';
	            viewIndicatorDiv.style.position = 'absolute';
	            viewIndicatorDiv.style.top = '10px';
	            viewIndicatorDiv.style.left = '10px';
	            viewIndicatorDiv.style.opacity = '0.5';
	            viewIndicatorDiv.style.cursor = 'pointer';
	            viewIndicatorDiv.id = 'panolens-view-indicator-container';

	            scope.container.appendChild( viewIndicatorDiv );

	            const indicator = viewIndicatorDiv.querySelector( '#indicator' );
	            const setIndicatorD = function () {

	                scope.radius = scope.viewIndicatorSize * 0.225;
	                scope.currentPanoAngle = scope.camera.rotation.y - THREE.Math.degToRad( 90 );
	                scope.fovAngle = THREE.Math.degToRad( scope.camera.fov ) ;
	                scope.leftAngle = -scope.currentPanoAngle - scope.fovAngle / 2;
	                scope.rightAngle = -scope.currentPanoAngle + scope.fovAngle / 2;
	                scope.leftX = scope.radius * Math.cos( scope.leftAngle );
	                scope.leftY = scope.radius * Math.sin( scope.leftAngle );
	                scope.rightX = scope.radius * Math.cos( scope.rightAngle );
	                scope.rightY = scope.radius * Math.sin( scope.rightAngle );
	                scope.indicatorD = 'M ' + scope.leftX + ' ' + scope.leftY + ' A ' + scope.radius + ' ' + scope.radius + ' 0 0 1 ' + scope.rightX + ' ' + scope.rightY;

	                if ( scope.leftX && scope.leftY && scope.rightX && scope.rightY && scope.radius ) {

	                    indicator.setAttribute( 'd', scope.indicatorD );

	                }

	            };

	            scope.addUpdateCallback( setIndicatorD );

	            const indicatorOnMouseEnter = function () {

	                this.style.opacity = '1';

	            };

	            const indicatorOnMouseLeave = function () {

	                this.style.opacity = '0.5';

	            };

	            viewIndicatorDiv.addEventListener( 'mouseenter', indicatorOnMouseEnter );
	            viewIndicatorDiv.addEventListener( 'mouseleave', indicatorOnMouseLeave );
	        }

	        this.loadAsyncRequest( DataImage.ViewIndicator, loadViewIndicator );

	    },

	    /**
	     * Append custom control item to existing control bar
	     * @param {object} [option={}] - Style object to overwirte default element style. It takes 'style', 'onTap' and 'group' properties.
	     * @memberOf Viewer
	     * @instance
	     */
	    appendControlItem: function ( option ) {

	        const item = this.widget.createCustomItem( option );		

	        if ( option.group === 'video' ) {

	            this.widget.videoElement.appendChild( item );

	        } else {

	            this.widget.barElement.appendChild( item );

	        }

	        return item;

	    },

	    /**
	     * Clear all cached files
	     * @memberOf Viewer
	     * @instance
	     */
	    clearAllCache: function () {

	        THREE.Cache.clear();

	    }

	} );

	if ( THREE.REVISION != THREE_REVISION ) {

	    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

	}

	/**
	 * Panolens.js
	 * @author pchen66
	 * @namespace PANOLENS
	 */
	window.TWEEN = Tween;

	exports.BasicPanorama = BasicPanorama;
	exports.CONTROLS = CONTROLS;
	exports.CONTROL_BUTTONS = CONTROL_BUTTONS;
	exports.CameraPanorama = CameraPanorama;
	exports.CubePanorama = CubePanorama;
	exports.CubeTextureLoader = CubeTextureLoader;
	exports.DataImage = DataImage;
	exports.EmptyPanorama = EmptyPanorama;
	exports.GoogleStreetviewPanorama = GoogleStreetviewPanorama;
	exports.ImageLittlePlanet = ImageLittlePlanet;
	exports.ImageLoader = ImageLoader;
	exports.ImagePanorama = ImagePanorama;
	exports.Infospot = Infospot;
	exports.LittlePlanet = LittlePlanet;
	exports.MODES = MODES;
	exports.Media = Media;
	exports.OUTPUTS = OUTPUTS;
	exports.Panorama = Panorama;
	exports.REVISION = REVISION;
	exports.Reticle = Reticle;
	exports.THREE_REVISION = THREE_REVISION;
	exports.THREE_VERSION = THREE_VERSION;
	exports.TextureLoader = TextureLoader;
	exports.VERSION = VERSION;
	exports.VideoPanorama = VideoPanorama;
	exports.Viewer = Viewer;
	exports.Widget = Widget;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9Db25zdGFudHMuanMiLCIuLi9zcmMvRGF0YUltYWdlLmpzIiwiLi4vc3JjL2xvYWRlcnMvSW1hZ2VMb2FkZXIuanMiLCIuLi9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXIuanMiLCIuLi9zcmMvbWVkaWEvTWVkaWEuanMiLCIuLi9zcmMvaW50ZXJmYWNlL1JldGljbGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHR3ZWVuanMvdHdlZW4uanMvc3JjL1R3ZWVuLmpzIiwiLi4vc3JjL2luZm9zcG90L0luZm9zcG90LmpzIiwiLi4vc3JjL3dpZGdldC9XaWRnZXQuanMiLCIuLi9zcmMvcGFub3JhbWEvUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvSW1hZ2VQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9FbXB0eVBhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEuanMiLCIuLi9zcmMvbG9hZGVycy9Hb29nbGVTdHJlZXR2aWV3TG9hZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0dvb2dsZVN0cmVldHZpZXdQYW5vcmFtYS5qcyIsIi4uL3NyYy9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXIuanMiLCIuLi9zcmMvcGFub3JhbWEvTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9jb250cm9scy9EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmpzIiwiLi4vc3JjL2xpYi9lZmZlY3RzL0NhcmRib2FyZEVmZmVjdC5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9TdGVyZW9FZmZlY3QuanMiLCIuLi9zcmMvdmlld2VyL1ZpZXdlci5qcyIsIi4uL3NyYy9DaGVjay5qcyIsIi4uL3NyYy9QYW5vbGVucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uLCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuLyoqXHJcbiAqIFJFVklTSU9OXHJcbiAqIEBtb2R1bGUgUkVWSVNJT05cclxuICogQGV4YW1wbGUgUEFOT0xFTlMuUkVWSVNJT05cclxuICogQHR5cGUge3N0cmluZ30gcmV2aXNpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBSRVZJU0lPTiA9IHZlcnNpb24uc3BsaXQoICcuJyApWyAxIF07XHJcblxyXG4vKipcclxuICogVkVSU0lPTlxyXG4gKiBAbW9kdWxlIFZFUlNJT05cclxuICogQGV4YW1wbGUgUEFOT0xFTlMuVkVSU0lPTlxyXG4gKiBAdHlwZSB7c3RyaW5nfSB2ZXJzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IHZlcnNpb247XHJcblxyXG4vKipcclxuICogVEhSRUVKUyBSRVZJU0lPTlxyXG4gKiBAbW9kdWxlIFRIUkVFX1JFVklTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlRIUkVFX1JFVklTSU9OXHJcbiAqIEB0eXBlIHtzdHJpbmd9IHRocmVlanMgcmV2aXNpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBUSFJFRV9SRVZJU0lPTiA9IGRlcGVuZGVuY2llcy50aHJlZS5zcGxpdCggJy4nIClbIDEgXTtcclxuXHJcbi8qKlxyXG4gKiBUSFJFRUpTIFZFUlNJT05cclxuICogQG1vZHVsZSBUSFJFRV9WRVJTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlRIUkVFX1ZFUlNJT05cclxuICogQHR5cGUge3N0cmluZ30gdGhyZWVqcyB2ZXJzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVEhSRUVfVkVSU0lPTiA9IGRlcGVuZGVuY2llcy50aHJlZS5yZXBsYWNlKCAvW14wLTkuXS9nLCAnJyApO1xyXG5cclxuLyoqXHJcbiAqIENPTlRST0xTXHJcbiAqIEBtb2R1bGUgQ09OVFJPTFNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuQ09OVFJPTFMuT1JCSVRcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IE9SQklUIDBcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFVklDRU9SSUVOVEFUSU9OIDFcclxuICovXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MUyA9IHsgT1JCSVQ6IDAsIERFVklDRU9SSUVOVEFUSU9OOiAxIH07XHJcblxyXG4vKipcclxuICogTU9ERVNcclxuICogQG1vZHVsZSBNT0RFU1xyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5NT0RFUy5VTktOT1dOXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBVTktOT1dOIDBcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IE5PUk1BTCAxXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDQVJEQk9BUkQgMlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gU1RFUkVPIDNcclxuICovXHJcbmV4cG9ydCBjb25zdCBNT0RFUyA9IHsgVU5LTk9XTjogMCwgTk9STUFMOiAxLCBDQVJEQk9BUkQ6IDIsIFNURVJFTzogMyB9O1xyXG5cclxuLyoqXHJcbiAqIENPTlRST0xfQlVUVE9OU1xyXG4gKiBAbW9kdWxlIENPTlRST0xfQlVUVE9OU1xyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5WSUVXRVIuQ09OVFJPTF9CVVRUT05TXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGVUxMU0NSRUVOXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRVRUSU5HXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWSURFT1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENPTlRST0xfQlVUVE9OUyA9IHsgRlVMTFNDUkVFTjogJ2Z1bGxzY3JlZW4nLCBTRVRUSU5HOiAnc2V0dGluZycsIFZJREVPOiAndmlkZW8nIH07XHJcblxyXG4vKipcclxuICogT1VUUFVUU1xyXG4gKiBAbW9kdWxlIE9VVFBVVFNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuVklFV0VSLk9VVFBVVFNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IE5PTkVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IENPTlNPTEVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IE9WRVJMQVlcclxuICovXHJcbmV4cG9ydCBjb25zdCBPVVRQVVRTID0geyBOT05FOiAnbm9uZScsIENPTlNPTEU6ICdjb25zb2xlJywgT1ZFUkxBWTogJ292ZXJsYXknIH07XHJcblxyXG4iLCIvKipcclxuICogRGF0YSBVUkkgSW1hZ2VzXHJcbiAqIEBtb2R1bGUgRGF0YUltYWdlXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkRhdGFJbWFnZS5JbmZvXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJbmZvIEluZm9ybWF0aW9uIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFycm93IEFycm93IEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZ1bGxzY3JlZW5FbnRlciBGdWxsc2NyZWVuIEVudGVyIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IEZ1bGxzY3JlZW5MZWF2ZSBGdWxsc2NyZWVuIExlYXZlIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZpZGVvUGxheSBWaWRlbyBQbGF5IEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFZpZGVvUGF1c2UgVmlkZW8gUGF1c2UgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gV2hpdGVUaWxlIFdoaXRlIFRpbGUgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU2V0dGluZyBTZXR0aW5ncyBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDaGV2cm9uUmlnaHQgQ2hldnJvbiBSaWdodCBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDaGVjayBDaGVjayBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWV3SW5kaWNhdG9yIFZpZXcgSW5kaWNhdG9yIEljb25cclxuICovXHJcbmNvbnN0IERhdGFJbWFnZSA9IHtcclxuICAgIEluZm86ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURCa2xFUVZSNDJ1MmJQMDhVUVJpSG56RmFTWUNJL3hva3NkQklxR3dJaVlXUlVCSVNFeHBDUTBlajM4RldPbWxJS0tob01QRWJhQ3hzcnJIaVlyUWdPU2xRRWFJQ3JUK0xIU1Baek56dDNzM2MzSG43bEh2THp2djgyTDJkbTMwWEtpb3FLZ1lZMDYyQkpGMEhwb0E3d0FSd0JiaHNQejREam9FRzhBbllOY1o4U3gxT3A4SVhKTTFLV3BkVVYzbnE5bTluSlYxSTdWTkdmRXpTTTBtTk5xUjlOT3d4eDFMN05STWZsYlFtNlNTZ2VKNFRPOFpvYXQrOC9MS2tnNGppZVE0a0xhZjJSdEt3cEowdWl1ZlprVFNjU241UzBsNUMrYi9zU1pyc3R2eU1wS1BVNXVjNGtqVFRqa3ZwZVlDa2FlQTEvKzdodmNJWk1HdU1xVVVMUU5JVThBYTRsdHJXd3lId3lCaXpHendBU1NQQWUrQjJhc3NXN0FIM2pURS9pK3hjWm9hMTJRZnkyQm8zaSs1Y0tBQmw5OXpGMUdZbFdGVEJlVUxMUzBEWnJPc0RjRE5nZ1RYZ2MyN2JMV0E2NEJoZmdIdkdtQjhkSFVYWjFETTBTNDV4bGlLTXM5YktyK2tsSU9rcXNCcnd2OUp0VnExRGV3RUFUNENoMUJZZE1HUWR5Z2VnN0RmNFNtcURBS3lveVhwQ3N6UGdJVENldXZvQWpGdVgwZ0U4amxqVWR2N2JDdGlPT0o3WHBkVVo4TC9nZFhIT0E1UXRZSDVOWFhWZ2JyZ1dXbjFud0ZUcWFpUGdkUElGY0RkMXRSRndPbDMwN0R3UnVaZ1h3THZjdGdmQTA0aGpPcDE4QWNSZVo2c1pZMTZlM3lEcFV1UXhuVTYrUzJBa2NqRXBjRHIxenhPWFNQZ0NLTFNhMG1jNG5Yd0IvRXBkYlFTY1RyNEFHcW1yallEVHlSZkF4OVRWUnNEcDVBdWc4TEp5SCtGMGNnWmc1OHoxMUJVSHBPNXJ1R2gyRzN5YnV1cUFlRjJhQmZBcWRkVUI4YnEwT2dQMlUxY2VnSDNhT1FPTU1iK0JyZFRWQjJETHVwUUx3TElPbktZMjZJQlQ2K0NsYVFER21PL0FSbXFMRHRpd0RuN0hWa2NZK0Vkak5vVGxDSSt0WWhPMmlVcHBtNkhLc2xQVXEycVFLSHBVZThBRnNqYVVYdVVRV0NncVh5b0FHOEl1TUUvV2tOUnJuQUh6WmZxRFNnZGdRNmdCYzJUZDNiM0NNVEJYdGtPc0l6VElqWkxuUWhqY1Z0bGNFSVBaTEowTG9WdnQ4cy9WYSszeXVTQUc4NFVKUnhCOThjcE05ZEpVUlVWRnhTRHpCeEtkZTRMazMvaDJBQUFBQUVsRlRrU3VRbUNDJywgXHJcbiAgICBBcnJvdzogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUJBQUFBQVFBRHE4L2hnQUFBRFBrbEVRVlI0MnUyYk1Vc2NRUmlHMzAvU1JhSkVJMVpLVWlSRXJOSUVMUlViUVlTQW5YOGhwVlVna0RZcDB3Z1dWallXK1FjSmFRellwTG9qSklYaHREREVLQnBqNjV0aTU4aXhtZG1iMlp2WjcrVDJBVUh1ZG1mbWVYZjJibmIzTzZDbXBxWm1nSkdxT2lJNUFXQVd3RU1BMHdEdUFyaHQzcjRDY0FhZ0JlQWJnSWFJL05RT3AxZmhJWktMSk4rU2JES2NwdGwza2VTUXRrK0krQmpKVnlSYkphUmR0RXliWTlwK1JlS2pKTitRdkl3b251ZlM5REdxN1p1WFh5ZDVuRkE4enpISmRXMXZrTHhEY3JkQzhUeTdKTzlveWMrUVBGQ1ViM05BY3FacStUbVNwOXJtSFp5U25DdmpFcndPSVBrVXdIdjgrdzd2RjY0QUxJcklmcklBU000QytBRGducmF0Z3hNQUN5TFNpQjRBeVJFQW53RTgwTGJzd2dHQUp5Snk0Yk54eUFwcjZ3Ykl3NHh4eTNkanJ3Q1lmZWV1YVpzRnNFYlBkVUxYVTREWnF1c0xnTWtFQTIxUDA1RUViZjhBOEZoRXpvczI4cGtCTHhMS0w1cy9yL00xa0Vrejl2S1FIR2VhdGYwNXlmbU9mdWJOYTdHNUpEbGU1Tmh0Qmp3SE1CejV5RndBV0JhUlQrMFh6UDhwWnNLd2NRaUgyZlg4WWNvamIra3p4VXc0WkpuN0NTUVhxcFJQSE1LQ3E3K2laSjcxTXZkeS9EZnRYU1E2SGNKZFNEYXFQUEtXL21QT0JPK2xjYnZ6Q1UzNVJDRk0yUHB3blFLelpRZmRnZmUwZHhINWRMQTZ1UUo0cEMyZklBU3JreXVBNlg2UWp4eUMxY2tWUU5uN2JOSGxJNFpnZFhJRlVPYmlKSmw4cEJDc1RqR2Z1SXdBMkN2NEZON3hiWWpranFzUkFIdUllUFhvQ2lERjFaazJWaWRYQUwrMVI1c0FxNU1yZ0piMmFCTmdkWElGOEZWN3RBbXdPcmtDQ0ZzNzN3eXNUdFlBVEhGQ1UzdkVFV202Q2k2S3ZnWS9hbzg2SWs2WG9nRGVhWTg2SWs2WGJqUGdTSHZrRVRoQ3dReTQ1WHBEUks1SmJnTjRHV2tnVXlSOUg2NU1SUXhnVzBTdW5aNUZleks3cGZ3ZDhlOE1WOFVmQVBkRjVKZHJnOEpyQWJQanByWkZEMndXeVFQNmo4WlNFdWZSbUdsZ1E5dW1CQnZkNUlPZ2JqRlVLTHUrWG5XQmhHK3Jwc0ZWWkdVby9jb0pnRlZmK2FBQVRBZ05BQ3ZJQ3BMNmpTc0FLeUgxUWNFQm1CRDJBU3docSs3dUY4NEFMSVZXaVBVRUI3bFFzaU9Fd1MyVnpRVXhtTVhTdVJDcUtwZC96WDRybDg4Rk1aZy9tTEFFY1NOK01sUC9hS3FtcHFabWtQa0wwaFNqd09wTkt4d0FBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgIEZ1bGxzY3JlZW5FbnRlcjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNJalJrWkdSa1pHSWlCb1pXbG5hSFE5SWpJMElpQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSGRwWkhSb1BTSXlOQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLSUNBZ0lEeHdZWFJvSUdROUlrMHdJREJvTWpSMk1qUklNSG9pSUdacGJHdzlJbTV2Ym1VaUx6NEtJQ0FnSUR4d1lYUm9JR1E5SWswM0lERTBTRFYyTldnMWRpMHlTRGQyTFRONmJTMHlMVFJvTWxZM2FETldOVWcxZGpWNmJURXlJRGRvTFROMk1tZzFkaTAxYUMweWRqTjZUVEUwSURWMk1tZ3pkak5vTWxZMWFDMDFlaUl2UGdvOEwzTjJaejQ9JyxcclxuICAgIEZ1bGxzY3JlZW5MZWF2ZTogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJZ1pEMGlUVEUwTERFMFNERTVWakUyU0RFMlZqRTVTREUwVmpFMFRUVXNNVFJJTVRCV01UbElPRll4TmtnMVZqRTBUVGdzTlVneE1GWXhNRWcxVmpoSU9GWTFUVEU1TERoV01UQklNVFJXTlVneE5sWTRTREU1V2lJZ0x6NDhMM04yWno0PScsXHJcbiAgICBWaWRlb1BsYXk6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRnc05TNHhORll4T1M0eE5Fd3hPU3d4TWk0eE5FdzRMRFV1TVRSYUlpQXZQand2YzNablBnPT0nLFxyXG4gICAgVmlkZW9QYXVzZTogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMlptWmlJZ1pEMGlUVEUwTERFNUxqRTBTREU0VmpVdU1UUklNVFJOTml3eE9TNHhORWd4TUZZMUxqRTBTRFpXTVRrdU1UUmFJaUF2UGp3dmMzWm5QZz09JyxcclxuICAgIFdoaXRlVGlsZTogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFJQUJBTUFBQUFHVnNuSkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQjFXbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVdFMVFJRU52Y21VZ05TNDBMakFpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenAwYVdabVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM1JwWm1Zdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pa052YlhCeVpYTnphVzl1UGpFOEwzUnBabVk2UTI5dGNISmxjM05wYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2s5eWFXVnVkR0YwYVc5dVBqRThMM1JwWm1ZNlQzSnBaVzUwWVhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sQm9iM1J2YldWMGNtbGpTVzUwWlhKd2NtVjBZWFJwYjI0K01qd3ZkR2xtWmpwUWFHOTBiMjFsZEhKcFkwbHVkR1Z5Y0hKbGRHRjBhVzl1UGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLQXRpQUJRQUFBQ1JRVEZSRkFBQUFBQUFBQmdZR0J3Y0hIaDRlS3lzcng4Zkh5OHZMek16TTdPenNBQUFBQmdZRytxN1NaZ0FBQUFwMFVrNVRBUDcrL3Y3Ky92NysvaUp4L2E4QUFBT3dTVVJCVkhqYTdkMGhic05BRUFWUW82U0ZJNlhFY0FMRGNnTkx2VUJ2RUJRVmhwa1dWWVdsaFNzVkZTN3Q1UUlzaFJ0Njk1bEVBU1pQKzhjN2Exa3pETDFmeisvenl1dnpwNkZidm9kZHJMNnVEZDF5R1o1ZVhsZGViMThOM2ZJeDdBKzU4cHJtaG02NURmdkRjZDA5NTJsdTZKYWJGYkQvelZwclpqMWx6Y3lzK2ZqOXo4eFRadGJUOHJ2OHlXbHU2QllBSWdBQUFBQUFBQUFBQUFCQU02UVhFQUVBQUFBQUFBQUFnSjJnbmFBSWlJQTNRMnFBR2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFKc0FEa1ZGQUFBQUFBQThCajBHUlVBRVJFQUVSRUFFUkVBRVJFQUVBQUFBQUFBQUFBQjJnbmFDSWlBQ1BwbFJBOVFBTlVBRVJBQUFBRVZRRVJRQkVSQ0JWbGZBY1ozYWVab2J1c1VLTUdCaFY2S1VFbEhHS0JFUkpSNi9meEV4UmtRWmw5L2xUOFMxb1ZzdWhxeVlNbVBLakNrenZmY0Nwc3hvaHJ3WTBRMDZFQUVBQUFBQUFBQUFBQUNnR2RJTGlBQUFBQUFBQUFBQXdFN1FUbEFFUk1DYklUVkFEUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0ttd1ExRVJBQUFBQUFDUFFZOUJFUkFCRVJBQkVSQUJFUkFCRVJBQkFBQUFBQUFBQUlDZG9KMmdDSWlBVDJiVUFEVkFEUkFCRVFBQVFCRlVCRVZBQkVSZ0V5dkFsSm0rVjRBcE02Yk1tREpqeW93cE02Yk1kTjBMbURLakdmSmlSRGZvUUFRQUFBQUFBQUFBQUFDQVprZ3ZJQUlBQUFBQUFBQUFBRHRCTzBFUkVBRnZodFFBTlFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFLZkNEa1ZGQUFBQUFBQThCajBHUlVBRVJFQUVSRUFFUkVBRVJFQUVBQUFBQUFBQUFBQjJnbmFDSWlBQ1BwbFJBOVFBTlVBRVJBQUFBRVZRRVJRQkVSQ0JUYXdBVTJiNlhnR216Smd5WThxTUtUT216Smd5MDNVdllNcU1ac2lMRWQyZ0F4RUFBQUFBQUFBQUFBQUFtaUc5Z0FnQUFBQUFBQUFBQU93RTdRUkZRQVM4R1ZJRDFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSndLT3hRVkFRQUFBQUR3R1BRWUZBRVJFQUVSRUFFUkVBRVJFQUVSQUFBQUFBQUFBQURZQ2RvSmlvQUkrR1JHRFZBRDFBQVJFQUVBQUJSQlJWQUVSRUFFTnJFQ1RKbnBld1dZTW1QS2pDa3pwc3lZTW1QS1ROZTlnQ2t6bWlFdlJuU0REa1FBQUFBQUFBQUFBQUFBYUliMEFpSUFBQUFBQUFBQUFMQVR0Qk1VQVJId1prZ05VQU1BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhBcTdGQlVCQUFBQUFEQVk5QmpVQVJFUUFSRVFBUkVRQVJFUUFSRUFBQUFBQUFBQUFCZ0oyZ25LQUlpNEpNWk5VQU5VQU5FUUFRQUFGQUVGVUVSRUFFUjJNUUtNR1dtN3hWZ3lvd3BNNTBQV2VuOXVnTkdYejFYYW9jQUZnQUFBQUJKUlU1RXJrSmdnZz09JyxcclxuICAgIFNldHRpbmc6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURuMGxFUVZSNDJ1MmJ6VXNWVVJqR255TzZDUHpBTW5UanBwQW8zTFR3SDFDcVRmYXhiZU9pUlMzN0Ewd1h0Uk9GVmkxYVJCczNMV29oU0lHYlFBUVhWaUJHUmhHMFVJUktVQ3BLN3EvRm5PQjJ1YzZjT1hObVJuR2UzZVcrSDgvN3pMbG4zdk54cFFvVktsUTR3akJGSkFGT1NScVgxTzdvc2l2cHZqSG1VMW5DaEJaZ2x2U1lMWUpiUzBFYW5DdklKeldLK2duc3lIMzQvOE91TWFZamIyNjVqd0NnejZONFNXcTN2b2RiQUVtblMvS3RCRGdvQWd5VTVCdGVBT0FrTUFQY0Jyb2M3UHNrRFdmZ04rd3lEd0JkbHRNTWNESTN0WUJuZGUvcEhlQVJNTlRFcmdkNEFQendlUDgzNG9lTjFkTWt6NURsc0ZObi95eXY0a2RpU0s0QXQ0QU80Q3F3R2FEd1JtemEyQjAyMTBxTTdZaHJYVTU5QU5BcTZiV2t3UVRUbjVLTzVmSUUwdVZZbFhUZUdMT1hGTXgxRHJqbFVMd0tLTjQxeDZEbG5JakVFUUNja1BSZTBva0NpZ3VKcjVMT0dHTyt4aG01aklDSlExaThMT2VKSktQWUVRQU1LdnJ0dDVaZGpTZjJGTTBGcS9zWkpJMkE2VU5jdkN6MzZUaURmVWNBY0UxU1B1L1U2TW04ay9URmZ1NlhkRmI1aVgzZEdQTThsUWZ3Tm9kMytUb3dCblEzeWRkdHYxdlBJZStiMUpJQml3RUoxSUFKMjA4azVXMjF0cldBK1YvNUNIQWNtQXRVL0EyUC9EY0NpVEFISEU4dGdDVmhnTHZBWGdZQ2sxN0pvL3lUR2ZMdVdlN1pkNzJBQzhDV0I0bjNPQXo3bUx5dE5rWmFiQUVYTWhmZVFLWWZXRXBKWkN4QTNyR1VPWmVBL3FERjE1RnBBejQ3RXZsTms5bmVJMmUzamVXQ3owQmJtdmlwTmtTTU1YOGt1U1pZTThaOHp5cUFqYkhtYU41bU9lWWpnSVhyVTkzTVdyeEhyTlFqcnFpRGtRTUxId0crT2RxRjNOTjNqZVhLelU4QW9GMVN6ZEg4WEtoSlVPN0haRFhMTWJ3QXdJQ2tKVVVMRnhlMFNicVNWUUFidzNYaTdaZTBaTG1HQXpBS2JIczBKR1UxUXR2QWFJakNXNEI3Wk92SnkycUZhNWE3MzBSUHRCaWF6MENnbmtpWmk2RjVmQlpEVk12aG83RWhjdVMzeEpKMmhWOUl1cGdUcWFMdzBoaHphYjh2cTIzeE9HL3IrTERzS2pMZ1lWenhVblUwbHR3SzJ3RGV6VXlKbUV3cVhncC9QTDRydnh0aGFlQ1NJK3p4dUExMEo4WmtXZEpOU2IyU0xrdmF5S0h3RFJ1NzErWmFqckc5NDFKOGFnQUxEUTNHVS9hL0l2TWtZQ1B6bUNidExORVZtYWNOdGdzNWlQOWZZVk5FVjFRNkhlejd5TlpTTCtKMlNhclRjcHFpeVYyaVVrRzBJdlBGdmJ6NUZiRW4rS0VrM3dNandNZVNmQ3NCWEZCZGx5OUNBUGs5eWR5ZmZwRUN1QjV0WmZWSmphS1d1ZU9TZmlubG42WUs0bGFoUW9VS1J4ZC9BY1JQR1RjUUNBVVFBQUFBQUVsRlRrU3VRbUNDJyxcclxuICAgIENoZXZyb25SaWdodDogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVGd1TlRrc01UWXVOVGhNTVRNdU1UY3NNVEpNT0M0MU9TdzNMalF4VERFd0xEWk1NVFlzTVRKTU1UQXNNVGhNT0M0MU9Td3hOaTQxT0ZvaUlDOCtQQzl6ZG1jKycsXHJcbiAgICBDaGVjazogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUIzYVdSMGFEMGlNalFpSUdobGFXZG9kRDBpTWpRaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSStQSEJoZEdnZ1pEMGlUVEl4TERkTU9Td3hPVXd6TGpVc01UTXVOVXcwTGpreExERXlMakE1VERrc01UWXVNVGRNTVRrdU5Ua3NOUzQxT1V3eU1TdzNXaUlnTHo0OEwzTjJaejQ9JyxcclxuICAgIFZpZXdJbmRpY2F0b3I6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQQ0ZFVDBOVVdWQkZJSE4yWnlCUVZVSk1TVU1nSWkwdkwxY3pReTh2UkZSRUlGTldSeUF4TGpFdkwwVk9JaUFpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2UjNKaGNHaHBZM012VTFaSEx6RXVNUzlFVkVRdmMzWm5NVEV1WkhSa0lqNEtQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUJwWkQwaWRtbGxkeTFwYm1ScFkyRjBiM0lpSUdobGFXZG9kRDBpTXpBaUlIZHBaSFJvUFNJek1DSWdkbWxsZDBKdmVEMGlMVEl1TlNBdE1TQXpNQ0F6TUNJK0NnazhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGk1emREQjdjM1J5YjJ0bExYZHBaSFJvT2pJN2MzUnliMnRsTFcxcGRHVnliR2x0YVhRNk1UQTdabWxzYkRwdWIyNWxPMzB1YzNReGUzTjBjbTlyWlMxM2FXUjBhRG8yTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zMEtDVHd2YzNSNWJHVStDZ2s4Wno0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOSURFeUxqVWdNQ0JCSURFeUxqVWdNVEl1TlNBd0lEQWdNQ0F0TVRJdU5TQXdJRUVnTVRJdU5TQXhNaTQxSURBZ01DQXdJREV5TGpVZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRESWlJR1E5SWswZ01UTWdNQ0JNSURFd0lESWdUQ0F4TmlBeUlGb2lQand2Y0dGMGFENEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXlJaUJrUFNKTklESWdNQ0JCSURJZ01pQXdJREFnTUNBdE1pQXdJRUVnTWlBeUlEQWdNQ0F3SURJZ01DSWdkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NU3d3TERBc01Td3hNeXd4TlM0MUtTSStQQzl3WVhSb1Bnb0pDVHh3WVhSb0lHTnNZWE56UFNKemRERWlJR2xrUFNKcGJtUnBZMkYwYjNJaUlIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtERXNNQ3d3TERFc01UTXNNVFV1TlNraVBqd3ZjR0YwYUQ0S0NUd3ZaejRLUEM5emRtYysnXHJcbn07XHJcblxyXG5leHBvcnQgeyBEYXRhSW1hZ2UgfTsiLCJpbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UuanMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBJbWFnZUxvYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gSW1hZ2UgbG9hZGVyIHdpdGggcHJvZ3Jlc3MgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvSW1hZ2VMb2FkZXIuanN9XHJcbiAqL1xyXG5jb25zdCBJbWFnZUxvYWRlciA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW1hZ2VcclxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLkltYWdlTG9hZGVyLmxvYWQoIElNQUdFX1VSTCApXHJcbiAgICAgKiBAbWV0aG9kIGxvYWRcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gICB1cmwgICAgICAgIC0gQW4gaW1hZ2UgdXJsXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzID0gKCkgPT4ge30sIG9uRXJyb3IgPSAoKSA9PiB7fSApIHtcclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIGNhY2hlXHJcbiAgICAgICAgVEhSRUUuQ2FjaGUuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjYWNoZWQsIHJlcXVlc3QsIGFycmF5QnVmZmVyVmlldywgYmxvYiwgdXJsQ3JlYXRvciwgaW1hZ2UsIHJlZmVyZW5jZTtcclxuXHJcbiAgICAgICAgLy8gUmVmZXJlbmNlIGtleVxyXG4gICAgICAgIGZvciAobGV0IGljb25OYW1lIGluIERhdGFJbWFnZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKERhdGFJbWFnZS5oYXNPd25Qcm9wZXJ0eShpY29uTmFtZSkgJiYgdXJsID09PSBEYXRhSW1hZ2VbaWNvbk5hbWVdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlID0gaWNvbk5hbWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FjaGVkXHJcbiAgICAgICAgY2FjaGVkID0gVEhSRUUuQ2FjaGUuZ2V0KHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCk7XHJcblxyXG4gICAgICAgIGlmIChjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY2FjaGVkLmNvbXBsZXRlICYmIGNhY2hlZC5zcmMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCBjYWNoZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZWQuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZDogMSwgdG90YWw6IDEgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoIGNhY2hlZCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25zdHJ1Y3QgYSBuZXcgWE1MSHR0cFJlcXVlc3RcclxuICAgICAgICB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xyXG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJywgJ2ltZycpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdG8gY2FjaGVcclxuICAgICAgICBUSFJFRS5DYWNoZS5hZGQocmVmZXJlbmNlID8gcmVmZXJlbmNlIDogdXJsLCBpbWFnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9uSW1hZ2VMb2FkZWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB1cmxDcmVhdG9yLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xyXG4gICAgICAgICAgICBvbkxvYWQoaW1hZ2UpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1hZ2UuY3Jvc3NPcmlnaW4gPSB0aGlzLmNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQgPyB0aGlzLmNyb3NzT3JpZ2luIDogJyc7XHJcblxyXG4gICAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5ucG1fbGlmZWN5Y2xlX2V2ZW50ICE9PSAndGVzdCcpIHtcclxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgb25FcnJvciApO1xyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ3Byb2dyZXNzJywgZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgICggIWV2ZW50ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBsb2FkZWQsIHRvdGFsLCBsZW5ndGhDb21wdXRhYmxlIH0gPSBldmVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICggbGVuZ3RoQ29tcHV0YWJsZSApIHtcclxuXHRcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkLCB0b3RhbCB9ICk7XHJcblx0XHJcbiAgICAgICAgICAgIH1cclxuXHRcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVuZCcsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICAoICFldmVudCApIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0OiB7IHJlc3BvbnNlIH0gfSA9IGV2ZW50O1xyXG5cclxuICAgICAgICAgICAgYXJyYXlCdWZmZXJWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoIHJlc3BvbnNlICk7XHJcbiAgICAgICAgICAgIGJsb2IgPSBuZXcgd2luZG93LkJsb2IoIFsgYXJyYXlCdWZmZXJWaWV3IF0gKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBvbkltYWdlTG9hZGVkLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmxDcmVhdG9yLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xyXG5cdFxyXG4gICAgICAgIH0gKTtcclxuXHRcclxuICAgICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XHJcblx0XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgSW1hZ2VMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXIuanMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBUZXh0dXJlTG9hZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBUZXh0dXJlIGxvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9UZXh0dXJlTG9hZGVyLmpzfVxyXG4gKi9cclxuY29uc3QgVGV4dHVyZUxvYWRlciA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW1hZ2UgdGV4dHVyZVxyXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuVGV4dHVyZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxyXG4gICAgICogQG1ldGhvZCBsb2FkXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXHJcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5UZXh0dXJlfSAgIFx0IC0gSW1hZ2UgdGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoIHVybCwgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTsgXHJcblxyXG4gICAgICAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEpQRUdzIGNhbid0IGhhdmUgYW4gYWxwaGEgY2hhbm5lbCwgc28gbWVtb3J5IGNhbiBiZSBzYXZlZCBieSBzdG9yaW5nIHRoZW0gYXMgUkdCLlxyXG4gICAgICAgICAgICBjb25zdCBpc0pQRUcgPSB1cmwuc2VhcmNoKCAvXFwuKGpwZ3xqcGVnKSQvICkgPiAwIHx8IHVybC5zZWFyY2goIC9eZGF0YVxcOmltYWdlXFwvanBlZy8gKSA9PT0gMDtcclxuXHJcbiAgICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gaXNKUEVHID8gVEhSRUUuUkdCRm9ybWF0IDogVEhSRUUuUkdCQUZvcm1hdDtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBvbkxvYWQoIHRleHR1cmUgKTtcclxuXHJcbiAgICAgICAgfSwgb25Qcm9ncmVzcywgb25FcnJvciApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgVGV4dHVyZUxvYWRlciB9OyIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlci5qcyc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAbW9kdWxlIEN1YmVUZXh0dXJlTG9hZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBDdWJlIFRleHR1cmUgTG9hZGVyIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzfVxyXG4gKi9cclxuY29uc3QgQ3ViZVRleHR1cmVMb2FkZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFzIGEgY3ViZSB0ZXh0dXJlXHJcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5DdWJlVGV4dHVyZUxvYWRlci5sb2FkKCBbICdweC5wbmcnLCAnbngucG5nJywgJ3B5LnBuZycsICdueS5wbmcnLCAncHoucG5nJywgJ256LnBuZycgXSApXHJcbiAgICAgKiBAbWV0aG9kIGxvYWRcclxuICAgICAqIEBwYXJhbSAge2FycmF5fSAgIHVybHMgICAgICAgIC0gYXJyYXkgb2YgNiB1cmxzIHRvIGltYWdlcywgb25lIGZvciBlYWNoIHNpZGUgb2YgdGhlIEN1YmVUZXh0dXJlLiBUaGUgdXJscyBzaG91bGQgYmUgc3BlY2lmaWVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHBvcy14LCBuZWcteCwgcG9zLXksIG5lZy15LCBwb3MteiwgbmVnLXpcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7VEhSRUUuQ3ViZVRleHR1cmV9ICAgLSBDdWJlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmxzLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yICkge1xyXG5cclxuXHQgICB2YXIgdGV4dHVyZSwgbG9hZGVkLCBwcm9ncmVzcywgYWxsLCBsb2FkaW5ncztcclxuXHJcblx0ICAgdGV4dHVyZSA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZSggW10gKTtcclxuXHJcblx0ICAgbG9hZGVkID0gMDtcclxuXHQgICBwcm9ncmVzcyA9IHt9O1xyXG5cdCAgIGFsbCA9IHt9O1xyXG5cclxuXHQgICB1cmxzLm1hcCggZnVuY3Rpb24gKCB1cmwsIGluZGV4ICkge1xyXG5cclxuXHRcdCAgIEltYWdlTG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBpbWFnZSApIHtcclxuXHJcblx0XHRcdCAgIHRleHR1cmUuaW1hZ2VzWyBpbmRleCBdID0gaW1hZ2U7XHJcblxyXG5cdFx0XHQgICBsb2FkZWQrKztcclxuXHJcblx0XHRcdCAgIGlmICggbG9hZGVkID09PSA2ICkge1xyXG5cclxuXHRcdFx0XHQgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0ICAgb25Mb2FkKCB0ZXh0dXJlICk7XHJcblxyXG5cdFx0XHQgICB9XHJcblxyXG5cdFx0ICAgfSwgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcblx0XHRcdCAgIHByb2dyZXNzWyBpbmRleCBdID0geyBsb2FkZWQ6IGV2ZW50LmxvYWRlZCwgdG90YWw6IGV2ZW50LnRvdGFsIH07XHJcblxyXG5cdFx0XHQgICBhbGwubG9hZGVkID0gMDtcclxuXHRcdFx0ICAgYWxsLnRvdGFsID0gMDtcclxuXHRcdFx0ICAgbG9hZGluZ3MgPSAwO1xyXG5cclxuXHRcdFx0ICAgZm9yICggdmFyIGkgaW4gcHJvZ3Jlc3MgKSB7XHJcblxyXG5cdFx0XHRcdCAgIGxvYWRpbmdzKys7XHJcblx0XHRcdFx0ICAgYWxsLmxvYWRlZCArPSBwcm9ncmVzc1sgaSBdLmxvYWRlZDtcclxuXHRcdFx0XHQgICBhbGwudG90YWwgKz0gcHJvZ3Jlc3NbIGkgXS50b3RhbDtcclxuXHJcblx0XHRcdCAgIH1cclxuXHJcblx0XHRcdCAgIGlmICggbG9hZGluZ3MgPCA2ICkge1xyXG5cclxuXHRcdFx0XHQgICBhbGwudG90YWwgPSBhbGwudG90YWwgLyBsb2FkaW5ncyAqIDY7XHJcblxyXG5cdFx0XHQgICB9XHJcblxyXG5cdFx0XHQgICBvblByb2dyZXNzKCBhbGwgKTtcclxuXHJcblx0XHQgICB9LCBvbkVycm9yICk7XHJcblxyXG5cdCAgIH0gKTtcclxuXHJcblx0ICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgVXNlciBNZWRpYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IFtjb25zdHJhaW50cz17IHZpZGVvOiB7IHdpZHRoOiB7IGlkZWFsOiAxOTIwIH0sIGhlaWdodDogeyBpZGVhbDogMTA4MCB9LCBmYWNpbmdNb2RlOiB7IGV4YWN0OiAnZW52aXJvbm1lbnQnIH0gfSwgYXVkaW86IGZhbHNlIH1dXHJcbiAqL1xyXG5mdW5jdGlvbiBNZWRpYSAoIGNvbnN0cmFpbnRzICkge1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRDb25zdHJhaW50cyA9IHsgdmlkZW86IHsgd2lkdGg6IHsgaWRlYWw6IDE5MjAgfSwgaGVpZ2h0OiB7IGlkZWFsOiAxMDgwIH0sIGZhY2luZ01vZGU6IHsgZXhhY3Q6ICdlbnZpcm9ubWVudCcgfSB9LCBhdWRpbzogZmFsc2UgfTtcclxuXHJcbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gT2JqZWN0LmFzc2lnbiggZGVmYXVsdENvbnN0cmFpbnRzLCBjb25zdHJhaW50cyApO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xyXG4gICAgdGhpcy5zdHJlYW0gPSBudWxsO1xyXG4gICAgdGhpcy5yYXRpb1NjYWxhciA9IDE7XHJcbiAgICB0aGlzLnZpZGVvRGV2aWNlSW5kZXggPSAwO1xyXG5cclxufTtcclxuXHJcbk1lZGlhLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIHNldENvbnRhaW5lcjogZnVuY3Rpb24gKCBjb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2V0U2NlbmU6IGZ1bmN0aW9uICggc2NlbmUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW51bWVyYXRlIGRldmljZXNcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgZW51bWVyYXRlRGV2aWNlczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkZXZpY2VzID0gdGhpcy5kZXZpY2VzO1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHsgcmVzb2x2ZSggZGV2aWNlcyApOyB9ICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZXZpY2VzLmxlbmd0aCA+IDAgPyByZXNvbHZlZFByb21pc2UgOiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCB0byBuZXh0IGF2YWlsYWJsZSB2aWRlbyBkZXZpY2VcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHN3aXRjaE5leHRWaWRlb0RldmljZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzdG9wID0gdGhpcy5zdG9wLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMuc3RhcnQuYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IHNldFZpZGVEZXZpY2VJbmRleCA9IHRoaXMuc2V0VmlkZURldmljZUluZGV4LmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy52aWRlb0RldmljZUluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLmdldERldmljZXMoICd2aWRlbycgKVxyXG4gICAgICAgICAgICAudGhlbiggZGV2aWNlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBpbmRleCA+PSBkZXZpY2VzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWRlRGV2aWNlSW5kZXgoIDAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWRlRGV2aWNlSW5kZXgoIGluZGV4ICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhcnQoIGRldmljZXNbIGluZGV4IF0gKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBkZXZpY2VzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHR5cGUga2V5d29yZCB0byBtYXRjaCBkZXZpY2Uua2luZFxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0RGV2aWNlczogZnVuY3Rpb24gKCB0eXBlID0gJ3ZpZGVvJyApIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlcztcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IF9kZXZpY2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBfZGV2aWNlcy5tYXAoIGRldmljZSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoICFkZXZpY2VzLmluY2x1ZGVzKCBkZXZpY2UgKSApIHsgZGV2aWNlcy5wdXNoKCBkZXZpY2UgKTsgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gX2RldmljZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cCggdHlwZSwgJ2knICk7XHJcbiAgICAgICAgICAgIHJldHVybiBfZGV2aWNlcy5maWx0ZXIoIGRldmljZSA9PiByZWcudGVzdCggZGV2aWNlLmtpbmQgKSApO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbnVtZXJhdGVEZXZpY2VzKClcclxuICAgICAgICAgICAgLnRoZW4oIHZhbGlkYXRlIClcclxuICAgICAgICAgICAgLnRoZW4oIGZpbHRlciApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdXNlciBtZWRpYVxyXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBjb25zdHJhaW50c1xyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0VXNlck1lZGlhOiBmdW5jdGlvbiAoIGNvbnN0cmFpbnRzICkge1xyXG5cclxuICAgICAgICBjb25zdCBzZXRNZWRpYVN0cmVhbSA9IHRoaXMuc2V0TWVkaWFTdHJlYW0uYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IHBsYXlWaWRlbyA9IHRoaXMucGxheVZpZGVvLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBvbkNhdGNoRXJyb3IgPSBlcnJvciA9PiB7IGNvbnNvbGUud2FybiggYFBBTk9MRU5TLk1lZGlhOiAke2Vycm9yfWAgKTsgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSggY29uc3RyYWludHMgKVxyXG4gICAgICAgICAgICAudGhlbiggc2V0TWVkaWFTdHJlYW0gKVxyXG4gICAgICAgICAgICAudGhlbiggcGxheVZpZGVvIClcclxuICAgICAgICAgICAgLmNhdGNoKCBvbkNhdGNoRXJyb3IgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHZpZGVvIGRldmljZSBpbmRleFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0VmlkZURldmljZUluZGV4OiBmdW5jdGlvbiAoIGluZGV4ICkge1xyXG5cclxuICAgICAgICB0aGlzLnZpZGVvRGV2aWNlSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgc3RyZWFtaW5nXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhRGV2aWNlSW5mb30gW3RhcmdldERldmljZV1cclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiggdGFyZ2V0RGV2aWNlICkge1xyXG5cclxuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IHRoaXMuY29uc3RyYWludHM7XHJcbiAgICAgICAgY29uc3QgZ2V0VXNlck1lZGlhID0gdGhpcy5nZXRVc2VyTWVkaWEuYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IG9uVmlkZW9EZXZpY2VzID0gZGV2aWNlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFkZXZpY2VzIHx8IGRldmljZXMubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCAnbm8gdmlkZW8gZGV2aWNlIGZvdW5kJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGV2aWNlID0gdGFyZ2V0RGV2aWNlIHx8IGRldmljZXNbIDAgXTtcclxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZGV2aWNlSWQgPSBkZXZpY2UuZGV2aWNlSWQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VXNlck1lZGlhKCBjb25zdHJhaW50cyApO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZVZpZGVvRWxlbWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREZXZpY2VzKCkudGhlbiggb25WaWRlb0RldmljZXMgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBzdHJlYW1pbmdcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5zdHJlYW07XHJcblxyXG4gICAgICAgIGlmICggc3RyZWFtICYmIHN0cmVhbS5hY3RpdmUgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0cmFjayA9IHN0cmVhbS5nZXRUcmFja3MoKVsgMCBdO1xyXG5cclxuICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zdHJlYW0gPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBtZWRpYSBzdHJlYW1cclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW19IHN0cmVhbSBcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldE1lZGlhU3RyZWFtOiBmdW5jdGlvbiAoIHN0cmVhbSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnNjZW5lICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5iYWNrZ3JvdW5kID0gdGhpcy5jcmVhdGVWaWRlb1RleHR1cmUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxheSB2aWRlbyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwbGF5VmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwbGF5JyB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGF1c2UgdmlkZW8gZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcGF1c2VWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYXVzZScgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyB0ZXh0dXJlXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1RIUkVFLlZpZGVvVGV4dHVyZX1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlVmlkZW9UZXh0dXJlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy5lbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVmlkZW9UZXh0dXJlKCB2aWRlbyApO1xyXG5cclxuICAgICAgICB0ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUuZm9ybWF0ID0gVEhSRUUuUkdCRm9ybWF0O1xyXG4gICAgICAgIHRleHR1cmUuY2VudGVyLnNldCggMC41LCAwLjUgKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHZpZGVvIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTFZpZGVvRWxlbWVudH1cclxuICAgICAqIEBmaXJlcyBNZWRpYSNjYW5wbGF5XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvRWxlbWVudDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWaWRlbyBjYW4gcGxheSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhI2NhbnBsYXlcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjYW5QbGF5ID0gKCkgPT4gZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2FucGxheScgfSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ2F1dG9wbGF5JywgJycgKTtcclxuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdtdXRlZCcsICcnICk7XHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xyXG5cclxuICAgICAgICB2aWRlby5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdFBvc2l0aW9uID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUub2JqZWN0Rml0ID0gJ2NvdmVyJztcclxuICAgICAgICB2aWRlby5zdHlsZS5kaXNwbGF5ID0gdGhpcy5zY2VuZSA/ICdub25lJyA6ICcnO1xyXG5cclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnY2FucGxheScsIGNhblBsYXkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZGVvO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiB3aW5kb3cgcmVzaXplIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC52aWRlb1dpZHRoICYmIHRoaXMuZWxlbWVudC52aWRlb0hlaWdodCAmJiB0aGlzLnNjZW5lICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aDogd2lkdGgsIGNsaWVudEhlaWdodDogaGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuc2NlbmUuYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgY29uc3QgeyB2aWRlb1dpZHRoLCB2aWRlb0hlaWdodCB9ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFSYXRpbyA9IHZpZGVvSGVpZ2h0IC8gdmlkZW9XaWR0aDtcclxuICAgICAgICAgICAgY29uc3Qgdmlld3BvcnRSYXRpbyA9IHRoaXMuY29udGFpbmVyID8gd2lkdGggLyBoZWlnaHQgOiAxLjA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gY2FtZXJhUmF0aW8gKiB2aWV3cG9ydFJhdGlvICogdGhpcy5yYXRpb1NjYWxhcjtcclxuXHJcbiAgICAgICAgICAgIGlmICggd2lkdGggPiBoZWlnaHQgKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoIHJhdGlvLCAxICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLnJlcGVhdC5zZXQoIDEsIDEgLyByYXRpbyApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBNZWRpYSB9OyIsIlxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBSZXRpY2xlIDNEIFNwcml0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtUSFJFRS5Db2xvcn0gW2NvbG9yPTB4ZmZmZmZmXSAtIENvbG9yIG9mIHRoZSByZXRpY2xlIHNwcml0ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthdXRvU2VsZWN0PXRydWVdIC0gQXV0byBzZWxlY3Rpb25cclxuICogQHBhcmFtIHtudW1iZXJ9IFtkd2VsbFRpbWU9MTUwMF0gLSBEdXJhdGlvbiBmb3IgZHdlbGxpbmcgc2VxdWVuY2UgdG8gY29tcGxldGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBSZXRpY2xlICggY29sb3IgPSAweGZmZmZmZiwgYXV0b1NlbGVjdCA9IHRydWUsIGR3ZWxsVGltZSA9IDE1MDAgKSB7XHJcblxyXG4gICAgdGhpcy5kcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICBjb25zdCB7IGNhbnZhcywgY29udGV4dCB9ID0gdGhpcy5jcmVhdGVDYW52YXMoKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNwcml0ZU1hdGVyaWFsKCB7IGNvbG9yLCBtYXA6IHRoaXMuY3JlYXRlQ2FudmFzVGV4dHVyZSggY2FudmFzICkgfSApO1xyXG5cclxuICAgIFRIUkVFLlNwcml0ZS5jYWxsKCB0aGlzLCBtYXRlcmlhbCApO1xyXG4gICAgLy8gdGhpcyA9IG5ldyBUSFJFRS5TcHJpdGUobWF0ZXJpYWwpO1xyXG4gICAgY29uc29sZS5sb2coJ1F1YSBoYWhhIDIyJyk7XHJcblxyXG4gICAgdGhpcy5jYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApOyAgICBcclxuXHJcbiAgICB0aGlzLmF1dG9TZWxlY3QgPSBhdXRvU2VsZWN0O1xyXG4gICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XHJcbiAgICB0aGlzLnJpcHBsZUR1cmF0aW9uID0gNTAwO1xyXG4gICAgdGhpcy5wb3NpdGlvbi56ID0gLTEwO1xyXG4gICAgdGhpcy5jZW50ZXIuc2V0KCAwLjUsIDAuNSApO1xyXG4gICAgdGhpcy5zY2FsZS5zZXQoIDAuNSwgMC41LCAxICk7XHJcblxyXG4gICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IG51bGw7XHJcbiAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XHJcblxyXG59O1xyXG5cclxuUmV0aWNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5TcHJpdGUucHJvdG90eXBlKTtcclxuUmV0aWNsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZXRpY2xlO1xyXG5cclxuUmV0aWNsZS5wcm90b3R5cGUuc2V0Q29sb3IgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5TcHJpdGUucHJvdG90eXBlICksIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBtYXRlcmlhbCBjb2xvclxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5Db2xvcn0gY29sb3IgXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldENvbG9yOiBmdW5jdGlvbiAoIGNvbG9yICkge1xyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLmNvbG9yLmNvcHkoIGNvbG9yIGluc3RhbmNlb2YgVEhSRUUuQ29sb3IgPyBjb2xvciA6IG5ldyBUSFJFRS5Db2xvciggY29sb3IgKSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY2FudmFzIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5DYW52YXNUZXh0dXJlfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVDYW52YXNUZXh0dXJlOiBmdW5jdGlvbiAoIGNhbnZhcyApIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKCBjYW52YXMgKTtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGNhbnZhcyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIHtIVE1MQ2FudmFzRWxlbWVudH0gb2JqZWN0LmNhbnZhc1xyXG4gICAgICogQHJldHVybnMge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gb2JqZWN0LmNvbnRleHRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQ2FudmFzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gMzI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gMzI7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGggKiBkcHI7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIGRwcjtcclxuICAgICAgICBjb250ZXh0LnNjYWxlKCBkcHIsIGRwciApO1xyXG5cclxuICAgICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSAncmdiYSgyMDAsMjAwLDIwMCwwLjkpJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgY2FudmFzLCBjb250ZXh0IH07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBjYW52YXMgYXJjIGJ5IHByb2dyZXNzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZ3Jlc3MgXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3M6IGZ1bmN0aW9uICggcHJvZ3Jlc3MgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBtYXRlcmlhbCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcclxuICAgICAgICBjb25zdCBkZWdyZWUgPSBwcm9ncmVzcyAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvci5nZXRTdHlsZSgpO1xyXG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcclxuICAgICAgICBjb25zdCB5ID0gY2FudmFzSGVpZ2h0ICogMC41IC8gZHByO1xyXG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBpZiAoIHByb2dyZXNzID09PSAwICkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgY2FudmFzV2lkdGggLyAxNiwgMCwgMiAqIE1hdGguUEkgKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIGNhbnZhc1dpZHRoIC8gNCAtIGxpbmVXaWR0aCwgLU1hdGguUEkgLyAyLCAtTWF0aC5QSSAvIDIgKyBkZWdyZWUgKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJpcHBsZSBlZmZlY3RcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLXN0YXJ0XHJcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1lbmRcclxuICAgICAqL1xyXG4gICAgcmlwcGxlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgeyBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBtYXRlcmlhbCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMucmlwcGxlRHVyYXRpb247XHJcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGRwciA9IHRoaXMuZHByO1xyXG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcclxuICAgICAgICBjb25zdCB5ID0gY2FudmFzSGVpZ2h0ICogMC41IC8gZHByO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdXBkYXRlICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBlbGFwc2VkIC8gZHVyYXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSAxLjAgLSBwcm9ncmVzcyA+IDAgPyAxLjAgLSBwcm9ncmVzcyA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHByb2dyZXNzICogY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGByZ2JhKCR7Y29sb3IuciAqIDI1NX0sICR7Y29sb3IuZyAqIDI1NX0sICR7Y29sb3IuYiAqIDI1NX0sICR7b3BhY2l0eX0pYDtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHByb2dyZXNzID49IDEuMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRpbWVySWQgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogUmV0aWNsZSByaXBwbGUgZW5kIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1yaXBwbGUtZW5kXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1yaXBwbGUtZW5kJyB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRpY2xlIHJpcHBsZSBzdGFydCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1yaXBwbGUtc3RhcnRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLXN0YXJ0JyB9ICk7XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHJldGljbGUgdmlzaWJsZVxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgcmV0aWNsZSBpbnZpc2libGVcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgZHdlbGxpbmdcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1zdGFydFxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5hdXRvU2VsZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldGljbGUgc3RhcnQgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtc3RhcnRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtc3RhcnQnIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmQgZHdlbGxpbmdcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtZW5kXHJcbiAgICAgKi9cclxuICAgIGVuZDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5zdGFydFRpbWVzdGFtcCApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy50aW1lcklkICk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVzdGFtcCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldGljbGUgZW5kIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLWVuZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1lbmQnIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGR3ZWxsaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXVwZGF0ZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy51cGRhdGUuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lc3RhbXA7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBlbGFwc2VkIC8gdGhpcy5kd2VsbFRpbWU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggcHJvZ3Jlc3MgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0aWNsZSB1cGRhdGUgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtdXBkYXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXVwZGF0ZScsIHByb2dyZXNzIH0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9ncmVzcyA+PSAxLjAgKSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuY2FsbGJhY2sgKSB7IHRoaXMuY2FsbGJhY2soKTsgfVxyXG4gICAgICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJpcHBsZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgUmV0aWNsZSB9OyIsIi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91J3JlIGF3ZXNvbWUhXG4gKi9cblxuXG52YXIgX0dyb3VwID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLl90d2VlbnMgPSB7fTtcblx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcbn07XG5cbl9Hcm91cC5wcm90b3R5cGUgPSB7XG5cdGdldEFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVucykubWFwKGZ1bmN0aW9uICh0d2VlbklkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdHdlZW5zW3R3ZWVuSWRdO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fSxcblxuXHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX3R3ZWVucyA9IHt9O1xuXG5cdH0sXG5cblx0YWRkOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuXHRcdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc1t0d2Vlbi5nZXRJZCgpXTtcblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV07XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lLCBwcmVzZXJ2ZSkge1xuXG5cdFx0dmFyIHR3ZWVuSWRzID0gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKTtcblxuXHRcdGlmICh0d2Vlbklkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IFRXRUVOLm5vdygpO1xuXG5cdFx0Ly8gVHdlZW5zIGFyZSB1cGRhdGVkIGluIFwiYmF0Y2hlc1wiLiBJZiB5b3UgYWRkIGEgbmV3IHR3ZWVuIGR1cmluZyBhbiB1cGRhdGUsIHRoZW4gdGhlXG5cdFx0Ly8gbmV3IHR3ZWVuIHdpbGwgYmUgdXBkYXRlZCBpbiB0aGUgbmV4dCBiYXRjaC5cblx0XHQvLyBJZiB5b3UgcmVtb3ZlIGEgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgaXQgbWF5IG9yIG1heSBub3QgYmUgdXBkYXRlZC4gSG93ZXZlcixcblx0XHQvLyBpZiB0aGUgcmVtb3ZlZCB0d2VlbiB3YXMgYWRkZWQgZHVyaW5nIHRoZSBjdXJyZW50IGJhdGNoLCB0aGVuIGl0IHdpbGwgbm90IGJlIHVwZGF0ZWQuXG5cdFx0d2hpbGUgKHR3ZWVuSWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdHdlZW5JZHMubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHR2YXIgdHdlZW4gPSB0aGlzLl90d2VlbnNbdHdlZW5JZHNbaV1dO1xuXG5cdFx0XHRcdGlmICh0d2VlbiAmJiB0d2Vlbi51cGRhdGUodGltZSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dHdlZW4uX2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCFwcmVzZXJ2ZSkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHR3ZWVuSWRzID0gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cbnZhciBUV0VFTiA9IG5ldyBfR3JvdXAoKTtcblxuVFdFRU4uR3JvdXAgPSBfR3JvdXA7XG5UV0VFTi5fbmV4dElkID0gMDtcblRXRUVOLm5leHRJZCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIFRXRUVOLl9uZXh0SWQrKztcbn07XG5cblxuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbC5cbi8vIEluIG5vZGUuanMsIHVzZSBwcm9jZXNzLmhydGltZS5cbmlmICh0eXBlb2YgKHNlbGYpID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgKHByb2Nlc3MpICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmhydGltZSkge1xuXHRUV0VFTi5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZSgpO1xuXG5cdFx0Ly8gQ29udmVydCBbc2Vjb25kcywgbmFub3NlY29uZHNdIHRvIG1pbGxpc2Vjb25kcy5cblx0XHRyZXR1cm4gdGltZVswXSAqIDEwMDAgKyB0aW1lWzFdIC8gMTAwMDAwMDtcblx0fTtcbn1cbi8vIEluIGEgYnJvd3NlciwgdXNlIHNlbGYucGVyZm9ybWFuY2Uubm93IGlmIGl0IGlzIGF2YWlsYWJsZS5cbmVsc2UgaWYgKHR5cGVvZiAoc2VsZikgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICBzZWxmLnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiZcblx0XHQgc2VsZi5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHQvLyBUaGlzIG11c3QgYmUgYm91bmQsIGJlY2F1c2UgZGlyZWN0bHkgYXNzaWduaW5nIHRoaXMgZnVuY3Rpb25cblx0Ly8gbGVhZHMgdG8gYW4gaW52b2NhdGlvbiBleGNlcHRpb24gaW4gQ2hyb21lLlxuXHRUV0VFTi5ub3cgPSBzZWxmLnBlcmZvcm1hbmNlLm5vdy5iaW5kKHNlbGYucGVyZm9ybWFuY2UpO1xufVxuLy8gVXNlIERhdGUubm93IGlmIGl0IGlzIGF2YWlsYWJsZS5cbmVsc2UgaWYgKERhdGUubm93ICE9PSB1bmRlZmluZWQpIHtcblx0VFdFRU4ubm93ID0gRGF0ZS5ub3c7XG59XG4vLyBPdGhlcndpc2UsIHVzZSAnbmV3IERhdGUoKS5nZXRUaW1lKCknLlxuZWxzZSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH07XG59XG5cblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAob2JqZWN0LCBncm91cCkge1xuXHR0aGlzLl9vYmplY3QgPSBvYmplY3Q7XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0ID0ge307XG5cdHRoaXMuX3ZhbHVlc0VuZCA9IHt9O1xuXHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCA9IHt9O1xuXHR0aGlzLl9kdXJhdGlvbiA9IDEwMDA7XG5cdHRoaXMuX3JlcGVhdCA9IDA7XG5cdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IHVuZGVmaW5lZDtcblx0dGhpcy5feW95byA9IGZhbHNlO1xuXHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dGhpcy5fcmV2ZXJzZWQgPSBmYWxzZTtcblx0dGhpcy5fZGVsYXlUaW1lID0gMDtcblx0dGhpcy5fc3RhcnRUaW1lID0gbnVsbDtcblx0dGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBUV0VFTi5FYXNpbmcuTGluZWFyLk5vbmU7XG5cdHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR0aGlzLl9jaGFpbmVkVHdlZW5zID0gW107XG5cdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9ncm91cCA9IGdyb3VwIHx8IFRXRUVOO1xuXHR0aGlzLl9pZCA9IFRXRUVOLm5leHRJZCgpO1xuXG59O1xuXG5UV0VFTi5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGdldElkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9LFxuXG5cdGlzUGxheWluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc1BsYXlpbmc7XG5cdH0sXG5cblx0dG86IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBkdXJhdGlvbikge1xuXG5cdFx0dGhpcy5fdmFsdWVzRW5kID0gT2JqZWN0LmNyZWF0ZShwcm9wZXJ0aWVzKTtcblxuXHRcdGlmIChkdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZHVyYXRpb246IGZ1bmN0aW9uIGR1cmF0aW9uKGQpIHtcblx0XHR0aGlzLl9kdXJhdGlvbiA9IGQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c3RhcnQ6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR0aGlzLl9ncm91cC5hZGQodGhpcyk7XG5cblx0XHR0aGlzLl9pc1BsYXlpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHR5cGVvZiB0aW1lID09PSAnc3RyaW5nJyA/IFRXRUVOLm5vdygpICsgcGFyc2VGbG9hdCh0aW1lKSA6IHRpbWUgOiBUV0VFTi5ub3coKTtcblx0XHR0aGlzLl9zdGFydFRpbWUgKz0gdGhpcy5fZGVsYXlUaW1lO1xuXG5cdFx0Zm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XG5cdFx0XHRcdHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbdGhpcy5fb2JqZWN0W3Byb3BlcnR5XV0uY29uY2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGB0bygpYCBzcGVjaWZpZXMgYSBwcm9wZXJ0eSB0aGF0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIHNvdXJjZSBvYmplY3QsXG5cdFx0XHQvLyB3ZSBzaG91bGQgbm90IHNldCB0aGF0IHByb3BlcnR5IGluIHRoZSBvYmplY3Rcblx0XHRcdGlmICh0aGlzLl9vYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fb2JqZWN0W3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKCh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3A6IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICghdGhpcy5faXNQbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzLl9ncm91cC5yZW1vdmUodGhpcyk7XG5cdFx0dGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiAodGhpcy5fb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX29uU3RvcENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLnVwZGF0ZShJbmZpbml0eSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRzdG9wQ2hhaW5lZFR3ZWVuczogZnVuY3Rpb24gKCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdG9wKCk7XG5cdFx0fVxuXG5cdH0sXG5cblx0Z3JvdXA6IGZ1bmN0aW9uIChncm91cCkge1xuXHRcdHRoaXMuX2dyb3VwID0gZ3JvdXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHJlcGVhdDogZnVuY3Rpb24gKHRpbWVzKSB7XG5cblx0XHR0aGlzLl9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHJlcGVhdERlbGF5OiBmdW5jdGlvbiAoYW1vdW50KSB7XG5cblx0XHR0aGlzLl9yZXBlYXREZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR5b3lvOiBmdW5jdGlvbiAoeW95bykge1xuXG5cdFx0dGhpcy5feW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlYXNpbmc6IGZ1bmN0aW9uIChlYXNpbmdGdW5jdGlvbikge1xuXG5cdFx0dGhpcy5fZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmdGdW5jdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGludGVycG9sYXRpb246IGZ1bmN0aW9uIChpbnRlcnBvbGF0aW9uRnVuY3Rpb24pIHtcblxuXHRcdHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb25GdW5jdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGNoYWluOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uVXBkYXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uUmVwZWF0OiBmdW5jdGlvbiBvblJlcGVhdChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25Db21wbGV0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uU3RvcDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSkge1xuXG5cdFx0dmFyIHByb3BlcnR5O1xuXHRcdHZhciBlbGFwc2VkO1xuXHRcdHZhciB2YWx1ZTtcblxuXHRcdGlmICh0aW1lIDwgdGhpcy5fc3RhcnRUaW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlKSB7XG5cblx0XHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRlbGFwc2VkID0gKHRpbWUgLSB0aGlzLl9zdGFydFRpbWUpIC8gdGhpcy5fZHVyYXRpb247XG5cdFx0ZWxhcHNlZCA9ICh0aGlzLl9kdXJhdGlvbiA9PT0gMCB8fCBlbGFwc2VkID4gMSkgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhbHVlID0gdGhpcy5fZWFzaW5nRnVuY3Rpb24oZWxhcHNlZCk7XG5cblx0XHRmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBEb24ndCB1cGRhdGUgcHJvcGVydGllcyB0aGF0IGRvIG5vdCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc3RhcnQgPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblx0XHRcdHZhciBlbmQgPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoZW5kIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHR0aGlzLl9vYmplY3RbcHJvcGVydHldID0gdGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uKGVuZCwgdmFsdWUpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ3N0cmluZycpIHtcblxuXHRcdFx0XHRcdGlmIChlbmQuY2hhckF0KDApID09PSAnKycgfHwgZW5kLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZW5kID0gcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3RlY3QgYWdhaW5zdCBub24gbnVtZXJpYyBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAodGhpcy5fb25VcGRhdGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayh0aGlzLl9vYmplY3QsIGVsYXBzZWQpO1xuXHRcdH1cblxuXHRcdGlmIChlbGFwc2VkID09PSAxKSB7XG5cblx0XHRcdGlmICh0aGlzLl9yZXBlYXQgPiAwKSB7XG5cblx0XHRcdFx0aWYgKGlzRmluaXRlKHRoaXMuX3JlcGVhdCkpIHtcblx0XHRcdFx0XHR0aGlzLl9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQpIHtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldICsgcGFyc2VGbG9hdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAodGhpcy5feW95bykge1xuXHRcdFx0XHRcdFx0dmFyIHRtcCA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5feW95bykge1xuXHRcdFx0XHRcdHRoaXMuX3JldmVyc2VkID0gIXRoaXMuX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3JlcGVhdERlbGF5VGltZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX3JlcGVhdERlbGF5VGltZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fZGVsYXlUaW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAodGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cblx0XHRcdFx0XHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdFx0XHQvLyBNYWtlIHRoZSBjaGFpbmVkIHR3ZWVucyBzdGFydCBleGFjdGx5IGF0IHRoZSB0aW1lIHRoZXkgc2hvdWxkLFxuXHRcdFx0XHRcdC8vIGV2ZW4gaWYgdGhlIGB1cGRhdGUoKWAgbWV0aG9kIHdhcyBjYWxsZWQgd2F5IHBhc3QgdGhlIGR1cmF0aW9uIG9mIHRoZSB0d2VlblxuXHRcdFx0XHRcdHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RhcnQodGhpcy5fc3RhcnRUaW1lICsgdGhpcy5fZHVyYXRpb24pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9XG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoMiAtIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKC0tayAqIChrIC0gMikgLSAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtICgtLWsgKiBrICogayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgLSAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbihrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMCA/IDAgOiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coMiwgLSAxMCAqIGspO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgtIE1hdGgucG93KDIsIC0gMTAgKiAoayAtIDEpKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q2lyY3VsYXI6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gayAqIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gKC0tayAqIGspKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLSAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBrICogaykgLSAxKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIChrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIGspICogTWF0aC5zaW4oKGsgLSAwLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRrICo9IDI7XG5cblx0XHRcdGlmIChrIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gLTAuNSAqIE1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCYWNrOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiAoayAqIGsgKiAoKHMgKyAxKSAqIGsgLSBzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoMSAtIGspO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAoMSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgxLjUgLyAyLjc1KSkgKiBrICsgMC43NTtcblx0XHRcdH0gZWxzZSBpZiAoayA8ICgyLjUgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuMjUgLyAyLjc1KSkgKiBrICsgMC45Mzc1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjYyNSAvIDIuNzUpKSAqIGsgKyAwLjk4NDM3NTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPCAwLjUpIHtcblx0XHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oayAqIDIpICogMC41O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoayAqIDIgLSAxKSAqIDAuNSArIDAuNTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cblRXRUVOLkludGVycG9sYXRpb24gPSB7XG5cblx0TGluZWFyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoayA8IDApIHtcblx0XHRcdHJldHVybiBmbih2WzBdLCB2WzFdLCBmKTtcblx0XHR9XG5cblx0XHRpZiAoayA+IDEpIHtcblx0XHRcdHJldHVybiBmbih2W21dLCB2W20gLSAxXSwgbSAtIGYpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbih2W2ldLCB2W2kgKyAxID4gbSA/IG0gOiBpICsgMV0sIGYgLSBpKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBiID0gMDtcblx0XHR2YXIgbiA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgcHcgPSBNYXRoLnBvdztcblx0XHR2YXIgYm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkJlcm5zdGVpbjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IG47IGkrKykge1xuXHRcdFx0YiArPSBwdygxIC0gaywgbiAtIGkpICogcHcoaywgaSkgKiB2W2ldICogYm4obiwgaSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGI7XG5cblx0fSxcblxuXHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIGYgPSBtICogaztcblx0XHR2YXIgaSA9IE1hdGguZmxvb3IoZik7XG5cdFx0dmFyIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKHZbMF0gPT09IHZbbV0pIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdGkgPSBNYXRoLmZsb29yKGYgPSBtICogKDEgKyBrKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2WyhpIC0gMSArIG0pICUgbV0sIHZbaV0sIHZbKGkgKyAxKSAlIG1dLCB2WyhpICsgMikgJSBtXSwgZiAtIGkpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRcdHJldHVybiB2WzBdIC0gKGZuKHZbMF0sIHZbMF0sIHZbMV0sIHZbMV0sIC1mKSAtIHZbMF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA+IDEpIHtcblx0XHRcdFx0cmV0dXJuIHZbbV0gLSAoZm4odlttXSwgdlttXSwgdlttIC0gMV0sIHZbbSAtIDFdLCBmIC0gbSkgLSB2W21dKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbaSA/IGkgLSAxIDogMF0sIHZbaV0sIHZbbSA8IGkgKyAxID8gbSA6IGkgKyAxXSwgdlttIDwgaSArIDIgPyBtIDogaSArIDJdLCBmIC0gaSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAocDAsIHAxLCB0KSB7XG5cblx0XHRcdHJldHVybiAocDEgLSBwMCkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAobiwgaSkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblxuXHRcdFx0cmV0dXJuIGZjKG4pIC8gZmMoaSkgLyBmYyhuIC0gaSk7XG5cblx0XHR9LFxuXG5cdFx0RmFjdG9yaWFsOiAoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsxXTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChuKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxO1xuXG5cdFx0XHRcdGlmIChhW25dKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFbbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gbjsgaSA+IDE7IGktLSkge1xuXHRcdFx0XHRcdHMgKj0gaTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFbbl0gPSBzO1xuXHRcdFx0XHRyZXR1cm4gcztcblxuXHRcdFx0fTtcblxuXHRcdH0pKCksXG5cblx0XHRDYXRtdWxsUm9tOiBmdW5jdGlvbiAocDAsIHAxLCBwMiwgcDMsIHQpIHtcblxuXHRcdFx0dmFyIHYwID0gKHAyIC0gcDApICogMC41O1xuXHRcdFx0dmFyIHYxID0gKHAzIC0gcDEpICogMC41O1xuXHRcdFx0dmFyIHQyID0gdCAqIHQ7XG5cdFx0XHR2YXIgdDMgPSB0ICogdDI7XG5cblx0XHRcdHJldHVybiAoMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSkgKiB0MyArICgtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbihmdW5jdGlvbiAocm9vdCkge1xuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblxuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIFRXRUVOO1xuXHRcdH0pO1xuXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cblx0XHQvLyBOb2RlLmpzXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBUV0VFTjtcblxuXHR9IGVsc2UgaWYgKHJvb3QgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0Ly8gR2xvYmFsIHZhcmlhYmxlXG5cdFx0cm9vdC5UV0VFTiA9IFRXRUVOO1xuXG5cdH1cblxufSkodGhpcyk7XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XHJcbmltcG9ydCB7IE1PREVTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XHJcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBJbmZvcm1hdGlvbiBzcG90IGF0dGFjaGVkIHRvIHBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlPTMwMF0gLSBEZWZhdWx0IHNjYWxlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaW1hZ2VTcmM9UEFOT0xFTlMuRGF0YUltYWdlLkluZm9dIC0gSW1hZ2Ugb3ZlcmxheSBpbmZvXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuaW1hdGVkPXRydWVdIC0gRW5hYmxlIGRlZmF1bHQgaG92ZXIgYW5pbWF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBJbmZvc3BvdCAoIHNjYWxlID0gMzAwLCBpbWFnZVNyYywgYW5pbWF0ZWQgKSB7XHJcblx0XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IDUwMCwgc2NhbGVGYWN0b3IgPSAxLjM7XHJcblxyXG4gICAgaW1hZ2VTcmMgPSBpbWFnZVNyYyB8fCBEYXRhSW1hZ2UuSW5mbztcclxuXHJcbiAgICBUSFJFRS5TcHJpdGUuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdpbmZvc3BvdCc7XHJcblxyXG4gICAgdGhpcy5hbmltYXRlZCA9IGFuaW1hdGVkICE9PSB1bmRlZmluZWQgPyBhbmltYXRlZCA6IHRydWU7XHJcbiAgICB0aGlzLmlzSG92ZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogVE9ETzogVGhyZWUuanMgYnVnIGhvdGZpeCBmb3Igc3ByaXRlIHJheWNhc3RpbmcgcjEwNFxyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTQ2MjRcclxuICAgICAqL1xyXG4gICAgdGhpcy5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMudG9QYW5vcmFtYSA9IG51bGw7XHJcbiAgICB0aGlzLmN1cnNvclN0eWxlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XHJcblxyXG4gICAgdGhpcy5zY2FsZS5zZXQoIHNjYWxlLCBzY2FsZSwgMSApO1xyXG4gICAgdGhpcy5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5vcmlnaW5hbFJheWNhc3QgPSB0aGlzLnJheWNhc3Q7XHJcblxyXG4gICAgLy8gRXZlbnQgSGFuZGxlclxyXG4gICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gbnVsbDtcdFxyXG5cclxuICAgIHRoaXMubWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICB0aGlzLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgIHRoaXMuc2NhbGVVcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG4gICAgdGhpcy5zY2FsZURvd25BbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuXHJcblxyXG4gICAgY29uc3QgcG9zdExvYWQgPSBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMubWF0ZXJpYWwgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjb25zdCByYXRpbyA9IHRleHR1cmUuaW1hZ2Uud2lkdGggLyB0ZXh0dXJlLmltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgICAgICB0ZXh0dXJlLmltYWdlLndpZHRoID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsV2lkdGggfHwgNjQ7XHJcbiAgICAgICAgdGV4dHVyZS5pbWFnZS5oZWlnaHQgPSB0ZXh0dXJlLmltYWdlLm5hdHVyYWxIZWlnaHQgfHwgNjQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KCByYXRpbyAqIHNjYWxlLCBzY2FsZSwgMSApO1xyXG5cclxuICAgICAgICB0ZXh0dXJlU2NhbGUuY29weSggdGhpcy5zY2FsZSApO1xyXG5cclxuICAgICAgICB0aGlzLnNjYWxlVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMuc2NhbGUgKVxyXG4gICAgICAgICAgICAudG8oIHsgeDogdGV4dHVyZVNjYWxlLnggKiBzY2FsZUZhY3RvciwgeTogdGV4dHVyZVNjYWxlLnkgKiBzY2FsZUZhY3RvciB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCApO1xyXG5cclxuICAgICAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5zY2FsZSApXHJcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCwgeTogdGV4dHVyZVNjYWxlLnkgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgIH0uYmluZCggdGhpcyApO1xyXG5cclxuICAgIC8vIEFkZCBzaG93IGFuZCBoaWRlIGFuaW1hdGlvbnNcclxuICAgIHRoaXMuc2hvd0FuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXHJcbiAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDEgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgIC5vblN0YXJ0KCB0aGlzLmVuYWJsZVJheWNhc3QuYmluZCggdGhpcywgdHJ1ZSApIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcclxuXHJcbiAgICB0aGlzLmhpZGVBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWF0ZXJpYWwgKVxyXG4gICAgICAgIC50byggeyBvcGFjaXR5OiAwIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAub25TdGFydCggdGhpcy5lbmFibGVSYXljYXN0LmJpbmQoIHRoaXMsIGZhbHNlICkgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5vbkNsaWNrICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcicsIHRoaXMub25Ib3ZlciApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnaG92ZXJlbnRlcicsIHRoaXMub25Ib3ZlclN0YXJ0ICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmxlYXZlJywgdGhpcy5vbkhvdmVyRW5kICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCB0aGlzLm9uRHVhbEV5ZUVmZmVjdCApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtY29udGFpbmVyJywgdGhpcy5zZXRDb250YWluZXIuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdkaXNtaXNzJywgdGhpcy5vbkRpc21pc3MgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWluZm9zcG90LWZvY3VzJywgdGhpcy5zZXRGb2N1c01ldGhvZCApO1xyXG5cclxuICAgIFRleHR1cmVMb2FkZXIubG9hZCggaW1hZ2VTcmMsIHBvc3RMb2FkICk7XHRcclxuXHJcbn07XHJcblxyXG5JbmZvc3BvdC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5TcHJpdGUucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogSW5mb3Nwb3QsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgaW5mb3Nwb3QgY29udGFpbmVyXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG9iamVjdH0gZGF0YSAtIERhdGEgd2l0aCBjb250YWluZXIgaW5mb3JtYXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRhaW5lcjogZnVuY3Rpb24gKCBkYXRhICkge1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyO1xyXG5cdFxyXG4gICAgICAgIGlmICggZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xyXG5cdFxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhO1xyXG5cdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRhdGEgJiYgZGF0YS5jb250YWluZXIgKSB7XHJcblx0XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xyXG5cdFxyXG4gICAgICAgIH1cclxuXHRcclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudCBpZiBleGlzdHNcclxuICAgICAgICBpZiAoIGNvbnRhaW5lciAmJiB0aGlzLmVsZW1lbnQgKSB7XHJcblx0XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5lbGVtZW50ICk7XHJcblx0XHJcbiAgICAgICAgfVxyXG5cdFxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIG9mIHRoaXMgaW5mb3Nwb3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBhIGNsaWNrIGV2ZW50XHJcbiAgICAgKiBUcmFuc2xhdGUgYW5kIGxvY2sgdGhlIGhvdmVyaW5nIGVsZW1lbnQgaWYgYW55XHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbmluZyBtb3VzZUV2ZW50IHdpdGggY2xpZW50WCBhbmQgY2xpZW50WVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgJiYgdGhpcy5nZXRDb250YWluZXIoKSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Ib3ZlclN0YXJ0KCBldmVudCApO1xyXG5cclxuICAgICAgICAgICAgLy8gTG9jayBlbGVtZW50XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0hvdmVyRWxlbWVudCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc21pc3MgY3VycmVudCBlbGVtZW50IGlmIGFueVxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIERpc21pc3MgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uRGlzbWlzczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Ib3ZlckVuZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgYSBtb3VzZSBob3ZlciBldmVudFxyXG4gICAgICogVHJhbnNsYXRlIHRoZSBob3ZlcmluZyBlbGVtZW50IGlmIGFueVxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5pbmcgbW91c2VFdmVudCB3aXRoIGNsaWVudFggYW5kIGNsaWVudFlcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uSG92ZXI6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBhIG1vdXNlIGhvdmVyIHN0YXJ0XHJcbiAgICAgKiBTZXRzIGN1cnNvciBzdHlsZSB0byAncG9pbnRlcicsIGRpc3BsYXkgdGhlIGVsZW1lbnQgYW5kIHNjYWxlIHVwIHRoZSBpbmZvc3BvdFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkhvdmVyU3RhcnQ6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJzb3JTdHlsZSA9IHRoaXMuY3Vyc29yU3R5bGUgfHwgKCB0aGlzLm1vZGUgPT09IE1PREVTLk5PUk1BTCA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JyApO1xyXG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9IGN1cnNvclN0eWxlO1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGVEb3duQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdGFydCgpO1xyXG5cclxuICAgICAgICB9XHJcblx0XHRcclxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRYID49IDAgJiYgZXZlbnQubW91c2VFdmVudC5jbGllbnRZID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0LCBzdHlsZSB9ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGxlZnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBlbGVtZW50IHdpZHRoIGZvciByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX3dpZHRoID0gbGVmdC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2hlaWdodCA9IGxlZnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGlmICggbGVmdCApIHsgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgZWxlbWVudCB3aWR0aCBmb3IgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll93aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uIGEgbW91c2UgaG92ZXIgZW5kXHJcbiAgICAgKiBTZXRzIGN1cnNvciBzdHlsZSB0byAnZGVmYXVsdCcsIGhpZGUgdGhlIGVsZW1lbnQgYW5kIHNjYWxlIGRvd24gdGhlIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkhvdmVyRW5kOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5pc0hvdmVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuYW5pbWF0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZVVwQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgc2NhbGVEb3duQW5pbWF0aW9uLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICYmICF0aGlzLmVsZW1lbnQubG9ja2VkICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCByaWdodCwgc3R5bGUgfSA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpZiAoIGxlZnQgKSB7IGxlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxyXG4gICAgICAgICAgICBpZiAoIHJpZ2h0ICkgeyByaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVubG9ja0hvdmVyRWxlbWVudCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGR1YWwgZXllIGVmZmVjdCBoYW5kbGVyXHJcbiAgICAgKiBDcmVhdGVzIGR1cGxpY2F0ZSBsZWZ0IGFuZCByaWdodCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0IGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkR1YWxFeWVFZmZlY3Q6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0XHRcclxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQsIGhhbGZXaWR0aCwgaGFsZkhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlID0gZXZlbnQubW9kZTtcclxuXHJcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuXHJcbiAgICAgICAgaGFsZldpZHRoID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xyXG4gICAgICAgIGhhbGZIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBpZiAoICFlbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggIWVsZW1lbnQubGVmdCAmJiAhZWxlbWVudC5yaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQubGVmdCA9IGVsZW1lbnQuY2xvbmVOb2RlKCB0cnVlICk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQgPSBlbGVtZW50LmNsb25lTm9kZSggdHJ1ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZWxlbWVudHMgdHJhbnNsYXRpb25cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZUVsZW1lbnQoIGhhbGZXaWR0aCwgaGFsZkhlaWdodCApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudC5sZWZ0ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQucmlnaHQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNsYXRlIHRoZSBob3ZlcmluZyBlbGVtZW50IGJ5IGNzcyB0cmFuc2Zvcm1cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0geCAtIFggcG9zaXRpb24gb24gdGhlIHdpbmRvdyBzY3JlZW5cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSAtIFkgcG9zaXRpb24gb24gdGhlIHdpbmRvdyBzY3JlZW5cclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICggeCwgeSApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50Ll93aWR0aCB8fCAhdGhpcy5lbGVtZW50Ll9oZWlnaHQgfHwgIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnQsIHRvcCwgZWxlbWVudCwgd2lkdGgsIGhlaWdodCwgZGVsdGEsIGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XHJcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICB3aWR0aCA9IGVsZW1lbnQuX3dpZHRoIC8gMjtcclxuICAgICAgICBoZWlnaHQgPSBlbGVtZW50Ll9oZWlnaHQgLyAyO1xyXG4gICAgICAgIGRlbHRhID0gZWxlbWVudC52ZXJ0aWNhbERlbHRhICE9PSB1bmRlZmluZWQgPyBlbGVtZW50LnZlcnRpY2FsRGVsdGEgOiA0MDtcclxuXHJcbiAgICAgICAgbGVmdCA9IHggLSB3aWR0aDtcclxuICAgICAgICB0b3AgPSB5IC0gaGVpZ2h0IC0gZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICggKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIFxyXG5cdFx0XHRcdCYmIGVsZW1lbnQubGVmdCAmJiBlbGVtZW50LnJpZ2h0XHJcblx0XHRcdFx0JiYgISggeCA9PT0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiAmJiB5ID09PSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiApICkge1xyXG5cclxuICAgICAgICAgICAgbGVmdCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDQgLSB3aWR0aCArICggeCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgKTtcclxuICAgICAgICAgICAgdG9wID0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgLSBoZWlnaHQgLSBkZWx0YSArICggeSAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQubGVmdCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XHJcblxyXG4gICAgICAgICAgICBsZWZ0ICs9IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQucmlnaHQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdmVuZG9yIHNwZWNpZmljIGNzc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBDU1Mgc3R5bGUgbmFtZVxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlIG1vZGlmaWVkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBTdHlsZSB2YWx1ZVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0RWxlbWVudFN0eWxlOiBmdW5jdGlvbiAoIHR5cGUsIGVsZW1lbnQsIHZhbHVlICkge1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XHJcblxyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3RyYW5zZm9ybScgKSB7XHJcblxyXG4gICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBob3ZlcmluZyB0ZXh0IGNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBiZSBkaXNwbGF5ZWRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICggdGV4dCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjdXJzb3IgY3NzIHN0eWxlIG9uIGhvdmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRDdXJzb3JIb3ZlclN0eWxlOiBmdW5jdGlvbiAoIHN0eWxlICkge1xyXG5cclxuICAgICAgICB0aGlzLmN1cnNvclN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBob3ZlcmluZyB0ZXh0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBiZSBkaXNwbGF5ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9NDBdIC0gVmVydGljYWwgZGVsdGEgdG8gdGhlIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRIb3ZlclRleHQ6IGZ1bmN0aW9uICggdGV4dCwgZGVsdGEgPSA0MCApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9ICc1MCUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzUwJSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50ZXh0U2hhZG93ID0gJzAgMCAzcHggIzAwMDAwMCc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ1wiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtaW5mb3Nwb3QnICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRUZXh0KCB0ZXh0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBob3ZlcmluZyBlbGVtZW50IGJ5IGNsb25pbmcgYW4gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRE9NRWxlbWVudH0gZWwgLSBFbGVtZW50IHRvIGJlIGNsb25lZCBhbmQgZGlzcGxheWVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTQwXSAtIFZlcnRpY2FsIGRlbHRhIHRvIHRoZSBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoIGVsLCBkZWx0YSA9IDQwICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQgKSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWwuY2xvbmVOb2RlKCB0cnVlICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZlcnRpY2FsRGVsdGEgPSBkZWx0YTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgaG92ZXJpbmcgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5lbGVtZW50LmxlZnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudC5sZWZ0ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubGVmdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuZWxlbWVudC5yaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LnJpZ2h0ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmlnaHQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvY2sgaG92ZXJpbmcgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9ja0hvdmVyRWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbmxvY2sgaG92ZXJpbmcgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdW5sb2NrSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5sb2NrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGUgcmF5Y2FzdGluZ1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZW5hYmxlZD10cnVlXVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZW5hYmxlUmF5Y2FzdDogZnVuY3Rpb24gKCBlbmFibGVkID0gdHJ1ZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBlbmFibGVkICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYXljYXN0ID0gdGhpcy5vcmlnaW5hbFJheWNhc3Q7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJheWNhc3QgPSAoKSA9PiB7fTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IGluZm9zcG90XHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtkZWxheT0wXSAtIERlbGF5IHRpbWUgdG8gc2hvd1xyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKCBkZWxheSA9IDAgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW5pbWF0ZWQsIGhpZGVBbmltYXRpb24sIHNob3dBbmltYXRpb24sIG1hdGVyaWFsIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNob3dBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmF5Y2FzdCggdHJ1ZSApO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGluZm9zcG90XHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtkZWxheT0wXSAtIERlbGF5IHRpbWUgdG8gaGlkZVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgaGlkZTogZnVuY3Rpb24gKCBkZWxheSA9IDAgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW5pbWF0ZWQsIGhpZGVBbmltYXRpb24sIHNob3dBbmltYXRpb24sIG1hdGVyaWFsLCBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGFuaW1hdGVkICkge1xyXG5cclxuICAgICAgICAgICAgc2hvd0FuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIGhpZGVBbmltYXRpb24uZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmF5Y2FzdCggZmFsc2UgKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBmb2N1cyBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRGb2N1c01ldGhvZDogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuSEFORExFUl9GT0NVUyA9IGV2ZW50Lm1ldGhvZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb2N1cyBjYW1lcmEgY2VudGVyIHRvIHRoaXMgaW5mb3Nwb3RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MTAwMF0gLSBEdXJhdGlvbiB0byB0d2VlblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZm9jdXM6IGZ1bmN0aW9uICggZHVyYXRpb24sIGVhc2luZyApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLkhBTkRMRVJfRk9DVVMgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkhBTkRMRVJfRk9DVVMoIHRoaXMucG9zaXRpb24sIGR1cmF0aW9uLCBlYXNpbmcgKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc21pc3MoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHsgbWFwIH0gPSBtYXRlcmlhbDtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVIb3ZlckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyBtYXRlcmlhbC5tYXAgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKCBnZW9tZXRyeSApIHsgZ2VvbWV0cnkuZGlzcG9zZSgpOyB0aGlzLmdlb21ldHJ5ID0gbnVsbDsgfVxyXG4gICAgICAgIGlmICggbWF0ZXJpYWwgKSB7IG1hdGVyaWFsLmRpc3Bvc2UoKTsgdGhpcy5tYXRlcmlhbCA9IG51bGw7IH1cclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBJbmZvc3BvdCB9OyIsImltcG9ydCB7IENPTlRST0xTLCBNT0RFUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFdpZGdldCBmb3IgY29udHJvbHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIEEgZG9tRWxlbWVudCB3aGVyZSBkZWZhdWx0IGNvbnRyb2wgd2lkZ2V0IHdpbGwgYmUgYXR0YWNoZWQgdG9cclxuICovXHJcbmZ1bmN0aW9uIFdpZGdldCAoIGNvbnRhaW5lciApIHtcclxuXHJcbiAgICBpZiAoICFjb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2FybiggJ1BBTk9MRU5TLldpZGdldDogTm8gY29udGFpbmVyIHNwZWNpZmllZCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgVEhSRUUuRXZlbnREaXNwYXRjaGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTiAgPSAnYWxsIDAuMjdzIGVhc2UnO1xyXG4gICAgdGhpcy5UT1VDSF9FTkFCTEVEID0gISEoKCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgKSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpO1xyXG4gICAgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMuYmFyRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMudmlkZW9FbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuc2V0dGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMubWFpbk1lbnUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlTWFpbkl0ZW0gPSBudWxsO1xyXG4gICAgdGhpcy5hY3RpdmVTdWJNZW51ID0gbnVsbDtcclxuICAgIHRoaXMubWFzayA9IG51bGw7XHJcblxyXG59XHJcblxyXG5XaWRnZXQucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IFdpZGdldCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBjb250cm9sIGJhclxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZENvbnRyb2xCYXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5jb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXaWRnZXQgY29udGFpbmVyIG5vdCBzZXQnICk7IFxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgYmFyLCBzdHlsZVRyYW5zbGF0ZSwgc3R5bGVPcGFjaXR5LCBncmFkaWVudFN0eWxlO1xyXG5cclxuICAgICAgICBncmFkaWVudFN0eWxlID0gJ2xpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMCwwLDAsMC4yKSwgcmdiYSgwLDAsMCwwKSknO1xyXG5cclxuICAgICAgICBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIGJhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gJzQ0cHgnO1xyXG4gICAgICAgIGJhci5zdHlsZS5mbG9hdCA9ICdsZWZ0JztcclxuICAgICAgICBiYXIuc3R5bGUudHJhbnNmb3JtID0gYmFyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGJhci5zdHlsZS5tc1RyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xMDAlKSc7XHJcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLXdlYmtpdC0nICsgZ3JhZGllbnRTdHlsZTtcclxuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctbW96LScgKyBncmFkaWVudFN0eWxlO1xyXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1vLScgKyBncmFkaWVudFN0eWxlO1xyXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1tcy0nICsgZ3JhZGllbnRTdHlsZTtcclxuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGdyYWRpZW50U3R5bGU7XHJcbiAgICAgICAgYmFyLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcclxuICAgICAgICBiYXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICBiYXIuaXNIaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICBiYXIudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBiYXIuaXNIaWRkZW4gPSAhYmFyLmlzSGlkZGVuO1xyXG4gICAgICAgICAgICBzdHlsZVRyYW5zbGF0ZSA9IGJhci5pc0hpZGRlbiA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDAlKSc7XHJcbiAgICAgICAgICAgIHN0eWxlT3BhY2l0eSA9IGJhci5pc0hpZGRlbiA/IDAgOiAxO1xyXG4gICAgICAgICAgICBiYXIuc3R5bGUudHJhbnNmb3JtID0gYmFyLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGJhci5zdHlsZS5tc1RyYW5zZm9ybSA9IHN0eWxlVHJhbnNsYXRlO1xyXG4gICAgICAgICAgICBiYXIuc3R5bGUub3BhY2l0eSA9IHN0eWxlT3BhY2l0eTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBNZW51XHJcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzLmNyZWF0ZURlZmF1bHRNZW51KCk7XHJcbiAgICAgICAgdGhpcy5tYWluTWVudSA9IHRoaXMuY3JlYXRlTWFpbk1lbnUoIG1lbnUgKTtcclxuICAgICAgICBiYXIuYXBwZW5kQ2hpbGQoIHRoaXMubWFpbk1lbnUgKTtcclxuXHJcbiAgICAgICAgLy8gTWFza1xyXG4gICAgICAgIHZhciBtYXNrID0gdGhpcy5jcmVhdGVNYXNrKCk7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gbWFzaztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggbWFzayApO1xyXG5cclxuICAgICAgICAvLyBEaXNwb3NlXHJcbiAgICAgICAgYmFyLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUuc2V0dGluZ0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS5zZXR0aW5nRWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS52aWRlb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS52aWRlb0VsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnZpZGVvRWxlbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS52aWRlb0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggYmFyICk7XHJcblxyXG4gICAgICAgIC8vIE1hc2sgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLm1hc2suaGlkZSgpO1xyXG4gICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudC5kZWFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIH0sIGZhbHNlICk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY29udHJvbC1iYXItdG9nZ2xlJywgYmFyLnRvZ2dsZSApO1xyXG5cclxuICAgICAgICB0aGlzLmJhckVsZW1lbnQgPSBiYXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBkZWZhdWx0IG1lbnVcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVEZWZhdWx0TWVudTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLCBoYW5kbGVyO1xyXG5cclxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKCBtZXRob2QsIGRhdGEgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLCBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIFxyXG5cclxuICAgICAgICAgICAgICAgIH0gKTsgXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG5cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29udHJvbCcsIFxyXG4gICAgICAgICAgICAgICAgc3ViTWVudTogWyBcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5UT1VDSF9FTkFCTEVEID8gJ1RvdWNoJyA6ICdNb3VzZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLk9SQklUIClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2Vuc29yJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuREVWSUNFT1JJRU5UQVRJT04gKSBcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTW9kZScsIFxyXG4gICAgICAgICAgICAgICAgc3ViTWVudTogWyBcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdkaXNhYmxlRWZmZWN0JyApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYXJkYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlRWZmZWN0JywgTU9ERVMuQ0FSREJPQVJEIClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RlcmVvc2NvcGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUVmZmVjdCcsIE1PREVTLlNURVJFTyApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIF07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBidXR0b25zIG9uIHRvcCBvZiBjb250cm9sIGJhclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgY29udHJvbCBidXR0b24gbmFtZSB0byBiZSBjcmVhdGVkXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkQ29udHJvbEJ1dHRvbjogZnVuY3Rpb24gKCBuYW1lICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudDtcclxuXHJcbiAgICAgICAgc3dpdGNoKCBuYW1lICkge1xyXG5cclxuICAgICAgICBjYXNlICdmdWxsc2NyZWVuJzpcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUZ1bGxzY3JlZW5CdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5mdWxsc2NyZWVuRWxlbWVudCA9IGVsZW1lbnQ7IFxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3NldHRpbmcnOlxyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlU2V0dGluZ0J1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICd2aWRlbyc6XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2woKTtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG1vZGFsIG1hc2tcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNYXNrOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGVsZW1lbnQuaGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBTZXR0aW5nIGJ1dHRvbiB0byB0b2dnbGUgbWVudVxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNldHRpbmdCdXR0b246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuYWN0aXZhdGVkICkge1xyXG5cdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxyXG5cclxuICAgICAgICAgICAgc3R5bGU6IHsgXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5TZXR0aW5nICsgJ1wiKScsXHJcbiAgICAgICAgICAgICAgICB3ZWJraXRUcmFuc2l0aW9uOiB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXRlbS5hY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDAsMCwxLDkwZGVnKSc7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2NvcGUubWFzay5zaG93KCk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZTNkKDAsMCwwLDApJztcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2NvcGUubWFzay5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm1haW5NZW51ICYmIHNjb3BlLm1haW5NZW51LnZpc2libGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUuaGlkZSgpO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmFjdGl2ZVN1Yk1lbnUgJiYgc2NvcGUuYWN0aXZlU3ViTWVudS52aXNpYmxlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmFjdGl2ZVN1Yk1lbnUuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5tYWluTWVudSAmJiBzY29wZS5tYWluTWVudS5fd2lkdGggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUuY2hhbmdlU2l6ZSggc2NvcGUubWFpbk1lbnUuX3dpZHRoICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS51bnNsaWRlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uYWN0aXZhdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgRnVsbHNjcmVlbiBidXR0b25cclxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgZnVsbHNjcmVlblxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUZ1bGxzY3JlZW5CdXR0b246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbSwgaXNGdWxsc2NyZWVuID0gZmFsc2UsIHRhcFNraXBwZWQgPSB0cnVlLCBzdHlsZXNoZWV0SWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBzdHlsZXNoZWV0SWQgPSAncGFub2xlbnMtc3R5bGUtYWRkb24nO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBjcmVhdGUgYnV0dG9uIGlmIG5vIHN1cHBvcnRcclxuICAgICAgICBpZiAoICFkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZCAgICAgICAmJiBcclxuXHRcdFx0IWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkICYmXHJcblx0XHRcdCFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZCAgICAmJlxyXG5cdFx0XHQhZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGFwU2tpcHBlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhaXNGdWxsc2NyZWVuICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4gKSB7IGNvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCBFbGVtZW50LkFMTE9XX0tFWUJPQVJEX0lOUFVUICk7IH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4gKSB7IGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oICk7IH1cclxuXHJcbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcclxuICAgICAgICAgICAgICAgID8gJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkxlYXZlICsgJ1wiKScgXHJcbiAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uRnVsbFNjcmVlbkNoYW5nZSAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRhcFNraXBwZWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gIWlzRnVsbHNjcmVlbjsgXHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAoIGlzRnVsbHNjcmVlbiApIFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkxlYXZlICsgJ1wiKScgXHJcbiAgICAgICAgICAgICAgICAgICAgOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnb25XaW5kb3dSZXNpemUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uV2luZG93UmVzaXplJyB9ICk7XHJcblxyXG4gICAgICAgICAgICB0YXBTa2lwcGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW96ZnVsbHNjcmVlbmNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnTVNGdWxsc2NyZWVuQ2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxyXG5cclxuICAgICAgICAgICAgc3R5bGU6IHsgXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJyBcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblRhcDogb25UYXBcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAvLyBBZGQgZnVsbHNjcmVlbiBzdGx5ZSBpZiBub3QgZXhpc3RzXHJcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggc3R5bGVzaGVldElkICkgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3N0eWxlJyApO1xyXG4gICAgICAgICAgICBzaGVldC5pZCA9IHN0eWxlc2hlZXRJZDtcclxuICAgICAgICAgICAgc2hlZXQuaW5uZXJIVE1MID0gJzotd2Via2l0LWZ1bGwtc2NyZWVuIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQgfSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIHNoZWV0ICk7XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyBjb250cm9sIGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIGNvbnRyb2xcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVmlkZW9Db250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgaXRlbS5zaG93ID0gZnVuY3Rpb24gKCkgeyBcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmhpZGUgPSBmdW5jdGlvbiAoKSB7IFxyXG5cclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24ucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24gPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbEJ1dHRvbigpO1xyXG4gICAgICAgIGl0ZW0uc2Vla0JhciA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sU2Vla2JhcigpO1xyXG5cdFx0XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggaXRlbS5zZWVrQmFyICk7XHJcblxyXG4gICAgICAgIGl0ZW0uZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoIGl0ZW0uY29udHJvbEJ1dHRvbiApO1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLnNlZWtCYXIgKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnNlZWtCYXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNlZWtCYXIgPSBudWxsO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby1jb250cm9sLXNob3cnLCBpdGVtLnNob3cgKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby1jb250cm9sLWhpZGUnLCBpdGVtLmhpZGUgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyBjb250cm9sIGJ1dHRvblxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIGNvbnRyb2xcclxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVmlkZW9Db250cm9sQnV0dG9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd0b2dnbGVWaWRlb1BsYXknIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3RvZ2dsZVZpZGVvUGxheScsIGRhdGE6ICF0aGlzLnBhdXNlZCB9ICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXHJcblxyXG4gICAgICAgICAgICBzdHlsZTogeyBcclxuXHJcbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiJyArIERhdGFJbWFnZS5WaWRlb1BsYXkgKyAnXCIpJ1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGl0ZW0ucGF1c2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaXRlbS51cGRhdGUgPSBmdW5jdGlvbiAoIHBhdXNlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gcGF1c2VkICE9PSB1bmRlZmluZWQgPyBwYXVzZWQgOiB0aGlzLnBhdXNlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyAoIHRoaXMucGF1c2VkIFxyXG4gICAgICAgICAgICAgICAgPyBEYXRhSW1hZ2UuVmlkZW9QbGF5IFxyXG4gICAgICAgICAgICAgICAgOiBEYXRhSW1hZ2UuVmlkZW9QYXVzZSApICsgJ1wiKSc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmlkZW8gc2Vla2JhclxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIHZpZGVvIHNlZWtiYXJcclxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlVmlkZW9Db250cm9sU2Vla2JhcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtLCBwcm9ncmVzc0VsZW1lbnQsIHByb2dyZXNzRWxlbWVudENvbnRyb2wsXHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZSwgbW91c2VYLCBwZXJjZW50YWdlTm93LCBwZXJjZW50YWdlTmV4dDtcclxuXHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJztcclxuXHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS53aWR0aCA9ICcxNHB4JztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmhlaWdodCA9ICcxNHB4JztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoN3B4LCAtNXB4KSc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGRkJztcclxuXHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uTW91c2VEb3duLCAgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZURvd24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBtb3VzZVggPSBldmVudC5jbGllbnRYIHx8ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCApO1xyXG5cclxuICAgICAgICAgICAgcGVyY2VudGFnZU5vdyA9IHBhcnNlSW50KCBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggKSAvIDEwMDtcclxuXHJcbiAgICAgICAgICAgIGFkZENvbnRyb2xMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sRHJhZyAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgaWYoIGlzRHJhZ2dpbmcgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRYID0gZXZlbnQuY2xpZW50WCB8fCAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gKCBjbGllbnRYIC0gbW91c2VYICkgLyBpdGVtLmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gcGVyY2VudGFnZU5vdyArIHBlcmNlbnRhZ2VOZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2VOZXh0ID0gcGVyY2VudGFnZU5leHQgPiAxID8gMSA6ICggKCBwZXJjZW50YWdlTmV4dCA8IDAgKSA/IDAgOiBwZXJjZW50YWdlTmV4dCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MgKCBwZXJjZW50YWdlTmV4dCApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3NldFZpZGVvQ3VycmVudFRpbWUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0VmlkZW9DdXJyZW50VGltZScsIGRhdGE6IHBlcmNlbnRhZ2VOZXh0IH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblZpZGVvQ29udHJvbFN0b3AgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQ29udHJvbExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZENvbnRyb2xMaXN0ZW5lcnMgKCkge1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblZpZGVvQ29udHJvbFN0b3AsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMgKCkge1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uVmlkZW9Db250cm9sU3RvcCwgZmFsc2UgKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblZpZGVvQ29udHJvbERyYWcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQgPT09IHByb2dyZXNzRWxlbWVudENvbnRyb2wgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMCApXHJcbiAgICAgICAgICAgICAgICA/ICggZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCApIC8gdGhpcy5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICAgICAgOiBldmVudC5vZmZzZXRYIC8gdGhpcy5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3NldFZpZGVvQ3VycmVudFRpbWUnIGZ1bmN0aW9uIGNhbGwgb24gVmlld2VyXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gUGVyY2VudGFnZSBvZiBjdXJyZW50IHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0VmlkZW9DdXJyZW50VGltZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyggZXZlbnQub2Zmc2V0WCAvIHRoaXMuY2xpZW50V2lkdGggKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25EaXNwb3NlICgpIHtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LmFwcGVuZENoaWxkKCBwcm9ncmVzc0VsZW1lbnRDb250cm9sICk7XHJcblxyXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHtcclxuXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IFxyXG5cclxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE4OCwxODgsMTg4LDAuOCknXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25UYXA6IG9uVGFwLFxyXG4gICAgICAgICAgICBvbkRpc3Bvc2U6IG9uRGlzcG9zZVxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudCApO1xyXG5cclxuICAgICAgICBpdGVtLnNldFByb2dyZXNzID0gZnVuY3Rpb24oIHBlcmNlbnRhZ2UgKSB7XHJcblxyXG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUud2lkdGggPSBwZXJjZW50YWdlICogMTAwICsgJyUnO1xyXG5cclxuICAgICAgICB9O1x0XHRcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdXBkYXRlJywgZnVuY3Rpb24gKCBldmVudCApIHsgXHJcblxyXG4gICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKCBldmVudC5wZXJjZW50YWdlICk7IFxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGl0ZW0ucHJvZ3Jlc3NFbGVtZW50ID0gcHJvZ3Jlc3NFbGVtZW50O1xyXG4gICAgICAgIGl0ZW0ucHJvZ3Jlc3NFbGVtZW50Q29udHJvbCA9IHByb2dyZXNzRWxlbWVudENvbnRyb2w7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgbWVudSBpdGVtXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWVudUl0ZW06IGZ1bmN0aW9uICggdGl0bGUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpczsgXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdhJyApO1xyXG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgICBpdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICBpdGVtLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcclxuXHJcbiAgICAgICAgaXRlbS5zbGlkZSA9IGZ1bmN0aW9uICggcmlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAoIHJpZ2h0ID8gJycgOiAnLScgKSArICcxMDAlKSc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0udW5zbGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLnNldEljb24gPSBmdW5jdGlvbiAoIHVybCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pY29uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB1cmwgKyAnKSc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnNlbGVjdGlvbiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiA9IGZ1bmN0aW9uICggbmFtZSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mb250V2VpZ2h0ID0gJzMwMCc7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25UaXRsZSggbmFtZSApO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBzZWxlY3Rpb24gKTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmFkZEljb24gPSBmdW5jdGlvbiAoIHVybCA9IERhdGFJbWFnZS5DaGV2cm9uUmlnaHQsIGxlZnQgPSBmYWxzZSwgZmxpcCA9IGZhbHNlICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmZsb2F0ID0gbGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTdweCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzE3cHgnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlWyAnbWFyZ2luJyArICggbGVmdCA/ICdSaWdodCcgOiAnTGVmdCcgKSBdID0gJzEycHgnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuXHJcbiAgICAgICAgICAgIGlmICggZmxpcCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVaKDE4MGRlZyknO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pY29uID0gZWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRJY29uKCB1cmwgKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkU3ViTWVudSA9IGZ1bmN0aW9uICggdGl0bGUsIGl0ZW1zICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdWJNZW51ID0gc2NvcGUuY3JlYXRlU3ViTWVudSggdGl0bGUsIGl0ZW1zICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlMGUwZTAnO1xyXG5cclxuICAgICAgICB9LCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZmFmYSc7XHJcblxyXG4gICAgICAgIH0sIGZhbHNlICk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgbWVudSBpdGVtIGhlYWRlclxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZSAtIFRpdGxlIHRvIGRpc3BsYXlcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQW4gYW5jaG9yIHRhZyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1lbnVJdGVtSGVhZGVyOiBmdW5jdGlvbiAoIHRpdGxlICkge1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xyXG5cclxuICAgICAgICBoZWFkZXIuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjMzMzJztcclxuICAgICAgICBoZWFkZXIuc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcxNXB4JztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG1haW4gbWVudVxyXG4gICAgICogQHBhcmFtICB7YXJyYXl9IG1lbnVzIC0gTWVudSBhcnJheSBsaXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgc3BhbiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1haW5NZW51OiBmdW5jdGlvbiAoIG1lbnVzICkge1xyXG5cdFx0XHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgbWVudSA9IHRoaXMuY3JlYXRlTWVudSgpO1xyXG5cclxuICAgICAgICBtZW51Ll93aWR0aCA9IDIwMDtcclxuICAgICAgICBtZW51LmNoYW5nZVNpemUoIG1lbnUuX3dpZHRoICk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IHNjb3BlLm1haW5NZW51LCBzdWJNZW51ID0gdGhpcy5zdWJNZW51O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gb25OZXh0VGljayAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuY2hhbmdlU2l6ZSggc3ViTWVudS5jbGllbnRXaWR0aCApO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnVuc2xpZGVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW5NZW51LmhpZGUoKTtcclxuICAgICAgICAgICAgbWFpbk1lbnUuc2xpZGVBbGwoKTtcclxuICAgICAgICAgICAgbWFpbk1lbnUucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCggc3ViTWVudSApO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuYWN0aXZlTWFpbkl0ZW0gPSB0aGlzO1xyXG4gICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51ID0gc3ViTWVudTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIG9uTmV4dFRpY2sgKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgbWVudXMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG1lbnUuYWRkSXRlbSggbWVudXNbIGkgXS50aXRsZSApO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nTGVmdCA9ICcyMHB4JztcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbigpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbWVudXNbIGkgXS5zdWJNZW51ICYmIG1lbnVzWyBpIF0uc3ViTWVudS5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IG1lbnVzWyBpIF0uc3ViTWVudVsgMCBdLnRpdGxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uYWRkU2VsZWN0aW9uKCB0aXRsZSApXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFN1Yk1lbnUoIG1lbnVzWyBpIF0udGl0bGUsIG1lbnVzWyBpIF0uc3ViTWVudSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc3ViIG1lbnVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFN1YiBtZW51IHRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBpdGVtcyAtIEl0ZW0gYXJyYXkgbGlzdFxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTdWJNZW51OiBmdW5jdGlvbiAoIHRpdGxlLCBpdGVtcyApIHtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgbWVudSwgc3ViTWVudSA9IHRoaXMuY3JlYXRlTWVudSgpO1xyXG5cclxuICAgICAgICBzdWJNZW51Lml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgc3ViTWVudS5hY3RpdmVJdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgbWVudSA9IHNjb3BlLm1haW5NZW51O1xyXG4gICAgICAgICAgICBtZW51LmNoYW5nZVNpemUoIG1lbnUuX3dpZHRoICk7XHJcbiAgICAgICAgICAgIG1lbnUudW5zbGlkZUFsbCgpO1xyXG4gICAgICAgICAgICBtZW51LnNob3coKTtcclxuICAgICAgICAgICAgc3ViTWVudS5zbGlkZUFsbCggdHJ1ZSApO1xyXG4gICAgICAgICAgICBzdWJNZW51LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy50eXBlICE9PSAnaGVhZGVyJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIHRoaXMgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmFjdGl2ZU1haW5JdGVtLnNldFNlbGVjdGlvblRpdGxlKCB0aGlzLnRleHRDb250ZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhhbmRsZXIgKSB7IHRoaXMuaGFuZGxlcigpOyB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ViTWVudS5hZGRIZWFkZXIoIHRpdGxlICkuYWRkSWNvbiggdW5kZWZpbmVkLCB0cnVlLCB0cnVlICkuYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3ViTWVudS5hZGRJdGVtKCBpdGVtc1sgaSBdLnRpdGxlICk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZvbnRXZWlnaHQgPSAzMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uaGFuZGxlciA9IGl0ZW1zWyBpIF0uaGFuZGxlcjtcclxuICAgICAgICAgICAgaXRlbS5hZGRJY29uKCAnICcsIHRydWUgKTtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhc3ViTWVudS5hY3RpdmVJdGVtICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZ2VuZXJhbCBtZW51XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgc3BhbiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1lbnU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IG1lbnUuc3R5bGU7XHJcblxyXG4gICAgICAgIHN0eWxlLnBhZGRpbmcgPSAnNXB4IDAnO1xyXG4gICAgICAgIHN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzdHlsZS5ib3R0b20gPSAnMTAwJSc7XHJcbiAgICAgICAgc3R5bGUucmlnaHQgPSAnMTRweCc7XHJcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmYWZhZmEnO1xyXG4gICAgICAgIHN0eWxlLmZvbnRGYW1pbHkgPSAnSGVsdmV0aWNhIE5ldWUnO1xyXG4gICAgICAgIHN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xyXG4gICAgICAgIHN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICBzdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDEycHQgcmdiYSgwLDAsMCwwLjI1KSc7XHJcbiAgICAgICAgc3R5bGUuYm9yZGVyUmFkaXVzID0gJzJweCc7XHJcbiAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBzdHlsZS53aWxsQ2hhbmdlID0gJ3dpZHRoLCBoZWlnaHQsIG9wYWNpdHknO1xyXG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XHJcbiAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xyXG5cclxuICAgICAgICBtZW51LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbWVudS5jaGFuZ2VTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3aWR0aCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBoZWlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LnNob3cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMudmlzaWJsZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuc2xpZGVBbGwgPSBmdW5jdGlvbiAoIHJpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVudS5jaGlsZHJlbi5sZW5ndGg7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggbWVudS5jaGlsZHJlblsgaSBdLnNsaWRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZW51LmNoaWxkcmVuWyBpIF0uc2xpZGUoIHJpZ2h0ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LnVuc2xpZGVBbGwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZW51LmNoaWxkcmVuLmxlbmd0aDsgaSsrICl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51LmNoaWxkcmVuWyBpIF0udW5zbGlkZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuYWRkSGVhZGVyID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHNjb3BlLmNyZWF0ZU1lbnVJdGVtSGVhZGVyKCB0aXRsZSApO1xyXG4gICAgICAgICAgICBoZWFkZXIudHlwZSA9ICdoZWFkZXInO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggaGVhZGVyICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LmFkZEl0ZW0gPSBmdW5jdGlvbiAoIHRpdGxlICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNjb3BlLmNyZWF0ZU1lbnVJdGVtKCB0aXRsZSApO1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAnaXRlbSc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBpdGVtICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5zZXRBY3RpdmVJdGVtID0gZnVuY3Rpb24gKCBpdGVtICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2ZUl0ZW0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEljb24oICcgJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXRlbS5zZXRJY29uKCBEYXRhSW1hZ2UuQ2hlY2sgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBjdXN0b20gaXRlbSBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvblxyXG4gICAgICovXHJcbiAgICBjcmVhdGVDdXN0b21JdGVtOiBmdW5jdGlvbiAoIG9wdGlvbnMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zLmVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XHJcbiAgICAgICAgY29uc3QgeyBvbkRpc3Bvc2UgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAnNDRweCc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICc2MCUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XHJcbiAgICAgICAgaXRlbS5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXHJcblx0XHRpdGVtLnN0eWxlLk1velVzZXJTZWxlY3QgPSBcclxuXHRcdGl0ZW0uc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcclxuICAgICAgICBpdGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XHJcblxyXG4gICAgICAgIC8vIFdoaXRlIGdsb3cgb24gaWNvblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZmlsdGVyID0gXHJcblx0XHRcdGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJ2Ryb3Atc2hhZG93KDAgMCA1cHggcmdiYSgyNTUsMjU1LDI1NSwxKSknO1xyXG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5maWx0ZXIgPSBcclxuXHRcdFx0aXRlbS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnJztcclxuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVyZ2VTdHlsZU9wdGlvbnMoIGl0ZW0sIG9wdGlvbnMuc3R5bGUgKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zLm9uVGFwICkge1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9wdGlvbnMub25UYXAsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9wdGlvbnMub25UYXAsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9uRGlzcG9zZSApIHsgb3B0aW9ucy5vbkRpc3Bvc2UoKTsgfVxyXG5cclxuICAgICAgICB9O1xyXG5cdFx0XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1lcmdlIGl0ZW0gY3NzIHN0eWxlXHJcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGJlIG1lcmdlZCB3aXRoIHN0eWxlXHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgc3R5bGUgb3B0aW9uc1xyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgc2FtZSBlbGVtZW50IHdpdGggbWVyZ2VkIHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBtZXJnZVN0eWxlT3B0aW9uczogZnVuY3Rpb24gKCBlbGVtZW50LCBvcHRpb25zID0ge30gKSB7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBwcm9wZXJ0eSBpbiBvcHRpb25zICl7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoIHByb3BlcnR5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVsgcHJvcGVydHkgXSA9IG9wdGlvbnNbIHByb3BlcnR5IF07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2Ugd2lkZ2V0cyBieSBkZXRhY2hpbmcgZG9tIGVsZW1lbnRzIGZyb20gY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuYmFyRWxlbWVudCApIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuYmFyRWxlbWVudCApO1xyXG4gICAgICAgICAgICB0aGlzLmJhckVsZW1lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhckVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cdFxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBXaWRnZXQgfTsiLCJpbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcclxuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEJhc2UgUGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7VEhSRUUuR2VvbWV0cnl9IGdlb21ldHJ5IC0gVGhlIGdlb21ldHJ5IGZvciB0aGlzIHBhbm9yYW1hXHJcbiAqIEBwYXJhbSB7VEhSRUUuTWF0ZXJpYWx9IG1hdGVyaWFsIC0gVGhlIG1hdGVyaWFsIGZvciB0aGlzIHBhbm9yYW1hXHJcbiAqL1xyXG5mdW5jdGlvbiBQYW5vcmFtYSAoIGdlb21ldHJ5LCBtYXRlcmlhbCApIHtcclxuXHJcbiAgICBUSFJFRS5NZXNoLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuICAgIHRoaXMudHlwZSA9ICdwYW5vcmFtYSc7XHJcblxyXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlMb3cgPSAxO1xyXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlGYWlyID0gMjtcclxuICAgIHRoaXMuSW1hZ2VRdWFsaXR5TWVkaXVtID0gMztcclxuICAgIHRoaXMuSW1hZ2VRdWFsaXR5SGlnaCA9IDQ7XHJcbiAgICB0aGlzLkltYWdlUXVhbGl0eVN1cGVySGlnaCA9IDU7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25EdXJhdGlvbiA9IDEwMDA7XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0SW5mb3Nwb3RTaXplID0gMzUwO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5saW5rZWRTcG90cyA9IFtdO1xyXG5cclxuICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSBmYWxzZTtcclxuXHRcclxuICAgIHRoaXMubGlua2luZ0ltYWdlVVJMID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5CYWNrU2lkZTtcclxuICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgdGhpcy5zY2FsZS54ICo9IC0xO1xyXG4gICAgdGhpcy5yZW5kZXJPcmRlciA9IC0xO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcyApLnRvKCB7fSwgdGhpcy5hbmltYXRpb25EdXJhdGlvbiAvIDIgKTtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcy5mYWRlSW4uYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLnNldENvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgIHRoaXMuc2V0dXBUcmFuc2l0aW9ucygpO1xyXG5cclxufVxyXG5cclxuUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuTWVzaC5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBQYW5vcmFtYSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZGluZyBhbiBvYmplY3RcclxuICAgICAqIFRvIGNvdW50ZXIgdGhlIHNjYWxlLnggPSAtMSwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGFkZCBhbiBcclxuICAgICAqIGVtcHR5IG9iamVjdCB3aXRoIGludmVydGVkIHNjYWxlIG9uIHhcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkXHJcbiAgICAgKi9cclxuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnZlcnRlZE9iamVjdDtcclxuXHJcbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoIGFyZ3VtZW50c1sgaSBdICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIGluZm9zcG90c1xyXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdCA9IG9iamVjdDtcclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIgKSB7IG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXIgfSApOyB9XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtaW5mb3Nwb3QtZm9jdXMnLCBtZXRob2Q6IGZ1bmN0aW9uICggdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBJbmZvc3BvdCBmb2N1cyBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd0d2VlbkNvbnRyb2xDZW50ZXInLCBkYXRhOiBbIHZlY3RvciwgZHVyYXRpb24sIGVhc2luZyBdIH0gKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgfSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDb3VudGVyIHNjYWxlLnggPSAtMSBlZmZlY3RcclxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3Quc2NhbGUueCA9IC0xO1xyXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5zY2FsZVBsYWNlSG9sZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QuYWRkKCBvYmplY3QgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUuYWRkLmNhbGwoIHRoaXMsIGludmVydGVkT2JqZWN0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGljayBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gQ2xpY2sgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgSW5mb3Nwb3QjZGlzbWlzc1xyXG4gICAgICovXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50LmludGVyc2VjdHMgJiYgZXZlbnQuaW50ZXJzZWN0cy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIERpbWlzcyBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNkaXNtaXNzXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNtaXNzJyB9ICk7XHJcblxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNvbnRhaW5lciBvZiB0aGlzIHBhbm9yYW1hIFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIEluZm9zcG90I3Bhbm9sZW5zLWNvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggZGF0YSApIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgaWYgKCBkYXRhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBkYXRhICYmIGRhdGEuY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBjb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGZ1bmN0aW9uICggY2hpbGQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjaGlsZCBpbnN0YW5jZW9mIEluZm9zcG90ICYmIGNoaWxkLmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFNldCBjb250YWluZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBUaGUgY29udGFpbmVyIG9mIHRoaXMgcGFub3JhbWFcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXI6IGNvbnRhaW5lciB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGxvYWRlZFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNsb2FkXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExvYWQgcGFub3JhbWEgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsb2FkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsb2FkJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBpbiBwcm9ncmVzc1xyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNwcm9ncmVzc1xyXG4gICAgICovXHJcbiAgICBvblByb2dyZXNzOiBmdW5jdGlvbiAoIHByb2dyZXNzICkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMb2FkaW5nIHBhbm9yYW1hIHByb2dyZXNzIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcHJvZ3Jlc3NcclxuICAgICAgICAgKiBAcHJvcGVydHkge29iamVjdH0gcHJvZ3Jlc3MgLSBUaGUgcHJvZ3Jlc3Mgb2JqZWN0IGNvbnRhaW5pbmcgbG9hZGVkIGFuZCB0b3RhbCBhbW91bnRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Byb2dyZXNzJywgcHJvZ3Jlc3M6IHByb2dyZXNzIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGxvYWRpbmcgaGFzIGVycm9yXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2Vycm9yXHJcbiAgICAgKi9cclxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTG9hZGluZyBwYW5vcmFtYSBlcnJvciBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2Vycm9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlcnJvcicgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgem9vbSBsZXZlbCBiYXNlZCBvbiB3aW5kb3cgd2lkdGhcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHpvb20gbGV2ZWwgaW5kaWNhdGluZyBpbWFnZSBxdWFsaXR5XHJcbiAgICAgKi9cclxuICAgIGdldFpvb21MZXZlbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgem9vbUxldmVsO1xyXG5cclxuICAgICAgICBpZiAoIHdpbmRvdy5pbm5lcldpZHRoIDw9IDgwMCApIHtcclxuXHJcbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5RmFpcjtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiA4MDAgJiYgIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEyODAgKSB7XHJcblxyXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eU1lZGl1bTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiAxMjgwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE5MjAgKSB7XHJcblxyXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUhpZ2g7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gMTkyMCApIHtcclxuXHJcbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5U3VwZXJIaWdoO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlMb3c7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHpvb21MZXZlbDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRleHR1cmUgb2YgYSBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSAtIFRleHR1cmUgdG8gYmUgdXBkYXRlZFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUZXh0dXJlOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgaW5mb3Nwb3RzIGluIHRoaXMgcGFub3JhbWFcclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzVmlzaWJsZSAtIFZpc2liaWxpdHkgb2YgaW5mb3Nwb3RzXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGRlbGF5IC0gRGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIGNoYW5nZSB2aXNpYmlsaXR5XHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVJbmZvc3BvdFZpc2liaWxpdHk6IGZ1bmN0aW9uICggaXNWaXNpYmxlLCBkZWxheSApIHtcclxuXHJcbiAgICAgICAgZGVsYXkgPSAoIGRlbGF5ICE9PSB1bmRlZmluZWQgKSA/IGRlbGF5IDogMDtcclxuXHJcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9ICggaXNWaXNpYmxlICE9PSB1bmRlZmluZWQgKSA/IGlzVmlzaWJsZSA6ICggdGhpcy5pc0luZm9zcG90VmlzaWJsZSA/IGZhbHNlIDogdHJ1ZSApO1xyXG5cclxuICAgICAgICB0aGlzLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB2aXNpYmxlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Quc2hvdyggZGVsYXkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QuaGlkZSggZGVsYXkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0luZm9zcG90VmlzaWJsZSA9IHZpc2libGU7XHJcblxyXG4gICAgICAgIC8vIEFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxyXG4gICAgICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24ub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIENvbXBsZXRlIHRvZ2dsaW5nIGluZm9zcG90IHZpc2liaWxpdHlcclxuICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZVxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlJywgdmlzaWJsZTogdmlzaWJsZSB9ICk7XHJcblxyXG4gICAgICAgIH0uYmluZCggdGhpcyApICkuZGVsYXkoIGRlbGF5ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGltYWdlIG9mIHRoaXMgcGFub3JhbWEncyBsaW5raW5nIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgIC0gVXJsIHRvIHRoZSBpbWFnZSBhc3NldFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlIC0gU2NhbGUgZmFjdG9yIG9mIHRoZSBpbmZvc3BvdFxyXG4gICAgICovXHJcbiAgICBzZXRMaW5raW5nSW1hZ2U6IGZ1bmN0aW9uICggdXJsLCBzY2FsZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VVUkwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5saW5raW5nSW1hZ2VTY2FsZSA9IHNjYWxlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaW5rIG9uZS13YXkgcGFub3JhbWFcclxuICAgICAqIEBwYXJhbSAge1Bhbm9yYW1hfSBwYW5vICAtIFRoZSBwYW5vcmFtYSB0byBiZSBsaW5rZWQgdG9cclxuICAgICAqIEBwYXJhbSAge1RIUkVFLlZlY3RvcjN9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIGluZm9zcG90IHdoaWNoIG5hdmlnYXRlcyB0byB0aGUgcGFub1xyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbaW1hZ2VTY2FsZT0zMDBdIC0gSW1hZ2Ugc2NhbGUgb2YgbGlua2VkIGluZm9zcG90XHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IFtpbWFnZVNyYz1EYXRhSW1hZ2UuQXJyb3ddIC0gVGhlIGltYWdlIHNvdXJjZSBvZiBsaW5rZWQgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxpbms6IGZ1bmN0aW9uICggcGFubywgcG9zaXRpb24sIGltYWdlU2NhbGUsIGltYWdlU3JjICkge1xyXG5cclxuICAgICAgICBsZXQgc2NhbGUsIGltZztcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCAhcG9zaXRpb24gKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdQbGVhc2Ugc3BlY2lmeSBpbmZvc3BvdCBwb3NpdGlvbiBmb3IgbGlua2luZycgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbmZvc3BvdCBzY2FsZVxyXG4gICAgICAgIGlmICggaW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGUgPSBpbWFnZVNjYWxlO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBwYW5vLmxpbmtpbmdJbWFnZVNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZSA9IHBhbm8ubGlua2luZ0ltYWdlU2NhbGU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZSA9IDMwMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gSW5mb3Nwb3QgaW1hZ2VcclxuICAgICAgICBpZiAoIGltYWdlU3JjICkge1xyXG5cclxuICAgICAgICAgICAgaW1nID0gaW1hZ2VTcmM7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhbm8ubGlua2luZ0ltYWdlVVJMICkge1xyXG5cclxuICAgICAgICAgICAgaW1nID0gcGFuby5saW5raW5nSW1hZ2VVUkw7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpbWcgPSBEYXRhSW1hZ2UuQXJyb3c7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBpbmZvc3BvdFxyXG4gICAgICAgIGNvbnN0IHNwb3QgPSBuZXcgSW5mb3Nwb3QoIHNjYWxlLCBpbWcgKTtcclxuICAgICAgICBzcG90LnBvc2l0aW9uLmNvcHkoIHBvc2l0aW9uICk7XHJcbiAgICAgICAgc3BvdC50b1Bhbm9yYW1hID0gcGFubztcclxuICAgICAgICBzcG90LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnc2V0UGFub3JhbWEnLCBkYXRhOiBwYW5vIH0gKTtcclxuXHJcbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5rZWRTcG90cy5wdXNoKCBzcG90ICk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkKCBzcG90ICk7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwO1x0XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR1cFRyYW5zaXRpb25zOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0IClcclxuICAgICAgICAgICAgLm9uU3RhcnQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGZhZGUgaW4gc3RhcnQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1mYWRlLXN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1mYWRlLXN0YXJ0JyB9ICk7XHJcblxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWF0ZXJpYWwgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYXRlcmlhbC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGNvbXBsZXRlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbGVhdmUtY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2xlYXZlLWNvbXBsZXRlJyB9ICk7XHJcblxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcyApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIGNvbXBsZXRlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLWNvbXBsZXRlJyB9ICk7XHJcblxyXG4gICAgICAgICAgICB9LmJpbmQgKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRmFkZUFuaW1hdGlvblVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhbHBoYSA9IHRoaXMubWF0ZXJpYWwub3BhY2l0eTtcclxuICAgICAgICBjb25zdCB7IHVuaWZvcm1zIH0gPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuICAgICAgICBpZiAoIHVuaWZvcm1zICYmIHVuaWZvcm1zLm9wYWNpdHkgKSB7XHJcbiAgICAgICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSBhbHBoYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGZhZGluZyBpbiBhbmltYXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXItZmFkZS1jb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBmYWRlSW46IGZ1bmN0aW9uICggZHVyYXRpb24gKSB7XHJcblxyXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gPj0gMCA/IGR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvblxyXG4gICAgICAgICAgICAudG8oIHsgb3BhY2l0eTogMSB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZSggdGhpcy5vbkZhZGVBbmltYXRpb25VcGRhdGUuYmluZCggdGhpcyApIClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSggdHJ1ZSwgZHVyYXRpb24gLyAyICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBmYWRlIGNvbXBsZXRlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItZmFkZS1jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItZmFkZS1jb21wbGV0ZScgfSApO1x0XHRcdFxyXG5cclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgZmFkaW5nIG91dCBhbmltYXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGZhZGVPdXQ6IGZ1bmN0aW9uICggZHVyYXRpb24gKSB7XHJcblxyXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gPj0gMCA/IGR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvblxyXG4gICAgICAgICAgICAudG8oIHsgb3BhY2l0eTogMCB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZSggdGhpcy5vbkZhZGVBbmltYXRpb25VcGRhdGUuYmluZCggdGhpcyApIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBlbnRlcmluZyBhIHBhbm9yYW1hIFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlclxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyLXN0YXJ0XHJcbiAgICAgKi9cclxuICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb25cclxuICAgICAgICAgICAgLnRvKCB7fSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBzdGFydGluZyBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLXN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1zdGFydCcgfSApO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmxvYWRlZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWRlSW4oIGR1cmF0aW9uICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBldmVudFxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlclxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXInIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vcmFtYS1lbnRlcicgfSApO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGxlYXZpbmcgYSBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNsZWF2ZVxyXG4gICAgICovXHJcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgIC50bygge30sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLm9uU3RhcnQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gc3RhcnRpbmcgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZS1zdGFydFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUtc3RhcnQnIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhZGVPdXQoIGR1cmF0aW9uICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSggZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExlYXZlIHBhbm9yYW1hIGV2ZW50XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlXHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZScgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9yYW1hLWxlYXZlJyB9ICk7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24uc3RvcCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPbiBwYW5vcmFtYSBkaXNwb3NlIGhhbmRsZXJcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uUGFub3JhbWFEaXNwb3NlJywgZGF0YTogdGhpcyB9ICk7XHJcblxyXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBkaXNwb3NhbCBvbiAzZCBvYmplY3RzXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRGlzcG9zZSAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VvbWV0cnksIG1hdGVyaWFsIH0gPSBvYmplY3Q7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IG9iamVjdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoIG9iamVjdC5jaGlsZHJlbltpXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuICAgICAgICAgICAgaWYgKCBnZW9tZXRyeSApIHsgZ2VvbWV0cnkuZGlzcG9zZSgpOyBvYmplY3QuZ2VvbWV0cnkgPSBudWxsOyB9XHJcbiAgICAgICAgICAgIGlmICggbWF0ZXJpYWwgKSB7IG1hdGVyaWFsLmRpc3Bvc2UoKTsgb2JqZWN0Lm1hdGVyaWFsID0gbnVsbDsgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnBhcmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSggdGhpcyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgRXF1aXJlY3Rhbmd1bGFyIGJhc2VkIGltYWdlIHBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSB1cmwgb3IgSFRNTEltYWdlRWxlbWVudFxyXG4gKi9cclxuZnVuY3Rpb24gSW1hZ2VQYW5vcmFtYSAoIGltYWdlLCBfZ2VvbWV0cnksIF9tYXRlcmlhbCApIHtcclxuXHJcbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBfZ2VvbWV0cnkgfHwgbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBfbWF0ZXJpYWwgfHwgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcclxuXHJcbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLnNyYyA9IGltYWdlO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblxyXG59XHJcblxyXG5JbWFnZVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEltYWdlUGFub3JhbWEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0gIHsqfSBzcmMgLSBVcmwgb3IgaW1hZ2UgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoIHNyYyApIHtcclxuXHJcbiAgICAgICAgc3JjID0gc3JjIHx8IHRoaXMuc3JjO1xyXG5cclxuICAgICAgICBpZiAoICFzcmMgKSB7IFxyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnSW1hZ2Ugc291cmNlIHVuZGVmaW5lZCcgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnICkge1xyXG5cclxuICAgICAgICAgICAgVGV4dHVyZUxvYWRlci5sb2FkKCBzcmMsIHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKSwgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgdGhpcy5vbkVycm9yLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzcmMgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkxvYWQoIG5ldyBUSFJFRS5UZXh0dXJlKCBzcmMgKSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbWFnZSBpcyBsb2FkZWRcclxuICAgICAqIEBwYXJhbSAge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgLSBUZXh0dXJlIHRvIGJlIHVwZGF0ZWRcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHRleHR1cmUgKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZVxyXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWw6IHsgbWFwIH0gfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIFJlbGVhc2UgY2FjaGVkIGltYWdlXHJcbiAgICAgICAgVEhSRUUuQ2FjaGUucmVtb3ZlKCB0aGlzLnNyYyApO1xyXG5cclxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgfVxyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgSW1hZ2VQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEVtcHR5IHBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gRW1wdHlQYW5vcmFtYSAoKSB7XHJcblxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweDAwMDAwMCwgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xyXG5cclxuICAgIGdlb21ldHJ5LmFkZEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggbmV3IEZsb2F0MzJBcnJheSgpLCAxICkgKTtcclxuXHJcbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbn1cclxuXHJcbkVtcHR5UGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogRW1wdHlQYW5vcmFtYVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XHJcbmltcG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlcic7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEN1YmVtYXAtYmFzZWQgcGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7YXJyYXl9IGltYWdlcyAtIEFycmF5IG9mIDYgdXJscyB0byBpbWFnZXMsIG9uZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBDdWJlVGV4dHVyZS4gVGhlIHVybHMgc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiBwb3MteCwgbmVnLXgsIHBvcy15LCBuZWcteSwgcG9zLXosIG5lZy16XHJcbiAqL1xyXG5mdW5jdGlvbiBDdWJlUGFub3JhbWEgKCBpbWFnZXMgPSBbXSApe1xyXG5cclxuICAgIGNvbnN0IGVkZ2VMZW5ndGggPSAxMDAwMDtcclxuICAgIGNvbnN0IHNoYWRlciA9IE9iamVjdC5hc3NpZ24oIHt9LCBUSFJFRS5TaGFkZXJMaWJbICdjdWJlJyBdICk7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSggZWRnZUxlbmd0aCwgZWRnZUxlbmd0aCwgZWRnZUxlbmd0aCApO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IHNoYWRlci51bmlmb3JtcyxcclxuICAgICAgICBzaWRlOiBUSFJFRS5CYWNrU2lkZSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcclxuICAgIHRoaXMuZWRnZUxlbmd0aCA9IGVkZ2VMZW5ndGg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwO1xyXG5cclxufVxyXG5cclxuQ3ViZVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEN1YmVQYW5vcmFtYSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgNiBpbWFnZXMgYW5kIGJpbmQgbGlzdGVuZXJzXHJcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBDdWJlVGV4dHVyZUxvYWRlci5sb2FkKCBcdFxyXG5cclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMsIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkxvYWQuYmluZCggdGhpcyApLCBcclxuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKSwgXHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvci5iaW5kKCB0aGlzICkgXHJcblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiA2IHRleHR1cmVzIGFyZSByZWFkeVxyXG4gICAgICogQHBhcmFtICB7VEhSRUUuQ3ViZVRleHR1cmV9IHRleHR1cmUgLSBDdWJlIHRleHR1cmVcclxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0Q3ViZScgXS52YWx1ZSA9IHRleHR1cmU7XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlXHJcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1x0XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudEN1YmU7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VzLmZvckVhY2goICggaW1hZ2UgKSA9PiB7IFRIUkVFLkNhY2hlLnJlbW92ZSggaW1hZ2UgKTsgfSApO1xyXG5cclxuICAgICAgICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgVEhSRUUuQ3ViZVRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEN1YmVQYW5vcmFtYSB9OyIsImltcG9ydCB7IEN1YmVQYW5vcmFtYSB9IGZyb20gJy4vQ3ViZVBhbm9yYW1hJztcclxuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEJhc2ljIHBhbm9yYW1hIHdpdGggNiBwcmUtZGVmaW5lZCBncmlkIGltYWdlc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEJhc2ljUGFub3JhbWEgKCkge1xyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDY7IGkrKyApIHtcclxuXHJcbiAgICAgICAgaW1hZ2VzLnB1c2goIERhdGFJbWFnZS5XaGl0ZVRpbGUgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ3ViZVBhbm9yYW1hLmNhbGwoIHRoaXMsIGltYWdlcyApO1xyXG5cclxufVxyXG5cclxuQmFzaWNQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBDdWJlUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogQmFzaWNQYW5vcmFtYVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgQmFzaWNQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFZpZGVvIFBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIC0gRXF1aXJlY3Rhbmd1bGFyIHZpZGVvIHVybFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9uIGZvciB2aWRlbyBzZXR0aW5nc1xyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy52aWRlb0VsZW1lbnRdIC0gSFRNTDUgdmlkZW8gZWxlbWVudCBjb250YWlucyB0aGUgdmlkZW9cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sb29wPXRydWVdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGxvb3AgaW4gdGhlIGVuZFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm11dGVkPXRydWVdIC0gTXV0ZSB0aGUgdmlkZW8gb3Igbm90LiBOZWVkIHRvIGJlIHRydWUgaW4gb3JkZXIgdG8gYXV0b3BsYXkgb24gc29tZSBicm93c2Vyc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXSAtIFNwZWNpZnkgaWYgdGhlIHZpZGVvIHNob3VsZCBhdXRvIHBsYXlcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wbGF5c2lubGluZT10cnVlXSAtIFNwZWNpZnkgaWYgdmlkZW8gc2hvdWxkIHBsYXkgaW5saW5lIGZvciBpT1MuIElmIHlvdSB3YW50IGl0IHRvIGF1dG8gcGxheSBpbmxpbmUsIHNldCBib3RoIGF1dG9wbGF5IGFuZCBtdXRlZCBvcHRpb25zIHRvIHRydWVcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJdIC0gU2V0cyB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBmb3IgdGhlIHZpZGVvLCB3aGljaCBhbGxvd3MgZm9yIGNyb3NzLW9yaWdpbiB2aWRlb3MgaW4gc29tZSBicm93c2VycyAoRmlyZWZveCwgQ2hyb21lKS4gU2V0IHRvIGVpdGhlciBcImFub255bW91c1wiIG9yIFwidXNlLWNyZWRlbnRpYWxzXCIuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmFkaXVzPTUwMDBdIC0gVGhlIG1pbmltdW0gcmFkaXVzIGZvciB0aGlzIHBhbm9yYW1cclxuICovXHJcbmZ1bmN0aW9uIFZpZGVvUGFub3JhbWEgKCBzcmMsIG9wdGlvbnMgPSB7fSApIHtcclxuXHJcbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XHJcblxyXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG4gICAgdGhpcy5zcmMgPSBzcmM7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG5cclxuICAgICAgICB2aWRlb0VsZW1lbnQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG11dGVkOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBwbGF5c2lubGluZTogdHJ1ZSxcclxuICAgICAgICBjcm9zc09yaWdpbjogJ2Fub255bW91cydcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1xyXG5cclxuICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdGhpcy5vcHRpb25zLnZpZGVvRWxlbWVudDtcclxuICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnJlc3VtZVZpZGVvUHJvZ3Jlc3MuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby10b2dnbGUnLCB0aGlzLnRvZ2dsZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbn07XHJcblxyXG5WaWRlb1Bhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IFZpZGVvUGFub3JhbWEsXHJcblxyXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkoIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSApO1xyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB2aWRlbyBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzICBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbXV0ZWQsIGxvb3AsIGF1dG9wbGF5LCBwbGF5c2lubGluZSwgY3Jvc3NPcmlnaW4gfSA9IHRoaXMub3B0aW9ucztcclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgICAgICBjb25zdCBvblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBvbkxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIHZpZGVvLmxvb3AgPSBsb29wO1xyXG4gICAgICAgIHZpZGVvLmF1dG9wbGF5ID0gYXV0b3BsYXk7XHJcbiAgICAgICAgdmlkZW8ucGxheXNpbmxpbmUgPSBwbGF5c2lubGluZTtcclxuICAgICAgICB2aWRlby5jcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luO1xyXG4gICAgICAgIHZpZGVvLm11dGVkID0gbXV0ZWQ7XHJcblx0XHRcclxuICAgICAgICBpZiAoIHBsYXlzaW5saW5lICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAncGxheXNpbmxpbmUnLCAnJyApO1xyXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyApO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBjb25zdCBvbmxvYWRlZGRhdGEgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9UZXh0dXJlKCB2aWRlbyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhdXRvcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IGZhbHNlIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBtb2JpbGUgc2lsZW50IGF1dG9wbGF5XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5pc01vYmlsZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhdXRvcGxheSAmJiBtdXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiB0cnVlIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGaXggZm9yIHRocmVlanMgcjg5IGRlbGF5ZWQgdXBkYXRlXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XHJcbiAgICAgICAgICAgICAgICBvbkxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBsb2FkZWQgKTtcclxuXHRcdFx0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVhZHkgc3RhdGUgb2YgdGhlIGF1ZGlvL3ZpZGVvIGVsZW1lbnRcclxuICAgICAgICAgKiAwID0gSEFWRV9OT1RISU5HIC0gbm8gaW5mb3JtYXRpb24gd2hldGhlciBvciBub3QgdGhlIGF1ZGlvL3ZpZGVvIGlzIHJlYWR5XHJcbiAgICAgICAgICogMSA9IEhBVkVfTUVUQURBVEEgLSBtZXRhZGF0YSBmb3IgdGhlIGF1ZGlvL3ZpZGVvIGlzIHJlYWR5XHJcbiAgICAgICAgICogMiA9IEhBVkVfQ1VSUkVOVF9EQVRBIC0gZGF0YSBmb3IgdGhlIGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb24gaXMgYXZhaWxhYmxlLCBidXQgbm90IGVub3VnaCBkYXRhIHRvIHBsYXkgbmV4dCBmcmFtZS9taWxsaXNlY29uZFxyXG4gICAgICAgICAqIDMgPSBIQVZFX0ZVVFVSRV9EQVRBIC0gZGF0YSBmb3IgdGhlIGN1cnJlbnQgYW5kIGF0IGxlYXN0IHRoZSBuZXh0IGZyYW1lIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgICAqIDQgPSBIQVZFX0VOT1VHSF9EQVRBIC0gZW5vdWdoIGRhdGEgYXZhaWxhYmxlIHRvIHN0YXJ0IHBsYXlpbmdcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoIHZpZGVvLnJlYWR5U3RhdGUgPiAyICkge1xyXG5cclxuICAgICAgICAgICAgb25sb2FkZWRkYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdmlkZW8ucXVlcnlTZWxlY3RvckFsbCggJ3NvdXJjZScgKS5sZW5ndGggPT09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NvdXJjZScgKTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZS5zcmMgPSB0aGlzLnNyYztcclxuICAgICAgICAgICAgICAgIHZpZGVvLmFwcGVuZENoaWxkKCBzb3VyY2UgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkZWRkYXRhJywgb25sb2FkZWRkYXRhLmJpbmQoIHRoaXMgKSApO1xyXG5cdFx0XHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSB2aWRlby5kdXJhdGlvbiA+PSAwID8gdmlkZW8uY3VycmVudFRpbWUgLyB2aWRlby5kdXJhdGlvbiA6IDA7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdvblZpZGVvVXBkYXRlJ1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFRoZSBwZXJjZW50YWdlIG9mIHZpZGVvIHByb2dyZXNzLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvblZpZGVvVXBkYXRlJywgZGF0YTogdGhpcy52aWRlb1Byb2dyZXNzIH0gKTtcclxuXHJcbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2VuZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgaWYgKCAhbG9vcCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VmlkZW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiB0cnVlIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfS5iaW5kKCB0aGlzICksIGZhbHNlICk7IFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdmlkZW8gdGV4dHVyZVxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyAgLSBUaGUgaHRtbDUgdmlkZW8gZWxlbWVudFxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVvVGV4dHVyZTogZnVuY3Rpb24gKCB2aWRlbyApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdmlkZW8gKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvVGV4dHVyZSA9IG5ldyBUSFJFRS5WaWRlb1RleHR1cmUoIHZpZGVvICk7XHJcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB2aWRlb1RleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHZpZGVvVGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXQ7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSggdmlkZW9UZXh0dXJlICk7XHJcblx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB1bmRlZmluZWQ7XHRcclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdmlkZW8gaXMgcGF1c2VkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGlzIHZpZGVvIHBhdXNlZCBvciBub3RcclxuICAgICAqL1xyXG4gICAgaXNWaWRlb1BhdXNlZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQucGF1c2VkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgdmlkZW8gdG8gcGxheSBvciBwYXVzZVxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoICF2aWRlbyApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHZpZGVvWyB2aWRlby5wYXVzZWQgPyAncGxheScgOiAncGF1c2UnIF0oKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHZpZGVvIGN1cnJlbnRUaW1lXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWlucyBwZXJjZW50YWdlLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAqL1xyXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZTogZnVuY3Rpb24gKCB7IHBlcmNlbnRhZ2UgfSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhTnVtYmVyLmlzTmFOKCBwZXJjZW50YWdlICkgJiYgcGVyY2VudGFnZSAhPT0gMSApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmN1cnJlbnRUaW1lID0gdmlkZW8uZHVyYXRpb24gKiBwZXJjZW50YWdlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uVmlkZW9VcGRhdGUnLCBkYXRhOiBwZXJjZW50YWdlIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5IHZpZGVvXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwbGF5XHJcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwbGF5LWVycm9yXHJcbiAgICAgKi9cclxuICAgIHBsYXlWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHBsYXlWaWRlbyA9IHRoaXMucGxheVZpZGVvLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUGxheSBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgVmlkZW9QYW5vcmFtYSNwbGF5XHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwbGF5JyB9ICk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25FcnJvciA9ICggZXJyb3IgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBFcnJvciBwbGF5aW5nIHZpZGVvLiBSZXRyeSBuZXh0IGZyYW1lLiBQb3NzaWJseSBXYWl0aW5nIGZvciB1c2VyIGludGVyYWN0aW9uXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHBsYXlWaWRlbyApO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFBsYXkgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheS1lcnJvclxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheS1lcnJvcicsIGVycm9yIH0gKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyAmJiB2aWRlby5wYXVzZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5wbGF5KCkudGhlbiggb25TdWNjZXNzICkuY2F0Y2goIG9uRXJyb3IgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXVzZSB2aWRlb1xyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGF1c2VcclxuICAgICAqL1xyXG4gICAgcGF1c2VWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICYmICF2aWRlby5wYXVzZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFBhdXNlIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlkZW9QYW5vcmFtYSNwYXVzZVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYXVzZScgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXN1bWUgdmlkZW9cclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVzdW1lVmlkZW9Qcm9ncmVzczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLnJlYWR5U3RhdGUgPj0gNCAmJiB2aWRlby5hdXRvcGxheSAmJiAhdGhpcy5pc01vYmlsZSgpICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8oKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXVzZVZpZGVvKCk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZSggeyBwZXJjZW50YWdlOiB0aGlzLnZpZGVvUHJvZ3Jlc3MgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB2aWRlbyBhdCBzdGF0aW5nIHBvaW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0VmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZSggeyBwZXJjZW50YWdlOiAwIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB2aWRlbyBpcyBtdXRlZFxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBpcyB2aWRlbyBtdXRlZCBvciBub3RcclxuICAgICAqL1xyXG4gICAgaXNWaWRlb011dGVkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudC5tdXRlZDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTXV0ZSB2aWRlb1xyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBtdXRlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhdmlkZW8ubXV0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2b2x1bWVjaGFuZ2UnIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5tdXRlIHZpZGVvXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVubXV0ZVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gJiYgdGhpcy5pc1ZpZGVvTXV0ZWQoKSApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2b2x1bWVjaGFuZ2UnIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmlkZW8gZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBnZXRWaWRlb0VsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIHZpZGVvIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbDogeyBtYXAgfSB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZVZpZGVvKCk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMucGF1c2VWaWRlby5iaW5kKCB0aGlzICkgKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5yZXN1bWVWaWRlb1Byb2dyZXNzLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRvZ2dsZScsIHRoaXMudG9nZ2xlVmlkZW8uYmluZCggdGhpcyApICk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdGltZScsIHRoaXMuc2V0VmlkZW9DdXJyZW50VGltZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IH1cclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfTsiLCJcclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vVGV4dHVyZUxvYWRlcic7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBHb29nbGUgU3RyZWV0IFZpZXcgTG9hZGVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1ldGVycyBcclxuICovXHJcbmZ1bmN0aW9uIEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgKCBwYXJhbWV0ZXJzID0ge30gKSB7XHJcblxyXG4gICAgdGhpcy5fcGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XHJcbiAgICB0aGlzLl96b29tID0gbnVsbDtcclxuICAgIHRoaXMuX3Bhbm9JZCA9IG51bGw7XHJcbiAgICB0aGlzLl9wYW5vQ2xpZW50ID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICB0aGlzLl90b3RhbCA9IDA7XHJcbiAgICB0aGlzLl9jYW52YXMgPSBbXTtcclxuICAgIHRoaXMuX2N0eCA9IFtdO1xyXG4gICAgdGhpcy5fd2MgPSAwO1xyXG4gICAgdGhpcy5faGMgPSAwO1xyXG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB0aGlzLmNvcHlyaWdodCA9ICcnO1xyXG4gICAgdGhpcy5vblNpemVDaGFuZ2UgPSBudWxsO1xyXG4gICAgdGhpcy5vblBhbm9yYW1hTG9hZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5sZXZlbHNXID0gWyAxLCAyLCA0LCA3LCAxMywgMjYgXTtcclxuICAgIHRoaXMubGV2ZWxzSCA9IFsgMSwgMSwgMiwgNCwgNywgMTMgXTtcclxuXHJcbiAgICB0aGlzLndpZHRocyA9IFsgNDE2LCA4MzIsIDE2NjQsIDMzMjgsIDY2NTYsIDEzMzEyIF07XHJcbiAgICB0aGlzLmhlaWdodHMgPSBbIDQxNiwgNDE2LCA4MzIsIDE2NjQsIDMzMjgsIDY2NTYgXTtcclxuXHJcbiAgICB0aGlzLm1heFcgPSA2NjU2O1xyXG4gICAgdGhpcy5tYXhIID0gNjY1NjtcclxuXHJcbiAgICBsZXQgZ2w7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCggJ2V4cGVyaW1lbnRhbC13ZWJnbCcgKTtcclxuXHJcbiAgICAgICAgaWYoICFnbCApIHtcclxuXHJcbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoICd3ZWJnbCcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNhdGNoICggZXJyb3IgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWF4VyA9IE1hdGgubWF4KCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9URVhUVVJFX1NJWkUgKSwgdGhpcy5tYXhXICk7XHJcbiAgICB0aGlzLm1heEggPSBNYXRoLm1heCggZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfVEVYVFVSRV9TSVpFICksIHRoaXMubWF4SCApO1xyXG5cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbiggR29vZ2xlU3RyZWV0dmlld0xvYWRlci5wcm90b3R5cGUsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogR29vZ2xlU3RyZWV0dmlld0xvYWRlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBwcm9ncmVzc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxvYWRlZCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbCBcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICggbG9hZGVkLCB0b3RhbCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm9uUHJvZ3Jlc3MgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiBsb2FkZWQsIHRvdGFsOiB0b3RhbCB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkYXB0IHRleHR1cmUgdG8gem9vbVxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGFwdFRleHR1cmVUb1pvb206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMud2lkdGhzIFsgdGhpcy5fem9vbSBdO1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmhlaWdodHNbIHRoaXMuX3pvb20gXTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcclxuICAgICAgICBjb25zdCBtYXhIID0gdGhpcy5tYXhIO1xyXG5cclxuICAgICAgICB0aGlzLl93YyA9IE1hdGguY2VpbCggdyAvIG1heFcgKTtcclxuICAgICAgICB0aGlzLl9oYyA9IE1hdGguY2VpbCggaCAvIG1heEggKTtcclxuXHJcbiAgICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCB0aGlzLl9oYzsgeSsrICkge1xyXG4gICAgICAgICAgICBmb3IoIGxldCB4ID0gMDsgeCA8IHRoaXMuX3djOyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuICAgICAgICAgICAgICAgIGlmKCB4IDwgKCB0aGlzLl93YyAtIDEgKSApIGMud2lkdGggPSBtYXhXOyBlbHNlIGMud2lkdGggPSB3IC0gKCBtYXhXICogeCApO1xyXG4gICAgICAgICAgICAgICAgaWYoIHkgPCAoIHRoaXMuX2hjIC0gMSApICkgYy5oZWlnaHQgPSBtYXhIOyBlbHNlIGMuaGVpZ2h0ID0gaCAtICggbWF4SCAqIHkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbnZhcy5wdXNoKCBjICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdHgucHVzaCggYy5nZXRDb250ZXh0KCAnMmQnICkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcG9zZSBmcm9tIHRpbGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgXHJcbiAgICAgKiBAcGFyYW0geyp9IHRleHR1cmUgXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNvbXBvc2VGcm9tVGlsZTogZnVuY3Rpb24gKCB4LCB5LCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICBjb25zdCBtYXhXID0gdGhpcy5tYXhXO1xyXG4gICAgICAgIGNvbnN0IG1heEggPSB0aGlzLm1heEg7XHJcblxyXG4gICAgICAgIHggKj0gNTEyO1xyXG4gICAgICAgIHkgKj0gNTEyO1xyXG5cclxuICAgICAgICBjb25zdCBweCA9IE1hdGguZmxvb3IoIHggLyBtYXhXICk7XHJcbiAgICAgICAgY29uc3QgcHkgPSBNYXRoLmZsb29yKCB5IC8gbWF4SCApO1xyXG5cclxuICAgICAgICB4IC09IHB4ICogbWF4VztcclxuICAgICAgICB5IC09IHB5ICogbWF4SDtcclxuXHJcbiAgICAgICAgdGhpcy5fY3R4WyBweSAqIHRoaXMuX3djICsgcHggXS5kcmF3SW1hZ2UoIHRleHR1cmUsIDAsIDAsIHRleHR1cmUud2lkdGgsIHRleHR1cmUuaGVpZ2h0LCB4LCB5LCA1MTIsIDUxMiApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyZXNzKCk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9ncmVzc1xyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBwcm9ncmVzczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvdW50Kys7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKCB0aGlzLl9jb3VudCwgdGhpcy5fdG90YWwgKTtcclxuXHRcdFxyXG4gICAgICAgIGlmICggdGhpcy5fY291bnQgPT09IHRoaXMuX3RvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuX2NhbnZhcztcclxuICAgICAgICAgICAgdGhpcy5wYW5vSWQgPSB0aGlzLl9wYW5vSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb207XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMub25QYW5vcmFtYUxvYWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblBhbm9yYW1hTG9hZCggdGhpcy5fY2FudmFzWyAwIF0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBvc2UgcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY29tcG9zZVBhbm9yYW1hOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoIDAsIDEgKTtcclxuXHRcdFxyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLmxldmVsc1dbIHRoaXMuX3pvb20gXTtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5sZXZlbHNIWyB0aGlzLl96b29tIF07XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblx0XHRcdFxyXG4gICAgICAgIHRoaXMuX2NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl90b3RhbCA9IHcgKiBoO1xyXG5cclxuICAgICAgICBjb25zdCB7IHVzZVdlYkdMIH0gPSB0aGlzLl9wYXJhbWV0ZXJzO1xyXG5cclxuICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IGg7IHkrKyApIHtcclxuICAgICAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB3OyB4KysgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9nZW8wLmdncGh0LmNvbS9jYms/Y2JfY2xpZW50PW1hcHNfc3YudGFjdGlsZSZhdXRodXNlcj0wJmhsPWVuJm91dHB1dD10aWxlJnpvb209JyArIHRoaXMuX3pvb20gKyAnJng9JyArIHggKyAnJnk9JyArIHkgKyAnJnBhbm9pZD0nICsgdGhpcy5fcGFub0lkICsgJyZuYnQmZm92ZXI9Mic7XHJcbiAgICAgICAgICAgICAgICAoIGZ1bmN0aW9uKCB4LCB5ICkgeyBcclxuICAgICAgICAgICAgICAgICAgICBpZiggdXNlV2ViR0wgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBUZXh0dXJlTG9hZGVyLmxvYWQoIHVybCwgbnVsbCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGV4dHVyZSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlRnJvbVRpbGUoIHgsIHksIHRoaXMgKTtcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICkoIHgsIHkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vaWQgXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggcGFub2lkICkge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRQYW5vKCBwYW5vaWQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBwYW5vcmFtYVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWRQYW5vOiBmdW5jdGlvbiggaWQgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3Bhbm9DbGllbnQuZ2V0UGFub3JhbWFCeUlkKCBpZCwgZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdTdGF0dXMuT0spIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb3B5cmlnaHQgPSByZXN1bHQuY29weXJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fcGFub0lkID0gcmVzdWx0LmxvY2F0aW9uLnBhbm87XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VQYW5vcmFtYSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgem9vbSBsZXZlbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHogXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFpvb206IGZ1bmN0aW9uKCB6ICkge1xyXG5cclxuICAgICAgICB0aGlzLl96b29tID0gejtcclxuICAgICAgICB0aGlzLmFkYXB0VGV4dHVyZVRvWm9vbSgpO1xyXG4gICAgfVxyXG5cdFxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vSW1hZ2VQYW5vcmFtYSc7XHJcbmltcG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL0dvb2dsZVN0cmVldHZpZXdMb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBHb29nbGUgc3RyZWV0dmlldyBwYW5vcmFtYVxyXG4gKiBAZGVzY3JpcHRpb24gW0hvdyB0byBnZXQgUGFub3JhbWEgSURde0BsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk5MTYxNDkvZ29vZ2xlLW1hcHMtc3RyZWV0dmlldy1ob3ctdG8tZ2V0LXBhbm9yYW1hLWlkfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhbm9JZCAtIFBhbm9yYW1hIGlkIGZyb20gR29vZ2xlIFN0cmVldHZpZXcgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpS2V5XSAtIEdvb2dsZSBTdHJlZXQgVmlldyBBUEkgS2V5XHJcbiAqL1xyXG5mdW5jdGlvbiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgKCBwYW5vSWQsIGFwaUtleSApIHtcclxuXHJcbiAgICBJbWFnZVBhbm9yYW1hLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB0aGlzLnBhbm9JZCA9IHBhbm9JZDtcclxuXHJcbiAgICB0aGlzLmdzdkxvYWRlciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zZXR1cEdvb2dsZU1hcEFQSSggYXBpS2V5ICk7XHJcblxyXG59XHJcblxyXG5Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIEdvb2dsZSBTdHJlZXQgVmlldyBieSBwYW5vcmFtYSBpZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhbm9JZCAtIEdvZ29nbGUgU3RyZWV0IFZpZXcgcGFub3JhbWEgaWRcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoIHBhbm9JZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcGFub0lkID0gKCBwYW5vSWQgfHwgdGhpcy5wYW5vSWQgKSB8fCB7fTtcclxuXHJcbiAgICAgICAgaWYgKCBwYW5vSWQgJiYgdGhpcy5nc3ZMb2FkZXIgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRHU1ZMb2FkZXIoIHBhbm9JZCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHVwIEdvb2dsZSBNYXAgQVBJXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGFwaUtleVxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldHVwR29vZ2xlTWFwQVBJOiBmdW5jdGlvbiAoIGFwaUtleSApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz8nO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgKz0gYXBpS2V5ID8gJ2tleT0nICsgYXBpS2V5IDogJyc7XHJcbiAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBzY3JpcHQub25sb2FkID0gdGhpcy5zZXRHU1ZMb2FkZXIuYmluZCggdGhpcyApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaGVhZCcgKS5hcHBlbmRDaGlsZCggc2NyaXB0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBHU1YgTG9hZGVyXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0R1NWTG9hZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyID0gbmV3IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmxvYWRSZXF1ZXN0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgR1NWIExvYWRlclxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtHb29nbGVTdHJlZXR2aWV3TG9hZGVyfSBHU1YgTG9hZGVyIGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldEdTVkxvYWRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nc3ZMb2FkZXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgR1NWIExvYWRlclxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBwYW5vSWQgLSBHb2dvZ2xlIFN0cmVldCBWaWV3IHBhbm9yYW1hIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZEdTVkxvYWRlcjogZnVuY3Rpb24gKCBwYW5vSWQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlci5vblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIub25QYW5vcmFtYUxvYWQgPSB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLnNldFpvb20oIHRoaXMuZ2V0Wm9vbUxldmVsKCkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIubG9hZCggcGFub0lkICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLmxvYWRlZCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGxvYWRlZFxyXG4gICAgICogQHBhcmFtICB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIENhbnZhcyB3aGVyZSB0aGUgdGlsZXMgaGF2ZSBiZWVuIGRyYXduXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIGNhbnZhcyApIHtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMsIG5ldyBUSFJFRS5UZXh0dXJlKCBjYW52YXMgKSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH07IiwiLyoqXHJcbiAqIFN0ZXJlb2dyYXBoaWMgcHJvamVjdGlvbiBzaGFkZXJcclxuICogYmFzZWQgb24gaHR0cDovL25vdGxpb24uZ2l0aHViLmlvL3N0cmVldHZpZXctc3RlcmVvZ3JhcGhpY1xyXG4gKiBAYXV0aG9yIHBjaGVuNjZcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIFN0ZXJlb2dyYWhwaWMgU2hhZGVyXHJcbiAqIEBtb2R1bGUgU3RlcmVvZ3JhcGhpY1NoYWRlclxyXG4gKiBAcHJvcGVydHkge29iamVjdH0gdW5pZm9ybXNcclxuICogQHByb3BlcnR5IHtUSFJFRS5UZXh0dXJlfSB1bmlmb3Jtcy50RGlmZnVzZSBkaWZmdXNlIG1hcFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMucmVzb2x1dGlvbiBpbWFnZSByZXNvbHV0aW9uXHJcbiAqIEBwcm9wZXJ0eSB7VEhSRUUuTWF0cml4NH0gdW5pZm9ybXMudHJhbnNmb3JtIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMuem9vbSBpbWFnZSB6b29tIGZhY3RvclxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gdW5pZm9ybXMub3BhY2l0eSBpbWFnZSBvcGFjaXR5XHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2ZXJ0ZXhTaGFkZXIgdmVydGV4IHNoYWRlclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJhZ21lbnRTaGFkZXIgZnJhZ21lbnQgc2hhZGVyXHJcbiAqL1xyXG5jb25zdCBTdGVyZW9ncmFwaGljU2hhZGVyID0ge1xyXG5cclxuICAgIHVuaWZvcm1zOiB7XHJcblxyXG4gICAgICAgICd0RGlmZnVzZSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlKCkgfSxcclxuICAgICAgICAncmVzb2x1dGlvbic6IHsgdmFsdWU6IDEuMCB9LFxyXG4gICAgICAgICd0cmFuc2Zvcm0nOiB7IHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4NCgpIH0sXHJcbiAgICAgICAgJ3pvb20nOiB7IHZhbHVlOiAxLjAgfSxcclxuICAgICAgICAnb3BhY2l0eSc6IHsgdmFsdWU6IDEuMCB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcclxuXHJcbiAgICAgICAgJ3ZvaWQgbWFpbigpIHsnLFxyXG5cclxuICAgICAgICAndlV2ID0gdXY7JyxcclxuICAgICAgICAnZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7JyxcclxuXHJcbiAgICAgICAgJ30nIFxyXG5cclxuICAgIF0uam9pbiggJ1xcbicgKSxcclxuXHJcbiAgICBmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuICAgICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7JyxcclxuICAgICAgICAndW5pZm9ybSBmbG9hdCByZXNvbHV0aW9uOycsXHJcbiAgICAgICAgJ3VuaWZvcm0gbWF0NCB0cmFuc2Zvcm07JyxcclxuICAgICAgICAndW5pZm9ybSBmbG9hdCB6b29tOycsXHJcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgb3BhY2l0eTsnLFxyXG5cclxuICAgICAgICAndmFyeWluZyB2ZWMyIHZVdjsnLFxyXG5cclxuICAgICAgICAnY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzsnLFxyXG5cclxuICAgICAgICAndm9pZCBtYWluKCl7JyxcclxuXHJcbiAgICAgICAgJ3ZlYzIgcG9zaXRpb24gPSAtMS4wICsgIDIuMCAqIHZVdjsnLFxyXG5cclxuICAgICAgICAncG9zaXRpb24gKj0gdmVjMiggem9vbSAqIHJlc29sdXRpb24sIHpvb20gKiAwLjUgKTsnLFxyXG5cclxuICAgICAgICAnZmxvYXQgeDJ5MiA9IHBvc2l0aW9uLnggKiBwb3NpdGlvbi54ICsgcG9zaXRpb24ueSAqIHBvc2l0aW9uLnk7JyxcclxuICAgICAgICAndmVjMyBzcGhlcmVfcG50ID0gdmVjMyggMi4gKiBwb3NpdGlvbiwgeDJ5MiAtIDEuICkgLyAoIHgyeTIgKyAxLiApOycsXHJcblxyXG4gICAgICAgICdzcGhlcmVfcG50ID0gdmVjMyggdHJhbnNmb3JtICogdmVjNCggc3BoZXJlX3BudCwgMS4wICkgKTsnLFxyXG5cclxuICAgICAgICAndmVjMiBzYW1wbGVVViA9IHZlYzIoJyxcclxuICAgICAgICAnKGF0YW4oc3BoZXJlX3BudC55LCBzcGhlcmVfcG50LngpIC8gUEkgKyAxLjApICogMC41LCcsXHJcbiAgICAgICAgJyhhc2luKHNwaGVyZV9wbnQueikgLyBQSSArIDAuNSknLFxyXG4gICAgICAgICcpOycsXHJcblxyXG4gICAgICAgICdnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCBzYW1wbGVVViApOycsXHJcblxyXG4gICAgICAgICdnbF9GcmFnQ29sb3IuYSAqPSBvcGFjaXR5OycsXHJcblxyXG4gICAgICAgICd9J1xyXG5cclxuICAgIF0uam9pbiggJ1xcbicgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IFN0ZXJlb2dyYXBoaWNTaGFkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9JbWFnZVBhbm9yYW1hJztcclxuaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XHJcbmltcG9ydCB7IENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3RlcmVvZ3JhcGhpY1NoYWRlciB9IGZyb20gJy4uL3NoYWRlcnMvU3RlcmVvZ3JhcGhpY1NoYWRlcic7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIExpdHRsZSBQbGFuZXRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFx0XHQtIFR5cGUgb2YgbGl0dGxlIHBsYW5ldCBiYXNpYyBjbGFzc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MTAwMDBdIC0gU2l6ZSBvZiBwbGFuZSBnZW9tZXRyeVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhdGlvPTAuNV0gIC0gUmF0aW8gb2YgcGxhbmUgZ2VvbWV0cnkncyBoZWlnaHQgYWdhaW5zdCB3aWR0aFxyXG4gKi9cclxuZnVuY3Rpb24gTGl0dGxlUGxhbmV0ICggdHlwZSA9ICdpbWFnZScsIHNvdXJjZSwgc2l6ZSA9IDEwMDAwLCByYXRpbyA9IDAuNSApIHtcclxuXHJcbiAgICBpZiAoIHR5cGUgPT09ICdpbWFnZScgKSB7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEuY2FsbCggdGhpcywgc291cmNlLCB0aGlzLmNyZWF0ZUdlb21ldHJ5KCBzaXplLCByYXRpbyApLCB0aGlzLmNyZWF0ZU1hdGVyaWFsKCBzaXplICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMucmF0aW8gPSByYXRpbztcclxuICAgIHRoaXMuRVBTID0gMC4wMDAwMDE7XHJcbiAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudXNlck1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB0aGlzLnF1YXRBID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuICAgIHRoaXMucXVhdEIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4gICAgdGhpcy5xdWF0Q3VyID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuICAgIHRoaXMucXVhdFNsZXJwID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcbiAgICB0aGlzLnZlY3RvclggPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgdGhpcy52ZWN0b3JZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd3aW5kb3ctcmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSApO1xyXG5cclxufVxyXG5cclxuTGl0dGxlUGxhbmV0LnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIEltYWdlUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogTGl0dGxlUGxhbmV0LFxyXG5cclxuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuXHRcdFx0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5hZGQuY2FsbCggdGhpcywgb2JqZWN0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVHZW9tZXRyeTogZnVuY3Rpb24gKCBzaXplLCByYXRpbyApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCBzaXplLCBzaXplICogcmF0aW8gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU1hdGVyaWFsOiBmdW5jdGlvbiAoIHNpemUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoYWRlciA9IE9iamVjdC5hc3NpZ24oIHt9LCBTdGVyZW9ncmFwaGljU2hhZGVyICksIHVuaWZvcm1zID0gc2hhZGVyLnVuaWZvcm1zO1xyXG5cclxuICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gc2l6ZTtcclxuICAgICAgICB1bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMC4wO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgICAgICB1bmlmb3JtczogdW5pZm9ybXMsXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICByZWdpc3Rlck1vdXNlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0TWVudS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgdW5yZWdpc3Rlck1vdXNlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dENvdW50ID0gKCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkgfHwgMSA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XHJcblxyXG4gICAgICAgIGNhc2UgMTpcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSAoIGV2ZW50LmNsaWVudFggPj0gMCApID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5zZXQoIHgsIHkgKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDI6XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5waW5jaERpc3RhbmNlID0gZGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q291bnQgPSAoIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggKSB8fCAxIDtcclxuXHJcbiAgICAgICAgc3dpdGNoICggaW5wdXRDb3VudCApIHtcclxuXHJcbiAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYW5nbGVYID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggeCAtIHRoaXMudXNlck1vdXNlLnggKSAqIDAuNDtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGVZID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggeSAtIHRoaXMudXNlck1vdXNlLnkgKSAqIDAuNDtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5kcmFnZ2luZyApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVhdEEuc2V0RnJvbUF4aXNBbmdsZSggdGhpcy52ZWN0b3JZLCBhbmdsZVggKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVhdEIuc2V0RnJvbUF4aXNBbmdsZSggdGhpcy52ZWN0b3JYLCBhbmdsZVkgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVhdEN1ci5tdWx0aXBseSggdGhpcy5xdWF0QSApLm11bHRpcGx5KCB0aGlzLnF1YXRCICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJNb3VzZS5zZXQoIHgsIHkgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFpvb21EZWx0YSggdGhpcy51c2VyTW91c2UucGluY2hEaXN0YW5jZSAtIGRpc3RhbmNlICk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZVdoZWVsOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgZGVsdGEgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50LndoZWVsRGVsdGEgIT09IHVuZGVmaW5lZCApIHsgLy8gV2ViS2l0IC8gT3BlcmEgLyBFeHBsb3JlciA5XHJcblxyXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkICkgeyAvLyBGaXJlZm94XHJcblxyXG4gICAgICAgICAgICBkZWx0YSA9IC0gZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkWm9vbURlbHRhKCBkZWx0YSApO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYWRkWm9vbURlbHRhOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXM7XHJcbiAgICAgICAgY29uc3QgbG93ZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDAuMTtcclxuICAgICAgICBjb25zdCB1cHBlckJvdW5kID0gdGhpcy5zaXplICogMTA7XHJcblxyXG4gICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIGlmICggdW5pZm9ybXMuem9vbS52YWx1ZSA8PSBsb3dlckJvdW5kICkge1xyXG5cclxuICAgICAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IGxvd2VyQm91bmQ7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHVuaWZvcm1zLnpvb20udmFsdWUgPj0gdXBwZXJCb3VuZCApIHtcclxuXHJcbiAgICAgICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSB1cHBlckJvdW5kO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblVwZGF0ZUNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMub25VcGRhdGVDYWxsYmFjay5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5xdWF0U2xlcnAuc2xlcnAoIHRoaXMucXVhdEN1ciwgMC4xICk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5tYXRlcmlhbCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudHJhbnNmb3JtLnZhbHVlLm1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKCB0aGlzLnF1YXRTbGVycCApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAhdGhpcy5kcmFnZ2luZyAmJiAxLjAgLSB0aGlzLnF1YXRTbGVycC5jbG9uZSgpLmRvdCggdGhpcy5xdWF0Q3VyICkgPCB0aGlzLkVQUyApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5mcmFtZUlkICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucXVhdEN1ci5zZXQoIDAsIDAsIDAsIDEgKTtcclxuICAgICAgICB0aGlzLnF1YXRTbGVycC5zZXQoIDAsIDAsIDAsIDEgKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnZGlzYWJsZUNvbnRyb2wnIH0gKTtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMsIHRleHR1cmUgKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxlYXZlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdlbmFibGVDb250cm9sJywgZGF0YTogQ09OVFJPTFMuT1JCSVQgfSApO1xyXG5cclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuZnJhbWVJZCApO1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxlYXZlLmNhbGwoIHRoaXMgKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29udGV4dE1lbnU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1x0XHJcblxyXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9MaXR0bGVQbGFuZXQnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBJbWFnZSBMaXR0bGUgUGxhbmV0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFx0XHQtIFVSTCBmb3IgdGhlIGltYWdlIHNvdXJjZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemU9MTAwMDBdIC0gU2l6ZSBvZiBwbGFuZSBnZW9tZXRyeVxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhdGlvPTAuNV0gIC0gUmF0aW8gb2YgcGxhbmUgZ2VvbWV0cnkncyBoZWlnaHQgYWdhaW5zdCB3aWR0aFxyXG4gKi9cclxuZnVuY3Rpb24gSW1hZ2VMaXR0bGVQbGFuZXQgKCBzb3VyY2UsIHNpemUsIHJhdGlvICkge1xyXG5cclxuICAgIExpdHRsZVBsYW5ldC5jYWxsKCB0aGlzLCAnaW1hZ2UnLCBzb3VyY2UsIHNpemUsIHJhdGlvICk7XHJcblxyXG59XHJcblxyXG5JbWFnZUxpdHRsZVBsYW5ldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBMaXR0bGVQbGFuZXQucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogSW1hZ2VMaXR0bGVQbGFuZXQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBsb2FkZWQgd2l0aCB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmVcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZUxpdHRsZVBsYW5ldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHRleHR1cmUgKTtcclxuXHJcbiAgICAgICAgTGl0dGxlUGxhbmV0LnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgdGV4dHVyZSApO1xyXG5cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSBcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZUxpdHRsZVBsYW5ldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRleHR1cmU6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0RGlmZnVzZScgXS52YWx1ZSA9IHRleHR1cmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZUxpdHRsZVBsYW5ldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdERpZmZ1c2UgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndERpZmZ1c2UnIF07XHJcblxyXG4gICAgICAgIGlmICggdERpZmZ1c2UgJiYgdERpZmZ1c2UudmFsdWUgKSB7XHJcblxyXG4gICAgICAgICAgICB0RGlmZnVzZS52YWx1ZS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGl0dGxlUGxhbmV0LnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBJbWFnZUxpdHRsZVBsYW5ldCB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi4vbWVkaWEvTWVkaWEnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBDYW1lcmEgcGFub3JhbWFcclxuICogQGRlc2NyaXB0aW9uIFNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhU3RyZWFtQ29uc3RyYWludHN8TWVkaWFTdHJlYW1Db25zdHJhaW50c30gZm9yIGNvbnN0cmFpbnRzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSAtIGNhbWVyYSBjb25zdHJhaW50c1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIENhbWVyYVBhbm9yYW1hICggY29uc3RyYWludHMgKSB7XHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gNTAwMDtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgdmlzaWJsZTogZmFsc2UgfSk7XHJcblxyXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG4gICAgdGhpcy5tZWRpYSA9IG5ldyBNZWRpYSggY29uc3RyYWludHMgKTtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyJywgdGhpcy5zdGFydC5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5zdG9wLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtY29udGFpbmVyJywgdGhpcy5vblBhbm9sZW5zQ29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtc2NlbmUnLCB0aGlzLm9uUGFub2xlbnNTY2VuZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbn1cclxuXHJcbkNhbWVyYVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IENhbWVyYVBhbm9yYW1hLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gY29udGFpbmVyIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uUGFub2xlbnNDb250YWluZXI6IGZ1bmN0aW9uICggeyBjb250YWluZXIgfSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYS5zZXRDb250YWluZXIoIGNvbnRhaW5lciApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBzY2VuZSBldmVudFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25QYW5vbGVuc1NjZW5lOiBmdW5jdGlvbiAoIHsgc2NlbmUgfSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYS5zZXRTY2VuZSggc2NlbmUgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgY2FtZXJhIHN0cmVhbWluZ1xyXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYS5zdGFydCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIGNhbWVyYSBzdHJlYW1pbmdcclxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYS5zdG9wKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgT3JiaXQgQ29udHJvbHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlcm5hbCBPcmJpdENvbnRyb2xzXHJcbiAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0fSBvYmplY3QgXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXHJcbiAqL1xyXG5mdW5jdGlvbiBPcmJpdENvbnRyb2xzICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xyXG5cclxuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcclxuICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XHJcblxyXG4gICAgLy8gQVBJXHJcblxyXG4gICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgY29udHJvbCBvcmJpdHMgYXJvdW5kXHJcbiAgICAgKiBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXHJcbiAgICAgKi9cclxuICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICAvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXHJcbiAgICB0aGlzLmNlbnRlciA9IHRoaXMudGFyZ2V0O1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yXHJcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgICovXHJcbiAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xyXG4gICAgdGhpcy56b29tU3BlZWQgPSAxLjA7XHJcblxyXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXHJcbiAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcclxuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcclxuICAgIHRoaXMubWluWm9vbSA9IDA7XHJcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcclxuXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxyXG4gICAgdGhpcy5ub1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5yb3RhdGVTcGVlZCA9IC0wLjE1O1xyXG5cclxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcbiAgICB0aGlzLm5vUGFuID0gdHJ1ZTtcclxuICAgIHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXHJcblxyXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcclxuICAgIHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXHJcblxyXG4gICAgLypcclxuICAgICAqIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxyXG4gICAgICogUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcclxuICAgIHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcclxuXHJcbiAgICAvLyBNb21lbnR1bVxyXG4gIFx0dGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3IgPSAwLjkwO1xyXG4gIFx0dGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgPSAtMC4wMDU7XHJcbiAgXHR0aGlzLm1vbWVudHVtS2V5ZG93bkZhY3RvciA9IDIwO1xyXG5cclxuICBcdC8vIEZvdlxyXG4gIFx0dGhpcy5taW5Gb3YgPSAzMDtcclxuICBcdHRoaXMubWF4Rm92ID0gMTIwO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxyXG4gICAgICogSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcclxuICAgIHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcclxuXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xyXG4gICAgdGhpcy5ub0tleXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXHJcbiAgICB0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xyXG5cclxuICAgIC8vIE1vdXNlIGJ1dHRvbnNcclxuICAgIHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XHJcblxyXG4gICAgLypcclxuICAgICAqIC8vLy8vLy8vLy9cclxuICAgICAqIGludGVybmFsc1xyXG4gICAgICovXHJcblxyXG4gICAgdmFyIHNjb3BlID0gdGhpcztcclxuXHJcbiAgICB2YXIgRVBTID0gMTBlLTg7XHJcbiAgICB2YXIgTUVQUyA9IDEwZS01O1xyXG5cclxuICAgIHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4gICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4gICAgdmFyIHRoZXRhID0gMDtcclxuICAgIHZhciBwaGkgPSAwO1xyXG4gICAgdmFyIHBoaURlbHRhID0gMDtcclxuICAgIHZhciB0aGV0YURlbHRhID0gMDtcclxuICAgIHZhciBzY2FsZSA9IDE7XHJcbiAgICB2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgIHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcblxyXG4gICAgdmFyIG1vbWVudHVtTGVmdCA9IDAsIG1vbWVudHVtVXAgPSAwO1xyXG4gICAgdmFyIGV2ZW50UHJldmlvdXM7XHJcbiAgICB2YXIgbW9tZW50dW1PbiA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBrZXlVcCwga2V5Qm90dG9tLCBrZXlMZWZ0LCBrZXlSaWdodDtcclxuXHJcbiAgICB2YXIgU1RBVEUgPSB7IE5PTkU6IC0xLCBST1RBVEU6IDAsIERPTExZOiAxLCBQQU46IDIsIFRPVUNIX1JPVEFURTogMywgVE9VQ0hfRE9MTFk6IDQsIFRPVUNIX1BBTjogNSB9O1xyXG5cclxuICAgIHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgLy8gZm9yIHJlc2V0XHJcblxyXG4gICAgdGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcclxuICAgIHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcclxuICAgIHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xyXG5cclxuICAgIC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xyXG5cclxuICAgIHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xyXG4gICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcclxuXHJcbiAgICAvLyBldmVudHNcclxuXHJcbiAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XHJcbiAgICB2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xyXG4gICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xyXG5cclxuICAgIHRoaXMuc2V0TGFzdFF1YXRlcm5pb24gPSBmdW5jdGlvbiAoIHF1YXRlcm5pb24gKSB7XHJcbiAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSggcXVhdGVybmlvbiApO1xyXG4gICAgICAgIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkoIHF1YXRlcm5pb24gKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRMYXN0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RQb3NpdGlvbjtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoZXRhRGVsdGEgLT0gYW5nbGU7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwaGlEZWx0YSAtPSBhbmdsZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XHJcbiAgICB0aGlzLnBhbkxlZnQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xyXG5cclxuICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XHJcblxyXG4gICAgICAgIC8vIGdldCBYIGNvbHVtbiBvZiBtYXRyaXhcclxuICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XHJcbiAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XHJcblxyXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIHVwXHJcbiAgICB0aGlzLnBhblVwID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcclxuXHJcbiAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBnZXQgWSBjb2x1bW4gb2YgbWF0cml4XHJcbiAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDQgXSwgdGVbIDUgXSwgdGVbIDYgXSApO1xyXG4gICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcclxuXHJcbiAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogcGFzcyBpbiB4LHkgb2YgY2hhbmdlIGRlc2lyZWQgaW4gcGl4ZWwgc3BhY2UsXHJcbiAgICAgKiByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcclxuICAgICAqL1xyXG4gICAgdGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhWCwgZGVsdGFZICkge1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uLmNsb25lKCkuc3ViKCBzY29wZS50YXJnZXQgKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXHJcbiAgICAgICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcclxuICAgICAgICAgICAgc2NvcGUucGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIG9ydGhvZ3JhcGhpY1xyXG4gICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCBkZWx0YVggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xyXG4gICAgICAgICAgICBzY29wZS5wYW5VcCggZGVsdGFZICogKHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tKSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmVcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb21lbnR1bSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcclxuICAgICAgICBpZiAoICFtb21lbnR1bU9uICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoIE1hdGguYWJzKCBtb21lbnR1bUxlZnQgKSA8IE1FUFMgJiYgTWF0aC5hYnMoIG1vbWVudHVtVXAgKSA8IE1FUFMgKSB7IFxyXG5cclxuICAgICAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlOyBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9tZW50dW1VcCAgICo9IHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yO1xyXG4gICAgICAgIG1vbWVudHVtTGVmdCAqPSB0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvcjtcclxuXHJcbiAgICAgICAgdGhldGFEZWx0YSAtPSB0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqIG1vbWVudHVtTGVmdDtcclxuICAgICAgICBwaGlEZWx0YSAgIC09IHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yICogbW9tZW50dW1VcDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlIC89IGRvbGx5U2NhbGU7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHRoaXMubWluWm9vbSwgTWF0aC5taW4oIHRoaXMubWF4Wm9vbSwgdGhpcy5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9sbHlPdXQgPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZSAqPSBkb2xseVNjYWxlO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCB0aGlzLm1pblpvb20sIE1hdGgubWluKCB0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICggaWdub3JlVXBkYXRlICkge1xyXG5cclxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgb2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCB0aGlzLnRhcmdldCApO1xyXG5cclxuICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcclxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XHJcblxyXG4gICAgICAgIC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcclxuXHJcbiAgICAgICAgdGhldGEgPSBNYXRoLmF0YW4yKCBvZmZzZXQueCwgb2Zmc2V0LnogKTtcclxuXHJcbiAgICAgICAgLy8gYW5nbGUgZnJvbSB5LWF4aXNcclxuXHJcbiAgICAgICAgcGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubW9tZW50dW0oKTtcclxuXHJcbiAgICAgICAgdGhldGEgKz0gdGhldGFEZWx0YTtcclxuICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XHJcblxyXG4gICAgICAgIC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuICAgICAgICB0aGV0YSA9IE1hdGgubWF4KCB0aGlzLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4QXppbXV0aEFuZ2xlLCB0aGV0YSApICk7XHJcblxyXG4gICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcbiAgICAgICAgcGhpID0gTWF0aC5tYXgoIHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4UG9sYXJBbmdsZSwgcGhpICkgKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xyXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KCBFUFMsIE1hdGgubWluKCBNYXRoLlBJIC0gRVBTLCBwaGkgKSApO1xyXG5cclxuICAgICAgICB2YXIgcmFkaXVzID0gb2Zmc2V0Lmxlbmd0aCgpICogc2NhbGU7XHJcblxyXG4gICAgICAgIC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcbiAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cclxuICAgICAgICB0aGlzLnRhcmdldC5hZGQoIHBhbiApO1xyXG5cclxuICAgICAgICBvZmZzZXQueCA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguc2luKCB0aGV0YSApO1xyXG4gICAgICAgIG9mZnNldC55ID0gcmFkaXVzICogTWF0aC5jb3MoIHBoaSApO1xyXG4gICAgICAgIG9mZnNldC56ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5jb3MoIHRoZXRhICk7XHJcblxyXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxyXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uLmNvcHkoIHRoaXMudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3QubG9va0F0KCB0aGlzLnRhcmdldCApO1xyXG5cclxuICAgICAgICB0aGV0YURlbHRhID0gMDtcclxuICAgICAgICBwaGlEZWx0YSA9IDA7XHJcbiAgICAgICAgc2NhbGUgPSAxO1xyXG4gICAgICAgIHBhbi5zZXQoIDAsIDAsIDAgKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiB1cGRhdGUgY29uZGl0aW9uIGlzOlxyXG4gICAgICAgICAqIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xyXG4gICAgICAgICAqIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICggbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCB0aGlzLm9iamVjdC5wb3NpdGlvbiApID4gRVBTXHJcblx0XHQgICAgfHwgOCAqICgxIC0gbGFzdFF1YXRlcm5pb24uZG90KHRoaXMub2JqZWN0LnF1YXRlcm5pb24pKSA+IEVQUyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggaWdub3JlVXBkYXRlICE9PSB0cnVlICkgeyB0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7IH1cclxuXHJcbiAgICAgICAgICAgIGxhc3RQb3NpdGlvbi5jb3B5KCB0aGlzLm9iamVjdC5wb3NpdGlvbiApO1xyXG4gICAgICAgICAgICBsYXN0UXVhdGVybmlvbi5jb3B5ICh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0MCApO1xyXG4gICAgICAgIHRoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHRoaXMucG9zaXRpb24wICk7XHJcbiAgICAgICAgdGhpcy5vYmplY3Quem9vbSA9IHRoaXMuem9vbTA7XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBwaGk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhldGE7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTtcclxuXHJcbiAgIFx0XHRtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ST1RBVEU7XHJcblxyXG4gICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLkRPTExZO1xyXG5cclxuICAgICAgICAgICAgZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5QQU47XHJcblxyXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xyXG5cclxuICAgICAgICAgICAgLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxyXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxyXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XHJcblxyXG4gICAgICAgICAgICBpZiggZXZlbnRQcmV2aW91cyApe1xyXG4gICAgICAgICAgICAgICAgbW9tZW50dW1MZWZ0ID0gZXZlbnQuY2xpZW50WCAtIGV2ZW50UHJldmlvdXMuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC5jbGllbnRZIC0gZXZlbnRQcmV2aW91cy5jbGllbnRZO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0gZXZlbnQ7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcbiAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG4gICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcclxuXHJcbiAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSBzY29wZS51cGRhdGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcclxuXHJcbiAgICAgICAgbW9tZW50dW1PbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcclxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xyXG4gICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgfHwgc3RhdGUgIT09IFNUQVRFLk5PTkUgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciBkZWx0YSA9IDA7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcclxuXHJcbiAgICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcclxuXHJcbiAgICAgICAgICAgIGRlbHRhID0gLSBldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseU91dCgpO1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXHJcbiAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgKyAxXHJcbiAgICAgICAgICAgICAgICA6IHNjb3BlLm1heEZvdjtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2NvcGUuZG9sbHlJbigpO1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXHJcbiAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgLSAxXHJcbiAgICAgICAgICAgICAgICA6IHNjb3BlLm1pbkZvdjtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xyXG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcclxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbktleVVwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcclxuICAgICAgICAgICAga2V5VXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XHJcbiAgICAgICAgICAgIGtleUJvdHRvbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkxFRlQ6XHJcbiAgICAgICAgICAgIGtleUxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcclxuICAgICAgICAgICAga2V5UmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub0tleXMgPT09IHRydWUgfHwgc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcclxuICAgICAgICAgICAga2V5VXAgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcclxuICAgICAgICAgICAga2V5Qm90dG9tID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxyXG4gICAgICAgICAgICBrZXlMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcclxuICAgICAgICAgICAga2V5UmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoa2V5VXAgfHwga2V5Qm90dG9tIHx8IGtleUxlZnQgfHwga2V5UmlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtleVVwKSBtb21lbnR1bVVwID0gLSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcclxuICAgICAgICAgICAgaWYgKGtleUJvdHRvbSkgbW9tZW50dW1VcCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICBpZiAoa2V5TGVmdCkgbW9tZW50dW1MZWZ0ID0gLSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcclxuICAgICAgICAgICAgaWYgKGtleVJpZ2h0KSBtb21lbnR1bUxlZnQgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaHN0YXJ0KCBldmVudCApIHtcclxuXHJcbiAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtb21lbnR1bUxlZnQgPSBtb21lbnR1bVVwID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgIGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XHJcblxyXG4gICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XHJcbiAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcclxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xyXG5cclxuICAgICAgICAgICAgZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XHJcblxyXG4gICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNobW92ZSggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgY2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcclxuICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xyXG5cclxuICAgICAgICAgICAgLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxyXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcblxyXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBldmVudFByZXZpb3VzICl7XHJcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudFByZXZpb3VzLnBhZ2VYO1xyXG4gICAgICAgICAgICAgICAgbW9tZW50dW1VcCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50UHJldmlvdXMucGFnZVk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50UHJldmlvdXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlWDogZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgcGFnZVk6IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XHJcbiAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcclxuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xyXG5cclxuICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xyXG4gICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcclxuICAgICAgICAgICAgICAgICAgICA6IHNjb3BlLm1heEZvdjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcbiAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xyXG5cclxuICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xyXG5cclxuICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXZlbnRQcmV2aW91cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcclxuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duICk7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Nb3VzZVdoZWVsICk7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCApO1xyXG5cclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0ICk7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kICk7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUgKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIG9uS2V5VXAgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24gKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCBmYWxzZSApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uTW91c2VXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7IC8vIGZpcmVmb3hcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcsIG9uS2V5VXAsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuXHJcbiAgICAvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG59O1xyXG5cclxuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogT3JiaXRDb250cm9sc1xyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgT3JiaXRDb250cm9scyB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIERldmljZSBPcmllbnRhdGlvbiBDb250cm9sXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZXJuYWwgRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xyXG4gKiBAcGFyYW0ge1RIUkVFLkNhbWVyYX0gY2FtZXJhIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IFxyXG4gKi9cclxuZnVuY3Rpb24gRGV2aWNlT3JpZW50YXRpb25Db250cm9scyAoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcclxuXHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xyXG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xyXG5cclxuICAgIHZhciByb3RZID0gMDtcclxuICAgIHZhciByb3RYID0gMDtcclxuICAgIHZhciB0ZW1wWCA9IDA7XHJcbiAgICB2YXIgdGVtcFkgPSAwO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgdGhpcy5jYW1lcmEucm90YXRpb24ucmVvcmRlciggJ1lYWicgKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XHJcblxyXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmRldmljZU9yaWVudGF0aW9uID0ge307XHJcbiAgICB0aGlzLnNjcmVlbk9yaWVudGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLmFscGhhID0gMDtcclxuICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IDA7XHJcblxyXG5cclxuICAgIHZhciBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHNjb3BlLmRldmljZU9yaWVudGF0aW9uID0gZXZlbnQ7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID0gd2luZG93Lm9yaWVudGF0aW9uIHx8IDA7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25Ub3VjaFN0YXJ0RXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGVtcFggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVg7XHJcbiAgICAgICAgdGVtcFkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25Ub3VjaE1vdmVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICByb3RZICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gdGVtcFggKSAvIDQgKTtcclxuICAgICAgICByb3RYICs9IFRIUkVFLk1hdGguZGVnVG9SYWQoICggdGVtcFkgLSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKSAvIDQgKTtcclxuXHJcbiAgICAgICAgc2NvcGUudXBkYXRlQWxwaGFPZmZzZXRBbmdsZSggcm90WSApO1xyXG5cclxuICAgICAgICB0ZW1wWCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWDtcclxuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRoZSBhbmdsZXMgYWxwaGEsIGJldGEgYW5kIGdhbW1hIGZvcm0gYSBzZXQgb2YgaW50cmluc2ljIFRhaXQtQnJ5YW4gYW5nbGVzIG9mIHR5cGUgWi1YJy1ZJydcclxuXHJcbiAgICB2YXIgc2V0Q2FtZXJhUXVhdGVybmlvbiA9IGZ1bmN0aW9uKCBxdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApIHtcclxuXHJcbiAgICAgICAgdmFyIHplZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAxICk7XHJcblxyXG4gICAgICAgIHZhciBldWxlciA9IG5ldyBUSFJFRS5FdWxlcigpO1xyXG5cclxuICAgICAgICB2YXIgcTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICAgICAgICB2YXIgcTEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbiggLSBNYXRoLnNxcnQoIDAuNSApLCAwLCAwLCBNYXRoLnNxcnQoIDAuNSApICk7IC8vIC0gUEkvMiBhcm91bmQgdGhlIHgtYXhpc1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yRmluZ2VyWTtcclxuICAgICAgICB2YXIgZmluZ2VyUVkgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHZhciBmaW5nZXJRWCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCAtcm90WCApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAxODAgKSB7XHJcblxyXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcclxuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgcm90WCApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSA5MCApIHtcclxuXHJcbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xyXG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCByb3RYICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IC0gOTApIHtcclxuXHJcbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xyXG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCAtcm90WCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWSApO1xyXG4gICAgICAgIHExLm11bHRpcGx5KCBmaW5nZXJRWCApO1xyXG5cclxuICAgICAgICBldWxlci5zZXQoIGJldGEsIGFscGhhLCAtIGdhbW1hLCAnWVhaJyApOyAvLyAnWlhZJyBmb3IgdGhlIGRldmljZSwgYnV0ICdZWFonIGZvciB1c1xyXG5cclxuICAgICAgICBxdWF0ZXJuaW9uLnNldEZyb21FdWxlciggZXVsZXIgKTsgLy8gb3JpZW50IHRoZSBkZXZpY2VcclxuXHJcbiAgICAgICAgcXVhdGVybmlvbi5tdWx0aXBseSggcTEgKTsgLy8gY2FtZXJhIGxvb2tzIG91dCB0aGUgYmFjayBvZiB0aGUgZGV2aWNlLCBub3QgdGhlIHRvcFxyXG5cclxuICAgICAgICBxdWF0ZXJuaW9uLm11bHRpcGx5KCBxMC5zZXRGcm9tQXhpc0FuZ2xlKCB6ZWUsIC0gb3JpZW50ICkgKTsgLy8gYWRqdXN0IGZvciBzY3JlZW4gb3JpZW50YXRpb25cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQoKTsgLy8gcnVuIG9uY2Ugb24gbG9hZFxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50LCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuXHJcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydEV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZUV2ZW50LCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuXHJcbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgb25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcblxyXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcclxuICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICBzY29wZS5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCBpZ25vcmVVcGRhdGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBhbHBoYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmFscGhhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgKSArIHNjb3BlLmFscGhhT2Zmc2V0QW5nbGUgOiAwOyAvLyBaXHJcbiAgICAgICAgdmFyIGJldGEgPSBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5iZXRhID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSApIDogMDsgLy8gWCdcclxuICAgICAgICB2YXIgZ2FtbWEgPSBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5nYW1tYSA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmdhbW1hICkgOiAwOyAvLyBZJydcclxuICAgICAgICB2YXIgb3JpZW50ID0gc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiApIDogMDsgLy8gT1xyXG5cclxuICAgICAgICBzZXRDYW1lcmFRdWF0ZXJuaW9uKCBzY29wZS5jYW1lcmEucXVhdGVybmlvbiwgYWxwaGEsIGJldGEsIGdhbW1hLCBvcmllbnQgKTtcclxuICAgICAgICBzY29wZS5hbHBoYSA9IGFscGhhO1xyXG5cclxuICAgICAgICBpZiAoIGlnbm9yZVVwZGF0ZSAhPT0gdHJ1ZSApIHsgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTsgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGVBbHBoYU9mZnNldEFuZ2xlID0gZnVuY3Rpb24oIGFuZ2xlICkge1xyXG5cclxuICAgICAgICB0aGlzLmFscGhhT2Zmc2V0QW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb25uZWN0KCk7XHJcblxyXG59O1xyXG5cclxuRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH07IiwiXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBDYXJkYm9hcmQgRWZmZWN0IENvbXBvc2VyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZXJuYWwgQ2FyZGJvYXJkRWZmZWN0XHJcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgXHJcbiAqL1xyXG5mdW5jdGlvbiBDYXJkYm9hcmRFZmZlY3QgKCByZW5kZXJlciApIHtcclxuXHJcbiAgICB2YXIgX2NhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0gMSwgMSwgMSwgLSAxLCAwLCAxICk7XHJcblxyXG4gICAgdmFyIF9zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHZhciBfc3RlcmVvID0gbmV3IFRIUkVFLlN0ZXJlb0NhbWVyYSgpO1xyXG4gICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XHJcblxyXG4gICAgdmFyIF9wYXJhbXMgPSB7IG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdCB9O1xyXG5cclxuICAgIHZhciBfcmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCA1MTIsIDUxMiwgX3BhcmFtcyApO1xyXG4gICAgX3JlbmRlclRhcmdldC5zY2lzc29yVGVzdCA9IHRydWU7XHJcbiAgICBfcmVuZGVyVGFyZ2V0LnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG4gICAgLypcclxuICAgICAqIERpc3RvcnRpb24gTWVzaCBwb3J0ZWQgZnJvbTpcclxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1ib2lsZXJwbGF0ZS9ibG9iL21hc3Rlci9zcmMvZGlzdG9ydGlvbi9iYXJyZWwtZGlzdG9ydGlvbi1mcmFnbWVudC5qc1xyXG4gICAgICovXHJcblxyXG4gICAgdmFyIGRpc3RvcnRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMiggMC40NDEsIDAuMTU2ICk7XHJcblxyXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDEsIDEsIDEwLCAyMCApLnJlbW92ZUF0dHJpYnV0ZSggJ25vcm1hbCcgKS50b05vbkluZGV4ZWQoKTtcclxuXHJcbiAgICB2YXIgcG9zaXRpb25zID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgIHZhciB1dnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmFycmF5O1xyXG5cclxuICAgIC8vIGR1cGxpY2F0ZVxyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudCAqPSAyO1xyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5jb3VudCAqPSAyO1xyXG5cclxuICAgIHZhciBwb3NpdGlvbnMyID0gbmV3IEZsb2F0MzJBcnJheSggcG9zaXRpb25zLmxlbmd0aCAqIDIgKTtcclxuICAgIHBvc2l0aW9uczIuc2V0KCBwb3NpdGlvbnMgKTtcclxuICAgIHBvc2l0aW9uczIuc2V0KCBwb3NpdGlvbnMsIHBvc2l0aW9ucy5sZW5ndGggKTtcclxuXHJcbiAgICB2YXIgdXZzMiA9IG5ldyBGbG9hdDMyQXJyYXkoIHV2cy5sZW5ndGggKiAyICk7XHJcbiAgICB1dnMyLnNldCggdXZzICk7XHJcbiAgICB1dnMyLnNldCggdXZzLCB1dnMubGVuZ3RoICk7XHJcblxyXG4gICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgbGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aCAvIDM7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwLCBsID0gcG9zaXRpb25zMi5sZW5ndGggLyAzOyBpIDwgbDsgaSArKyApIHtcclxuXHJcbiAgICAgICAgdmVjdG9yLnggPSBwb3NpdGlvbnMyWyBpICogMyArIDAgXTtcclxuICAgICAgICB2ZWN0b3IueSA9IHBvc2l0aW9uczJbIGkgKiAzICsgMSBdO1xyXG5cclxuICAgICAgICB2YXIgZG90ID0gdmVjdG9yLmRvdCggdmVjdG9yICk7XHJcbiAgICAgICAgdmFyIHNjYWxhciA9IDEuNSArICggZGlzdG9ydGlvbi54ICsgZGlzdG9ydGlvbi55ICogZG90ICkgKiBkb3Q7XHJcblxyXG4gICAgICAgIHZhciBvZmZzZXQgPSBpIDwgbGVuZ3RoID8gMCA6IDE7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uczJbIGkgKiAzICsgMCBdID0gKCB2ZWN0b3IueCAvIHNjYWxhciApICogMS41IC0gMC41ICsgb2Zmc2V0O1xyXG4gICAgICAgIHBvc2l0aW9uczJbIGkgKiAzICsgMSBdID0gKCB2ZWN0b3IueSAvIHNjYWxhciApICogMy4wO1xyXG5cclxuICAgICAgICB1dnMyWyBpICogMiBdID0gKCB1dnMyWyBpICogMiBdICsgb2Zmc2V0ICkgKiAwLjU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgPSBwb3NpdGlvbnMyO1xyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy51di5hcnJheSA9IHV2czI7XHJcblxyXG4gICAgLy9cclxuXHJcbiAgICB2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgbWFwOiBfcmVuZGVyVGFyZ2V0LnRleHR1cmUgfSApO1xyXG4gICAgdmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbiAgICBfc2NlbmUuYWRkKCBtZXNoICk7XHJcblxyXG4gICAgLy9cclxuXHJcbiAgICB0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcclxuXHJcbiAgICAgICAgdmFyIHBpeGVsUmF0aW8gPSByZW5kZXJlci5nZXRQaXhlbFJhdGlvKCk7XHJcblxyXG4gICAgICAgIF9yZW5kZXJUYXJnZXQuc2V0U2l6ZSggd2lkdGggKiBwaXhlbFJhdGlvLCBoZWlnaHQgKiBwaXhlbFJhdGlvICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcclxuXHJcbiAgICAgICAgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBjYW1lcmEucGFyZW50ID09PSBudWxsICkgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XHJcblxyXG4gICAgICAgIF9zdGVyZW8udXBkYXRlKCBjYW1lcmEgKTtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gX3JlbmRlclRhcmdldC53aWR0aCAvIDI7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IF9yZW5kZXJUYXJnZXQuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHJlbmRlcmVyLmF1dG9DbGVhciApIHJlbmRlcmVyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIF9yZW5kZXJUYXJnZXQuc2Npc3Nvci5zZXQoIDAsIDAsIHdpZHRoLCBoZWlnaHQgKTtcclxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnZpZXdwb3J0LnNldCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggX3JlbmRlclRhcmdldCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhTCApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XHJcblxyXG4gICAgICAgIF9yZW5kZXJUYXJnZXQuc2Npc3Nvci5zZXQoIHdpZHRoLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgX3JlbmRlclRhcmdldC52aWV3cG9ydC5zZXQoIHdpZHRoLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBfcmVuZGVyVGFyZ2V0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFSICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBudWxsICk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBfc2NlbmUsIF9jYW1lcmEgKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgU3RlcmVvIEVmZmVjdCBDb21wb3NlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVybmFsIFN0ZXJlb0VmZmVjdFxyXG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIFxyXG4gKi9cclxuY29uc3QgU3RlcmVvRWZmZWN0ID0gZnVuY3Rpb24gKCByZW5kZXJlciApIHtcclxuXHJcbiAgICB2YXIgX3N0ZXJlbyA9IG5ldyBUSFJFRS5TdGVyZW9DYW1lcmEoKTtcclxuICAgIF9zdGVyZW8uYXNwZWN0ID0gMC41O1xyXG4gICAgdmFyIHNpemUgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuICAgIHRoaXMuc2V0RXllU2VwYXJhdGlvbiA9IGZ1bmN0aW9uICggZXllU2VwICkge1xyXG5cclxuICAgICAgICBfc3RlcmVvLmV5ZVNlcCA9IGV5ZVNlcDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XHJcblxyXG4gICAgICAgIGlmICggY2FtZXJhLnBhcmVudCA9PT0gbnVsbCApIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xyXG5cclxuICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmdldFNpemUoIHNpemUgKTtcclxuXHJcbiAgICAgICAgaWYgKCByZW5kZXJlci5hdXRvQ2xlYXIgKSByZW5kZXJlci5jbGVhcigpO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3JUZXN0KCB0cnVlICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFZpZXdwb3J0KCAwLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3Nvciggc2l6ZS53aWR0aCAvIDIsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFZpZXdwb3J0KCBzaXplLndpZHRoIC8gMiwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFSICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3JUZXN0KCBmYWxzZSApO1xyXG5cclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RlcmVvRWZmZWN0IH07IiwiaW1wb3J0IHsgTU9ERVMsIENPTlRST0xTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uL2xpYi9jb250cm9scy9PcmJpdENvbnRyb2xzJztcclxuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9IGZyb20gJy4uL2xpYi9jb250cm9scy9EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzJztcclxuaW1wb3J0IHsgQ2FyZGJvYXJkRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvQ2FyZGJvYXJkRWZmZWN0JztcclxuaW1wb3J0IHsgU3RlcmVvRWZmZWN0IH0gZnJvbSAnLi4vbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0JztcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0L1dpZGdldCc7XHJcbmltcG9ydCB7IFJldGljbGUgfSBmcm9tICcuLi9pbnRlcmZhY2UvUmV0aWNsZSc7XHJcbmltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xyXG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xyXG5pbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgVmlkZW9QYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBDYW1lcmFQYW5vcmFtYSB9IGZyb20gJy4uL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgVmlld2VyIGNvbnRhaW5zIHByZS1kZWZpbmVkIHNjZW5lLCBjYW1lcmEgYW5kIHJlbmRlcmVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gVXNlIGN1c3RvbSBvciBkZWZhdWx0IGNvbmZpZyBvcHRpb25zXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLmNvbnRhaW5lcl0gLSBBIEhUTUxFbGVtZW50IHRvIGhvc3QgdGhlIGNhbnZhc1xyXG4gKiBAcGFyYW0ge1RIUkVFLlNjZW5lfSBbb3B0aW9ucy5zY2VuZT1USFJFRS5TY2VuZV0gLSBBIFRIUkVFLlNjZW5lIHdoaWNoIGNvbnRhaW5zIHBhbm9yYW1hIGFuZCAzRCBvYmplY3RzXHJcbiAqIEBwYXJhbSB7VEhSRUUuQ2FtZXJhfSBbb3B0aW9ucy5jYW1lcmE9VEhSRUUuUGVyc3BlY3RpdmVDYW1lcmFdIC0gQSBUSFJFRS5DYW1lcmEgdG8gdmlldyB0aGUgc2NlbmVcclxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSBbb3B0aW9ucy5yZW5kZXJlcj1USFJFRS5XZWJHTFJlbmRlcmVyXSAtIEEgVEhSRUUuV2ViR0xSZW5kZXJlciB0byByZW5kZXIgY2FudmFzXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY29udHJvbEJhcj10cnVlXSAtIFNob3cvaGlkZSBjb250cm9sIGJhciBvbiB0aGUgYm90dG9tIG9mIHRoZSBjb250YWluZXJcclxuICogQHBhcmFtIHthcnJheX0gICBbb3B0aW9ucy5jb250cm9sQnV0dG9ucz1bXV0gLSBCdXR0b24gbmFtZXMgdG8gbW91bnQgb24gY29udHJvbEJhciBpZiBjb250cm9sQmFyIGV4aXN0cywgRGVmYXVsdHMgdG8gWydmdWxsc2NyZWVuJywgJ3NldHRpbmcnLCAndmlkZW8nXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhcj1mYWxzZV0gLSBBdXRvIGhpZGUgY29udHJvbCBiYXIgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90PXRydWVdIC0gQXV0byBoaWRlIGluZm9zcG90cyB3aGVuIGNsaWNrIG9uIG5vbi1hY3RpdmUgYXJlYVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmhvcml6b250YWxWaWV3PWZhbHNlXSAtIEFsbG93IG9ubHkgaG9yaXpvbnRhbCBjYW1lcmEgY29udHJvbFxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNsaWNrVG9sZXJhbmNlPTEwXSAtIERpc3RhbmNlIHRvbGVyYW5jZSB0byB0aWdnZXIgY2xpY2sgLyB0YXAgZXZlbnRcclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5jYW1lcmFGb3Y9NjBdIC0gQ2FtZXJhIGZpZWxkIG9mIHZpZXcgdmFsdWVcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmc9ZmFsc2VdIC0gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbmFibGVSZXRpY2xlPWZhbHNlXSAtIEVuYWJsZSByZXRpY2xlIGZvciBtb3VzZWxlc3MgaW50ZXJhY3Rpb24gb3RoZXIgdGhhbiBWUiBtb2RlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuZHdlbGxUaW1lPTE1MDBdIC0gRHdlbGwgdGltZSBmb3IgcmV0aWNsZSBzZWxlY3Rpb24gaW4gbXNcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0IGEgY2xpY2thYmxlIHRhcmdldCBhZnRlciBkd2VsbFRpbWVcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52aWV3SW5kaWNhdG9yPWZhbHNlXSAtIEFkZHMgYW4gYW5nbGUgdmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdCBjb3JuZXJcclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5pbmRpY2F0b3JTaXplPTMwXSAtIFNpemUgb2YgVmlldyBJbmRpY2F0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9ICBbb3B0aW9ucy5vdXRwdXQ9J25vbmUnXSAtIFdoZXRoZXIgYW5kIHdoZXJlIHRvIG91dHB1dCByYXljYXN0IHBvc2l0aW9uLiBDb3VsZCBiZSAnZXZlbnQnLCAnY29uc29sZScgb3IgJ292ZXJsYXknLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9Sb3RhdGU9ZmFsc2VdIC0gQXV0byByb3RhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQ9Mi4wXSAtIEF1dG8gcm90YXRlIHNwZWVkIGFzIGluIGRlZ3JlZSBwZXIgc2Vjb25kLiBQb3NpdGl2ZSBpcyBjb3VudGVyLWNsb2Nrd2lzZSBhbmQgbmVnYXRpdmUgaXMgY2xvY2t3aXNlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb249NTAwMF0gLSBEdXJhdGlvbiBiZWZvcmUgYXV0byByb3RhdGF0aW9uIHdoZW4gbm8gdXNlciBpbnRlcmFjdGl2aXR5IGluIG1zXHJcbiAqL1xyXG5mdW5jdGlvbiBWaWV3ZXIgKCBvcHRpb25zICkge1xyXG5cclxuICAgIGxldCBjb250YWluZXI7XHJcblxyXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICBvcHRpb25zLmNvbnRyb2xCYXIgPSBvcHRpb25zLmNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY29udHJvbEJhciA6IHRydWU7XHJcbiAgICBvcHRpb25zLmNvbnRyb2xCdXR0b25zID0gb3B0aW9ucy5jb250cm9sQnV0dG9ucyB8fCBbICdmdWxsc2NyZWVuJywgJ3NldHRpbmcnLCAndmlkZW8nIF07XHJcbiAgICBvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhciA9IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhciA6IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ID0gb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgOiB0cnVlO1xyXG4gICAgb3B0aW9ucy5ob3Jpem9udGFsVmlldyA9IG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgOiBmYWxzZTtcclxuICAgIG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgPSBvcHRpb25zLmNsaWNrVG9sZXJhbmNlIHx8IDEwO1xyXG4gICAgb3B0aW9ucy5jYW1lcmFGb3YgPSBvcHRpb25zLmNhbWVyYUZvdiB8fCA2MDtcclxuICAgIG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nID0gb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmcgfHwgZmFsc2U7XHJcbiAgICBvcHRpb25zLmVuYWJsZVJldGljbGUgPSBvcHRpb25zLmVuYWJsZVJldGljbGUgfHwgZmFsc2U7XHJcbiAgICBvcHRpb25zLmR3ZWxsVGltZSA9IG9wdGlvbnMuZHdlbGxUaW1lIHx8IDE1MDA7XHJcbiAgICBvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ID0gb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA6IHRydWU7XHJcbiAgICBvcHRpb25zLnZpZXdJbmRpY2F0b3IgPSBvcHRpb25zLnZpZXdJbmRpY2F0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMudmlld0luZGljYXRvciA6IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5pbmRpY2F0b3JTaXplID0gb3B0aW9ucy5pbmRpY2F0b3JTaXplIHx8IDMwO1xyXG4gICAgb3B0aW9ucy5vdXRwdXQgPSBvcHRpb25zLm91dHB1dCA/IG9wdGlvbnMub3V0cHV0IDogJ25vbmUnO1xyXG4gICAgb3B0aW9ucy5hdXRvUm90YXRlID0gb3B0aW9ucy5hdXRvUm90YXRlIHx8IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQgPSBvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZCB8fCAyLjA7XHJcbiAgICBvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gPSBvcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gfHwgNTAwMDtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDU1MgSWNvblxyXG4gICAgICogY29uc3Qgc3R5bGVMb2FkZXIgPSBuZXcgU3R5bGVMb2FkZXIoKTtcclxuICAgICAqIHN0eWxlTG9hZGVyLmluamVjdCggJ2ljb25vJyApO1xyXG4gICAgICovXHJcblxyXG4gICAgLy8gQ29udGFpbmVyXHJcbiAgICBpZiAoIG9wdGlvbnMuY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcclxuICAgICAgICBjb250YWluZXIuX3dpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnRhaW5lci5faGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtY29udGFpbmVyJyApO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIGNvbnRhaW5lci5fd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBjb250YWluZXIuX2hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBvcHRpb25zLmNhbWVyYSB8fCBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIHRoaXMub3B0aW9ucy5jYW1lcmFGb3YsIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0LCAxLCAxMDAwMCApO1xyXG4gICAgdGhpcy5zY2VuZSA9IG9wdGlvbnMuc2NlbmUgfHwgbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggeyBhbHBoYTogdHJ1ZSwgYW50aWFsaWFzOiBmYWxzZSB9ICk7XHJcbiAgICB0aGlzLnNjZW5lUmV0aWNsZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHRoaXMudmlld0luZGljYXRvclNpemUgPSB0aGlzLm9wdGlvbnMuaW5kaWNhdG9yU2l6ZTtcclxuXHJcbiAgICB0aGlzLnJldGljbGUgPSB7fTtcclxuICAgIHRoaXMudGVtcEVuYWJsZVJldGljbGUgPSB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZTtcclxuXHJcbiAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XHJcblxyXG4gICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XHJcbiAgICB0aGlzLndpZGdldCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5ob3Zlck9iamVjdCA9IG51bGw7XHJcbiAgICB0aGlzLmluZm9zcG90ID0gbnVsbDtcclxuICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSBudWxsO1xyXG4gICAgdGhpcy5wcmVzc09iamVjdCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5yYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbiAgICB0aGlzLnJheWNhc3RlclBvaW50ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHRoaXMudXNlck1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzID0gW107XHJcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jYW1lcmFGcnVzdHVtID0gbmV3IFRIUkVFLkZydXN0dW0oKTtcclxuICAgIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xyXG5cclxuICAgIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5vdXRwdXREaXZFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnRvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaDtcclxuXHJcbiAgICAvLyBIYW5kbGVyIHJlZmVyZW5jZXNcclxuICAgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9LRVlfRE9XTiA9IHRoaXMub25LZXlEb3duLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9LRVlfVVAgPSB0aGlzLm9uS2V5VXAuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX1RBUCA9IHRoaXMub25UYXAuYmluZCggdGhpcywge1xyXG4gICAgICAgIGNsaWVudFg6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMixcclxuICAgICAgICBjbGllbnRZOiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICB9ICk7XHJcblxyXG4gICAgLy8gRmxhZyBmb3IgaW5mb3Nwb3Qgb3V0cHV0XHJcbiAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFuaW1hdGlvbnNcclxuICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuXHJcbiAgICAvLyBSZW5kZXJlclxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4MDAwMDAwLCAwICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFwcGVuZCBSZW5kZXJlciBFbGVtZW50IHRvIGNvbnRhaW5lclxyXG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1jYW52YXMnICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgLy8gQ2FtZXJhIENvbnRyb2xzXHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMuaWQgPSAnb3JiaXQnO1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTtcclxuICAgIHRoaXMuT3JiaXRDb250cm9scy5ub1BhbiA9IHRydWU7XHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IHRoaXMub3B0aW9ucy5hdXRvUm90YXRlO1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IHRoaXMub3B0aW9ucy5hdXRvUm90YXRlU3BlZWQ7XHJcblxyXG4gICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzID0gbmV3IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMoIHRoaXMuY2FtZXJhLCB0aGlzLmNvbnRhaW5lciApO1xyXG4gICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmlkID0gJ2RldmljZS1vcmllbnRhdGlvbic7XHJcbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDE7XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgY2hhbmdlIGV2ZW50IGlmIHBhc3NpdmVSZW5lcmluZ1xyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMucGFzc2l2ZVJlbmRlcmluZyApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKCAncGFzc2l2ZVJlbmRlcmluZyBpcyBub3cgZGVwcmVjYXRlZCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udHJvbHNcclxuICAgIHRoaXMuY29udHJvbHMgPSBbIHRoaXMuT3JiaXRDb250cm9scywgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIF07XHJcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLk9yYml0Q29udHJvbHM7XHJcblxyXG4gICAgLy8gQ2FyZGJvYXJkIGVmZmVjdFxyXG4gICAgdGhpcy5DYXJkYm9hcmRFZmZlY3QgPSBuZXcgQ2FyZGJvYXJkRWZmZWN0KCB0aGlzLnJlbmRlcmVyICk7XHJcbiAgICB0aGlzLkNhcmRib2FyZEVmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XHJcblxyXG4gICAgLy8gU3RlcmVvIGVmZmVjdFxyXG4gICAgdGhpcy5TdGVyZW9FZmZlY3QgPSBuZXcgU3RlcmVvRWZmZWN0KCB0aGlzLnJlbmRlcmVyICk7XHJcbiAgICB0aGlzLlN0ZXJlb0VmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XHJcblxyXG4gICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcclxuXHJcbiAgICAvLyBBZGQgZGVmYXVsdCBoaWRkZW4gcmV0aWNsZVxyXG4gICAgdGhpcy5hZGRSZXRpY2xlKCk7XHJcblxyXG4gICAgLy8gTG9jayBob3Jpem9udGFsIHZpZXdcclxuICAgIGlmICggdGhpcy5vcHRpb25zLmhvcml6b250YWxWaWV3ICkge1xyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5taW5Qb2xhckFuZ2xlID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgQ29udHJvbCBVSVxyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuY29udHJvbEJhciAhPT0gZmFsc2UgKSB7XHJcbiAgICAgICAgdGhpcy5hZGREZWZhdWx0Q29udHJvbEJhciggdGhpcy5vcHRpb25zLmNvbnRyb2xCdXR0b25zICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIFZpZXcgSW5kaWNhdG9yXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy52aWV3SW5kaWNhdG9yICkge1xyXG4gICAgICAgIHRoaXMuYWRkVmlld0luZGljYXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmcgKSB7XHJcbiAgICAgICAgdGhpcy5yZXZlcnNlRHJhZ2dpbmdEaXJlY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RlciBldmVudCBpZiByZXRpY2xlIGlzIGVuYWJsZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBtb3VzZVxyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcclxuICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3V0cHV0IGluZm9zcG90IHBvc2l0aW9uIHRvIGFuIG92ZXJsYXkgY29udGFpbmVyIGlmIHNwZWNpZmllZFxyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ID09PSAnb3ZlcmxheScgKSB7XHJcbiAgICAgICAgdGhpcy5hZGRPdXRwdXRFbGVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZG9tIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgLy8gQW5pbWF0ZVxyXG4gICAgdGhpcy5hbmltYXRlLmNhbGwoIHRoaXMgKTtcclxuXHJcbn07XHJcblxyXG5WaWV3ZXIucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IFZpZXdlcixcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbiBvYmplY3QgdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGhvb2t1cCB3aXRoIHBhbm9sZW5zLXZpZXdlci1oYW5kbGVyIGxpc3RlbmVyXHJcbiAgICAgKiB0byBjb21tdW5pY2F0ZSB3aXRoIHZpZXdlciBtZXRob2RcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIFRoZSBvYmplY3QgdG8gYmUgYWRkZWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKCBvYmplY3QgKTtcclxuXHJcbiAgICAgICAgLy8gQWxsIG9iamVjdCBhZGRlZCB0byBzY2VuZSBoYXMgJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJyBldmVudCB0byBoYW5kbGUgdmlld2VyIGNvbW11bmljYXRpb25cclxuICAgICAgICBpZiAoIG9iamVjdC5hZGRFdmVudExpc3RlbmVyICkge1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFsbCBvYmplY3QgYWRkZWQgdG8gc2NlbmUgYmVpbmcgcGFzc2VkIHdpdGggY29udGFpbmVyXHJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBQYW5vcmFtYSAmJiBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1jb250YWluZXInLCBjb250YWluZXI6IHRoaXMuY29udGFpbmVyIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIENhbWVyYVBhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXNjZW5lJywgc2NlbmU6IHRoaXMuc2NlbmUgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEhvb2t1cCBkZWZhdWx0IHBhbm9yYW1hIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIGlmICggb2JqZWN0LnR5cGUgPT09ICdwYW5vcmFtYScgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFBhbm9yYW1hRXZlbnRMaXN0ZW5lciggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoICF0aGlzLnBhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFub3JhbWEoIG9iamVjdCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbiBvYmplY3QgZnJvbSB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSAge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBPYmplY3QgdG8gYmUgcmVtb3ZlZFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZTogZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5yZW1vdmUoIG9iamVjdCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZGVmYXVsdCBjb250cm9sIGJhclxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyYXkgLSBUaGUgY29udHJvbCBidXR0b25zIGFycmF5XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkRGVmYXVsdENvbnRyb2xCYXI6IGZ1bmN0aW9uICggYXJyYXkgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy53aWRnZXQgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdEZWZhdWx0IGNvbnRyb2wgYmFyIGV4aXN0cycgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZGdldCA9IG5ldyBXaWRnZXQoIHRoaXMuY29udGFpbmVyICk7XHJcbiAgICAgICAgd2lkZ2V0LmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgICAgIHdpZGdldC5hZGRDb250cm9sQmFyKCk7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaCggYnV0dG9uTmFtZSA9PiB7XHJcblxyXG4gICAgICAgICAgICB3aWRnZXQuYWRkQ29udHJvbEJ1dHRvbiggYnV0dG9uTmFtZSApO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBwYW5vcmFtYSB0byBiZSB0aGUgY3VycmVudCBvbmVcclxuICAgICAqIEBwYXJhbSB7UGFub3JhbWF9IHBhbm8gLSBQYW5vcmFtYSB0byBiZSBzZXRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRQYW5vcmFtYTogZnVuY3Rpb24gKCBwYW5vICkge1xyXG5cclxuICAgICAgICBjb25zdCBsZWF2aW5nUGFub3JhbWEgPSB0aGlzLnBhbm9yYW1hO1xyXG5cclxuICAgICAgICBpZiAoIHBhbm8udHlwZSA9PT0gJ3Bhbm9yYW1hJyAmJiBsZWF2aW5nUGFub3JhbWEgIT09IHBhbm8gKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhciBleGlzaXRpbmcgaW5mb3Nwb3RcclxuICAgICAgICAgICAgdGhpcy5oaWRlSW5mb3Nwb3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFmdGVyRW50ZXJDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGxlYXZpbmdQYW5vcmFtYSApIHsgbGVhdmluZ1Bhbm9yYW1hLm9uTGVhdmUoKTsgfVxyXG4gICAgICAgICAgICAgICAgcGFuby5yZW1vdmVFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIGFmdGVyRW50ZXJDb21wbGV0ZSApO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCBhZnRlckVudGVyQ29tcGxldGUgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBhbmQgZW50ZXIgcGFub3JhbWFcclxuICAgICAgICAgICAgKHRoaXMucGFub3JhbWEgPSBwYW5vKS5vbkVudGVyKCk7XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgaGFuZGxlciB0byBleGVjdXRlIGNvbW1hbmRzIGZyb20gY2hpbGQgb2JqZWN0c1xyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gVGhlIGRpc3BhdGNoZWQgZXZlbnQgd2l0aCBtZXRob2QgYXMgZnVuY3Rpb24gbmFtZSBhbmQgZGF0YSBhcyBhbiBhcmd1bWVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC5tZXRob2QgJiYgdGhpc1sgZXZlbnQubWV0aG9kIF0gKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzWyBldmVudC5tZXRob2QgXSggZXZlbnQuZGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BhdGNoIGV2ZW50IHRvIGFsbCBkZXNjZW5kYW50c1xyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IHRvIGJlIHBhc3NlZCBhbG9uZ1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3BhdGNoRXZlbnRUb0NoaWxkcmVuOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIGV2ZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgd2lkZ2V0IGNvbnRlbnRcclxuICAgICAqIEBtZXRob2QgYWN0aXZhdGVXaWRnZXRJdGVtXHJcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBjb250cm9sSW5kZXggLSBDb250cm9sIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBtb2RlIC0gTW9kZXMgZm9yIGVmZmVjdHNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhY3RpdmF0ZVdpZGdldEl0ZW06IGZ1bmN0aW9uICggY29udHJvbEluZGV4LCBtb2RlICkge1xyXG5cclxuICAgICAgICBjb25zdCBtYWluTWVudSA9IHRoaXMud2lkZ2V0Lm1haW5NZW51O1xyXG4gICAgICAgIGNvbnN0IENvbnRyb2xNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAwIF07XHJcbiAgICAgICAgY29uc3QgTW9kZU1lbnVJdGVtID0gbWFpbk1lbnUuY2hpbGRyZW5bIDEgXTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICggY29udHJvbEluZGV4ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKCBjb250cm9sSW5kZXggKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDE6XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAyIF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0XHRcdFx0XHRcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcdFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xyXG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUoIGl0ZW0udGV4dENvbnRlbnQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG1vZGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCggbW9kZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTU9ERVMuQ0FSREJPQVJEOlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMiBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAzIF07XHJcblx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggaXRlbSApO1xyXG4gICAgICAgICAgICBNb2RlTWVudUl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUoIGl0ZW0udGV4dENvbnRlbnQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGUgcmVuZGVyaW5nIGVmZmVjdFxyXG4gICAgICogQHBhcmFtICB7TU9ERVN9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUVmZmVjdDogZnVuY3Rpb24gKCBtb2RlICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gbW9kZSApIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKCBtb2RlID09PSBNT0RFUy5OT1JNQUwgKSB7IHRoaXMuZGlzYWJsZUVmZmVjdCgpOyByZXR1cm47IH1cclxuICAgICAgICBlbHNlIHsgdGhpcy5tb2RlID0gbW9kZTsgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3Y7XHJcblxyXG4gICAgICAgIHN3aXRjaCggbW9kZSApIHtcclxuXHJcbiAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdCA9IHRoaXMuQ2FyZGJvYXJkRWZmZWN0O1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBNT0RFUy5TVEVSRU86XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdCA9IHRoaXMuU3RlcmVvRWZmZWN0O1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJldGljbGVDb250cm9sKCk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVSZXRpY2xlQ29udHJvbCgpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIHVuZGVmaW5lZCwgdGhpcy5tb2RlICk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdFxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4oIHsgdHlwZTogJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIG1vZGU6IHRoaXMubW9kZSB9ICk7XHJcblxyXG4gICAgICAgIC8vIEZvcmNlIGVmZmVjdCBzdGVyZW8gY2FtZXJhIHRvIHVwZGF0ZSBieSByZWZyZXNoaW5nIGZvdlxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdiArIDEwZS0zO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjbW9kZS1jaGFuZ2VcclxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ21vZGUtY2hhbmdlJywgbW9kZTogdGhpcy5tb2RlIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSBhZGRpdGlvbmFsIHJlbmRlcmluZyBlZmZlY3RcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlRWZmZWN0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5OT1JNQUwgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGUgPSBNT0RFUy5OT1JNQUw7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIHVuZGVmaW5lZCwgdGhpcy5tb2RlICk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIER1YWwgZXllIGVmZmVjdCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdFxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW4oIHsgdHlwZTogJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIG1vZGU6IHRoaXMubW9kZSB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERpc3BhdGNoIG1vZGUgY2hhbmdlIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI21vZGUtY2hhbmdlXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdtb2RlLWNoYW5nZScsIG1vZGU6IHRoaXMubW9kZSB9ICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIHJldGljbGUgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZVJldGljbGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5yZXRpY2xlLnZpc2libGUgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgcmV0aWNsZSBldmVudCBhbmQgdW5yZWdpc3RlciBtb3VzZSBldmVudFxyXG4gICAgICAgIHRoaXMudW5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcclxuICAgICAgICB0aGlzLnJldGljbGUuc2hvdygpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJSZXRpY2xlRXZlbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIHJldGljbGUgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVSZXRpY2xlQ29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIG1vdXNlIGV2ZW50IGFuZCB1bnJlZ2lzdGVyIHJldGljbGUgZXZlbnRcclxuICAgICAgICBpZiAoICF0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmV0aWNsZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlclJldGljbGVFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGUgYXV0byByb3RhdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUF1dG9SYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgYXV0byByb3RhdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVBdXRvUmF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCApO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHZpZGVvIHBsYXkgb3Igc3RvcFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlld2VyI3ZpZGVvLXRvZ2dsZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVWaWRlb1BsYXk6IGZ1bmN0aW9uICggcGF1c2UgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVG9nZ2xlIHZpZGVvIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdG9nZ2xlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLXRvZ2dsZScsIHBhdXNlOiBwYXVzZSB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGN1cnJlbnRUaW1lIGluIGEgdmlkZW9cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10aW1lXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVvQ3VycmVudFRpbWU6IGZ1bmN0aW9uICggcGVyY2VudGFnZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXR0aW5nIHZpZGVvIHRpbWUgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10aW1lXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdGltZScsIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2UgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiB2aWRlbyB1cGRhdGVzIGlmIGFuIHdpZGdldCBpcyBwcmVzZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdXBkYXRlXHJcbiAgICAgKi9cclxuICAgIG9uVmlkZW9VcGRhdGU6IGZ1bmN0aW9uICggcGVyY2VudGFnZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFZpZGVvIHVwZGF0ZSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby11cGRhdGVcclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLXVwZGF0ZScsIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2UgfSApOyB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCB1cGRhdGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGV2ZXJ5IGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRVcGRhdGVDYWxsYmFjazogZnVuY3Rpb24gKCBmbiApIHtcclxuXHJcbiAgICAgICAgaWYgKCBmbiApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLnB1c2goIGZuICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHJlbW92ZWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVVcGRhdGVDYWxsYmFjazogZnVuY3Rpb24gKCBmbiApIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5pbmRleE9mKCBmbiApO1xyXG5cclxuICAgICAgICBpZiAoIGZuICYmIGluZGV4ID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyB2aWRlbyB3aWRnZXRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzaG93VmlkZW9XaWRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNob3cgdmlkZW8gd2lkZ2V0IGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLWNvbnRyb2wtc2hvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby1jb250cm9sLXNob3cnIH0gKTsgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIHZpZGVvIHdpZGdldFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGhpZGVWaWRlb1dpZGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGlkZSB2aWRlbyB3aWRnZXRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tY29udHJvbC1oaWRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLWNvbnRyb2wtaGlkZScgfSApOyB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB2aWRlbyBwbGF5IGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVmlkZW9QbGF5QnV0dG9uOiBmdW5jdGlvbiAoIHBhdXNlZCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggd2lkZ2V0ICYmIHdpZGdldC52aWRlb0VsZW1lbnQgJiYgd2lkZ2V0LnZpZGVvRWxlbWVudC5jb250cm9sQnV0dG9uICkge1xyXG5cclxuICAgICAgICAgICAgd2lkZ2V0LnZpZGVvRWxlbWVudC5jb250cm9sQnV0dG9uLnVwZGF0ZSggcGF1c2VkICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGRlZmF1bHQgcGFub3JhbWEgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGFkZGVkIHdpdGggZXZlbnQgbGlzdGVuZXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRQYW5vcmFtYUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICggcGFubyApIHtcclxuXHJcbiAgICAgICAgLy8gU2V0IGNhbWVyYSBjb250cm9sIG9uIGV2ZXJ5IHBhbm9yYW1hXHJcbiAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMuc2V0Q2FtZXJhQ29udHJvbC5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyBhbmQgaGlkZSB3aWRnZXQgZXZlbnQgb25seSB3aGVuIGl0J3MgVmlkZW9QYW5vcmFtYVxyXG4gICAgICAgIGlmICggcGFubyBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5zaG93VmlkZW9XaWRnZXQuYmluZCggdGhpcyApICk7XHJcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggISh0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVZpZGVvV2lkZ2V0LmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNhbWVyYSBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q2FtZXJhQ29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMudGFyZ2V0LmNvcHkoIHRoaXMucGFub3JhbWEucG9zaXRpb24gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGN1cnJlbnQgY2FtZXJhIGNvbnRyb2xcclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gLSBDdXJyZW50IG5hdmlnYXRpb24gY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7VEhSRUUuT3JiaXRDb250cm9sc3xUSFJFRS5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzfVxyXG4gICAgICovXHJcbiAgICBnZXRDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2w7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBzY2VuZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5TY2VuZX0gLSBDdXJyZW50IHNjZW5lIHdoaWNoIHRoZSB2aWV3ZXIgaXMgYnVpbHQgb25cclxuICAgICAqL1xyXG4gICAgZ2V0U2NlbmU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjYW1lcmFcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7VEhSRUUuQ2FtZXJhfSAtIFRoZSBzY2VuZSBjYW1lcmFcclxuICAgICAqL1xyXG4gICAgZ2V0Q2FtZXJhOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHJlbmRlcmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IC0gVGhlIHJlbmRlcmVyIHVzaW5nIHdlYmdsXHJcbiAgICAgKi9cclxuICAgIGdldFJlbmRlcmVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBjb250YWluZXIgaG9sZHMgcmVuZGVyZXJkIGNhbnZhc1xyXG4gICAgICovXHJcbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29udHJvbCBpZFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gQ29udHJvbCBpZC4gJ29yYml0JyBvciAnZGV2aWNlLW9yaWVudGF0aW9uJ1xyXG4gICAgICovXHJcbiAgICBnZXRDb250cm9sSWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC5pZDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG5leHQgbmF2aWdhdGlvbiBjb250cm9sIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBOZXh0IGNvbnRyb2wgaWRcclxuICAgICAqL1xyXG4gICAgZ2V0TmV4dENvbnRyb2xJZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sc1sgdGhpcy5nZXROZXh0Q29udHJvbEluZGV4KCkgXS5pZDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG5leHQgbmF2aWdhdGlvbiBjb250cm9sIGluZGV4XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLSBOZXh0IGNvbnRyb2wgaW5kZXhcclxuICAgICAqL1xyXG4gICAgZ2V0TmV4dENvbnRyb2xJbmRleDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjb250cm9scyA9IHRoaXMuY29udHJvbHM7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuY29udHJvbDtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBjb250cm9scy5pbmRleE9mKCBjb250cm9sICkgKyAxO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBuZXh0SW5kZXggPj0gY29udHJvbHMubGVuZ3RoICkgPyAwIDogbmV4dEluZGV4O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZmllbGQgb2YgdmlldyBvZiBjYW1lcmFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmb3ZcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRDYW1lcmFGb3Y6IGZ1bmN0aW9uICggZm92ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGUgY29udHJvbCBieSBpbmRleFxyXG4gICAgICogQHBhcmFtICB7Q09OVFJPTFN9IGluZGV4IC0gSW5kZXggb2YgY2FtZXJhIGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBlbmFibGVDb250cm9sOiBmdW5jdGlvbiAoIGluZGV4ICkge1xyXG5cclxuICAgICAgICBpbmRleCA9ICggaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuY29udHJvbHMubGVuZ3RoICkgPyBpbmRleCA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY29udHJvbHNbIGluZGV4IF07XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICAgIGNhc2UgQ09OVFJPTFMuT1JCSVQ6XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gMTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OOlxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVdpZGdldEl0ZW0oIGluZGV4LCB1bmRlZmluZWQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSBjdXJyZW50IGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlQ29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgbmV4dCBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlTmV4dENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVDb250cm9sKCB0aGlzLmdldE5leHRDb250cm9sSW5kZXgoKSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY3JlZW4gU3BhY2UgUHJvamVjdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldFNjcmVlblZlY3RvcjogZnVuY3Rpb24gKCB3b3JsZFZlY3RvciApIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjdG9yID0gd29ybGRWZWN0b3IuY2xvbmUoKTtcclxuICAgICAgICBjb25zdCB3aWR0aEhhbGYgPSAoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoICkgLyAyO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodEhhbGYgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB2ZWN0b3IucHJvamVjdCggdGhpcy5jYW1lcmEgKTtcclxuXHJcbiAgICAgICAgdmVjdG9yLnggPSAoIHZlY3Rvci54ICogd2lkdGhIYWxmICkgKyB3aWR0aEhhbGY7XHJcbiAgICAgICAgdmVjdG9yLnkgPSAtICggdmVjdG9yLnkgKiBoZWlnaHRIYWxmICkgKyBoZWlnaHRIYWxmO1xyXG4gICAgICAgIHZlY3Rvci56ID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY3RvcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgU3ByaXRlIGluIFZpZXdwb3J0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY2hlY2tTcHJpdGVJblZpZXdwb3J0OiBmdW5jdGlvbiAoIHNwcml0ZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmdldEludmVyc2UoIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkICk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeC5tdWx0aXBseU1hdHJpY2VzKCB0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKTtcclxuICAgICAgICB0aGlzLmNhbWVyYUZydXN0dW0uc2V0RnJvbU1hdHJpeCggdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeCApO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ByaXRlLnZpc2libGUgJiYgdGhpcy5jYW1lcmFGcnVzdHVtLmludGVyc2VjdHNTcHJpdGUoIHNwcml0ZSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJldmVyc2VEcmFnZ2luZ0RpcmVjdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMucm90YXRlU3BlZWQgKj0gLTE7XHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqPSAtMTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHJldGljbGUgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkUmV0aWNsZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnJldGljbGUgPSBuZXcgUmV0aWNsZSggMHhmZmZmZmYsIHRydWUsIHRoaXMub3B0aW9ucy5kd2VsbFRpbWUgKTtcclxuICAgICAgICB0aGlzLnJldGljbGUuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFkZCggdGhpcy5yZXRpY2xlICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVJldGljbGUuYWRkKCB0aGlzLmNhbWVyYSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUd2VlbiBjb250cm9sIGxvb2tpbmcgY2VudGVyXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlZlY3RvcjN9IHZlY3RvciAtIFZlY3RvciB0byBiZSBsb29rZWQgYXQgdGhlIGNlbnRlclxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdHdlZW5Db250cm9sQ2VudGVyOiBmdW5jdGlvbiAoIHZlY3RvciwgZHVyYXRpb24sIGVhc2luZyApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmNvbnRyb2wgIT09IHRoaXMuT3JiaXRDb250cm9scyApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQYXNzIGluIGFyZ3VtZW50cyBhcyBhcnJheVxyXG4gICAgICAgIGlmICggdmVjdG9yIGluc3RhbmNlb2YgQXJyYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHZlY3RvclsgMSBdO1xyXG4gICAgICAgICAgICBlYXNpbmcgPSB2ZWN0b3JbIDIgXTtcclxuICAgICAgICAgICAgdmVjdG9yID0gdmVjdG9yWyAwIF07XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gZHVyYXRpb24gOiAxMDAwO1xyXG4gICAgICAgIGVhc2luZyA9IGVhc2luZyB8fCBUV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0O1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUsIGhhLCB2YSwgY2h2LCBjdnYsIGh2LCB2diwgdnB0Yywgb3YsIG52O1xyXG5cclxuICAgICAgICBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNodiA9IHRoaXMuY2FtZXJhLmdldFdvcmxkRGlyZWN0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICk7XHJcbiAgICAgICAgY3Z2ID0gY2h2LmNsb25lKCk7XHJcblxyXG4gICAgICAgIHZwdGMgPSB0aGlzLnBhbm9yYW1hLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKS5zdWIoIHRoaXMuY2FtZXJhLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKSApO1xyXG5cclxuICAgICAgICBodiA9IHZlY3Rvci5jbG9uZSgpO1xyXG4gICAgICAgIC8vIFNjYWxlIGVmZmVjdFxyXG4gICAgICAgIGh2LnggKj0gLTE7XHJcbiAgICAgICAgaHYuYWRkKCB2cHRjICkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdnYgPSBodi5jbG9uZSgpO1xyXG5cclxuICAgICAgICBjaHYueSA9IDA7XHJcbiAgICAgICAgaHYueSA9IDA7XHJcblxyXG4gICAgICAgIGhhID0gTWF0aC5hdGFuMiggaHYueiwgaHYueCApIC0gTWF0aC5hdGFuMiggY2h2LnosIGNodi54ICk7XHJcbiAgICAgICAgaGEgPSBoYSA+IE1hdGguUEkgPyBoYSAtIDIgKiBNYXRoLlBJIDogaGE7XHJcbiAgICAgICAgaGEgPSBoYSA8IC1NYXRoLlBJID8gaGEgKyAyICogTWF0aC5QSSA6IGhhO1xyXG4gICAgICAgIHZhID0gTWF0aC5hYnMoIGN2di5hbmdsZVRvKCBjaHYgKSArICggY3Z2LnkgKiB2di55IDw9IDAgPyB2di5hbmdsZVRvKCBodiApIDogLXZ2LmFuZ2xlVG8oIGh2ICkgKSApO1xyXG4gICAgICAgIHZhICo9IHZ2LnkgPCBjdnYueSA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgb3YgPSB7IGxlZnQ6IDAsIHVwOiAwIH07XHJcbiAgICAgICAgbnYgPSB7IGxlZnQ6IDAsIHVwOiAwIH07XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbiggb3YgKVxyXG4gICAgICAgICAgICAudG8oIHsgbGVmdDogaGEgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBlYXNpbmcgKVxyXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24ob3Ype1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuY29udHJvbC5yb3RhdGVMZWZ0KCBvdi5sZWZ0IC0gbnYubGVmdCApO1xyXG4gICAgICAgICAgICAgICAgbnYubGVmdCA9IG92LmxlZnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcclxuICAgICAgICAgICAgLnRvKCB7IHVwOiB2YSB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIGVhc2luZyApXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbihvdil7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9sLnJvdGF0ZVVwKCBvdi51cCAtIG52LnVwICk7XHJcbiAgICAgICAgICAgICAgICBudi51cCA9IG92LnVwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlciBieSBvYmplY3RcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIE9iamVjdCB0byBiZSBsb29rZWQgYXQgdGhlIGNlbnRlclxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdHdlZW5Db250cm9sQ2VudGVyQnlPYmplY3Q6IGZ1bmN0aW9uICggb2JqZWN0LCBkdXJhdGlvbiwgZWFzaW5nICkge1xyXG5cclxuICAgICAgICBsZXQgaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgb2JqZWN0LnRyYXZlcnNlQW5jZXN0b3JzKCBmdW5jdGlvbiAoIGFuY2VzdG9yICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhbmNlc3Rvci5zY2FsZVBsYWNlSG9sZGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGlmICggaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnZlcnRYVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIC0xLCAxLCAxICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuQ29udHJvbENlbnRlciggb2JqZWN0LmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKS5tdWx0aXBseSggaW52ZXJ0WFZlY3RvciApLCBkdXJhdGlvbiwgZWFzaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuQ29udHJvbENlbnRlciggb2JqZWN0LmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKSwgZHVyYXRpb24sIGVhc2luZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gd2luZG93IHNpemUgaXMgY2hhbmdlZFxyXG4gICAgICogQGZpcmVzIFZpZXdlciN3aW5kb3ctcmVzaXplXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd1dpZHRoXSAtIFNwZWNpZnkgaWYgY3VzdG9tIGVsZW1lbnQgaGFzIGNoYW5nZWQgd2lkdGhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2luZG93SGVpZ2h0XSAtIFNwZWNpZnkgaWYgY3VzdG9tIGVsZW1lbnQgaGFzIGNoYW5nZWQgaGVpZ2h0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICggd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCApIHtcclxuXHJcbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGFuZCA9IHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyggJ3Bhbm9sZW5zLWNvbnRhaW5lcicgKSB8fCB0aGlzLmNvbnRhaW5lci5pc0Z1bGxzY3JlZW47XHJcblxyXG4gICAgICAgIGlmICggd2luZG93V2lkdGggIT09IHVuZGVmaW5lZCAmJiB3aW5kb3dIZWlnaHQgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvd0hlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX3dpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0FuZHJvaWQgPSAvKGFuZHJvaWQpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RXaWR0aCA9IGlzQW5kcm9pZCBcclxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKSBcclxuICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdEhlaWdodCA9IGlzQW5kcm9pZCBcclxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4oZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApIFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcblxyXG4gICAgICAgICAgICB3aWR0aCA9IGV4cGFuZCA/IGFkanVzdFdpZHRoIDogdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IGV4cGFuZCA/IGFkanVzdEhlaWdodCA6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpZHRoIC8gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSByZXRpY2xlXHJcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaW5kb3cgcmVzaXppbmcgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjd2luZG93LXJlc2l6ZVxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCAgLSBXaWR0aCBvZiB0aGUgd2luZG93XHJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCAtIEhlaWdodCBvZiB0aGUgd2luZG93XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd3aW5kb3ctcmVzaXplJywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxuICAgICAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3dpbmRvdy1yZXNpemUnLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBvdXRwdXQgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZE91dHB1dEVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yaWdodCA9ICcxMHB4JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9ICcxMHB4JztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3V0cHV0IHBvc2l0aW9uIGluIGRldmVsb3BlciBjb25zb2xlIGJ5IGhvbGRpbmcgZG93biBDdHJsIGJ1dHRvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG91dHB1dFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3QoIHRoaXMucGFub3JhbWEsIHRydWUgKTtcclxuXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IGludGVyc2VjdHNbIDAgXS5wb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSBuZXcgVEhSRUUuVmVjdG9yMyggLTEsIDEsIDEgKTtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSB0aGlzLnBhbm9yYW1hLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcclxuICAgICAgICAgICAgcG9pbnQuc3ViKCB3b3JsZCApLm11bHRpcGx5KCBjb252ZXJ0ZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgeDogcG9pbnQueC50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueS50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAgICAgejogcG9pbnQuei50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGAke3Bvc2l0aW9uLnh9LCAke3Bvc2l0aW9uLnl9LCAke3Bvc2l0aW9uLnp9YDtcclxuXHJcbiAgICAgICAgICAgIGlmICggcG9pbnQubGVuZ3RoKCkgPT09IDAgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggdGhpcy5vcHRpb25zLm91dHB1dCApIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2V2ZW50JzpcclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRGlzcGF0Y2ggcmF5Y2FzdCBwb3NpdGlvbiBhcyBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjcG9zaXRpb24tb3V0cHV0XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncG9zaXRpb24tb3V0cHV0JywgcG9zaXRpb246IHBvc2l0aW9uIH0gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnY29uc29sZSc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oIG1lc3NhZ2UgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnb3ZlcmxheSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dERpdkVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gbW91c2UgZG93blxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UueCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNlZG93bic7XHJcbiAgICAgICAgdGhpcy5vblRhcCggZXZlbnQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gbW91c2UgbW92ZVxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNlbW92ZSc7XHJcbiAgICAgICAgdGhpcy5vblRhcCggZXZlbnQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gbW91c2UgdXBcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgb25UYXJnZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZXVwJztcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZSA9ICggdGhpcy51c2VyTW91c2UueCA+PSBldmVudC5jbGllbnRYIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlIFxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnggPD0gZXZlbnQuY2xpZW50WCArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnkgPj0gZXZlbnQuY2xpZW50WSAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnkgPD0gZXZlbnQuY2xpZW50WSArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSApIFxyXG5cdFx0XHRcdHx8ICAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzIFxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnggPj0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnggPD0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSBcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55IDw9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgKSBcclxuICAgICAgICAgICAgPyAnY2xpY2snIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBzaG91bGQgaGFwcGVuIG9uIGNhbnZhc1xyXG4gICAgICAgIGlmICggZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGFub2xlbnMtY2FudmFzJyApICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPT09IDEgKSB7XHJcblxyXG4gICAgICAgICAgICBvblRhcmdldCA9IHRoaXMub25UYXAoIHsgY2xpZW50WDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSB9LCB0eXBlICk7XHJcblx0XHRcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCBldmVudCwgdHlwZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIGlmICggb25UYXJnZXQgKSB7IFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IG9wdGlvbnM6IHsgYXV0b0hpZGVJbmZvc3BvdCwgYXV0b0hpZGVDb250cm9sQmFyIH0sIHBhbm9yYW1hLCB0b2dnbGVDb250cm9sQmFyIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhdXRvSGlkZUluZm9zcG90ICYmIHBhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhbm9yYW1hLnRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBhdXRvSGlkZUNvbnRyb2xCYXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ29udHJvbEJhcigpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHRhcCBldmVueSBmcmFtZVxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uVGFwOiBmdW5jdGlvbiAoIGV2ZW50LCB0eXBlICkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0IH0gPSB0aGlzLmNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC54ID0gKCAoIGV2ZW50LmNsaWVudFggLSBsZWZ0ICkgLyBjbGllbnRXaWR0aCApICogMiAtIDE7XHJcbiAgICAgICAgdGhpcy5yYXljYXN0ZXJQb2ludC55ID0gLSAoICggZXZlbnQuY2xpZW50WSAtIHRvcCApIC8gY2xpZW50SGVpZ2h0ICkgKiAyICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSggdGhpcy5yYXljYXN0ZXJQb2ludCwgdGhpcy5jYW1lcmEgKTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIGlmIG5vIHBhbm9yYW1hIFxyXG4gICAgICAgIGlmICggIXRoaXMucGFub3JhbWEgKSB7IFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdXRwdXQgaW5mb3Nwb3QgaW5mb3JtYXRpb25cclxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09ICdtb3VzZWRvd24nICYmIHRoaXMudG91Y2hTdXBwb3J0ZWQgfHwgdGhpcy5PVVRQVVRfSU5GT1NQT1QgKSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRwdXRQb3NpdGlvbigpOyBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIHRoaXMucGFub3JhbWEuY2hpbGRyZW4sIHRydWUgKTtcclxuICAgICAgICBjb25zdCBpbnRlcnNlY3RfZW50aXR5ID0gdGhpcy5nZXRDb252ZXJ0ZWRJbnRlcnNlY3QoIGludGVyc2VjdHMgKTtcclxuICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApID8gaW50ZXJzZWN0c1swXS5vYmplY3QgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNldXAnICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0X2VudGl0eSAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID09PSBpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNldXAnICApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QgPT09IGludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ2NsaWNrJyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2snLCBpbnRlcnNlY3RzOiBpbnRlcnNlY3RzLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGludGVyc2VjdF9lbnRpdHkuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2stZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcicsIGludGVyc2VjdHM6IGludGVyc2VjdHMsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggKCB0aGlzLmhvdmVyT2JqZWN0ICYmIGludGVyc2VjdHMubGVuZ3RoID4gMCAmJiB0aGlzLmhvdmVyT2JqZWN0ICE9PSBpbnRlcnNlY3RfZW50aXR5IClcclxuXHRcdFx0XHR8fCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPT09IDAgKSApe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVybGVhdmUnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5lbmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0X2VudGl0eSAmJiBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0ICE9PSBpbnRlcnNlY3RfZW50aXR5ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyZW50ZXInLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCByZXRpY2xlIHRpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ICYmIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IHRoaXMudGVtcEVuYWJsZVJldGljbGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGljbGUuc3RhcnQoIHRoaXMub25UYXAuYmluZCggdGhpcywgZXZlbnQsICdjbGljaycgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICE9IGludGVyc2VjdF9lbnRpdHkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSBpbnRlcnNlY3RfZW50aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLnByZXNzT2JqZWN0ICE9IGludGVyc2VjdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IGludGVyc2VjdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RhcnQnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXInLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3Ntb3ZlLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NPYmplY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc21vdmUnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoICFpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5mb3Nwb3QgaGFuZGxlclxyXG4gICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdCA9IGludGVyc2VjdDtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGlmICggdHlwZSA9PT0gJ2NsaWNrJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbmZvc3BvdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF1dG8gcm90YXRlXHJcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSAmJiB0aGlzLnVzZXJNb3VzZS50eXBlICE9PSAnbW91c2Vtb3ZlJyApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEF1dG8tcm90YXRlIGlkbGUgdGltZXJcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jb250cm9sID09PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCB0aGlzLmVuYWJsZUF1dG9SYXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGVBY3RpdmF0aW9uRHVyYXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVx0XHRcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbnZlcnRlZCBpbnRlcnNlY3RcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGludGVyc2VjdHMgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0Q29udmVydGVkSW50ZXJzZWN0OiBmdW5jdGlvbiAoIGludGVyc2VjdHMgKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnRlcnNlY3Q7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdHNbaV0uZGlzdGFuY2UgPj0gMCAmJiBpbnRlcnNlY3RzW2ldLm9iamVjdCAmJiAhaW50ZXJzZWN0c1tpXS5vYmplY3QucGFzc1Rocm91Z2ggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5LnBhc3NUaHJvdWdoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5ICYmICFpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkucGFzc1Rocm91Z2ggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldLm9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgaGlkZUluZm9zcG90OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5pbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3Qub25Ib3ZlckVuZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgY29udHJvbCBiYXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlQ29udHJvbEJhcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9nZ2xlIGNvbnRyb2wgYmFyIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI2NvbnRyb2wtYmFyLXRvZ2dsZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICggd2lkZ2V0ICkge1xyXG5cclxuICAgICAgICAgICAgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NvbnRyb2wtYmFyLXRvZ2dsZScgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGtleSBkb3duXHJcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMub3V0cHV0ICYmIHRoaXMub3B0aW9ucy5vdXRwdXQgIT09ICdub25lJyAmJiBldmVudC5rZXkgPT09ICdDb250cm9sJyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBrZXkgdXBcclxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25LZXlVcDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY29udHJvbCBhbmQgY2FsbGJhY2tzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5mb3JFYWNoKCBmdW5jdGlvbiggY2FsbGJhY2sgKXsgY2FsbGJhY2soKTsgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uKCBjaGlsZCApe1xyXG4gICAgICAgICAgICBpZiAoIGNoaWxkIGluc3RhbmNlb2YgSW5mb3Nwb3QgXHJcblx0XHRcdFx0JiYgY2hpbGQuZWxlbWVudCBcclxuXHRcdFx0XHQmJiAoIHRoaXMuaG92ZXJPYmplY3QgPT09IGNoaWxkIFxyXG5cdFx0XHRcdFx0fHwgY2hpbGQuZWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgXHJcblx0XHRcdFx0XHR8fCAoY2hpbGQuZWxlbWVudC5sZWZ0ICYmIGNoaWxkLmVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpXHJcblx0XHRcdFx0XHR8fCAoY2hpbGQuZWxlbWVudC5yaWdodCAmJiBjaGlsZC5lbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5jaGVja1Nwcml0ZUluVmlld3BvcnQoIGNoaWxkICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblZlY3RvciggY2hpbGQuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudHJhbnNsYXRlRWxlbWVudCggeCwgeSApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5vbkRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcmluZyBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZXZlcnkgYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBSZW5kZXIgcmV0aWNsZSBsYXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3QucmVuZGVyKCB0aGlzLnNjZW5lUmV0aWNsZSwgdGhpcy5jYW1lcmEgKTtcclxuXHRcdFx0XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmVSZXRpY2xlLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGVcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhbmltYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5hbmltYXRlLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGNoYW5nZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgbW91c2UgYW5kIHRvdWNoIGV2ZW50IG9uIGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBwYXNzaXZlOiBmYWxzZSB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJyAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIG9wdGlvbnMgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJyAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX01PVkUsIG9wdGlvbnMgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCdcdCAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIG9wdGlvbnMgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIFx0dGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIG9wdGlvbnMgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnICAsIFx0dGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIG9wdGlvbnMgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBtb3VzZSBhbmQgdG91Y2ggZXZlbnQgb24gY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicgLCAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScgLCAgdGhpcy5IQU5ETEVSX01PVVNFX01PVkUsIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnXHQsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnICAsICB0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgZmFsc2UgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgcmV0aWNsZSBldmVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciByZXRpY2xlIGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlclJldGljbGVFdmVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSByZXRpY2xlIGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWVudFggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgKyB0aGlzLmNvbnRhaW5lci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIGNvbnN0IGNsaWVudFkgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZVVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XHJcbiAgICAgICAgdGhpcy5IQU5ETEVSX1RBUCA9IHRoaXMub25UYXAuYmluZCggdGhpcywgeyBjbGllbnRYLCBjbGllbnRZIH0gKTtcclxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGNvbnRhaW5lciBhbmQgd2luZG93IGxpc3RlbmVyc1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnICwgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gS2V5Ym9hcmQgRXZlbnRcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLkhBTkRMRVJfS0VZX0RPV04sIHRydWUgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJyAgLCB0aGlzLkhBTkRMRVJfS0VZX1VQXHQgLCB0cnVlICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgY29udGFpbmVyIGFuZCB3aW5kb3cgbGlzdGVuZXJzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIFJlc2l6ZSBFdmVudFxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIEtleWJvYXJkIEV2ZW50XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5IQU5ETEVSX0tFWV9ET1dOLCB0cnVlICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXl1cCcgICwgdGhpcy5IQU5ETEVSX0tFWV9VUCAgLCB0cnVlICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgYWxsIHNjZW5lIG9iamVjdHMgYW5kIGNsZWFyIGNhY2hlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLy8gVW5yZWdpc3RlciBkb20gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgLy8gcmVjdXJzaXZlIGRpc3Bvc2FsIG9uIDNkIG9iamVjdHNcclxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlRGlzcG9zZSggb2JqZWN0LmNoaWxkcmVuW2ldICk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgUGFub3JhbWEgfHwgb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApe1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCAnZGlzcG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCB0aGlzLnNjZW5lICk7XHJcblxyXG4gICAgICAgIC8vIGRpc3Bvc2Ugd2lkZ2V0XHJcbiAgICAgICAgaWYgKCB0aGlzLndpZGdldCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy53aWRnZXQgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIGNhY2hlXHJcbiAgICAgICAgaWYgKCBUSFJFRS5DYWNoZSAmJiBUSFJFRS5DYWNoZS5lbmFibGVkICkge1xyXG5cclxuICAgICAgICAgICAgVEhSRUUuQ2FjaGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IHZpZXdlciBieSBkaXNwb3NpbmcgYW5kIHN0b3BwaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkICk7XHRcdFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBwYW5vcmFtYSBkaXNwb3NlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25QYW5vcmFtYURpc3Bvc2U6IGZ1bmN0aW9uICggcGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgIGlmICggcGFub3JhbWEgaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHBhbm9yYW1hID09PSB0aGlzLnBhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYSA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBhamF4IGNhbGxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gYmUgcmVxdWVzdGVkXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgYWZ0ZXIgcmVxdWVzdCBjb21wbGV0ZXNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkQXN5bmNSZXF1ZXN0OiBmdW5jdGlvbiAoIHVybCwgY2FsbGJhY2sgPSAoKSA9PiB7fSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCBldmVudCApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKCAnR0VUJywgdXJsLCB0cnVlICk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCBudWxsICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZpZXcgaW5kaWNhdG9yIGluIHVwcGVyIGxlZnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRWaWV3SW5kaWNhdG9yOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZFZpZXdJbmRpY2F0b3IgKCBhc3luY0V2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhc3luY0V2ZW50LmxvYWRlZCA9PT0gMCApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdJbmRpY2F0b3JEaXYgPSBhc3luY0V2ZW50LnRhcmdldC5yZXNwb25zZVhNTC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUud2lkdGggPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUuaGVpZ2h0ID0gc2NvcGUudmlld0luZGljYXRvclNpemUgKyAncHgnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS50b3AgPSAnMTBweCc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmlkID0gJ3Bhbm9sZW5zLXZpZXctaW5kaWNhdG9yLWNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHZpZXdJbmRpY2F0b3JEaXYgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvciA9IHZpZXdJbmRpY2F0b3JEaXYucXVlcnlTZWxlY3RvciggJyNpbmRpY2F0b3InICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldEluZGljYXRvckQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUucmFkaXVzID0gc2NvcGUudmlld0luZGljYXRvclNpemUgKiAwLjIyNTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgPSBzY29wZS5jYW1lcmEucm90YXRpb24ueSAtIFRIUkVFLk1hdGguZGVnVG9SYWQoIDkwICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5mb3ZBbmdsZSA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmNhbWVyYS5mb3YgKSA7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0QW5nbGUgPSAtc2NvcGUuY3VycmVudFBhbm9BbmdsZSAtIHNjb3BlLmZvdkFuZ2xlIC8gMjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0QW5nbGUgPSAtc2NvcGUuY3VycmVudFBhbm9BbmdsZSArIHNjb3BlLmZvdkFuZ2xlIC8gMjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRYID0gc2NvcGUucmFkaXVzICogTWF0aC5jb3MoIHNjb3BlLmxlZnRBbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUubGVmdFkgPSBzY29wZS5yYWRpdXMgKiBNYXRoLnNpbiggc2NvcGUubGVmdEFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yaWdodFggPSBzY29wZS5yYWRpdXMgKiBNYXRoLmNvcyggc2NvcGUucmlnaHRBbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLnJpZ2h0QW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmluZGljYXRvckQgPSAnTSAnICsgc2NvcGUubGVmdFggKyAnICcgKyBzY29wZS5sZWZ0WSArICcgQSAnICsgc2NvcGUucmFkaXVzICsgJyAnICsgc2NvcGUucmFkaXVzICsgJyAwIDAgMSAnICsgc2NvcGUucmlnaHRYICsgJyAnICsgc2NvcGUucmlnaHRZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubGVmdFggJiYgc2NvcGUubGVmdFkgJiYgc2NvcGUucmlnaHRYICYmIHNjb3BlLnJpZ2h0WSAmJiBzY29wZS5yYWRpdXMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvci5zZXRBdHRyaWJ1dGUoICdkJywgc2NvcGUuaW5kaWNhdG9yRCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzY29wZS5hZGRVcGRhdGVDYWxsYmFjayggc2V0SW5kaWNhdG9yRCApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yT25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JPbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIGluZGljYXRvck9uTW91c2VFbnRlciApO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgaW5kaWNhdG9yT25Nb3VzZUxlYXZlICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRBc3luY1JlcXVlc3QoIERhdGFJbWFnZS5WaWV3SW5kaWNhdG9yLCBsb2FkVmlld0luZGljYXRvciApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmQgY3VzdG9tIGNvbnRyb2wgaXRlbSB0byBleGlzdGluZyBjb250cm9sIGJhclxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb249e31dIC0gU3R5bGUgb2JqZWN0IHRvIG92ZXJ3aXJ0ZSBkZWZhdWx0IGVsZW1lbnQgc3R5bGUuIEl0IHRha2VzICdzdHlsZScsICdvblRhcCcgYW5kICdncm91cCcgcHJvcGVydGllcy5cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhcHBlbmRDb250cm9sSXRlbTogZnVuY3Rpb24gKCBvcHRpb24gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLndpZGdldC5jcmVhdGVDdXN0b21JdGVtKCBvcHRpb24gKTtcdFx0XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9uLmdyb3VwID09PSAndmlkZW8nICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aWRnZXQudmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpZGdldC5iYXJFbGVtZW50LmFwcGVuZENoaWxkKCBpdGVtICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIGFsbCBjYWNoZWQgZmlsZXNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjbGVhckFsbENhY2hlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIFRIUkVFLkNhY2hlLmNsZWFyKCk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgVmlld2VyIH07IiwiaW1wb3J0IHsgVEhSRUVfUkVWSVNJT04gfSBmcm9tICcuL0NvbnN0YW50cyc7XHJcblxyXG5pZiAoIFRIUkVFLlJFVklTSU9OICE9IFRIUkVFX1JFVklTSU9OICkge1xyXG5cclxuICAgIGNvbnNvbGUud2FybiggYHRocmVlLmpzIHZlcnNpb24gaXMgbm90IG1hdGNoZWQuIFBsZWFzZSBjb25zaWRlciB1c2UgdGhlIHRhcmdldCByZXZpc2lvbiAke1RIUkVFX1JFVklTSU9OfWAgKTtcclxuXHJcbn0iLCIvKipcclxuICogUGFub2xlbnMuanNcclxuICogQGF1dGhvciBwY2hlbjY2XHJcbiAqIEBuYW1lc3BhY2UgUEFOT0xFTlNcclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uc3RhbnRzJztcclxuZXhwb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi9EYXRhSW1hZ2UnO1xyXG5leHBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9JbWFnZUxvYWRlcic7XHJcbmV4cG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XHJcbmV4cG9ydCB7IEN1YmVUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyJztcclxuZXhwb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhL01lZGlhJztcclxuZXhwb3J0IHsgUmV0aWNsZSB9IGZyb20gJy4vaW50ZXJmYWNlL1JldGljbGUnO1xyXG5leHBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xyXG5leHBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldC9XaWRnZXQnO1xyXG5leHBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvUGFub3JhbWEnO1xyXG5leHBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9JbWFnZVBhbm9yYW1hJztcclxuZXhwb3J0IHsgRW1wdHlQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvRW1wdHlQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IEN1YmVQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQ3ViZVBhbm9yYW1hJztcclxuZXhwb3J0IHsgQmFzaWNQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQmFzaWNQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1ZpZGVvUGFub3JhbWEnO1xyXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0dvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IExpdHRsZVBsYW5ldCB9IGZyb20gJy4vcGFub3JhbWEvTGl0dGxlUGxhbmV0JztcclxuZXhwb3J0IHsgSW1hZ2VMaXR0bGVQbGFuZXQgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlTGl0dGxlUGxhbmV0JztcclxuZXhwb3J0IHsgQ2FtZXJhUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0NhbWVyYVBhbm9yYW1hJztcclxuZXhwb3J0IHsgVmlld2VyIH0gZnJvbSAnLi92aWV3ZXIvVmlld2VyJztcclxuaW1wb3J0ICcuL0NoZWNrJztcclxuXHJcbi8vIGV4cG9zZSBUV0VFTlxyXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG53aW5kb3cuVFdFRU4gPSBUV0VFTjsiXSwibmFtZXMiOlsiVEhSRUUuQ2FjaGUiLCJUSFJFRS5UZXh0dXJlIiwiVEhSRUUuUkdCRm9ybWF0IiwiVEhSRUUuUkdCQUZvcm1hdCIsIlRIUkVFLkN1YmVUZXh0dXJlIiwiVEhSRUUuRXZlbnREaXNwYXRjaGVyIiwiVEhSRUUuVmlkZW9UZXh0dXJlIiwiVEhSRUUuTGluZWFyRmlsdGVyIiwiVEhSRUUuU3ByaXRlTWF0ZXJpYWwiLCJUSFJFRS5TcHJpdGUiLCJUSFJFRS5Db2xvciIsIlRIUkVFLkNhbnZhc1RleHR1cmUiLCJ0aGlzIiwiVEhSRUUuRG91YmxlU2lkZSIsIlRXRUVOIiwiVEhSRUUuVmVjdG9yMyIsIlRIUkVFLk1lc2giLCJUSFJFRS5CYWNrU2lkZSIsIlRIUkVFLk9iamVjdDNEIiwiVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCIsIlRIUkVFLkJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuQnVmZmVyQXR0cmlidXRlIiwiVEhSRUUuU2hhZGVyTGliIiwiVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5TaGFkZXJNYXRlcmlhbCIsIlRIUkVFLk1hdHJpeDQiLCJUSFJFRS5WZWN0b3IyIiwiVEhSRUUuUXVhdGVybmlvbiIsIlRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5NYXRoIiwiVEhSRUUuTU9VU0UiLCJUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSIsIlRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSIsIlRIUkVFLkV1bGVyIiwiVEhSRUUuU2NlbmUiLCJUSFJFRS5TdGVyZW9DYW1lcmEiLCJUSFJFRS5OZWFyZXN0RmlsdGVyIiwiVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQiLCJUSFJFRS5XZWJHTFJlbmRlcmVyIiwiVEhSRUUuUmF5Y2FzdGVyIiwiVEhSRUUuRnJ1c3R1bSIsIlRIUkVFLlJFVklTSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztDQUVBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBLEFBQVksT0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7Q0FFbEQ7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0EsQUFBWSxPQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0NBRS9CO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBLEFBQVksT0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7O0NBRW5FO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBLEFBQVksT0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDOztDQUUxRTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBLEFBQVksT0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDOztDQUUzRDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQSxBQUFZLE9BQUMsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDOztDQUV4RTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0FBQ0EsQUFBWSxPQUFDLGVBQWUsR0FBRyxFQUFFLFVBQVUsRUFBRSxZ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QyxFQUFFLENBQUMsRUFBRTs7R0FFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7R0FDckIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztHQUNsQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7O0dBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25EOztHQUVELE9BQU8sQ0FBQyxDQUFDOztHQUVUOztFQUVELFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7O0dBRTNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0dBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ3RCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7R0FFOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztJQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7S0FDVixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOztJQUVELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUUzRSxNQUFNOztJQUVOLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtLQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7S0FDVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOztJQUVELE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcs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Q0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDN0YsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNsRyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDdEcsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNwRztDQUNBLEtBQUs7O0NBRUwsSUFBSSxXQUFXLEVBQUUsV0FBVyxLQUFLLEdBQUc7O0NBRXBDLFFBQVEsTUFBTSxVQUFVLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxNQUFNLENBQUMsRUFBRTs7Q0FFM0UsUUFBUSxTQUFTLFVBQVU7O0NBRTNCLFFBQVEsS0FBSyxDQUFDOztDQUVkLFlBQVksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO0NBQzFGLFlBQVksTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOztDQUUxRixZQUFZLElBQUksQ0FBQyxRQUFRLEdBQUcs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UUFBUSxLQUFLLENBQUM7O0NBRWQsWUFBWSxLQUFLLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRWxELFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7O0NBRXZDLFlBQVksV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0NBQ2xGLFlBQVksTUFBTTs7Q0FFbEIsUUFBUSxLQUFLLENBQUM7O0NBRWQsWUFBWSxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRWhELFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7O0NBRXRDLFlBQVksSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDekUsWUFBWSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztDQUN6RSxZQUFZLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7O0NBRTFELFlBQVksVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUM7O0NBRTFDLFlBQVksTUFBTTs7Q0FFbEIsUUFBUSxLQUFLLENBQUM7O0NBRWQsWUFBWSxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHLE9BQU87O0NBRS9DLFlBQVksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7O0NBRXBDLFlBQVksUUFBUSxDQUFD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QUlGLGFBQWEsRUFBRSxDQUFDO0NBQ3JDLElBQUksSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0NBRXRDLElBQUksTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7O0NBRTlELFFBQVEsTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztDQUMzQyxRQUFRLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0NBRTNDLFFBQVEsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztDQUN2QyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDOztDQUV2RSxRQUFRLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Q0FFeEMsUUFBUSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0NBQzdFLFFBQVEsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUM7O0NBRTlELFFBQVEsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLEdBQUcs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YUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDOztDQUU3QixTQUFTOztDQUVULEtBQUs7O0NBRUw7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksZ0JBQWdCLEVBQUUsWUFBWTs7Q0FFbEMsUUFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Q0FFakUsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksVUFBVSxFQUFFLFlBQVk7O0NBRTVCLFFBQVEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDOztDQUU1QixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksUUFBUSxFQUFFLFlBQVk7O0NBRTFCLFFBQVEsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDOztDQUUxQixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksU0FBUyxFQUFFLFlBQVk7O0NBRTNCLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDOztDQUUzQixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksV0FBVyxFQUFFLFlBQVk7O0NBRTdCLFFBQVEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDOztDQUU3QixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksWUFBWSxFQUFFLFlBQVk7O0NBRTlCLFFBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDOztDQUU5QixLQUFLOztDQUVMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBLElBQUksWUFBWSxFQUFFLFlBQVk7O0NBRTlCLFFBQVEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7Q0FFL0IsS0FBSzs7Q0FFTDtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQSxJQUFJ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
