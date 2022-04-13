import { Cache, Texture, RGBFormat, RGBAFormat, CubeTexture, EventDispatcher, VideoTexture, LinearFilter, SpriteMaterial, Sprite, Color, CanvasTexture, DoubleSide, Vector3, Mesh, BackSide, Object3D, SphereBufferGeometry, MeshBasicMaterial, BufferGeometry, BufferAttribute, ShaderLib, BoxBufferGeometry, ShaderMaterial, Matrix4, Vector2, Quaternion, PlaneBufferGeometry, Math as Math$1, MOUSE, PerspectiveCamera, OrthographicCamera, Euler, Scene, StereoCamera, WebGLRenderTarget, NearestFilter, WebGLRenderer, Raycaster, Frustum, REVISION as REVISION$1 } from 'three';

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
        Cache.enabled = true;

        let cached, request, arrayBufferView, blob, urlCreator, image, reference;

        // Reference key
        for (let iconName in DataImage) {

            if (DataImage.hasOwnProperty(iconName) && url === DataImage[iconName]) {

                reference = iconName;

            }

        }

        // Cached
        cached = Cache.get(reference ? reference : url);

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
        Cache.add(reference ? reference : url, image);

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

        var texture = new Texture(); 

        ImageLoader.load( url, function ( image ) {

            texture.image = image;

            // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
            const isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

            texture.format = isJPEG ? RGBFormat : RGBAFormat;
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

	   texture = new CubeTexture( [] );

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
Media.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

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
        const texture = new VideoTexture( video );

        texture.generateMipmaps = false;
        texture.minFilter = LinearFilter;
        texture.magFilter = LinearFilter;
        texture.format = RGBFormat;
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
    const material = new SpriteMaterial( { color, map: this.createCanvasTexture( canvas ) } );

    Sprite.call( this, material );
    // this = new THREE.Sprite(material);
    console.log('Qua haha 22');

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.context = context;
    this.color = color instanceof Color ? color : new Color( color );    

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
Reticle.prototype = Object.create( Sprite.prototype);
Reticle.prototype.constructor = Reticle;

Reticle.prototype.setColor = Object.assign( Object.create( Sprite.prototype ), {

    /**
     * Set material color
     * @param {THREE.Color} color 
     * @memberOf Reticle
     * @instance
     */
    setColor: function ( color ) {

        this.material.color.copy( color instanceof Color ? color : new Color( color ) );

    },

    /**
     * Create canvas texture
     * @param {HTMLCanvasElement} canvas 
     * @memberOf Reticle
     * @instance
     * @returns {THREE.CanvasTexture}
     */
    createCanvasTexture: function ( canvas ) {

        const texture = new CanvasTexture( canvas );
        texture.minFilter = LinearFilter;
        texture.magFilter = LinearFilter;
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

    Sprite.call( this );

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

    this.material.side = DoubleSide;
    this.material.depthTest = false;
    this.material.transparent = true;
    this.material.opacity = 0;

    this.scaleUpAnimation = new Tween.Tween();
    this.scaleDownAnimation = new Tween.Tween();


    const postLoad = function ( texture ) {

        if ( !this.material ) { return; }

        const ratio = texture.image.width / texture.image.height;
        const textureScale = new Vector3();

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
Infospot.prototype = Object.assign( Object.create( Sprite.prototype ), {

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

    EventDispatcher.call( this );

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

Widget.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

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

    Mesh.call( this, geometry, material );

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

    this.material.side = BackSide;
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

Panorama.prototype = Object.assign( Object.create( Mesh.prototype ), {

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
            invertedObject = new Object3D();
            invertedObject.scale.x = -1;
            invertedObject.scalePlaceHolder = true;
            invertedObject.add( object );

        }

        Object3D.prototype.add.call( this, invertedObject );

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
    const geometry = _geometry || new SphereBufferGeometry( radius, 60, 40 );
    const material = _material || new MeshBasicMaterial( { opacity: 0, transparent: true } );

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

            this.onLoad( new Texture( src ) );

        }

    },

    /**
     * This will be called when image is loaded
     * @param  {THREE.Texture} texture - Texture to be updated
     * @memberOf ImagePanorama
     * @instance
     */
    onLoad: function ( texture ) {

        texture.minFilter = texture.magFilter = LinearFilter;
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
        Cache.remove( this.src );

        if ( map ) { map.dispose(); }

        Panorama.prototype.dispose.call( this );

    }

} );

/**
 * @classdesc Empty panorama
 * @constructor
 */
function EmptyPanorama () {

    const geometry = new BufferGeometry();
    const material = new MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true } );

    geometry.addAttribute( 'position', new BufferAttribute( new Float32Array(), 1 ) );

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
    const shader = Object.assign( {}, ShaderLib[ 'cube' ] );
    const geometry = new BoxBufferGeometry( edgeLength, edgeLength, edgeLength );
    const material = new ShaderMaterial( {

        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        side: BackSide,
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

        this.images.forEach( ( image ) => { Cache.remove( image ); } );

        if ( value instanceof CubeTexture ) {

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
    const geometry = new SphereBufferGeometry( radius, 60, 40 );
    const material = new MeshBasicMaterial( { opacity: 0, transparent: true } );

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

        const videoTexture = new VideoTexture( video );
        videoTexture.minFilter = LinearFilter;
        videoTexture.magFilter = LinearFilter;
        videoTexture.format = RGBFormat;

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

        ImagePanorama.prototype.onLoad.call( this, new Texture( canvas ) );

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

        'tDiffuse': { value: new Texture() },
        'resolution': { value: 1.0 },
        'transform': { value: new Matrix4() },
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
    this.userMouse = new Vector2();

    this.quatA = new Quaternion();
    this.quatB = new Quaternion();
    this.quatCur = new Quaternion();
    this.quatSlerp = new Quaternion();

    this.vectorX = new Vector3( 1, 0, 0 );
    this.vectorY = new Vector3( 0, 1, 0 );

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

        return new PlaneBufferGeometry( size, size * ratio );

    },

    createMaterial: function ( size ) {

        const shader = Object.assign( {}, StereographicShader ), uniforms = shader.uniforms;

        uniforms.zoom.value = size;
        uniforms.opacity.value = 0.0;

        return new ShaderMaterial( {

            uniforms: uniforms,
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            side: BackSide,
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

            const angleX = Math$1.degToRad( x - this.userMouse.x ) * 0.4;
            const angleY = Math$1.degToRad( y - this.userMouse.y ) * 0.4;

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

        texture.minFilter = texture.magFilter = LinearFilter;
		
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
    const geometry = new SphereBufferGeometry( radius, 60, 40 );
    const material = new MeshBasicMaterial( { visible: false });

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
    this.target = new Vector3();

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
    this.mouseButtons = { ORBIT: MOUSE.LEFT, ZOOM: MOUSE.MIDDLE, PAN: MOUSE.RIGHT };

    /*
     * //////////
     * internals
     */

    var scope = this;

    var EPS = 10e-8;
    var MEPS = 10e-5;

    var rotateStart = new Vector2();
    var rotateEnd = new Vector2();
    var rotateDelta = new Vector2();

    var panStart = new Vector2();
    var panEnd = new Vector2();
    var panDelta = new Vector2();
    var panOffset = new Vector3();

    var offset = new Vector3();

    var dollyStart = new Vector2();
    var dollyEnd = new Vector2();
    var dollyDelta = new Vector2();

    var theta = 0;
    var phi = 0;
    var phiDelta = 0;
    var thetaDelta = 0;
    var scale = 1;
    var pan = new Vector3();

    var lastPosition = new Vector3();
    var lastQuaternion = new Quaternion();

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

    var quat = new Quaternion().setFromUnitVectors( object.up, new Vector3( 0, 1, 0 ) );
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

        if ( scope.object instanceof PerspectiveCamera ) {

            // perspective
            var position = scope.object.position;
            var offset = position.clone().sub( scope.target );
            var targetDistance = offset.length();

            // half of the fov is center to top of screen
            targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

            // we actually don't use screenWidth, since perspective camera is fixed to screen height
            scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
            scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

        } else if ( scope.object instanceof OrthographicCamera ) {

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

        if ( scope.object instanceof PerspectiveCamera ) {

            scale /= dollyScale;

        } else if ( scope.object instanceof OrthographicCamera ) {

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

        if ( scope.object instanceof PerspectiveCamera ) {

            scale *= dollyScale;

        } else if ( scope.object instanceof OrthographicCamera ) {

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
OrbitControls.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

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

        rotY += Math$1.degToRad( ( event.touches[ 0 ].pageX - tempX ) / 4 );
        rotX += Math$1.degToRad( ( tempY - event.touches[ 0 ].pageY ) / 4 );

        scope.updateAlphaOffsetAngle( rotY );

        tempX = event.touches[ 0 ].pageX;
        tempY = event.touches[ 0 ].pageY;

    };

    // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

    var setCameraQuaternion = function( quaternion, alpha, beta, gamma, orient ) {

        var zee = new Vector3( 0, 0, 1 );

        var euler = new Euler();

        var q0 = new Quaternion();

        var q1 = new Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

        var vectorFingerY;
        var fingerQY = new Quaternion();
        var fingerQX = new Quaternion();

        if ( scope.screenOrientation == 0 ) {

            vectorFingerY = new Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, -rotX );

        } else if ( scope.screenOrientation == 180 ) {

            vectorFingerY = new Vector3( 1, 0, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == 90 ) {

            vectorFingerY = new Vector3( 0, 1, 0 );
            fingerQY.setFromAxisAngle( vectorFingerY, rotX );

        } else if ( scope.screenOrientation == - 90) {

            vectorFingerY = new Vector3( 0, 1, 0 );
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

        var alpha = scope.deviceOrientation.alpha ? Math$1.degToRad( scope.deviceOrientation.alpha ) + scope.alphaOffsetAngle : 0; // Z
        var beta = scope.deviceOrientation.beta ? Math$1.degToRad( scope.deviceOrientation.beta ) : 0; // X'
        var gamma = scope.deviceOrientation.gamma ? Math$1.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
        var orient = scope.screenOrientation ? Math$1.degToRad( scope.screenOrientation ) : 0; // O

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
DeviceOrientationControls.prototype = Object.assign( Object.create( EventDispatcher.prototype), {

    constructor: DeviceOrientationControls

} );

/**
 * @classdesc Google Cardboard Effect Composer
 * @constructor
 * @external CardboardEffect
 * @param {THREE.WebGLRenderer} renderer 
 */
function CardboardEffect ( renderer ) {

    var _camera = new OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

    var _scene = new Scene();

    var _stereo = new StereoCamera();
    _stereo.aspect = 0.5;

    var _params = { minFilter: LinearFilter, magFilter: NearestFilter, format: RGBAFormat };

    var _renderTarget = new WebGLRenderTarget( 512, 512, _params );
    _renderTarget.scissorTest = true;
    _renderTarget.texture.generateMipmaps = false;

    /*
     * Distortion Mesh ported from:
     * https://github.com/borismus/webvr-boilerplate/blob/master/src/distortion/barrel-distortion-fragment.js
     */

    var distortion = new Vector2( 0.441, 0.156 );

    var geometry = new PlaneBufferGeometry( 1, 1, 10, 20 ).removeAttribute( 'normal' ).toNonIndexed();

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

    var vector = new Vector2();
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

    var material = new MeshBasicMaterial( { map: _renderTarget.texture } );
    var mesh = new Mesh( geometry, material );
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

    var _stereo = new StereoCamera();
    _stereo.aspect = 0.5;
    var size = new Vector2();

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

    this.camera = options.camera || new PerspectiveCamera( this.options.cameraFov, this.container.clientWidth / this.container.clientHeight, 1, 10000 );
    this.scene = options.scene || new Scene();
    this.renderer = options.renderer || new WebGLRenderer( { alpha: true, antialias: false } );
    this.sceneReticle = new Scene();

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

    this.raycaster = new Raycaster();
    this.raycasterPoint = new Vector2();
    this.userMouse = new Vector2();
    this.updateCallbacks = [];
    this.requestAnimationId = null;

    this.cameraFrustum = new Frustum();
    this.cameraViewProjectionMatrix = new Matrix4();

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
Viewer.prototype = Object.assign( Object.create( EventDispatcher.prototype ), {

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

        chv = this.camera.getWorldDirection( new Vector3() );
        cvv = chv.clone();

        vptc = this.panorama.getWorldPosition( new Vector3() ).sub( this.camera.getWorldPosition( new Vector3() ) );

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

            const invertXVector = new Vector3( -1, 1, 1 );

            this.tweenControlCenter( object.getWorldPosition( new Vector3() ).multiply( invertXVector ), duration, easing );

        } else {

            this.tweenControlCenter( object.getWorldPosition( new Vector3() ), duration, easing );

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
            const converter = new Vector3( -1, 1, 1 );
            const world = this.panorama.getWorldPosition( new Vector3() );
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
                    const { x, y } = this.getScreenVector( child.getWorldPosition( new Vector3() ) );
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
        if ( Cache && Cache.enabled ) {

            Cache.clear();

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
                scope.currentPanoAngle = scope.camera.rotation.y - Math$1.degToRad( 90 );
                scope.fovAngle = Math$1.degToRad( scope.camera.fov ) ;
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

        Cache.clear();

    }

} );

if ( REVISION$1 != THREE_REVISION ) {

    console.warn( `three.js version is not matched. Please consider use the target revision ${THREE_REVISION}` );

}

/**
 * Panolens.js
 * @author pchen66
 * @namespace PANOLENS
 */
window.TWEEN = Tween;

export { BasicPanorama, CONTROLS, CONTROL_BUTTONS, CameraPanorama, CubePanorama, CubeTextureLoader, DataImage, EmptyPanorama, GoogleStreetviewPanorama, ImageLittlePlanet, ImageLoader, ImagePanorama, Infospot, LittlePlanet, MODES, Media, OUTPUTS, Panorama, REVISION, Reticle, THREE_REVISION, THREE_VERSION, TextureLoader, VERSION, VideoPanorama, Viewer, Widget };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL0RhdGFJbWFnZS5qcyIsIi4uL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qcyIsIi4uL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL21lZGlhL01lZGlhLmpzIiwiLi4vc3JjL2ludGVyZmFjZS9SZXRpY2xlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0d2VlbmpzL3R3ZWVuLmpzL3NyYy9Ud2Vlbi5qcyIsIi4uL3NyYy9pbmZvc3BvdC9JbmZvc3BvdC5qcyIsIi4uL3NyYy93aWRnZXQvV2lkZ2V0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvRW1wdHlQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DdWJlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvQmFzaWNQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hLmpzIiwiLi4vc3JjL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlci5qcyIsIi4uL3NyYy9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEuanMiLCIuLi9zcmMvc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYS5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvT3JiaXRDb250cm9scy5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QuanMiLCIuLi9zcmMvbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0LmpzIiwiLi4vc3JjL3ZpZXdlci9WaWV3ZXIuanMiLCIuLi9zcmMvQ2hlY2suanMiLCIuLi9zcmMvUGFub2xlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBSRVZJU0lPTlxyXG4gKiBAbW9kdWxlIFJFVklTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlJFVklTSU9OXHJcbiAqIEB0eXBlIHtzdHJpbmd9IHJldmlzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUkVWSVNJT04gPSB2ZXJzaW9uLnNwbGl0KCAnLicgKVsgMSBdO1xyXG5cclxuLyoqXHJcbiAqIFZFUlNJT05cclxuICogQG1vZHVsZSBWRVJTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZFUlNJT05cclxuICogQHR5cGUge3N0cmluZ30gdmVyc2lvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSB2ZXJzaW9uO1xyXG5cclxuLyoqXHJcbiAqIFRIUkVFSlMgUkVWSVNJT05cclxuICogQG1vZHVsZSBUSFJFRV9SRVZJU0lPTlxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5USFJFRV9SRVZJU0lPTlxyXG4gKiBAdHlwZSB7c3RyaW5nfSB0aHJlZWpzIHJldmlzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVEhSRUVfUkVWSVNJT04gPSBkZXBlbmRlbmNpZXMudGhyZWUuc3BsaXQoICcuJyApWyAxIF07XHJcblxyXG4vKipcclxuICogVEhSRUVKUyBWRVJTSU9OXHJcbiAqIEBtb2R1bGUgVEhSRUVfVkVSU0lPTlxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5USFJFRV9WRVJTSU9OXHJcbiAqIEB0eXBlIHtzdHJpbmd9IHRocmVlanMgdmVyc2lvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRIUkVFX1ZFUlNJT04gPSBkZXBlbmRlbmNpZXMudGhyZWUucmVwbGFjZSggL1teMC05Ll0vZywgJycgKTtcclxuXHJcbi8qKlxyXG4gKiBDT05UUk9MU1xyXG4gKiBAbW9kdWxlIENPTlRST0xTXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkNPTlRST0xTLk9SQklUXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUkJJVCAwXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERVZJQ0VPUklFTlRBVElPTiAxXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ09OVFJPTFMgPSB7IE9SQklUOiAwLCBERVZJQ0VPUklFTlRBVElPTjogMSB9O1xyXG5cclxuLyoqXHJcbiAqIE1PREVTXHJcbiAqIEBtb2R1bGUgTU9ERVNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuTU9ERVMuVU5LTk9XTlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gVU5LTk9XTiAwXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT1JNQUwgMVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ0FSREJPQVJEIDJcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNURVJFTyAzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTU9ERVMgPSB7IFVOS05PV046IDAsIE5PUk1BTDogMSwgQ0FSREJPQVJEOiAyLCBTVEVSRU86IDMgfTtcclxuXHJcbi8qKlxyXG4gKiBDT05UUk9MX0JVVFRPTlNcclxuICogQG1vZHVsZSBDT05UUk9MX0JVVFRPTlNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuVklFV0VSLkNPTlRST0xfQlVUVE9OU1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlVMTFNDUkVFTlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0VUVElOR1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklERU9cclxuICovXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MX0JVVFRPTlMgPSB7IEZVTExTQ1JFRU46ICdmdWxsc2NyZWVuJywgU0VUVElORzogJ3NldHRpbmcnLCBWSURFTzogJ3ZpZGVvJyB9O1xyXG5cclxuLyoqXHJcbiAqIE9VVFBVVFNcclxuICogQG1vZHVsZSBPVVRQVVRTXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZJRVdFUi5PVVRQVVRTXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBOT05FXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDT05TT0xFXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPVkVSTEFZXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT1VUUFVUUyA9IHsgTk9ORTogJ25vbmUnLCBDT05TT0xFOiAnY29uc29sZScsIE9WRVJMQVk6ICdvdmVybGF5JyB9O1xyXG5cclxuIiwiLyoqXHJcbiAqIERhdGEgVVJJIEltYWdlc1xyXG4gKiBAbW9kdWxlIERhdGFJbWFnZVxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5EYXRhSW1hZ2UuSW5mb1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSW5mbyBJbmZvcm1hdGlvbiBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBcnJvdyBBcnJvdyBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuRW50ZXIgRnVsbHNjcmVlbiBFbnRlciBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuTGVhdmUgRnVsbHNjcmVlbiBMZWF2ZSBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BsYXkgVmlkZW8gUGxheSBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BhdXNlIFZpZGVvIFBhdXNlIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFdoaXRlVGlsZSBXaGl0ZSBUaWxlIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNldHRpbmcgU2V0dGluZ3MgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hldnJvblJpZ2h0IENoZXZyb24gUmlnaHQgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hlY2sgQ2hlY2sgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlld0luZGljYXRvciBWaWV3IEluZGljYXRvciBJY29uXHJcbiAqL1xyXG5jb25zdCBEYXRhSW1hZ2UgPSB7XHJcbiAgICBJbmZvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEQmtsRVFWUjQydTJiUDA4VVFSaUhuekZhU1lDSS94b2tzZEJJcUd3SWlZV1JVQklTRXhwQ1EwZWozOEZXT21sSUtLaG9NUEViYUN4c3JySGlZclFnT1NsUUVhSUNyVCtMSFNQWnpOenQzczNjM0huN2xIdkx6dnY4MkwyZG0zMFhLaW9xS2dZWTA2MkJKRjBIcG9BN3dBUndCYmhzUHo0RGpvRUc4QW5ZTmNaOFN4MU9wOElYSk0xS1dwZFVWM25xOW05bkpWMUk3Vk5HZkV6U00wbU5OcVI5Tk93eHgxTDdOUk1mbGJRbTZTU2dlSjRUTzhab2F0KzgvTEtrZzRqaWVRNGtMYWYyUnRLd3BKMHVpdWZaa1RTY1NuNVMwbDVDK2Ivc1NacnN0dnlNcEtQVTV1YzRralRUamt2cGVZQ2thZUExLys3aHZjSVpNR3VNcVVVTFFOSVU4QWE0bHRyV3d5SHd5Qml6R3p3QVNTUEFlK0IyYXNzVzdBSDNqVEUvaSt4Y1pvYTEyUWZ5MkJvM2krNWNLQUJsOTl6RjFHWWxXRlRCZVVMTFMwRFpyT3NEY0ROZ2dUWGdjMjdiTFdBNjRCaGZnSHZHbUI4ZEhVWFoxRE0wUzQ1eGxpS01zOWJLcitrbElPa3FzQnJ3djlKdFZxMURld0VBVDRDaDFCWWRNR1FkeWdlZzdEZjRTbXFEQUt5b3lYcENzelBnSVRDZXV2b0FqRnVYMGdFOGpsalVkdjdiQ3RpT09KN1hwZFVaOEwvZ2RYSE9BNVF0WUg1TlhYVmdicmdXV24xbndGVHFhaVBnZFBJRmNEZDF0UkZ3T2wzMDdEd1J1WmdYd0x2Y3RnZkEwNGhqT3AxOEFjUmVaNnNaWTE2ZTN5RHBVdVF4blU2K1MyQWtjakVwY0RyMXp4T1hTUGdDS0xTYTBtYzRuWHdCL0VwZGJRU2NUcjRBR3FtcmpZRFR5UmZBeDlUVlJzRHA1QXVnOExKeUgrRjBjZ1pnNTh6MTFCVUhwTzVydUdoMkczeWJ1dXFBZUYyYUJmQXFkZFVCOGJxME9nUDJVMWNlZ0gzYU9RT01NYitCcmRUVkIyREx1cFFMd0xJT25LWTI2SUJUNitDbGFRREdtTy9BUm1xTER0aXdEbjdIVmtjWStFZGpOb1RsQ0krdFloTzJpVXBwbTZIS3NsUFVxMnFRS0hwVWU4QUZzamFVWHVVUVdDZ3FYeW9BRzhJdU1FL1drTlJybkFIelpmcURTZ2RnUTZnQmMyVGQzYjNDTVRCWHRrT3NJelRJalpMblFoamNWdGxjRUlQWkxKMExvVnZ0OHMvVmErM3l1U0FHODRVSlJ4Qjk4Y3BNOWRKVVJVVkZ4U0R6QnhLZGU0TGszL2gyQUFBQUFFbEZUa1N1UW1DQycsIFxyXG4gICAgQXJyb3c6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURQa2xFUVZSNDJ1MmJNVXNjUVJpRzMwL1NSYUpFSTFaS1VpUkVyTklFTFJVYlFZU0FuWDhocFZVZ2tEWXAwd2dXVmpZVytRY0phUXpZcExvakpJWGh0RERFS0JwajY1dGk1OGl4bWRtYjJadlo3K1QyQVVIdWRtZm1lWGYyYm5iM082Q21wcVptZ0pHcU9pSTVBV0FXd0VNQTB3RHVBcmh0M3I0Q2NBYWdCZUFiZ0lhSS9OUU9wMWZoSVpLTEpOK1NiREtjcHRsM2tlU1F0aytJK0JqSlZ5UmJKYVJkdEV5Ylk5cCtSZUtqSk4rUXZJd29udWZTOURHcTdadVhYeWQ1bkZBOHp6SEpkVzF2a0x4RGNyZEM4VHk3Sk85b3ljK1FQRkNVYjNOQWNxWnErVG1TcDlybUhaeVNuQ3ZqRXJ3T0lQa1V3SHY4K3c3dkY2NEFMSXJJZnJJQVNNNEMrQURnbnJhdGd4TUFDeUxTaUI0QXlSRUFud0U4MExic3dnR0FKeUp5NGJOeHlBcHI2d2JJdzR4eHkzZGpyd0NZZmVldWFac0ZzRWJQZFVMWFU0RFpxdXNMZ01rRUEyMVAwNUVFYmY4QThGaEV6b3MyOHBrQkx4TEtMNXMvci9NMWtFa3o5dktRSEdlYXRmMDV5Zm1PZnViTmE3RzVKRGxlNU5odEJqd0hNQno1eUZ3QVdCYVJUKzBYelA4cFpzS3djUWlIMmZYOFljb2piK2t6eFV3NFpKbjdDU1FYcXBSUEhNS0NxNytpWko3MU12ZHkvRGZ0WFNRNkhjSmRTRGFxUFBLVy9tUE9CTytsY2J2ekNVMzVSQ0ZNMlBwd25RS3paUWZkZ2ZlMGR4SDVkTEE2dVFKNHBDMmZJQVNya3l1QTZYNlFqeHlDMWNrVlFObjdiTkhsSTRaZ2RYSUZVT2JpSkpsOHBCQ3NUakdmdUl3QTJDdjRGTjd4Yllqa2pxc1JBSHVJZVBYb0NpREYxWmsyVmlkWEFMKzFSNXNBcTVNcmdKYjJhQk5nZFhJRjhGVjd0QW13T3JrQ0NGczczd3lzVHRZQVRIRkNVM3ZFRVdtNkNpNkt2Z1kvYW84NklrNlhvZ0RlYVk4NklrNlhialBnU0h2a0VUaEN3UXk0NVhwRFJLNUpiZ040R1drZ1V5UjlINjVNUlF4Z1cwU3VuWjVGZXpLN3Bmd2Q4ZThNVjhVZkFQZEY1SmRyZzhKckFiUGpwclpGRDJ3V3lRUDZqOFpTRXVmUm1HbGdROXVtQkJ2ZDVJT2diakZVS0x1K1huV0JoRytycHNGVlpHVW8vY29KZ0ZWZithQUFUQWdOQUN2SUNwTDZqU3NBS3lIMVFjRUJtQkQyQVN3aHErN3VGODRBTElWV2lQVUVCN2xRc2lPRXdTMlZ6UVV4bU1YU3VSQ3FLcGQvelg0cmw4OEZNWmcvbUxBRWNTTitNbFAvYUtxbXBxWm1rUGtMMGhTandPcE5LeHdBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICBGdWxsc2NyZWVuRW50ZXI6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSWpSa1pHUmtaR0lpQm9aV2xuYUhROUlqSTBJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhkcFpIUm9QU0l5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S0lDQWdJRHh3WVhSb0lHUTlJazB3SURCb01qUjJNalJJTUhvaUlHWnBiR3c5SW01dmJtVWlMejRLSUNBZ0lEeHdZWFJvSUdROUlrMDNJREUwU0RWMk5XZzFkaTB5U0RkMkxUTjZiUzB5TFRSb01sWTNhRE5XTlVnMWRqVjZiVEV5SURkb0xUTjJNbWcxZGkwMWFDMHlkak42VFRFMElEVjJNbWd6ZGpOb01sWTFhQzAxZWlJdlBnbzhMM04yWno0PScsXHJcbiAgICBGdWxsc2NyZWVuTGVhdmU6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTBTREU1VmpFMlNERTJWakU1U0RFMFZqRTBUVFVzTVRSSU1UQldNVGxJT0ZZeE5rZzFWakUwVFRnc05VZ3hNRll4TUVnMVZqaElPRlkxVFRFNUxEaFdNVEJJTVRSV05VZ3hObFk0U0RFNVdpSWdMejQ4TDNOMlp6ND0nLFxyXG4gICAgVmlkZW9QbGF5OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRUZ3NOUzR4TkZZeE9TNHhORXd4T1N3eE1pNHhORXc0TERVdU1UUmFJaUF2UGp3dmMzWm5QZz09JyxcclxuICAgIFZpZGVvUGF1c2U6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTVMakUwU0RFNFZqVXVNVFJJTVRSTk5pd3hPUzR4TkVneE1GWTFMakUwU0RaV01Ua3VNVFJhSWlBdlBqd3ZjM1puUGc9PScsXHJcbiAgICBXaGl0ZVRpbGU6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFCQU1BQUFBR1ZzbkpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUIxV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlXRTFRSUVOdmNtVWdOUzQwTGpBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJK0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S0F0aUFCUUFBQUNSUVRGUkZBQUFBQUFBQUJnWUdCd2NISGg0ZUt5c3J4OGZIeTh2THpNek03T3pzQUFBQUJnWUcrcTdTWmdBQUFBcDBVazVUQVA3Ky92NysvdjcrL2lKeC9hOEFBQU93U1VSQlZIamE3ZDBoYnNOQUVBVlFvNlNGSTZYRWNBTERjZ05MdlVCdkVCUVZocGtXVllXbGhTc1ZGUzd0NVFJc2hSdDY5NWxFQVNaUCs4YzdhMWt6REwxZnorL3p5dXZ6cDZGYnZvZGRyTDZ1RGQxeUdaNWVYbGRlYjE4TjNmSXg3QSs1OHBybWhtNjVEZnZEY2QwOTUybHU2SmFiRmJEL3pWcHJaajFsemN5cytmajl6OHhUWnRiVDhydjh5V2x1NkJZQUlnQUFBQUFBQUFBQUFBQkFNNlFYRUFFQUFBQUFBQUFBZ0oyZ25hQUlpSUEzUTJxQUdnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRSnNBRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVmxmQWNaM2FlWm9idXNVS01HQmhWNktVRWxIR0tCRVJKUjYvZnhFeFJrUVpsOS9sVDhTMW9Wc3VocXlZTW1QS2pDa3p2ZmNDcHN4b2hyd1kwUTA2RUFFQUFBQUFBQUFBQUFDZ0dkSUxpQUFBQUFBQUFBQUF3RTdRVGxBRVJNQ2JJVFZBRFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdLbXdRMUVSQUFBQUFBQ1BRWTlCRVJBQkVSQUJFUkFCRVJBQkVSQUJBQUFBQUFBQUFJQ2RvSjJnQ0lpQVQyYlVBRFZBRFJBQkVRQUFRQkZVQkVWQUJFUmdFeXZBbEptK1Y0QXBNNmJNbURKanlvd3BNNmJNZE4wTG1ES2pHZkppUkRmb1FBUUFBQUFBQUFBQUFBQ0Faa2d2SUFJQUFBQUFBQUFBQUR0Qk8wRVJFQUZ2aHRRQU5RQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS2ZDRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVGF3QVUyYjZYZ0dtekpneVk4cU1LVE9tekpneTAzVXZZTXFNWnNpTEVkMmdBeEVBQUFBQUFBQUFBQUFBbWlHOWdBZ0FBQUFBQUFBQUFPd0U3UVJGUUFTOEdWSUQxQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUp3S094UVZBUUFBQUFEd0dQUVlGQUVSRUFFUkVBRVJFQUVSRUFFUkFBQUFBQUFBQUFEWUNkb0ppb0FJK0dSR0RWQUQxQUFSRUFFQUFCUkJSVkFFUkVBRU5yRUNUSm5wZXdXWU1tUEtqQ2t6cHN5WU1tUEtUTmU5Z0Nrem1pRXZSblNERGtRQUFBQUFBQUFBQUFBQWFJYjBBaUlBQUFBQUFBQUFBTEFUdEJNVUFSSHdaa2dOVUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQXE3RkJVQkFBQUFBREFZOUJqVUFSRVFBUkVRQVJFUUFSRVFBUkVBQUFBQUFBQUFBQmdKMmduS0FJaTRKTVpOVUFOVUFORVFBUUFBRkFFRlVFUkVBRVIyTVFLTUdXbTd4Vmd5b3dwTTUwUFdlbjl1Z05HWHoxWGFvY0FGZ0FBQUFCSlJVNUVya0pnZ2c9PScsXHJcbiAgICBTZXR0aW5nOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEbjBsRVFWUjQydTJielVzVlVSakdueU82Q1B6QU1uVGpwcEFvM0xUd0gxQ3FUZmF4YmVPaVJTMzdBMHdYdFJPRlZpMWFSQnMzTFdvaFNJR2JRQVFYVmlCR1JoRzBVSVJLVUNwSzdxL0ZuT0IydWM2Y09YTm1SbkdlM2VXK0g4Lzd6TGxuM3ZOeHBRb1ZLbFE0d2pCRkpBRk9TUnFYMU83b3NpdnB2akhtVTFuQ2hCWmdsdlNZTFlKYlMwRWFuQ3ZJSnpXSytnbnN5SDM0LzhPdU1hWWpiMjY1andDZ3o2TjRTV3Ezdm9kYkFFbW5TL0t0QkRnb0FneVU1QnRlQU9Ba01BUGNCcm9jN1Bza0RXZmdOK3d5RHdCZGx0TU1jREkzdFlCbmRlL3BIZUFSTU5URXJnZDRBUHp3ZVA4MzRvZU4xZE1rejVEbHNGTm4veXl2NGtkaVNLNEF0NEFPNENxd0dhRHdSbXphMkIwMjEwcU03WWhyWFU1OUFOQXE2Yldrd1FUVG41S081ZklFMHVWWWxYVGVHTE9YRk14MURyamxVTHdLS040MXg2RGxuSWpFRVFDY2tQUmUwb2tDaWd1SnI1TE9HR08reGhtNWpJQ0pRMWk4TE9lSkpLUFlFUUFNS3ZydHQ1WmRqU2YyRk0wRnEvc1pKSTJBNlVOY3ZDejM2VGlEZlVjQWNFMVNQdS9VNk1tOGsvVEZmdTZYZEZiNWlYM2RHUE04bFFmd05vZDMrVG93Qm5RM3lkZHR2MXZQSWUrYjFKSUJpd0VKMUlBSjIwOGs1VzIxdHJXQStWLzVDSEFjbUF0VS9BMlAvRGNDaVRBSEhFOHRnQ1ZoZ0x2QVhnWUNrMTdKby95VEdmTHVXZTdaZDcyQUM4Q1dCNG4zT0F6N21MeXROa1phYkFFWE1oZmVRS1lmV0VwSlpDeEEzckdVT1plQS9xREYxNUZwQXo0N0V2bE5rOW5lSTJlM2plV0N6MEJibXZpcE5rU01NWDhrdVNaWU04Wjh6eXFBamJIbWFONW1PZVlqZ0lYclU5M01XcnhIck5RanJxaURrUU1MSHdHK09kcUYzTk4zamVYS3pVOEFvRjFTemRIOFhLaEpVTzdIWkRYTE1id0F3SUNrSlVVTEZ4ZTBTYnFTVlFBYnczWGk3WmUwWkxtR0F6QUtiSHMwSkdVMVF0dkFhSWpDVzRCN1pPdkp5MnFGYTVhNzMwUlB0QmlhejBDZ25raVppNkY1ZkJaRFZNdmhvN0VoY3VTM3hKSjJoVjlJdXBnVHFhTHcwaGh6YWI4dnEyM3hPRy9yK0xEc0tqTGdZVnp4VW5VMGx0d0syd0RlelV5Sm1Fd3FYZ3AvUEw0cnZ4dGhhZUNTSSt6eHVBMTBKOFprV2RKTlNiMlNMa3ZheUtId0RSdTcxK1phanJHOTQxSjhhZ0FMRFEzR1UvYS9Jdk1rWUNQem1DYnRMTkVWbWFjTnRnczVpUDlmWVZORVYxUTZIZXo3eU5aU0wrSjJTYXJUY3BxaXlWMmlVa0cwSXZQRnZiejVGYkVuK0tFazN3TWp3TWVTZkNzQlhGQmRseTlDQVBrOXlkeWZmcEVDdUI1dFpmVkpqYUtXdWVPU2ZpbmxuNllLNGxhaFFvVUtSeGQvQWNSUEdUY1FDQVVRQUFBQUFFbEZUa1N1UW1DQycsXHJcbiAgICBDaGV2cm9uUmlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRndU5Ua3NNVFl1TlRoTU1UTXVNVGNzTVRKTU9DNDFPU3czTGpReFRERXdMRFpNTVRZc01USk1NVEFzTVRoTU9DNDFPU3d4Tmk0MU9Gb2lJQzgrUEM5emRtYysnLFxyXG4gICAgQ2hlY2s6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRJeExEZE1PU3d4T1V3ekxqVXNNVE11TlV3MExqa3hMREV5TGpBNVREa3NNVFl1TVRkTU1Ua3VOVGtzTlM0MU9Vd3lNU3czV2lJZ0x6NDhMM04yWno0PScsXHJcbiAgICBWaWV3SW5kaWNhdG9yOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUENGRVQwTlVXVkJGSUhOMlp5QlFWVUpNU1VNZ0lpMHZMMWN6UXk4dlJGUkVJRk5XUnlBeExqRXZMMFZPSWlBaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtJajRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCcFpEMGlkbWxsZHkxcGJtUnBZMkYwYjNJaUlHaGxhV2RvZEQwaU16QWlJSGRwWkhSb1BTSXpNQ0lnZG1sbGQwSnZlRDBpTFRJdU5TQXRNU0F6TUNBek1DSStDZ2s4YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBpNXpkREI3YzNSeWIydGxMWGRwWkhSb09qSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZNVEE3Wm1sc2JEcHViMjVsTzMwdWMzUXhlM04wY205clpTMTNhV1IwYURvMk8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1R3dmMzUjViR1UrQ2drOFp6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTklERXlMalVnTUNCQklERXlMalVnTVRJdU5TQXdJREFnTUNBdE1USXVOU0F3SUVFZ01USXVOU0F4TWk0MUlEQWdNQ0F3SURFeUxqVWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkRElpSUdROUlrMGdNVE1nTUNCTUlERXdJRElnVENBeE5pQXlJRm9pUGp3dmNHRjBhRDRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F5SWlCa1BTSk5JRElnTUNCQklESWdNaUF3SURBZ01DQXRNaUF3SUVFZ01pQXlJREFnTUNBd0lESWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREVpSUdsa1BTSnBibVJwWTJGMGIzSWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVzTUN3d0xERXNNVE1zTVRVdU5Ta2lQand2Y0dGMGFENEtDVHd2Wno0S1BDOXpkbWMrJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRGF0YUltYWdlIH07IiwiaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlLmpzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgSW1hZ2VMb2FkZXJcclxuICogQGRlc2NyaXB0aW9uIEltYWdlIGxvYWRlciB3aXRoIHByb2dyZXNzIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzfVxyXG4gKi9cclxuY29uc3QgSW1hZ2VMb2FkZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlXHJcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5JbWFnZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxyXG4gICAgICogQG1ldGhvZCBsb2FkXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yID0gKCkgPT4ge30gKSB7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBjYWNoZVxyXG4gICAgICAgIFRIUkVFLkNhY2hlLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGVkLCByZXF1ZXN0LCBhcnJheUJ1ZmZlclZpZXcsIGJsb2IsIHVybENyZWF0b3IsIGltYWdlLCByZWZlcmVuY2U7XHJcblxyXG4gICAgICAgIC8vIFJlZmVyZW5jZSBrZXlcclxuICAgICAgICBmb3IgKGxldCBpY29uTmFtZSBpbiBEYXRhSW1hZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChEYXRhSW1hZ2UuaGFzT3duUHJvcGVydHkoaWNvbk5hbWUpICYmIHVybCA9PT0gRGF0YUltYWdlW2ljb25OYW1lXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IGljb25OYW1lO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhY2hlZFxyXG4gICAgICAgIGNhY2hlZCA9IFRIUkVFLkNhY2hlLmdldChyZWZlcmVuY2UgPyByZWZlcmVuY2UgOiB1cmwpO1xyXG5cclxuICAgICAgICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNhY2hlZC5jb21wbGV0ZSAmJiBjYWNoZWQuc3JjICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCggY2FjaGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCBjYWNoZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IGEgbmV3IFhNTEh0dHBSZXF1ZXN0XHJcbiAgICAgICAgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsICdpbWcnKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRvIGNhY2hlXHJcbiAgICAgICAgVEhSRUUuQ2FjaGUuYWRkKHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCwgaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBvbkltYWdlTG9hZGVkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdXJsQ3JlYXRvci5yZXZva2VPYmplY3RVUkwoaW1hZ2Uuc3JjKTtcclxuICAgICAgICAgICAgb25Mb2FkKGltYWdlKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25JbWFnZUxvYWRlZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5jcm9zc09yaWdpbiA6ICcnO1xyXG5cclxuICAgICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYubnBtX2xpZmVjeWNsZV9ldmVudCAhPT0gJ3Rlc3QnKSB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCAmJiB0aGlzLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIG9uRXJyb3IgKTtcclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICAoICFldmVudCApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbG9hZGVkLCB0b3RhbCwgbGVuZ3RoQ29tcHV0YWJsZSB9ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIGxlbmd0aENvbXB1dGFibGUgKSB7XHJcblx0XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZCwgdG90YWwgfSApO1xyXG5cdFxyXG4gICAgICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlbmQnLCBldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAgKCAhZXZlbnQgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldDogeyByZXNwb25zZSB9IH0gPSBldmVudDtcclxuXHJcbiAgICAgICAgICAgIGFycmF5QnVmZmVyVmlldyA9IG5ldyBVaW50OEFycmF5KCByZXNwb25zZSApO1xyXG4gICAgICAgICAgICBibG9iID0gbmV3IHdpbmRvdy5CbG9iKCBbIGFycmF5QnVmZmVyVmlldyBdICk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgb25JbWFnZUxvYWRlZCwgZmFsc2UgKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcclxuXHRcclxuICAgICAgICB9ICk7XHJcblx0XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG5cdFxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IEltYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgVGV4dHVyZUxvYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gVGV4dHVyZSBsb2FkZXIgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qc31cclxuICovXHJcbmNvbnN0IFRleHR1cmVMb2FkZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHRleHR1cmVcclxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLlRleHR1cmVMb2FkZXIubG9hZCggSU1BR0VfVVJMIClcclxuICAgICAqIEBtZXRob2QgbG9hZFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHVybCAgICAgICAgLSBBbiBpbWFnZSB1cmxcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7VEhSRUUuVGV4dHVyZX0gICBcdCAtIEltYWdlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzLCBvbkVycm9yICkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7IFxyXG5cclxuICAgICAgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAvLyBKUEVHcyBjYW4ndCBoYXZlIGFuIGFscGhhIGNoYW5uZWwsIHNvIG1lbW9yeSBjYW4gYmUgc2F2ZWQgYnkgc3RvcmluZyB0aGVtIGFzIFJHQi5cclxuICAgICAgICAgICAgY29uc3QgaXNKUEVHID0gdXJsLnNlYXJjaCggL1xcLihqcGd8anBlZykkLyApID4gMCB8fCB1cmwuc2VhcmNoKCAvXmRhdGFcXDppbWFnZVxcL2pwZWcvICkgPT09IDA7XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IGlzSlBFRyA/IFRIUkVFLlJHQkZvcm1hdCA6IFRIUkVFLlJHQkFGb3JtYXQ7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgb25Mb2FkKCB0ZXh0dXJlICk7XHJcblxyXG4gICAgICAgIH0sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IFRleHR1cmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXIuanMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBDdWJlVGV4dHVyZUxvYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gQ3ViZSBUZXh0dXJlIExvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlci5qc31cclxuICovXHJcbmNvbnN0IEN1YmVUZXh0dXJlTG9hZGVyID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCA2IGltYWdlcyBhcyBhIGN1YmUgdGV4dHVyZVxyXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggWyAncHgucG5nJywgJ254LnBuZycsICdweS5wbmcnLCAnbnkucG5nJywgJ3B6LnBuZycsICduei5wbmcnIF0gKVxyXG4gICAgICogQG1ldGhvZCBsb2FkXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gICB1cmxzICAgICAgICAtIGFycmF5IG9mIDYgdXJscyB0byBpbWFnZXMsIG9uZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBDdWJlVGV4dHVyZS4gVGhlIHVybHMgc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiBwb3MteCwgbmVnLXgsIHBvcy15LCBuZWcteSwgcG9zLXosIG5lZy16XHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge1RIUkVFLkN1YmVUZXh0dXJlfSAgIC0gQ3ViZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJscywgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MgPSAoKSA9PiB7fSwgb25FcnJvciApIHtcclxuXHJcblx0ICAgdmFyIHRleHR1cmUsIGxvYWRlZCwgcHJvZ3Jlc3MsIGFsbCwgbG9hZGluZ3M7XHJcblxyXG5cdCAgIHRleHR1cmUgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoIFtdICk7XHJcblxyXG5cdCAgIGxvYWRlZCA9IDA7XHJcblx0ICAgcHJvZ3Jlc3MgPSB7fTtcclxuXHQgICBhbGwgPSB7fTtcclxuXHJcblx0ICAgdXJscy5tYXAoIGZ1bmN0aW9uICggdXJsLCBpbmRleCApIHtcclxuXHJcblx0XHQgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XHJcblxyXG5cdFx0XHQgICB0ZXh0dXJlLmltYWdlc1sgaW5kZXggXSA9IGltYWdlO1xyXG5cclxuXHRcdFx0ICAgbG9hZGVkKys7XHJcblxyXG5cdFx0XHQgICBpZiAoIGxvYWRlZCA9PT0gNiApIHtcclxuXHJcblx0XHRcdFx0ICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdCAgIG9uTG9hZCggdGV4dHVyZSApO1xyXG5cclxuXHRcdFx0ICAgfVxyXG5cclxuXHRcdCAgIH0sIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG5cdFx0XHQgICBwcm9ncmVzc1sgaW5kZXggXSA9IHsgbG9hZGVkOiBldmVudC5sb2FkZWQsIHRvdGFsOiBldmVudC50b3RhbCB9O1xyXG5cclxuXHRcdFx0ICAgYWxsLmxvYWRlZCA9IDA7XHJcblx0XHRcdCAgIGFsbC50b3RhbCA9IDA7XHJcblx0XHRcdCAgIGxvYWRpbmdzID0gMDtcclxuXHJcblx0XHRcdCAgIGZvciAoIHZhciBpIGluIHByb2dyZXNzICkge1xyXG5cclxuXHRcdFx0XHQgICBsb2FkaW5ncysrO1xyXG5cdFx0XHRcdCAgIGFsbC5sb2FkZWQgKz0gcHJvZ3Jlc3NbIGkgXS5sb2FkZWQ7XHJcblx0XHRcdFx0ICAgYWxsLnRvdGFsICs9IHByb2dyZXNzWyBpIF0udG90YWw7XHJcblxyXG5cdFx0XHQgICB9XHJcblxyXG5cdFx0XHQgICBpZiAoIGxvYWRpbmdzIDwgNiApIHtcclxuXHJcblx0XHRcdFx0ICAgYWxsLnRvdGFsID0gYWxsLnRvdGFsIC8gbG9hZGluZ3MgKiA2O1xyXG5cclxuXHRcdFx0ICAgfVxyXG5cclxuXHRcdFx0ICAgb25Qcm9ncmVzcyggYWxsICk7XHJcblxyXG5cdFx0ICAgfSwgb25FcnJvciApO1xyXG5cclxuXHQgICB9ICk7XHJcblxyXG5cdCAgIHJldHVybiB0ZXh0dXJlO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFVzZXIgTWVkaWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uc3RyYWludHM9eyB2aWRlbzogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwODAgfSwgZmFjaW5nTW9kZTogeyBleGFjdDogJ2Vudmlyb25tZW50JyB9IH0sIGF1ZGlvOiBmYWxzZSB9XVxyXG4gKi9cclxuZnVuY3Rpb24gTWVkaWEgKCBjb25zdHJhaW50cyApIHtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0Q29uc3RyYWludHMgPSB7IHZpZGVvOiB7IHdpZHRoOiB7IGlkZWFsOiAxOTIwIH0sIGhlaWdodDogeyBpZGVhbDogMTA4MCB9LCBmYWNpbmdNb2RlOiB7IGV4YWN0OiAnZW52aXJvbm1lbnQnIH0gfSwgYXVkaW86IGZhbHNlIH07XHJcblxyXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oIGRlZmF1bHRDb25zdHJhaW50cywgY29uc3RyYWludHMgKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmRldmljZXMgPSBbXTtcclxuICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcclxuICAgIHRoaXMucmF0aW9TY2FsYXIgPSAxO1xyXG4gICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gMDtcclxuXHJcbn07XHJcblxyXG5NZWRpYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNldFNjZW5lOiBmdW5jdGlvbiAoIHNjZW5lICkge1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVudW1lcmF0ZSBkZXZpY2VzXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGVudW1lcmF0ZURldmljZXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlcztcclxuICAgICAgICBjb25zdCByZXNvbHZlZFByb21pc2UgPSBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7IHJlc29sdmUoIGRldmljZXMgKTsgfSApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV2aWNlcy5sZW5ndGggPiAwID8gcmVzb2x2ZWRQcm9taXNlIDogd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdG8gbmV4dCBhdmFpbGFibGUgdmlkZW8gZGV2aWNlXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzd2l0Y2hOZXh0VmlkZW9EZXZpY2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcC5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBzZXRWaWRlRGV2aWNlSW5kZXggPSB0aGlzLnNldFZpZGVEZXZpY2VJbmRleC5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudmlkZW9EZXZpY2VJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy5nZXREZXZpY2VzKCAndmlkZW8nIClcclxuICAgICAgICAgICAgLnRoZW4oIGRldmljZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICggaW5kZXggPj0gZGV2aWNlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCAwICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCBpbmRleCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0KCBkZXZpY2VzWyBpbmRleCBdICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGV2aWNlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIGtleXdvcmQgdG8gbWF0Y2ggZGV2aWNlLmtpbmRcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZXM6IGZ1bmN0aW9uICggdHlwZSA9ICd2aWRlbycgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZXM7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBfZGV2aWNlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMubWFwKCBkZXZpY2UgPT4geyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCAhZGV2aWNlcy5pbmNsdWRlcyggZGV2aWNlICkgKSB7IGRldmljZXMucHVzaCggZGV2aWNlICk7IH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2U7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IF9kZXZpY2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoIHR5cGUsICdpJyApO1xyXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMuZmlsdGVyKCBkZXZpY2UgPT4gcmVnLnRlc3QoIGRldmljZS5raW5kICkgKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW51bWVyYXRlRGV2aWNlcygpXHJcbiAgICAgICAgICAgIC50aGVuKCB2YWxpZGF0ZSApXHJcbiAgICAgICAgICAgIC50aGVuKCBmaWx0ZXIgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHVzZXIgbWVkaWFcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gY29uc3RyYWludHNcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24gKCBjb25zdHJhaW50cyApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0TWVkaWFTdHJlYW0gPSB0aGlzLnNldE1lZGlhU3RyZWFtLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgb25DYXRjaEVycm9yID0gZXJyb3IgPT4geyBjb25zb2xlLndhcm4oIGBQQU5PTEVOUy5NZWRpYTogJHtlcnJvcn1gICk7IH07XHJcblxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzIClcclxuICAgICAgICAgICAgLnRoZW4oIHNldE1lZGlhU3RyZWFtIClcclxuICAgICAgICAgICAgLnRoZW4oIHBsYXlWaWRlbyApXHJcbiAgICAgICAgICAgIC5jYXRjaCggb25DYXRjaEVycm9yICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB2aWRlbyBkZXZpY2UgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVEZXZpY2VJbmRleDogZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHN0cmVhbWluZ1xyXG4gICAgICogQHBhcmFtIHtNZWRpYURldmljZUluZm99IFt0YXJnZXREZXZpY2VdXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24oIHRhcmdldERldmljZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG4gICAgICAgIGNvbnN0IGdldFVzZXJNZWRpYSA9IHRoaXMuZ2V0VXNlck1lZGlhLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBvblZpZGVvRGV2aWNlcyA9IGRldmljZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggJ25vIHZpZGVvIGRldmljZSBmb3VuZCcgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRldmljZSA9IHRhcmdldERldmljZSB8fCBkZXZpY2VzWyAwIF07XHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gZGV2aWNlLmRldmljZUlkO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYSggY29uc3RyYWludHMgKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVWaWRlb0VsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGV2aWNlcygpLnRoZW4oIG9uVmlkZW9EZXZpY2VzICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3Agc3RyZWFtaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuc3RyZWFtO1xyXG5cclxuICAgICAgICBpZiAoIHN0cmVhbSAmJiBzdHJlYW0uYWN0aXZlICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBzdHJlYW0uZ2V0VHJhY2tzKClbIDAgXTtcclxuXHJcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgbWVkaWEgc3RyZWFtXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW0gXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRNZWRpYVN0cmVhbTogZnVuY3Rpb24gKCBzdHJlYW0gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5zY2VuZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IHRoaXMuY3JlYXRlVmlkZW9UZXh0dXJlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdmlkZW8gZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlIHZpZGVvIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGF1c2UnIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmlkZW8gdGV4dHVyZVxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5WaWRlb1RleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvVGV4dHVyZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcclxuICAgICAgICB0ZXh0dXJlLmNlbnRlci5zZXQoIDAuNSwgMC41ICk7XHJcblxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdjYW5wbGF5JywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge0hUTUxWaWRlb0VsZW1lbnR9XHJcbiAgICAgKiBAZmlyZXMgTWVkaWEjY2FucGxheVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWaWRlb0VsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmlkZW8gY2FuIHBsYXkgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYSNjYW5wbGF5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2FuUGxheSA9ICgpID0+IGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NhbnBsYXknIH0gKTtcclxuICAgICAgICBcclxuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdhdXRvcGxheScsICcnICk7XHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnbXV0ZWQnLCAnJyApO1xyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ3BsYXlzaW5saW5lJywgJycgKTtcclxuXHJcbiAgICAgICAgdmlkZW8uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB2aWRlby5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB2aWRlby5zdHlsZS5vYmplY3RQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9IHRoaXMuc2NlbmUgPyAnbm9uZScgOiAnJztcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCBjYW5QbGF5ICk7XHJcblxyXG4gICAgICAgIHJldHVybiB2aWRlbztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gd2luZG93IHJlc2l6ZSBldmVudFxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQudmlkZW9XaWR0aCAmJiB0aGlzLmVsZW1lbnQudmlkZW9IZWlnaHQgJiYgdGhpcy5zY2VuZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGg6IHdpZHRoLCBjbGllbnRIZWlnaHQ6IGhlaWdodCB9ID0gdGhpcy5jb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLnNjZW5lLmJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhUmF0aW8gPSB2aWRlb0hlaWdodCAvIHZpZGVvV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB0aGlzLmNvbnRhaW5lciA/IHdpZHRoIC8gaGVpZ2h0IDogMS4wO1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IGNhbWVyYVJhdGlvICogdmlld3BvcnRSYXRpbyAqIHRoaXMucmF0aW9TY2FsYXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdpZHRoID4gaGVpZ2h0ICkge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCByYXRpbywgMSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCAxLCAxIC8gcmF0aW8gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgTWVkaWEgfTsiLCJcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgUmV0aWNsZSAzRCBTcHJpdGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IFtjb2xvcj0weGZmZmZmZl0gLSBDb2xvciBvZiB0aGUgcmV0aWNsZSBzcHJpdGVcclxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1NlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHdlbGxUaW1lPTE1MDBdIC0gRHVyYXRpb24gZm9yIGR3ZWxsaW5nIHNlcXVlbmNlIHRvIGNvbXBsZXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gUmV0aWNsZSAoIGNvbG9yID0gMHhmZmZmZmYsIGF1dG9TZWxlY3QgPSB0cnVlLCBkd2VsbFRpbWUgPSAxNTAwICkge1xyXG5cclxuICAgIHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgY29uc3QgeyBjYW52YXMsIGNvbnRleHQgfSA9IHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCggeyBjb2xvciwgbWFwOiB0aGlzLmNyZWF0ZUNhbnZhc1RleHR1cmUoIGNhbnZhcyApIH0gKTtcclxuXHJcbiAgICBUSFJFRS5TcHJpdGUuY2FsbCggdGhpcywgbWF0ZXJpYWwgKTtcclxuICAgIC8vIHRoaXMgPSBuZXcgVEhSRUUuU3ByaXRlKG1hdGVyaWFsKTtcclxuICAgIGNvbnNvbGUubG9nKCdRdWEgaGFoYSAyMicpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIGluc3RhbmNlb2YgVEhSRUUuQ29sb3IgPyBjb2xvciA6IG5ldyBUSFJFRS5Db2xvciggY29sb3IgKTsgICAgXHJcblxyXG4gICAgdGhpcy5hdXRvU2VsZWN0ID0gYXV0b1NlbGVjdDtcclxuICAgIHRoaXMuZHdlbGxUaW1lID0gZHdlbGxUaW1lO1xyXG4gICAgdGhpcy5yaXBwbGVEdXJhdGlvbiA9IDUwMDtcclxuICAgIHRoaXMucG9zaXRpb24ueiA9IC0xMDtcclxuICAgIHRoaXMuY2VudGVyLnNldCggMC41LCAwLjUgKTtcclxuICAgIHRoaXMuc2NhbGUuc2V0KCAwLjUsIDAuNSwgMSApO1xyXG5cclxuICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xyXG4gICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzcyggMCApO1xyXG5cclxufTtcclxuXHJcblJldGljbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSk7XHJcblJldGljbGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmV0aWNsZTtcclxuXHJcblJldGljbGUucHJvdG90eXBlLnNldENvbG9yID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgbWF0ZXJpYWwgY29sb3JcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IGNvbG9yIFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRDb2xvcjogZnVuY3Rpb24gKCBjb2xvciApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5jb2xvci5jb3B5KCBjb2xvciBpbnN0YW5jZW9mIFRIUkVFLkNvbG9yID8gY29sb3IgOiBuZXcgVEhSRUUuQ29sb3IoIGNvbG9yICkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGNhbnZhcyB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7VEhSRUUuQ2FudmFzVGV4dHVyZX1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlQ2FudmFzVGV4dHVyZTogZnVuY3Rpb24gKCBjYW52YXMgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZSggY2FudmFzICk7XHJcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBjYW52YXMgZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTENhbnZhc0VsZW1lbnR9IG9iamVjdC5jYW52YXNcclxuICAgICAqIEByZXR1cm5zIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IG9iamVjdC5jb250ZXh0XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUNhbnZhczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB3aWR0aCA9IDMyO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDMyO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoICogZHByO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiBkcHI7XHJcbiAgICAgICAgY29udGV4dC5zY2FsZSggZHByLCBkcHIgKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICBjb250ZXh0LnNoYWRvd0NvbG9yID0gJ3JnYmEoMjAwLDIwMCwyMDAsMC45KSc7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGNhbnZhcywgY29udGV4dCB9O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2FudmFzIGFyYyBieSBwcm9ncmVzc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzOiBmdW5jdGlvbiAoIHByb2dyZXNzICkge1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgbWF0ZXJpYWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XHJcbiAgICAgICAgY29uc3QgZGVncmVlID0gcHJvZ3Jlc3MgKiBNYXRoLlBJICogMjtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3IuZ2V0U3R5bGUoKTtcclxuICAgICAgICBjb25zdCB4ID0gY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XHJcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcclxuICAgICAgICBjb25zdCBsaW5lV2lkdGggPSAzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKCBwcm9ncmVzcyA9PT0gMCApIHtcclxuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIGNhbnZhc1dpZHRoIC8gMTYsIDAsIDIgKiBNYXRoLlBJICk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCBjYW52YXNXaWR0aCAvIDQgLSBsaW5lV2lkdGgsIC1NYXRoLlBJIC8gMiwgLU1hdGguUEkgLyAyICsgZGVncmVlICk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5tYXAubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSaXBwbGUgZWZmZWN0XHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxyXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1yaXBwbGUtZW5kXHJcbiAgICAgKi9cclxuICAgIHJpcHBsZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IHsgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgbWF0ZXJpYWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnJpcHBsZUR1cmF0aW9uO1xyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb25zdCBkcHIgPSB0aGlzLmRwcjtcclxuICAgICAgICBjb25zdCB4ID0gY2FudmFzV2lkdGggKiAwLjUgLyBkcHI7XHJcbiAgICAgICAgY29uc3QgeSA9IGNhbnZhc0hlaWdodCAqIDAuNSAvIGRwcjtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZXJJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHVwZGF0ZSApO1xyXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZWxhcHNlZCAvIGR1cmF0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gMS4wIC0gcHJvZ3Jlc3MgPiAwID8gMS4wIC0gcHJvZ3Jlc3MgOiAwO1xyXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSBwcm9ncmVzcyAqIGNhbnZhc1dpZHRoICogMC41IC8gZHByO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIgKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yLnIgKiAyNTV9LCAke2NvbG9yLmcgKiAyNTV9LCAke2NvbG9yLmIgKiAyNTV9LCAke29wYWNpdHl9KWA7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBwcm9ncmVzcyA+PSAxLjAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aW1lcklkICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFJldGljbGUgcmlwcGxlIGVuZCBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtcmlwcGxlLWVuZCcgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0aWNsZSByaXBwbGUgc3RhcnQgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtcmlwcGxlLXN0YXJ0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXJpcHBsZS1zdGFydCcgfSApO1xyXG5cclxuICAgICAgICB1cGRhdGUoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSByZXRpY2xlIHZpc2libGVcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHJldGljbGUgaW52aXNpYmxlXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGR3ZWxsaW5nXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtc3RhcnRcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuYXV0b1NlbGVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRpY2xlIHN0YXJ0IGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXN0YXJ0JyB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5kIGR3ZWxsaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLWVuZFxyXG4gICAgICovXHJcbiAgICBlbmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuc3RhcnRUaW1lc3RhbXAgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMudGltZXJJZCApO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRpY2xlIGVuZCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1lbmRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtZW5kJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBkd2VsbGluZ1xyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS11cGRhdGVcclxuICAgICAqL1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXJJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZXN0YW1wO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZWxhcHNlZCAvIHRoaXMuZHdlbGxUaW1lO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIHByb2dyZXNzICk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldGljbGUgdXBkYXRlIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXVwZGF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS11cGRhdGUnLCBwcm9ncmVzcyB9ICk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnRpbWVySWQgKTtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmNhbGxiYWNrICkgeyB0aGlzLmNhbGxiYWNrKCk7IH1cclxuICAgICAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5yaXBwbGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IFJldGljbGUgfTsiLCIvKipcbiAqIFR3ZWVuLmpzIC0gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdHdlZW5qcy90d2Vlbi5qc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdlZW5qcy90d2Vlbi5qcy9ncmFwaHMvY29udHJpYnV0b3JzIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNvbnRyaWJ1dG9ycy5cbiAqIFRoYW5rIHlvdSBhbGwsIHlvdSdyZSBhd2Vzb21lIVxuICovXG5cblxudmFyIF9Hcm91cCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5fdHdlZW5zID0ge307XG5cdHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlID0ge307XG59O1xuXG5fR3JvdXAucHJvdG90eXBlID0ge1xuXHRnZXRBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpLm1hcChmdW5jdGlvbiAodHdlZW5JZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX3R3ZWVuc1t0d2VlbklkXTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH0sXG5cblx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLl90d2VlbnMgPSB7fTtcblxuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHR0aGlzLl90d2VlbnNbdHdlZW4uZ2V0SWQoKV0gPSB0d2Vlbjtcblx0XHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXSA9IHR3ZWVuO1xuXG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNbdHdlZW4uZ2V0SWQoKV07XG5cdFx0ZGVsZXRlIHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlW3R3ZWVuLmdldElkKCldO1xuXG5cdH0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbiAodGltZSwgcHJlc2VydmUpIHtcblxuXHRcdHZhciB0d2VlbklkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVucyk7XG5cblx0XHRpZiAodHdlZW5JZHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiBUV0VFTi5ub3coKTtcblxuXHRcdC8vIFR3ZWVucyBhcmUgdXBkYXRlZCBpbiBcImJhdGNoZXNcIi4gSWYgeW91IGFkZCBhIG5ldyB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCB0aGVuIHRoZVxuXHRcdC8vIG5ldyB0d2VlbiB3aWxsIGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgYmF0Y2guXG5cdFx0Ly8gSWYgeW91IHJlbW92ZSBhIHR3ZWVuIGR1cmluZyBhbiB1cGRhdGUsIGl0IG1heSBvciBtYXkgbm90IGJlIHVwZGF0ZWQuIEhvd2V2ZXIsXG5cdFx0Ly8gaWYgdGhlIHJlbW92ZWQgdHdlZW4gd2FzIGFkZGVkIGR1cmluZyB0aGUgY3VycmVudCBiYXRjaCwgdGhlbiBpdCB3aWxsIG5vdCBiZSB1cGRhdGVkLlxuXHRcdHdoaWxlICh0d2Vlbklkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHR3ZWVuSWRzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblxuXHRcdFx0XHRpZiAodHdlZW4gJiYgdHdlZW4udXBkYXRlKHRpbWUpID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHR3ZWVuLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICghcHJlc2VydmUpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNbdHdlZW5JZHNbaV1dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0d2VlbklkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3R3ZWVuc0FkZGVkRHVyaW5nVXBkYXRlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9XG59O1xuXG52YXIgVFdFRU4gPSBuZXcgX0dyb3VwKCk7XG5cblRXRUVOLkdyb3VwID0gX0dyb3VwO1xuVFdFRU4uX25leHRJZCA9IDA7XG5UV0VFTi5uZXh0SWQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBUV0VFTi5fbmV4dElkKys7XG59O1xuXG5cbi8vIEluY2x1ZGUgYSBwZXJmb3JtYW5jZS5ub3cgcG9seWZpbGwuXG4vLyBJbiBub2RlLmpzLCB1c2UgcHJvY2Vzcy5ocnRpbWUuXG5pZiAodHlwZW9mIChzZWxmKSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIChwcm9jZXNzKSAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUoKTtcblxuXHRcdC8vIENvbnZlcnQgW3NlY29uZHMsIG5hbm9zZWNvbmRzXSB0byBtaWxsaXNlY29uZHMuXG5cdFx0cmV0dXJuIHRpbWVbMF0gKiAxMDAwICsgdGltZVsxXSAvIDEwMDAwMDA7XG5cdH07XG59XG4vLyBJbiBhIGJyb3dzZXIsIHVzZSBzZWxmLnBlcmZvcm1hbmNlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmICh0eXBlb2YgKHNlbGYpICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgc2VsZi5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0IHNlbGYucGVyZm9ybWFuY2Uubm93ICE9PSB1bmRlZmluZWQpIHtcblx0Ly8gVGhpcyBtdXN0IGJlIGJvdW5kLCBiZWNhdXNlIGRpcmVjdGx5IGFzc2lnbmluZyB0aGlzIGZ1bmN0aW9uXG5cdC8vIGxlYWRzIHRvIGFuIGludm9jYXRpb24gZXhjZXB0aW9uIGluIENocm9tZS5cblx0VFdFRU4ubm93ID0gc2VsZi5wZXJmb3JtYW5jZS5ub3cuYmluZChzZWxmLnBlcmZvcm1hbmNlKTtcbn1cbi8vIFVzZSBEYXRlLm5vdyBpZiBpdCBpcyBhdmFpbGFibGUuXG5lbHNlIGlmIChEYXRlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdFRXRUVOLm5vdyA9IERhdGUubm93O1xufVxuLy8gT3RoZXJ3aXNlLCB1c2UgJ25ldyBEYXRlKCkuZ2V0VGltZSgpJy5cbmVsc2Uge1xuXHRUV0VFTi5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9O1xufVxuXG5cblRXRUVOLlR3ZWVuID0gZnVuY3Rpb24gKG9iamVjdCwgZ3JvdXApIHtcblx0dGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xuXHR0aGlzLl92YWx1ZXNTdGFydCA9IHt9O1xuXHR0aGlzLl92YWx1ZXNFbmQgPSB7fTtcblx0dGhpcy5fdmFsdWVzU3RhcnRSZXBlYXQgPSB7fTtcblx0dGhpcy5fZHVyYXRpb24gPSAxMDAwO1xuXHR0aGlzLl9yZXBlYXQgPSAwO1xuXHR0aGlzLl9yZXBlYXREZWxheVRpbWUgPSB1bmRlZmluZWQ7XG5cdHRoaXMuX3lveW8gPSBmYWxzZTtcblx0dGhpcy5faXNQbGF5aW5nID0gZmFsc2U7XG5cdHRoaXMuX3JldmVyc2VkID0gZmFsc2U7XG5cdHRoaXMuX2RlbGF5VGltZSA9IDA7XG5cdHRoaXMuX3N0YXJ0VGltZSA9IG51bGw7XG5cdHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dGhpcy5fY2hhaW5lZFR3ZWVucyA9IFtdO1xuXHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uU3RvcENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fZ3JvdXAgPSBncm91cCB8fCBUV0VFTjtcblx0dGhpcy5faWQgPSBUV0VFTi5uZXh0SWQoKTtcblxufTtcblxuVFdFRU4uVHdlZW4ucHJvdG90eXBlID0ge1xuXHRnZXRJZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fSxcblxuXHRpc1BsYXlpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNQbGF5aW5nO1xuXHR9LFxuXG5cdHRvOiBmdW5jdGlvbiAocHJvcGVydGllcywgZHVyYXRpb24pIHtcblxuXHRcdHRoaXMuX3ZhbHVlc0VuZCA9IE9iamVjdC5jcmVhdGUocHJvcGVydGllcyk7XG5cblx0XHRpZiAoZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGR1cmF0aW9uOiBmdW5jdGlvbiBkdXJhdGlvbihkKSB7XG5cdFx0dGhpcy5fZHVyYXRpb24gPSBkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHN0YXJ0OiBmdW5jdGlvbiAodGltZSkge1xuXG5cdFx0dGhpcy5fZ3JvdXAuYWRkKHRoaXMpO1xuXG5cdFx0dGhpcy5faXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cblx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0eXBlb2YgdGltZSA9PT0gJ3N0cmluZycgPyBUV0VFTi5ub3coKSArIHBhcnNlRmxvYXQodGltZSkgOiB0aW1lIDogVFdFRU4ubm93KCk7XG5cdFx0dGhpcy5fc3RhcnRUaW1lICs9IHRoaXMuX2RlbGF5VGltZTtcblxuXHRcdGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc0VuZCkge1xuXG5cdFx0XHQvLyBDaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcblx0XHRcdGlmICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHR0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gW3RoaXMuX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdCh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBgdG8oKWAgc3BlY2lmaWVzIGEgcHJvcGVydHkgdGhhdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0LFxuXHRcdFx0Ly8gd2Ugc2hvdWxkIG5vdCBzZXQgdGhhdCBwcm9wZXJ0eSBpbiB0aGUgb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTYXZlIHRoZSBzdGFydGluZyB2YWx1ZS5cblx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX29iamVjdFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmICgodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRzdG9wOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoIXRoaXMuX2lzUGxheWluZykge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZ3JvdXAucmVtb3ZlKHRoaXMpO1xuXHRcdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMuX29uU3RvcENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblN0b3BDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVuZDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy51cGRhdGUoSW5maW5pdHkpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcENoYWluZWRUd2VlbnM6IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gdGhpcy5fY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKyspIHtcblx0XHRcdHRoaXMuX2NoYWluZWRUd2VlbnNbaV0uc3RvcCgpO1xuXHRcdH1cblxuXHR9LFxuXG5cdGdyb3VwOiBmdW5jdGlvbiAoZ3JvdXApIHtcblx0XHR0aGlzLl9ncm91cCA9IGdyb3VwO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRlbGF5OiBmdW5jdGlvbiAoYW1vdW50KSB7XG5cblx0XHR0aGlzLl9kZWxheVRpbWUgPSBhbW91bnQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRyZXBlYXQ6IGZ1bmN0aW9uICh0aW1lcykge1xuXG5cdFx0dGhpcy5fcmVwZWF0ID0gdGltZXM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRyZXBlYXREZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0eW95bzogZnVuY3Rpb24gKHlveW8pIHtcblxuXHRcdHRoaXMuX3lveW8gPSB5b3lvO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZWFzaW5nOiBmdW5jdGlvbiAoZWFzaW5nRnVuY3Rpb24pIHtcblxuXHRcdHRoaXMuX2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nRnVuY3Rpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRpbnRlcnBvbGF0aW9uOiBmdW5jdGlvbiAoaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uRnVuY3Rpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRjaGFpbjogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fY2hhaW5lZFR3ZWVucyA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uU3RhcnQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblVwZGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblJlcGVhdDogZnVuY3Rpb24gb25SZXBlYXQoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG9uQ29tcGxldGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0b3A6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHZhciBwcm9wZXJ0eTtcblx0XHR2YXIgZWxhcHNlZDtcblx0XHR2YXIgdmFsdWU7XG5cblx0XHRpZiAodGltZSA8IHRoaXMuX3N0YXJ0VGltZSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xuXG5cdFx0XHRpZiAodGhpcy5fb25TdGFydENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0ZWxhcHNlZCA9ICh0aW1lIC0gdGhpcy5fc3RhcnRUaW1lKSAvIHRoaXMuX2R1cmF0aW9uO1xuXHRcdGVsYXBzZWQgPSAodGhpcy5fZHVyYXRpb24gPT09IDAgfHwgZWxhcHNlZCA+IDEpID8gMSA6IGVsYXBzZWQ7XG5cblx0XHR2YWx1ZSA9IHRoaXMuX2Vhc2luZ0Z1bmN0aW9uKGVsYXBzZWQpO1xuXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgdXBkYXRlIHByb3BlcnRpZXMgdGhhdCBkbyBub3QgZXhpc3QgaW4gdGhlIHNvdXJjZSBvYmplY3Rcblx0XHRcdGlmICh0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN0YXJ0ID0gdGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gdGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XTtcblxuXHRcdFx0aWYgKGVuZCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHRoaXMuX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZW5kLmNoYXJBdCgwKSA9PT0gJysnIHx8IGVuZC5jaGFyQXQoMCkgPT09ICctJykge1xuXHRcdFx0XHRcdFx0ZW5kID0gc3RhcnQgKyBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVuZCA9IHBhcnNlRmxvYXQoZW5kKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKHR5cGVvZiAoZW5kKSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0XHR0aGlzLl9vYmplY3RbcHJvcGVydHldID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuX29uVXBkYXRlQ2FsbGJhY2sodGhpcy5fb2JqZWN0LCBlbGFwc2VkKTtcblx0XHR9XG5cblx0XHRpZiAoZWxhcHNlZCA9PT0gMSkge1xuXG5cdFx0XHRpZiAodGhpcy5fcmVwZWF0ID4gMCkge1xuXG5cdFx0XHRcdGlmIChpc0Zpbml0ZSh0aGlzLl9yZXBlYXQpKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmVwZWF0LS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWFzc2lnbiBzdGFydGluZyB2YWx1ZXMsIHJlc3RhcnQgYnkgbWFraW5nIHN0YXJ0VGltZSA9IG5vd1xuXHRcdFx0XHRmb3IgKHByb3BlcnR5IGluIHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mICh0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIHtcblx0XHRcdFx0XHRcdHZhciB0bXAgPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldID0gdG1wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3lveW8pIHtcblx0XHRcdFx0XHR0aGlzLl9yZXZlcnNlZCA9ICF0aGlzLl9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9yZXBlYXREZWxheVRpbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9yZXBlYXREZWxheVRpbWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSArIHRoaXMuX2RlbGF5VGltZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9vblJlcGVhdENhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fb25SZXBlYXRDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0dGhpcy5fb25Db21wbGV0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gTWFrZSB0aGUgY2hhaW5lZCB0d2VlbnMgc3RhcnQgZXhhY3RseSBhdCB0aGUgdGltZSB0aGV5IHNob3VsZCxcblx0XHRcdFx0XHQvLyBldmVuIGlmIHRoZSBgdXBkYXRlKClgIG1ldGhvZCB3YXMgY2FsbGVkIHdheSBwYXN0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdHdlZW5cblx0XHRcdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0YXJ0KHRoaXMuX3N0YXJ0VGltZSArIHRoaXMuX2R1cmF0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gaztcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YWRyYXRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogKDIgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgtLWsgKiAoayAtIDIpIC0gMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDdWJpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSAoLS1rICogayAqIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrIC0gMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWludGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguY29zKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEV4cG9uZW50aWFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0gMTAgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoLSBNYXRoLnBvdygyLCAtIDEwICogKGsgLSAxKSkgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdENpcmN1bGFyOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNxcnQoMSAtICgtLWsgKiBrKSk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0gMC41ICogKE1hdGguc3FydCgxIC0gayAqIGspIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFbGFzdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLU1hdGgucG93KDIsIDEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiBrKSAqIE1hdGguc2luKChrIC0gMC4xKSAqIDUgKiBNYXRoLlBJKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0ayAqPSAyO1xuXG5cdFx0XHRpZiAoayA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0wLjUgKiBNYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgLTEwICogKGsgLSAxKSkgKiBNYXRoLnNpbigoayAtIDEuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0QmFjazoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogKChzICsgMSkgKiBrIC0gcyk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogKChzICsgMSkgKiBrICsgcykgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTggKiAxLjUyNTtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogKGsgKiBrICogKChzICsgMSkgKiBrIC0gcykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqICgocyArIDEpICogayArIHMpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRCb3VuY2U6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KDEgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgKDEgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogayAqIGs7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMiAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMS41IC8gMi43NSkpICogayArIDAuNzU7XG5cdFx0XHR9IGVsc2UgaWYgKGsgPCAoMi41IC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIChrIC09ICgyLjI1IC8gMi43NSkpICogayArIDAuOTM3NTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi42MjUgLyAyLjc1KSkgKiBrICsgMC45ODQzNzU7XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrIDwgMC41KSB7XG5cdFx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLkluKGsgKiAyKSAqIDAuNTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KGsgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5UV0VFTi5JbnRlcnBvbGF0aW9uID0ge1xuXG5cdExpbmVhcjogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuTGluZWFyO1xuXG5cdFx0aWYgKGsgPCAwKSB7XG5cdFx0XHRyZXR1cm4gZm4odlswXSwgdlsxXSwgZik7XG5cdFx0fVxuXG5cdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRyZXR1cm4gZm4odlttXSwgdlttIC0gMV0sIG0gLSBmKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4odltpXSwgdltpICsgMSA+IG0gPyBtIDogaSArIDFdLCBmIC0gaSk7XG5cblx0fSxcblxuXHRCZXppZXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgYiA9IDA7XG5cdFx0dmFyIG4gPSB2Lmxlbmd0aCAtIDE7XG5cdFx0dmFyIHB3ID0gTWF0aC5wb3c7XG5cdFx0dmFyIGJuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW47XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSBuOyBpKyspIHtcblx0XHRcdGIgKz0gcHcoMSAtIGssIG4gLSBpKSAqIHB3KGssIGkpICogdltpXSAqIGJuKG4sIGkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiO1xuXG5cdH0sXG5cblx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHYsIGspIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBmID0gbSAqIGs7XG5cdFx0dmFyIGkgPSBNYXRoLmZsb29yKGYpO1xuXHRcdHZhciBmbiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQ2F0bXVsbFJvbTtcblxuXHRcdGlmICh2WzBdID09PSB2W21dKSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRpID0gTWF0aC5mbG9vcihmID0gbSAqICgxICsgaykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odlsoaSAtIDEgKyBtKSAlIG1dLCB2W2ldLCB2WyhpICsgMSkgJSBtXSwgdlsoaSArIDIpICUgbV0sIGYgLSBpKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmIChrIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gdlswXSAtIChmbih2WzBdLCB2WzBdLCB2WzFdLCB2WzFdLCAtZikgLSB2WzBdKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPiAxKSB7XG5cdFx0XHRcdHJldHVybiB2W21dIC0gKGZuKHZbbV0sIHZbbV0sIHZbbSAtIDFdLCB2W20gLSAxXSwgZiAtIG0pIC0gdlttXSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbih2W2kgPyBpIC0gMSA6IDBdLCB2W2ldLCB2W20gPCBpICsgMSA/IG0gOiBpICsgMV0sIHZbbSA8IGkgKyAyID8gbSA6IGkgKyAyXSwgZiAtIGkpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0VXRpbHM6IHtcblxuXHRcdExpbmVhcjogZnVuY3Rpb24gKHAwLCBwMSwgdCkge1xuXG5cdFx0XHRyZXR1cm4gKHAxIC0gcDApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKG4sIGkpIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cblx0XHRcdHJldHVybiBmYyhuKSAvIGZjKGkpIC8gZmMobiAtIGkpO1xuXG5cdFx0fSxcblxuXHRcdEZhY3RvcmlhbDogKGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dmFyIGEgPSBbMV07XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAobikge1xuXG5cdFx0XHRcdHZhciBzID0gMTtcblxuXHRcdFx0XHRpZiAoYVtuXSkge1xuXHRcdFx0XHRcdHJldHVybiBhW25dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IG47IGkgPiAxOyBpLS0pIHtcblx0XHRcdFx0XHRzICo9IGk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhW25dID0gcztcblx0XHRcdFx0cmV0dXJuIHM7XG5cblx0XHRcdH07XG5cblx0XHR9KSgpLFxuXG5cdFx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG5cblx0XHRcdHZhciB2MCA9IChwMiAtIHAwKSAqIDAuNTtcblx0XHRcdHZhciB2MSA9IChwMyAtIHAxKSAqIDAuNTtcblx0XHRcdHZhciB0MiA9IHQgKiB0O1xuXHRcdFx0dmFyIHQzID0gdCAqIHQyO1xuXG5cdFx0XHRyZXR1cm4gKDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEpICogdDMgKyAoLSAzICogcDEgKyAzICogcDIgLSAyICogdjAgLSB2MSkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuLy8gVU1EIChVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24pXG4oZnVuY3Rpb24gKHJvb3QpIHtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBUV0VFTjtcblx0XHR9KTtcblxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXG5cdFx0Ly8gTm9kZS5qc1xuXHRcdG1vZHVsZS5leHBvcnRzID0gVFdFRU47XG5cblx0fSBlbHNlIGlmIChyb290ICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdC8vIEdsb2JhbCB2YXJpYWJsZVxuXHRcdHJvb3QuVFdFRU4gPSBUV0VFTjtcblxuXHR9XG5cbn0pKHRoaXMpO1xuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xyXG5pbXBvcnQgeyBNT0RFUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xyXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgSW5mb3JtYXRpb24gc3BvdCBhdHRhY2hlZCB0byBwYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZT0zMDBdIC0gRGVmYXVsdCBzY2FsZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2ltYWdlU3JjPVBBTk9MRU5TLkRhdGFJbWFnZS5JbmZvXSAtIEltYWdlIG92ZXJsYXkgaW5mb1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRlZD10cnVlXSAtIEVuYWJsZSBkZWZhdWx0IGhvdmVyIGFuaW1hdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gSW5mb3Nwb3QgKCBzY2FsZSA9IDMwMCwgaW1hZ2VTcmMsIGFuaW1hdGVkICkge1xyXG5cdFxyXG4gICAgY29uc3QgZHVyYXRpb24gPSA1MDAsIHNjYWxlRmFjdG9yID0gMS4zO1xyXG5cclxuICAgIGltYWdlU3JjID0gaW1hZ2VTcmMgfHwgRGF0YUltYWdlLkluZm87XHJcblxyXG4gICAgVEhSRUUuU3ByaXRlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAnaW5mb3Nwb3QnO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0ZWQgPSBhbmltYXRlZCAhPT0gdW5kZWZpbmVkID8gYW5pbWF0ZWQgOiB0cnVlO1xyXG4gICAgdGhpcy5pc0hvdmVyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgLypcclxuICAgICAqIFRPRE86IFRocmVlLmpzIGJ1ZyBob3RmaXggZm9yIHNwcml0ZSByYXljYXN0aW5nIHIxMDRcclxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE0NjI0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnRvUGFub3JhbWEgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJzb3JTdHlsZSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5tb2RlID0gTU9ERVMuTk9STUFMO1xyXG5cclxuICAgIHRoaXMuc2NhbGUuc2V0KCBzY2FsZSwgc2NhbGUsIDEgKTtcclxuICAgIHRoaXMucm90YXRpb24ueSA9IE1hdGguUEk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub3JpZ2luYWxSYXljYXN0ID0gdGhpcy5yYXljYXN0O1xyXG5cclxuICAgIC8vIEV2ZW50IEhhbmRsZXJcclxuICAgIHRoaXMuSEFORExFUl9GT0NVUyA9IG51bGw7XHRcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuICAgIHRoaXMubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnNjYWxlVXBBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuICAgIHRoaXMuc2NhbGVEb3duQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHBvc3RMb2FkID0gZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLm1hdGVyaWFsICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0ZXh0dXJlLmltYWdlLndpZHRoIC8gdGV4dHVyZS5pbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZVNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5pbWFnZS53aWR0aCA9IHRleHR1cmUuaW1hZ2UubmF0dXJhbFdpZHRoIHx8IDY0O1xyXG4gICAgICAgIHRleHR1cmUuaW1hZ2UuaGVpZ2h0ID0gdGV4dHVyZS5pbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IDY0O1xyXG5cclxuICAgICAgICB0aGlzLnNjYWxlLnNldCggcmF0aW8gKiBzY2FsZSwgc2NhbGUsIDEgKTtcclxuXHJcbiAgICAgICAgdGV4dHVyZVNjYWxlLmNvcHkoIHRoaXMuc2NhbGUgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZVVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcclxuICAgICAgICAgICAgLnRvKCB7IHg6IHRleHR1cmVTY2FsZS54ICogc2NhbGVGYWN0b3IsIHk6IHRleHR1cmVTY2FsZS55ICogc2NhbGVGYWN0b3IgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuRWxhc3RpYy5PdXQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZURvd25BbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMuc2NhbGUgKVxyXG4gICAgICAgICAgICAudG8oIHsgeDogdGV4dHVyZVNjYWxlLngsIHk6IHRleHR1cmVTY2FsZS55IH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XHJcblxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubWFwID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICB9LmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAvLyBBZGQgc2hvdyBhbmQgaGlkZSBhbmltYXRpb25zXHJcbiAgICB0aGlzLnNob3dBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWF0ZXJpYWwgKVxyXG4gICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAub25TdGFydCggdGhpcy5lbmFibGVSYXljYXN0LmJpbmQoIHRoaXMsIHRydWUgKSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XHJcblxyXG4gICAgdGhpcy5oaWRlQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcclxuICAgICAgICAudG8oIHsgb3BhY2l0eTogMCB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCBmYWxzZSApIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKTtcclxuXHJcbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMub25DbGljayApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnaG92ZXInLCB0aGlzLm9uSG92ZXIgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVyZW50ZXInLCB0aGlzLm9uSG92ZXJTdGFydCApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnaG92ZXJsZWF2ZScsIHRoaXMub25Ib3ZlckVuZCApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgdGhpcy5vbkR1YWxFeWVFZmZlY3QgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMuc2V0Q29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZGlzbWlzcycsIHRoaXMub25EaXNtaXNzICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1pbmZvc3BvdC1mb2N1cycsIHRoaXMuc2V0Rm9jdXNNZXRob2QgKTtcclxuXHJcbiAgICBUZXh0dXJlTG9hZGVyLmxvYWQoIGltYWdlU3JjLCBwb3N0TG9hZCApO1x0XHJcblxyXG59O1xyXG5cclxuSW5mb3Nwb3QucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuU3ByaXRlLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEluZm9zcG90LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGluZm9zcG90IGNvbnRhaW5lclxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxvYmplY3R9IGRhdGEgLSBEYXRhIHdpdGggY29udGFpbmVyIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggZGF0YSApIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcjtcclxuXHRcclxuICAgICAgICBpZiAoIGRhdGEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcclxuXHRcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcclxuXHRcclxuICAgICAgICB9IGVsc2UgaWYgKCBkYXRhICYmIGRhdGEuY29udGFpbmVyICkge1xyXG5cdFxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhLmNvbnRhaW5lcjtcclxuXHRcclxuICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnQgaWYgZXhpc3RzXHJcbiAgICAgICAgaWYgKCBjb250YWluZXIgJiYgdGhpcy5lbGVtZW50ICkge1xyXG5cdFxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xyXG5cdFxyXG4gICAgICAgIH1cclxuXHRcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIGluZm9zcG90XHJcbiAgICAgKi9cclxuICAgIGdldENvbnRhaW5lcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgYSBjbGljayBldmVudFxyXG4gICAgICogVHJhbnNsYXRlIGFuZCBsb2NrIHRoZSBob3ZlcmluZyBlbGVtZW50IGlmIGFueVxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5pbmcgbW91c2VFdmVudCB3aXRoIGNsaWVudFggYW5kIGNsaWVudFlcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICYmIHRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJTdGFydCggZXZlbnQgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvY2sgZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLmxvY2tIb3ZlckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNtaXNzIGN1cnJlbnQgZWxlbWVudCBpZiBhbnlcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBEaXNtaXNzIGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkRpc21pc3M6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVubG9ja0hvdmVyRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uSG92ZXJFbmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGEgbW91c2UgaG92ZXIgZXZlbnRcclxuICAgICAqIFRyYW5zbGF0ZSB0aGUgaG92ZXJpbmcgZWxlbWVudCBpZiBhbnlcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWluaW5nIG1vdXNlRXZlbnQgd2l0aCBjbGllbnRYIGFuZCBjbGllbnRZXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkhvdmVyOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgb24gYSBtb3VzZSBob3ZlciBzdGFydFxyXG4gICAgICogU2V0cyBjdXJzb3Igc3R5bGUgdG8gJ3BvaW50ZXInLCBkaXNwbGF5IHRoZSBlbGVtZW50IGFuZCBzY2FsZSB1cCB0aGUgaW5mb3Nwb3RcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Ib3ZlclN0YXJ0OiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY29uc3QgY3Vyc29yU3R5bGUgPSB0aGlzLmN1cnNvclN0eWxlIHx8ICggdGhpcy5tb2RlID09PSBNT0RFUy5OT1JNQUwgPyAncG9pbnRlcicgOiAnZGVmYXVsdCcgKTtcclxuICAgICAgICBjb25zdCB7IHNjYWxlRG93bkFuaW1hdGlvbiwgc2NhbGVVcEFuaW1hdGlvbiwgZWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5pc0hvdmVyaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSBjdXJzb3JTdHlsZTtcclxuXHRcdFxyXG4gICAgICAgIGlmICggdGhpcy5hbmltYXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlRG93bkFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNjYWxlVXBBbmltYXRpb24uc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICYmIGV2ZW50Lm1vdXNlRXZlbnQuY2xpZW50WCA+PSAwICYmIGV2ZW50Lm1vdXNlRXZlbnQuY2xpZW50WSA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCByaWdodCwgc3R5bGUgfSA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgZWxlbWVudCB3aWR0aCBmb3IgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll93aWR0aCA9IGxlZnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9oZWlnaHQgPSBsZWZ0LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGxlZnQgKSB7IGxlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCByaWdodCApIHsgcmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGVsZW1lbnQgd2lkdGggZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5fd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5faGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBvbiBhIG1vdXNlIGhvdmVyIGVuZFxyXG4gICAgICogU2V0cyBjdXJzb3Igc3R5bGUgdG8gJ2RlZmF1bHQnLCBoaWRlIHRoZSBlbGVtZW50IGFuZCBzY2FsZSBkb3duIHRoZSBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Ib3ZlckVuZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmdldENvbnRhaW5lcigpICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgY29uc3QgeyBzY2FsZURvd25BbmltYXRpb24sIHNjYWxlVXBBbmltYXRpb24sIGVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmFuaW1hdGVkICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGVVcEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHNjYWxlRG93bkFuaW1hdGlvbi5zdGFydCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudCAmJiAhdGhpcy5lbGVtZW50LmxvY2tlZCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cclxuICAgICAgICAgICAgaWYgKCByaWdodCApIHsgcmlnaHQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51bmxvY2tIb3ZlckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBkdWFsIGV5ZSBlZmZlY3QgaGFuZGxlclxyXG4gICAgICogQ3JlYXRlcyBkdXBsaWNhdGUgbGVmdCBhbmQgcmlnaHQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIHBhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCBldmVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25EdWFsRXllRWZmZWN0OiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKCAhdGhpcy5nZXRDb250YWluZXIoKSApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50LCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMubW9kZSA9IGV2ZW50Lm1vZGU7XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGhhbGZXaWR0aCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMjtcclxuICAgICAgICBoYWxmSGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgaWYgKCAhZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoICFlbGVtZW50LmxlZnQgJiYgIWVsZW1lbnQucmlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQgPSBlbGVtZW50LmNsb25lTm9kZSggdHJ1ZSApO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0ID0gZWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGVsZW1lbnRzIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVFbGVtZW50KCBoYWxmV2lkdGgsIGhhbGZIZWlnaHQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQubGVmdCApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50LnJpZ2h0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZSB0aGUgaG92ZXJpbmcgZWxlbWVudCBieSBjc3MgdHJhbnNmb3JtXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggLSBYIHBvc2l0aW9uIG9uIHRoZSB3aW5kb3cgc2NyZWVuXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgLSBZIHBvc2l0aW9uIG9uIHRoZSB3aW5kb3cgc2NyZWVuXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGVFbGVtZW50OiBmdW5jdGlvbiAoIHgsIHkgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudC5fd2lkdGggfHwgIXRoaXMuZWxlbWVudC5faGVpZ2h0IHx8ICF0aGlzLmdldENvbnRhaW5lcigpICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0LCB0b3AsIGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQsIGRlbHRhLCBjb250YWluZXI7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcbiAgICAgICAgd2lkdGggPSBlbGVtZW50Ll93aWR0aCAvIDI7XHJcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5faGVpZ2h0IC8gMjtcclxuICAgICAgICBkZWx0YSA9IGVsZW1lbnQudmVydGljYWxEZWx0YSAhPT0gdW5kZWZpbmVkID8gZWxlbWVudC52ZXJ0aWNhbERlbHRhIDogNDA7XHJcblxyXG4gICAgICAgIGxlZnQgPSB4IC0gd2lkdGg7XHJcbiAgICAgICAgdG9wID0geSAtIGhlaWdodCAtIGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAoICggdGhpcy5tb2RlID09PSBNT0RFUy5DQVJEQk9BUkQgfHwgdGhpcy5tb2RlID09PSBNT0RFUy5TVEVSRU8gKSBcclxuXHRcdFx0XHQmJiBlbGVtZW50LmxlZnQgJiYgZWxlbWVudC5yaWdodFxyXG5cdFx0XHRcdCYmICEoIHggPT09IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIgJiYgeSA9PT0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGxlZnQgPSBjb250YWluZXIuY2xpZW50V2lkdGggLyA0IC0gd2lkdGggKyAoIHggLSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyICk7XHJcbiAgICAgICAgICAgIHRvcCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyIC0gaGVpZ2h0IC0gZGVsdGEgKyAoIHkgLSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LmxlZnQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xyXG5cclxuICAgICAgICAgICAgbGVmdCArPSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50U3R5bGUoICd0cmFuc2Zvcm0nLCBlbGVtZW50LnJpZ2h0LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHZlbmRvciBzcGVjaWZpYyBjc3NcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQ1NTIHN0eWxlIG5hbWVcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBiZSBtb2RpZmllZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gU3R5bGUgdmFsdWVcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldEVsZW1lbnRTdHlsZTogZnVuY3Rpb24gKCB0eXBlLCBlbGVtZW50LCB2YWx1ZSApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xyXG5cclxuICAgICAgICBpZiAoIHR5cGUgPT09ICd0cmFuc2Zvcm0nICkge1xyXG5cclxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc3R5bGUubXNUcmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgaG92ZXJpbmcgdGV4dCBjb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYmUgZGlzcGxheWVkXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAoIHRleHQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY3Vyc29yIGNzcyBzdHlsZSBvbiBob3ZlclxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q3Vyc29ySG92ZXJTdHlsZTogZnVuY3Rpb24gKCBzdHlsZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJzb3JTdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgaG92ZXJpbmcgdGV4dCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gYmUgZGlzcGxheWVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbHRhPTQwXSAtIFZlcnRpY2FsIGRlbHRhIHRvIHRoZSBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkSG92ZXJUZXh0OiBmdW5jdGlvbiAoIHRleHQsIGRlbHRhID0gNDAgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4V2lkdGggPSAnNTAlJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICc1MCUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudGV4dFNoYWRvdyA9ICcwIDAgM3B4ICMwMDAwMDAnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWluZm9zcG90JyApO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmVydGljYWxEZWx0YSA9IGRlbHRhO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGV4dCggdGV4dCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgaG92ZXJpbmcgZWxlbWVudCBieSBjbG9uaW5nIGFuIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTERPTUVsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBiZSBjbG9uZWQgYW5kIGRpc3BsYXllZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT00MF0gLSBWZXJ0aWNhbCBkZWx0YSB0byB0aGUgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZEhvdmVyRWxlbWVudDogZnVuY3Rpb24gKCBlbCwgZGVsdGEgPSA0MCApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5lbGVtZW50ICkgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IGVsLmNsb25lTm9kZSggdHJ1ZSApO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtaW5mb3Nwb3QnICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52ZXJ0aWNhbERlbHRhID0gZGVsdGE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGhvdmVyaW5nIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUhvdmVyRWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuZWxlbWVudC5sZWZ0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQubGVmdCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxlZnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQucmlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudC5yaWdodCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQgKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2NrIGhvdmVyaW5nIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvY2tIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxvY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5sb2NrIGhvdmVyaW5nIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVubG9ja0hvdmVyRWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubG9ja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIHJheWNhc3RpbmdcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuYWJsZWQ9dHJ1ZV1cclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZVJheWNhc3Q6IGZ1bmN0aW9uICggZW5hYmxlZCA9IHRydWUgKSB7XHJcblxyXG4gICAgICAgIGlmICggZW5hYmxlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9IHRoaXMub3JpZ2luYWxSYXljYXN0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYXljYXN0ID0gKCkgPT4ge307XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBpbmZvc3BvdFxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MF0gLSBEZWxheSB0aW1lIHRvIHNob3dcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNob3c6IGZ1bmN0aW9uICggZGVsYXkgPSAwICkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBoaWRlQW5pbWF0aW9uLCBzaG93QW5pbWF0aW9uLCBtYXRlcmlhbCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBhbmltYXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIHRydWUgKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBpbmZvc3BvdFxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBbZGVsYXk9MF0gLSBEZWxheSB0aW1lIHRvIGhpZGVcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGhpZGU6IGZ1bmN0aW9uICggZGVsYXkgPSAwICkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGFuaW1hdGVkLCBoaWRlQW5pbWF0aW9uLCBzaG93QW5pbWF0aW9uLCBtYXRlcmlhbCwgZWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBhbmltYXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHNob3dBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICBoaWRlQW5pbWF0aW9uLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVJheWNhc3QoIGZhbHNlICk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZm9jdXMgZXZlbnQgaGFuZGxlclxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Rm9jdXNNZXRob2Q6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkhBTkRMRVJfRk9DVVMgPSBldmVudC5tZXRob2Q7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9jdXMgY2FtZXJhIGNlbnRlciB0byB0aGlzIGluZm9zcG90XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlYXNpbmc9VFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dF0gLSBFYXNpbmcgZnVuY3Rpb25cclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGZvY3VzOiBmdW5jdGlvbiAoIGR1cmF0aW9uLCBlYXNpbmcgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5IQU5ETEVSX0ZPQ1VTICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTKCB0aGlzLnBvc2l0aW9uLCBkdXJhdGlvbiwgZWFzaW5nICk7XHJcbiAgICAgICAgICAgIHRoaXMub25EaXNtaXNzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9ID0gdGhpcztcclxuICAgICAgICBjb25zdCB7IG1hcCB9ID0gbWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlSG92ZXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgbWF0ZXJpYWwubWFwID0gbnVsbDsgfVxyXG4gICAgICAgIGlmICggZ2VvbWV0cnkgKSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgdGhpcy5nZW9tZXRyeSA9IG51bGw7IH1cclxuICAgICAgICBpZiAoIG1hdGVyaWFsICkgeyBtYXRlcmlhbC5kaXNwb3NlKCk7IHRoaXMubWF0ZXJpYWwgPSBudWxsOyB9XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgSW5mb3Nwb3QgfTsiLCJpbXBvcnQgeyBDT05UUk9MUywgTU9ERVMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBXaWRnZXQgZm9yIGNvbnRyb2xzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBBIGRvbUVsZW1lbnQgd2hlcmUgZGVmYXVsdCBjb250cm9sIHdpZGdldCB3aWxsIGJlIGF0dGFjaGVkIHRvXHJcbiAqL1xyXG5mdW5jdGlvbiBXaWRnZXQgKCBjb250YWluZXIgKSB7XHJcblxyXG4gICAgaWYgKCAhY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLndhcm4oICdQQU5PTEVOUy5XaWRnZXQ6IE5vIGNvbnRhaW5lciBzcGVjaWZpZWQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgdGhpcy5ERUZBVUxUX1RSQU5TSVRJT04gID0gJ2FsbCAwLjI3cyBlYXNlJztcclxuICAgIHRoaXMuVE9VQ0hfRU5BQkxFRCA9ICEhKCggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcclxuICAgIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLmJhckVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnZpZGVvRWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLnNldHRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLm1haW5NZW51ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZU1haW5JdGVtID0gbnVsbDtcclxuICAgIHRoaXMuYWN0aXZlU3ViTWVudSA9IG51bGw7XHJcbiAgICB0aGlzLm1hc2sgPSBudWxsO1xyXG5cclxufVxyXG5cclxuV2lkZ2V0LnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBXaWRnZXQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgY29udHJvbCBiYXJcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRDb250cm9sQmFyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV2lkZ2V0IGNvbnRhaW5lciBub3Qgc2V0JyApOyBcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMsIGJhciwgc3R5bGVUcmFuc2xhdGUsIHN0eWxlT3BhY2l0eSwgZ3JhZGllbnRTdHlsZTtcclxuXHJcbiAgICAgICAgZ3JhZGllbnRTdHlsZSA9ICdsaW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDAsMCwwLDAuMiksIHJnYmEoMCwwLDAsMCkpJztcclxuXHJcbiAgICAgICAgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBiYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgYmFyLnN0eWxlLmhlaWdodCA9ICc0NHB4JztcclxuICAgICAgICBiYXIuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XHJcbiAgICAgICAgYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGJhci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBiYXIuc3R5bGUubXNUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTAwJSknO1xyXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy13ZWJraXQtJyArIGdyYWRpZW50U3R5bGU7XHJcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW1vei0nICsgZ3JhZGllbnRTdHlsZTtcclxuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctby0nICsgZ3JhZGllbnRTdHlsZTtcclxuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctbXMtJyArIGdyYWRpZW50U3R5bGU7XHJcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBncmFkaWVudFN0eWxlO1xyXG4gICAgICAgIGJhci5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XHJcbiAgICAgICAgYmFyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgYmFyLmlzSGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgYmFyLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYmFyLmlzSGlkZGVuID0gIWJhci5pc0hpZGRlbjtcclxuICAgICAgICAgICAgc3R5bGVUcmFuc2xhdGUgPSBiYXIuaXNIaWRkZW4gPyAndHJhbnNsYXRlWSgwKScgOiAndHJhbnNsYXRlWSgtMTAwJSknO1xyXG4gICAgICAgICAgICBzdHlsZU9wYWNpdHkgPSBiYXIuaXNIaWRkZW4gPyAwIDogMTtcclxuICAgICAgICAgICAgYmFyLnN0eWxlLnRyYW5zZm9ybSA9IGJhci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBiYXIuc3R5bGUubXNUcmFuc2Zvcm0gPSBzdHlsZVRyYW5zbGF0ZTtcclxuICAgICAgICAgICAgYmFyLnN0eWxlLm9wYWNpdHkgPSBzdHlsZU9wYWNpdHk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gTWVudVxyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcy5jcmVhdGVEZWZhdWx0TWVudSgpO1xyXG4gICAgICAgIHRoaXMubWFpbk1lbnUgPSB0aGlzLmNyZWF0ZU1haW5NZW51KCBtZW51ICk7XHJcbiAgICAgICAgYmFyLmFwcGVuZENoaWxkKCB0aGlzLm1haW5NZW51ICk7XHJcblxyXG4gICAgICAgIC8vIE1hc2tcclxuICAgICAgICB2YXIgbWFzayA9IHRoaXMuY3JlYXRlTWFzaygpO1xyXG4gICAgICAgIHRoaXMubWFzayA9IG1hc2s7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIG1hc2sgKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcG9zZVxyXG4gICAgICAgIGJhci5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLmZ1bGxzY3JlZW5FbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5mdWxsc2NyZWVuRWxlbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLnNldHRpbmdFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUuc2V0dGluZ0VsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUudmlkZW9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGJhci5yZW1vdmVDaGlsZCggc2NvcGUudmlkZW9FbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS52aWRlb0VsZW1lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUudmlkZW9FbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGJhciApO1xyXG5cclxuICAgICAgICAvLyBNYXNrIGV2ZW50c1xyXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG4gICAgICAgIHRoaXMubWFzay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5tYXNrLmhpZGUoKTtcclxuICAgICAgICAgICAgc2NvcGUuc2V0dGluZ0VsZW1lbnQuZGVhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICB9LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lclxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRyb2wtYmFyLXRvZ2dsZScsIGJhci50b2dnbGUgKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXJFbGVtZW50ID0gYmFyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgZGVmYXVsdCBtZW51XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRGVmYXVsdE1lbnU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcywgaGFuZGxlcjtcclxuXHJcbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uICggbWV0aG9kLCBkYXRhICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSBcclxuXHJcbiAgICAgICAgICAgICAgICB9ICk7IFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnRyb2wnLCBcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnU6IFsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuVE9VQ0hfRU5BQkxFRCA/ICdUb3VjaCcgOiAnTW91c2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUNvbnRyb2wnLCBDT05UUk9MUy5PUkJJVCApXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlbnNvcicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlQ29udHJvbCcsIENPTlRST0xTLkRFVklDRU9SSUVOVEFUSU9OICkgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01vZGUnLCBcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnU6IFsgXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdOb3JtYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZGlzYWJsZUVmZmVjdCcgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FyZGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUVmZmVjdCcsIE1PREVTLkNBUkRCT0FSRCApXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N0ZXJlb3Njb3BpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5TVEVSRU8gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBdO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYnV0dG9ucyBvbiB0b3Agb2YgY29udHJvbCBiYXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGNvbnRyb2wgYnV0dG9uIG5hbWUgdG8gYmUgY3JlYXRlZFxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZENvbnRyb2xCdXR0b246IGZ1bmN0aW9uICggbmFtZSApIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCggbmFtZSApIHtcclxuXHJcbiAgICAgICAgY2FzZSAnZnVsbHNjcmVlbic6XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVGdWxsc2NyZWVuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPSBlbGVtZW50OyBcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdzZXR0aW5nJzpcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZVNldHRpbmdCdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAndmlkZW8nOlxyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggIWVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iYXJFbGVtZW50LmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBtb2RhbCBtYXNrXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWFzazogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNob3cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBlbGVtZW50LmhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgU2V0dGluZyBidXR0b24gdG8gdG9nZ2xlIG1lbnVcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTZXR0aW5nQnV0dG9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LnRvZ2dsZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmFjdGl2YXRlZCApIHtcclxuXHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcclxuXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuU2V0dGluZyArICdcIiknLFxyXG4gICAgICAgICAgICAgICAgd2Via2l0VHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT04sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTlxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIGl0ZW0uYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUzZCgwLDAsMSw5MGRlZyknO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNjb3BlLm1hc2suc2hvdygpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUzZCgwLDAsMCwwKSc7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNjb3BlLm1hc2suaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5tYWluTWVudSAmJiBzY29wZS5tYWluTWVudS52aXNpYmxlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LmhpZGUoKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5hY3RpdmVTdWJNZW51ICYmIHNjb3BlLmFjdGl2ZVN1Yk1lbnUudmlzaWJsZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVTdWJNZW51LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubWFpbk1lbnUgJiYgc2NvcGUubWFpbk1lbnUuX3dpZHRoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LmNoYW5nZVNpemUoIHNjb3BlLm1haW5NZW51Ll93aWR0aCApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUubWFpbk1lbnUudW5zbGlkZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmFjdGl2YXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIEZ1bGxzY3JlZW4gYnV0dG9uXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb24gZm9yIGZ1bGxzY3JlZW5cclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVGdWxsc2NyZWVuQnV0dG9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW0sIGlzRnVsbHNjcmVlbiA9IGZhbHNlLCB0YXBTa2lwcGVkID0gdHJ1ZSwgc3R5bGVzaGVldElkO1xyXG5cclxuICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgc3R5bGVzaGVldElkID0gJ3Bhbm9sZW5zLXN0eWxlLWFkZG9uJztcclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgY3JlYXRlIGJ1dHRvbiBpZiBubyBzdXBwb3J0XHJcbiAgICAgICAgaWYgKCAhZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgICAgICAgJiYgXHJcblx0XHRcdCFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCAmJlxyXG5cdFx0XHQhZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgICAgJiZcclxuXHRcdFx0IWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICggIWlzRnVsbHNjcmVlbiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbiApIHsgY29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuICkgeyBjb250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiggRWxlbWVudC5BTExPV19LRVlCT0FSRF9JTlBVVCApOyB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuICkgeyBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4gKSB7IGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCApOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICggaXNGdWxsc2NyZWVuICkgXHJcbiAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxyXG4gICAgICAgICAgICAgICAgOiAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuRW50ZXIgKyAnXCIpJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UgKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0YXBTa2lwcGVkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9ICFpc0Z1bGxzY3JlZW47IFxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gKCBpc0Z1bGxzY3JlZW4gKSBcclxuICAgICAgICAgICAgICAgICAgICA/ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5MZWF2ZSArICdcIiknIFxyXG4gICAgICAgICAgICAgICAgICAgIDogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKSc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uV2luZG93UmVzaXplJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvbldpbmRvd1Jlc2l6ZScgfSApO1xyXG5cclxuICAgICAgICAgICAgdGFwU2tpcHBlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ01TRnVsbHNjcmVlbkNoYW5nZScsIG9uRnVsbFNjcmVlbkNoYW5nZSwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcclxuXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKScgXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGZ1bGxzY3JlZW4gc3RseWUgaWYgbm90IGV4aXN0c1xyXG4gICAgICAgIGlmICggIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHN0eWxlc2hlZXRJZCApICkge1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcclxuICAgICAgICAgICAgc2hlZXQuaWQgPSBzdHlsZXNoZWV0SWQ7XHJcbiAgICAgICAgICAgIHNoZWV0LmlubmVySFRNTCA9ICc6LXdlYmtpdC1mdWxsLXNjcmVlbiB7IHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IGhlaWdodDogMTAwJSAhaW1wb3J0YW50IH0nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBzaGVldCApO1xyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmlkZW8gY29udHJvbCBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBjb250cm9sXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvQ29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGl0ZW0uc2hvdyA9IGZ1bmN0aW9uICgpIHsgXHJcblxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5oaWRlID0gZnVuY3Rpb24gKCkgeyBcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2xCdXR0b24oKTtcclxuICAgICAgICBpdGVtLnNlZWtCYXIgPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbFNlZWtiYXIoKTtcclxuXHRcdFxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIGl0ZW0uY29udHJvbEJ1dHRvbiApO1xyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xyXG5cclxuICAgICAgICBpdGVtLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcclxuICAgICAgICAgICAgaXRlbS5yZW1vdmVDaGlsZCggaXRlbS5zZWVrQmFyICk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5zZWVrQmFyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaXRlbS5zZWVrQmFyID0gbnVsbDtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1zaG93JywgaXRlbS5zaG93ICk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tY29udHJvbC1oaWRlJywgaXRlbS5oaWRlICk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmlkZW8gY29udHJvbCBidXR0b25cclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBjb250cm9sXHJcbiAgICAgKiBAZmlyZXMgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvQ29udHJvbEJ1dHRvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndG9nZ2xlVmlkZW9QbGF5JyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd0b2dnbGVWaWRlb1BsYXknLCBkYXRhOiAhdGhpcy5wYXVzZWQgfSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7IFxyXG5cclxuICAgICAgICAgICAgc3R5bGU6IHsgXHJcblxyXG4gICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcIicgKyBEYXRhSW1hZ2UuVmlkZW9QbGF5ICsgJ1wiKSdcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblRhcDogb25UYXBcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdGVtLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGl0ZW0udXBkYXRlID0gZnVuY3Rpb24gKCBwYXVzZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IHBhdXNlZCAhPT0gdW5kZWZpbmVkID8gcGF1c2VkIDogdGhpcy5wYXVzZWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCInICsgKCB0aGlzLnBhdXNlZCBcclxuICAgICAgICAgICAgICAgID8gRGF0YUltYWdlLlZpZGVvUGxheSBcclxuICAgICAgICAgICAgICAgIDogRGF0YUltYWdlLlZpZGVvUGF1c2UgKSArICdcIiknO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHZpZGVvIHNlZWtiYXJcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciB2aWRlbyBzZWVrYmFyXHJcbiAgICAgKiBAZmlyZXMgV2lkZ2V0I3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvQ29udHJvbFNlZWtiYXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcywgaXRlbSwgcHJvZ3Jlc3NFbGVtZW50LCBwcm9ncmVzc0VsZW1lbnRDb250cm9sLFxyXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2UsIG1vdXNlWCwgcGVyY2VudGFnZU5vdywgcGVyY2VudGFnZU5leHQ7XHJcblxyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gJzAlJztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcblxyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUud2lkdGggPSAnMTRweCc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5oZWlnaHQgPSAnMTRweCc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDdweCwgLTVweCknO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RkZCc7XHJcblxyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvbk1vdXNlRG93biwgIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgbW91c2VYID0gZXZlbnQuY2xpZW50WCB8fCAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKTtcclxuXHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2VOb3cgPSBwYXJzZUludCggcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoICkgLyAxMDA7XHJcblxyXG4gICAgICAgICAgICBhZGRDb250cm9sTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblZpZGVvQ29udHJvbERyYWcgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCBpc0RyYWdnaW5nICl7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9ICggY2xpZW50WCAtIG1vdXNlWCApIC8gaXRlbS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9IHBlcmNlbnRhZ2VOb3cgKyBwZXJjZW50YWdlTmV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlTmV4dCA9IHBlcmNlbnRhZ2VOZXh0ID4gMSA/IDEgOiAoICggcGVyY2VudGFnZU5leHQgPCAwICkgPyAwIDogcGVyY2VudGFnZU5leHQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzICggcGVyY2VudGFnZU5leHQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdzZXRWaWRlb0N1cnJlbnRUaW1lJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEgLSBQZXJjZW50YWdlIG9mIGN1cnJlbnQgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFZpZGVvQ3VycmVudFRpbWUnLCBkYXRhOiBwZXJjZW50YWdlTmV4dCB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25WaWRlb0NvbnRyb2xTdG9wICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUNvbnRyb2xMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRDb250cm9sTGlzdGVuZXJzICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvblZpZGVvQ29udHJvbFN0b3AsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25WaWRlb0NvbnRyb2xTdG9wLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVDb250cm9sTGlzdGVuZXJzICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvblZpZGVvQ29udHJvbFN0b3AsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25WaWRlb0NvbnRyb2xEcmFnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25WaWRlb0NvbnRyb2xTdG9wLCBmYWxzZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0ID09PSBwcm9ncmVzc0VsZW1lbnRDb250cm9sICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDAgKVxyXG4gICAgICAgICAgICAgICAgPyAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKSAvIHRoaXMuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgICAgIDogZXZlbnQub2Zmc2V0WCAvIHRoaXMuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdzZXRWaWRlb0N1cnJlbnRUaW1lJyBmdW5jdGlvbiBjYWxsIG9uIFZpZXdlclxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZGF0YSAtIFBlcmNlbnRhZ2Ugb2YgY3VycmVudCB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFZpZGVvQ3VycmVudFRpbWUnLCBkYXRhOiBwZXJjZW50YWdlIH0gKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MoIGV2ZW50Lm9mZnNldFggLyB0aGlzLmNsaWVudFdpZHRoICk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uRGlzcG9zZSAoKSB7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVDb250cm9sTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5hcHBlbmRDaGlsZCggcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCApO1xyXG5cclxuICAgICAgICBpdGVtID0gdGhpcy5jcmVhdGVDdXN0b21JdGVtKCB7XHJcblxyXG4gICAgICAgICAgICBzdHlsZTogeyBcclxuXHJcbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNHB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxODgsMTg4LDE4OCwwLjgpJ1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uVGFwOiBvblRhcCxcclxuICAgICAgICAgICAgb25EaXNwb3NlOiBvbkRpc3Bvc2VcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBwcm9ncmVzc0VsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uKCBwZXJjZW50YWdlICkge1xyXG5cclxuICAgICAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLndpZHRoID0gcGVyY2VudGFnZSAqIDEwMCArICclJztcclxuXHJcbiAgICAgICAgfTtcdFx0XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXVwZGF0ZScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IFxyXG5cclxuICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyggZXZlbnQucGVyY2VudGFnZSApOyBcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdGVtLnByb2dyZXNzRWxlbWVudCA9IHByb2dyZXNzRWxlbWVudDtcclxuICAgICAgICBpdGVtLnByb2dyZXNzRWxlbWVudENvbnRyb2wgPSBwcm9ncmVzc0VsZW1lbnRDb250cm9sO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG1lbnUgaXRlbVxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZSAtIFRpdGxlIHRvIGRpc3BsYXlcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQW4gYW5jaG9yIHRhZyBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1lbnVJdGVtOiBmdW5jdGlvbiAoIHRpdGxlICkge1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7IFxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnYScgKTtcclxuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpdGVtLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICBpdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XHJcblxyXG4gICAgICAgIGl0ZW0uc2xpZGUgPSBmdW5jdGlvbiAoIHJpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKCByaWdodCA/ICcnIDogJy0nICkgKyAnMTAwJSknO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLnVuc2xpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRJY29uID0gZnVuY3Rpb24gKCB1cmwgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaWNvbiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgdXJsICsgJyknO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLnNldFNlbGVjdGlvblRpdGxlID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5zZWxlY3Rpb24gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoIG5hbWUgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZm9udFdlaWdodCA9ICczMDAnO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24uc3R5bGUuZmxvYXQgPSAncmlnaHQnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0aW9uVGl0bGUoIG5hbWUgKTtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggc2VsZWN0aW9uICk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRJY29uID0gZnVuY3Rpb24gKCB1cmwgPSBEYXRhSW1hZ2UuQ2hldnJvblJpZ2h0LCBsZWZ0ID0gZmFsc2UsIGZsaXAgPSBmYWxzZSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5mbG9hdCA9IGxlZnQgPyAnbGVmdCcgOiAncmlnaHQnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzE3cHgnO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxN3B4JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVsgJ21hcmdpbicgKyAoIGxlZnQgPyAnUmlnaHQnIDogJ0xlZnQnICkgXSA9ICcxMnB4JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGZsaXAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWigxODBkZWcpJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbiggdXJsICk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmFkZFN1Yk1lbnUgPSBmdW5jdGlvbiAoIHRpdGxlLCBpdGVtcyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3ViTWVudSA9IHNjb3BlLmNyZWF0ZVN1Yk1lbnUoIHRpdGxlLCBpdGVtcyApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZTBlMGUwJztcclxuXHJcbiAgICAgICAgfSwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmYWZhZmEnO1xyXG5cclxuICAgICAgICB9LCBmYWxzZSApO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIG1lbnUgaXRlbSBoZWFkZXJcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGUgLSBUaXRsZSB0byBkaXNwbGF5XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEFuIGFuY2hvciB0YWcgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNZW51SXRlbUhlYWRlcjogZnVuY3Rpb24gKCB0aXRsZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5jcmVhdGVNZW51SXRlbSggdGl0bGUgKTtcclxuXHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgIzMzMyc7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAnMTVweCc7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBtYWluIG1lbnVcclxuICAgICAqIEBwYXJhbSAge2FycmF5fSBtZW51cyAtIE1lbnUgYXJyYXkgbGlzdFxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNYWluTWVudTogZnVuY3Rpb24gKCBtZW51cyApIHtcclxuXHRcdFxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIG1lbnUgPSB0aGlzLmNyZWF0ZU1lbnUoKTtcclxuXHJcbiAgICAgICAgbWVudS5fd2lkdGggPSAyMDA7XHJcbiAgICAgICAgbWVudS5jaGFuZ2VTaXplKCBtZW51Ll93aWR0aCApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBzY29wZS5tYWluTWVudSwgc3ViTWVudSA9IHRoaXMuc3ViTWVudTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTmV4dFRpY2sgKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIG1haW5NZW51LmNoYW5nZVNpemUoIHN1Yk1lbnUuY2xpZW50V2lkdGggKTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS51bnNsaWRlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYWluTWVudS5oaWRlKCk7XHJcbiAgICAgICAgICAgIG1haW5NZW51LnNsaWRlQWxsKCk7XHJcbiAgICAgICAgICAgIG1haW5NZW51LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN1Yk1lbnUgKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZU1haW5JdGVtID0gdGhpcztcclxuICAgICAgICAgICAgc2NvcGUuYWN0aXZlU3ViTWVudSA9IHN1Yk1lbnU7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvbk5leHRUaWNrICk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IG1lbnVzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBtZW51LmFkZEl0ZW0oIG1lbnVzWyBpIF0udGl0bGUgKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUucGFkZGluZ0xlZnQgPSAnMjBweCc7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFkZEljb24oKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG1lbnVzWyBpIF0uc3ViTWVudSAmJiBtZW51c1sgaSBdLnN1Yk1lbnUubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBtZW51c1sgaSBdLnN1Yk1lbnVbIDAgXS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmFkZFNlbGVjdGlvbiggdGl0bGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRTdWJNZW51KCBtZW51c1sgaSBdLnRpdGxlLCBtZW51c1sgaSBdLnN1Yk1lbnUgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVudTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHN1YiBtZW51XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSBTdWIgbWVudSB0aXRsZVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXMgLSBJdGVtIGFycmF5IGxpc3RcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU3ViTWVudTogZnVuY3Rpb24gKCB0aXRsZSwgaXRlbXMgKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIG1lbnUsIHN1Yk1lbnUgPSB0aGlzLmNyZWF0ZU1lbnUoKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIHN1Yk1lbnUuYWN0aXZlSXRlbSA9IG51bGw7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFwICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnUgPSBzY29wZS5tYWluTWVudTtcclxuICAgICAgICAgICAgbWVudS5jaGFuZ2VTaXplKCBtZW51Ll93aWR0aCApO1xyXG4gICAgICAgICAgICBtZW51LnVuc2xpZGVBbGwoKTtcclxuICAgICAgICAgICAgbWVudS5zaG93KCk7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc2xpZGVBbGwoIHRydWUgKTtcclxuICAgICAgICAgICAgc3ViTWVudS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMudHlwZSAhPT0gJ2hlYWRlcicgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zZXRBY3RpdmVJdGVtKCB0aGlzICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggdGhpcy50ZXh0Q29udGVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5oYW5kbGVyICkgeyB0aGlzLmhhbmRsZXIoKTsgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuYWRkSGVhZGVyKCB0aXRsZSApLmFkZEljb24oIHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSApLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHN1Yk1lbnUuYWRkSXRlbSggaXRlbXNbIGkgXS50aXRsZSApO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gMzAwO1xyXG4gICAgICAgICAgICBpdGVtLmhhbmRsZXIgPSBpdGVtc1sgaSBdLmhhbmRsZXI7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkSWNvbiggJyAnLCB0cnVlICk7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvblRhcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggIXN1Yk1lbnUuYWN0aXZlSXRlbSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJNZW51LnNsaWRlQWxsKCB0cnVlICk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdWJNZW51O1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGdlbmVyYWwgbWVudVxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBIHNwYW4gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNZW51OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBtZW51LnN0eWxlO1xyXG5cclxuICAgICAgICBzdHlsZS5wYWRkaW5nID0gJzVweCAwJztcclxuICAgICAgICBzdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgc3R5bGUuYm90dG9tID0gJzEwMCUnO1xyXG4gICAgICAgIHN0eWxlLnJpZ2h0ID0gJzE0cHgnO1xyXG4gICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmFmYWZhJztcclxuICAgICAgICBzdHlsZS5mb250RmFtaWx5ID0gJ0hlbHZldGljYSBOZXVlJztcclxuICAgICAgICBzdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcclxuICAgICAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gJzAgMCAxMnB0IHJnYmEoMCwwLDAsMC4yNSknO1xyXG4gICAgICAgIHN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xyXG4gICAgICAgIHN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgc3R5bGUud2lsbENoYW5nZSA9ICd3aWR0aCwgaGVpZ2h0LCBvcGFjaXR5JztcclxuICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG4gICAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLkRFRkFVTFRfVFJBTlNJVElPTjtcclxuXHJcbiAgICAgICAgbWVudS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG1lbnUuY2hhbmdlU2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd2lkdGggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggaGVpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LmhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnZpc2libGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LnNsaWRlQWxsID0gZnVuY3Rpb24gKCByaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKysgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lbnUuY2hpbGRyZW5bIGkgXS5zbGlkZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWVudS5jaGlsZHJlblsgaSBdLnNsaWRlKCByaWdodCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS51bnNsaWRlQWxsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbWVudS5jaGlsZHJlbi5sZW5ndGg7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggbWVudS5jaGlsZHJlblsgaSBdLnVuc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hpbGRyZW5bIGkgXS51bnNsaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LmFkZEhlYWRlciA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBzY29wZS5jcmVhdGVNZW51SXRlbUhlYWRlciggdGl0bGUgKTtcclxuICAgICAgICAgICAgaGVhZGVyLnR5cGUgPSAnaGVhZGVyJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGhlYWRlciApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcjtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRJdGVtID0gZnVuY3Rpb24gKCB0aXRsZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzY29wZS5jcmVhdGVNZW51SXRlbSggdGl0bGUgKTtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ2l0ZW0nO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCggaXRlbSApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuc2V0QWN0aXZlSXRlbSA9IGZ1bmN0aW9uICggaXRlbSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5hY3RpdmVJdGVtICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRJY29uKCAnICcgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0SWNvbiggRGF0YUltYWdlLkNoZWNrICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY3VzdG9tIGl0ZW0gZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9IC0gVGhlIGRvbSBlbGVtZW50IGljb25cclxuICAgICAqL1xyXG4gICAgY3JlYXRlQ3VzdG9tSXRlbTogZnVuY3Rpb24gKCBvcHRpb25zID0ge30gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcclxuICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9ucy5lbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG4gICAgICAgIGNvbnN0IHsgb25EaXNwb3NlIH0gPSBvcHRpb25zO1xyXG5cclxuICAgICAgICBpdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICBpdGVtLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcclxuICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gJzQ0cHgnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnNjAlJztcclxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcclxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUud2Via2l0VXNlclNlbGVjdCA9IFxyXG5cdFx0aXRlbS5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXHJcblx0XHRpdGVtLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAvLyBXaGl0ZSBnbG93IG9uIGljb25cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hzdGFydCcgOiAnbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxyXG5cdFx0XHRpdGVtLnN0eWxlLndlYmtpdEZpbHRlciA9ICdkcm9wLXNoYWRvdygwIDAgNXB4IHJnYmEoMjU1LDI1NSwyNTUsMSkpJztcclxuICAgICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZmlsdGVyID0gXHJcblx0XHRcdGl0ZW0uc3R5bGUud2Via2l0RmlsdGVyID0gJyc7XHJcbiAgICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1lcmdlU3R5bGVPcHRpb25zKCBpdGVtLCBvcHRpb25zLnN0eWxlICk7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5vblRhcCApIHtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvcHRpb25zLm9uVGFwLCBmYWxzZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW0uZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnY2xpY2snLCBvcHRpb25zLm9uVGFwLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvbkRpc3Bvc2UgKSB7IG9wdGlvbnMub25EaXNwb3NlKCk7IH1cclxuXHJcbiAgICAgICAgfTtcclxuXHRcdFxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZXJnZSBpdGVtIGNzcyBzdHlsZVxyXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBiZSBtZXJnZWQgd2l0aCBzdHlsZVxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIHN0eWxlIG9wdGlvbnNcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIHNhbWUgZWxlbWVudCB3aXRoIG1lcmdlZCBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgbWVyZ2VTdHlsZU9wdGlvbnM6IGZ1bmN0aW9uICggZWxlbWVudCwgb3B0aW9ucyA9IHt9ICkge1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgcHJvcGVydHkgaW4gb3B0aW9ucyApe1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvcHRpb25zLmhhc093blByb3BlcnR5KCBwcm9wZXJ0eSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbIHByb3BlcnR5IF0gPSBvcHRpb25zWyBwcm9wZXJ0eSBdO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIHdpZGdldHMgYnkgZGV0YWNoaW5nIGRvbSBlbGVtZW50cyBmcm9tIGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmJhckVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmJhckVsZW1lbnQgKTtcclxuICAgICAgICAgICAgdGhpcy5iYXJFbGVtZW50LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5iYXJFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHRcclxufSApO1xyXG5cclxuZXhwb3J0IHsgV2lkZ2V0IH07IiwiaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XHJcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBCYXNlIFBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge1RIUkVFLkdlb21ldHJ5fSBnZW9tZXRyeSAtIFRoZSBnZW9tZXRyeSBmb3IgdGhpcyBwYW5vcmFtYVxyXG4gKiBAcGFyYW0ge1RIUkVFLk1hdGVyaWFsfSBtYXRlcmlhbCAtIFRoZSBtYXRlcmlhbCBmb3IgdGhpcyBwYW5vcmFtYVxyXG4gKi9cclxuZnVuY3Rpb24gUGFub3JhbWEgKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKSB7XHJcblxyXG4gICAgVEhSRUUuTWVzaC5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSAncGFub3JhbWEnO1xyXG5cclxuICAgIHRoaXMuSW1hZ2VRdWFsaXR5TG93ID0gMTtcclxuICAgIHRoaXMuSW1hZ2VRdWFsaXR5RmFpciA9IDI7XHJcbiAgICB0aGlzLkltYWdlUXVhbGl0eU1lZGl1bSA9IDM7XHJcbiAgICB0aGlzLkltYWdlUXVhbGl0eUhpZ2ggPSA0O1xyXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlTdXBlckhpZ2ggPSA1O1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAxMDAwO1xyXG5cclxuICAgIHRoaXMuZGVmYXVsdEluZm9zcG90U2l6ZSA9IDM1MDtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMubGlua2VkU3BvdHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID0gZmFsc2U7XHJcblx0XHJcbiAgICB0aGlzLmxpbmtpbmdJbWFnZVVSTCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMubGlua2luZ0ltYWdlU2NhbGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuQmFja1NpZGU7XHJcbiAgICB0aGlzLm1hdGVyaWFsLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgIHRoaXMuc2NhbGUueCAqPSAtMTtcclxuICAgIHRoaXMucmVuZGVyT3JkZXIgPSAtMTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMgKS50bygge30sIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gLyAyICk7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMuZmFkZUluLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtY29udGFpbmVyJywgdGhpcy5zZXRDb250YWluZXIuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMub25DbGljay5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICB0aGlzLnNldHVwVHJhbnNpdGlvbnMoKTtcclxuXHJcbn1cclxuXHJcblBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLk1lc2gucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogUGFub3JhbWEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRpbmcgYW4gb2JqZWN0XHJcbiAgICAgKiBUbyBjb3VudGVyIHRoZSBzY2FsZS54ID0gLTEsIGl0IHdpbGwgYXV0b21hdGljYWxseSBhZGQgYW4gXHJcbiAgICAgKiBlbXB0eSBvYmplY3Qgd2l0aCBpbnZlcnRlZCBzY2FsZSBvbiB4XHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBhZGRlZFxyXG4gICAgICovXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICBsZXQgaW52ZXJ0ZWRPYmplY3Q7XHJcblxyXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBpbmZvc3BvdHNcclxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3QgPSBvYmplY3Q7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyICkgeyBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyIH0gKTsgfVxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWluZm9zcG90LWZvY3VzJywgbWV0aG9kOiBmdW5jdGlvbiAoIHZlY3RvciwgZHVyYXRpb24sIGVhc2luZyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogSW5mb3Nwb3QgZm9jdXMgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndHdlZW5Db250cm9sQ2VudGVyJywgZGF0YTogWyB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgXSB9ICk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0uYmluZCggdGhpcyApIH0gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gQ291bnRlciBzY2FsZS54ID0gLTEgZWZmZWN0XHJcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlLnggPSAtMTtcclxuICAgICAgICAgICAgaW52ZXJ0ZWRPYmplY3Quc2NhbGVQbGFjZUhvbGRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LmFkZCggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVEhSRUUuT2JqZWN0M0QucHJvdG90eXBlLmFkZC5jYWxsKCB0aGlzLCBpbnZlcnRlZE9iamVjdCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLm9uTG9hZCgpO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xpY2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBldmVudCAtIENsaWNrIGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIEluZm9zcG90I2Rpc21pc3NcclxuICAgICAqL1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC5pbnRlcnNlY3RzICYmIGV2ZW50LmludGVyc2VjdHMubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBEaW1pc3MgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjZGlzbWlzc1xyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzbWlzcycgfSApO1xyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYSBcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8b2JqZWN0fSBkYXRhIC0gRGF0YSB3aXRoIGNvbnRhaW5lciBpbmZvcm1hdGlvblxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBJbmZvc3BvdCNwYW5vbGVucy1jb250YWluZXJcclxuICAgICAqL1xyXG4gICAgc2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoIGRhdGEgKSB7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXI7XHJcblxyXG4gICAgICAgIGlmICggZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGF0YSAmJiBkYXRhLmNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGEuY29udGFpbmVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKCBmdW5jdGlvbiAoIGNoaWxkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY2hpbGQgaW5zdGFuY2VvZiBJbmZvc3BvdCAmJiBjaGlsZC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgY29udGFpbmVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gVGhlIGNvbnRhaW5lciBvZiB0aGlzIHBhbm9yYW1hXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyOiBjb250YWluZXIgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBsb2FkZWRcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjbG9hZFxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMb2FkIHBhbm9yYW1hIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbG9hZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbG9hZCcgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgaXMgaW4gcHJvZ3Jlc3NcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjcHJvZ3Jlc3NcclxuICAgICAqL1xyXG4gICAgb25Qcm9ncmVzczogZnVuY3Rpb24gKCBwcm9ncmVzcyApIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTG9hZGluZyBwYW5vcmFtYSBwcm9ncmVzcyBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Byb2dyZXNzXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtvYmplY3R9IHByb2dyZXNzIC0gVGhlIHByb2dyZXNzIG9iamVjdCBjb250YWluaW5nIGxvYWRlZCBhbmQgdG90YWwgYW1vdW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcm9ncmVzcycsIHByb2dyZXNzOiBwcm9ncmVzcyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBsb2FkaW5nIGhhcyBlcnJvclxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlcnJvclxyXG4gICAgICovXHJcbiAgICBvbkVycm9yOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExvYWRpbmcgcGFub3JhbWEgZXJyb3IgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlcnJvclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZXJyb3InIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHpvb20gbGV2ZWwgYmFzZWQgb24gd2luZG93IHdpZHRoXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB6b29tIGxldmVsIGluZGljYXRpbmcgaW1hZ2UgcXVhbGl0eVxyXG4gICAgICovXHJcbiAgICBnZXRab29tTGV2ZWw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IHpvb21MZXZlbDtcclxuXHJcbiAgICAgICAgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDAgKSB7XHJcblxyXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUZhaXI7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gODAwICYmICB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMjgwICkge1xyXG5cclxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW07XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHdpbmRvdy5pbm5lcldpZHRoID4gMTI4MCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxOTIwICkge1xyXG5cclxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlIaWdoO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDE5MjAgKSB7XHJcblxyXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eVN1cGVySGlnaDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TG93O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB6b29tTGV2ZWw7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0ZXh0dXJlIG9mIGEgcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgLSBUZXh0dXJlIHRvIGJlIHVwZGF0ZWRcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVGV4dHVyZTogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGluZm9zcG90cyBpbiB0aGlzIHBhbm9yYW1hXHJcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc1Zpc2libGUgLSBWaXNpYmlsaXR5IG9mIGluZm9zcG90c1xyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGluIG1pbGxpc2Vjb25kcyB0byBjaGFuZ2UgdmlzaWJpbGl0eVxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5OiBmdW5jdGlvbiAoIGlzVmlzaWJsZSwgZGVsYXkgKSB7XHJcblxyXG4gICAgICAgIGRlbGF5ID0gKCBkZWxheSAhPT0gdW5kZWZpbmVkICkgPyBkZWxheSA6IDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpc2libGUgPSAoIGlzVmlzaWJsZSAhPT0gdW5kZWZpbmVkICkgPyBpc1Zpc2libGUgOiAoIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPyBmYWxzZSA6IHRydWUgKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdmlzaWJsZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnNob3coIGRlbGF5ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmhpZGUoIGRlbGF5ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNJbmZvc3BvdFZpc2libGUgPSB2aXNpYmxlO1xyXG5cclxuICAgICAgICAvLyBBbmltYXRpb24gY29tcGxldGUgZXZlbnRcclxuICAgICAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBDb21wbGV0ZSB0b2dnbGluZyBpbmZvc3BvdCB2aXNpYmlsaXR5XHJcbiAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGVcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2luZm9zcG90LWFuaW1hdGlvbi1jb21wbGV0ZScsIHZpc2libGU6IHZpc2libGUgfSApO1xyXG5cclxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApLmRlbGF5KCBkZWxheSApLnN0YXJ0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBpbWFnZSBvZiB0aGlzIHBhbm9yYW1hJ3MgbGlua2luZyBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAtIFVybCB0byB0aGUgaW1hZ2UgYXNzZXRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSAtIFNjYWxlIGZhY3RvciBvZiB0aGUgaW5mb3Nwb3RcclxuICAgICAqL1xyXG4gICAgc2V0TGlua2luZ0ltYWdlOiBmdW5jdGlvbiAoIHVybCwgc2NhbGUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubGlua2luZ0ltYWdlVVJMID0gdXJsO1xyXG4gICAgICAgIHRoaXMubGlua2luZ0ltYWdlU2NhbGUgPSBzY2FsZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGluayBvbmUtd2F5IHBhbm9yYW1hXHJcbiAgICAgKiBAcGFyYW0gIHtQYW5vcmFtYX0gcGFubyAgLSBUaGUgcGFub3JhbWEgdG8gYmUgbGlua2VkIHRvXHJcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5WZWN0b3IzfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiBpbmZvc3BvdCB3aGljaCBuYXZpZ2F0ZXMgdG8gdGhlIHBhbm9cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2ltYWdlU2NhbGU9MzAwXSAtIEltYWdlIHNjYWxlIG9mIGxpbmtlZCBpbmZvc3BvdFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBbaW1hZ2VTcmM9RGF0YUltYWdlLkFycm93XSAtIFRoZSBpbWFnZSBzb3VyY2Ugb2YgbGlua2VkIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoIHBhbm8sIHBvc2l0aW9uLCBpbWFnZVNjYWxlLCBpbWFnZVNyYyApIHtcclxuXHJcbiAgICAgICAgbGV0IHNjYWxlLCBpbWc7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICggIXBvc2l0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnUGxlYXNlIHNwZWNpZnkgaW5mb3Nwb3QgcG9zaXRpb24gZm9yIGxpbmtpbmcnICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5mb3Nwb3Qgc2NhbGVcclxuICAgICAgICBpZiAoIGltYWdlU2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlID0gaW1hZ2VTY2FsZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggcGFuby5saW5raW5nSW1hZ2VTY2FsZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGUgPSBwYW5vLmxpbmtpbmdJbWFnZVNjYWxlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2NhbGUgPSAzMDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIEluZm9zcG90IGltYWdlXHJcbiAgICAgICAgaWYgKCBpbWFnZVNyYyApIHtcclxuXHJcbiAgICAgICAgICAgIGltZyA9IGltYWdlU3JjO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBwYW5vLmxpbmtpbmdJbWFnZVVSTCApIHtcclxuXHJcbiAgICAgICAgICAgIGltZyA9IHBhbm8ubGlua2luZ0ltYWdlVVJMO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaW1nID0gRGF0YUltYWdlLkFycm93O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5mb3Nwb3RcclxuICAgICAgICBjb25zdCBzcG90ID0gbmV3IEluZm9zcG90KCBzY2FsZSwgaW1nICk7XHJcbiAgICAgICAgc3BvdC5wb3NpdGlvbi5jb3B5KCBwb3NpdGlvbiApO1xyXG4gICAgICAgIHNwb3QudG9QYW5vcmFtYSA9IHBhbm87XHJcbiAgICAgICAgc3BvdC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3NldFBhbm9yYW1hJywgZGF0YTogcGFubyB9ICk7XHJcblxyXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHRoaXMubGlua2VkU3BvdHMucHVzaCggc3BvdCApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCggc3BvdCApO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcdFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2V0dXBUcmFuc2l0aW9uczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXHJcbiAgICAgICAgICAgIC5vblN0YXJ0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWF0ZXJpYWwudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBmYWRlIGluIHN0YXJ0IGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItZmFkZS1zdGFydFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItZmFkZS1zdGFydCcgfSApO1xyXG5cclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0IClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWF0ZXJpYWwudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBjb21wbGV0ZSBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLWNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZS1jb21wbGV0ZScgfSApO1xyXG5cclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBjb21wbGV0ZSBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1jb21wbGV0ZScgfSApO1xyXG5cclxuICAgICAgICAgICAgfS5iaW5kICggdGhpcyApIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkZhZGVBbmltYXRpb25VcGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWxwaGEgPSB0aGlzLm1hdGVyaWFsLm9wYWNpdHk7XHJcbiAgICAgICAgY29uc3QgeyB1bmlmb3JtcyB9ID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcbiAgICAgICAgaWYgKCB1bmlmb3JtcyAmJiB1bmlmb3Jtcy5vcGFjaXR5ICkge1xyXG4gICAgICAgICAgICB1bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gYWxwaGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBmYWRpbmcgaW4gYW5pbWF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyLWZhZGUtY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgZmFkZUluOiBmdW5jdGlvbiAoIGR1cmF0aW9uICkge1xyXG5cclxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb25cclxuICAgICAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDEgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAub25VcGRhdGUoIHRoaXMub25GYWRlQW5pbWF0aW9uVXBkYXRlLmJpbmQoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoIHRydWUsIGR1cmF0aW9uIC8gMiApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZmFkZSBjb21wbGV0ZSBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWZhZGUtY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLWZhZGUtY29tcGxldGUnIH0gKTtcdFx0XHRcclxuXHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGZhZGluZyBvdXQgYW5pbWF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBmYWRlT3V0OiBmdW5jdGlvbiAoIGR1cmF0aW9uICkge1xyXG5cclxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uID49IDAgPyBkdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb25cclxuICAgICAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDAgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAub25VcGRhdGUoIHRoaXMub25GYWRlQW5pbWF0aW9uVXBkYXRlLmJpbmQoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gZW50ZXJpbmcgYSBwYW5vcmFtYSBcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXJcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlci1zdGFydFxyXG4gICAgICovXHJcbiAgICBvbkVudGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgIC50bygge30sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLm9uU3RhcnQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gc3RhcnRpbmcgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1zdGFydFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItc3RhcnQnIH0gKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5sb2FkZWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFkZUluKCBkdXJhdGlvbiApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZXZlbnRcclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXJcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyJyB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xyXG5cclxuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub3JhbWEtZW50ZXInIH0gKTtcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBsZWF2aW5nIGEgcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjbGVhdmVcclxuICAgICAqL1xyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAudG8oIHt9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5vblN0YXJ0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIHN0YXJ0aW5nIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbGVhdmUtc3RhcnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2xlYXZlLXN0YXJ0JyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWRlT3V0KCBkdXJhdGlvbiApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMZWF2ZSBwYW5vcmFtYSBldmVudFxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZVxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUnIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XHJcblxyXG4gICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vcmFtYS1sZWF2ZScgfSApO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5lbnRlclRyYW5zaXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uLnN0b3AoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT24gcGFub3JhbWEgZGlzcG9zZSBoYW5kbGVyXHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcclxuICAgICAgICAgKiBAcHJvcGVydHkgeyp9IGRhdGEgLSBUaGUgYXJndW1lbnQgdG8gYmUgcGFzc2VkIGludG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvblBhbm9yYW1hRGlzcG9zZScsIGRhdGE6IHRoaXMgfSApO1xyXG5cclxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZURpc3Bvc2UgKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGdlb21ldHJ5LCBtYXRlcmlhbCB9ID0gb2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSBvYmplY3QuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlRGlzcG9zZSggb2JqZWN0LmNoaWxkcmVuW2ldICk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGlmICggZ2VvbWV0cnkgKSB7IGdlb21ldHJ5LmRpc3Bvc2UoKTsgb2JqZWN0Lmdlb21ldHJ5ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBpZiAoIG1hdGVyaWFsICkgeyBtYXRlcmlhbC5kaXNwb3NlKCk7IG9iamVjdC5tYXRlcmlhbCA9IG51bGw7IH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCB0aGlzICk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5wYXJlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmUoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IFBhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvVGV4dHVyZUxvYWRlcic7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEVxdWlyZWN0YW5ndWxhciBiYXNlZCBpbWFnZSBwYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgdXJsIG9yIEhUTUxJbWFnZUVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIEltYWdlUGFub3JhbWEgKCBpbWFnZSwgX2dlb21ldHJ5LCBfbWF0ZXJpYWwgKSB7XHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gNTAwMDtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gX2dlb21ldHJ5IHx8IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gX21hdGVyaWFsIHx8IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XHJcblxyXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG4gICAgdGhpcy5zcmMgPSBpbWFnZTtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cclxufVxyXG5cclxuSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBJbWFnZVBhbm9yYW1hLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBpbWFnZSBhc3NldFxyXG4gICAgICogQHBhcmFtICB7Kn0gc3JjIC0gVXJsIG9yIGltYWdlIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCBzcmMgKSB7XHJcblxyXG4gICAgICAgIHNyYyA9IHNyYyB8fCB0aGlzLnNyYztcclxuXHJcbiAgICAgICAgaWYgKCAhc3JjICkgeyBcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ0ltYWdlIHNvdXJjZSB1bmRlZmluZWQnICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyApIHtcclxuXHJcbiAgICAgICAgICAgIFRleHR1cmVMb2FkZXIubG9hZCggc3JjLCB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICksIHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICksIHRoaXMub25FcnJvci5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc3JjIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkKCBuZXcgVEhSRUUuVGV4dHVyZSggc3JjICkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW1hZ2UgaXMgbG9hZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIC0gVGV4dHVyZSB0byBiZSB1cGRhdGVkXHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB0ZXh0dXJlICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIFBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VcclxuICAgICAqIEBtZW1iZXJPZiBJbWFnZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG1hdGVyaWFsOiB7IG1hcCB9IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAvLyBSZWxlYXNlIGNhY2hlZCBpbWFnZVxyXG4gICAgICAgIFRIUkVFLkNhY2hlLnJlbW92ZSggdGhpcy5zcmMgKTtcclxuXHJcbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IH1cclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBFbXB0eSBwYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEVtcHR5UGFub3JhbWEgKCkge1xyXG5cclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMDAwMDAsIG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcclxuXHJcbiAgICBnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoKSwgMSApICk7XHJcblxyXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG59XHJcblxyXG5FbXB0eVBhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEVtcHR5UGFub3JhbWFcclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEVtcHR5UGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBDdWJlbWFwLWJhc2VkIHBhbm9yYW1hXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge2FycmF5fSBpbWFnZXMgLSBBcnJheSBvZiA2IHVybHMgdG8gaW1hZ2VzLCBvbmUgZm9yIGVhY2ggc2lkZSBvZiB0aGUgQ3ViZVRleHR1cmUuIFRoZSB1cmxzIHNob3VsZCBiZSBzcGVjaWZpZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogcG9zLXgsIG5lZy14LCBwb3MteSwgbmVnLXksIHBvcy16LCBuZWctelxyXG4gKi9cclxuZnVuY3Rpb24gQ3ViZVBhbm9yYW1hICggaW1hZ2VzID0gW10gKXtcclxuXHJcbiAgICBjb25zdCBlZGdlTGVuZ3RoID0gMTAwMDA7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBPYmplY3QuYXNzaWduKCB7fSwgVEhSRUUuU2hhZGVyTGliWyAnY3ViZScgXSApO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGgsIGVkZ2VMZW5ndGggKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBzaGFkZXIudW5pZm9ybXMsXHJcbiAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWVcclxuXHJcbiAgICB9ICk7XHJcblxyXG4gICAgUGFub3JhbWEuY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XHJcbiAgICB0aGlzLmVkZ2VMZW5ndGggPSBlZGdlTGVuZ3RoO1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5vcGFjaXR5LnZhbHVlID0gMDtcclxuXHJcbn1cclxuXHJcbkN1YmVQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBDdWJlUGFub3JhbWEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIDYgaW1hZ2VzIGFuZCBiaW5kIGxpc3RlbmVyc1xyXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggXHRcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLCBcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKSwgXHJcbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICksIFxyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApIFxyXG5cclxuICAgICAgICApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gNiB0ZXh0dXJlcyBhcmUgcmVhZHlcclxuICAgICAqIEBwYXJhbSAge1RIUkVFLkN1YmVUZXh0dXJlfSB0ZXh0dXJlIC0gQ3ViZSB0ZXh0dXJlXHJcbiAgICAgKiBAbWVtYmVyT2YgQ3ViZVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblx0XHRcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndEN1YmUnIF0udmFsdWUgPSB0ZXh0dXJlO1xyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZVxyXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcdFxyXG5cclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRDdWJlO1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKCAoIGltYWdlICkgPT4geyBUSFJFRS5DYWNoZS5yZW1vdmUoIGltYWdlICk7IH0gKTtcclxuXHJcbiAgICAgICAgaWYgKCB2YWx1ZSBpbnN0YW5jZW9mIFRIUkVFLkN1YmVUZXh0dXJlICkge1xyXG5cclxuICAgICAgICAgICAgdmFsdWUuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBDdWJlUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBDdWJlUGFub3JhbWEgfSBmcm9tICcuL0N1YmVQYW5vcmFtYSc7XHJcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBCYXNpYyBwYW5vcmFtYSB3aXRoIDYgcHJlLWRlZmluZWQgZ3JpZCBpbWFnZXNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBCYXNpY1Bhbm9yYW1hICgpIHtcclxuXHJcbiAgICBjb25zdCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCA2OyBpKysgKSB7XHJcblxyXG4gICAgICAgIGltYWdlcy5wdXNoKCBEYXRhSW1hZ2UuV2hpdGVUaWxlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEN1YmVQYW5vcmFtYS5jYWxsKCB0aGlzLCBpbWFnZXMgKTtcclxuXHJcbn1cclxuXHJcbkJhc2ljUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggQ3ViZVBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEJhc2ljUGFub3JhbWFcclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEJhc2ljUGFub3JhbWEgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBWaWRlbyBQYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIEVxdWlyZWN0YW5ndWxhciB2aWRlbyB1cmxcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbiBmb3IgdmlkZW8gc2V0dGluZ3NcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMudmlkZW9FbGVtZW50XSAtIEhUTUw1IHZpZGVvIGVsZW1lbnQgY29udGFpbnMgdGhlIHZpZGVvXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubG9vcD10cnVlXSAtIFNwZWNpZnkgaWYgdGhlIHZpZGVvIHNob3VsZCBsb29wIGluIHRoZSBlbmRcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5tdXRlZD10cnVlXSAtIE11dGUgdGhlIHZpZGVvIG9yIG5vdC4gTmVlZCB0byBiZSB0cnVlIGluIG9yZGVyIHRvIGF1dG9wbGF5IG9uIHNvbWUgYnJvd3NlcnNcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvcGxheT1mYWxzZV0gLSBTcGVjaWZ5IGlmIHRoZSB2aWRlbyBzaG91bGQgYXV0byBwbGF5XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucGxheXNpbmxpbmU9dHJ1ZV0gLSBTcGVjaWZ5IGlmIHZpZGVvIHNob3VsZCBwbGF5IGlubGluZSBmb3IgaU9TLiBJZiB5b3Ugd2FudCBpdCB0byBhdXRvIHBsYXkgaW5saW5lLCBzZXQgYm90aCBhdXRvcGxheSBhbmQgbXV0ZWQgb3B0aW9ucyB0byB0cnVlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jcm9zc09yaWdpbj1cImFub255bW91c1wiXSAtIFNldHMgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgZm9yIHRoZSB2aWRlbywgd2hpY2ggYWxsb3dzIGZvciBjcm9zcy1vcmlnaW4gdmlkZW9zIGluIHNvbWUgYnJvd3NlcnMgKEZpcmVmb3gsIENocm9tZSkuIFNldCB0byBlaXRoZXIgXCJhbm9ueW1vdXNcIiBvciBcInVzZS1jcmVkZW50aWFsc1wiLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3JhZGl1cz01MDAwXSAtIFRoZSBtaW5pbXVtIHJhZGl1cyBmb3IgdGhpcyBwYW5vcmFtXHJcbiAqL1xyXG5mdW5jdGlvbiBWaWRlb1Bhbm9yYW1hICggc3JjLCBvcHRpb25zID0ge30gKSB7XHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gNTAwMDtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KCByYWRpdXMsIDYwLCA0MCApO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xyXG5cclxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuICAgIHRoaXMuc3JjID0gc3JjO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuXHJcbiAgICAgICAgdmlkZW9FbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICksXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBtdXRlZDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgcGxheXNpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcclxuXHJcbiAgICB0aGlzLnZpZGVvRWxlbWVudCA9IHRoaXMub3B0aW9ucy52aWRlb0VsZW1lbnQ7XHJcbiAgICB0aGlzLnZpZGVvUHJvZ3Jlc3MgPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnBhdXNlVmlkZW8uYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5yZXN1bWVWaWRlb1Byb2dyZXNzLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAndmlkZW8tdG9nZ2xlJywgdGhpcy50b2dnbGVWaWRlby5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRpbWUnLCB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUuYmluZCggdGhpcyApICk7XHJcblxyXG59O1xyXG5cclxuVmlkZW9QYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBWaWRlb1Bhbm9yYW1hLFxyXG5cclxuICAgIGlzTW9iaWxlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEgKTtcclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdmlkZW8gcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyAgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG11dGVkLCBsb29wLCBhdXRvcGxheSwgcGxheXNpbmxpbmUsIGNyb3NzT3JpZ2luIH0gPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICAgICAgY29uc3Qgb25Qcm9ncmVzcyA9IHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgb25Mb2FkID0gdGhpcy5vbkxvYWQuYmluZCggdGhpcyApO1xyXG5cclxuICAgICAgICB2aWRlby5sb29wID0gbG9vcDtcclxuICAgICAgICB2aWRlby5hdXRvcGxheSA9IGF1dG9wbGF5O1xyXG4gICAgICAgIHZpZGVvLnBsYXlzaW5saW5lID0gcGxheXNpbmxpbmU7XHJcbiAgICAgICAgdmlkZW8uY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcclxuICAgICAgICB2aWRlby5tdXRlZCA9IG11dGVkO1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKCBwbGF5c2lubGluZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ3BsYXlzaW5saW5lJywgJycgKTtcclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnd2Via2l0LXBsYXlzaW5saW5lJywgJycgKTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgY29uc3Qgb25sb2FkZWRkYXRhID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvVGV4dHVyZSggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggYXV0b3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGb3IgbW9iaWxlIHNpbGVudCBhdXRvcGxheVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuaXNNb2JpbGUoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXV0b3BsYXkgJiYgbXV0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcclxuICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRml4IGZvciB0aHJlZWpzIHI4OSBkZWxheWVkIHVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZDogMSwgdG90YWw6IDEgfSApO1xyXG4gICAgICAgICAgICAgICAgb25Mb2FkKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggbG9hZGVkICk7XHJcblx0XHRcdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlYWR5IHN0YXRlIG9mIHRoZSBhdWRpby92aWRlbyBlbGVtZW50XHJcbiAgICAgICAgICogMCA9IEhBVkVfTk9USElORyAtIG5vIGluZm9ybWF0aW9uIHdoZXRoZXIgb3Igbm90IHRoZSBhdWRpby92aWRlbyBpcyByZWFkeVxyXG4gICAgICAgICAqIDEgPSBIQVZFX01FVEFEQVRBIC0gbWV0YWRhdGEgZm9yIHRoZSBhdWRpby92aWRlbyBpcyByZWFkeVxyXG4gICAgICAgICAqIDIgPSBIQVZFX0NVUlJFTlRfREFUQSAtIGRhdGEgZm9yIHRoZSBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uIGlzIGF2YWlsYWJsZSwgYnV0IG5vdCBlbm91Z2ggZGF0YSB0byBwbGF5IG5leHQgZnJhbWUvbWlsbGlzZWNvbmRcclxuICAgICAgICAgKiAzID0gSEFWRV9GVVRVUkVfREFUQSAtIGRhdGEgZm9yIHRoZSBjdXJyZW50IGFuZCBhdCBsZWFzdCB0aGUgbmV4dCBmcmFtZSBpcyBhdmFpbGFibGVcclxuICAgICAgICAgKiA0ID0gSEFWRV9FTk9VR0hfREFUQSAtIGVub3VnaCBkYXRhIGF2YWlsYWJsZSB0byBzdGFydCBwbGF5aW5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCB2aWRlby5yZWFkeVN0YXRlID4gMiApIHtcclxuXHJcbiAgICAgICAgICAgIG9ubG9hZGVkZGF0YS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHZpZGVvLnF1ZXJ5U2VsZWN0b3JBbGwoICdzb3VyY2UnICkubGVuZ3RoID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzb3VyY2UnICk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgICAgICAgICB2aWRlby5hcHBlbmRDaGlsZCggc291cmNlICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2aWRlby5sb2FkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnbG9hZGVkZGF0YScsIG9ubG9hZGVkZGF0YS5iaW5kKCB0aGlzICkgKTtcclxuXHRcdFxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy52aWRlb1Byb2dyZXNzID0gdmlkZW8uZHVyYXRpb24gPj0gMCA/IHZpZGVvLmN1cnJlbnRUaW1lIC8gdmlkZW8uZHVyYXRpb24gOiAwO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnb25WaWRlb1VwZGF0ZSdcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEgLSBUaGUgcGVyY2VudGFnZSBvZiB2aWRlbyBwcm9ncmVzcy4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHRoaXMudmlkZW9Qcm9ncmVzcyB9ICk7XHJcblxyXG4gICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGlmICggIWxvb3AgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0uYmluZCggdGhpcyApLCBmYWxzZSApOyBcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHZpZGVvIHRleHR1cmVcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gIC0gVGhlIGh0bWw1IHZpZGVvIGVsZW1lbnRcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBzZXRWaWRlb1RleHR1cmU6IGZ1bmN0aW9uICggdmlkZW8gKSB7XHJcblxyXG4gICAgICAgIGlmICggIXZpZGVvICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlb1RleHR1cmUgPSBuZXcgVEhSRUUuVmlkZW9UZXh0dXJlKCB2aWRlbyApO1xyXG4gICAgICAgIHZpZGVvVGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdmlkZW9UZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB2aWRlb1RleHR1cmUuZm9ybWF0ID0gVEhSRUUuUkdCRm9ybWF0O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoIHZpZGVvVGV4dHVyZSApO1xyXG5cdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdW5kZWZpbmVkO1x0XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5yZXNldC5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHZpZGVvIGlzIHBhdXNlZFxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gLSBpcyB2aWRlbyBwYXVzZWQgb3Igbm90XHJcbiAgICAgKi9cclxuICAgIGlzVmlkZW9QYXVzZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50LnBhdXNlZDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHZpZGVvIHRvIHBsYXkgb3IgcGF1c2VcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCAhdmlkZW8gKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB2aWRlb1sgdmlkZW8ucGF1c2VkID8gJ3BsYXknIDogJ3BhdXNlJyBdKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB2aWRlbyBjdXJyZW50VGltZVxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbnMgcGVyY2VudGFnZS4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVvQ3VycmVudFRpbWU6IGZ1bmN0aW9uICggeyBwZXJjZW50YWdlIH0gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gJiYgIU51bWJlci5pc05hTiggcGVyY2VudGFnZSApICYmIHBlcmNlbnRhZ2UgIT09IDEgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jdXJyZW50VGltZSA9IHZpZGVvLmR1cmF0aW9uICogcGVyY2VudGFnZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdvblZpZGVvVXBkYXRlJywgZGF0YTogcGVyY2VudGFnZSB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxheSB2aWRlb1xyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGxheVxyXG4gICAgICogQGZpcmVzIFZpZGVvUGFub3JhbWEjcGxheS1lcnJvclxyXG4gICAgICovXHJcbiAgICBwbGF5VmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hFdmVudCA9IHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgb25TdWNjZXNzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFBsYXkgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGxheVxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoIGVycm9yICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gRXJyb3IgcGxheWluZyB2aWRlby4gUmV0cnkgbmV4dCBmcmFtZS4gUG9zc2libHkgV2FpdGluZyBmb3IgdXNlciBpbnRlcmFjdGlvblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBwbGF5VmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXktZXJyb3InLCBlcnJvciB9ICk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gJiYgdmlkZW8ucGF1c2VkICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ucGxheSgpLnRoZW4oIG9uU3VjY2VzcyApLmNhdGNoKCBvbkVycm9yICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGF1c2UgdmlkZW9cclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BhdXNlXHJcbiAgICAgKi9cclxuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyAmJiAhdmlkZW8ucGF1c2VkICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQYXVzZSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZGVvUGFub3JhbWEjcGF1c2VcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGF1c2UnIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdW1lIHZpZGVvXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlc3VtZVZpZGVvUHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5yZWFkeVN0YXRlID49IDQgJiYgdmlkZW8uYXV0b3BsYXkgJiYgIXRoaXMuaXNNb2JpbGUoKSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IGZhbHNlIH0gKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiB0cnVlIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogdGhpcy52aWRlb1Byb2dyZXNzIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdmlkZW8gYXQgc3RhdGluZyBwb2ludFxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXNldFZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUoIHsgcGVyY2VudGFnZTogMCB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdmlkZW8gaXMgbXV0ZWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gaXMgdmlkZW8gbXV0ZWQgb3Igbm90XHJcbiAgICAgKi9cclxuICAgIGlzVmlkZW9NdXRlZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQubXV0ZWQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE11dGUgdmlkZW9cclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbXV0ZVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLm11dGVkICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndm9sdW1lY2hhbmdlJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVubXV0ZSB2aWRlb1xyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1bm11dGVWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICYmIHRoaXMuaXNWaWRlb011dGVkKCkgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5tdXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndm9sdW1lY2hhbmdlJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZpZGVvIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgZ2V0VmlkZW9FbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSB2aWRlbyBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbWF0ZXJpYWw6IHsgbWFwIH0gfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMucGF1c2VWaWRlbygpO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnBhdXNlVmlkZW8uYmluZCggdGhpcyApICk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd2aWRlby10b2dnbGUnLCB0aGlzLnRvZ2dsZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRpbWUnLCB0aGlzLnNldFZpZGVvQ3VycmVudFRpbWUuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyB9XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBWaWRlb1Bhbm9yYW1hIH07IiwiXHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuL1RleHR1cmVMb2FkZXInO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIFN0cmVldCBWaWV3IExvYWRlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtZXRlcnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyICggcGFyYW1ldGVycyA9IHt9ICkge1xyXG5cclxuICAgIHRoaXMuX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgdGhpcy5fem9vbSA9IG51bGw7XHJcbiAgICB0aGlzLl9wYW5vSWQgPSBudWxsO1xyXG4gICAgdGhpcy5fcGFub0NsaWVudCA9IG5ldyBnb29nbGUubWFwcy5TdHJlZXRWaWV3U2VydmljZSgpO1xyXG4gICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgdGhpcy5fdG90YWwgPSAwO1xyXG4gICAgdGhpcy5fY2FudmFzID0gW107XHJcbiAgICB0aGlzLl9jdHggPSBbXTtcclxuICAgIHRoaXMuX3djID0gMDtcclxuICAgIHRoaXMuX2hjID0gMDtcclxuICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgdGhpcy5jb3B5cmlnaHQgPSAnJztcclxuICAgIHRoaXMub25TaXplQ2hhbmdlID0gbnVsbDtcclxuICAgIHRoaXMub25QYW5vcmFtYUxvYWQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMubGV2ZWxzVyA9IFsgMSwgMiwgNCwgNywgMTMsIDI2IF07XHJcbiAgICB0aGlzLmxldmVsc0ggPSBbIDEsIDEsIDIsIDQsIDcsIDEzIF07XHJcblxyXG4gICAgdGhpcy53aWR0aHMgPSBbIDQxNiwgODMyLCAxNjY0LCAzMzI4LCA2NjU2LCAxMzMxMiBdO1xyXG4gICAgdGhpcy5oZWlnaHRzID0gWyA0MTYsIDQxNiwgODMyLCAxNjY0LCAzMzI4LCA2NjU2IF07XHJcblxyXG4gICAgdGhpcy5tYXhXID0gNjY1NjtcclxuICAgIHRoaXMubWF4SCA9IDY2NTY7XHJcblxyXG4gICAgbGV0IGdsO1xyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoICdleHBlcmltZW50YWwtd2ViZ2wnICk7XHJcblxyXG4gICAgICAgIGlmKCAhZ2wgKSB7XHJcblxyXG4gICAgICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnd2ViZ2wnICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGVycm9yICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1heFcgPSBNYXRoLm1heCggZ2wuZ2V0UGFyYW1ldGVyKCBnbC5NQVhfVEVYVFVSRV9TSVpFICksIHRoaXMubWF4VyApO1xyXG4gICAgdGhpcy5tYXhIID0gTWF0aC5tYXgoIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApLCB0aGlzLm1heEggKTtcclxuXHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oIEdvb2dsZVN0cmVldHZpZXdMb2FkZXIucHJvdG90eXBlLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgcHJvZ3Jlc3NcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb2FkZWQgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWwgXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFByb2dyZXNzOiBmdW5jdGlvbiAoIGxvYWRlZCwgdG90YWwgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5vblByb2dyZXNzICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vblByb2dyZXNzKCB7IGxvYWRlZDogbG9hZGVkLCB0b3RhbDogdG90YWwgfSApO1xyXG5cclxuICAgICAgICB9XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGFwdCB0ZXh0dXJlIHRvIHpvb21cclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRhcHRUZXh0dXJlVG9ab29tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLndpZHRocyBbIHRoaXMuX3pvb20gXTtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5oZWlnaHRzWyB0aGlzLl96b29tIF07XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFcgPSB0aGlzLm1heFc7XHJcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcclxuXHJcbiAgICAgICAgdGhpcy5fd2MgPSBNYXRoLmNlaWwoIHcgLyBtYXhXICk7XHJcbiAgICAgICAgdGhpcy5faGMgPSBNYXRoLmNlaWwoIGggLyBtYXhIICk7XHJcblxyXG4gICAgICAgIGZvciggbGV0IHkgPSAwOyB5IDwgdGhpcy5faGM7IHkrKyApIHtcclxuICAgICAgICAgICAgZm9yKCBsZXQgeCA9IDA7IHggPCB0aGlzLl93YzsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcbiAgICAgICAgICAgICAgICBpZiggeCA8ICggdGhpcy5fd2MgLSAxICkgKSBjLndpZHRoID0gbWF4VzsgZWxzZSBjLndpZHRoID0gdyAtICggbWF4VyAqIHggKTtcclxuICAgICAgICAgICAgICAgIGlmKCB5IDwgKCB0aGlzLl9oYyAtIDEgKSApIGMuaGVpZ2h0ID0gbWF4SDsgZWxzZSBjLmhlaWdodCA9IGggLSAoIG1heEggKiB5ICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW52YXMucHVzaCggYyApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3R4LnB1c2goIGMuZ2V0Q29udGV4dCggJzJkJyApICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBvc2UgZnJvbSB0aWxlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFxyXG4gICAgICogQHBhcmFtIHsqfSB0ZXh0dXJlIFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjb21wb3NlRnJvbVRpbGU6IGZ1bmN0aW9uICggeCwgeSwgdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4VyA9IHRoaXMubWF4VztcclxuICAgICAgICBjb25zdCBtYXhIID0gdGhpcy5tYXhIO1xyXG5cclxuICAgICAgICB4ICo9IDUxMjtcclxuICAgICAgICB5ICo9IDUxMjtcclxuXHJcbiAgICAgICAgY29uc3QgcHggPSBNYXRoLmZsb29yKCB4IC8gbWF4VyApO1xyXG4gICAgICAgIGNvbnN0IHB5ID0gTWF0aC5mbG9vciggeSAvIG1heEggKTtcclxuXHJcbiAgICAgICAgeCAtPSBweCAqIG1heFc7XHJcbiAgICAgICAgeSAtPSBweSAqIG1heEg7XHJcblxyXG4gICAgICAgIHRoaXMuX2N0eFsgcHkgKiB0aGlzLl93YyArIHB4IF0uZHJhd0ltYWdlKCB0ZXh0dXJlLCAwLCAwLCB0ZXh0dXJlLndpZHRoLCB0ZXh0dXJlLmhlaWdodCwgeCwgeSwgNTEyLCA1MTIgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcygpO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvZ3Jlc3NcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9jb3VudCsrO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyggdGhpcy5fY291bnQsIHRoaXMuX3RvdGFsICk7XHJcblx0XHRcclxuICAgICAgICBpZiAoIHRoaXMuX2NvdW50ID09PSB0aGlzLl90b3RhbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSB0aGlzLl9jYW52YXM7XHJcbiAgICAgICAgICAgIHRoaXMucGFub0lkID0gdGhpcy5fcGFub0lkO1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLm9uUGFub3JhbWFMb2FkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25QYW5vcmFtYUxvYWQoIHRoaXMuX2NhbnZhc1sgMCBdICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wb3NlIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNvbXBvc2VQYW5vcmFtYTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFByb2dyZXNzKCAwLCAxICk7XHJcblx0XHRcclxuICAgICAgICBjb25zdCB3ID0gdGhpcy5sZXZlbHNXWyB0aGlzLl96b29tIF07XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMubGV2ZWxzSFsgdGhpcy5fem9vbSBdO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRcclxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fdG90YWwgPSB3ICogaDtcclxuXHJcbiAgICAgICAgY29uc3QgeyB1c2VXZWJHTCB9ID0gdGhpcy5fcGFyYW1ldGVycztcclxuXHJcbiAgICAgICAgZm9yKCBsZXQgeSA9IDA7IHkgPCBoOyB5KysgKSB7XHJcbiAgICAgICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgdzsgeCsrICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZ2VvMC5nZ3BodC5jb20vY2JrP2NiX2NsaWVudD1tYXBzX3N2LnRhY3RpbGUmYXV0aHVzZXI9MCZobD1lbiZvdXRwdXQ9dGlsZSZ6b29tPScgKyB0aGlzLl96b29tICsgJyZ4PScgKyB4ICsgJyZ5PScgKyB5ICsgJyZwYW5vaWQ9JyArIHRoaXMuX3Bhbm9JZCArICcmbmJ0JmZvdmVyPTInO1xyXG4gICAgICAgICAgICAgICAgKCBmdW5jdGlvbiggeCwgeSApIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVzZVdlYkdMICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gVGV4dHVyZUxvYWRlci5sb2FkKCB1cmwsIG51bGwsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlRnJvbVRpbGUoIHgsIHksIHRleHR1cmUgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZUZyb21UaWxlKCB4LCB5LCB0aGlzICk7XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSApKCB4LCB5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFub2lkIFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoIHBhbm9pZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkUGFubyggcGFub2lkICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgcGFub3JhbWFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkUGFubzogZnVuY3Rpb24oIGlkICkge1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9wYW5vQ2xpZW50LmdldFBhbm9yYW1hQnlJZCggaWQsIGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5TdHJlZXRWaWV3U3RhdHVzLk9LKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29weXJpZ2h0ID0gcmVzdWx0LmNvcHlyaWdodDtcclxuICAgICAgICAgICAgICAgIHNlbGYuX3Bhbm9JZCA9IHJlc3VsdC5sb2NhdGlvbi5wYW5vO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb21wb3NlUGFub3JhbWEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHpvb20gbGV2ZWxcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB6IFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRab29tOiBmdW5jdGlvbiggeiApIHtcclxuXHJcbiAgICAgICAgdGhpcy5fem9vbSA9IHo7XHJcbiAgICAgICAgdGhpcy5hZGFwdFRleHR1cmVUb1pvb20oKTtcclxuICAgIH1cclxuXHRcclxufSApO1xyXG5cclxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld0xvYWRlciB9OyIsImltcG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL0ltYWdlUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9Hb29nbGVTdHJlZXR2aWV3TG9hZGVyJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIHN0cmVldHZpZXcgcGFub3JhbWFcclxuICogQGRlc2NyaXB0aW9uIFtIb3cgdG8gZ2V0IFBhbm9yYW1hIElEXXtAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5OTE2MTQ5L2dvb2dsZS1tYXBzLXN0cmVldHZpZXctaG93LXRvLWdldC1wYW5vcmFtYS1pZH1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vSWQgLSBQYW5vcmFtYSBpZCBmcm9tIEdvb2dsZSBTdHJlZXR2aWV3IFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaUtleV0gLSBHb29nbGUgU3RyZWV0IFZpZXcgQVBJIEtleVxyXG4gKi9cclxuZnVuY3Rpb24gR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hICggcGFub0lkLCBhcGlLZXkgKSB7XHJcblxyXG4gICAgSW1hZ2VQYW5vcmFtYS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgdGhpcy5wYW5vSWQgPSBwYW5vSWQ7XHJcblxyXG4gICAgdGhpcy5nc3ZMb2FkZXIgPSBudWxsO1xyXG5cclxuICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc2V0dXBHb29nbGVNYXBBUEkoIGFwaUtleSApO1xyXG5cclxufVxyXG5cclxuR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIEltYWdlUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBHb29nbGUgU3RyZWV0IFZpZXcgYnkgcGFub3JhbWEgaWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYW5vSWQgLSBHb2dvZ2xlIFN0cmVldCBWaWV3IHBhbm9yYW1hIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCBwYW5vSWQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFJlcXVlc3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHBhbm9JZCA9ICggcGFub0lkIHx8IHRoaXMucGFub0lkICkgfHwge307XHJcblxyXG4gICAgICAgIGlmICggcGFub0lkICYmIHRoaXMuZ3N2TG9hZGVyICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkR1NWTG9hZGVyKCBwYW5vSWQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR1cCBHb29nbGUgTWFwIEFQSVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBhcGlLZXlcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXR1cEdvb2dsZU1hcEFQSTogZnVuY3Rpb24gKCBhcGlLZXkgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICk7XHJcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JztcclxuICAgICAgICBzY3JpcHQuc3JjICs9IGFwaUtleSA/ICdrZXk9JyArIGFwaUtleSA6ICcnO1xyXG4gICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB0aGlzLnNldEdTVkxvYWRlci5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2V0R1NWTG9hZGVyLmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2hlYWQnICkuYXBwZW5kQ2hpbGQoIHNjcmlwdCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgR1NWIExvYWRlclxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldEdTVkxvYWRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IG5ldyBHb29nbGVTdHJlZXR2aWV3TG9hZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5sb2FkUmVxdWVzdGVkICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IEdTViBMb2FkZXJcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7R29vZ2xlU3RyZWV0dmlld0xvYWRlcn0gR1NWIExvYWRlciBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBnZXRHU1ZMb2FkZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3N2TG9hZGVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIEdTViBMb2FkZXJcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gcGFub0lkIC0gR29nb2dsZSBTdHJlZXQgVmlldyBwYW5vcmFtYSBpZFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWRHU1ZMb2FkZXI6IGZ1bmN0aW9uICggcGFub0lkICkge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIub25Qcm9ncmVzcyA9IHRoaXMub25Qcm9ncmVzcy5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLm9uUGFub3JhbWFMb2FkID0gdGhpcy5vbkxvYWQuYmluZCggdGhpcyApO1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlci5zZXRab29tKCB0aGlzLmdldFpvb21MZXZlbCgpICk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLmxvYWQoIHBhbm9JZCApO1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlci5sb2FkZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgd2hlbiBwYW5vcmFtYSBpcyBsb2FkZWRcclxuICAgICAqIEBwYXJhbSAge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBDYW52YXMgd2hlcmUgdGhlIHRpbGVzIGhhdmUgYmVlbiBkcmF3blxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCBjYW52YXMgKSB7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCBuZXcgVEhSRUUuVGV4dHVyZSggY2FudmFzICkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXRcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSB9OyIsIi8qKlxyXG4gKiBTdGVyZW9ncmFwaGljIHByb2plY3Rpb24gc2hhZGVyXHJcbiAqIGJhc2VkIG9uIGh0dHA6Ly9ub3RsaW9uLmdpdGh1Yi5pby9zdHJlZXR2aWV3LXN0ZXJlb2dyYXBoaWNcclxuICogQGF1dGhvciBwY2hlbjY2XHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBTdGVyZW9ncmFocGljIFNoYWRlclxyXG4gKiBAbW9kdWxlIFN0ZXJlb2dyYXBoaWNTaGFkZXJcclxuICogQHByb3BlcnR5IHtvYmplY3R9IHVuaWZvcm1zXHJcbiAqIEBwcm9wZXJ0eSB7VEhSRUUuVGV4dHVyZX0gdW5pZm9ybXMudERpZmZ1c2UgZGlmZnVzZSBtYXBcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLnJlc29sdXRpb24gaW1hZ2UgcmVzb2x1dGlvblxyXG4gKiBAcHJvcGVydHkge1RIUkVFLk1hdHJpeDR9IHVuaWZvcm1zLnRyYW5zZm9ybSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLnpvb20gaW1hZ2Ugem9vbSBmYWN0b3JcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHVuaWZvcm1zLm9wYWNpdHkgaW1hZ2Ugb3BhY2l0eVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVydGV4U2hhZGVyIHZlcnRleCBzaGFkZXJcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGZyYWdtZW50U2hhZGVyIGZyYWdtZW50IHNoYWRlclxyXG4gKi9cclxuY29uc3QgU3RlcmVvZ3JhcGhpY1NoYWRlciA9IHtcclxuXHJcbiAgICB1bmlmb3Jtczoge1xyXG5cclxuICAgICAgICAndERpZmZ1c2UnOiB7IHZhbHVlOiBuZXcgVEhSRUUuVGV4dHVyZSgpIH0sXHJcbiAgICAgICAgJ3Jlc29sdXRpb24nOiB7IHZhbHVlOiAxLjAgfSxcclxuICAgICAgICAndHJhbnNmb3JtJzogeyB2YWx1ZTogbmV3IFRIUkVFLk1hdHJpeDQoKSB9LFxyXG4gICAgICAgICd6b29tJzogeyB2YWx1ZTogMS4wIH0sXHJcbiAgICAgICAgJ29wYWNpdHknOiB7IHZhbHVlOiAxLjAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdmVydGV4U2hhZGVyOiBbXHJcblxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXHJcblxyXG4gICAgICAgICd2b2lkIG1haW4oKSB7JyxcclxuXHJcbiAgICAgICAgJ3ZVdiA9IHV2OycsXHJcbiAgICAgICAgJ2dsX1Bvc2l0aW9uID0gdmVjNCggcG9zaXRpb24sIDEuMCApOycsXHJcblxyXG4gICAgICAgICd9JyBcclxuXHJcbiAgICBdLmpvaW4oICdcXG4nICksXHJcblxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcbiAgICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlOycsXHJcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgcmVzb2x1dGlvbjsnLFxyXG4gICAgICAgICd1bmlmb3JtIG1hdDQgdHJhbnNmb3JtOycsXHJcbiAgICAgICAgJ3VuaWZvcm0gZmxvYXQgem9vbTsnLFxyXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IG9wYWNpdHk7JyxcclxuXHJcbiAgICAgICAgJ3ZhcnlpbmcgdmVjMiB2VXY7JyxcclxuXHJcbiAgICAgICAgJ2NvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTM1ODk3OTM7JyxcclxuXHJcbiAgICAgICAgJ3ZvaWQgbWFpbigpeycsXHJcblxyXG4gICAgICAgICd2ZWMyIHBvc2l0aW9uID0gLTEuMCArICAyLjAgKiB2VXY7JyxcclxuXHJcbiAgICAgICAgJ3Bvc2l0aW9uICo9IHZlYzIoIHpvb20gKiByZXNvbHV0aW9uLCB6b29tICogMC41ICk7JyxcclxuXHJcbiAgICAgICAgJ2Zsb2F0IHgyeTIgPSBwb3NpdGlvbi54ICogcG9zaXRpb24ueCArIHBvc2l0aW9uLnkgKiBwb3NpdGlvbi55OycsXHJcbiAgICAgICAgJ3ZlYzMgc3BoZXJlX3BudCA9IHZlYzMoIDIuICogcG9zaXRpb24sIHgyeTIgLSAxLiApIC8gKCB4MnkyICsgMS4gKTsnLFxyXG5cclxuICAgICAgICAnc3BoZXJlX3BudCA9IHZlYzMoIHRyYW5zZm9ybSAqIHZlYzQoIHNwaGVyZV9wbnQsIDEuMCApICk7JyxcclxuXHJcbiAgICAgICAgJ3ZlYzIgc2FtcGxlVVYgPSB2ZWMyKCcsXHJcbiAgICAgICAgJyhhdGFuKHNwaGVyZV9wbnQueSwgc3BoZXJlX3BudC54KSAvIFBJICsgMS4wKSAqIDAuNSwnLFxyXG4gICAgICAgICcoYXNpbihzcGhlcmVfcG50LnopIC8gUEkgKyAwLjUpJyxcclxuICAgICAgICAnKTsnLFxyXG5cclxuICAgICAgICAnZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgc2FtcGxlVVYgKTsnLFxyXG5cclxuICAgICAgICAnZ2xfRnJhZ0NvbG9yLmEgKj0gb3BhY2l0eTsnLFxyXG5cclxuICAgICAgICAnfSdcclxuXHJcbiAgICBdLmpvaW4oICdcXG4nIClcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vSW1hZ2VQYW5vcmFtYSc7XHJcbmltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xyXG5pbXBvcnQgeyBDT05UUk9MUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFN0ZXJlb2dyYXBoaWNTaGFkZXIgfSBmcm9tICcuLi9zaGFkZXJzL1N0ZXJlb2dyYXBoaWNTaGFkZXInO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBMaXR0bGUgUGxhbmV0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcdFx0LSBUeXBlIG9mIGxpdHRsZSBwbGFuZXQgYmFzaWMgY2xhc3NcclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBcdFx0LSBVUkwgZm9yIHRoZSBpbWFnZSBzb3VyY2VcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcclxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpbz0wLjVdICAtIFJhdGlvIG9mIHBsYW5lIGdlb21ldHJ5J3MgaGVpZ2h0IGFnYWluc3Qgd2lkdGhcclxuICovXHJcbmZ1bmN0aW9uIExpdHRsZVBsYW5ldCAoIHR5cGUgPSAnaW1hZ2UnLCBzb3VyY2UsIHNpemUgPSAxMDAwMCwgcmF0aW8gPSAwLjUgKSB7XHJcblxyXG4gICAgaWYgKCB0eXBlID09PSAnaW1hZ2UnICkge1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLmNhbGwoIHRoaXMsIHNvdXJjZSwgdGhpcy5jcmVhdGVHZW9tZXRyeSggc2l6ZSwgcmF0aW8gKSwgdGhpcy5jcmVhdGVNYXRlcmlhbCggc2l6ZSApICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB0aGlzLnJhdGlvID0gcmF0aW87XHJcbiAgICB0aGlzLkVQUyA9IDAuMDAwMDAxO1xyXG4gICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnVzZXJNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4gICAgdGhpcy5xdWF0QSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbiAgICB0aGlzLnF1YXRCID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuICAgIHRoaXMucXVhdEN1ciA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbiAgICB0aGlzLnF1YXRTbGVycCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcblxyXG4gICAgdGhpcy52ZWN0b3JYID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcclxuICAgIHRoaXMudmVjdG9yWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnd2luZG93LXJlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUgKTtcclxuXHJcbn1cclxuXHJcbkxpdHRsZVBsYW5ldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IExpdHRsZVBsYW5ldCxcclxuXHJcbiAgICBhZGQ6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcblx0XHRcdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUuYWRkLmNhbGwoIHRoaXMsIG9iamVjdCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlR2VvbWV0cnk6IGZ1bmN0aW9uICggc2l6ZSwgcmF0aW8gKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggc2l6ZSwgc2l6ZSAqIHJhdGlvICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVNYXRlcmlhbDogZnVuY3Rpb24gKCBzaXplICkge1xyXG5cclxuICAgICAgICBjb25zdCBzaGFkZXIgPSBPYmplY3QuYXNzaWduKCB7fSwgU3RlcmVvZ3JhcGhpY1NoYWRlciApLCB1bmlmb3JtcyA9IHNoYWRlci51bmlmb3JtcztcclxuXHJcbiAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHNpemU7XHJcbiAgICAgICAgdW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDAuMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICAgICAgdW5pZm9ybXM6IHVuaWZvcm1zLFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxyXG5cclxuICAgICAgICB9ICk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgcmVnaXN0ZXJNb3VzZUV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCB0aGlzLm9uQ29udGV4dE1lbnUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIHVucmVnaXN0ZXJNb3VzZUV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBpbnB1dENvdW50ICkge1xyXG5cclxuICAgICAgICBjYXNlIDE6XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcclxuICAgICAgICAgICAgY29uc3QgeSA9ICggZXZlbnQuY2xpZW50WSA+PSAwICkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51c2VyTW91c2Uuc2V0KCB4LCB5ICk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAyOlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyTW91c2UucGluY2hEaXN0YW5jZSA9IGRpc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dENvdW50ID0gKCBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkgfHwgMSA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGlucHV0Q291bnQgKSB7XHJcblxyXG4gICAgICAgIGNhc2UgMTpcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSAoIGV2ZW50LmNsaWVudFggPj0gMCApID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlWCA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHggLSB0aGlzLnVzZXJNb3VzZS54ICkgKiAwLjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlWSA9IFRIUkVFLk1hdGguZGVnVG9SYWQoIHkgLSB0aGlzLnVzZXJNb3VzZS55ICkgKiAwLjQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuZHJhZ2dpbmcgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRBLnNldEZyb21BeGlzQW5nbGUoIHRoaXMudmVjdG9yWSwgYW5nbGVYICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRCLnNldEZyb21BeGlzQW5nbGUoIHRoaXMudmVjdG9yWCwgYW5nbGVZICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXRDdXIubXVsdGlwbHkoIHRoaXMucXVhdEEgKS5tdWx0aXBseSggdGhpcy5xdWF0QiApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTW91c2Uuc2V0KCB4LCB5ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDI6XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcclxuICAgICAgICAgICAgY29uc3QgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRab29tRGVsdGEoIHRoaXMudXNlck1vdXNlLnBpbmNoRGlzdGFuY2UgLSBkaXN0YW5jZSApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VXaGVlbDogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgbGV0IGRlbHRhID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxyXG5cclxuICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxyXG5cclxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZFpvb21EZWx0YSggZGVsdGEgKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFpvb21EZWx0YTogZnVuY3Rpb24gKCBkZWx0YSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgdW5pZm9ybXMgPSB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgICAgIGNvbnN0IGxvd2VyQm91bmQgPSB0aGlzLnNpemUgKiAwLjE7XHJcbiAgICAgICAgY29uc3QgdXBwZXJCb3VuZCA9IHRoaXMuc2l6ZSAqIDEwO1xyXG5cclxuICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlICs9IGRlbHRhO1xyXG5cclxuICAgICAgICBpZiAoIHVuaWZvcm1zLnpvb20udmFsdWUgPD0gbG93ZXJCb3VuZCApIHtcclxuXHJcbiAgICAgICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSBsb3dlckJvdW5kO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB1bmlmb3Jtcy56b29tLnZhbHVlID49IHVwcGVyQm91bmQgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gdXBwZXJCb3VuZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25VcGRhdGVDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uVXBkYXRlQ2FsbGJhY2suYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNsZXJwKCB0aGlzLnF1YXRDdXIsIDAuMSApO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMubWF0ZXJpYWwgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRyYW5zZm9ybS52YWx1ZS5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbiggdGhpcy5xdWF0U2xlcnAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggIXRoaXMuZHJhZ2dpbmcgJiYgMS4wIC0gdGhpcy5xdWF0U2xlcnAuY2xvbmUoKS5kb3QoIHRoaXMucXVhdEN1ciApIDwgdGhpcy5FUFMgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMuZnJhbWVJZCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnF1YXRDdXIuc2V0KCAwLCAwLCAwLCAxICk7XHJcbiAgICAgICAgdGhpcy5xdWF0U2xlcnAuc2V0KCAwLCAwLCAwLCAxICk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2Rpc2FibGVDb250cm9sJyB9ICk7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgb25MZWF2ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnZW5hYmxlQ29udHJvbCcsIGRhdGE6IENPTlRST0xTLk9SQklUIH0gKTtcclxuXHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLmZyYW1lSWQgKTtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUub25MZWF2ZS5jYWxsKCB0aGlzICk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgb25XaW5kb3dSZXNpemU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbnRleHRNZW51OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcdFxyXG5cclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCB7IExpdHRsZVBsYW5ldCB9OyIsImltcG9ydCB7IExpdHRsZVBsYW5ldCB9IGZyb20gJy4vTGl0dGxlUGxhbmV0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgSW1hZ2UgTGl0dGxlIFBsYW5ldFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBcdFx0LSBVUkwgZm9yIHRoZSBpbWFnZSBzb3VyY2VcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTEwMDAwXSAtIFNpemUgb2YgcGxhbmUgZ2VvbWV0cnlcclxuICogQHBhcmFtIHtudW1iZXJ9IFtyYXRpbz0wLjVdICAtIFJhdGlvIG9mIHBsYW5lIGdlb21ldHJ5J3MgaGVpZ2h0IGFnYWluc3Qgd2lkdGhcclxuICovXHJcbmZ1bmN0aW9uIEltYWdlTGl0dGxlUGxhbmV0ICggc291cmNlLCBzaXplLCByYXRpbyApIHtcclxuXHJcbiAgICBMaXR0bGVQbGFuZXQuY2FsbCggdGhpcywgJ2ltYWdlJywgc291cmNlLCBzaXplLCByYXRpbyApO1xyXG5cclxufVxyXG5cclxuSW1hZ2VMaXR0bGVQbGFuZXQucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggTGl0dGxlUGxhbmV0LnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEltYWdlTGl0dGxlUGxhbmV0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gbG9hZGVkIHdpdGggdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB0ZXh0dXJlICk7XHJcblxyXG4gICAgICAgIExpdHRsZVBsYW5ldC5wcm90b3R5cGUub25Mb2FkLmNhbGwoIHRoaXMsIHRleHR1cmUgKTtcclxuXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0ZXh0dXJlXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLlRleHR1cmV9IHRleHR1cmUgXHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVUZXh0dXJlOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblx0XHRcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zWyAndERpZmZ1c2UnIF0udmFsdWUgPSB0ZXh0dXJlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VMaXR0bGVQbGFuZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHREaWZmdXNlID0gdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3REaWZmdXNlJyBdO1xyXG5cclxuICAgICAgICBpZiAoIHREaWZmdXNlICYmIHREaWZmdXNlLnZhbHVlICkge1xyXG5cclxuICAgICAgICAgICAgdERpZmZ1c2UudmFsdWUuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExpdHRsZVBsYW5ldC5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgSW1hZ2VMaXR0bGVQbGFuZXQgfTsiLCJpbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4uL21lZGlhL01lZGlhJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgQ2FtZXJhIHBhbm9yYW1hXHJcbiAqIEBkZXNjcmlwdGlvbiBTZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYVN0cmVhbUNvbnN0cmFpbnRzfE1lZGlhU3RyZWFtQ29uc3RyYWludHN9IGZvciBjb25zdHJhaW50c1xyXG4gKiBAcGFyYW0ge29iamVjdH0gLSBjYW1lcmEgY29uc3RyYWludHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBDYW1lcmFQYW5vcmFtYSAoIGNvbnN0cmFpbnRzICkge1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IHZpc2libGU6IGZhbHNlIH0pO1xyXG5cclxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuICAgIHRoaXMubWVkaWEgPSBuZXcgTWVkaWEoIGNvbnN0cmFpbnRzICk7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlcicsIHRoaXMuc3RhcnQuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIHRoaXMuc3RvcC5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMub25QYW5vbGVuc0NvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXNjZW5lJywgdGhpcy5vblBhbm9sZW5zU2NlbmUuYmluZCggdGhpcyApICk7XHJcblxyXG59XHJcblxyXG5DYW1lcmFQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBDYW1lcmFQYW5vcmFtYSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGNvbnRhaW5lciBldmVudFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvblBhbm9sZW5zQ29udGFpbmVyOiBmdW5jdGlvbiAoIHsgY29udGFpbmVyIH0gKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWEuc2V0Q29udGFpbmVyKCBjb250YWluZXIgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gc2NlbmUgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uUGFub2xlbnNTY2VuZTogZnVuY3Rpb24gKCB7IHNjZW5lIH0gKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWEuc2V0U2NlbmUoIHNjZW5lICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IGNhbWVyYSBzdHJlYW1pbmdcclxuICAgICAqIEBtZW1iZXJPZiBDYW1lcmFQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWEuc3RhcnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcCBjYW1lcmEgc3RyZWFtaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWEuc3RvcCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBDYW1lcmFQYW5vcmFtYSB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIE9yYml0IENvbnRyb2xzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZXJuYWwgT3JiaXRDb250cm9sc1xyXG4gKiBAcGFyYW0ge1RIUkVFLk9iamVjdH0gb2JqZWN0IFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb21FbGVtZW50IFxyXG4gKi9cclxuZnVuY3Rpb24gT3JiaXRDb250cm9scyAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcclxuXHJcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XHJcbiAgICB0aGlzLmZyYW1lSWQgPSBudWxsO1xyXG5cclxuICAgIC8vIEFQSVxyXG5cclxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxyXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxyXG4gICAgICogYW5kIHdoZXJlIGl0IHBhbnMgd2l0aCByZXNwZWN0IHRvLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgLy8gY2VudGVyIGlzIG9sZCwgZGVwcmVjYXRlZDsgdXNlIFwidGFyZ2V0XCIgaW5zdGVhZFxyXG4gICAgdGhpcy5jZW50ZXIgPSB0aGlzLnRhcmdldDtcclxuXHJcbiAgICAvKlxyXG4gICAgICogVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxyXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuICAgICAqL1xyXG4gICAgdGhpcy5ub1pvb20gPSBmYWxzZTtcclxuICAgIHRoaXMuem9vbVNwZWVkID0gMS4wO1xyXG5cclxuICAgIC8vIExpbWl0cyB0byBob3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxyXG4gICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XHJcbiAgICB0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXHJcbiAgICB0aGlzLm1pblpvb20gPSAwO1xyXG4gICAgdGhpcy5tYXhab29tID0gSW5maW5pdHk7XHJcblxyXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuICAgIHRoaXMubm9Sb3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMucm90YXRlU3BlZWQgPSAtMC4xNTtcclxuXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxyXG4gICAgdGhpcy5ub1BhbiA9IHRydWU7XHJcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxyXG5cclxuICAgIC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XHJcbiAgICB0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cclxuICAgICAqIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxyXG4gICAgICovXHJcbiAgICB0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXHJcbiAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXHJcblxyXG4gICAgLy8gTW9tZW50dW1cclxuICBcdHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yID0gMC45MDtcclxuICBcdHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yID0gLTAuMDA1O1xyXG4gIFx0dGhpcy5tb21lbnR1bUtleWRvd25GYWN0b3IgPSAyMDtcclxuXHJcbiAgXHQvLyBGb3ZcclxuICBcdHRoaXMubWluRm92ID0gMzA7XHJcbiAgXHR0aGlzLm1heEZvdiA9IDEyMDtcclxuXHJcbiAgICAvKlxyXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cclxuICAgICAqIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXHJcbiAgICB0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXHJcblxyXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcclxuICAgIHRoaXMubm9LZXlzID0gZmFsc2U7XHJcblxyXG4gICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xyXG4gICAgdGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcclxuXHJcbiAgICAvLyBNb3VzZSBidXR0b25zXHJcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiAvLy8vLy8vLy8vXHJcbiAgICAgKiBpbnRlcm5hbHNcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgdmFyIEVQUyA9IDEwZS04O1xyXG4gICAgdmFyIE1FUFMgPSAxMGUtNTtcclxuXHJcbiAgICB2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuICAgIHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuICAgIHZhciB0aGV0YSA9IDA7XHJcbiAgICB2YXIgcGhpID0gMDtcclxuICAgIHZhciBwaGlEZWx0YSA9IDA7XHJcbiAgICB2YXIgdGhldGFEZWx0YSA9IDA7XHJcbiAgICB2YXIgc2NhbGUgPSAxO1xyXG4gICAgdmFyIHBhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICB2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICAgIHZhciBtb21lbnR1bUxlZnQgPSAwLCBtb21lbnR1bVVwID0gMDtcclxuICAgIHZhciBldmVudFByZXZpb3VzO1xyXG4gICAgdmFyIG1vbWVudHVtT24gPSBmYWxzZTtcclxuXHJcbiAgICB2YXIga2V5VXAsIGtleUJvdHRvbSwga2V5TGVmdCwga2V5UmlnaHQ7XHJcblxyXG4gICAgdmFyIFNUQVRFID0geyBOT05FOiAtMSwgUk9UQVRFOiAwLCBET0xMWTogMSwgUEFOOiAyLCBUT1VDSF9ST1RBVEU6IDMsIFRPVUNIX0RPTExZOiA0LCBUT1VDSF9QQU46IDUgfTtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIC8vIGZvciByZXNldFxyXG5cclxuICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICB0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcclxuXHJcbiAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcclxuXHJcbiAgICB2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcclxuICAgIHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XHJcblxyXG4gICAgLy8gZXZlbnRzXHJcblxyXG4gICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xyXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcclxuICAgIHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcclxuXHJcbiAgICB0aGlzLnNldExhc3RRdWF0ZXJuaW9uID0gZnVuY3Rpb24gKCBxdWF0ZXJuaW9uICkge1xyXG4gICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHF1YXRlcm5pb24gKTtcclxuICAgICAgICBzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KCBxdWF0ZXJuaW9uICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0TGFzdFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBsYXN0UG9zaXRpb247XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucm90YXRlTGVmdCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGV0YURlbHRhIC09IGFuZ2xlO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucm90YXRlVXAgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xyXG5cclxuICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGhpRGVsdGEgLT0gYW5nbGU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgbGVmdFxyXG4gICAgdGhpcy5wYW5MZWZ0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcclxuXHJcbiAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBnZXQgWCBjb2x1bW4gb2YgbWF0cml4XHJcbiAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDAgXSwgdGVbIDEgXSwgdGVbIDIgXSApO1xyXG4gICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xyXG5cclxuICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSB1cFxyXG4gICAgdGhpcy5wYW5VcCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcclxuXHJcbiAgICAgICAgLy8gZ2V0IFkgY29sdW1uIG9mIG1hdHJpeFxyXG4gICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcclxuICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XHJcblxyXG4gICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLypcclxuICAgICAqIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxyXG4gICAgICogcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXHJcbiAgICAgKi9cclxuICAgIHRoaXMucGFuID0gZnVuY3Rpb24gKCBkZWx0YVgsIGRlbHRhWSApIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBwZXJzcGVjdGl2ZVxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yiggc2NvcGUudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxyXG4gICAgICAgICAgICB0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XHJcblxyXG4gICAgICAgICAgICAvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICAgICAgICAgIHNjb3BlLnBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcclxuICAgICAgICAgICAgc2NvcGUucGFuTGVmdCggZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIGVsZW1lbnQuY2xpZW50V2lkdGggKTtcclxuICAgICAgICAgICAgc2NvcGUucGFuVXAoIGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG9yIHBlcnNwZWN0aXZlXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW9tZW50dW0gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKCAhbW9tZW50dW1PbiApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyggbW9tZW50dW1MZWZ0ICkgPCBNRVBTICYmIE1hdGguYWJzKCBtb21lbnR1bVVwICkgPCBNRVBTICkgeyBcclxuXHJcbiAgICAgICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTsgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1vbWVudHVtVXAgICAqPSB0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvcjtcclxuICAgICAgICBtb21lbnR1bUxlZnQgKj0gdGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3I7XHJcblxyXG4gICAgICAgIHRoZXRhRGVsdGEgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bUxlZnQ7XHJcbiAgICAgICAgcGhpRGVsdGEgICAtPSB0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciAqIG1vbWVudHVtVXA7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvbGx5SW4gPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCB0aGlzLm1pblpvb20sIE1hdGgubWluKCB0aGlzLm1heFpvb20sIHRoaXMub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvbGx5T3V0ID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xyXG5cclxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGUgKj0gZG9sbHlTY2FsZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIGlnbm9yZVVwZGF0ZSApIHtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XHJcblxyXG4gICAgICAgIG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1YiggdGhpcy50YXJnZXQgKTtcclxuXHJcbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXHJcbiAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xyXG5cclxuICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXHJcblxyXG4gICAgICAgIHRoZXRhID0gTWF0aC5hdGFuMiggb2Zmc2V0LngsIG9mZnNldC56ICk7XHJcblxyXG4gICAgICAgIC8vIGFuZ2xlIGZyb20geS1heGlzXHJcblxyXG4gICAgICAgIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vbWVudHVtKCk7XHJcblxyXG4gICAgICAgIHRoZXRhICs9IHRoZXRhRGVsdGE7XHJcbiAgICAgICAgcGhpICs9IHBoaURlbHRhO1xyXG5cclxuICAgICAgICAvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcbiAgICAgICAgdGhldGEgPSBNYXRoLm1heCggdGhpcy5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCB0aGlzLm1heEF6aW11dGhBbmdsZSwgdGhldGEgKSApO1xyXG5cclxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KCB0aGlzLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCB0aGlzLm1heFBvbGFyQW5nbGUsIHBoaSApICk7XHJcblxyXG4gICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWUgRVBTIGFuZCBQSS1FUFNcclxuICAgICAgICBwaGkgPSBNYXRoLm1heCggRVBTLCBNYXRoLm1pbiggTWF0aC5QSSAtIEVQUywgcGhpICkgKTtcclxuXHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xyXG5cclxuICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KCB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggdGhpcy5tYXhEaXN0YW5jZSwgcmFkaXVzICkgKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkKCBwYW4gKTtcclxuXHJcbiAgICAgICAgb2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcclxuICAgICAgICBvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKCBwaGkgKTtcclxuICAgICAgICBvZmZzZXQueiA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguY29zKCB0aGV0YSApO1xyXG5cclxuICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcclxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xyXG5cclxuICAgICAgICBwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcclxuXHJcbiAgICAgICAgdGhldGFEZWx0YSA9IDA7XHJcbiAgICAgICAgcGhpRGVsdGEgPSAwO1xyXG4gICAgICAgIHNjYWxlID0gMTtcclxuICAgICAgICBwYW4uc2V0KCAwLCAwLCAwICk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogdXBkYXRlIGNvbmRpdGlvbiBpczpcclxuICAgICAgICAgKiBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcclxuICAgICAgICAgKiB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoIGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggdGhpcy5vYmplY3QucG9zaXRpb24gKSA+IEVQU1xyXG5cdFx0ICAgIHx8IDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCh0aGlzLm9iamVjdC5xdWF0ZXJuaW9uKSkgPiBFUFMgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGlnbm9yZVVwZGF0ZSAhPT0gdHJ1ZSApIHsgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XHJcblxyXG4gICAgICAgICAgICBsYXN0UG9zaXRpb24uY29weSggdGhpcy5vYmplY3QucG9zaXRpb24gKTtcclxuICAgICAgICAgICAgbGFzdFF1YXRlcm5pb24uY29weSAodGhpcy5vYmplY3QucXVhdGVybmlvbiApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgICAgICB0aGlzLnRhcmdldC5jb3B5KCB0aGlzLnRhcmdldDAgKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KCB0aGlzLnBvc2l0aW9uMCApO1xyXG4gICAgICAgIHRoaXMub2JqZWN0Lnpvb20gPSB0aGlzLnpvb20wO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gcGhpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoZXRhO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XHJcblxyXG4gICBcdFx0bW9tZW50dW1MZWZ0ID0gbW9tZW50dW1VcCA9IDA7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUk9UQVRFO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ET0xMWTtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuUEFOO1xyXG5cclxuICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcbiAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcclxuICAgICAgICAgICAgc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcblxyXG4gICAgICAgICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcclxuICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xyXG5cclxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcclxuICAgICAgICAgICAgICAgIG1vbWVudHVtTGVmdCA9IGV2ZW50LmNsaWVudFggLSBldmVudFByZXZpb3VzLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICBtb21lbnR1bVVwID0gZXZlbnQuY2xpZW50WSAtIGV2ZW50UHJldmlvdXMuY2xpZW50WTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnRQcmV2aW91cyA9IGV2ZW50O1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG4gICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XHJcblxyXG4gICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkgc2NvcGUudXBkYXRlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCggLyogZXZlbnQgKi8gKSB7XHJcblxyXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xyXG5cclxuICAgICAgICBldmVudFByZXZpb3VzID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcclxuICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9ab29tID09PSB0cnVlIHx8IHN0YXRlICE9PSBTVEFURS5OT05FICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZGVsdGEgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50LndoZWVsRGVsdGEgIT09IHVuZGVmaW5lZCApIHsgLy8gV2ViS2l0IC8gT3BlcmEgLyBFeHBsb3JlciA5XHJcblxyXG4gICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkICkgeyAvLyBGaXJlZm94XHJcblxyXG4gICAgICAgICAgICBkZWx0YSA9IC0gZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2NvcGUuZG9sbHlPdXQoKTtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA8IHNjb3BlLm1heEZvdiApIFxyXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92ICsgMVxyXG4gICAgICAgICAgICAgICAgOiBzY29wZS5tYXhGb3Y7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5SW4oKTtcclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA+IHNjb3BlLm1pbkZvdiApIFxyXG4gICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxyXG4gICAgICAgICAgICAgICAgOiBzY29wZS5taW5Gb3Y7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcclxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25LZXlVcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuVVA6XHJcbiAgICAgICAgICAgIGtleVVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxyXG4gICAgICAgICAgICBrZXlCb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxyXG4gICAgICAgICAgICBrZXlMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XHJcbiAgICAgICAgICAgIGtleVJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9LZXlzID09PSB0cnVlIHx8IHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuVVA6XHJcbiAgICAgICAgICAgIGtleVVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XHJcbiAgICAgICAgICAgIGtleUJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcclxuICAgICAgICAgICAga2V5TGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XHJcbiAgICAgICAgICAgIGtleVJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtleVVwIHx8IGtleUJvdHRvbSB8fCBrZXlMZWZ0IHx8IGtleVJpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXlVcCkgbW9tZW50dW1VcCA9IC0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XHJcbiAgICAgICAgICAgIGlmIChrZXlCb3R0b20pIG1vbWVudHVtVXAgPSBzY29wZS5yb3RhdGVTcGVlZCAqIHNjb3BlLm1vbWVudHVtS2V5ZG93bkZhY3RvcjtcclxuICAgICAgICAgICAgaWYgKGtleUxlZnQpIG1vbWVudHVtTGVmdCA9IC0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XHJcbiAgICAgICAgICAgIGlmIChrZXlSaWdodCkgbW9tZW50dW1MZWZ0ID0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hzdGFydCggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIG1vbWVudHVtT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbW9tZW50dW1MZWZ0ID0gbW9tZW50dW1VcCA9IDA7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xyXG5cclxuICAgICAgICBjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xyXG5cclxuICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xyXG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xyXG5cclxuICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaG1vdmUoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcbiAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XHJcbiAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcclxuICAgICAgICAgICAgc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcbiAgICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxyXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XHJcblxyXG4gICAgICAgICAgICBpZiggZXZlbnRQcmV2aW91cyApe1xyXG4gICAgICAgICAgICAgICAgbW9tZW50dW1MZWZ0ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnRQcmV2aW91cy5wYWdlWDtcclxuICAgICAgICAgICAgICAgIG1vbWVudHVtVXAgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudFByZXZpb3VzLnBhZ2VZO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudFByZXZpb3VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFnZVg6IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCxcclxuICAgICAgICAgICAgICAgIHBhZ2VZOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xyXG4gICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XHJcbiAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcclxuICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPCBzY29wZS5tYXhGb3YgKSBcclxuICAgICAgICAgICAgICAgICAgICA/IHNjb3BlLm9iamVjdC5mb3YgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzY29wZS5tYXhGb3Y7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92ID4gc2NvcGUubWluRm92ICkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcGUubWluRm92O1xyXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xyXG4gICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcclxuXHJcbiAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoZW5kKCAvKiBldmVudCAqLyApIHtcclxuXHJcbiAgICAgICAgbW9tZW50dW1PbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGV2ZW50UHJldmlvdXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XHJcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biApO1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCApO1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwgKTtcclxuXHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCApO1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0b3VjaGVuZCApO1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5dXAnLCBvbktleVVwICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSwgZmFsc2UgKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApOyAvLyBmaXJlZm94XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnLCBvbktleVVwLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgLy8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxufTtcclxuXHJcbk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IE9yYml0Q29udHJvbHNcclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IE9yYml0Q29udHJvbHMgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBEZXZpY2UgT3JpZW50YXRpb24gQ29udHJvbFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVybmFsIERldmljZU9yaWVudGF0aW9uQ29udHJvbHNcclxuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IGNhbWVyYSBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tRWxlbWVudCBcclxuICovXHJcbmZ1bmN0aW9uIERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XHJcblxyXG4gICAgdmFyIHNjb3BlID0gdGhpcztcclxuICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcclxuXHJcbiAgICB2YXIgcm90WSA9IDA7XHJcbiAgICB2YXIgcm90WCA9IDA7XHJcbiAgICB2YXIgdGVtcFggPSAwO1xyXG4gICAgdmFyIHRlbXBZID0gMDtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuY2FtZXJhLnJvdGF0aW9uLnJlb3JkZXIoICdZWFonICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xyXG5cclxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5kZXZpY2VPcmllbnRhdGlvbiA9IHt9O1xyXG4gICAgdGhpcy5zY3JlZW5PcmllbnRhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5hbHBoYSA9IDA7XHJcbiAgICB0aGlzLmFscGhhT2Zmc2V0QW5nbGUgPSAwO1xyXG5cclxuXHJcbiAgICB2YXIgb25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBzY29wZS5kZXZpY2VPcmllbnRhdGlvbiA9IGV2ZW50O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9IHdpbmRvdy5vcmllbnRhdGlvbiB8fCAwO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uVG91Y2hTdGFydEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xyXG4gICAgICAgIHRlbXBZID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uVG91Y2hNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgcm90WSArPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCAoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIHRlbXBYICkgLyA0ICk7XHJcbiAgICAgICAgcm90WCArPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCAoIHRlbXBZIC0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICkgLyA0ICk7XHJcblxyXG4gICAgICAgIHNjb3BlLnVwZGF0ZUFscGhhT2Zmc2V0QW5nbGUoIHJvdFkgKTtcclxuXHJcbiAgICAgICAgdGVtcFggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVg7XHJcbiAgICAgICAgdGVtcFkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUaGUgYW5nbGVzIGFscGhhLCBiZXRhIGFuZCBnYW1tYSBmb3JtIGEgc2V0IG9mIGludHJpbnNpYyBUYWl0LUJyeWFuIGFuZ2xlcyBvZiB0eXBlIFotWCctWScnXHJcblxyXG4gICAgdmFyIHNldENhbWVyYVF1YXRlcm5pb24gPSBmdW5jdGlvbiggcXVhdGVybmlvbiwgYWxwaGEsIGJldGEsIGdhbW1hLCBvcmllbnQgKSB7XHJcblxyXG4gICAgICAgIHZhciB6ZWUgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMSApO1xyXG5cclxuICAgICAgICB2YXIgZXVsZXIgPSBuZXcgVEhSRUUuRXVsZXIoKTtcclxuXHJcbiAgICAgICAgdmFyIHEwID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcbiAgICAgICAgdmFyIHExID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oIC0gTWF0aC5zcXJ0KCAwLjUgKSwgMCwgMCwgTWF0aC5zcXJ0KCAwLjUgKSApOyAvLyAtIFBJLzIgYXJvdW5kIHRoZSB4LWF4aXNcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvckZpbmdlclk7XHJcbiAgICAgICAgdmFyIGZpbmdlclFZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuICAgICAgICB2YXIgZmluZ2VyUVggPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKTtcclxuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gMTgwICkge1xyXG5cclxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAwLCAwICk7XHJcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gOTAgKSB7XHJcblxyXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcclxuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgcm90WCApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAtIDkwKSB7XHJcblxyXG4gICAgICAgICAgICB2ZWN0b3JGaW5nZXJZID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKTtcclxuICAgICAgICAgICAgZmluZ2VyUVkuc2V0RnJvbUF4aXNBbmdsZSggdmVjdG9yRmluZ2VyWSwgLXJvdFggKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxMS5tdWx0aXBseSggZmluZ2VyUVkgKTtcclxuICAgICAgICBxMS5tdWx0aXBseSggZmluZ2VyUVggKTtcclxuXHJcbiAgICAgICAgZXVsZXIuc2V0KCBiZXRhLCBhbHBoYSwgLSBnYW1tYSwgJ1lYWicgKTsgLy8gJ1pYWScgZm9yIHRoZSBkZXZpY2UsIGJ1dCAnWVhaJyBmb3IgdXNcclxuXHJcbiAgICAgICAgcXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIGV1bGVyICk7IC8vIG9yaWVudCB0aGUgZGV2aWNlXHJcblxyXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHExICk7IC8vIGNhbWVyYSBsb29rcyBvdXQgdGhlIGJhY2sgb2YgdGhlIGRldmljZSwgbm90IHRoZSB0b3BcclxuXHJcbiAgICAgICAgcXVhdGVybmlvbi5tdWx0aXBseSggcTAuc2V0RnJvbUF4aXNBbmdsZSggemVlLCAtIG9yaWVudCApICk7IC8vIGFkanVzdCBmb3Igc2NyZWVuIG9yaWVudGF0aW9uXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50KCk7IC8vIHJ1biBvbmNlIG9uIGxvYWRcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgb25EZXZpY2VPcmllbnRhdGlvbkNoYW5nZUV2ZW50LCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcblxyXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgICAgIHNjb3BlLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIGZhbHNlICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgZmFsc2UgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIGZhbHNlICk7XHJcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgc2NvcGUuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiggaWdub3JlVXBkYXRlICkge1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgYWxwaGEgPSBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5hbHBoYSA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmFscGhhICkgKyBzY29wZS5hbHBoYU9mZnNldEFuZ2xlIDogMDsgLy8gWlxyXG4gICAgICAgIHZhciBiZXRhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYmV0YSA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmJldGEgKSA6IDA7IC8vIFgnXHJcbiAgICAgICAgdmFyIGdhbW1hID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5nYW1tYSApIDogMDsgLy8gWScnXHJcbiAgICAgICAgdmFyIG9yaWVudCA9IHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gKSA6IDA7IC8vIE9cclxuXHJcbiAgICAgICAgc2V0Q2FtZXJhUXVhdGVybmlvbiggc2NvcGUuY2FtZXJhLnF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICk7XHJcbiAgICAgICAgc2NvcGUuYWxwaGEgPSBhbHBoYTtcclxuXHJcbiAgICAgICAgaWYgKCBpZ25vcmVVcGRhdGUgIT09IHRydWUgKSB7IHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7IH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlQWxwaGFPZmZzZXRBbmdsZSA9IGZ1bmN0aW9uKCBhbmdsZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29ubmVjdCgpO1xyXG5cclxufTtcclxuXHJcbkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogRGV2aWNlT3JpZW50YXRpb25Db250cm9sc1xyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyB9OyIsIlxyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBHb29nbGUgQ2FyZGJvYXJkIEVmZmVjdCBDb21wb3NlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVybmFsIENhcmRib2FyZEVmZmVjdFxyXG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IHJlbmRlcmVyIFxyXG4gKi9cclxuZnVuY3Rpb24gQ2FyZGJvYXJkRWZmZWN0ICggcmVuZGVyZXIgKSB7XHJcblxyXG4gICAgdmFyIF9jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtIDEsIDEsIDEsIC0gMSwgMCwgMSApO1xyXG5cclxuICAgIHZhciBfc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB2YXIgX3N0ZXJlbyA9IG5ldyBUSFJFRS5TdGVyZW9DYW1lcmEoKTtcclxuICAgIF9zdGVyZW8uYXNwZWN0ID0gMC41O1xyXG5cclxuICAgIHZhciBfcGFyYW1zID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXQgfTtcclxuXHJcbiAgICB2YXIgX3JlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggNTEyLCA1MTIsIF9wYXJhbXMgKTtcclxuICAgIF9yZW5kZXJUYXJnZXQuc2Npc3NvclRlc3QgPSB0cnVlO1xyXG4gICAgX3JlbmRlclRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEaXN0b3J0aW9uIE1lc2ggcG9ydGVkIGZyb206XHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Rpc3RvcnRpb24vYmFycmVsLWRpc3RvcnRpb24tZnJhZ21lbnQuanNcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBkaXN0b3J0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjIoIDAuNDQxLCAwLjE1NiApO1xyXG5cclxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAxLCAxLCAxMCwgMjAgKS5yZW1vdmVBdHRyaWJ1dGUoICdub3JtYWwnICkudG9Ob25JbmRleGVkKCk7XHJcblxyXG4gICAgdmFyIHBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICB2YXIgdXZzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy51di5hcnJheTtcclxuXHJcbiAgICAvLyBkdXBsaWNhdGVcclxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQgKj0gMjtcclxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuY291bnQgKj0gMjtcclxuXHJcbiAgICB2YXIgcG9zaXRpb25zMiA9IG5ldyBGbG9hdDMyQXJyYXkoIHBvc2l0aW9ucy5sZW5ndGggKiAyICk7XHJcbiAgICBwb3NpdGlvbnMyLnNldCggcG9zaXRpb25zICk7XHJcbiAgICBwb3NpdGlvbnMyLnNldCggcG9zaXRpb25zLCBwb3NpdGlvbnMubGVuZ3RoICk7XHJcblxyXG4gICAgdmFyIHV2czIgPSBuZXcgRmxvYXQzMkFycmF5KCB1dnMubGVuZ3RoICogMiApO1xyXG4gICAgdXZzMi5zZXQoIHV2cyApO1xyXG4gICAgdXZzMi5zZXQoIHV2cywgdXZzLmxlbmd0aCApO1xyXG5cclxuICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIGxlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMCwgbCA9IHBvc2l0aW9uczIubGVuZ3RoIC8gMzsgaSA8IGw7IGkgKysgKSB7XHJcblxyXG4gICAgICAgIHZlY3Rvci54ID0gcG9zaXRpb25zMlsgaSAqIDMgKyAwIF07XHJcbiAgICAgICAgdmVjdG9yLnkgPSBwb3NpdGlvbnMyWyBpICogMyArIDEgXTtcclxuXHJcbiAgICAgICAgdmFyIGRvdCA9IHZlY3Rvci5kb3QoIHZlY3RvciApO1xyXG4gICAgICAgIHZhciBzY2FsYXIgPSAxLjUgKyAoIGRpc3RvcnRpb24ueCArIGRpc3RvcnRpb24ueSAqIGRvdCApICogZG90O1xyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gaSA8IGxlbmd0aCA/IDAgOiAxO1xyXG5cclxuICAgICAgICBwb3NpdGlvbnMyWyBpICogMyArIDAgXSA9ICggdmVjdG9yLnggLyBzY2FsYXIgKSAqIDEuNSAtIDAuNSArIG9mZnNldDtcclxuICAgICAgICBwb3NpdGlvbnMyWyBpICogMyArIDEgXSA9ICggdmVjdG9yLnkgLyBzY2FsYXIgKSAqIDMuMDtcclxuXHJcbiAgICAgICAgdXZzMlsgaSAqIDIgXSA9ICggdXZzMlsgaSAqIDIgXSArIG9mZnNldCApICogMC41O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gcG9zaXRpb25zMjtcclxuICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXkgPSB1dnMyO1xyXG5cclxuICAgIC8vXHJcblxyXG4gICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG1hcDogX3JlbmRlclRhcmdldC50ZXh0dXJlIH0gKTtcclxuICAgIHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgX3NjZW5lLmFkZCggbWVzaCApO1xyXG5cclxuICAgIC8vXHJcblxyXG4gICAgdGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XHJcblxyXG4gICAgICAgIHZhciBwaXhlbFJhdGlvID0gcmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xyXG5cclxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnNldFNpemUoIHdpZHRoICogcGl4ZWxSYXRpbywgaGVpZ2h0ICogcGl4ZWxSYXRpbyApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XHJcblxyXG4gICAgICAgIGlmICggY2FtZXJhLnBhcmVudCA9PT0gbnVsbCApIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xyXG5cclxuICAgICAgICBfc3RlcmVvLnVwZGF0ZSggY2FtZXJhICk7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IF9yZW5kZXJUYXJnZXQud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBfcmVuZGVyVGFyZ2V0LmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCByZW5kZXJlci5hdXRvQ2xlYXIgKSByZW5kZXJlci5jbGVhcigpO1xyXG5cclxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3Iuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgX3JlbmRlclRhcmdldC52aWV3cG9ydC5zZXQoIDAsIDAsIHdpZHRoLCBoZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYUwgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xyXG5cclxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3Iuc2V0KCB3aWR0aCwgMCwgd2lkdGgsIGhlaWdodCApO1xyXG4gICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCB3aWR0aCwgMCwgd2lkdGgsIGhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggX3JlbmRlclRhcmdldCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhUiApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5jbGVhckRlcHRoKCk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFJlbmRlclRhcmdldCggbnVsbCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggX3NjZW5lLCBfY2FtZXJhICk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IENhcmRib2FyZEVmZmVjdCB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFN0ZXJlbyBFZmZlY3QgQ29tcG9zZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlcm5hbCBTdGVyZW9FZmZlY3RcclxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcclxuICovXHJcbmNvbnN0IFN0ZXJlb0VmZmVjdCA9IGZ1bmN0aW9uICggcmVuZGVyZXIgKSB7XHJcblxyXG4gICAgdmFyIF9zdGVyZW8gPSBuZXcgVEhSRUUuU3RlcmVvQ2FtZXJhKCk7XHJcbiAgICBfc3RlcmVvLmFzcGVjdCA9IDAuNTtcclxuICAgIHZhciBzaXplID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB0aGlzLnNldEV5ZVNlcGFyYXRpb24gPSBmdW5jdGlvbiAoIGV5ZVNlcCApIHtcclxuXHJcbiAgICAgICAgX3N0ZXJlby5leWVTZXAgPSBleWVTZXA7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xyXG5cclxuICAgICAgICBzY2VuZS51cGRhdGVNYXRyaXhXb3JsZCgpO1xyXG5cclxuICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcbiAgICAgICAgX3N0ZXJlby51cGRhdGUoIGNhbWVyYSApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5nZXRTaXplKCBzaXplICk7XHJcblxyXG4gICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yVGVzdCggdHJ1ZSApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yKCAwLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRWaWV3cG9ydCggMCwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFMICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldFNjaXNzb3IoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRWaWV3cG9ydCggc2l6ZS53aWR0aCAvIDIsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhUiApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yVGVzdCggZmFsc2UgKTtcclxuXHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IFN0ZXJlb0VmZmVjdCB9OyIsImltcG9ydCB7IE1PREVTLCBDT05UUk9MUyB9IGZyb20gJy4uL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvT3JiaXRDb250cm9scyc7XHJcbmltcG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfSBmcm9tICcuLi9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scyc7XHJcbmltcG9ydCB7IENhcmRib2FyZEVmZmVjdCB9IGZyb20gJy4uL2xpYi9lZmZlY3RzL0NhcmRib2FyZEVmZmVjdCc7XHJcbmltcG9ydCB7IFN0ZXJlb0VmZmVjdCB9IGZyb20gJy4uL2xpYi9lZmZlY3RzL1N0ZXJlb0VmZmVjdCc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldC9XaWRnZXQnO1xyXG5pbXBvcnQgeyBSZXRpY2xlIH0gZnJvbSAnLi4vaW50ZXJmYWNlL1JldGljbGUnO1xyXG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcclxuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcclxuaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9QYW5vcmFtYSc7XHJcbmltcG9ydCB7IFZpZGVvUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgQ2FtZXJhUGFub3JhbWEgfSBmcm9tICcuLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFZpZXdlciBjb250YWlucyBwcmUtZGVmaW5lZCBzY2VuZSwgY2FtZXJhIGFuZCByZW5kZXJlclxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIFVzZSBjdXN0b20gb3IgZGVmYXVsdCBjb25maWcgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbb3B0aW9ucy5jb250YWluZXJdIC0gQSBIVE1MRWxlbWVudCB0byBob3N0IHRoZSBjYW52YXNcclxuICogQHBhcmFtIHtUSFJFRS5TY2VuZX0gW29wdGlvbnMuc2NlbmU9VEhSRUUuU2NlbmVdIC0gQSBUSFJFRS5TY2VuZSB3aGljaCBjb250YWlucyBwYW5vcmFtYSBhbmQgM0Qgb2JqZWN0c1xyXG4gKiBAcGFyYW0ge1RIUkVFLkNhbWVyYX0gW29wdGlvbnMuY2FtZXJhPVRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhXSAtIEEgVEhSRUUuQ2FtZXJhIHRvIHZpZXcgdGhlIHNjZW5lXHJcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gW29wdGlvbnMucmVuZGVyZXI9VEhSRUUuV2ViR0xSZW5kZXJlcl0gLSBBIFRIUkVFLldlYkdMUmVuZGVyZXIgdG8gcmVuZGVyIGNhbnZhc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNvbnRyb2xCYXI9dHJ1ZV0gLSBTaG93L2hpZGUgY29udHJvbCBiYXIgb24gdGhlIGJvdHRvbSBvZiB0aGUgY29udGFpbmVyXHJcbiAqIEBwYXJhbSB7YXJyYXl9ICAgW29wdGlvbnMuY29udHJvbEJ1dHRvbnM9W11dIC0gQnV0dG9uIG5hbWVzIHRvIG1vdW50IG9uIGNvbnRyb2xCYXIgaWYgY29udHJvbEJhciBleGlzdHMsIERlZmF1bHRzIHRvIFsnZnVsbHNjcmVlbicsICdzZXR0aW5nJywgJ3ZpZGVvJ11cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXI9ZmFsc2VdIC0gQXV0byBoaWRlIGNvbnRyb2wgYmFyIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdD10cnVlXSAtIEF1dG8gaGlkZSBpbmZvc3BvdHMgd2hlbiBjbGljayBvbiBub24tYWN0aXZlIGFyZWFcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5ob3Jpem9udGFsVmlldz1mYWxzZV0gLSBBbGxvdyBvbmx5IGhvcml6b250YWwgY2FtZXJhIGNvbnRyb2xcclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5jbGlja1RvbGVyYW5jZT0xMF0gLSBEaXN0YW5jZSB0b2xlcmFuY2UgdG8gdGlnZ2VyIGNsaWNrIC8gdGFwIGV2ZW50XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuY2FtZXJhRm92PTYwXSAtIENhbWVyYSBmaWVsZCBvZiB2aWV3IHZhbHVlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV2ZXJzZURyYWdnaW5nPWZhbHNlXSAtIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZW5hYmxlUmV0aWNsZT1mYWxzZV0gLSBFbmFibGUgcmV0aWNsZSBmb3IgbW91c2VsZXNzIGludGVyYWN0aW9uIG90aGVyIHRoYW4gVlIgbW9kZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmR3ZWxsVGltZT0xNTAwXSAtIER3ZWxsIHRpbWUgZm9yIHJldGljbGUgc2VsZWN0aW9uIGluIG1zXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b1JldGljbGVTZWxlY3Q9dHJ1ZV0gLSBBdXRvIHNlbGVjdCBhIGNsaWNrYWJsZSB0YXJnZXQgYWZ0ZXIgZHdlbGxUaW1lXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmlld0luZGljYXRvcj1mYWxzZV0gLSBBZGRzIGFuIGFuZ2xlIHZpZXcgaW5kaWNhdG9yIGluIHVwcGVyIGxlZnQgY29ybmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuaW5kaWNhdG9yU2l6ZT0zMF0gLSBTaXplIG9mIFZpZXcgSW5kaWNhdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgW29wdGlvbnMub3V0cHV0PSdub25lJ10gLSBXaGV0aGVyIGFuZCB3aGVyZSB0byBvdXRwdXQgcmF5Y2FzdCBwb3NpdGlvbi4gQ291bGQgYmUgJ2V2ZW50JywgJ2NvbnNvbGUnIG9yICdvdmVybGF5Jy5cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvUm90YXRlPWZhbHNlXSAtIEF1dG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkPTIuMF0gLSBBdXRvIHJvdGF0ZSBzcGVlZCBhcyBpbiBkZWdyZWUgcGVyIHNlY29uZC4gUG9zaXRpdmUgaXMgY291bnRlci1jbG9ja3dpc2UgYW5kIG5lZ2F0aXZlIGlzIGNsb2Nrd2lzZS5cclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uPTUwMDBdIC0gRHVyYXRpb24gYmVmb3JlIGF1dG8gcm90YXRhdGlvbiB3aGVuIG5vIHVzZXIgaW50ZXJhY3Rpdml0eSBpbiBtc1xyXG4gKi9cclxuZnVuY3Rpb24gVmlld2VyICggb3B0aW9ucyApIHtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyO1xyXG5cclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgb3B0aW9ucy5jb250cm9sQmFyID0gb3B0aW9ucy5jb250cm9sQmFyICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNvbnRyb2xCYXIgOiB0cnVlO1xyXG4gICAgb3B0aW9ucy5jb250cm9sQnV0dG9ucyA9IG9wdGlvbnMuY29udHJvbEJ1dHRvbnMgfHwgWyAnZnVsbHNjcmVlbicsICdzZXR0aW5nJywgJ3ZpZGVvJyBdO1xyXG4gICAgb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgPSBvcHRpb25zLmF1dG9IaWRlQ29udHJvbEJhciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgOiBmYWxzZTtcclxuICAgIG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCA9IG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5hdXRvSGlkZUluZm9zcG90IDogdHJ1ZTtcclxuICAgIG9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgPSBvcHRpb25zLmhvcml6b250YWxWaWV3ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmhvcml6b250YWxWaWV3IDogZmFsc2U7XHJcbiAgICBvcHRpb25zLmNsaWNrVG9sZXJhbmNlID0gb3B0aW9ucy5jbGlja1RvbGVyYW5jZSB8fCAxMDtcclxuICAgIG9wdGlvbnMuY2FtZXJhRm92ID0gb3B0aW9ucy5jYW1lcmFGb3YgfHwgNjA7XHJcbiAgICBvcHRpb25zLnJldmVyc2VEcmFnZ2luZyA9IG9wdGlvbnMucmV2ZXJzZURyYWdnaW5nIHx8IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5lbmFibGVSZXRpY2xlID0gb3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5kd2VsbFRpbWUgPSBvcHRpb25zLmR3ZWxsVGltZSB8fCAxNTAwO1xyXG4gICAgb3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCA9IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgOiB0cnVlO1xyXG4gICAgb3B0aW9ucy52aWV3SW5kaWNhdG9yID0gb3B0aW9ucy52aWV3SW5kaWNhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnZpZXdJbmRpY2F0b3IgOiBmYWxzZTtcclxuICAgIG9wdGlvbnMuaW5kaWNhdG9yU2l6ZSA9IG9wdGlvbnMuaW5kaWNhdG9yU2l6ZSB8fCAzMDtcclxuICAgIG9wdGlvbnMub3V0cHV0ID0gb3B0aW9ucy5vdXRwdXQgPyBvcHRpb25zLm91dHB1dCA6ICdub25lJztcclxuICAgIG9wdGlvbnMuYXV0b1JvdGF0ZSA9IG9wdGlvbnMuYXV0b1JvdGF0ZSB8fCBmYWxzZTtcclxuICAgIG9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkID0gb3B0aW9ucy5hdXRvUm90YXRlU3BlZWQgfHwgMi4wO1xyXG4gICAgb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uID0gb3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uIHx8IDUwMDA7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ1NTIEljb25cclxuICAgICAqIGNvbnN0IHN0eWxlTG9hZGVyID0gbmV3IFN0eWxlTG9hZGVyKCk7XHJcbiAgICAgKiBzdHlsZUxvYWRlci5pbmplY3QoICdpY29ubycgKTtcclxuICAgICAqL1xyXG5cclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgaWYgKCBvcHRpb25zLmNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XHJcbiAgICAgICAgY29udGFpbmVyLl93aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb250YWluZXIuX2hlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWNvbnRhaW5lcicgKTtcclxuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBjb250YWluZXIuX3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gb3B0aW9ucy5jYW1lcmEgfHwgbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCB0aGlzLm9wdGlvbnMuY2FtZXJhRm92LCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCwgMSwgMTAwMDAgKTtcclxuICAgIHRoaXMuc2NlbmUgPSBvcHRpb25zLnNjZW5lIHx8IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IG9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHsgYWxwaGE6IHRydWUsIGFudGlhbGlhczogZmFsc2UgfSApO1xyXG4gICAgdGhpcy5zY2VuZVJldGljbGUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLnZpZXdJbmRpY2F0b3JTaXplID0gdGhpcy5vcHRpb25zLmluZGljYXRvclNpemU7XHJcblxyXG4gICAgdGhpcy5yZXRpY2xlID0ge307XHJcbiAgICB0aGlzLnRlbXBFbmFibGVSZXRpY2xlID0gdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGU7XHJcblxyXG4gICAgdGhpcy5tb2RlID0gTU9ERVMuTk9STUFMO1xyXG5cclxuICAgIHRoaXMucGFub3JhbWEgPSBudWxsO1xyXG4gICAgdGhpcy53aWRnZXQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuaG92ZXJPYmplY3QgPSBudWxsO1xyXG4gICAgdGhpcy5pbmZvc3BvdCA9IG51bGw7XHJcbiAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gbnVsbDtcclxuICAgIHRoaXMucHJlc3NPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xyXG4gICAgdGhpcy5yYXljYXN0ZXJQb2ludCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB0aGlzLnVzZXJNb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcyA9IFtdO1xyXG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhRnJ1c3R1bSA9IG5ldyBUSFJFRS5GcnVzdHVtKCk7XHJcbiAgICB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcclxuXHJcbiAgICB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy50b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2g7XHJcblxyXG4gICAgLy8gSGFuZGxlciByZWZlcmVuY2VzXHJcbiAgICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiA9IHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX1VQID0gdGhpcy5vbk1vdXNlVXAuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX01PVkUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfS0VZX0RPV04gPSB0aGlzLm9uS2V5RG93bi5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfS0VZX1VQID0gdGhpcy5vbktleVVwLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9UQVAgPSB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIHtcclxuICAgICAgICBjbGllbnRYOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIsXHJcbiAgICAgICAgY2xpZW50WTogdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgfSApO1xyXG5cclxuICAgIC8vIEZsYWcgZm9yIGluZm9zcG90IG91dHB1dFxyXG4gICAgdGhpcy5PVVRQVVRfSU5GT1NQT1QgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbmltYXRpb25zXHJcbiAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG4gICAgdGhpcy50d2VlblVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcblxyXG4gICAgLy8gUmVuZGVyZXJcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKCAweDAwMDAwMCwgMCApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBcHBlbmQgUmVuZGVyZXIgRWxlbWVudCB0byBjb250YWluZXJcclxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFub2xlbnMtY2FudmFzJyApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIC8vIENhbWVyYSBDb250cm9sc1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoIHRoaXMuY2FtZXJhLCB0aGlzLmNvbnRhaW5lciApO1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmlkID0gJ29yYml0JztcclxuICAgIHRoaXMuT3JiaXRDb250cm9scy5taW5EaXN0YW5jZSA9IDE7XHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMubm9QYW4gPSB0cnVlO1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZTtcclxuICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlU3BlZWQgPSB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkO1xyXG5cclxuICAgIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scyA9IG5ldyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzKCB0aGlzLmNhbWVyYSwgdGhpcy5jb250YWluZXIgKTtcclxuICAgIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5pZCA9ICdkZXZpY2Utb3JpZW50YXRpb24nO1xyXG4gICAgdGhpcy5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxO1xyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGNoYW5nZSBldmVudCBpZiBwYXNzaXZlUmVuZXJpbmdcclxuICAgIGlmICggdGhpcy5vcHRpb25zLnBhc3NpdmVSZW5kZXJpbmcgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUud2FybiggJ3Bhc3NpdmVSZW5kZXJpbmcgaXMgbm93IGRlcHJlY2F0ZWQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnRyb2xzXHJcbiAgICB0aGlzLmNvbnRyb2xzID0gWyB0aGlzLk9yYml0Q29udHJvbHMsIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scyBdO1xyXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy5PcmJpdENvbnRyb2xzO1xyXG5cclxuICAgIC8vIENhcmRib2FyZCBlZmZlY3RcclxuICAgIHRoaXMuQ2FyZGJvYXJkRWZmZWN0ID0gbmV3IENhcmRib2FyZEVmZmVjdCggdGhpcy5yZW5kZXJlciApO1xyXG4gICAgdGhpcy5DYXJkYm9hcmRFZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xyXG5cclxuICAgIC8vIFN0ZXJlbyBlZmZlY3RcclxuICAgIHRoaXMuU3RlcmVvRWZmZWN0ID0gbmV3IFN0ZXJlb0VmZmVjdCggdGhpcy5yZW5kZXJlciApO1xyXG4gICAgdGhpcy5TdGVyZW9FZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xyXG5cclxuICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5DYXJkYm9hcmRFZmZlY3Q7XHJcblxyXG4gICAgLy8gQWRkIGRlZmF1bHQgaGlkZGVuIHJldGljbGVcclxuICAgIHRoaXMuYWRkUmV0aWNsZSgpO1xyXG5cclxuICAgIC8vIExvY2sgaG9yaXpvbnRhbCB2aWV3XHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5ob3Jpem9udGFsVmlldyApIHtcclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubWluUG9sYXJBbmdsZSA9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIENvbnRyb2wgVUlcclxuICAgIGlmICggdGhpcy5vcHRpb25zLmNvbnRyb2xCYXIgIT09IGZhbHNlICkge1xyXG4gICAgICAgIHRoaXMuYWRkRGVmYXVsdENvbnRyb2xCYXIoIHRoaXMub3B0aW9ucy5jb250cm9sQnV0dG9ucyApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBWaWV3IEluZGljYXRvclxyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMudmlld0luZGljYXRvciApIHtcclxuICAgICAgICB0aGlzLmFkZFZpZXdJbmRpY2F0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMucmV2ZXJzZURyYWdnaW5nICkge1xyXG4gICAgICAgIHRoaXMucmV2ZXJzZURyYWdnaW5nRGlyZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgZXZlbnQgaWYgcmV0aWNsZSBpcyBlbmFibGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbW91c2VcclxuICAgIGlmICggdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVSZXRpY2xlQ29udHJvbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE91dHB1dCBpbmZvc3BvdCBwb3NpdGlvbiB0byBhbiBvdmVybGF5IGNvbnRhaW5lciBpZiBzcGVjaWZpZWRcclxuICAgIGlmICggdGhpcy5vcHRpb25zLm91dHB1dCA9PT0gJ292ZXJsYXknICkge1xyXG4gICAgICAgIHRoaXMuYWRkT3V0cHV0RWxlbWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIC8vIEFuaW1hdGVcclxuICAgIHRoaXMuYW5pbWF0ZS5jYWxsKCB0aGlzICk7XHJcblxyXG59O1xyXG5cclxuVmlld2VyLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBWaWV3ZXIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYW4gb2JqZWN0IHRvIHRoZSBzY2VuZVxyXG4gICAgICogQXV0b21hdGljYWxseSBob29rdXAgd2l0aCBwYW5vbGVucy12aWV3ZXItaGFuZGxlciBsaXN0ZW5lclxyXG4gICAgICogdG8gY29tbXVuaWNhdGUgd2l0aCB2aWV3ZXIgbWV0aG9kXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGJlIGFkZGVkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoIGFyZ3VtZW50c1sgaSBdICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgIC8vIEFsbCBvYmplY3QgYWRkZWQgdG8gc2NlbmUgaGFzICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicgZXZlbnQgdG8gaGFuZGxlIHZpZXdlciBjb21tdW5pY2F0aW9uXHJcbiAgICAgICAgaWYgKCBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBbGwgb2JqZWN0IGFkZGVkIHRvIHNjZW5lIGJlaW5nIHBhc3NlZCB3aXRoIGNvbnRhaW5lclxyXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgUGFub3JhbWEgJiYgb2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtY29udGFpbmVyJywgY29udGFpbmVyOiB0aGlzLmNvbnRhaW5lciB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBDYW1lcmFQYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1zY2VuZScsIHNjZW5lOiB0aGlzLnNjZW5lIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBIb29rdXAgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICBpZiAoIG9iamVjdC50eXBlID09PSAncGFub3JhbWEnICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRQYW5vcmFtYUV2ZW50TGlzdGVuZXIoIG9iamVjdCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhbm9yYW1hKCBvYmplY3QgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYW4gb2JqZWN0IGZyb20gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gT2JqZWN0IHRvIGJlIHJlbW92ZWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyICkge1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKCBvYmplY3QgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGRlZmF1bHQgY29udHJvbCBiYXJcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFycmF5IC0gVGhlIGNvbnRyb2wgYnV0dG9ucyBhcnJheVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZERlZmF1bHRDb250cm9sQmFyOiBmdW5jdGlvbiAoIGFycmF5ICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMud2lkZ2V0ICkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnRGVmYXVsdCBjb250cm9sIGJhciBleGlzdHMnICk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB3aWRnZXQgPSBuZXcgV2lkZ2V0KCB0aGlzLmNvbnRhaW5lciApO1xyXG4gICAgICAgIHdpZGdldC5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcclxuICAgICAgICB3aWRnZXQuYWRkQ29udHJvbEJhcigpO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goIGJ1dHRvbk5hbWUgPT4ge1xyXG5cclxuICAgICAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCdXR0b24oIGJ1dHRvbk5hbWUgKTtcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGEgcGFub3JhbWEgdG8gYmUgdGhlIGN1cnJlbnQgb25lXHJcbiAgICAgKiBAcGFyYW0ge1Bhbm9yYW1hfSBwYW5vIC0gUGFub3JhbWEgdG8gYmUgc2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0UGFub3JhbWE6IGZ1bmN0aW9uICggcGFubyApIHtcclxuXHJcbiAgICAgICAgY29uc3QgbGVhdmluZ1Bhbm9yYW1hID0gdGhpcy5wYW5vcmFtYTtcclxuXHJcbiAgICAgICAgaWYgKCBwYW5vLnR5cGUgPT09ICdwYW5vcmFtYScgJiYgbGVhdmluZ1Bhbm9yYW1hICE9PSBwYW5vICkge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgZXhpc2l0aW5nIGluZm9zcG90XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUluZm9zcG90KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZnRlckVudGVyQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBsZWF2aW5nUGFub3JhbWEgKSB7IGxlYXZpbmdQYW5vcmFtYS5vbkxlYXZlKCk7IH1cclxuICAgICAgICAgICAgICAgIHBhbm8ucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCBhZnRlckVudGVyQ29tcGxldGUgKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XHJcblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYW5kIGVudGVyIHBhbm9yYW1hXHJcbiAgICAgICAgICAgICh0aGlzLnBhbm9yYW1hID0gcGFubykub25FbnRlcigpO1xyXG5cdFx0XHRcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV2ZW50IGhhbmRsZXIgdG8gZXhlY3V0ZSBjb21tYW5kcyBmcm9tIGNoaWxkIG9iamVjdHNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIFRoZSBkaXNwYXRjaGVkIGV2ZW50IHdpdGggbWV0aG9kIGFzIGZ1bmN0aW9uIG5hbWUgYW5kIGRhdGEgYXMgYW4gYXJndW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBldmVudEhhbmRsZXI6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQubWV0aG9kICYmIHRoaXNbIGV2ZW50Lm1ldGhvZCBdICkge1xyXG5cclxuICAgICAgICAgICAgdGhpc1sgZXZlbnQubWV0aG9kIF0oIGV2ZW50LmRhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaCBldmVudCB0byBhbGwgZGVzY2VuZGFudHNcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCB0byBiZSBwYXNzZWQgYWxvbmdcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwYXRjaEV2ZW50VG9DaGlsZHJlbjogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHdpZGdldCBjb250ZW50XHJcbiAgICAgKiBAbWV0aG9kIGFjdGl2YXRlV2lkZ2V0SXRlbVxyXG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gY29udHJvbEluZGV4IC0gQ29udHJvbCBpbmRleFxyXG4gICAgICogQHBhcmFtICB7aW50ZWdlcn0gbW9kZSAtIE1vZGVzIGZvciBlZmZlY3RzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWN0aXZhdGVXaWRnZXRJdGVtOiBmdW5jdGlvbiAoIGNvbnRyb2xJbmRleCwgbW9kZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbk1lbnUgPSB0aGlzLndpZGdldC5tYWluTWVudTtcclxuICAgICAgICBjb25zdCBDb250cm9sTWVudUl0ZW0gPSBtYWluTWVudS5jaGlsZHJlblsgMCBdO1xyXG4gICAgICAgIGNvbnN0IE1vZGVNZW51SXRlbSA9IG1haW5NZW51LmNoaWxkcmVuWyAxIF07XHJcblxyXG4gICAgICAgIGxldCBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoIGNvbnRyb2xJbmRleCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggY29udHJvbEluZGV4ICkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMiBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IENvbnRyb2xNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHRcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIENvbnRyb2xNZW51SXRlbS5zdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcclxuICAgICAgICAgICAgQ29udHJvbE1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBtb2RlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2goIG1vZGUgKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1PREVTLkNBUkRCT0FSRDpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTU9ERVMuU1RFUkVPOlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMyBdO1xyXG5cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAxIF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE1vZGVNZW51SXRlbS5zdWJNZW51LnNldEFjdGl2ZUl0ZW0oIGl0ZW0gKTtcclxuICAgICAgICAgICAgTW9kZU1lbnVJdGVtLnNldFNlbGVjdGlvblRpdGxlKCBpdGVtLnRleHRDb250ZW50ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIHJlbmRlcmluZyBlZmZlY3RcclxuICAgICAqIEBwYXJhbSAge01PREVTfSBtb2RlIC0gTW9kZXMgZm9yIGVmZmVjdHNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBlbmFibGVFZmZlY3Q6IGZ1bmN0aW9uICggbW9kZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IG1vZGUgKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICggbW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyB0aGlzLmRpc2FibGVFZmZlY3QoKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgZWxzZSB7IHRoaXMubW9kZSA9IG1vZGU7IH1cclxuXHJcbiAgICAgICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92O1xyXG5cclxuICAgICAgICBzd2l0Y2goIG1vZGUgKSB7XHJcblxyXG4gICAgICAgIGNhc2UgTU9ERVMuQ0FSREJPQVJEOlxyXG5cclxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLkNhcmRib2FyZEVmZmVjdDtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVSZXRpY2xlQ29udHJvbCgpO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgTU9ERVMuU1RFUkVPOlxyXG5cclxuICAgICAgICAgICAgdGhpcy5lZmZlY3QgPSB0aGlzLlN0ZXJlb0VmZmVjdDtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVSZXRpY2xlQ29udHJvbCgpO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlUmV0aWNsZUNvbnRyb2woKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEdWFsIGV5ZSBlZmZlY3QgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3RcclxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRUb0NoaWxkcmVuKCB7IHR5cGU6ICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSBlZmZlY3Qgc3RlcmVvIGNhbWVyYSB0byB1cGRhdGUgYnkgcmVmcmVzaGluZyBmb3ZcclxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3YgKyAxMGUtMztcclxuICAgICAgICB0aGlzLmVmZmVjdC5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5mb3YgPSBmb3Y7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERpc3BhdGNoIG1vZGUgY2hhbmdlIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI21vZGUtY2hhbmdlXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdtb2RlLWNoYW5nZScsIG1vZGU6IHRoaXMubW9kZSB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgYWRkaXRpb25hbCByZW5kZXJpbmcgZWZmZWN0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUVmZmVjdDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5tb2RlID0gTU9ERVMuTk9STUFMO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVJldGljbGVDb250cm9sKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCB1bmRlZmluZWQsIHRoaXMubW9kZSApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEdWFsIGV5ZSBlZmZlY3QgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBJbmZvc3BvdCNwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3RcclxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRUb0NoaWxkcmVuKCB7IHR5cGU6ICdwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEaXNwYXRjaCBtb2RlIGNoYW5nZSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSByZXRpY2xlIGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBlbmFibGVSZXRpY2xlQ29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMucmV0aWNsZS52aXNpYmxlICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIHJldGljbGUgZXZlbnQgYW5kIHVucmVnaXN0ZXIgbW91c2UgZXZlbnRcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5yZXRpY2xlLnNob3coKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyUmV0aWNsZUV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXRpY2xlRXZlbnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSByZXRpY2xlIGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlUmV0aWNsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWdpc3RlciBtb3VzZSBldmVudCBhbmQgdW5yZWdpc3RlciByZXRpY2xlIGV2ZW50XHJcbiAgICAgICAgaWYgKCAhdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJldGljbGUuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJSZXRpY2xlRXZlbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIGF1dG8gcm90YXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBlbmFibGVBdXRvUmF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIGF1dG8gcm90YXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlQXV0b1JhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSB2aWRlbyBwbGF5IG9yIHN0b3BcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby10b2dnbGVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlVmlkZW9QbGF5OiBmdW5jdGlvbiAoIHBhdXNlICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMucGFub3JhbWEgaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRvZ2dsZSB2aWRlbyBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXRvZ2dsZVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby10b2dnbGUnLCBwYXVzZTogcGF1c2UgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjdXJyZW50VGltZSBpbiBhIHZpZGVvXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdGltZVxyXG4gICAgICovXHJcbiAgICBzZXRWaWRlb0N1cnJlbnRUaW1lOiBmdW5jdGlvbiAoIHBlcmNlbnRhZ2UgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogU2V0dGluZyB2aWRlbyB0aW1lIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdGltZVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gcGVyY2VudGFnZSAtIFBlcmNlbnRhZ2Ugb2YgYSB2aWRlby4gUmFuZ2UgZnJvbSAwLjAgdG8gMS4wXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLXRpbWUnLCBwZXJjZW50YWdlOiBwZXJjZW50YWdlIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gdmlkZW8gdXBkYXRlcyBpZiBhbiB3aWRnZXQgaXMgcHJlc2VudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlld2VyI3ZpZGVvLXVwZGF0ZVxyXG4gICAgICovXHJcbiAgICBvblZpZGVvVXBkYXRlOiBmdW5jdGlvbiAoIHBlcmNlbnRhZ2UgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBWaWRlbyB1cGRhdGUgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tdXBkYXRlXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby11cGRhdGUnLCBwZXJjZW50YWdlOiBwZXJjZW50YWdlIH0gKTsgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdXBkYXRlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBldmVyeSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICggZm4gKSB7XHJcblxyXG4gICAgICAgIGlmICggZm4gKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGxiYWNrcy5wdXNoKCBmbiApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBiZSByZW1vdmVkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICggZm4gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy51cGRhdGVDYWxsYmFja3MuaW5kZXhPZiggZm4gKTtcclxuXHJcbiAgICAgICAgaWYgKCBmbiAmJiBpbmRleCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3Muc3BsaWNlKCBpbmRleCwgMSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgdmlkZW8gd2lkZ2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2hvd1ZpZGVvV2lkZ2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaG93IHZpZGVvIHdpZGdldCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby1jb250cm9sLXNob3dcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tY29udHJvbC1zaG93JyB9ICk7IH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSB2aWRlbyB3aWRnZXRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBoaWRlVmlkZW9XaWRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhpZGUgdmlkZW8gd2lkZ2V0XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLWNvbnRyb2wtaGlkZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKCB3aWRnZXQgKSB7IHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby1jb250cm9sLWhpZGUnIH0gKTsgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdmlkZW8gcGxheSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkIFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVZpZGVvUGxheUJ1dHRvbjogZnVuY3Rpb24gKCBwYXVzZWQgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIHdpZGdldCAmJiB3aWRnZXQudmlkZW9FbGVtZW50ICYmIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbiApIHtcclxuXHJcbiAgICAgICAgICAgIHdpZGdldC52aWRlb0VsZW1lbnQuY29udHJvbEJ1dHRvbi51cGRhdGUoIHBhdXNlZCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBkZWZhdWx0IHBhbm9yYW1hIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICogQHBhcmFtIHtQYW5vcmFtYX0gcGFubyAtIFRoZSBwYW5vcmFtYSB0byBiZSBhZGRlZCB3aXRoIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkUGFub3JhbWFFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoIHBhbm8gKSB7XHJcblxyXG4gICAgICAgIC8vIFNldCBjYW1lcmEgY29udHJvbCBvbiBldmVyeSBwYW5vcmFtYVxyXG4gICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNldENhbWVyYUNvbnRyb2wuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgYW5kIGhpZGUgd2lkZ2V0IGV2ZW50IG9ubHkgd2hlbiBpdCdzIFZpZGVvUGFub3JhbWFcclxuICAgICAgICBpZiAoIHBhbm8gaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMuc2hvd1ZpZGVvV2lkZ2V0LmJpbmQoIHRoaXMgKSApO1xyXG4gICAgICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICEodGhpcy5wYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVWaWRlb1dpZGdldC5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjYW1lcmEgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldENhbWVyYUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnRhcmdldC5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjdXJyZW50IGNhbWVyYSBjb250cm9sXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gQ3VycmVudCBuYXZpZ2F0aW9uIGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1RIUkVFLk9yYml0Q29udHJvbHN8VEhSRUUuRGV2aWNlT3JpZW50YXRpb25Db250cm9sc31cclxuICAgICAqL1xyXG4gICAgZ2V0Q29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgc2NlbmVcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7VEhSRUUuU2NlbmV9IC0gQ3VycmVudCBzY2VuZSB3aGljaCB0aGUgdmlld2VyIGlzIGJ1aWx0IG9uXHJcbiAgICAgKi9cclxuICAgIGdldFNjZW5lOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2FtZXJhXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge1RIUkVFLkNhbWVyYX0gLSBUaGUgc2NlbmUgY2FtZXJhXHJcbiAgICAgKi9cclxuICAgIGdldENhbWVyYTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYW1lcmE7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCByZW5kZXJlclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSAtIFRoZSByZW5kZXJlciB1c2luZyB3ZWJnbFxyXG4gICAgICovXHJcbiAgICBnZXRSZW5kZXJlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBUaGUgY29udGFpbmVyIGhvbGRzIHJlbmRlcmVyZCBjYW52YXNcclxuICAgICAqL1xyXG4gICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbnRyb2wgaWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIENvbnRyb2wgaWQuICdvcmJpdCcgb3IgJ2RldmljZS1vcmllbnRhdGlvbidcclxuICAgICAqL1xyXG4gICAgZ2V0Q29udHJvbElkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wuaWQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpZFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gTmV4dCBjb250cm9sIGlkXHJcbiAgICAgKi9cclxuICAgIGdldE5leHRDb250cm9sSWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbHNbIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpIF0uaWQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBuZXh0IG5hdmlnYXRpb24gY29udHJvbCBpbmRleFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gTmV4dCBjb250cm9sIGluZGV4XHJcbiAgICAgKi9cclxuICAgIGdldE5leHRDb250cm9sSW5kZXg6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29udHJvbHMgPSB0aGlzLmNvbnRyb2xzO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2w7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY29udHJvbHMuaW5kZXhPZiggY29udHJvbCApICsgMTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggbmV4dEluZGV4ID49IGNvbnRyb2xzLmxlbmd0aCApID8gMCA6IG5leHRJbmRleDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZpZWxkIG9mIHZpZXcgb2YgY2FtZXJhXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZm92XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q2FtZXJhRm92OiBmdW5jdGlvbiAoIGZvdiApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZm92ID0gZm92O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIGNvbnRyb2wgYnkgaW5kZXhcclxuICAgICAqIEBwYXJhbSAge0NPTlRST0xTfSBpbmRleCAtIEluZGV4IG9mIGNhbWVyYSBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZW5hYmxlQ29udHJvbDogZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHJcbiAgICAgICAgaW5kZXggPSAoIGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmNvbnRyb2xzLmxlbmd0aCApID8gaW5kZXggOiAwO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmNvbnRyb2xzWyBpbmRleCBdO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgICBjYXNlIENPTlRST0xTLk9SQklUOlxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ICs9IDE7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBDT05UUk9MUy5ERVZJQ0VPUklFTlRBVElPTjpcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoIHRoaXMucGFub3JhbWEucG9zaXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVXaWRnZXRJdGVtKCBpbmRleCwgdW5kZWZpbmVkICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgY3VycmVudCBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIG5leHQgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZU5leHRDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZW5hYmxlQ29udHJvbCggdGhpcy5nZXROZXh0Q29udHJvbEluZGV4KCkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2NyZWVuIFNwYWNlIFByb2plY3Rpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBnZXRTY3JlZW5WZWN0b3I6IGZ1bmN0aW9uICggd29ybGRWZWN0b3IgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY3RvciA9IHdvcmxkVmVjdG9yLmNsb25lKCk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGhIYWxmID0gKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCApIC8gMjtcclxuICAgICAgICBjb25zdCBoZWlnaHRIYWxmID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgdmVjdG9yLnByb2plY3QoIHRoaXMuY2FtZXJhICk7XHJcblxyXG4gICAgICAgIHZlY3Rvci54ID0gKCB2ZWN0b3IueCAqIHdpZHRoSGFsZiApICsgd2lkdGhIYWxmO1xyXG4gICAgICAgIHZlY3Rvci55ID0gLSAoIHZlY3Rvci55ICogaGVpZ2h0SGFsZiApICsgaGVpZ2h0SGFsZjtcclxuICAgICAgICB2ZWN0b3IueiA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIFNwcml0ZSBpbiBWaWV3cG9ydFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNoZWNrU3ByaXRlSW5WaWV3cG9ydDogZnVuY3Rpb24gKCBzcHJpdGUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZS5nZXRJbnZlcnNlKCB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXgubXVsdGlwbHlNYXRyaWNlcyggdGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFGcnVzdHVtLnNldEZyb21NYXRyaXgoIHRoaXMuY2FtZXJhVmlld1Byb2plY3Rpb25NYXRyaXggKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZS52aXNpYmxlICYmIHRoaXMuY2FtZXJhRnJ1c3R1bS5pbnRlcnNlY3RzU3ByaXRlKCBzcHJpdGUgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXZlcnNlRHJhZ2dpbmdEaXJlY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLnJvdGF0ZVNwZWVkICo9IC0xO1xyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKj0gLTE7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCByZXRpY2xlIFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZFJldGljbGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXRpY2xlID0gbmV3IFJldGljbGUoIDB4ZmZmZmZmLCB0cnVlLCB0aGlzLm9wdGlvbnMuZHdlbGxUaW1lICk7XHJcbiAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5hZGQoIHRoaXMucmV0aWNsZSApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVSZXRpY2xlLmFkZCggdGhpcy5jYW1lcmEgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHdlZW4gY29udHJvbCBsb29raW5nIGNlbnRlclxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5WZWN0b3IzfSB2ZWN0b3IgLSBWZWN0b3IgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MTAwMF0gLSBEdXJhdGlvbiB0byB0d2VlblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHR3ZWVuQ29udHJvbENlbnRlcjogZnVuY3Rpb24gKCB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5jb250cm9sICE9PSB0aGlzLk9yYml0Q29udHJvbHMgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUGFzcyBpbiBhcmd1bWVudHMgYXMgYXJyYXlcclxuICAgICAgICBpZiAoIHZlY3RvciBpbnN0YW5jZW9mIEFycmF5ICkge1xyXG5cclxuICAgICAgICAgICAgZHVyYXRpb24gPSB2ZWN0b3JbIDEgXTtcclxuICAgICAgICAgICAgZWFzaW5nID0gdmVjdG9yWyAyIF07XHJcbiAgICAgICAgICAgIHZlY3RvciA9IHZlY3RvclsgMCBdO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24gIT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogMTAwMDtcclxuICAgICAgICBlYXNpbmcgPSBlYXNpbmcgfHwgVFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dDtcclxuXHJcbiAgICAgICAgbGV0IHNjb3BlLCBoYSwgdmEsIGNodiwgY3Z2LCBodiwgdnYsIHZwdGMsIG92LCBudjtcclxuXHJcbiAgICAgICAgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBjaHYgPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApO1xyXG4gICAgICAgIGN2diA9IGNodi5jbG9uZSgpO1xyXG5cclxuICAgICAgICB2cHRjID0gdGhpcy5wYW5vcmFtYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkuc3ViKCB0aGlzLmNhbWVyYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcclxuXHJcbiAgICAgICAgaHYgPSB2ZWN0b3IuY2xvbmUoKTtcclxuICAgICAgICAvLyBTY2FsZSBlZmZlY3RcclxuICAgICAgICBodi54ICo9IC0xO1xyXG4gICAgICAgIGh2LmFkZCggdnB0YyApLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHZ2ID0gaHYuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgY2h2LnkgPSAwO1xyXG4gICAgICAgIGh2LnkgPSAwO1xyXG5cclxuICAgICAgICBoYSA9IE1hdGguYXRhbjIoIGh2LnosIGh2LnggKSAtIE1hdGguYXRhbjIoIGNodi56LCBjaHYueCApO1xyXG4gICAgICAgIGhhID0gaGEgPiBNYXRoLlBJID8gaGEgLSAyICogTWF0aC5QSSA6IGhhO1xyXG4gICAgICAgIGhhID0gaGEgPCAtTWF0aC5QSSA/IGhhICsgMiAqIE1hdGguUEkgOiBoYTtcclxuICAgICAgICB2YSA9IE1hdGguYWJzKCBjdnYuYW5nbGVUbyggY2h2ICkgKyAoIGN2di55ICogdnYueSA8PSAwID8gdnYuYW5nbGVUbyggaHYgKSA6IC12di5hbmdsZVRvKCBodiApICkgKTtcclxuICAgICAgICB2YSAqPSB2di55IDwgY3Z2LnkgPyAxIDogLTE7XHJcblxyXG4gICAgICAgIG92ID0geyBsZWZ0OiAwLCB1cDogMCB9O1xyXG4gICAgICAgIG52ID0geyBsZWZ0OiAwLCB1cDogMCB9O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGVmdEFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIG92IClcclxuICAgICAgICAgICAgLnRvKCB7IGxlZnQ6IGhhIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLmVhc2luZyggZWFzaW5nIClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uKG92KXtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2wucm90YXRlTGVmdCggb3YubGVmdCAtIG52LmxlZnQgKTtcclxuICAgICAgICAgICAgICAgIG52LmxlZnQgPSBvdi5sZWZ0O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlblVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCBvdiApXHJcbiAgICAgICAgICAgIC50byggeyB1cDogdmEgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBlYXNpbmcgKVxyXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24ob3Ype1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuY29udHJvbC5yb3RhdGVVcCggb3YudXAgLSBudi51cCApO1xyXG4gICAgICAgICAgICAgICAgbnYudXAgPSBvdi51cDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR3ZWVuIGNvbnRyb2wgbG9va2luZyBjZW50ZXIgYnkgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLk9iamVjdDNEfSBvYmplY3QgLSBPYmplY3QgdG8gYmUgbG9va2VkIGF0IHRoZSBjZW50ZXJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZHVyYXRpb249MTAwMF0gLSBEdXJhdGlvbiB0byB0d2VlblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2Vhc2luZz1UV0VFTi5FYXNpbmcuRXhwb25lbnRpYWwuT3V0XSAtIEVhc2luZyBmdW5jdGlvblxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHR3ZWVuQ29udHJvbENlbnRlckJ5T2JqZWN0OiBmdW5jdGlvbiAoIG9iamVjdCwgZHVyYXRpb24sIGVhc2luZyApIHtcclxuXHJcbiAgICAgICAgbGV0IGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG9iamVjdC50cmF2ZXJzZUFuY2VzdG9ycyggZnVuY3Rpb24gKCBhbmNlc3RvciApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggYW5jZXN0b3Iuc2NhbGVQbGFjZUhvbGRlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpZiAoIGlzVW5kZXJTY2FsZVBsYWNlSG9sZGVyICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW52ZXJ0WFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50d2VlbkNvbnRyb2xDZW50ZXIoIG9iamVjdC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkubXVsdGlwbHkoIGludmVydFhWZWN0b3IgKSwgZHVyYXRpb24sIGVhc2luZyApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50d2VlbkNvbnRyb2xDZW50ZXIoIG9iamVjdC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICksIGR1cmF0aW9uLCBlYXNpbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIGNhbGxlZCB3aGVuIHdpbmRvdyBzaXplIGlzIGNoYW5nZWRcclxuICAgICAqIEBmaXJlcyBWaWV3ZXIjd2luZG93LXJlc2l6ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dXaWR0aF0gLSBTcGVjaWZ5IGlmIGN1c3RvbSBlbGVtZW50IGhhcyBjaGFuZ2VkIHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpbmRvd0hlaWdodF0gLSBTcGVjaWZ5IGlmIGN1c3RvbSBlbGVtZW50IGhhcyBjaGFuZ2VkIGhlaWdodFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIGxldCB3aWR0aCwgaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBleHBhbmQgPSB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jb250YWluZXInICkgfHwgdGhpcy5jb250YWluZXIuaXNGdWxsc2NyZWVuO1xyXG5cclxuICAgICAgICBpZiAoIHdpbmRvd1dpZHRoICE9PSB1bmRlZmluZWQgJiYgd2luZG93SGVpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB3aWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl93aWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5faGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNBbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWRqdXN0V2lkdGggPSBpc0FuZHJvaWQgXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCkgXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhZGp1c3RIZWlnaHQgPSBpc0FuZHJvaWQgXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKSBcclxuICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xyXG5cclxuICAgICAgICAgICAgd2lkdGggPSBleHBhbmQgPyBhZGp1c3RXaWR0aCA6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICBoZWlnaHQgPSBleHBhbmQgPyBhZGp1c3RIZWlnaHQgOiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX2hlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aWR0aCAvIGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcmV0aWNsZVxyXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgfHwgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2luZG93IHJlc2l6aW5nIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3dpbmRvdy1yZXNpemVcclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggIC0gV2lkdGggb2YgdGhlIHdpbmRvd1xyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgLSBIZWlnaHQgb2YgdGhlIHdpbmRvd1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnd2luZG93LXJlc2l6ZScsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd3aW5kb3ctcmVzaXplJywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgb3V0cHV0IGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRPdXRwdXRFbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMTBweCc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMTBweCc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjZmZmJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xyXG4gICAgICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE91dHB1dCBwb3NpdGlvbiBpbiBkZXZlbG9wZXIgY29uc29sZSBieSBob2xkaW5nIGRvd24gQ3RybCBidXR0b25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvdXRwdXRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0KCB0aGlzLnBhbm9yYW1hLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBpbnRlcnNlY3RzWyAwIF0ucG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IFRIUkVFLlZlY3RvcjMoIC0xLCAxLCAxICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0gdGhpcy5wYW5vcmFtYS5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICk7XHJcbiAgICAgICAgICAgIHBvaW50LnN1Yiggd29ybGQgKS5tdWx0aXBseSggY29udmVydGVyICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHBvaW50LngudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIHk6IHBvaW50LnkudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgICAgIHo6IHBvaW50LnoudG9GaXhlZCgyKSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtwb3NpdGlvbi54fSwgJHtwb3NpdGlvbi55fSwgJHtwb3NpdGlvbi56fWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHBvaW50Lmxlbmd0aCgpID09PSAwICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoIHRoaXMub3B0aW9ucy5vdXRwdXQgKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdldmVudCc6XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIERpc3BhdGNoIHJheWNhc3QgcG9zaXRpb24gYXMgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3Bvc2l0aW9uLW91dHB1dFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bvc2l0aW9uLW91dHB1dCcsIHBvc2l0aW9uOiBwb3NpdGlvbiB9ICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbnNvbGUnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCBtZXNzYWdlICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ292ZXJsYXknOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXREaXZFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdXNlIGRvd25cclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnggPSAoIGV2ZW50LmNsaWVudFggPj0gMCApID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS55ID0gKCBldmVudC5jbGllbnRZID49IDAgKSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZWRvd24nO1xyXG4gICAgICAgIHRoaXMub25UYXAoIGV2ZW50ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdXNlIG1vdmVcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdtb3VzZW1vdmUnO1xyXG4gICAgICAgIHRoaXMub25UYXAoIGV2ZW50ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIG1vdXNlIHVwXHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IG9uVGFyZ2V0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbW91c2V1cCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSAoIHRoaXMudXNlck1vdXNlLnggPj0gZXZlbnQuY2xpZW50WCAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSBcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS54IDw9IGV2ZW50LmNsaWVudFggKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55ID49IGV2ZW50LmNsaWVudFkgLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS55IDw9IGV2ZW50LmNsaWVudFkgKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgKSBcclxuXHRcdFx0XHR8fCAgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyBcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2VcclxuXHRcdFx0XHQmJiB0aGlzLnVzZXJNb3VzZS54IDw9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggKyB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA+PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXHJcbiAgICAgICAgICAgID8gJ2NsaWNrJyA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgc2hvdWxkIGhhcHBlbiBvbiBjYW52YXNcclxuICAgICAgICBpZiAoIGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3Bhbm9sZW5zLWNhbnZhcycgKSApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID09PSAxICkge1xyXG5cclxuICAgICAgICAgICAgb25UYXJnZXQgPSB0aGlzLm9uVGFwKCB7IGNsaWVudFg6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgfSwgdHlwZSApO1xyXG5cdFx0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggZXZlbnQsIHR5cGUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ25vbmUnO1xyXG5cclxuICAgICAgICBpZiAoIG9uVGFyZ2V0ICkgeyBcclxuXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBvcHRpb25zOiB7IGF1dG9IaWRlSW5mb3Nwb3QsIGF1dG9IaWRlQ29udHJvbEJhciB9LCBwYW5vcmFtYSwgdG9nZ2xlQ29udHJvbEJhciB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVJbmZvc3BvdCAmJiBwYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBwYW5vcmFtYS50b2dnbGVJbmZvc3BvdFZpc2liaWxpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggYXV0b0hpZGVDb250cm9sQmFyICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbnRyb2xCYXIoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiB0YXAgZXZlbnkgZnJhbWVcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvblRhcDogZnVuY3Rpb24gKCBldmVudCwgdHlwZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQueCA9ICggKCBldmVudC5jbGllbnRYIC0gbGVmdCApIC8gY2xpZW50V2lkdGggKSAqIDIgLSAxO1xyXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQueSA9IC0gKCAoIGV2ZW50LmNsaWVudFkgLSB0b3AgKSAvIGNsaWVudEhlaWdodCApICogMiArIDE7XHJcblxyXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyLnNldEZyb21DYW1lcmEoIHRoaXMucmF5Y2FzdGVyUG9pbnQsIHRoaXMuY2FtZXJhICk7XHJcblxyXG4gICAgICAgIC8vIFJldHVybiBpZiBubyBwYW5vcmFtYSBcclxuICAgICAgICBpZiAoICF0aGlzLnBhbm9yYW1hICkgeyBcclxuXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3V0cHV0IGluZm9zcG90IGluZm9ybWF0aW9uXHJcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSAnbW91c2Vkb3duJyAmJiB0aGlzLnRvdWNoU3VwcG9ydGVkIHx8IHRoaXMuT1VUUFVUX0lORk9TUE9UICkgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UG9zaXRpb24oKTsgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdHMgPSB0aGlzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCB0aGlzLnBhbm9yYW1hLmNoaWxkcmVuLCB0cnVlICk7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0X2VudGl0eSA9IHRoaXMuZ2V0Q29udmVydGVkSW50ZXJzZWN0KCBpbnRlcnNlY3RzICk7XHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSA/IGludGVyc2VjdHNbMF0ub2JqZWN0IDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZXVwJyAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9PT0gaW50ZXJzZWN0X2VudGl0eSAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZXVwJyAgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0ID09PSBpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrJywgaW50ZXJzZWN0czogaW50ZXJzZWN0cywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIGludGVyc2VjdF9lbnRpdHkuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RfZW50aXR5LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NsaWNrLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljaycsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXInLCBpbnRlcnNlY3RzOiBpbnRlcnNlY3RzLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoICggdGhpcy5ob3Zlck9iamVjdCAmJiBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgJiYgdGhpcy5ob3Zlck9iamVjdCAhPT0gaW50ZXJzZWN0X2VudGl0eSApXHJcblx0XHRcdFx0fHwgKCB0aGlzLmhvdmVyT2JqZWN0ICYmIGludGVyc2VjdHMubGVuZ3RoID09PSAwICkgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmxlYXZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldGljbGUuZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdF9lbnRpdHkgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdCAhPT0gaW50ZXJzZWN0X2VudGl0eSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdCA9IGludGVyc2VjdF9lbnRpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcmVudGVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgcmV0aWNsZSB0aW1lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5hdXRvUmV0aWNsZVNlbGVjdCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCB0aGlzLnRlbXBFbmFibGVSZXRpY2xlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLnN0YXJ0KCB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIGV2ZW50LCAnY2xpY2snICkgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCAhPSBpbnRlcnNlY3RfZW50aXR5ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0ID0gaW50ZXJzZWN0X2VudGl0eTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RhcnQtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgdGhpcy5wcmVzc09iamVjdCAhPSBpbnRlcnNlY3QgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSBpbnRlcnNlY3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0YXJ0JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy51c2VyTW91c2UudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaW50ZXJzZWN0ICYmIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzbW92ZS1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3Ntb3ZlJywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhaW50ZXJzZWN0X2VudGl0eSAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcC1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdCAmJiB0aGlzLnByZXNzT2JqZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluZm9zcG90IGhhbmRsZXJcclxuICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3QgPSBpbnRlcnNlY3Q7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBpZiAoIHR5cGUgPT09ICdjbGljaycgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLmluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oaWRlSW5mb3Nwb3QoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBdXRvIHJvdGF0ZVxyXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgJiYgdGhpcy51c2VyTW91c2UudHlwZSAhPT0gJ21vdXNlbW92ZScgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBdXRvLXJvdGF0ZSBpZGxlIHRpbWVyXHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuY29udHJvbCA9PT0gdGhpcy5PcmJpdENvbnRyb2xzICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9Sb3RhdGVSZXF1ZXN0SWQgPSB3aW5kb3cuc2V0VGltZW91dCggdGhpcy5lbmFibGVBdXRvUmF0ZS5iaW5kKCB0aGlzICksIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlQWN0aXZhdGlvbkR1cmF0aW9uICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cdFx0XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb252ZXJ0ZWQgaW50ZXJzZWN0XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBpbnRlcnNlY3RzIFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldENvbnZlcnRlZEludGVyc2VjdDogZnVuY3Rpb24gKCBpbnRlcnNlY3RzICkge1xyXG5cclxuICAgICAgICBsZXQgaW50ZXJzZWN0O1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RzW2ldLmRpc3RhbmNlID49IDAgJiYgaW50ZXJzZWN0c1tpXS5vYmplY3QgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LnBhc3NUaHJvdWdoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5ICYmIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eS5wYXNzVGhyb3VnaCApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eSAmJiAhaW50ZXJzZWN0c1tpXS5vYmplY3QuZW50aXR5LnBhc3NUaHJvdWdoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0ID0gaW50ZXJzZWN0c1tpXS5vYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGhpZGVJbmZvc3BvdDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuaW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90Lm9uSG92ZXJFbmQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5mb3Nwb3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIGNvbnRyb2wgYmFyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWV3ZXIjY29udHJvbC1iYXItdG9nZ2xlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUNvbnRyb2xCYXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyB3aWRnZXQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvZ2dsZSBjb250cm9sIGJhciBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNjb250cm9sLWJhci10b2dnbGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAoIHdpZGdldCApIHtcclxuXHJcbiAgICAgICAgICAgIHdpZGdldC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjb250cm9sLWJhci10b2dnbGUnIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBrZXkgZG93blxyXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbktleURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5vcHRpb25zLm91dHB1dCAmJiB0aGlzLm9wdGlvbnMub3V0cHV0ICE9PSAnbm9uZScgJiYgZXZlbnQua2V5ID09PSAnQ29udHJvbCcgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLk9VVFBVVF9JTkZPU1BPVCA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24ga2V5IHVwXHJcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uS2V5VXA6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5PVVRQVVRfSU5GT1NQT1QgPSBmYWxzZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGNvbnRyb2wgYW5kIGNhbGxiYWNrc1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBUV0VFTi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MuZm9yRWFjaCggZnVuY3Rpb24oIGNhbGxiYWNrICl7IGNhbGxiYWNrKCk7IH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnRyYXZlcnNlKCBmdW5jdGlvbiggY2hpbGQgKXtcclxuICAgICAgICAgICAgaWYgKCBjaGlsZCBpbnN0YW5jZW9mIEluZm9zcG90IFxyXG5cdFx0XHRcdCYmIGNoaWxkLmVsZW1lbnQgXHJcblx0XHRcdFx0JiYgKCB0aGlzLmhvdmVyT2JqZWN0ID09PSBjaGlsZCBcclxuXHRcdFx0XHRcdHx8IGNoaWxkLmVsZW1lbnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnIFxyXG5cdFx0XHRcdFx0fHwgKGNoaWxkLmVsZW1lbnQubGVmdCAmJiBjaGlsZC5lbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKVxyXG5cdFx0XHRcdFx0fHwgKGNoaWxkLmVsZW1lbnQucmlnaHQgJiYgY2hpbGQuZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpICkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY2hlY2tTcHJpdGVJblZpZXdwb3J0KCBjaGlsZCApICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRTY3JlZW5WZWN0b3IoIGNoaWxkLmdldFdvcmxkUG9zaXRpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKSApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRyYW5zbGF0ZUVsZW1lbnQoIHgsIHkgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQub25EaXNtaXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJpbmcgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGFuaW1hdGlvbiBmcmFtZVxyXG4gICAgICogUmVuZGVyIHJldGljbGUgbGFzdFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdC5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnJlbmRlciggdGhpcy5zY2VuZVJldGljbGUsIHRoaXMuY2FtZXJhICk7XHJcblx0XHRcdFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5jbGVhckRlcHRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lUmV0aWNsZSwgdGhpcy5jYW1lcmEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMuYW5pbWF0ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjaGFuZ2VcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIG1vdXNlIGFuZCB0b3VjaCBldmVudCBvbiBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgcGFzc2l2ZTogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFLCBvcHRpb25zICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnXHQgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBvcHRpb25zICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBcdHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBvcHRpb25zICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJyAgLCBcdHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBvcHRpb25zICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgbW91c2UgYW5kIHRvdWNoIGV2ZW50IG9uIGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nICwgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnICwgIHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0LCAgdGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04sIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJyAgLCAgdGhpcy5IQU5ETEVSX01PVVNFX1VQICAsIGZhbHNlICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIHJldGljbGUgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlclJldGljbGVFdmVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFkZFVwZGF0ZUNhbGxiYWNrKCB0aGlzLkhBTkRMRVJfVEFQICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXJSZXRpY2xlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgcmV0aWNsZSBldmVudFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVJldGljbGVFdmVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjbGllbnRYID0gdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyAyICsgdGhpcy5jb250YWluZXIub2Zmc2V0TGVmdDtcclxuICAgICAgICBjb25zdCBjbGllbnRZID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xyXG4gICAgICAgIHRoaXMuSEFORExFUl9UQVAgPSB0aGlzLm9uVGFwLmJpbmQoIHRoaXMsIHsgY2xpZW50WCwgY2xpZW50WSB9ICk7XHJcbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlckV2ZW50TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIFJlc2l6ZSBFdmVudFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJyAsIHRoaXMuSEFORExFUl9XSU5ET1dfUkVTSVpFLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIEtleWJvYXJkIEV2ZW50XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcy5IQU5ETEVSX0tFWV9ET1dOLCB0cnVlICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXl1cCcgICwgdGhpcy5IQU5ETEVSX0tFWV9VUFx0ICwgdHJ1ZSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGNvbnRhaW5lciBhbmQgd2luZG93IGxpc3RlbmVyc1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBSZXNpemUgRXZlbnRcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScgLCB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBLZXlib2FyZCBFdmVudFxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuSEFORExFUl9LRVlfRE9XTiwgdHJ1ZSApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5dXAnICAsIHRoaXMuSEFORExFUl9LRVlfVVAgICwgdHJ1ZSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIGFsbCBzY2VuZSBvYmplY3RzIGFuZCBjbGVhciBjYWNoZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8vIFVucmVnaXN0ZXIgZG9tIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBkaXNwb3NhbCBvbiAzZCBvYmplY3RzXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRGlzcG9zZSAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gb2JqZWN0LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIG9iamVjdC5jaGlsZHJlbltpXSApO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZSggb2JqZWN0LmNoaWxkcmVuW2ldICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIFBhbm9yYW1hIHx8IG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggb2JqZWN0LmRpc3BhdGNoRXZlbnQgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggJ2Rpc3Bvc2UnICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjdXJzaXZlRGlzcG9zZSggdGhpcy5zY2VuZSApO1xyXG5cclxuICAgICAgICAvLyBkaXNwb3NlIHdpZGdldFxyXG4gICAgICAgIGlmICggdGhpcy53aWRnZXQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpZGdldC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbGVhciBjYWNoZVxyXG4gICAgICAgIGlmICggVEhSRUUuQ2FjaGUgJiYgVEhSRUUuQ2FjaGUuZW5hYmxlZCApIHtcclxuXHJcbiAgICAgICAgICAgIFRIUkVFLkNhY2hlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveSB2aWV3ZXIgYnkgZGlzcG9zaW5nIGFuZCBzdG9wcGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RBbmltYXRpb25JZCApO1x0XHRcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gcGFub3JhbWEgZGlzcG9zZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uUGFub3JhbWFEaXNwb3NlOiBmdW5jdGlvbiAoIHBhbm9yYW1hICkge1xyXG5cclxuICAgICAgICBpZiAoIHBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVZpZGVvV2lkZ2V0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBwYW5vcmFtYSA9PT0gdGhpcy5wYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEgPSBudWxsO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgYWpheCBjYWxsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIGJlIHJlcXVlc3RlZFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIGFmdGVyIHJlcXVlc3QgY29tcGxldGVzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZEFzeW5jUmVxdWVzdDogZnVuY3Rpb24gKCB1cmwsIGNhbGxiYWNrID0gKCkgPT4ge30gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayggZXZlbnQgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbiggJ0dFVCcsIHVybCwgdHJ1ZSApO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCggbnVsbCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWaWV3IGluZGljYXRvciBpbiB1cHBlciBsZWZ0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkVmlld0luZGljYXRvcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRWaWV3SW5kaWNhdG9yICggYXN5bmNFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggYXN5bmNFdmVudC5sb2FkZWQgPT09IDAgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2aWV3SW5kaWNhdG9yRGl2ID0gYXN5bmNFdmVudC50YXJnZXQucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLndpZHRoID0gc2NvcGUudmlld0luZGljYXRvclNpemUgKyAncHgnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmhlaWdodCA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUudG9wID0gJzEwcHgnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmxlZnQgPSAnMTBweCc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5pZCA9ICdwYW5vbGVucy12aWV3LWluZGljYXRvci1jb250YWluZXInO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFwcGVuZENoaWxkKCB2aWV3SW5kaWNhdG9yRGl2ICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSB2aWV3SW5kaWNhdG9yRGl2LnF1ZXJ5U2VsZWN0b3IoICcjaW5kaWNhdG9yJyApO1xyXG4gICAgICAgICAgICBjb25zdCBzZXRJbmRpY2F0b3JEID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLnJhZGl1cyA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICogMC4yMjU7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5jdXJyZW50UGFub0FuZ2xlID0gc2NvcGUuY2FtZXJhLnJvdGF0aW9uLnkgLSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCA5MCApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZm92QW5nbGUgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5jYW1lcmEuZm92ICkgO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUubGVmdEFuZ2xlID0gLXNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgLSBzY29wZS5mb3ZBbmdsZSAvIDI7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yaWdodEFuZ2xlID0gLXNjb3BlLmN1cnJlbnRQYW5vQW5nbGUgKyBzY29wZS5mb3ZBbmdsZSAvIDI7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5sZWZ0QW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRZID0gc2NvcGUucmFkaXVzICogTWF0aC5zaW4oIHNjb3BlLmxlZnRBbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRYID0gc2NvcGUucmFkaXVzICogTWF0aC5jb3MoIHNjb3BlLnJpZ2h0QW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5yaWdodEFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbmRpY2F0b3JEID0gJ00gJyArIHNjb3BlLmxlZnRYICsgJyAnICsgc2NvcGUubGVmdFkgKyAnIEEgJyArIHNjb3BlLnJhZGl1cyArICcgJyArIHNjb3BlLnJhZGl1cyArICcgMCAwIDEgJyArIHNjb3BlLnJpZ2h0WCArICcgJyArIHNjb3BlLnJpZ2h0WTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLmxlZnRYICYmIHNjb3BlLmxlZnRZICYmIHNjb3BlLnJpZ2h0WCAmJiBzY29wZS5yaWdodFkgJiYgc2NvcGUucmFkaXVzICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCAnZCcsIHNjb3BlLmluZGljYXRvckQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuYWRkVXBkYXRlQ2FsbGJhY2soIHNldEluZGljYXRvckQgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvck9uTW91c2VFbnRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yT25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBpbmRpY2F0b3JPbk1vdXNlRW50ZXIgKTtcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5hZGRFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIGluZGljYXRvck9uTW91c2VMZWF2ZSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkQXN5bmNSZXF1ZXN0KCBEYXRhSW1hZ2UuVmlld0luZGljYXRvciwgbG9hZFZpZXdJbmRpY2F0b3IgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwZW5kIGN1c3RvbSBjb250cm9sIGl0ZW0gdG8gZXhpc3RpbmcgY29udHJvbCBiYXJcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uPXt9XSAtIFN0eWxlIG9iamVjdCB0byBvdmVyd2lydGUgZGVmYXVsdCBlbGVtZW50IHN0eWxlLiBJdCB0YWtlcyAnc3R5bGUnLCAnb25UYXAnIGFuZCAnZ3JvdXAnIHByb3BlcnRpZXMuXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYXBwZW5kQ29udHJvbEl0ZW06IGZ1bmN0aW9uICggb3B0aW9uICkge1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy53aWRnZXQuY3JlYXRlQ3VzdG9tSXRlbSggb3B0aW9uICk7XHRcdFxyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbi5ncm91cCA9PT0gJ3ZpZGVvJyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LnZpZGVvRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aWRnZXQuYmFyRWxlbWVudC5hcHBlbmRDaGlsZCggaXRlbSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciBhbGwgY2FjaGVkIGZpbGVzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY2xlYXJBbGxDYWNoZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IFZpZXdlciB9OyIsImltcG9ydCB7IFRIUkVFX1JFVklTSU9OIH0gZnJvbSAnLi9Db25zdGFudHMnO1xyXG5cclxuaWYgKCBUSFJFRS5SRVZJU0lPTiAhPSBUSFJFRV9SRVZJU0lPTiApIHtcclxuXHJcbiAgICBjb25zb2xlLndhcm4oIGB0aHJlZS5qcyB2ZXJzaW9uIGlzIG5vdCBtYXRjaGVkLiBQbGVhc2UgY29uc2lkZXIgdXNlIHRoZSB0YXJnZXQgcmV2aXNpb24gJHtUSFJFRV9SRVZJU0lPTn1gICk7XHJcblxyXG59IiwiLyoqXHJcbiAqIFBhbm9sZW5zLmpzXHJcbiAqIEBhdXRob3IgcGNoZW42NlxyXG4gKiBAbmFtZXNwYWNlIFBBTk9MRU5TXHJcbiAqL1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbnN0YW50cyc7XHJcbmV4cG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4vRGF0YUltYWdlJztcclxuZXhwb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvSW1hZ2VMb2FkZXInO1xyXG5leHBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xyXG5leHBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlcic7XHJcbmV4cG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYS9NZWRpYSc7XHJcbmV4cG9ydCB7IFJldGljbGUgfSBmcm9tICcuL2ludGVyZmFjZS9SZXRpY2xlJztcclxuZXhwb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuL2luZm9zcG90L0luZm9zcG90JztcclxuZXhwb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQvV2lkZ2V0JztcclxuZXhwb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL1Bhbm9yYW1hJztcclxuZXhwb3J0IHsgSW1hZ2VQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvSW1hZ2VQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IEVtcHR5UGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0VtcHR5UGFub3JhbWEnO1xyXG5leHBvcnQgeyBDdWJlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0N1YmVQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IEJhc2ljUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0Jhc2ljUGFub3JhbWEnO1xyXG5leHBvcnQgeyBWaWRlb1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hJztcclxuZXhwb3J0IHsgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEnO1xyXG5leHBvcnQgeyBMaXR0bGVQbGFuZXQgfSBmcm9tICcuL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldCc7XHJcbmV4cG9ydCB7IEltYWdlTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldCc7XHJcbmV4cG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYSc7XHJcbmV4cG9ydCB7IFZpZXdlciB9IGZyb20gJy4vdmlld2VyL1ZpZXdlcic7XHJcbmltcG9ydCAnLi9DaGVjayc7XHJcblxyXG4vLyBleHBvc2UgVFdFRU5cclxuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcclxud2luZG93LlRXRUVOID0gVFdFRU47Il0sIm5hbWVzIjpbIlRIUkVFLkNhY2hlIiwiVEhSRUUuVGV4dHVyZSIsIlRIUkVFLlJHQkZvcm1hdCIsIlRIUkVFLlJHQkFGb3JtYXQiLCJUSFJFRS5DdWJlVGV4dHVyZSIsIlRIUkVFLkV2ZW50RGlzcGF0Y2hlciIsIlRIUkVFLlZpZGVvVGV4dHVyZSIsIlRIUkVFLkxpbmVhckZpbHRlciIsIlRIUkVFLlNwcml0ZU1hdGVyaWFsIiwiVEhSRUUuU3ByaXRlIiwiVEhSRUUuQ29sb3IiLCJUSFJFRS5DYW52YXNUZXh0dXJlIiwidGhpcyIsIlRIUkVFLkRvdWJsZVNpZGUiLCJUV0VFTiIsIlRIUkVFLlZlY3RvcjMiLCJUSFJFRS5NZXNoIiwiVEhSRUUuQmFja1NpZGUiLCJUSFJFRS5PYmplY3QzRCIsIlRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwiLCJUSFJFRS5CdWZmZXJHZW9tZXRyeSIsIlRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSIsIlRIUkVFLlNoYWRlckxpYiIsIlRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuU2hhZGVyTWF0ZXJpYWwiLCJUSFJFRS5NYXRyaXg0IiwiVEhSRUUuVmVjdG9yMiIsIlRIUkVFLlF1YXRlcm5pb24iLCJUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5IiwiVEhSRUUuTWF0aCIsIlRIUkVFLk1PVVNFIiwiVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEiLCJUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEiLCJUSFJFRS5FdWxlciIsIlRIUkVFLlNjZW5lIiwiVEhSRUUuU3RlcmVvQ2FtZXJhIiwiVEhSRUUuTmVhcmVzdEZpbHRlciIsIlRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0IiwiVEhSRUUuV2ViR0xSZW5kZXJlciIsIlRIUkVFLlJheWNhc3RlciIsIlRIUkVFLkZydXN0dW0iLCJUSFJFRS5SRVZJU0lPTiJdLCJtYXBwaW5ncyI6Ijs7OztBQUVBOzs7Ozs7QUFNQSxBQUFZLE1BQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7O0FBUWxELEFBQVksTUFBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7OztBQVEvQixBQUFZLE1BQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7OztBQVFuRSxBQUFZLE1BQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7O0FBUzFFLEFBQVksTUFBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7OztBQVczRCxBQUFZLE1BQUMsS0FBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7O0FBVXhFLEFBQVksTUFBQyxlQUFlLEdBQUcsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7O0FBVWhHLEFBQVksTUFBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTs7QUN4RS9FOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEFB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QztHQUNqQzs7RUFFRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztFQUVqRDs7Q0FFRCxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFOztFQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2xCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7RUFFN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtHQUM1QixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7R0FDbkQ7O0VBRUQsT0FBTyxDQUFDLENBQUM7O0VBRVQ7O0NBRUQsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7RUFFM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOztFQUU5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O0dBRWxCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEM7O0dBRUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0dBRTNFLE1BQU07O0dBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3REOztHQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUNWLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakU7O0dBRUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0dBRTdGOztFQUVEOztDQUVELEtBQUssRUFBRTs7RUFFTixNQUFNLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTs7R0FFNUIsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7R0FFMUI7O0VBRUQsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7R0FFMUIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDOztHQUU3QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7R0FFakM7O0VBRUQsU0FBUyxFQUFFLENBQUMsWUFBWTs7R0FFdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7R0FFWixPQUFPLFVBQVUsQ0FBQyxFQUFFOztJQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRVYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNaOztJQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxD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QUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzs7S0FFeEc7O0lBRUQscUJBQXFCLEVBQUUsWUFBWTs7UUFFL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDMUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFB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QU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRzs7UUFFdEQsTUFBTSxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOztRQUVuQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDOztRQUUvRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRWhDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDckUsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUM7O1FBRXRELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxHQUFHLENBQUM7O0tBRXBEOztJQUVELFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7SUFDaEQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7OztJQUlwQyxJQUFJLFFBQVEsR0FBRyxJQUFJUCxpQkFBdUIsRUFBRSxFQUFFLEdBQUcsRUFB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QUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOztRQUVoQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUVULEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDMUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUMzQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25HLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUU1QixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUs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
