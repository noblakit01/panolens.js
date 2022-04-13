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
Reticle.prototype = Object.assign( Object.create( Sprite.prototype ), {

    constructor: Reticle,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFub2xlbnMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvQ29uc3RhbnRzLmpzIiwiLi4vc3JjL0RhdGFJbWFnZS5qcyIsIi4uL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzIiwiLi4vc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qcyIsIi4uL3NyYy9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyLmpzIiwiLi4vc3JjL21lZGlhL01lZGlhLmpzIiwiLi4vc3JjL2ludGVyZmFjZS9SZXRpY2xlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0d2VlbmpzL3R3ZWVuLmpzL3NyYy9Ud2Vlbi5qcyIsIi4uL3NyYy9pbmZvc3BvdC9JbmZvc3BvdC5qcyIsIi4uL3NyYy93aWRnZXQvV2lkZ2V0LmpzIiwiLi4vc3JjL3Bhbm9yYW1hL1Bhbm9yYW1hLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvRW1wdHlQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DdWJlUGFub3JhbWEuanMiLCIuLi9zcmMvcGFub3JhbWEvQmFzaWNQYW5vcmFtYS5qcyIsIi4uL3NyYy9wYW5vcmFtYS9WaWRlb1Bhbm9yYW1hLmpzIiwiLi4vc3JjL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlci5qcyIsIi4uL3NyYy9wYW5vcmFtYS9Hb29nbGVTdHJlZXR2aWV3UGFub3JhbWEuanMiLCIuLi9zcmMvc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyLmpzIiwiLi4vc3JjL3Bhbm9yYW1hL0xpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9JbWFnZUxpdHRsZVBsYW5ldC5qcyIsIi4uL3NyYy9wYW5vcmFtYS9DYW1lcmFQYW5vcmFtYS5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvT3JiaXRDb250cm9scy5qcyIsIi4uL3NyYy9saWIvY29udHJvbHMvRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5qcyIsIi4uL3NyYy9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QuanMiLCIuLi9zcmMvbGliL2VmZmVjdHMvU3RlcmVvRWZmZWN0LmpzIiwiLi4vc3JjL3ZpZXdlci9WaWV3ZXIuanMiLCIuLi9zcmMvQ2hlY2suanMiLCIuLi9zcmMvUGFub2xlbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmVyc2lvbiwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbi8qKlxyXG4gKiBSRVZJU0lPTlxyXG4gKiBAbW9kdWxlIFJFVklTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlJFVklTSU9OXHJcbiAqIEB0eXBlIHtzdHJpbmd9IHJldmlzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUkVWSVNJT04gPSB2ZXJzaW9uLnNwbGl0KCAnLicgKVsgMSBdO1xyXG5cclxuLyoqXHJcbiAqIFZFUlNJT05cclxuICogQG1vZHVsZSBWRVJTSU9OXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZFUlNJT05cclxuICogQHR5cGUge3N0cmluZ30gdmVyc2lvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSB2ZXJzaW9uO1xyXG5cclxuLyoqXHJcbiAqIFRIUkVFSlMgUkVWSVNJT05cclxuICogQG1vZHVsZSBUSFJFRV9SRVZJU0lPTlxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5USFJFRV9SRVZJU0lPTlxyXG4gKiBAdHlwZSB7c3RyaW5nfSB0aHJlZWpzIHJldmlzaW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVEhSRUVfUkVWSVNJT04gPSBkZXBlbmRlbmNpZXMudGhyZWUuc3BsaXQoICcuJyApWyAxIF07XHJcblxyXG4vKipcclxuICogVEhSRUVKUyBWRVJTSU9OXHJcbiAqIEBtb2R1bGUgVEhSRUVfVkVSU0lPTlxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5USFJFRV9WRVJTSU9OXHJcbiAqIEB0eXBlIHtzdHJpbmd9IHRocmVlanMgdmVyc2lvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRIUkVFX1ZFUlNJT04gPSBkZXBlbmRlbmNpZXMudGhyZWUucmVwbGFjZSggL1teMC05Ll0vZywgJycgKTtcclxuXHJcbi8qKlxyXG4gKiBDT05UUk9MU1xyXG4gKiBAbW9kdWxlIENPTlRST0xTXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLkNPTlRST0xTLk9SQklUXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUkJJVCAwXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBERVZJQ0VPUklFTlRBVElPTiAxXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ09OVFJPTFMgPSB7IE9SQklUOiAwLCBERVZJQ0VPUklFTlRBVElPTjogMSB9O1xyXG5cclxuLyoqXHJcbiAqIE1PREVTXHJcbiAqIEBtb2R1bGUgTU9ERVNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuTU9ERVMuVU5LTk9XTlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gVU5LTk9XTiAwXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT1JNQUwgMVxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ0FSREJPQVJEIDJcclxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNURVJFTyAzXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTU9ERVMgPSB7IFVOS05PV046IDAsIE5PUk1BTDogMSwgQ0FSREJPQVJEOiAyLCBTVEVSRU86IDMgfTtcclxuXHJcbi8qKlxyXG4gKiBDT05UUk9MX0JVVFRPTlNcclxuICogQG1vZHVsZSBDT05UUk9MX0JVVFRPTlNcclxuICogQGV4YW1wbGUgUEFOT0xFTlMuVklFV0VSLkNPTlRST0xfQlVUVE9OU1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gRlVMTFNDUkVFTlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gU0VUVElOR1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVklERU9cclxuICovXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MX0JVVFRPTlMgPSB7IEZVTExTQ1JFRU46ICdmdWxsc2NyZWVuJywgU0VUVElORzogJ3NldHRpbmcnLCBWSURFTzogJ3ZpZGVvJyB9O1xyXG5cclxuLyoqXHJcbiAqIE9VVFBVVFNcclxuICogQG1vZHVsZSBPVVRQVVRTXHJcbiAqIEBleGFtcGxlIFBBTk9MRU5TLlZJRVdFUi5PVVRQVVRTXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBOT05FXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDT05TT0xFXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPVkVSTEFZXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT1VUUFVUUyA9IHsgTk9ORTogJ25vbmUnLCBDT05TT0xFOiAnY29uc29sZScsIE9WRVJMQVk6ICdvdmVybGF5JyB9O1xyXG5cclxuIiwiLyoqXHJcbiAqIERhdGEgVVJJIEltYWdlc1xyXG4gKiBAbW9kdWxlIERhdGFJbWFnZVxyXG4gKiBAZXhhbXBsZSBQQU5PTEVOUy5EYXRhSW1hZ2UuSW5mb1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSW5mbyBJbmZvcm1hdGlvbiBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBcnJvdyBBcnJvdyBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuRW50ZXIgRnVsbHNjcmVlbiBFbnRlciBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGdWxsc2NyZWVuTGVhdmUgRnVsbHNjcmVlbiBMZWF2ZSBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BsYXkgVmlkZW8gUGxheSBJY29uXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBWaWRlb1BhdXNlIFZpZGVvIFBhdXNlIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFdoaXRlVGlsZSBXaGl0ZSBUaWxlIEljb25cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFNldHRpbmcgU2V0dGluZ3MgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hldnJvblJpZ2h0IENoZXZyb24gUmlnaHQgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQ2hlY2sgQ2hlY2sgSWNvblxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gVmlld0luZGljYXRvciBWaWV3IEluZGljYXRvciBJY29uXHJcbiAqL1xyXG5jb25zdCBEYXRhSW1hZ2UgPSB7XHJcbiAgICBJbmZvOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEQmtsRVFWUjQydTJiUDA4VVFSaUhuekZhU1lDSS94b2tzZEJJcUd3SWlZV1JVQklTRXhwQ1EwZWozOEZXT21sSUtLaG9NUEViYUN4c3JySGlZclFnT1NsUUVhSUNyVCtMSFNQWnpOenQzczNjM0huN2xIdkx6dnY4MkwyZG0zMFhLaW9xS2dZWTA2MkJKRjBIcG9BN3dBUndCYmhzUHo0RGpvRUc4QW5ZTmNaOFN4MU9wOElYSk0xS1dwZFVWM25xOW05bkpWMUk3Vk5HZkV6U00wbU5OcVI5Tk93eHgxTDdOUk1mbGJRbTZTU2dlSjRUTzhab2F0KzgvTEtrZzRqaWVRNGtMYWYyUnRLd3BKMHVpdWZaa1RTY1NuNVMwbDVDK2Ivc1NacnN0dnlNcEtQVTV1YzRralRUamt2cGVZQ2thZUExLys3aHZjSVpNR3VNcVVVTFFOSVU4QWE0bHRyV3d5SHd5Qml6R3p3QVNTUEFlK0IyYXNzVzdBSDNqVEUvaSt4Y1pvYTEyUWZ5MkJvM2krNWNLQUJsOTl6RjFHWWxXRlRCZVVMTFMwRFpyT3NEY0ROZ2dUWGdjMjdiTFdBNjRCaGZnSHZHbUI4ZEhVWFoxRE0wUzQ1eGxpS01zOWJLcitrbElPa3FzQnJ3djlKdFZxMURld0VBVDRDaDFCWWRNR1FkeWdlZzdEZjRTbXFEQUt5b3lYcENzelBnSVRDZXV2b0FqRnVYMGdFOGpsalVkdjdiQ3RpT09KN1hwZFVaOEwvZ2RYSE9BNVF0WUg1TlhYVmdicmdXV24xbndGVHFhaVBnZFBJRmNEZDF0UkZ3T2wzMDdEd1J1WmdYd0x2Y3RnZkEwNGhqT3AxOEFjUmVaNnNaWTE2ZTN5RHBVdVF4blU2K1MyQWtjakVwY0RyMXp4T1hTUGdDS0xTYTBtYzRuWHdCL0VwZGJRU2NUcjRBR3FtcmpZRFR5UmZBeDlUVlJzRHA1QXVnOExKeUgrRjBjZ1pnNTh6MTFCVUhwTzVydUdoMkczeWJ1dXFBZUYyYUJmQXFkZFVCOGJxME9nUDJVMWNlZ0gzYU9RT01NYitCcmRUVkIyREx1cFFMd0xJT25LWTI2SUJUNitDbGFRREdtTy9BUm1xTER0aXdEbjdIVmtjWStFZGpOb1RsQ0krdFloTzJpVXBwbTZIS3NsUFVxMnFRS0hwVWU4QUZzamFVWHVVUVdDZ3FYeW9BRzhJdU1FL1drTlJybkFIelpmcURTZ2RnUTZnQmMyVGQzYjNDTVRCWHRrT3NJelRJalpMblFoamNWdGxjRUlQWkxKMExvVnZ0OHMvVmErM3l1U0FHODRVSlJ4Qjk4Y3BNOWRKVVJVVkZ4U0R6QnhLZGU0TGszL2gyQUFBQUFFbEZUa1N1UW1DQycsIFxyXG4gICAgQXJyb3c6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUFBQUFBQUFENVE3dC9BQUFBQ1hCSVdYTUFBQUJJQUFBQVNBQkd5V3MrQUFBQUNYWndRV2NBQUFCQUFBQUFRQURxOC9oZ0FBQURQa2xFUVZSNDJ1MmJNVXNjUVJpRzMwL1NSYUpFSTFaS1VpUkVyTklFTFJVYlFZU0FuWDhocFZVZ2tEWXAwd2dXVmpZVytRY0phUXpZcExvakpJWGh0RERFS0JwajY1dGk1OGl4bWRtYjJadlo3K1QyQVVIdWRtZm1lWGYyYm5iM082Q21wcVptZ0pHcU9pSTVBV0FXd0VNQTB3RHVBcmh0M3I0Q2NBYWdCZUFiZ0lhSS9OUU9wMWZoSVpLTEpOK1NiREtjcHRsM2tlU1F0aytJK0JqSlZ5UmJKYVJkdEV5Ylk5cCtSZUtqSk4rUXZJd29udWZTOURHcTdadVhYeWQ1bkZBOHp6SEpkVzF2a0x4RGNyZEM4VHk3Sk85b3ljK1FQRkNVYjNOQWNxWnErVG1TcDlybUhaeVNuQ3ZqRXJ3T0lQa1V3SHY4K3c3dkY2NEFMSXJJZnJJQVNNNEMrQURnbnJhdGd4TUFDeUxTaUI0QXlSRUFud0U4MExic3dnR0FKeUp5NGJOeHlBcHI2d2JJdzR4eHkzZGpyd0NZZmVldWFac0ZzRWJQZFVMWFU0RFpxdXNMZ01rRUEyMVAwNUVFYmY4QThGaEV6b3MyOHBrQkx4TEtMNXMvci9NMWtFa3o5dktRSEdlYXRmMDV5Zm1PZnViTmE3RzVKRGxlNU5odEJqd0hNQno1eUZ3QVdCYVJUKzBYelA4cFpzS3djUWlIMmZYOFljb2piK2t6eFV3NFpKbjdDU1FYcXBSUEhNS0NxNytpWko3MU12ZHkvRGZ0WFNRNkhjSmRTRGFxUFBLVy9tUE9CTytsY2J2ekNVMzVSQ0ZNMlBwd25RS3paUWZkZ2ZlMGR4SDVkTEE2dVFKNHBDMmZJQVNya3l1QTZYNlFqeHlDMWNrVlFObjdiTkhsSTRaZ2RYSUZVT2JpSkpsOHBCQ3NUakdmdUl3QTJDdjRGTjd4Yllqa2pxc1JBSHVJZVBYb0NpREYxWmsyVmlkWEFMKzFSNXNBcTVNcmdKYjJhQk5nZFhJRjhGVjd0QW13T3JrQ0NGczczd3lzVHRZQVRIRkNVM3ZFRVdtNkNpNkt2Z1kvYW84NklrNlhvZ0RlYVk4NklrNlhialBnU0h2a0VUaEN3UXk0NVhwRFJLNUpiZ040R1drZ1V5UjlINjVNUlF4Z1cwU3VuWjVGZXpLN3Bmd2Q4ZThNVjhVZkFQZEY1SmRyZzhKckFiUGpwclpGRDJ3V3lRUDZqOFpTRXVmUm1HbGdROXVtQkJ2ZDVJT2diakZVS0x1K1huV0JoRytycHNGVlpHVW8vY29KZ0ZWZithQUFUQWdOQUN2SUNwTDZqU3NBS3lIMVFjRUJtQkQyQVN3aHErN3VGODRBTElWV2lQVUVCN2xRc2lPRXdTMlZ6UVV4bU1YU3VSQ3FLcGQvelg0cmw4OEZNWmcvbUxBRWNTTitNbFAvYUtxbXBxWm1rUGtMMGhTandPcE5LeHdBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICBGdWxsc2NyZWVuRW50ZXI6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSWpSa1pHUmtaR0lpQm9aV2xuYUhROUlqSTBJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhkcFpIUm9QU0l5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S0lDQWdJRHh3WVhSb0lHUTlJazB3SURCb01qUjJNalJJTUhvaUlHWnBiR3c5SW01dmJtVWlMejRLSUNBZ0lEeHdZWFJvSUdROUlrMDNJREUwU0RWMk5XZzFkaTB5U0RkMkxUTjZiUzB5TFRSb01sWTNhRE5XTlVnMWRqVjZiVEV5SURkb0xUTjJNbWcxZGkwMWFDMHlkak42VFRFMElEVjJNbWd6ZGpOb01sWTFhQzAxZWlJdlBnbzhMM04yWno0PScsXHJcbiAgICBGdWxsc2NyZWVuTGVhdmU6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTBTREU1VmpFMlNERTJWakU1U0RFMFZqRTBUVFVzTVRSSU1UQldNVGxJT0ZZeE5rZzFWakUwVFRnc05VZ3hNRll4TUVnMVZqaElPRlkxVFRFNUxEaFdNVEJJTVRSV05VZ3hObFk0U0RFNVdpSWdMejQ4TDNOMlp6ND0nLFxyXG4gICAgVmlkZW9QbGF5OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQjNhV1IwYUQwaU1qUWlJR2hsYVdkb2REMGlNalFpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkyWm1aaUlnWkQwaVRUZ3NOUzR4TkZZeE9TNHhORXd4T1N3eE1pNHhORXc0TERVdU1UUmFJaUF2UGp3dmMzWm5QZz09JyxcclxuICAgIFZpZGVvUGF1c2U6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STJabVppSWdaRDBpVFRFMExERTVMakUwU0RFNFZqVXVNVFJJTVRSTk5pd3hPUzR4TkVneE1GWTFMakUwU0RaV01Ua3VNVFJhSWlBdlBqd3ZjM1puUGc9PScsXHJcbiAgICBXaGl0ZVRpbGU6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBSUFCQU1BQUFBR1ZzbkpBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUIxV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlXRTFRSUVOdmNtVWdOUzQwTGpBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJK0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2tOdmJYQnlaWE56YVc5dVBqRThMM1JwWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEJvYjNSdmJXVjBjbWxqU1c1MFpYSndjbVYwWVhScGIyNCtNand2ZEdsbVpqcFFhRzkwYjIxbGRISnBZMGx1ZEdWeWNISmxkR0YwYVc5dVBnb2dJQ0FnSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lDQWdQQzl5WkdZNlVrUkdQZ284TDNnNmVHMXdiV1YwWVQ0S0F0aUFCUUFBQUNSUVRGUkZBQUFBQUFBQUJnWUdCd2NISGg0ZUt5c3J4OGZIeTh2THpNek03T3pzQUFBQUJnWUcrcTdTWmdBQUFBcDBVazVUQVA3Ky92NysvdjcrL2lKeC9hOEFBQU93U1VSQlZIamE3ZDBoYnNOQUVBVlFvNlNGSTZYRWNBTERjZ05MdlVCdkVCUVZocGtXVllXbGhTc1ZGUzd0NVFJc2hSdDY5NWxFQVNaUCs4YzdhMWt6REwxZnorL3p5dXZ6cDZGYnZvZGRyTDZ1RGQxeUdaNWVYbGRlYjE4TjNmSXg3QSs1OHBybWhtNjVEZnZEY2QwOTUybHU2SmFiRmJEL3pWcHJaajFsemN5cytmajl6OHhUWnRiVDhydjh5V2x1NkJZQUlnQUFBQUFBQUFBQUFBQkFNNlFYRUFFQUFBQUFBQUFBZ0oyZ25hQUlpSUEzUTJxQUdnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRSnNBRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVmxmQWNaM2FlWm9idXNVS01HQmhWNktVRWxIR0tCRVJKUjYvZnhFeFJrUVpsOS9sVDhTMW9Wc3VocXlZTW1QS2pDa3p2ZmNDcHN4b2hyd1kwUTA2RUFFQUFBQUFBQUFBQUFDZ0dkSUxpQUFBQUFBQUFBQUF3RTdRVGxBRVJNQ2JJVFZBRFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdLbXdRMUVSQUFBQUFBQ1BRWTlCRVJBQkVSQUJFUkFCRVJBQkVSQUJBQUFBQUFBQUFJQ2RvSjJnQ0lpQVQyYlVBRFZBRFJBQkVRQUFRQkZVQkVWQUJFUmdFeXZBbEptK1Y0QXBNNmJNbURKanlvd3BNNmJNZE4wTG1ES2pHZkppUkRmb1FBUUFBQUFBQUFBQUFBQ0Faa2d2SUFJQUFBQUFBQUFBQUR0Qk8wRVJFQUZ2aHRRQU5RQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS2ZDRGtWRkFBQUFBQUE4QmowR1JVQUVSRUFFUkVBRVJFQUVSRUFFQUFBQUFBQUFBQUIyZ25hQ0lpQUNQcGxSQTlRQU5VQUVSQUFBQUVWUUVSUUJFUkNCVGF3QVUyYjZYZ0dtekpneVk4cU1LVE9tekpneTAzVXZZTXFNWnNpTEVkMmdBeEVBQUFBQUFBQUFBQUFBbWlHOWdBZ0FBQUFBQUFBQUFPd0U3UVJGUUFTOEdWSUQxQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUp3S094UVZBUUFBQUFEd0dQUVlGQUVSRUFFUkVBRVJFQUVSRUFFUkFBQUFBQUFBQUFEWUNkb0ppb0FJK0dSR0RWQUQxQUFSRUFFQUFCUkJSVkFFUkVBRU5yRUNUSm5wZXdXWU1tUEtqQ2t6cHN5WU1tUEtUTmU5Z0Nrem1pRXZSblNERGtRQUFBQUFBQUFBQUFBQWFJYjBBaUlBQUFBQUFBQUFBTEFUdEJNVUFSSHdaa2dOVUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIQXE3RkJVQkFBQUFBREFZOUJqVUFSRVFBUkVRQVJFUUFSRVFBUkVBQUFBQUFBQUFBQmdKMmduS0FJaTRKTVpOVUFOVUFORVFBUUFBRkFFRlVFUkVBRVIyTVFLTUdXbTd4Vmd5b3dwTTUwUFdlbjl1Z05HWHoxWGFvY0FGZ0FBQUFCSlJVNUVya0pnZ2c9PScsXHJcbiAgICBTZXR0aW5nOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQkFBQUFBUUFEcTgvaGdBQUFEbjBsRVFWUjQydTJielVzVlVSakdueU82Q1B6QU1uVGpwcEFvM0xUd0gxQ3FUZmF4YmVPaVJTMzdBMHdYdFJPRlZpMWFSQnMzTFdvaFNJR2JRQVFYVmlCR1JoRzBVSVJLVUNwSzdxL0ZuT0IydWM2Y09YTm1SbkdlM2VXK0g4Lzd6TGxuM3ZOeHBRb1ZLbFE0d2pCRkpBRk9TUnFYMU83b3NpdnB2akhtVTFuQ2hCWmdsdlNZTFlKYlMwRWFuQ3ZJSnpXSytnbnN5SDM0LzhPdU1hWWpiMjY1andDZ3o2TjRTV3Ezdm9kYkFFbW5TL0t0QkRnb0FneVU1QnRlQU9Ba01BUGNCcm9jN1Bza0RXZmdOK3d5RHdCZGx0TU1jREkzdFlCbmRlL3BIZUFSTU5URXJnZDRBUHp3ZVA4MzRvZU4xZE1rejVEbHNGTm4veXl2NGtkaVNLNEF0NEFPNENxd0dhRHdSbXphMkIwMjEwcU03WWhyWFU1OUFOQXE2Yldrd1FUVG41S081ZklFMHVWWWxYVGVHTE9YRk14MURyamxVTHdLS040MXg2RGxuSWpFRVFDY2tQUmUwb2tDaWd1SnI1TE9HR08reGhtNWpJQ0pRMWk4TE9lSkpLUFlFUUFNS3ZydHQ1WmRqU2YyRk0wRnEvc1pKSTJBNlVOY3ZDejM2VGlEZlVjQWNFMVNQdS9VNk1tOGsvVEZmdTZYZEZiNWlYM2RHUE04bFFmd05vZDMrVG93Qm5RM3lkZHR2MXZQSWUrYjFKSUJpd0VKMUlBSjIwOGs1VzIxdHJXQStWLzVDSEFjbUF0VS9BMlAvRGNDaVRBSEhFOHRnQ1ZoZ0x2QVhnWUNrMTdKby95VEdmTHVXZTdaZDcyQUM4Q1dCNG4zT0F6N21MeXROa1phYkFFWE1oZmVRS1lmV0VwSlpDeEEzckdVT1plQS9xREYxNUZwQXo0N0V2bE5rOW5lSTJlM2plV0N6MEJibXZpcE5rU01NWDhrdVNaWU04Wjh6eXFBamJIbWFONW1PZVlqZ0lYclU5M01XcnhIck5RanJxaURrUU1MSHdHK09kcUYzTk4zamVYS3pVOEFvRjFTemRIOFhLaEpVTzdIWkRYTE1id0F3SUNrSlVVTEZ4ZTBTYnFTVlFBYnczWGk3WmUwWkxtR0F6QUtiSHMwSkdVMVF0dkFhSWpDVzRCN1pPdkp5MnFGYTVhNzMwUlB0QmlhejBDZ25raVppNkY1ZkJaRFZNdmhvN0VoY3VTM3hKSjJoVjlJdXBnVHFhTHcwaGh6YWI4dnEyM3hPRy9yK0xEc0tqTGdZVnp4VW5VMGx0d0syd0RlelV5Sm1Fd3FYZ3AvUEw0cnZ4dGhhZUNTSSt6eHVBMTBKOFprV2RKTlNiMlNMa3ZheUtId0RSdTcxK1phanJHOTQxSjhhZ0FMRFEzR1UvYS9Jdk1rWUNQem1DYnRMTkVWbWFjTnRnczVpUDlmWVZORVYxUTZIZXo3eU5aU0wrSjJTYXJUY3BxaXlWMmlVa0cwSXZQRnZiejVGYkVuK0tFazN3TWp3TWVTZkNzQlhGQmRseTlDQVBrOXlkeWZmcEVDdUI1dFpmVkpqYUtXdWVPU2ZpbmxuNllLNGxhaFFvVUtSeGQvQWNSUEdUY1FDQVVRQUFBQUFFbEZUa1N1UW1DQycsXHJcbiAgICBDaGV2cm9uUmlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRndU5Ua3NNVFl1TlRoTU1UTXVNVGNzTVRKTU9DNDFPU3czTGpReFRERXdMRFpNTVRZc01USk1NVEFzTVRoTU9DNDFPU3d4Tmk0MU9Gb2lJQzgrUEM5emRtYysnLFxyXG4gICAgQ2hlY2s6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCM2FXUjBhRDBpTWpRaUlHaGxhV2RvZEQwaU1qUWlJSFpwWlhkQ2IzZzlJakFnTUNBeU5DQXlOQ0krUEhCaGRHZ2daRDBpVFRJeExEZE1PU3d4T1V3ekxqVXNNVE11TlV3MExqa3hMREV5TGpBNVREa3NNVFl1TVRkTU1Ua3VOVGtzTlM0MU9Vd3lNU3czV2lJZ0x6NDhMM04yWno0PScsXHJcbiAgICBWaWV3SW5kaWNhdG9yOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUENGRVQwTlVXVkJGSUhOMlp5QlFWVUpNU1VNZ0lpMHZMMWN6UXk4dlJGUkVJRk5XUnlBeExqRXZMMFZPSWlBaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtJajRLUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCcFpEMGlkbWxsZHkxcGJtUnBZMkYwYjNJaUlHaGxhV2RvZEQwaU16QWlJSGRwWkhSb1BTSXpNQ0lnZG1sbGQwSnZlRDBpTFRJdU5TQXRNU0F6TUNBek1DSStDZ2s4YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBpNXpkREI3YzNSeWIydGxMWGRwWkhSb09qSTdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTZNVEE3Wm1sc2JEcHViMjVsTzMwdWMzUXhlM04wY205clpTMTNhV1IwYURvMk8zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1R3dmMzUjViR1UrQ2drOFp6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTklERXlMalVnTUNCQklERXlMalVnTVRJdU5TQXdJREFnTUNBdE1USXVOU0F3SUVFZ01USXVOU0F4TWk0MUlEQWdNQ0F3SURFeUxqVWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkRElpSUdROUlrMGdNVE1nTUNCTUlERXdJRElnVENBeE5pQXlJRm9pUGp3dmNHRjBhRDRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F5SWlCa1BTSk5JRElnTUNCQklESWdNaUF3SURBZ01DQXRNaUF3SUVFZ01pQXlJREFnTUNBd0lESWdNQ0lnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNNU3d4TXl3eE5TNDFLU0krUEM5d1lYUm9QZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREVpSUdsa1BTSnBibVJwWTJGMGIzSWlJSFJ5WVc1elptOXliVDBpYldGMGNtbDRLREVzTUN3d0xERXNNVE1zTVRVdU5Ta2lQand2Y0dGMGFENEtDVHd2Wno0S1BDOXpkbWMrJ1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRGF0YUltYWdlIH07IiwiaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlLmpzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgSW1hZ2VMb2FkZXJcclxuICogQGRlc2NyaXB0aW9uIEltYWdlIGxvYWRlciB3aXRoIHByb2dyZXNzIGJhc2VkIG9uIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2Jsb2IvbWFzdGVyL3NyYy9sb2FkZXJzL0ltYWdlTG9hZGVyLmpzfVxyXG4gKi9cclxuY29uc3QgSW1hZ2VMb2FkZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlXHJcbiAgICAgKiBAZXhhbXBsZSBQQU5PTEVOUy5JbWFnZUxvYWRlci5sb2FkKCBJTUFHRV9VUkwgKVxyXG4gICAgICogQG1ldGhvZCBsb2FkXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgdXJsICAgICAgICAtIEFuIGltYWdlIHVybFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uTG9hZCAgICAgLSBPbiBsb2FkIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Qcm9ncmVzcyAtIEluIHByb2dyZXNzIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25FcnJvciAgICAtIE9uIGVycm9yIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJsLCBvbkxvYWQgPSAoKSA9PiB7fSwgb25Qcm9ncmVzcyA9ICgpID0+IHt9LCBvbkVycm9yID0gKCkgPT4ge30gKSB7XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBjYWNoZVxyXG4gICAgICAgIFRIUkVFLkNhY2hlLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgY2FjaGVkLCByZXF1ZXN0LCBhcnJheUJ1ZmZlclZpZXcsIGJsb2IsIHVybENyZWF0b3IsIGltYWdlLCByZWZlcmVuY2U7XHJcblxyXG4gICAgICAgIC8vIFJlZmVyZW5jZSBrZXlcclxuICAgICAgICBmb3IgKGxldCBpY29uTmFtZSBpbiBEYXRhSW1hZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChEYXRhSW1hZ2UuaGFzT3duUHJvcGVydHkoaWNvbk5hbWUpICYmIHVybCA9PT0gRGF0YUltYWdlW2ljb25OYW1lXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IGljb25OYW1lO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhY2hlZFxyXG4gICAgICAgIGNhY2hlZCA9IFRIUkVFLkNhY2hlLmdldChyZWZlcmVuY2UgPyByZWZlcmVuY2UgOiB1cmwpO1xyXG5cclxuICAgICAgICBpZiAoY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNhY2hlZC5jb21wbGV0ZSAmJiBjYWNoZWQuc3JjICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoIHsgbG9hZGVkOiAxLCB0b3RhbDogMSB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZCggY2FjaGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Mb2FkKCBjYWNoZWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IGEgbmV3IFhNTEh0dHBSZXF1ZXN0XHJcbiAgICAgICAgdXJsQ3JlYXRvciA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsICdpbWcnKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRvIGNhY2hlXHJcbiAgICAgICAgVEhSRUUuQ2FjaGUuYWRkKHJlZmVyZW5jZSA/IHJlZmVyZW5jZSA6IHVybCwgaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBvbkltYWdlTG9hZGVkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdXJsQ3JlYXRvci5yZXZva2VPYmplY3RVUkwoaW1hZ2Uuc3JjKTtcclxuICAgICAgICAgICAgb25Mb2FkKGltYWdlKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25JbWFnZUxvYWRlZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5jcm9zc09yaWdpbiA6ICcnO1xyXG5cclxuICAgICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYubnBtX2xpZmVjeWNsZV9ldmVudCAhPT0gJ3Rlc3QnKSB7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCAmJiB0aGlzLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIG9uRXJyb3IgKTtcclxuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICAoICFldmVudCApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbG9hZGVkLCB0b3RhbCwgbGVuZ3RoQ29tcHV0YWJsZSB9ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIGxlbmd0aENvbXB1dGFibGUgKSB7XHJcblx0XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCB7IGxvYWRlZCwgdG90YWwgfSApO1xyXG5cdFxyXG4gICAgICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlbmQnLCBldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAgKCAhZXZlbnQgKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFRhcmdldDogeyByZXNwb25zZSB9IH0gPSBldmVudDtcclxuXHJcbiAgICAgICAgICAgIGFycmF5QnVmZmVyVmlldyA9IG5ldyBVaW50OEFycmF5KCByZXNwb25zZSApO1xyXG4gICAgICAgICAgICBibG9iID0gbmV3IHdpbmRvdy5CbG9iKCBbIGFycmF5QnVmZmVyVmlldyBdICk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgb25JbWFnZUxvYWRlZCwgZmFsc2UgKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsQ3JlYXRvci5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcclxuXHRcclxuICAgICAgICB9ICk7XHJcblx0XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xyXG5cdFxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IEltYWdlTG9hZGVyIH07IiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyLmpzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgVGV4dHVyZUxvYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gVGV4dHVyZSBsb2FkZXIgYmFzZWQgb24ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvYmxvYi9tYXN0ZXIvc3JjL2xvYWRlcnMvVGV4dHVyZUxvYWRlci5qc31cclxuICovXHJcbmNvbnN0IFRleHR1cmVMb2FkZXIgPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGltYWdlIHRleHR1cmVcclxuICAgICAqIEBleGFtcGxlIFBBTk9MRU5TLlRleHR1cmVMb2FkZXIubG9hZCggSU1BR0VfVVJMIClcclxuICAgICAqIEBtZXRob2QgbG9hZFxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgIHVybCAgICAgICAgLSBBbiBpbWFnZSB1cmxcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkxvYWQgICAgIC0gT24gbG9hZCBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uUHJvZ3Jlc3MgLSBJbiBwcm9ncmVzcyBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IG9uRXJyb3IgICAgLSBPbiBlcnJvciBjYWxsYmFja1xyXG4gICAgICogQHJldHVybiB7VEhSRUUuVGV4dHVyZX0gICBcdCAtIEltYWdlIHRleHR1cmVcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCB1cmwsIG9uTG9hZCA9ICgpID0+IHt9LCBvblByb2dyZXNzLCBvbkVycm9yICkge1xyXG5cclxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7IFxyXG5cclxuICAgICAgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAvLyBKUEVHcyBjYW4ndCBoYXZlIGFuIGFscGhhIGNoYW5uZWwsIHNvIG1lbW9yeSBjYW4gYmUgc2F2ZWQgYnkgc3RvcmluZyB0aGVtIGFzIFJHQi5cclxuICAgICAgICAgICAgY29uc3QgaXNKUEVHID0gdXJsLnNlYXJjaCggL1xcLihqcGd8anBlZykkLyApID4gMCB8fCB1cmwuc2VhcmNoKCAvXmRhdGFcXDppbWFnZVxcL2pwZWcvICkgPT09IDA7XHJcblxyXG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IGlzSlBFRyA/IFRIUkVFLlJHQkZvcm1hdCA6IFRIUkVFLlJHQkFGb3JtYXQ7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgb25Mb2FkKCB0ZXh0dXJlICk7XHJcblxyXG4gICAgICAgIH0sIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IFRleHR1cmVMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXIuanMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBDdWJlVGV4dHVyZUxvYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gQ3ViZSBUZXh0dXJlIExvYWRlciBiYXNlZCBvbiB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9ibG9iL21hc3Rlci9zcmMvbG9hZGVycy9DdWJlVGV4dHVyZUxvYWRlci5qc31cclxuICovXHJcbmNvbnN0IEN1YmVUZXh0dXJlTG9hZGVyID0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCA2IGltYWdlcyBhcyBhIGN1YmUgdGV4dHVyZVxyXG4gICAgICogQGV4YW1wbGUgUEFOT0xFTlMuQ3ViZVRleHR1cmVMb2FkZXIubG9hZCggWyAncHgucG5nJywgJ254LnBuZycsICdweS5wbmcnLCAnbnkucG5nJywgJ3B6LnBuZycsICduei5wbmcnIF0gKVxyXG4gICAgICogQG1ldGhvZCBsb2FkXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gICB1cmxzICAgICAgICAtIGFycmF5IG9mIDYgdXJscyB0byBpbWFnZXMsIG9uZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBDdWJlVGV4dHVyZS4gVGhlIHVybHMgc2hvdWxkIGJlIHNwZWNpZmllZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiBwb3MteCwgbmVnLXgsIHBvcy15LCBuZWcteSwgcG9zLXosIG5lZy16XHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25Mb2FkICAgICAtIE9uIGxvYWQgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvblByb2dyZXNzIC0gSW4gcHJvZ3Jlc3MgY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBvbkVycm9yICAgIC0gT24gZXJyb3IgY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm4ge1RIUkVFLkN1YmVUZXh0dXJlfSAgIC0gQ3ViZSB0ZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggdXJscywgb25Mb2FkID0gKCkgPT4ge30sIG9uUHJvZ3Jlc3MgPSAoKSA9PiB7fSwgb25FcnJvciApIHtcclxuXHJcblx0ICAgdmFyIHRleHR1cmUsIGxvYWRlZCwgcHJvZ3Jlc3MsIGFsbCwgbG9hZGluZ3M7XHJcblxyXG5cdCAgIHRleHR1cmUgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoIFtdICk7XHJcblxyXG5cdCAgIGxvYWRlZCA9IDA7XHJcblx0ICAgcHJvZ3Jlc3MgPSB7fTtcclxuXHQgICBhbGwgPSB7fTtcclxuXHJcblx0ICAgdXJscy5tYXAoIGZ1bmN0aW9uICggdXJsLCBpbmRleCApIHtcclxuXHJcblx0XHQgICBJbWFnZUxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggaW1hZ2UgKSB7XHJcblxyXG5cdFx0XHQgICB0ZXh0dXJlLmltYWdlc1sgaW5kZXggXSA9IGltYWdlO1xyXG5cclxuXHRcdFx0ICAgbG9hZGVkKys7XHJcblxyXG5cdFx0XHQgICBpZiAoIGxvYWRlZCA9PT0gNiApIHtcclxuXHJcblx0XHRcdFx0ICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdCAgIG9uTG9hZCggdGV4dHVyZSApO1xyXG5cclxuXHRcdFx0ICAgfVxyXG5cclxuXHRcdCAgIH0sIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG5cdFx0XHQgICBwcm9ncmVzc1sgaW5kZXggXSA9IHsgbG9hZGVkOiBldmVudC5sb2FkZWQsIHRvdGFsOiBldmVudC50b3RhbCB9O1xyXG5cclxuXHRcdFx0ICAgYWxsLmxvYWRlZCA9IDA7XHJcblx0XHRcdCAgIGFsbC50b3RhbCA9IDA7XHJcblx0XHRcdCAgIGxvYWRpbmdzID0gMDtcclxuXHJcblx0XHRcdCAgIGZvciAoIHZhciBpIGluIHByb2dyZXNzICkge1xyXG5cclxuXHRcdFx0XHQgICBsb2FkaW5ncysrO1xyXG5cdFx0XHRcdCAgIGFsbC5sb2FkZWQgKz0gcHJvZ3Jlc3NbIGkgXS5sb2FkZWQ7XHJcblx0XHRcdFx0ICAgYWxsLnRvdGFsICs9IHByb2dyZXNzWyBpIF0udG90YWw7XHJcblxyXG5cdFx0XHQgICB9XHJcblxyXG5cdFx0XHQgICBpZiAoIGxvYWRpbmdzIDwgNiApIHtcclxuXHJcblx0XHRcdFx0ICAgYWxsLnRvdGFsID0gYWxsLnRvdGFsIC8gbG9hZGluZ3MgKiA2O1xyXG5cclxuXHRcdFx0ICAgfVxyXG5cclxuXHRcdFx0ICAgb25Qcm9ncmVzcyggYWxsICk7XHJcblxyXG5cdFx0ICAgfSwgb25FcnJvciApO1xyXG5cclxuXHQgICB9ICk7XHJcblxyXG5cdCAgIHJldHVybiB0ZXh0dXJlO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBDdWJlVGV4dHVyZUxvYWRlciB9OyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIFVzZXIgTWVkaWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29uc3RyYWludHM9eyB2aWRlbzogeyB3aWR0aDogeyBpZGVhbDogMTkyMCB9LCBoZWlnaHQ6IHsgaWRlYWw6IDEwODAgfSwgZmFjaW5nTW9kZTogeyBleGFjdDogJ2Vudmlyb25tZW50JyB9IH0sIGF1ZGlvOiBmYWxzZSB9XVxyXG4gKi9cclxuZnVuY3Rpb24gTWVkaWEgKCBjb25zdHJhaW50cyApIHtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0Q29uc3RyYWludHMgPSB7IHZpZGVvOiB7IHdpZHRoOiB7IGlkZWFsOiAxOTIwIH0sIGhlaWdodDogeyBpZGVhbDogMTA4MCB9LCBmYWNpbmdNb2RlOiB7IGV4YWN0OiAnZW52aXJvbm1lbnQnIH0gfSwgYXVkaW86IGZhbHNlIH07XHJcblxyXG4gICAgdGhpcy5jb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oIGRlZmF1bHRDb25zdHJhaW50cywgY29uc3RyYWludHMgKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLmRldmljZXMgPSBbXTtcclxuICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcclxuICAgIHRoaXMucmF0aW9TY2FsYXIgPSAxO1xyXG4gICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gMDtcclxuXHJcbn07XHJcblxyXG5NZWRpYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBzZXRDb250YWluZXI6IGZ1bmN0aW9uICggY29udGFpbmVyICkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNldFNjZW5lOiBmdW5jdGlvbiAoIHNjZW5lICkge1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVudW1lcmF0ZSBkZXZpY2VzXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIGVudW1lcmF0ZURldmljZXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZGV2aWNlcyA9IHRoaXMuZGV2aWNlcztcclxuICAgICAgICBjb25zdCByZXNvbHZlZFByb21pc2UgPSBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7IHJlc29sdmUoIGRldmljZXMgKTsgfSApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGV2aWNlcy5sZW5ndGggPiAwID8gcmVzb2x2ZWRQcm9taXNlIDogd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTd2l0Y2ggdG8gbmV4dCBhdmFpbGFibGUgdmlkZW8gZGV2aWNlXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzd2l0Y2hOZXh0VmlkZW9EZXZpY2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RvcCA9IHRoaXMuc3RvcC5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBzZXRWaWRlRGV2aWNlSW5kZXggPSB0aGlzLnNldFZpZGVEZXZpY2VJbmRleC5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudmlkZW9EZXZpY2VJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy5nZXREZXZpY2VzKCAndmlkZW8nIClcclxuICAgICAgICAgICAgLnRoZW4oIGRldmljZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICggaW5kZXggPj0gZGV2aWNlcy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCAwICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZURldmljZUluZGV4KCBpbmRleCApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXJ0KCBkZXZpY2VzWyBpbmRleCBdICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGV2aWNlc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSB0eXBlIGtleXdvcmQgdG8gbWF0Y2ggZGV2aWNlLmtpbmRcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldERldmljZXM6IGZ1bmN0aW9uICggdHlwZSA9ICd2aWRlbycgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRldmljZXMgPSB0aGlzLmRldmljZXM7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBfZGV2aWNlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMubWFwKCBkZXZpY2UgPT4geyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCAhZGV2aWNlcy5pbmNsdWRlcyggZGV2aWNlICkgKSB7IGRldmljZXMucHVzaCggZGV2aWNlICk7IH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZXZpY2U7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IF9kZXZpY2VzID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoIHR5cGUsICdpJyApO1xyXG4gICAgICAgICAgICByZXR1cm4gX2RldmljZXMuZmlsdGVyKCBkZXZpY2UgPT4gcmVnLnRlc3QoIGRldmljZS5raW5kICkgKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW51bWVyYXRlRGV2aWNlcygpXHJcbiAgICAgICAgICAgIC50aGVuKCB2YWxpZGF0ZSApXHJcbiAgICAgICAgICAgIC50aGVuKCBmaWx0ZXIgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHVzZXIgbWVkaWFcclxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1Db25zdHJhaW50c30gY29uc3RyYWludHNcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGdldFVzZXJNZWRpYTogZnVuY3Rpb24gKCBjb25zdHJhaW50cyApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0TWVkaWFTdHJlYW0gPSB0aGlzLnNldE1lZGlhU3RyZWFtLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBwbGF5VmlkZW8gPSB0aGlzLnBsYXlWaWRlby5iaW5kKCB0aGlzICk7XHJcbiAgICAgICAgY29uc3Qgb25DYXRjaEVycm9yID0gZXJyb3IgPT4geyBjb25zb2xlLndhcm4oIGBQQU5PTEVOUy5NZWRpYTogJHtlcnJvcn1gICk7IH07XHJcblxyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoIGNvbnN0cmFpbnRzIClcclxuICAgICAgICAgICAgLnRoZW4oIHNldE1lZGlhU3RyZWFtIClcclxuICAgICAgICAgICAgLnRoZW4oIHBsYXlWaWRlbyApXHJcbiAgICAgICAgICAgIC5jYXRjaCggb25DYXRjaEVycm9yICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB2aWRlbyBkZXZpY2UgaW5kZXhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFZpZGVEZXZpY2VJbmRleDogZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0RldmljZUluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0IHN0cmVhbWluZ1xyXG4gICAgICogQHBhcmFtIHtNZWRpYURldmljZUluZm99IFt0YXJnZXREZXZpY2VdXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24oIHRhcmdldERldmljZSApIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzO1xyXG4gICAgICAgIGNvbnN0IGdldFVzZXJNZWRpYSA9IHRoaXMuZ2V0VXNlck1lZGlhLmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCBvblZpZGVvRGV2aWNlcyA9IGRldmljZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCAhZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggJ25vIHZpZGVvIGRldmljZSBmb3VuZCcgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRldmljZSA9IHRhcmdldERldmljZSB8fCBkZXZpY2VzWyAwIF07XHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmRldmljZUlkID0gZGV2aWNlLmRldmljZUlkO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVzZXJNZWRpYSggY29uc3RyYWludHMgKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jcmVhdGVWaWRlb0VsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGV2aWNlcygpLnRoZW4oIG9uVmlkZW9EZXZpY2VzICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3Agc3RyZWFtaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuc3RyZWFtO1xyXG5cclxuICAgICAgICBpZiAoIHN0cmVhbSAmJiBzdHJlYW0uYWN0aXZlICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdHJhY2sgPSBzdHJlYW0uZ2V0VHJhY2tzKClbIDAgXTtcclxuXHJcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgbWVkaWEgc3RyZWFtXHJcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtfSBzdHJlYW0gXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRNZWRpYVN0cmVhbTogZnVuY3Rpb24gKCBzdHJlYW0gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5zY2VuZSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYmFja2dyb3VuZCA9IHRoaXMuY3JlYXRlVmlkZW9UZXh0dXJlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdmlkZW8gZWxlbWVudFxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGxheScgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlIHZpZGVvIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBNZWRpYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHBhdXNlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGF1c2UnIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdmlkZW8gdGV4dHVyZVxyXG4gICAgICogQG1lbWJlck9mIE1lZGlhXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5WaWRlb1RleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVZpZGVvVGV4dHVyZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcclxuICAgICAgICB0ZXh0dXJlLmNlbnRlci5zZXQoIDAuNSwgMC41ICk7XHJcblxyXG4gICAgICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoICdjYW5wbGF5JywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge0hUTUxWaWRlb0VsZW1lbnR9XHJcbiAgICAgKiBAZmlyZXMgTWVkaWEjY2FucGxheVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWaWRlb0VsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwYXRjaEV2ZW50ID0gdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQoIHRoaXMgKTtcclxuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmlkZW8gY2FuIHBsYXkgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYSNjYW5wbGF5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2FuUGxheSA9ICgpID0+IGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2NhbnBsYXknIH0gKTtcclxuICAgICAgICBcclxuICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdhdXRvcGxheScsICcnICk7XHJcbiAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCAnbXV0ZWQnLCAnJyApO1xyXG4gICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ3BsYXlzaW5saW5lJywgJycgKTtcclxuXHJcbiAgICAgICAgdmlkZW8uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB2aWRlby5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB2aWRlby5zdHlsZS5vYmplY3RQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIHZpZGVvLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XHJcbiAgICAgICAgdmlkZW8uc3R5bGUuZGlzcGxheSA9IHRoaXMuc2NlbmUgPyAnbm9uZScgOiAnJztcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2NhbnBsYXknLCBjYW5QbGF5ICk7XHJcblxyXG4gICAgICAgIHJldHVybiB2aWRlbztcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gd2luZG93IHJlc2l6ZSBldmVudFxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgTWVkaWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQudmlkZW9XaWR0aCAmJiB0aGlzLmVsZW1lbnQudmlkZW9IZWlnaHQgJiYgdGhpcy5zY2VuZSApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGg6IHdpZHRoLCBjbGllbnRIZWlnaHQ6IGhlaWdodCB9ID0gdGhpcy5jb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLnNjZW5lLmJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQgfSA9IHRoaXMuZWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhUmF0aW8gPSB2aWRlb0hlaWdodCAvIHZpZGVvV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB0aGlzLmNvbnRhaW5lciA/IHdpZHRoIC8gaGVpZ2h0IDogMS4wO1xyXG4gICAgICAgICAgICBjb25zdCByYXRpbyA9IGNhbWVyYVJhdGlvICogdmlld3BvcnRSYXRpbyAqIHRoaXMucmF0aW9TY2FsYXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdpZHRoID4gaGVpZ2h0ICkge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCByYXRpbywgMSApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5yZXBlYXQuc2V0KCAxLCAxIC8gcmF0aW8gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgTWVkaWEgfTsiLCJcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgUmV0aWNsZSAzRCBTcHJpdGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7VEhSRUUuQ29sb3J9IFtjb2xvcj0weGZmZmZmZl0gLSBDb2xvciBvZiB0aGUgcmV0aWNsZSBzcHJpdGVcclxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1NlbGVjdD10cnVlXSAtIEF1dG8gc2VsZWN0aW9uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZHdlbGxUaW1lPTE1MDBdIC0gRHVyYXRpb24gZm9yIGR3ZWxsaW5nIHNlcXVlbmNlIHRvIGNvbXBsZXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gUmV0aWNsZSAoIGNvbG9yID0gMHhmZmZmZmYsIGF1dG9TZWxlY3QgPSB0cnVlLCBkd2VsbFRpbWUgPSAxNTAwICkge1xyXG5cclxuICAgIHRoaXMuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgY29uc3QgeyBjYW52YXMsIGNvbnRleHQgfSA9IHRoaXMuY3JlYXRlQ2FudmFzKCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TcHJpdGVNYXRlcmlhbCggeyBjb2xvciwgbWFwOiB0aGlzLmNyZWF0ZUNhbnZhc1RleHR1cmUoIGNhbnZhcyApIH0gKTtcclxuXHJcbiAgICBUSFJFRS5TcHJpdGUuY2FsbCggdGhpcywgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5jYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvciBpbnN0YW5jZW9mIFRIUkVFLkNvbG9yID8gY29sb3IgOiBuZXcgVEhSRUUuQ29sb3IoIGNvbG9yICk7ICAgIFxyXG5cclxuICAgIHRoaXMuYXV0b1NlbGVjdCA9IGF1dG9TZWxlY3Q7XHJcbiAgICB0aGlzLmR3ZWxsVGltZSA9IGR3ZWxsVGltZTtcclxuICAgIHRoaXMucmlwcGxlRHVyYXRpb24gPSA1MDA7XHJcbiAgICB0aGlzLnBvc2l0aW9uLnogPSAtMTA7XHJcbiAgICB0aGlzLmNlbnRlci5zZXQoIDAuNSwgMC41ICk7XHJcbiAgICB0aGlzLnNjYWxlLnNldCggMC41LCAwLjUsIDEgKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gbnVsbDtcclxuICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUNhbnZhc0FyY0J5UHJvZ3Jlc3MoIDAgKTtcclxuXHJcbn07XHJcblxyXG5SZXRpY2xlLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLlNwcml0ZS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBSZXRpY2xlLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IG1hdGVyaWFsIGNvbG9yXHJcbiAgICAgKiBAcGFyYW0ge1RIUkVFLkNvbG9yfSBjb2xvciBcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q29sb3I6IGZ1bmN0aW9uICggY29sb3IgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuY29sb3IuY29weSggY29sb3IgaW5zdGFuY2VvZiBUSFJFRS5Db2xvciA/IGNvbG9yIDogbmV3IFRIUkVFLkNvbG9yKCBjb2xvciApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBjYW52YXMgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1RIUkVFLkNhbnZhc1RleHR1cmV9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUNhbnZhc1RleHR1cmU6IGZ1bmN0aW9uICggY2FudmFzICkge1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoIGNhbnZhcyApO1xyXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgY2FudmFzIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG9iamVjdFxyXG4gICAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBvYmplY3QuY2FudmFzXHJcbiAgICAgKiBAcmV0dXJucyB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBvYmplY3QuY29udGV4dFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVDYW52YXM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSAzMjtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSAzMjtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgIGNvbnN0IGRwciA9IHRoaXMuZHByO1xyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIGRwcjtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogZHByO1xyXG4gICAgICAgIGNvbnRleHQuc2NhbGUoIGRwciwgZHByICk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9ICdyZ2JhKDIwMCwyMDAsMjAwLDAuOSknO1xyXG5cclxuICAgICAgICByZXR1cm4geyBjYW52YXMsIGNvbnRleHQgfTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGNhbnZhcyBhcmMgYnkgcHJvZ3Jlc3NcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzcyBcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQ2FudmFzQXJjQnlQcm9ncmVzczogZnVuY3Rpb24gKCBwcm9ncmVzcyApIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCB7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1hdGVyaWFsIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGRwciA9IHRoaXMuZHByO1xyXG4gICAgICAgIGNvbnN0IGRlZ3JlZSA9IHByb2dyZXNzICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yLmdldFN0eWxlKCk7XHJcbiAgICAgICAgY29uc3QgeCA9IGNhbnZhc1dpZHRoICogMC41IC8gZHByO1xyXG4gICAgICAgIGNvbnN0IHkgPSBjYW52YXNIZWlnaHQgKiAwLjUgLyBkcHI7XHJcbiAgICAgICAgY29uc3QgbGluZVdpZHRoID0gMztcclxuICAgICAgICBcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIGlmICggcHJvZ3Jlc3MgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCBjYW52YXNXaWR0aCAvIDE2LCAwLCAyICogTWF0aC5QSSApO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyggeCwgeSwgY2FudmFzV2lkdGggLyA0IC0gbGluZVdpZHRoLCAtTWF0aC5QSSAvIDIsIC1NYXRoLlBJIC8gMiArIGRlZ3JlZSApO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgbWF0ZXJpYWwubWFwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmlwcGxlIGVmZmVjdFxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1yaXBwbGUtc3RhcnRcclxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtcmlwcGxlLWVuZFxyXG4gICAgICovXHJcbiAgICByaXBwbGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCB7IGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIG1hdGVyaWFsIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5yaXBwbGVEdXJhdGlvbjtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY29uc3QgZHByID0gdGhpcy5kcHI7XHJcbiAgICAgICAgY29uc3QgeCA9IGNhbnZhc1dpZHRoICogMC41IC8gZHByO1xyXG4gICAgICAgIGNvbnN0IHkgPSBjYW52YXNIZWlnaHQgKiAwLjUgLyBkcHI7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB1cGRhdGUgKTtcclxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyBkdXJhdGlvbjtcclxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IDEuMCAtIHByb2dyZXNzID4gMCA/IDEuMCAtIHByb2dyZXNzIDogMDtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gcHJvZ3Jlc3MgKiBjYW52YXNXaWR0aCAqIDAuNSAvIGRwcjtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKCB4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyICk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvci5yICogMjU1fSwgJHtjb2xvci5nICogMjU1fSwgJHtjb2xvci5iICogMjU1fSwgJHtvcGFjaXR5fSlgO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggcHJvZ3Jlc3MgPj0gMS4wICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGltZXJJZCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBSZXRpY2xlIHJpcHBsZSBlbmQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1lbmRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLXJpcHBsZS1lbmQnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldGljbGUgcmlwcGxlIHN0YXJ0IGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUmV0aWNsZSNyZXRpY2xlLXJpcHBsZS1zdGFydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1yaXBwbGUtc3RhcnQnIH0gKTtcclxuXHJcbiAgICAgICAgdXBkYXRlKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgcmV0aWNsZSB2aXNpYmxlXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSByZXRpY2xlIGludmlzaWJsZVxyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBkd2VsbGluZ1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKiBAbWVtYmVyT2YgUmV0aWNsZVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUmV0aWNsZSNyZXRpY2xlLXN0YXJ0XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmF1dG9TZWxlY3QgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0aWNsZSBzdGFydCBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS1zdGFydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncmV0aWNsZS1zdGFydCcgfSApO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuZCBkd2VsbGluZ1xyXG4gICAgICogQG1lbWJlck9mIFJldGljbGVcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFJldGljbGUjcmV0aWNsZS1lbmRcclxuICAgICAqL1xyXG4gICAgZW5kOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLnN0YXJ0VGltZXN0YW1wICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnRpbWVySWQgKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCAwICk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXN0YW1wID0gbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0aWNsZSBlbmQgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBSZXRpY2xlI3JldGljbGUtZW5kXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdyZXRpY2xlLWVuZCcgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgZHdlbGxpbmdcclxuICAgICAqIEBtZW1iZXJPZiBSZXRpY2xlXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBSZXRpY2xlI3JldGljbGUtdXBkYXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLnVwZGF0ZS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZWxhcHNlZCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVzdGFtcDtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGVsYXBzZWQgLyB0aGlzLmR3ZWxsVGltZTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXNBcmNCeVByb2dyZXNzKCBwcm9ncmVzcyApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRpY2xlIHVwZGF0ZSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFJldGljbGUjcmV0aWNsZS11cGRhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3JldGljbGUtdXBkYXRlJywgcHJvZ3Jlc3MgfSApO1xyXG5cclxuICAgICAgICBpZiAoIHByb2dyZXNzID49IDEuMCApIHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy50aW1lcklkICk7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jYWxsYmFjayApIHsgdGhpcy5jYWxsYmFjaygpOyB9XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmlwcGxlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBSZXRpY2xlIH07IiwiLyoqXG4gKiBUd2Vlbi5qcyAtIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3ZWVuanMvdHdlZW4uanMvZ3JhcGhzL2NvbnRyaWJ1dG9ycyBmb3IgdGhlIGZ1bGwgbGlzdCBvZiBjb250cmlidXRvcnMuXG4gKiBUaGFuayB5b3UgYWxsLCB5b3UncmUgYXdlc29tZSFcbiAqL1xuXG5cbnZhciBfR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuX3R3ZWVucyA9IHt9O1xuXHR0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSA9IHt9O1xufTtcblxuX0dyb3VwLnByb3RvdHlwZSA9IHtcblx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHdlZW5zKS5tYXAoZnVuY3Rpb24gKHR3ZWVuSWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl90d2VlbnNbdHdlZW5JZF07XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9LFxuXG5cdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5fdHdlZW5zID0ge307XG5cblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0dGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldID0gdHdlZW47XG5cdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGVbdHdlZW4uZ2V0SWQoKV0gPSB0d2VlbjtcblxuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cblx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuLmdldElkKCldO1xuXHRcdGRlbGV0ZSB0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZVt0d2Vlbi5nZXRJZCgpXTtcblxuXHR9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24gKHRpbWUsIHByZXNlcnZlKSB7XG5cblx0XHR2YXIgdHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnMpO1xuXG5cdFx0aWYgKHR3ZWVuSWRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRpbWUgPSB0aW1lICE9PSB1bmRlZmluZWQgPyB0aW1lIDogVFdFRU4ubm93KCk7XG5cblx0XHQvLyBUd2VlbnMgYXJlIHVwZGF0ZWQgaW4gXCJiYXRjaGVzXCIuIElmIHlvdSBhZGQgYSBuZXcgdHdlZW4gZHVyaW5nIGFuIHVwZGF0ZSwgdGhlbiB0aGVcblx0XHQvLyBuZXcgdHdlZW4gd2lsbCBiZSB1cGRhdGVkIGluIHRoZSBuZXh0IGJhdGNoLlxuXHRcdC8vIElmIHlvdSByZW1vdmUgYSB0d2VlbiBkdXJpbmcgYW4gdXBkYXRlLCBpdCBtYXkgb3IgbWF5IG5vdCBiZSB1cGRhdGVkLiBIb3dldmVyLFxuXHRcdC8vIGlmIHRoZSByZW1vdmVkIHR3ZWVuIHdhcyBhZGRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgYmF0Y2gsIHRoZW4gaXQgd2lsbCBub3QgYmUgdXBkYXRlZC5cblx0XHR3aGlsZSAodHdlZW5JZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fdHdlZW5zQWRkZWREdXJpbmdVcGRhdGUgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0d2Vlbklkcy5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdHZhciB0d2VlbiA9IHRoaXMuX3R3ZWVuc1t0d2Vlbklkc1tpXV07XG5cblx0XHRcdFx0aWYgKHR3ZWVuICYmIHR3ZWVuLnVwZGF0ZSh0aW1lKSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0d2Vlbi5faXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIXByZXNlcnZlKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5fdHdlZW5zW3R3ZWVuSWRzW2ldXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dHdlZW5JZHMgPSBPYmplY3Qua2V5cyh0aGlzLl90d2VlbnNBZGRlZER1cmluZ1VwZGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fVxufTtcblxudmFyIFRXRUVOID0gbmV3IF9Hcm91cCgpO1xuXG5UV0VFTi5Hcm91cCA9IF9Hcm91cDtcblRXRUVOLl9uZXh0SWQgPSAwO1xuVFdFRU4ubmV4dElkID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gVFdFRU4uX25leHRJZCsrO1xufTtcblxuXG4vLyBJbmNsdWRlIGEgcGVyZm9ybWFuY2Uubm93IHBvbHlmaWxsLlxuLy8gSW4gbm9kZS5qcywgdXNlIHByb2Nlc3MuaHJ0aW1lLlxuaWYgKHR5cGVvZiAoc2VsZikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocHJvY2VzcykgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG5cdFRXRUVOLm5vdyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKCk7XG5cblx0XHQvLyBDb252ZXJ0IFtzZWNvbmRzLCBuYW5vc2Vjb25kc10gdG8gbWlsbGlzZWNvbmRzLlxuXHRcdHJldHVybiB0aW1lWzBdICogMTAwMCArIHRpbWVbMV0gLyAxMDAwMDAwO1xuXHR9O1xufVxuLy8gSW4gYSBicm93c2VyLCB1c2Ugc2VsZi5wZXJmb3JtYW5jZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAodHlwZW9mIChzZWxmKSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHNlbGYucGVyZm9ybWFuY2UgIT09IHVuZGVmaW5lZCAmJlxuXHRcdCBzZWxmLnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG5cdC8vIFRoaXMgbXVzdCBiZSBib3VuZCwgYmVjYXVzZSBkaXJlY3RseSBhc3NpZ25pbmcgdGhpcyBmdW5jdGlvblxuXHQvLyBsZWFkcyB0byBhbiBpbnZvY2F0aW9uIGV4Y2VwdGlvbiBpbiBDaHJvbWUuXG5cdFRXRUVOLm5vdyA9IHNlbGYucGVyZm9ybWFuY2Uubm93LmJpbmQoc2VsZi5wZXJmb3JtYW5jZSk7XG59XG4vLyBVc2UgRGF0ZS5ub3cgaWYgaXQgaXMgYXZhaWxhYmxlLlxuZWxzZSBpZiAoRGF0ZS5ub3cgIT09IHVuZGVmaW5lZCkge1xuXHRUV0VFTi5ub3cgPSBEYXRlLm5vdztcbn1cbi8vIE90aGVyd2lzZSwgdXNlICduZXcgRGF0ZSgpLmdldFRpbWUoKScuXG5lbHNlIHtcblx0VFdFRU4ubm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fTtcbn1cblxuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uIChvYmplY3QsIGdyb3VwKSB7XG5cdHRoaXMuX29iamVjdCA9IG9iamVjdDtcblx0dGhpcy5fdmFsdWVzU3RhcnQgPSB7fTtcblx0dGhpcy5fdmFsdWVzRW5kID0ge307XG5cdHRoaXMuX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHRoaXMuX2R1cmF0aW9uID0gMTAwMDtcblx0dGhpcy5fcmVwZWF0ID0gMDtcblx0dGhpcy5fcmVwZWF0RGVsYXlUaW1lID0gdW5kZWZpbmVkO1xuXHR0aGlzLl95b3lvID0gZmFsc2U7XG5cdHRoaXMuX2lzUGxheWluZyA9IGZhbHNlO1xuXHR0aGlzLl9yZXZlcnNlZCA9IGZhbHNlO1xuXHR0aGlzLl9kZWxheVRpbWUgPSAwO1xuXHR0aGlzLl9zdGFydFRpbWUgPSBudWxsO1xuXHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLl9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cdHRoaXMuX2dyb3VwID0gZ3JvdXAgfHwgVFdFRU47XG5cdHRoaXMuX2lkID0gVFdFRU4ubmV4dElkKCk7XG5cbn07XG5cblRXRUVOLlR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Z2V0SWQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH0sXG5cblx0aXNQbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lzUGxheWluZztcblx0fSxcblxuXHR0bzogZnVuY3Rpb24gKHByb3BlcnRpZXMsIGR1cmF0aW9uKSB7XG5cblx0XHR0aGlzLl92YWx1ZXNFbmQgPSBPYmplY3QuY3JlYXRlKHByb3BlcnRpZXMpO1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkdXJhdGlvbjogZnVuY3Rpb24gZHVyYXRpb24oZCkge1xuXHRcdHRoaXMuX2R1cmF0aW9uID0gZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzdGFydDogZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdHRoaXMuX2dyb3VwLmFkZCh0aGlzKTtcblxuXHRcdHRoaXMuX2lzUGxheWluZyA9IHRydWU7XG5cblx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdHlwZW9mIHRpbWUgPT09ICdzdHJpbmcnID8gVFdFRU4ubm93KCkgKyBwYXJzZUZsb2F0KHRpbWUpIDogdGltZSA6IFRXRUVOLm5vdygpO1xuXHRcdHRoaXMuX3N0YXJ0VGltZSArPSB0aGlzLl9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNFbmQpIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IFt0aGlzLl9vYmplY3RbcHJvcGVydHldXS5jb25jYXQodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSB0aGUgc3RhcnRpbmcgdmFsdWUuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSBpbnN0YW5jZW9mIEFycmF5KSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c3RvcDogZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCF0aGlzLl9pc1BsYXlpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzKTtcblx0XHR0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5fb25TdG9wQ2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BDaGFpbmVkVHdlZW5zKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMudXBkYXRlKEluZmluaXR5KTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN0b3BDaGFpbmVkVHdlZW5zOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IHRoaXMuX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHR0aGlzLl9jaGFpbmVkVHdlZW5zW2ldLnN0b3AoKTtcblx0XHR9XG5cblx0fSxcblxuXHRncm91cDogZnVuY3Rpb24gKGdyb3VwKSB7XG5cdFx0dGhpcy5fZ3JvdXAgPSBncm91cDtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZWxheTogZnVuY3Rpb24gKGFtb3VudCkge1xuXG5cdFx0dGhpcy5fZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0OiBmdW5jdGlvbiAodGltZXMpIHtcblxuXHRcdHRoaXMuX3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cmVwZWF0RGVsYXk6IGZ1bmN0aW9uIChhbW91bnQpIHtcblxuXHRcdHRoaXMuX3JlcGVhdERlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHlveW86IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHR0aGlzLl95b3lvID0geW95bztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGVhc2luZzogZnVuY3Rpb24gKGVhc2luZ0Z1bmN0aW9uKSB7XG5cblx0XHR0aGlzLl9lYXNpbmdGdW5jdGlvbiA9IGVhc2luZ0Z1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0aW50ZXJwb2xhdGlvbjogZnVuY3Rpb24gKGludGVycG9sYXRpb25GdW5jdGlvbikge1xuXG5cdFx0dGhpcy5faW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbkZ1bmN0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2hhaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvblN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25VcGRhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0dGhpcy5fb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25SZXBlYXQ6IGZ1bmN0aW9uIG9uUmVwZWF0KGNhbGxiYWNrKSB7XG5cblx0XHR0aGlzLl9vblJlcGVhdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRvbkNvbXBsZXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0b25TdG9wOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuXHRcdHRoaXMuX29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCB0aGlzLl9zdGFydFRpbWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9PT0gZmFsc2UpIHtcblxuXHRcdFx0aWYgKHRoaXMuX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLl9vblN0YXJ0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fb25TdGFydENhbGxiYWNrRmlyZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGVsYXBzZWQgPSAodGltZSAtIHRoaXMuX3N0YXJ0VGltZSkgLyB0aGlzLl9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gKHRoaXMuX2R1cmF0aW9uID09PSAwIHx8IGVsYXBzZWQgPiAxKSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFsdWUgPSB0aGlzLl9lYXNpbmdGdW5jdGlvbihlbGFwc2VkKTtcblxuXHRcdGZvciAocHJvcGVydHkgaW4gdGhpcy5fdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIERvbid0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG5cdFx0XHRpZiAodGhpcy5fdmFsdWVzU3RhcnRbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdGFydCA9IHRoaXMuX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSB8fCAwO1xuXHRcdFx0dmFyIGVuZCA9IHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdHRoaXMuX29iamVjdFtwcm9wZXJ0eV0gPSB0aGlzLl9pbnRlcnBvbGF0aW9uRnVuY3Rpb24oZW5kLCB2YWx1ZSk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAodHlwZW9mIChlbmQpID09PSAnc3RyaW5nJykge1xuXG5cdFx0XHRcdFx0aWYgKGVuZC5jaGFyQXQoMCkgPT09ICcrJyB8fCBlbmQuY2hhckF0KDApID09PSAnLScpIHtcblx0XHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBwYXJzZUZsb2F0KGVuZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0dGhpcy5fb2JqZWN0W3Byb3BlcnR5XSA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLl9vblVwZGF0ZUNhbGxiYWNrKHRoaXMuX29iamVjdCwgZWxhcHNlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVsYXBzZWQgPT09IDEpIHtcblxuXHRcdFx0aWYgKHRoaXMuX3JlcGVhdCA+IDApIHtcblxuXHRcdFx0XHRpZiAoaXNGaW5pdGUodGhpcy5fcmVwZWF0KSkge1xuXHRcdFx0XHRcdHRoaXMuX3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yIChwcm9wZXJ0eSBpbiB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdCkge1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAodGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gKyBwYXJzZUZsb2F0KHRoaXMuX3ZhbHVlc0VuZFtwcm9wZXJ0eV0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gdGhpcy5fdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNFbmRbcHJvcGVydHldO1xuXHRcdFx0XHRcdFx0dGhpcy5fdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPSB0aGlzLl92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl95b3lvKSB7XG5cdFx0XHRcdFx0dGhpcy5fcmV2ZXJzZWQgPSAhdGhpcy5fcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fcmVwZWF0RGVsYXlUaW1lICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSB0aW1lICsgdGhpcy5fcmVwZWF0RGVsYXlUaW1lO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHRpbWUgKyB0aGlzLl9kZWxheVRpbWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fb25SZXBlYXRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuX29uUmVwZWF0Q2FsbGJhY2sodGhpcy5fb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICh0aGlzLl9vbkNvbXBsZXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHRoaXMuX29uQ29tcGxldGVDYWxsYmFjayh0aGlzLl9vYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSB0aGlzLl9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0XHRcdC8vIE1ha2UgdGhlIGNoYWluZWQgdHdlZW5zIHN0YXJ0IGV4YWN0bHkgYXQgdGhlIHRpbWUgdGhleSBzaG91bGQsXG5cdFx0XHRcdFx0Ly8gZXZlbiBpZiB0aGUgYHVwZGF0ZSgpYCBtZXRob2Qgd2FzIGNhbGxlZCB3YXkgcGFzdCB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuXG5cdFx0XHRcdFx0dGhpcy5fY2hhaW5lZFR3ZWVuc1tpXS5zdGFydCh0aGlzLl9zdGFydFRpbWUgKyB0aGlzLl9kdXJhdGlvbik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXG5cdH1cbn07XG5cblxuVFdFRU4uRWFzaW5nID0ge1xuXG5cdExpbmVhcjoge1xuXG5cdFx0Tm9uZTogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqICgyIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoLS1rICogKGsgLSAyKSAtIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKChrIC09IDIpICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YXJ0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKC0tayAqIGsgKiBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAtIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayAqIGsgKiBrICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayAqIGsgKiBrICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRTaW51c29pZGFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyhrICogTWF0aC5QSSAvIDIpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIE1hdGguc2luKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KDEwMjQsIGsgLSAxKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdygyLCAtIDEwICogayk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKC0gTWF0aC5wb3coMiwgLSAxMCAqIChrIC0gMSkpICsgMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBrICogayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSAoLS1rICogaykpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtIDAuNSAqIChNYXRoLnNxcnQoMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC1NYXRoLnBvdygyLCAxMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coMiwgLTEwICogaykgKiBNYXRoLnNpbigoayAtIDAuMSkgKiA1ICogTWF0aC5QSSkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGsgKj0gMjtcblxuXHRcdFx0aWYgKGsgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtMC41ICogTWF0aC5wb3coMiwgMTAgKiAoayAtIDEpKSAqIE1hdGguc2luKChrIC0gMS4xKSAqIDUgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIC0xMCAqIChrIC0gMSkpICogTWF0aC5zaW4oKGsgLSAxLjEpICogNSAqIE1hdGguUEkpICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1O1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi4yNSAvIDIuNzUpKSAqIGsgKyAwLjkzNzU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuNjI1IC8gMi43NSkpICogayArIDAuOTg0Mzc1O1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8IDAuNSkge1xuXHRcdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmIChrIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xuXHRcdH1cblxuXHRcdGlmIChrID4gMSkge1xuXHRcdFx0cmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIGIgPSAwO1xuXHRcdHZhciBuID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBwdyA9IE1hdGgucG93O1xuXHRcdHZhciBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG5cdFx0XHRiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAodlswXSA9PT0gdlttXSkge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0aSA9IE1hdGguZmxvb3IoZiA9IG0gKiAoMSArIGspKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0cmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID4gMSkge1xuXHRcdFx0XHRyZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uIChwMCwgcDEsIHQpIHtcblxuXHRcdFx0cmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uIChuLCBpKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXG5cdFx0XHRyZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWzFdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0XHR2YXIgcyA9IDE7XG5cblx0XHRcdFx0aWYgKGFbbl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gYVtuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0cyAqPSBpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YVtuXSA9IHM7XG5cdFx0XHRcdHJldHVybiBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuXG5cdFx0XHR2YXIgdjAgPSAocDIgLSBwMCkgKiAwLjU7XG5cdFx0XHR2YXIgdjEgPSAocDMgLSBwMSkgKiAwLjU7XG5cdFx0XHR2YXIgdDIgPSB0ICogdDtcblx0XHRcdHZhciB0MyA9IHQgKiB0MjtcblxuXHRcdFx0cmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuKGZ1bmN0aW9uIChyb290KSB7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gVFdFRU47XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblxuXHRcdC8vIE5vZGUuanNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFRXRUVOO1xuXG5cdH0gZWxzZSBpZiAocm9vdCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHQvLyBHbG9iYWwgdmFyaWFibGVcblx0XHRyb290LlRXRUVOID0gVFdFRU47XG5cblx0fVxuXG59KSh0aGlzKTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcclxuaW1wb3J0IHsgTU9ERVMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcclxuaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEluZm9ybWF0aW9uIHNwb3QgYXR0YWNoZWQgdG8gcGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2NhbGU9MzAwXSAtIERlZmF1bHQgc2NhbGVcclxuICogQHBhcmFtIHtzdHJpbmd9IFtpbWFnZVNyYz1QQU5PTEVOUy5EYXRhSW1hZ2UuSW5mb10gLSBJbWFnZSBvdmVybGF5IGluZm9cclxuICogQHBhcmFtIHtib29sZWFufSBbYW5pbWF0ZWQ9dHJ1ZV0gLSBFbmFibGUgZGVmYXVsdCBob3ZlciBhbmltYXRpb25cclxuICovXHJcbmZ1bmN0aW9uIEluZm9zcG90ICggc2NhbGUgPSAzMDAsIGltYWdlU3JjLCBhbmltYXRlZCApIHtcclxuXHRcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gNTAwLCBzY2FsZUZhY3RvciA9IDEuMztcclxuXHJcbiAgICBpbWFnZVNyYyA9IGltYWdlU3JjIHx8IERhdGFJbWFnZS5JbmZvO1xyXG5cclxuICAgIFRIUkVFLlNwcml0ZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ2luZm9zcG90JztcclxuXHJcbiAgICB0aGlzLmFuaW1hdGVkID0gYW5pbWF0ZWQgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGVkIDogdHJ1ZTtcclxuICAgIHRoaXMuaXNIb3ZlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUT0RPOiBUaHJlZS5qcyBidWcgaG90Zml4IGZvciBzcHJpdGUgcmF5Y2FzdGluZyByMTA0XHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNDYyNFxyXG4gICAgICovXHJcbiAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy50b1Bhbm9yYW1hID0gbnVsbDtcclxuICAgIHRoaXMuY3Vyc29yU3R5bGUgPSBudWxsO1xyXG5cclxuICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcclxuXHJcbiAgICB0aGlzLnNjYWxlLnNldCggc2NhbGUsIHNjYWxlLCAxICk7XHJcbiAgICB0aGlzLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLm9yaWdpbmFsUmF5Y2FzdCA9IHRoaXMucmF5Y2FzdDtcclxuXHJcbiAgICAvLyBFdmVudCBIYW5kbGVyXHJcbiAgICB0aGlzLkhBTkRMRVJfRk9DVVMgPSBudWxsO1x0XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcclxuICAgIHRoaXMubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgIHRoaXMubWF0ZXJpYWwub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgdGhpcy5zY2FsZVVwQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0aGlzLnNjYWxlRG93bkFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBwb3N0TG9hZCA9IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5tYXRlcmlhbCApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gdGV4dHVyZS5pbWFnZS53aWR0aCAvIHRleHR1cmUuaW1hZ2UuaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmVTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgICAgIHRleHR1cmUuaW1hZ2Uud2lkdGggPSB0ZXh0dXJlLmltYWdlLm5hdHVyYWxXaWR0aCB8fCA2NDtcclxuICAgICAgICB0ZXh0dXJlLmltYWdlLmhlaWdodCA9IHRleHR1cmUuaW1hZ2UubmF0dXJhbEhlaWdodCB8fCA2NDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQoIHJhdGlvICogc2NhbGUsIHNjYWxlLCAxICk7XHJcblxyXG4gICAgICAgIHRleHR1cmVTY2FsZS5jb3B5KCB0aGlzLnNjYWxlICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGVVcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5zY2FsZSApXHJcbiAgICAgICAgICAgIC50byggeyB4OiB0ZXh0dXJlU2NhbGUueCAqIHNjYWxlRmFjdG9yLCB5OiB0ZXh0dXJlU2NhbGUueSAqIHNjYWxlRmFjdG9yIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0ICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGVEb3duQW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLnNjYWxlIClcclxuICAgICAgICAgICAgLnRvKCB7IHg6IHRleHR1cmVTY2FsZS54LCB5OiB0ZXh0dXJlU2NhbGUueSB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5FbGFzdGljLk91dCApO1xyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLm1hcCA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgfS5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgLy8gQWRkIHNob3cgYW5kIGhpZGUgYW5pbWF0aW9uc1xyXG4gICAgdGhpcy5zaG93QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1hdGVyaWFsIClcclxuICAgICAgICAudG8oIHsgb3BhY2l0eTogMSB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgLm9uU3RhcnQoIHRoaXMuZW5hYmxlUmF5Y2FzdC5iaW5kKCB0aGlzLCB0cnVlICkgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xyXG5cclxuICAgIHRoaXMuaGlkZUFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXHJcbiAgICAgICAgLnRvKCB7IG9wYWNpdHk6IDAgfSwgZHVyYXRpb24gKVxyXG4gICAgICAgIC5vblN0YXJ0KCB0aGlzLmVuYWJsZVJheWNhc3QuYmluZCggdGhpcywgZmFsc2UgKSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICk7XHJcblxyXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLm9uQ2xpY2sgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVyJywgdGhpcy5vbkhvdmVyICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdob3ZlcmVudGVyJywgdGhpcy5vbkhvdmVyU3RhcnQgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2hvdmVybGVhdmUnLCB0aGlzLm9uSG92ZXJFbmQgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWR1YWwtZXllLWVmZmVjdCcsIHRoaXMub25EdWFsRXllRWZmZWN0ICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLnNldENvbnRhaW5lci5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2Rpc21pc3MnLCB0aGlzLm9uRGlzbWlzcyApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAncGFub2xlbnMtaW5mb3Nwb3QtZm9jdXMnLCB0aGlzLnNldEZvY3VzTWV0aG9kICk7XHJcblxyXG4gICAgVGV4dHVyZUxvYWRlci5sb2FkKCBpbWFnZVNyYywgcG9zdExvYWQgKTtcdFxyXG5cclxufTtcclxuXHJcbkluZm9zcG90LnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLlNwcml0ZS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBJbmZvc3BvdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBpbmZvc3BvdCBjb250YWluZXJcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8b2JqZWN0fSBkYXRhIC0gRGF0YSB3aXRoIGNvbnRhaW5lciBpbmZvcm1hdGlvblxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoIGRhdGEgKSB7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXI7XHJcblx0XHJcbiAgICAgICAgaWYgKCBkYXRhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKSB7XHJcblx0XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGE7XHJcblx0XHJcbiAgICAgICAgfSBlbHNlIGlmICggZGF0YSAmJiBkYXRhLmNvbnRhaW5lciApIHtcclxuXHRcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZGF0YS5jb250YWluZXI7XHJcblx0XHJcbiAgICAgICAgfVxyXG5cdFxyXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50IGlmIGV4aXN0c1xyXG4gICAgICAgIGlmICggY29udGFpbmVyICYmIHRoaXMuZWxlbWVudCApIHtcclxuXHRcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKCB0aGlzLmVsZW1lbnQgKTtcclxuXHRcclxuICAgICAgICB9XHJcblx0XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbnRhaW5lclxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBjb250YWluZXIgb2YgdGhpcyBpbmZvc3BvdFxyXG4gICAgICovXHJcbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGEgY2xpY2sgZXZlbnRcclxuICAgICAqIFRyYW5zbGF0ZSBhbmQgbG9jayB0aGUgaG92ZXJpbmcgZWxlbWVudCBpZiBhbnlcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBFdmVudCBjb250YWluaW5nIG1vdXNlRXZlbnQgd2l0aCBjbGllbnRYIGFuZCBjbGllbnRZXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCAmJiB0aGlzLmdldENvbnRhaW5lcigpICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyU3RhcnQoIGV2ZW50ICk7XHJcblxyXG4gICAgICAgICAgICAvLyBMb2NrIGVsZW1lbnRcclxuICAgICAgICAgICAgdGhpcy5sb2NrSG92ZXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzbWlzcyBjdXJyZW50IGVsZW1lbnQgaWYgYW55XHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRGlzbWlzcyBldmVudFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25EaXNtaXNzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51bmxvY2tIb3ZlckVsZW1lbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkhvdmVyRW5kKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBhIG1vdXNlIGhvdmVyIGV2ZW50XHJcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGhvdmVyaW5nIGVsZW1lbnQgaWYgYW55XHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgY29udGFpbmluZyBtb3VzZUV2ZW50IHdpdGggY2xpZW50WCBhbmQgY2xpZW50WVxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Ib3ZlcjogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIG9uIGEgbW91c2UgaG92ZXIgc3RhcnRcclxuICAgICAqIFNldHMgY3Vyc29yIHN0eWxlIHRvICdwb2ludGVyJywgZGlzcGxheSB0aGUgZWxlbWVudCBhbmQgc2NhbGUgdXAgdGhlIGluZm9zcG90XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uSG92ZXJTdGFydDogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5nZXRDb250YWluZXIoKSApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnNvclN0eWxlID0gdGhpcy5jdXJzb3JTdHlsZSB8fCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuTk9STUFMID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnICk7XHJcbiAgICAgICAgY29uc3QgeyBzY2FsZURvd25BbmltYXRpb24sIHNjYWxlVXBBbmltYXRpb24sIGVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuaXNIb3ZlcmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gY3Vyc29yU3R5bGU7XHJcblx0XHRcclxuICAgICAgICBpZiAoIHRoaXMuYW5pbWF0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICBzY2FsZVVwQW5pbWF0aW9uLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHRcdFxyXG4gICAgICAgIGlmICggZWxlbWVudCAmJiBldmVudC5tb3VzZUV2ZW50LmNsaWVudFggPj0gMCAmJiBldmVudC5tb3VzZUV2ZW50LmNsaWVudFkgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQsIHN0eWxlIH0gPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGVsZW1lbnQgd2lkdGggZm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5fd2lkdGggPSBsZWZ0LmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5faGVpZ2h0ID0gbGVmdC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBsZWZ0ICkgeyBsZWZ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cclxuICAgICAgICAgICAgICAgIGlmICggcmlnaHQgKSB7IHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBlbGVtZW50IHdpZHRoIGZvciByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX3dpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuX2hlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgd2lsbCBiZSBjYWxsZWQgb24gYSBtb3VzZSBob3ZlciBlbmRcclxuICAgICAqIFNldHMgY3Vyc29yIHN0eWxlIHRvICdkZWZhdWx0JywgaGlkZSB0aGUgZWxlbWVudCBhbmQgc2NhbGUgZG93biB0aGUgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uSG92ZXJFbmQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCAhdGhpcy5nZXRDb250YWluZXIoKSApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgc2NhbGVEb3duQW5pbWF0aW9uLCBzY2FsZVVwQW5pbWF0aW9uLCBlbGVtZW50IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmlzSG92ZXJpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5hbmltYXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlVXBBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICBzY2FsZURvd25BbmltYXRpb24uc3RhcnQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgJiYgIXRoaXMuZWxlbWVudC5sb2NrZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0LCBzdHlsZSB9ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlmICggbGVmdCApIHsgbGVmdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XHJcbiAgICAgICAgICAgIGlmICggcmlnaHQgKSB7IHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudW5sb2NrSG92ZXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gZHVhbCBleWUgZWZmZWN0IGhhbmRsZXJcclxuICAgICAqIENyZWF0ZXMgZHVwbGljYXRlIGxlZnQgYW5kIHJpZ2h0IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBwYW5vbGVucy1kdWFsLWV5ZS1lZmZlY3QgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uRHVhbEV5ZUVmZmVjdDogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdFxyXG4gICAgICAgIGlmICggIXRoaXMuZ2V0Q29udGFpbmVyKCkgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCwgaGFsZldpZHRoLCBoYWxmSGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLm1vZGUgPSBldmVudC5tb2RlO1xyXG5cclxuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG5cclxuICAgICAgICBoYWxmV2lkdGggPSB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDI7XHJcbiAgICAgICAgaGFsZkhlaWdodCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIGlmICggIWVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCAhZWxlbWVudC5sZWZ0ICYmICFlbGVtZW50LnJpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5sZWZ0ID0gZWxlbWVudC5jbG9uZU5vZGUoIHRydWUgKTtcclxuICAgICAgICAgICAgZWxlbWVudC5yaWdodCA9IGVsZW1lbnQuY2xvbmVOb2RlKCB0cnVlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICBlbGVtZW50LnJpZ2h0LnN0eWxlLmRpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQubGVmdC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICBlbGVtZW50LmxlZnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZWxlbWVudC5yaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBlbGVtZW50cyB0cmFuc2xhdGlvblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlRWxlbWVudCggaGFsZldpZHRoLCBoYWxmSGVpZ2h0ICk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50LmxlZnQgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggZWxlbWVudC5yaWdodCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2xhdGUgdGhlIGhvdmVyaW5nIGVsZW1lbnQgYnkgY3NzIHRyYW5zZm9ybVxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IC0gWCBwb3NpdGlvbiBvbiB0aGUgd2luZG93IHNjcmVlblxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB5IC0gWSBwb3NpdGlvbiBvbiB0aGUgd2luZG93IHNjcmVlblxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdHJhbnNsYXRlRWxlbWVudDogZnVuY3Rpb24gKCB4LCB5ICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQuX3dpZHRoIHx8ICF0aGlzLmVsZW1lbnQuX2hlaWdodCB8fCAhdGhpcy5nZXRDb250YWluZXIoKSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVmdCwgdG9wLCBlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBkZWx0YSwgY29udGFpbmVyO1xyXG5cclxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcclxuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG4gICAgICAgIHdpZHRoID0gZWxlbWVudC5fd2lkdGggLyAyO1xyXG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuX2hlaWdodCAvIDI7XHJcbiAgICAgICAgZGVsdGEgPSBlbGVtZW50LnZlcnRpY2FsRGVsdGEgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQudmVydGljYWxEZWx0YSA6IDQwO1xyXG5cclxuICAgICAgICBsZWZ0ID0geCAtIHdpZHRoO1xyXG4gICAgICAgIHRvcCA9IHkgLSBoZWlnaHQgLSBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKCAoIHRoaXMubW9kZSA9PT0gTU9ERVMuQ0FSREJPQVJEIHx8IHRoaXMubW9kZSA9PT0gTU9ERVMuU1RFUkVPICkgXHJcblx0XHRcdFx0JiYgZWxlbWVudC5sZWZ0ICYmIGVsZW1lbnQucmlnaHRcclxuXHRcdFx0XHQmJiAhKCB4ID09PSBjb250YWluZXIuY2xpZW50V2lkdGggLyAyICYmIHkgPT09IGNvbnRhaW5lci5jbGllbnRIZWlnaHQgLyAyICkgKSB7XHJcblxyXG4gICAgICAgICAgICBsZWZ0ID0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gNCAtIHdpZHRoICsgKCB4IC0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiApO1xyXG4gICAgICAgICAgICB0b3AgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0IC8gMiAtIGhlaWdodCAtIGRlbHRhICsgKCB5IC0gY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDIgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudC5sZWZ0LCAndHJhbnNsYXRlKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4KScgKTtcclxuXHJcbiAgICAgICAgICAgIGxlZnQgKz0gY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudFN0eWxlKCAndHJhbnNmb3JtJywgZWxlbWVudC5yaWdodCwgJ3RyYW5zbGF0ZSgnICsgbGVmdCArICdweCwgJyArIHRvcCArICdweCknICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZSggJ3RyYW5zZm9ybScsIGVsZW1lbnQsICd0cmFuc2xhdGUoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgpJyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB2ZW5kb3Igc3BlY2lmaWMgY3NzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIENTUyBzdHlsZSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbW9kaWZpZWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFN0eWxlIHZhbHVlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRFbGVtZW50U3R5bGU6IGZ1bmN0aW9uICggdHlwZSwgZWxlbWVudCwgdmFsdWUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudC5zdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAndHJhbnNmb3JtJyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHN0eWxlLm1zVHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID0gdmFsdWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGhvdmVyaW5nIHRleHQgY29udGVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGJlIGRpc3BsYXllZFxyXG4gICAgICogQG1lbWJlck9mIEluZm9zcG90XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0VGV4dDogZnVuY3Rpb24gKCB0ZXh0ICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGN1cnNvciBjc3Mgc3R5bGUgb24gaG92ZXJcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnNvckhvdmVyU3R5bGU6IGZ1bmN0aW9uICggc3R5bGUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGUgPSBzdHlsZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGhvdmVyaW5nIHRleHQgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IHRvIGJlIGRpc3BsYXllZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT00MF0gLSBWZXJ0aWNhbCBkZWx0YSB0byB0aGUgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZEhvdmVyVGV4dDogZnVuY3Rpb24gKCB0ZXh0LCBkZWx0YSA9IDQwICkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gJzUwJSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnNTAlJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRleHRTaGFkb3cgPSAnMCAwIDNweCAjMDAwMDAwJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1pbmZvc3BvdCcgKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZlcnRpY2FsRGVsdGEgPSBkZWx0YTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFRleHQoIHRleHQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGhvdmVyaW5nIGVsZW1lbnQgYnkgY2xvbmluZyBhbiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxET01FbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYmUgY2xvbmVkIGFuZCBkaXNwbGF5ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGVsdGE9NDBdIC0gVmVydGljYWwgZGVsdGEgdG8gdGhlIGluZm9zcG90XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICggZWwsIGRlbHRhID0gNDAgKSB7XHJcblxyXG4gICAgICAgIGlmICggIXRoaXMuZWxlbWVudCApIHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbC5jbG9uZU5vZGUoIHRydWUgKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWluZm9zcG90JyApO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudmVydGljYWxEZWx0YSA9IGRlbHRhO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBob3ZlcmluZyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQubGVmdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50LmxlZnQgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5sZWZ0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5lbGVtZW50LnJpZ2h0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmVsZW1lbnQucmlnaHQgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yaWdodCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9jayBob3ZlcmluZyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2NrSG92ZXJFbGVtZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5lbGVtZW50ICkgeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5sb2NrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVubG9jayBob3ZlcmluZyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1bmxvY2tIb3ZlckVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmVsZW1lbnQgKSB7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmxvY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSByYXljYXN0aW5nXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmFibGVkPXRydWVdXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBlbmFibGVSYXljYXN0OiBmdW5jdGlvbiAoIGVuYWJsZWQgPSB0cnVlICkge1xyXG5cclxuICAgICAgICBpZiAoIGVuYWJsZWQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJheWNhc3QgPSB0aGlzLm9yaWdpbmFsUmF5Y2FzdDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmF5Y2FzdCA9ICgpID0+IHt9O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgaW5mb3Nwb3RcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2RlbGF5PTBdIC0gRGVsYXkgdGltZSB0byBzaG93XHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoIGRlbGF5ID0gMCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggYW5pbWF0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgc2hvd0FuaW1hdGlvbi5kZWxheSggZGVsYXkgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmFibGVSYXljYXN0KCB0cnVlICk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgaW5mb3Nwb3RcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gW2RlbGF5PTBdIC0gRGVsYXkgdGltZSB0byBoaWRlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoIGRlbGF5ID0gMCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBhbmltYXRlZCwgaGlkZUFuaW1hdGlvbiwgc2hvd0FuaW1hdGlvbiwgbWF0ZXJpYWwsIGVsZW1lbnQgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcclxuICAgICAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggYW5pbWF0ZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzaG93QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgaGlkZUFuaW1hdGlvbi5kZWxheSggZGVsYXkgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbmFibGVSYXljYXN0KCBmYWxzZSApO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGZvY3VzIGV2ZW50IGhhbmRsZXJcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldEZvY3VzTWV0aG9kOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5IQU5ETEVSX0ZPQ1VTID0gZXZlbnQubWV0aG9kO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvY3VzIGNhbWVyYSBjZW50ZXIgdG8gdGhpcyBpbmZvc3BvdFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkdXJhdGlvbj0xMDAwXSAtIER1cmF0aW9uIHRvIHR3ZWVuXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZWFzaW5nPVRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXRdIC0gRWFzaW5nIGZ1bmN0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgSW5mb3Nwb3RcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBmb2N1czogZnVuY3Rpb24gKCBkdXJhdGlvbiwgZWFzaW5nICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuSEFORExFUl9GT0NVUyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuSEFORExFUl9GT0NVUyggdGhpcy5wb3NpdGlvbiwgZHVyYXRpb24sIGVhc2luZyApO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VcclxuICAgICAqIEBtZW1iZXJPZiBJbmZvc3BvdFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgeyBtYXAgfSA9IG1hdGVyaWFsO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZUhvdmVyRWxlbWVudCgpO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMucGFyZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBtYXAgKSB7IG1hcC5kaXNwb3NlKCk7IG1hdGVyaWFsLm1hcCA9IG51bGw7IH1cclxuICAgICAgICBpZiAoIGdlb21ldHJ5ICkgeyBnZW9tZXRyeS5kaXNwb3NlKCk7IHRoaXMuZ2VvbWV0cnkgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKCBtYXRlcmlhbCApIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyB0aGlzLm1hdGVyaWFsID0gbnVsbDsgfVxyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEluZm9zcG90IH07IiwiaW1wb3J0IHsgQ09OVFJPTFMsIE1PREVTIH0gZnJvbSAnLi4vQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgRGF0YUltYWdlIH0gZnJvbSAnLi4vRGF0YUltYWdlJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgV2lkZ2V0IGZvciBjb250cm9sc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gQSBkb21FbGVtZW50IHdoZXJlIGRlZmF1bHQgY29udHJvbCB3aWRnZXQgd2lsbCBiZSBhdHRhY2hlZCB0b1xyXG4gKi9cclxuZnVuY3Rpb24gV2lkZ2V0ICggY29udGFpbmVyICkge1xyXG5cclxuICAgIGlmICggIWNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS53YXJuKCAnUEFOT0xFTlMuV2lkZ2V0OiBObyBjb250YWluZXIgc3BlY2lmaWVkJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBUSFJFRS5FdmVudERpc3BhdGNoZXIuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OICA9ICdhbGwgMC4yN3MgZWFzZSc7XHJcbiAgICB0aGlzLlRPVUNIX0VOQUJMRUQgPSAhISgoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnRUb3VjaCk7XHJcbiAgICB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgdGhpcy5iYXJFbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuZnVsbHNjcmVlbkVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy52aWRlb0VsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5zZXR0aW5nRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5tYWluTWVudSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVNYWluSXRlbSA9IG51bGw7XHJcbiAgICB0aGlzLmFjdGl2ZVN1Yk1lbnUgPSBudWxsO1xyXG4gICAgdGhpcy5tYXNrID0gbnVsbDtcclxuXHJcbn1cclxuXHJcbldpZGdldC5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogV2lkZ2V0LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGNvbnRyb2wgYmFyXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkQ29udHJvbEJhcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoICF0aGlzLmNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dpZGdldCBjb250YWluZXIgbm90IHNldCcgKTsgXHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLCBiYXIsIHN0eWxlVHJhbnNsYXRlLCBzdHlsZU9wYWNpdHksIGdyYWRpZW50U3R5bGU7XHJcblxyXG4gICAgICAgIGdyYWRpZW50U3R5bGUgPSAnbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLDAsMCwwLjIpLCByZ2JhKDAsMCwwLDApKSc7XHJcblxyXG4gICAgICAgIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSAnNDRweCc7XHJcbiAgICAgICAgYmFyLnN0eWxlLmZsb2F0ID0gJ2xlZnQnO1xyXG4gICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBiYXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYmFyLnN0eWxlLm1zVHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJztcclxuICAgICAgICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9ICctd2Via2l0LScgKyBncmFkaWVudFN0eWxlO1xyXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJy1tb3otJyArIGdyYWRpZW50U3R5bGU7XHJcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW8tJyArIGdyYWRpZW50U3R5bGU7XHJcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSAnLW1zLScgKyBncmFkaWVudFN0eWxlO1xyXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gZ3JhZGllbnRTdHlsZTtcclxuICAgICAgICBiYXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xyXG4gICAgICAgIGJhci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgIGJhci5pc0hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIGJhci50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhci5pc0hpZGRlbiA9ICFiYXIuaXNIaWRkZW47XHJcbiAgICAgICAgICAgIHN0eWxlVHJhbnNsYXRlID0gYmFyLmlzSGlkZGVuID8gJ3RyYW5zbGF0ZVkoMCknIDogJ3RyYW5zbGF0ZVkoLTEwMCUpJztcclxuICAgICAgICAgICAgc3R5bGVPcGFjaXR5ID0gYmFyLmlzSGlkZGVuID8gMCA6IDE7XHJcbiAgICAgICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBiYXIuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYmFyLnN0eWxlLm1zVHJhbnNmb3JtID0gc3R5bGVUcmFuc2xhdGU7XHJcbiAgICAgICAgICAgIGJhci5zdHlsZS5vcGFjaXR5ID0gc3R5bGVPcGFjaXR5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIE1lbnVcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXMuY3JlYXRlRGVmYXVsdE1lbnUoKTtcclxuICAgICAgICB0aGlzLm1haW5NZW51ID0gdGhpcy5jcmVhdGVNYWluTWVudSggbWVudSApO1xyXG4gICAgICAgIGJhci5hcHBlbmRDaGlsZCggdGhpcy5tYWluTWVudSApO1xyXG5cclxuICAgICAgICAvLyBNYXNrXHJcbiAgICAgICAgdmFyIG1hc2sgPSB0aGlzLmNyZWF0ZU1hc2soKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSBtYXNrO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBtYXNrICk7XHJcblxyXG4gICAgICAgIC8vIERpc3Bvc2VcclxuICAgICAgICBiYXIuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFyLnJlbW92ZUNoaWxkKCBzY29wZS5mdWxsc2NyZWVuRWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZnVsbHNjcmVlbkVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5zZXR0aW5nRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLnNldHRpbmdFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5zZXR0aW5nRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLnZpZGVvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBiYXIucmVtb3ZlQ2hpbGQoIHNjb3BlLnZpZGVvRWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUudmlkZW9FbGVtZW50LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnZpZGVvRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCBiYXIgKTtcclxuXHJcbiAgICAgICAgLy8gTWFzayBldmVudHNcclxuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuICAgICAgICB0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMuUFJFVkVOVF9FVkVOVF9IQU5ETEVSLCB0cnVlICk7XHJcbiAgICAgICAgdGhpcy5tYXNrLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUubWFzay5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNjb3BlLnNldHRpbmdFbGVtZW50LmRlYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgfSwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdjb250cm9sLWJhci10b2dnbGUnLCBiYXIudG9nZ2xlICk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IGJhcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGRlZmF1bHQgbWVudVxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZURlZmF1bHRNZW51OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMsIGhhbmRsZXI7XHJcblxyXG4gICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoIG1ldGhvZCwgZGF0YSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgXHJcblxyXG4gICAgICAgICAgICAgICAgfSApOyBcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcblxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb250cm9sJywgXHJcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLlRPVUNIX0VOQUJMRUQgPyAnVG91Y2gnIDogJ01vdXNlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVDb250cm9sJywgQ09OVFJPTFMuT1JCSVQgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZW5zb3InLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2VuYWJsZUNvbnRyb2wnLCBDT05UUk9MUy5ERVZJQ0VPUklFTlRBVElPTiApIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNb2RlJywgXHJcbiAgICAgICAgICAgICAgICBzdWJNZW51OiBbIFxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTm9ybWFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlciggJ2Rpc2FibGVFZmZlY3QnIClcclxuICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NhcmRib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIoICdlbmFibGVFZmZlY3QnLCBNT0RFUy5DQVJEQk9BUkQgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdGVyZW9zY29waWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyKCAnZW5hYmxlRWZmZWN0JywgTU9ERVMuU1RFUkVPIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGJ1dHRvbnMgb24gdG9wIG9mIGNvbnRyb2wgYmFyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBjb250cm9sIGJ1dHRvbiBuYW1lIHRvIGJlIGNyZWF0ZWRcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRDb250cm9sQnV0dG9uOiBmdW5jdGlvbiAoIG5hbWUgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50O1xyXG5cclxuICAgICAgICBzd2l0Y2goIG5hbWUgKSB7XHJcblxyXG4gICAgICAgIGNhc2UgJ2Z1bGxzY3JlZW4nOlxyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY3JlYXRlRnVsbHNjcmVlbkJ1dHRvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bGxzY3JlZW5FbGVtZW50ID0gZWxlbWVudDsgXHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnc2V0dGluZyc6XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5jcmVhdGVTZXR0aW5nQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmNyZWF0ZVZpZGVvQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoICFlbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmFyRWxlbWVudC5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgbW9kYWwgbWFza1xyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU1hc2s6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAwO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgZWxlbWVudC5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIFNldHRpbmcgYnV0dG9uIHRvIHRvZ2dsZSBtZW51XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2V0dGluZ0J1dHRvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5tYWluTWVudS50b2dnbGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5hY3RpdmF0ZWQgKSB7XHJcblx0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXHJcblxyXG4gICAgICAgICAgICBzdHlsZTogeyBcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgRGF0YUltYWdlLlNldHRpbmcgKyAnXCIpJyxcclxuICAgICAgICAgICAgICAgIHdlYmtpdFRyYW5zaXRpb246IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhpcy5ERUZBVUxUX1RSQU5TSVRJT05cclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblRhcDogb25UYXBcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdGVtLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlM2QoMCwwLDEsOTBkZWcpJztcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzY29wZS5tYXNrLnNob3coKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlM2QoMCwwLDAsMCknO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzY29wZS5tYXNrLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubWFpbk1lbnUgJiYgc2NvcGUubWFpbk1lbnUudmlzaWJsZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS5oaWRlKCk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUuYWN0aXZlU3ViTWVudSAmJiBzY29wZS5hY3RpdmVTdWJNZW51LnZpc2libGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuYWN0aXZlU3ViTWVudS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm1haW5NZW51ICYmIHNjb3BlLm1haW5NZW51Ll93aWR0aCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5tYWluTWVudS5jaGFuZ2VTaXplKCBzY29wZS5tYWluTWVudS5fd2lkdGggKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLm1haW5NZW51LnVuc2xpZGVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5hY3RpdmF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBGdWxsc2NyZWVuIGJ1dHRvblxyXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uIGZvciBmdWxsc2NyZWVuXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRnVsbHNjcmVlbkJ1dHRvbjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBpdGVtLCBpc0Z1bGxzY3JlZW4gPSBmYWxzZSwgdGFwU2tpcHBlZCA9IHRydWUsIHN0eWxlc2hlZXRJZDtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN0eWxlc2hlZXRJZCA9ICdwYW5vbGVucy1zdHlsZS1hZGRvbic7XHJcblxyXG4gICAgICAgIC8vIERvbid0IGNyZWF0ZSBidXR0b24gaWYgbm8gc3VwcG9ydFxyXG4gICAgICAgIGlmICggIWRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkICAgICAgICYmIFxyXG5cdFx0XHQhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgJiZcclxuXHRcdFx0IWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkICAgICYmXHJcblx0XHRcdCFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbmFibGVkICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0YXBTa2lwcGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFpc0Z1bGxzY3JlZW4gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBjb250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4gKSB7IGNvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbiApIHsgY29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggY29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuICkgeyBjb250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oIEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQgKTsgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbiApIHsgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7IH1cclxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbiApIHsgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuICkgeyBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiggKTsgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlzRnVsbHNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAoIGlzRnVsbHNjcmVlbiApIFxyXG4gICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcclxuICAgICAgICAgICAgICAgIDogJ3VybChcIicgKyBEYXRhSW1hZ2UuRnVsbHNjcmVlbkVudGVyICsgJ1wiKSc7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25GdWxsU2NyZWVuQ2hhbmdlICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGFwU2tpcHBlZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpc0Z1bGxzY3JlZW4gPSAhaXNGdWxsc2NyZWVuOyBcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICggaXNGdWxsc2NyZWVuICkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyAndXJsKFwiJyArIERhdGFJbWFnZS5GdWxsc2NyZWVuTGVhdmUgKyAnXCIpJyBcclxuICAgICAgICAgICAgICAgICAgICA6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICdvbldpbmRvd1Jlc2l6ZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25XaW5kb3dSZXNpemUnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHRhcFNraXBwZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgb25GdWxsU2NyZWVuQ2hhbmdlLCBmYWxzZSApO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLCBvbkZ1bGxTY3JlZW5DaGFuZ2UsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGl0ZW0gPSB0aGlzLmNyZWF0ZUN1c3RvbUl0ZW0oIHsgXHJcblxyXG4gICAgICAgICAgICBzdHlsZTogeyBcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgRGF0YUltYWdlLkZ1bGxzY3JlZW5FbnRlciArICdcIiknIFxyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIG9uVGFwOiBvblRhcFxyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBmdWxsc2NyZWVuIHN0bHllIGlmIG5vdCBleGlzdHNcclxuICAgICAgICBpZiAoICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBzdHlsZXNoZWV0SWQgKSApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3R5bGUnICk7XHJcbiAgICAgICAgICAgIHNoZWV0LmlkID0gc3R5bGVzaGVldElkO1xyXG4gICAgICAgICAgICBzaGVldC5pbm5lckhUTUwgPSAnOi13ZWJraXQtZnVsbC1zY3JlZW4geyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudCB9JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggc2hlZXQgKTtcclxuICAgICAgICB9XHJcblx0XHRcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHZpZGVvIGNvbnRyb2wgY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gY29udHJvbFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWaWRlb0NvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBpdGVtLnNob3cgPSBmdW5jdGlvbiAoKSB7IFxyXG5cclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uaGlkZSA9IGZ1bmN0aW9uICgpIHsgXHJcblxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbi5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtLmNvbnRyb2xCdXR0b24udXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uY29udHJvbEJ1dHRvbiA9IHRoaXMuY3JlYXRlVmlkZW9Db250cm9sQnV0dG9uKCk7XHJcbiAgICAgICAgaXRlbS5zZWVrQmFyID0gdGhpcy5jcmVhdGVWaWRlb0NvbnRyb2xTZWVrYmFyKCk7XHJcblx0XHRcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBpdGVtLmNvbnRyb2xCdXR0b24gKTtcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKCBpdGVtLnNlZWtCYXIgKTtcclxuXHJcbiAgICAgICAgaXRlbS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaXRlbS5yZW1vdmVDaGlsZCggaXRlbS5jb250cm9sQnV0dG9uICk7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2hpbGQoIGl0ZW0uc2Vla0JhciApO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaXRlbS5jb250cm9sQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2Vla0Jhci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2Vla0JhciA9IG51bGw7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLWNvbnRyb2wtc2hvdycsIGl0ZW0uc2hvdyApO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLWNvbnRyb2wtaGlkZScsIGl0ZW0uaGlkZSApO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHZpZGVvIGNvbnRyb2wgYnV0dG9uXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gY29udHJvbFxyXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xCdXR0b246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3RvZ2dsZVZpZGVvUGxheScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndG9nZ2xlVmlkZW9QbGF5JywgZGF0YTogIXRoaXMucGF1c2VkIH0gKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG5cclxuICAgICAgICAgICAgaXRlbS51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSggeyBcclxuXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IFxyXG5cclxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgRGF0YUltYWdlLlZpZGVvUGxheSArICdcIiknXHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgb25UYXA6IG9uVGFwXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXRlbS5wYXVzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpdGVtLnVwZGF0ZSA9IGZ1bmN0aW9uICggcGF1c2VkICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSBwYXVzZWQgIT09IHVuZGVmaW5lZCA/IHBhdXNlZCA6IHRoaXMucGF1c2VkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArICggdGhpcy5wYXVzZWQgXHJcbiAgICAgICAgICAgICAgICA/IERhdGFJbWFnZS5WaWRlb1BsYXkgXHJcbiAgICAgICAgICAgICAgICA6IERhdGFJbWFnZS5WaWRlb1BhdXNlICkgKyAnXCIpJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB2aWRlbyBzZWVrYmFyXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH0gLSBUaGUgZG9tIGVsZW1lbnQgaWNvbiBmb3IgdmlkZW8gc2Vla2JhclxyXG4gICAgICogQGZpcmVzIFdpZGdldCNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBjcmVhdGVWaWRlb0NvbnRyb2xTZWVrYmFyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXMsIGl0ZW0sIHByb2dyZXNzRWxlbWVudCwgcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCxcclxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlLCBtb3VzZVgsIHBlcmNlbnRhZ2VOb3csIHBlcmNlbnRhZ2VOZXh0O1xyXG5cclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCA9ICcwJSc7XHJcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xyXG5cclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLndpZHRoID0gJzE0cHgnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuaGVpZ2h0ID0gJzE0cHgnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSg3cHgsIC01cHgpJztcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgICAgIHByb2dyZXNzRWxlbWVudENvbnRyb2wuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZGQnO1xyXG5cclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Nb3VzZURvd24sICB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlRG93biAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIG1vdXNlWCA9IGV2ZW50LmNsaWVudFggfHwgKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICk7XHJcblxyXG4gICAgICAgICAgICBwZXJjZW50YWdlTm93ID0gcGFyc2VJbnQoIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCApIC8gMTAwO1xyXG5cclxuICAgICAgICAgICAgYWRkQ29udHJvbExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25WaWRlb0NvbnRyb2xEcmFnICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiggaXNEcmFnZ2luZyApe1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudFggPSBldmVudC5jbGllbnRYIHx8ICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCApO1xyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSAoIGNsaWVudFggLSBtb3VzZVggKSAvIGl0ZW0uY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSBwZXJjZW50YWdlTm93ICsgcGVyY2VudGFnZU5leHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZU5leHQgPSBwZXJjZW50YWdlTmV4dCA+IDEgPyAxIDogKCAoIHBlcmNlbnRhZ2VOZXh0IDwgMCApID8gMCA6IHBlcmNlbnRhZ2VOZXh0ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRQcm9ncmVzcyAoIHBlcmNlbnRhZ2VOZXh0ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBXaWRnZXQjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnc2V0VmlkZW9DdXJyZW50VGltZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gUGVyY2VudGFnZSBvZiBjdXJyZW50IHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRWaWRlb0N1cnJlbnRUaW1lJywgZGF0YTogcGVyY2VudGFnZU5leHQgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uVmlkZW9Db250cm9sU3RvcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVDb250cm9sTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQ29udHJvbExpc3RlbmVycyAoKSB7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25WaWRlb0NvbnRyb2xTdG9wLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVmlkZW9Db250cm9sU3RvcCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ29udHJvbExpc3RlbmVycyAoKSB7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgZmFsc2UgKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25WaWRlb0NvbnRyb2xTdG9wLCBmYWxzZSApO1xyXG4gICAgICAgICAgICBzY29wZS5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVmlkZW9Db250cm9sRHJhZywgZmFsc2UgKTtcclxuICAgICAgICAgICAgc2NvcGUuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVmlkZW9Db250cm9sU3RvcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldCA9PT0gcHJvZ3Jlc3NFbGVtZW50Q29udHJvbCApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKCBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPiAwIClcclxuICAgICAgICAgICAgICAgID8gKCBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICkgLyB0aGlzLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgICAgICA6IGV2ZW50Lm9mZnNldFggLyB0aGlzLmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAnc2V0VmlkZW9DdXJyZW50VGltZScgZnVuY3Rpb24gY2FsbCBvbiBWaWV3ZXJcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEgLSBQZXJjZW50YWdlIG9mIGN1cnJlbnQgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRWaWRlb0N1cnJlbnRUaW1lJywgZGF0YTogcGVyY2VudGFnZSB9ICk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKCBldmVudC5vZmZzZXRYIC8gdGhpcy5jbGllbnRXaWR0aCApO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkRpc3Bvc2UgKCkge1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQ29udHJvbExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnRDb250cm9sID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQoIHByb2dyZXNzRWxlbWVudENvbnRyb2wgKTtcclxuXHJcbiAgICAgICAgaXRlbSA9IHRoaXMuY3JlYXRlQ3VzdG9tSXRlbSgge1xyXG5cclxuICAgICAgICAgICAgc3R5bGU6IHsgXHJcblxyXG4gICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzRweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTg4LDE4OCwxODgsMC44KSdcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBvblRhcDogb25UYXAsXHJcbiAgICAgICAgICAgIG9uRGlzcG9zZTogb25EaXNwb3NlXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCggcHJvZ3Jlc3NFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiggcGVyY2VudGFnZSApIHtcclxuXHJcbiAgICAgICAgICAgIHByb2dyZXNzRWxlbWVudC5zdHlsZS53aWR0aCA9IHBlcmNlbnRhZ2UgKiAxMDAgKyAnJSc7XHJcblxyXG4gICAgICAgIH07XHRcdFxyXG5cclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby11cGRhdGUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UHJvZ3Jlc3MoIGV2ZW50LnBlcmNlbnRhZ2UgKTsgXHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXRlbS5wcm9ncmVzc0VsZW1lbnQgPSBwcm9ncmVzc0VsZW1lbnQ7XHJcbiAgICAgICAgaXRlbS5wcm9ncmVzc0VsZW1lbnRDb250cm9sID0gcHJvZ3Jlc3NFbGVtZW50Q29udHJvbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBtZW51IGl0ZW1cclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGl0bGUgLSBUaXRsZSB0byBkaXNwbGF5XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEFuIGFuY2hvciB0YWcgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNZW51SXRlbTogZnVuY3Rpb24gKCB0aXRsZSApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzOyBcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2EnICk7XHJcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuREVGQVVMVF9UUkFOU0lUSU9OO1xyXG5cclxuICAgICAgICBpdGVtLnNsaWRlID0gZnVuY3Rpb24gKCByaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArICggcmlnaHQgPyAnJyA6ICctJyApICsgJzEwMCUpJztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS51bnNsaWRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSc7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uc2V0SWNvbiA9IGZ1bmN0aW9uICggdXJsICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmljb24gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHVybCArICcpJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5zZXRTZWxlY3Rpb25UaXRsZSA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2VsZWN0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkU2VsZWN0aW9uID0gZnVuY3Rpb24gKCBuYW1lICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdHlsZS5mb250U2l6ZSA9ICcxM3B4JztcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZvbnRXZWlnaHQgPSAnMzAwJztcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGlvblRpdGxlKCBuYW1lICk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIHNlbGVjdGlvbiApO1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkSWNvbiA9IGZ1bmN0aW9uICggdXJsID0gRGF0YUltYWdlLkNoZXZyb25SaWdodCwgbGVmdCA9IGZhbHNlLCBmbGlwID0gZmFsc2UgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3NwYW4nICk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZmxvYXQgPSBsZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxN3B4JztcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTdweCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbICdtYXJnaW4nICsgKCBsZWZ0ID8gJ1JpZ2h0JyA6ICdMZWZ0JyApIF0gPSAnMTJweCc7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBmbGlwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVooMTgwZGVnKSc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmljb24gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldEljb24oIHVybCApO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaXRlbS5hZGRTdWJNZW51ID0gZnVuY3Rpb24gKCB0aXRsZSwgaXRlbXMgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN1Yk1lbnUgPSBzY29wZS5jcmVhdGVTdWJNZW51KCB0aXRsZSwgaXRlbXMgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2UwZTBlMCc7XHJcblxyXG4gICAgICAgIH0sIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmFmYWZhJztcclxuXHJcbiAgICAgICAgfSwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBtZW51IGl0ZW0gaGVhZGVyXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgdG8gZGlzcGxheVxyXG4gICAgICogQG1lbWJlck9mIFdpZGdldFxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gLSBBbiBhbmNob3IgdGFnIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWVudUl0ZW1IZWFkZXI6IGZ1bmN0aW9uICggdGl0bGUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY3JlYXRlTWVudUl0ZW0oIHRpdGxlICk7XHJcblxyXG4gICAgICAgIGhlYWRlci5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICMzMzMnO1xyXG4gICAgICAgIGhlYWRlci5zdHlsZS5wYWRkaW5nQm90dG9tID0gJzE1cHgnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgbWFpbiBtZW51XHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gbWVudXMgLSBNZW51IGFycmF5IGxpc3RcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWFpbk1lbnU6IGZ1bmN0aW9uICggbWVudXMgKSB7XHJcblx0XHRcclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XHJcblxyXG4gICAgICAgIG1lbnUuX3dpZHRoID0gMjAwO1xyXG4gICAgICAgIG1lbnUuY2hhbmdlU2l6ZSggbWVudS5fd2lkdGggKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1haW5NZW51ID0gc2NvcGUubWFpbk1lbnUsIHN1Yk1lbnUgPSB0aGlzLnN1Yk1lbnU7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk5leHRUaWNrICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWluTWVudS5jaGFuZ2VTaXplKCBzdWJNZW51LmNsaWVudFdpZHRoICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnNob3coKTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUudW5zbGlkZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFpbk1lbnUuaGlkZSgpO1xyXG4gICAgICAgICAgICBtYWluTWVudS5zbGlkZUFsbCgpO1xyXG4gICAgICAgICAgICBtYWluTWVudS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKCBzdWJNZW51ICk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS5hY3RpdmVNYWluSXRlbSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNjb3BlLmFjdGl2ZVN1Yk1lbnUgPSBzdWJNZW51O1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggb25OZXh0VGljayApO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBtZW51cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbWVudS5hZGRJdGVtKCBtZW51c1sgaSBdLnRpdGxlICk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJzIwcHgnO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hZGRJY29uKClcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBtZW51c1sgaSBdLnN1Yk1lbnUgJiYgbWVudXNbIGkgXS5zdWJNZW51Lmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gbWVudXNbIGkgXS5zdWJNZW51WyAwIF0udGl0bGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5hZGRTZWxlY3Rpb24oIHRpdGxlIClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkU3ViTWVudSggbWVudXNbIGkgXS50aXRsZSwgbWVudXNbIGkgXS5zdWJNZW51ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzdWIgbWVudVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gU3ViIG1lbnUgdGl0bGVcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGl0ZW1zIC0gSXRlbSBhcnJheSBsaXN0XHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgc3BhbiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVN1Yk1lbnU6IGZ1bmN0aW9uICggdGl0bGUsIGl0ZW1zICkge1xyXG5cclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzLCBtZW51LCBzdWJNZW51ID0gdGhpcy5jcmVhdGVNZW51KCk7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICBzdWJNZW51LmFjdGl2ZUl0ZW0gPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvblRhcCAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBtZW51ID0gc2NvcGUubWFpbk1lbnU7XHJcbiAgICAgICAgICAgIG1lbnUuY2hhbmdlU2l6ZSggbWVudS5fd2lkdGggKTtcclxuICAgICAgICAgICAgbWVudS51bnNsaWRlQWxsKCk7XHJcbiAgICAgICAgICAgIG1lbnUuc2hvdygpO1xyXG4gICAgICAgICAgICBzdWJNZW51LnNsaWRlQWxsKCB0cnVlICk7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnR5cGUgIT09ICdoZWFkZXInICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc2V0QWN0aXZlSXRlbSggdGhpcyApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuYWN0aXZlTWFpbkl0ZW0uc2V0U2VsZWN0aW9uVGl0bGUoIHRoaXMudGV4dENvbnRlbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaGFuZGxlciApIHsgdGhpcy5oYW5kbGVyKCk7IH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJNZW51LmFkZEhlYWRlciggdGl0bGUgKS5hZGRJY29uKCB1bmRlZmluZWQsIHRydWUsIHRydWUgKS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoZW5kJyA6ICdjbGljaycsIG9uVGFwLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdWJNZW51LmFkZEl0ZW0oIGl0ZW1zWyBpIF0udGl0bGUgKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZm9udFdlaWdodCA9IDMwMDtcclxuICAgICAgICAgICAgaXRlbS5oYW5kbGVyID0gaXRlbXNbIGkgXS5oYW5kbGVyO1xyXG4gICAgICAgICAgICBpdGVtLmFkZEljb24oICcgJywgdHJ1ZSApO1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb25UYXAsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoICFzdWJNZW51LmFjdGl2ZUl0ZW0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zZXRBY3RpdmVJdGVtKCBpdGVtICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ViTWVudS5zbGlkZUFsbCggdHJ1ZSApO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ViTWVudTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBnZW5lcmFsIG1lbnVcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSBzcGFuIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTWVudTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzcGFuJyApO1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gbWVudS5zdHlsZTtcclxuXHJcbiAgICAgICAgc3R5bGUucGFkZGluZyA9ICc1cHggMCc7XHJcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIHN0eWxlLmJvdHRvbSA9ICcxMDAlJztcclxuICAgICAgICBzdHlsZS5yaWdodCA9ICcxNHB4JztcclxuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZhZmFmYSc7XHJcbiAgICAgICAgc3R5bGUuZm9udEZhbWlseSA9ICdIZWx2ZXRpY2EgTmV1ZSc7XHJcbiAgICAgICAgc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICAgICAgc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHN0eWxlLmJveFNoYWRvdyA9ICcwIDAgMTJwdCByZ2JhKDAsMCwwLDAuMjUpJztcclxuICAgICAgICBzdHlsZS5ib3JkZXJSYWRpdXMgPSAnMnB4JztcclxuICAgICAgICBzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIHN0eWxlLndpbGxDaGFuZ2UgPSAnd2lkdGgsIGhlaWdodCwgb3BhY2l0eSc7XHJcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICBzdHlsZS50cmFuc2l0aW9uID0gdGhpcy5ERUZBVUxUX1RSQU5TSVRJT047XHJcblxyXG4gICAgICAgIG1lbnUudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtZW51LmNoYW5nZVNpemUgPSBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdpZHRoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGhlaWdodCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy52aXNpYmxlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5zbGlkZUFsbCA9IGZ1bmN0aW9uICggcmlnaHQgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBtZW51LmNoaWxkcmVuLmxlbmd0aDsgaSsrICl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBtZW51LmNoaWxkcmVuWyBpIF0uc2xpZGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2hpbGRyZW5bIGkgXS5zbGlkZSggcmlnaHQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUudW5zbGlkZUFsbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IG1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKysgKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIG1lbnUuY2hpbGRyZW5bIGkgXS51bnNsaWRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtZW51LmNoaWxkcmVuWyBpIF0udW5zbGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRIZWFkZXIgPSBmdW5jdGlvbiAoIHRpdGxlICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gc2NvcGUuY3JlYXRlTWVudUl0ZW1IZWFkZXIoIHRpdGxlICk7XHJcbiAgICAgICAgICAgIGhlYWRlci50eXBlID0gJ2hlYWRlcic7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKCBoZWFkZXIgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXI7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1lbnUuYWRkSXRlbSA9IGZ1bmN0aW9uICggdGl0bGUgKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc2NvcGUuY3JlYXRlTWVudUl0ZW0oIHRpdGxlICk7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdpdGVtJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGl0ZW0gKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZW51LnNldEFjdGl2ZUl0ZW0gPSBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuYWN0aXZlSXRlbSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0SWNvbiggJyAnICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpdGVtLnNldEljb24oIERhdGFJbWFnZS5DaGVjayApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgdGhpcy5QUkVWRU5UX0VWRU5UX0hBTkRMRVIsIHRydWUgKTtcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCB0aGlzLlBSRVZFTlRfRVZFTlRfSEFORExFUiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVudTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGN1c3RvbSBpdGVtIGVsZW1lbnRcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fSAtIFRoZSBkb20gZWxlbWVudCBpY29uXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUN1c3RvbUl0ZW06IGZ1bmN0aW9uICggb3B0aW9ucyA9IHt9ICkge1xyXG5cclxuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG9wdGlvbnMuZWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3BhbicgKTtcclxuICAgICAgICBjb25zdCB7IG9uRGlzcG9zZSB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgaXRlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9ICc0NHB4JztcclxuICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRTaXplID0gJzYwJSc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcclxuICAgICAgICBpdGVtLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcclxuXHRcdGl0ZW0uc3R5bGUuTW96VXNlclNlbGVjdCA9IFxyXG5cdFx0aXRlbS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgIGl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuXHJcbiAgICAgICAgLy8gV2hpdGUgZ2xvdyBvbiBpY29uXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCBzY29wZS5UT1VDSF9FTkFCTEVEID8gJ3RvdWNoc3RhcnQnIDogJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5maWx0ZXIgPSBcclxuXHRcdFx0aXRlbS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnZHJvcC1zaGFkb3coMCAwIDVweCByZ2JhKDI1NSwyNTUsMjU1LDEpKSc7XHJcbiAgICAgICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggc2NvcGUuVE9VQ0hfRU5BQkxFRCA/ICd0b3VjaGVuZCcgOiAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmZpbHRlciA9IFxyXG5cdFx0XHRpdGVtLnN0eWxlLndlYmtpdEZpbHRlciA9ICcnO1xyXG4gICAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXJnZVN0eWxlT3B0aW9ucyggaXRlbSwgb3B0aW9ucy5zdHlsZSApO1xyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbnMub25UYXAgKSB7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHNjb3BlLlRPVUNIX0VOQUJMRUQgPyAndG91Y2hlbmQnIDogJ2NsaWNrJywgb3B0aW9ucy5vblRhcCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggb25EaXNwb3NlICkgeyBvcHRpb25zLm9uRGlzcG9zZSgpOyB9XHJcblxyXG4gICAgICAgIH07XHJcblx0XHRcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWVyZ2UgaXRlbSBjc3Mgc3R5bGVcclxuICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gYmUgbWVyZ2VkIHdpdGggc3R5bGVcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyAtIFRoZSBzdHlsZSBvcHRpb25zXHJcbiAgICAgKiBAbWVtYmVyT2YgV2lkZ2V0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIFRoZSBzYW1lIGVsZW1lbnQgd2l0aCBtZXJnZWQgc3R5bGVzXHJcbiAgICAgKi9cclxuICAgIG1lcmdlU3R5bGVPcHRpb25zOiBmdW5jdGlvbiAoIGVsZW1lbnQsIG9wdGlvbnMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IHByb3BlcnR5IGluIG9wdGlvbnMgKXtcclxuXHJcbiAgICAgICAgICAgIGlmICggb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSggcHJvcGVydHkgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlWyBwcm9wZXJ0eSBdID0gb3B0aW9uc1sgcHJvcGVydHkgXTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSB3aWRnZXRzIGJ5IGRldGFjaGluZyBkb20gZWxlbWVudHMgZnJvbSBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBXaWRnZXRcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5iYXJFbGVtZW50ICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5iYXJFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyRWxlbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblx0XHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IFdpZGdldCB9OyIsImltcG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi4vaW5mb3Nwb3QvSW5mb3Nwb3QnO1xyXG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgQmFzZSBQYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtUSFJFRS5HZW9tZXRyeX0gZ2VvbWV0cnkgLSBUaGUgZ2VvbWV0cnkgZm9yIHRoaXMgcGFub3JhbWFcclxuICogQHBhcmFtIHtUSFJFRS5NYXRlcmlhbH0gbWF0ZXJpYWwgLSBUaGUgbWF0ZXJpYWwgZm9yIHRoaXMgcGFub3JhbWFcclxuICovXHJcbmZ1bmN0aW9uIFBhbm9yYW1hICggZ2VvbWV0cnksIG1hdGVyaWFsICkge1xyXG5cclxuICAgIFRIUkVFLk1lc2guY2FsbCggdGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcblxyXG4gICAgdGhpcy50eXBlID0gJ3Bhbm9yYW1hJztcclxuXHJcbiAgICB0aGlzLkltYWdlUXVhbGl0eUxvdyA9IDE7XHJcbiAgICB0aGlzLkltYWdlUXVhbGl0eUZhaXIgPSAyO1xyXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlNZWRpdW0gPSAzO1xyXG4gICAgdGhpcy5JbWFnZVF1YWxpdHlIaWdoID0gNDtcclxuICAgIHRoaXMuSW1hZ2VRdWFsaXR5U3VwZXJIaWdoID0gNTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gMTAwMDtcclxuXHJcbiAgICB0aGlzLmRlZmF1bHRJbmZvc3BvdFNpemUgPSAzNTA7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmxpbmtlZFNwb3RzID0gW107XHJcblxyXG4gICAgdGhpcy5pc0luZm9zcG90VmlzaWJsZSA9IGZhbHNlO1xyXG5cdFxyXG4gICAgdGhpcy5saW5raW5nSW1hZ2VVUkwgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmxpbmtpbmdJbWFnZVNjYWxlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMubWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkJhY2tTaWRlO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICB0aGlzLnNjYWxlLnggKj0gLTE7XHJcbiAgICB0aGlzLnJlbmRlck9yZGVyID0gLTE7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmluZm9zcG90QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzICkudG8oIHt9LCB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uIC8gMiApO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzLmZhZGVJbi5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIHRoaXMuc2V0Q29udGFpbmVyLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgdGhpcy5zZXR1cFRyYW5zaXRpb25zKCk7XHJcblxyXG59XHJcblxyXG5QYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5NZXNoLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IFBhbm9yYW1hLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkaW5nIGFuIG9iamVjdFxyXG4gICAgICogVG8gY291bnRlciB0aGUgc2NhbGUueCA9IC0xLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYWRkIGFuIFxyXG4gICAgICogZW1wdHkgb2JqZWN0IHdpdGggaW52ZXJ0ZWQgc2NhbGUgb24geFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIFRoZSBvYmplY3QgdG8gYmUgYWRkZWRcclxuICAgICAqL1xyXG4gICAgYWRkOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgbGV0IGludmVydGVkT2JqZWN0O1xyXG5cclxuICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCggYXJndW1lbnRzWyBpIF0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgaW5mb3Nwb3RzXHJcbiAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0ID0gb2JqZWN0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNvbnRhaW5lciApIHsgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lciB9ICk7IH1cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy1pbmZvc3BvdC1mb2N1cycsIG1ldGhvZDogZnVuY3Rpb24gKCB2ZWN0b3IsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIEluZm9zcG90IGZvY3VzIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSBWaWV3ZXIgZnVuY3Rpb24gbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Kn0gZGF0YSAtIFRoZSBhcmd1bWVudCB0byBiZSBwYXNzZWQgaW50byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3R3ZWVuQ29udHJvbENlbnRlcicsIGRhdGE6IFsgdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nIF0gfSApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSB9ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vIENvdW50ZXIgc2NhbGUueCA9IC0xIGVmZmVjdFxyXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5zY2FsZS54ID0gLTE7XHJcbiAgICAgICAgICAgIGludmVydGVkT2JqZWN0LnNjYWxlUGxhY2VIb2xkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBpbnZlcnRlZE9iamVjdC5hZGQoIG9iamVjdCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFRIUkVFLk9iamVjdDNELnByb3RvdHlwZS5hZGQuY2FsbCggdGhpcywgaW52ZXJ0ZWRPYmplY3QgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsaWNrIGV2ZW50IGhhbmRsZXJcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZXZlbnQgLSBDbGljayBldmVudFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBJbmZvc3BvdCNkaXNtaXNzXHJcbiAgICAgKi9cclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQuaW50ZXJzZWN0cyAmJiBldmVudC5pbnRlcnNlY3RzLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRGltaXNzIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IEluZm9zcG90I2Rpc21pc3NcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc21pc3MnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY29udGFpbmVyIG9mIHRoaXMgcGFub3JhbWEgXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fG9iamVjdH0gZGF0YSAtIERhdGEgd2l0aCBjb250YWluZXIgaW5mb3JtYXRpb25cclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgSW5mb3Nwb3QjcGFub2xlbnMtY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRhaW5lcjogZnVuY3Rpb24gKCBkYXRhICkge1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyO1xyXG5cclxuICAgICAgICBpZiAoIGRhdGEgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRhdGE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRhdGEgJiYgZGF0YS5jb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBkYXRhLmNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGNvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCggZnVuY3Rpb24gKCBjaGlsZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGNoaWxkIGluc3RhbmNlb2YgSW5mb3Nwb3QgJiYgY2hpbGQuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICogU2V0IGNvbnRhaW5lciBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICogQGV2ZW50IEluZm9zcG90I3Bhbm9sZW5zLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIFRoZSBjb250YWluZXIgb2YgdGhpcyBwYW5vcmFtYVxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lcjogY29udGFpbmVyIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgaXMgbG9hZGVkXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2xvYWRcclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTG9hZCBwYW5vcmFtYSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xvYWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2xvYWQnIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHBhbm9yYW1hIGlzIGluIHByb2dyZXNzXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI3Byb2dyZXNzXHJcbiAgICAgKi9cclxuICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uICggcHJvZ3Jlc3MgKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExvYWRpbmcgcGFub3JhbWEgcHJvZ3Jlc3MgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwcm9ncmVzc1xyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBwcm9ncmVzcyAtIFRoZSBwcm9ncmVzcyBvYmplY3QgY29udGFpbmluZyBsb2FkZWQgYW5kIHRvdGFsIGFtb3VudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJvZ3Jlc3MnLCBwcm9ncmVzczogcHJvZ3Jlc3MgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgbG9hZGluZyBoYXMgZXJyb3JcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZXJyb3JcclxuICAgICAqL1xyXG4gICAgb25FcnJvcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMb2FkaW5nIHBhbm9yYW1hIGVycm9yIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZXJyb3JcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Vycm9yJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB6b29tIGxldmVsIGJhc2VkIG9uIHdpbmRvdyB3aWR0aFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gem9vbSBsZXZlbCBpbmRpY2F0aW5nIGltYWdlIHF1YWxpdHlcclxuICAgICAqL1xyXG4gICAgZ2V0Wm9vbUxldmVsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCB6b29tTGV2ZWw7XHJcblxyXG4gICAgICAgIGlmICggd2luZG93LmlubmVyV2lkdGggPD0gODAwICkge1xyXG5cclxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlGYWlyO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCAmJiAgd2luZG93LmlubmVyV2lkdGggPD0gMTI4MCApIHtcclxuXHJcbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5TWVkaXVtO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB3aW5kb3cuaW5uZXJXaWR0aCA+IDEyODAgJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTkyMCApIHtcclxuXHJcbiAgICAgICAgICAgIHpvb21MZXZlbCA9IHRoaXMuSW1hZ2VRdWFsaXR5SGlnaDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggd2luZG93LmlubmVyV2lkdGggPiAxOTIwICkge1xyXG5cclxuICAgICAgICAgICAgem9vbUxldmVsID0gdGhpcy5JbWFnZVF1YWxpdHlTdXBlckhpZ2g7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB6b29tTGV2ZWwgPSB0aGlzLkltYWdlUXVhbGl0eUxvdztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gem9vbUxldmVsO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGV4dHVyZSBvZiBhIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIC0gVGV4dHVyZSB0byBiZSB1cGRhdGVkXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVRleHR1cmU6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC5tYXAgPSB0ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBpbmZvc3BvdHMgaW4gdGhpcyBwYW5vcmFtYVxyXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNWaXNpYmxlIC0gVmlzaWJpbGl0eSBvZiBpbmZvc3BvdHNcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gZGVsYXkgLSBEZWxheSBpbiBtaWxsaXNlY29uZHMgdG8gY2hhbmdlIHZpc2liaWxpdHlcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUluZm9zcG90VmlzaWJpbGl0eTogZnVuY3Rpb24gKCBpc1Zpc2libGUsIGRlbGF5ICkge1xyXG5cclxuICAgICAgICBkZWxheSA9ICggZGVsYXkgIT09IHVuZGVmaW5lZCApID8gZGVsYXkgOiAwO1xyXG5cclxuICAgICAgICBjb25zdCB2aXNpYmxlID0gKCBpc1Zpc2libGUgIT09IHVuZGVmaW5lZCApID8gaXNWaXNpYmxlIDogKCB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID8gZmFsc2UgOiB0cnVlICk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHZpc2libGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5zaG93KCBkZWxheSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5oaWRlKCBkZWxheSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmlzSW5mb3Nwb3RWaXNpYmxlID0gdmlzaWJsZTtcclxuXHJcbiAgICAgICAgLy8gQW5pbWF0aW9uIGNvbXBsZXRlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5pbmZvc3BvdEFuaW1hdGlvbi5vbkNvbXBsZXRlKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQ29tcGxldGUgdG9nZ2xpbmcgaW5mb3Nwb3QgdmlzaWJpbGl0eVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjaW5mb3Nwb3QtYW5pbWF0aW9uLWNvbXBsZXRlXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdpbmZvc3BvdC1hbmltYXRpb24tY29tcGxldGUnLCB2aXNpYmxlOiB2aXNpYmxlIH0gKTtcclxuXHJcbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKS5kZWxheSggZGVsYXkgKS5zdGFydCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgaW1hZ2Ugb2YgdGhpcyBwYW5vcmFtYSdzIGxpbmtpbmcgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgLSBVcmwgdG8gdGhlIGltYWdlIGFzc2V0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGUgLSBTY2FsZSBmYWN0b3Igb2YgdGhlIGluZm9zcG90XHJcbiAgICAgKi9cclxuICAgIHNldExpbmtpbmdJbWFnZTogZnVuY3Rpb24gKCB1cmwsIHNjYWxlICkge1xyXG5cclxuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVVSTCA9IHVybDtcclxuICAgICAgICB0aGlzLmxpbmtpbmdJbWFnZVNjYWxlID0gc2NhbGU7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExpbmsgb25lLXdheSBwYW5vcmFtYVxyXG4gICAgICogQHBhcmFtICB7UGFub3JhbWF9IHBhbm8gIC0gVGhlIHBhbm9yYW1hIHRvIGJlIGxpbmtlZCB0b1xyXG4gICAgICogQHBhcmFtICB7VEhSRUUuVmVjdG9yM30gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgaW5mb3Nwb3Qgd2hpY2ggbmF2aWdhdGVzIHRvIHRoZSBwYW5vXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IFtpbWFnZVNjYWxlPTMwMF0gLSBJbWFnZSBzY2FsZSBvZiBsaW5rZWQgaW5mb3Nwb3RcclxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gW2ltYWdlU3JjPURhdGFJbWFnZS5BcnJvd10gLSBUaGUgaW1hZ2Ugc291cmNlIG9mIGxpbmtlZCBpbmZvc3BvdFxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbGluazogZnVuY3Rpb24gKCBwYW5vLCBwb3NpdGlvbiwgaW1hZ2VTY2FsZSwgaW1hZ2VTcmMgKSB7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZSwgaW1nO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoICFwb3NpdGlvbiApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1BsZWFzZSBzcGVjaWZ5IGluZm9zcG90IHBvc2l0aW9uIGZvciBsaW5raW5nJyApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluZm9zcG90IHNjYWxlXHJcbiAgICAgICAgaWYgKCBpbWFnZVNjYWxlICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBzY2FsZSA9IGltYWdlU2NhbGU7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhbm8ubGlua2luZ0ltYWdlU2NhbGUgIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlID0gcGFuby5saW5raW5nSW1hZ2VTY2FsZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlID0gMzAwO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBJbmZvc3BvdCBpbWFnZVxyXG4gICAgICAgIGlmICggaW1hZ2VTcmMgKSB7XHJcblxyXG4gICAgICAgICAgICBpbWcgPSBpbWFnZVNyYztcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggcGFuby5saW5raW5nSW1hZ2VVUkwgKSB7XHJcblxyXG4gICAgICAgICAgICBpbWcgPSBwYW5vLmxpbmtpbmdJbWFnZVVSTDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGltZyA9IERhdGFJbWFnZS5BcnJvdztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGVzIGEgbmV3IGluZm9zcG90XHJcbiAgICAgICAgY29uc3Qgc3BvdCA9IG5ldyBJbmZvc3BvdCggc2NhbGUsIGltZyApO1xyXG4gICAgICAgIHNwb3QucG9zaXRpb24uY29weSggcG9zaXRpb24gKTtcclxuICAgICAgICBzcG90LnRvUGFub3JhbWEgPSBwYW5vO1xyXG4gICAgICAgIHNwb3QuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNwYW5vbGVucy12aWV3ZXItaGFuZGxlclxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gVmlld2VyIGZ1bmN0aW9uIG5hbWVcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdzZXRQYW5vcmFtYScsIGRhdGE6IHBhbm8gfSApO1xyXG5cclxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmtlZFNwb3RzLnB1c2goIHNwb3QgKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQoIHNwb3QgKTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XHRcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNldHVwVHJhbnNpdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWRlSW5BbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWF0ZXJpYWwgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKVxyXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hdGVyaWFsLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogRW50ZXIgcGFub3JhbWEgZmFkZSBpbiBzdGFydCBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyLWZhZGUtc3RhcnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLWZhZGUtc3RhcnQnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHRoaXMuZmFkZU91dEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tYXRlcmlhbCApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1hdGVyaWFsLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogTGVhdmUgcGFub3JhbWEgY29tcGxldGUgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNsZWF2ZS1jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbGVhdmUtY29tcGxldGUnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0IClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGFuZCBhbmltYXRpb24gY29tcGxldGUgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZW50ZXItY29tcGxldGUnIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH0uYmluZCAoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcyApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25GYWRlQW5pbWF0aW9uVXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFscGhhID0gdGhpcy5tYXRlcmlhbC5vcGFjaXR5O1xyXG4gICAgICAgIGNvbnN0IHsgdW5pZm9ybXMgfSA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG4gICAgICAgIGlmICggdW5pZm9ybXMgJiYgdW5pZm9ybXMub3BhY2l0eSApIHtcclxuICAgICAgICAgICAgdW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IGFscGhhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgZmFkaW5nIGluIGFuaW1hdGlvblxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBQYW5vcmFtYSNlbnRlci1mYWRlLWNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIGZhZGVJbjogZnVuY3Rpb24gKCBkdXJhdGlvbiApIHtcclxuXHJcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiA+PSAwID8gZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAxIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKCB0aGlzLm9uRmFkZUFuaW1hdGlvblVwZGF0ZS5iaW5kKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5KCB0cnVlLCBkdXJhdGlvbiAvIDIgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGZhZGUgY29tcGxldGUgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEBldmVudCBQYW5vcmFtYSNlbnRlci1mYWRlLWNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlci1mYWRlLWNvbXBsZXRlJyB9ICk7XHRcdFx0XHJcblxyXG4gICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBmYWRpbmcgb3V0IGFuaW1hdGlvblxyXG4gICAgICogQG1lbWJlck9mIFBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZmFkZU91dDogZnVuY3Rpb24gKCBkdXJhdGlvbiApIHtcclxuXHJcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiA+PSAwID8gZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmZhZGVJbkFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5mYWRlT3V0QW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC50byggeyBvcGFjaXR5OiAwIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKCB0aGlzLm9uRmFkZUFuaW1hdGlvblVwZGF0ZS5iaW5kKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGVudGVyaW5nIGEgcGFub3JhbWEgXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2VudGVyXHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjZW50ZXItc3RhcnRcclxuICAgICAqL1xyXG4gICAgb25FbnRlcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uRHVyYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubGVhdmVUcmFuc2l0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAudG8oIHt9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5vblN0YXJ0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBFbnRlciBwYW5vcmFtYSBhbmQgYW5pbWF0aW9uIHN0YXJ0aW5nIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjZW50ZXItc3RhcnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9IFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2VudGVyLXN0YXJ0JyB9ICk7XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubG9hZGVkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhZGVJbiggZHVyYXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH0uYmluZCggdGhpcyApIClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVudGVyIHBhbm9yYW1hIGV2ZW50XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2VudGVyXHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH0gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdlbnRlcicgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9yYW1hLWVudGVyJyB9ICk7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gbGVhdmluZyBhIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFBhbm9yYW1hI2xlYXZlXHJcbiAgICAgKi9cclxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmVudGVyVHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5sZWF2ZVRyYW5zaXRpb25cclxuICAgICAgICAgICAgLnRvKCB7fSwgZHVyYXRpb24gKVxyXG4gICAgICAgICAgICAub25TdGFydCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogTGVhdmUgcGFub3JhbWEgYW5kIGFuaW1hdGlvbiBzdGFydGluZyBldmVudFxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI2xlYXZlLXN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdsZWF2ZS1zdGFydCcgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmFkZU91dCggZHVyYXRpb24gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5KCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGVhdmUgcGFub3JhbWEgZXZlbnRcclxuICAgICAgICAgKiBAZXZlbnQgUGFub3JhbWEjbGVhdmVcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fSBcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2xlYXZlJyB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCggY2hpbGQgPT4ge1xyXG5cclxuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub3JhbWEtbGVhdmUnIH0gKTtcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3Nwb3RBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZmFkZUluQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmZhZGVPdXRBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJUcmFuc2l0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmxlYXZlVHJhbnNpdGlvbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2UgaGFuZGxlclxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtIFZpZXdlciBmdW5jdGlvbiBuYW1lXHJcbiAgICAgICAgICogQHByb3BlcnR5IHsqfSBkYXRhIC0gVGhlIGFyZ3VtZW50IHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBtZXRob2RcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25QYW5vcmFtYURpc3Bvc2UnLCBkYXRhOiB0aGlzIH0gKTtcclxuXHJcbiAgICAgICAgLy8gcmVjdXJzaXZlIGRpc3Bvc2FsIG9uIDNkIG9iamVjdHNcclxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVEaXNwb3NlICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBnZW9tZXRyeSwgbWF0ZXJpYWwgfSA9IG9iamVjdDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gb2JqZWN0LmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIG9iamVjdC5jaGlsZHJlbltpXSApO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZSggb2JqZWN0LmNoaWxkcmVuW2ldICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdC5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBpZiAoIGdlb21ldHJ5ICkgeyBnZW9tZXRyeS5kaXNwb3NlKCk7IG9iamVjdC5nZW9tZXRyeSA9IG51bGw7IH1cclxuICAgICAgICAgICAgaWYgKCBtYXRlcmlhbCApIHsgbWF0ZXJpYWwuZGlzcG9zZSgpOyBvYmplY3QubWF0ZXJpYWwgPSBudWxsOyB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjdXJzaXZlRGlzcG9zZSggdGhpcyApO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMucGFyZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlKCB0aGlzICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBQYW5vcmFtYSB9OyIsImltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9QYW5vcmFtYSc7XHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL1RleHR1cmVMb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBFcXVpcmVjdGFuZ3VsYXIgYmFzZWQgaW1hZ2UgcGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIHVybCBvciBIVE1MSW1hZ2VFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBJbWFnZVBhbm9yYW1hICggaW1hZ2UsIF9nZW9tZXRyeSwgX21hdGVyaWFsICkge1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IF9nZW9tZXRyeSB8fCBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IF9tYXRlcmlhbCB8fCBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgb3BhY2l0eTogMCwgdHJhbnNwYXJlbnQ6IHRydWUgfSApO1xyXG5cclxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuICAgIHRoaXMuc3JjID0gaW1hZ2U7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHJcbn1cclxuXHJcbkltYWdlUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogSW1hZ2VQYW5vcmFtYSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW1hZ2UgYXNzZXRcclxuICAgICAqIEBwYXJhbSAgeyp9IHNyYyAtIFVybCBvciBpbWFnZSBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggc3JjICkge1xyXG5cclxuICAgICAgICBzcmMgPSBzcmMgfHwgdGhpcy5zcmM7XHJcblxyXG4gICAgICAgIGlmICggIXNyYyApIHsgXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdJbWFnZSBzb3VyY2UgdW5kZWZpbmVkJyApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgKSB7XHJcblxyXG4gICAgICAgICAgICBUZXh0dXJlTG9hZGVyLmxvYWQoIHNyYywgdGhpcy5vbkxvYWQuYmluZCggdGhpcyApLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApLCB0aGlzLm9uRXJyb3IuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNyYyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZCggbmV3IFRIUkVFLlRleHR1cmUoIHNyYyApICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIGltYWdlIGlzIGxvYWRlZFxyXG4gICAgICogQHBhcmFtICB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZSAtIFRleHR1cmUgdG8gYmUgdXBkYXRlZFxyXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggdGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSggdGV4dHVyZSApO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBQYW5vcmFtYS5wcm90b3R5cGUub25Mb2FkLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldFxyXG4gICAgICogQG1lbWJlck9mIEltYWdlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlXHJcbiAgICAgKiBAbWVtYmVyT2YgSW1hZ2VQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBtYXRlcmlhbDogeyBtYXAgfSB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gUmVsZWFzZSBjYWNoZWQgaW1hZ2VcclxuICAgICAgICBUSFJFRS5DYWNoZS5yZW1vdmUoIHRoaXMuc3JjICk7XHJcblxyXG4gICAgICAgIGlmICggbWFwICkgeyBtYXAuZGlzcG9zZSgpOyB9XHJcblxyXG4gICAgICAgIFBhbm9yYW1hLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBJbWFnZVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgRW1wdHkgcGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBFbXB0eVBhbm9yYW1hICgpIHtcclxuXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IDB4MDAwMDAwLCBvcGFjaXR5OiAwLCB0cmFuc3BhcmVudDogdHJ1ZSB9ICk7XHJcblxyXG4gICAgZ2VvbWV0cnkuYWRkQXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCBuZXcgRmxvYXQzMkFycmF5KCksIDEgKSApO1xyXG5cclxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxufVxyXG5cclxuRW1wdHlQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBFbXB0eVBhbm9yYW1hXHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBFbXB0eVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfSBmcm9tICcuLi9sb2FkZXJzL0N1YmVUZXh0dXJlTG9hZGVyJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgQ3ViZW1hcC1iYXNlZCBwYW5vcmFtYVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHthcnJheX0gaW1hZ2VzIC0gQXJyYXkgb2YgNiB1cmxzIHRvIGltYWdlcywgb25lIGZvciBlYWNoIHNpZGUgb2YgdGhlIEN1YmVUZXh0dXJlLiBUaGUgdXJscyBzaG91bGQgYmUgc3BlY2lmaWVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHBvcy14LCBuZWcteCwgcG9zLXksIG5lZy15LCBwb3MteiwgbmVnLXpcclxuICovXHJcbmZ1bmN0aW9uIEN1YmVQYW5vcmFtYSAoIGltYWdlcyA9IFtdICl7XHJcblxyXG4gICAgY29uc3QgZWRnZUxlbmd0aCA9IDEwMDAwO1xyXG4gICAgY29uc3Qgc2hhZGVyID0gT2JqZWN0LmFzc2lnbigge30sIFRIUkVFLlNoYWRlckxpYlsgJ2N1YmUnIF0gKTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoLCBlZGdlTGVuZ3RoICk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3Jtczogc2hhZGVyLnVuaWZvcm1zLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIFBhbm9yYW1hLmNhbGwoIHRoaXMsIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cclxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xyXG4gICAgdGhpcy5lZGdlTGVuZ3RoID0gZWRnZUxlbmd0aDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMub3BhY2l0eS52YWx1ZSA9IDA7XHJcblxyXG59XHJcblxyXG5DdWJlUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogQ3ViZVBhbm9yYW1hLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCA2IGltYWdlcyBhbmQgYmluZCBsaXN0ZW5lcnNcclxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIEN1YmVUZXh0dXJlTG9hZGVyLmxvYWQoIFx0XHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlcywgXHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uTG9hZC5iaW5kKCB0aGlzICksIFxyXG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApLCBcclxuICAgICAgICAgICAgdGhpcy5vbkVycm9yLmJpbmQoIHRoaXMgKSBcclxuXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIDYgdGV4dHVyZXMgYXJlIHJlYWR5XHJcbiAgICAgKiBAcGFyYW0gIHtUSFJFRS5DdWJlVGV4dHVyZX0gdGV4dHVyZSAtIEN1YmUgdGV4dHVyZVxyXG4gICAgICogQG1lbWJlck9mIEN1YmVQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3RDdWJlJyBdLnZhbHVlID0gdGV4dHVyZTtcclxuXHJcbiAgICAgICAgUGFub3JhbWEucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VcclxuICAgICAqIEBtZW1iZXJPZiBDdWJlUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHRcclxuXHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50Q3ViZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZXMuZm9yRWFjaCggKCBpbWFnZSApID0+IHsgVEhSRUUuQ2FjaGUucmVtb3ZlKCBpbWFnZSApOyB9ICk7XHJcblxyXG4gICAgICAgIGlmICggdmFsdWUgaW5zdGFuY2VvZiBUSFJFRS5DdWJlVGV4dHVyZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhbHVlLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgQ3ViZVBhbm9yYW1hIH07IiwiaW1wb3J0IHsgQ3ViZVBhbm9yYW1hIH0gZnJvbSAnLi9DdWJlUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuLi9EYXRhSW1hZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgQmFzaWMgcGFub3JhbWEgd2l0aCA2IHByZS1kZWZpbmVkIGdyaWQgaW1hZ2VzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQmFzaWNQYW5vcmFtYSAoKSB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzID0gW107XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgNjsgaSsrICkge1xyXG5cclxuICAgICAgICBpbWFnZXMucHVzaCggRGF0YUltYWdlLldoaXRlVGlsZSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBDdWJlUGFub3JhbWEuY2FsbCggdGhpcywgaW1hZ2VzICk7XHJcblxyXG59XHJcblxyXG5CYXNpY1Bhbm9yYW1hLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIEN1YmVQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBCYXNpY1Bhbm9yYW1hXHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBCYXNpY1Bhbm9yYW1hIH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgVmlkZW8gUGFub3JhbWFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgLSBFcXVpcmVjdGFuZ3VsYXIgdmlkZW8gdXJsXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb24gZm9yIHZpZGVvIHNldHRpbmdzXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtvcHRpb25zLnZpZGVvRWxlbWVudF0gLSBIVE1MNSB2aWRlbyBlbGVtZW50IGNvbnRhaW5zIHRoZSB2aWRlb1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxvb3A9dHJ1ZV0gLSBTcGVjaWZ5IGlmIHRoZSB2aWRlbyBzaG91bGQgbG9vcCBpbiB0aGUgZW5kXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubXV0ZWQ9dHJ1ZV0gLSBNdXRlIHRoZSB2aWRlbyBvciBub3QuIE5lZWQgdG8gYmUgdHJ1ZSBpbiBvcmRlciB0byBhdXRvcGxheSBvbiBzb21lIGJyb3dzZXJzXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdIC0gU3BlY2lmeSBpZiB0aGUgdmlkZW8gc2hvdWxkIGF1dG8gcGxheVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnBsYXlzaW5saW5lPXRydWVdIC0gU3BlY2lmeSBpZiB2aWRlbyBzaG91bGQgcGxheSBpbmxpbmUgZm9yIGlPUy4gSWYgeW91IHdhbnQgaXQgdG8gYXV0byBwbGF5IGlubGluZSwgc2V0IGJvdGggYXV0b3BsYXkgYW5kIG11dGVkIG9wdGlvbnMgdG8gdHJ1ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIl0gLSBTZXRzIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGZvciB0aGUgdmlkZW8sIHdoaWNoIGFsbG93cyBmb3IgY3Jvc3Mtb3JpZ2luIHZpZGVvcyBpbiBzb21lIGJyb3dzZXJzIChGaXJlZm94LCBDaHJvbWUpLiBTZXQgdG8gZWl0aGVyIFwiYW5vbnltb3VzXCIgb3IgXCJ1c2UtY3JlZGVudGlhbHNcIi5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtyYWRpdXM9NTAwMF0gLSBUaGUgbWluaW11bSByYWRpdXMgZm9yIHRoaXMgcGFub3JhbVxyXG4gKi9cclxuZnVuY3Rpb24gVmlkZW9QYW5vcmFtYSAoIHNyYywgb3B0aW9ucyA9IHt9ICkge1xyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwMDA7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSggcmFkaXVzLCA2MCwgNDAgKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IG9wYWNpdHk6IDAsIHRyYW5zcGFyZW50OiB0cnVlIH0gKTtcclxuXHJcbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcblxyXG4gICAgICAgIHZpZGVvRWxlbWVudDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3ZpZGVvJyApLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbXV0ZWQ6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIHBsYXlzaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJ1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbiggdGhpcy5vcHRpb25zLCBvcHRpb25zICk7XHJcblxyXG4gICAgdGhpcy52aWRlb0VsZW1lbnQgPSB0aGlzLm9wdGlvbnMudmlkZW9FbGVtZW50O1xyXG4gICAgdGhpcy52aWRlb1Byb2dyZXNzID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5wYXVzZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIHRoaXMucmVzdW1lVmlkZW9Qcm9ncmVzcy5iaW5kKCB0aGlzICkgKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3ZpZGVvLXRvZ2dsZScsIHRoaXMudG9nZ2xlVmlkZW8uYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICd2aWRlby10aW1lJywgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lLmJpbmQoIHRoaXMgKSApO1xyXG5cclxufTtcclxuXHJcblZpZGVvUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogVmlkZW9QYW5vcmFtYSxcclxuXHJcbiAgICBpc01vYmlsZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KSggd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgd2luZG93Lm5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhICk7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHZpZGVvIHBhbm9yYW1hXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgIFBhbm9yYW1hI3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBtdXRlZCwgbG9vcCwgYXV0b3BsYXksIHBsYXlzaW5saW5lLCBjcm9zc09yaWdpbiB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IG9uTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgdmlkZW8ubG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdmlkZW8uYXV0b3BsYXkgPSBhdXRvcGxheTtcclxuICAgICAgICB2aWRlby5wbGF5c2lubGluZSA9IHBsYXlzaW5saW5lO1xyXG4gICAgICAgIHZpZGVvLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XHJcbiAgICAgICAgdmlkZW8ubXV0ZWQgPSBtdXRlZDtcclxuXHRcdFxyXG4gICAgICAgIGlmICggcGxheXNpbmxpbmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoICdwbGF5c2lubGluZScsICcnICk7XHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSggJ3dlYmtpdC1wbGF5c2lubGluZScsICcnICk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGNvbnN0IG9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1RleHR1cmUoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogVmlld2VyIGhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcclxuICAgICAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGF0YSAtIFBhdXNlIHZpZGVvIG9yIG5vdFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogZmFsc2UgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRm9yIG1vYmlsZSBzaWxlbnQgYXV0b3BsYXlcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmlzTW9iaWxlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmlkZW8ucGF1c2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGF1dG9wbGF5ICYmIG11dGVkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IGZhbHNlIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtzdHJpbmd9IG1ldGhvZCAtICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpeCBmb3IgdGhyZWVqcyByODkgZGVsYXllZCB1cGRhdGVcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLm1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyggeyBsb2FkZWQ6IDEsIHRvdGFsOiAxIH0gKTtcclxuICAgICAgICAgICAgICAgIG9uTG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGxvYWRlZCApO1xyXG5cdFx0XHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWFkeSBzdGF0ZSBvZiB0aGUgYXVkaW8vdmlkZW8gZWxlbWVudFxyXG4gICAgICAgICAqIDAgPSBIQVZFX05PVEhJTkcgLSBubyBpbmZvcm1hdGlvbiB3aGV0aGVyIG9yIG5vdCB0aGUgYXVkaW8vdmlkZW8gaXMgcmVhZHlcclxuICAgICAgICAgKiAxID0gSEFWRV9NRVRBREFUQSAtIG1ldGFkYXRhIGZvciB0aGUgYXVkaW8vdmlkZW8gaXMgcmVhZHlcclxuICAgICAgICAgKiAyID0gSEFWRV9DVVJSRU5UX0RBVEEgLSBkYXRhIGZvciB0aGUgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvbiBpcyBhdmFpbGFibGUsIGJ1dCBub3QgZW5vdWdoIGRhdGEgdG8gcGxheSBuZXh0IGZyYW1lL21pbGxpc2Vjb25kXHJcbiAgICAgICAgICogMyA9IEhBVkVfRlVUVVJFX0RBVEEgLSBkYXRhIGZvciB0aGUgY3VycmVudCBhbmQgYXQgbGVhc3QgdGhlIG5leHQgZnJhbWUgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgICogNCA9IEhBVkVfRU5PVUdIX0RBVEEgLSBlbm91Z2ggZGF0YSBhdmFpbGFibGUgdG8gc3RhcnQgcGxheWluZ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICggdmlkZW8ucmVhZHlTdGF0ZSA+IDIgKSB7XHJcblxyXG4gICAgICAgICAgICBvbmxvYWRlZGRhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB2aWRlby5xdWVyeVNlbGVjdG9yQWxsKCAnc291cmNlJyApLmxlbmd0aCA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc291cmNlJyApO1xyXG4gICAgICAgICAgICAgICAgc291cmNlLnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uYXBwZW5kQ2hpbGQoIHNvdXJjZSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWRlZGRhdGEnLCBvbmxvYWRlZGRhdGEuYmluZCggdGhpcyApICk7XHJcblx0XHRcclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAndGltZXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9Qcm9ncmVzcyA9IHZpZGVvLmR1cmF0aW9uID49IDAgPyB2aWRlby5jdXJyZW50VGltZSAvIHZpZGVvLmR1cmF0aW9uIDogMDtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ29uVmlkZW9VcGRhdGUnXHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdmlkZW8gcHJvZ3Jlc3MuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ29uVmlkZW9VcGRhdGUnLCBkYXRhOiB0aGlzLnZpZGVvUHJvZ3Jlc3MgfSApO1xyXG5cclxuICAgICAgICB9LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCAnZW5kZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICBpZiAoICFsb29wICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRWaWRlbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbicsIGRhdGE6IHRydWUgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LmJpbmQoIHRoaXMgKSwgZmFsc2UgKTsgXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB2aWRlbyB0ZXh0dXJlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvICAtIFRoZSBodG1sNSB2aWRlbyBlbGVtZW50XHJcbiAgICAgKiBAZmlyZXMgUGFub3JhbWEjcGFub2xlbnMtdmlld2VyLWhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgc2V0VmlkZW9UZXh0dXJlOiBmdW5jdGlvbiAoIHZpZGVvICkge1xyXG5cclxuICAgICAgICBpZiAoICF2aWRlbyApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW9UZXh0dXJlID0gbmV3IFRIUkVFLlZpZGVvVGV4dHVyZSggdmlkZW8gKTtcclxuICAgICAgICB2aWRlb1RleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHZpZGVvVGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdmlkZW9UZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVUZXh0dXJlKCB2aWRlb1RleHR1cmUgKTtcclxuXHRcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldFxyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IHVuZGVmaW5lZDtcdFxyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUucmVzZXQuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB2aWRlbyBpcyBwYXVzZWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gaXMgdmlkZW8gcGF1c2VkIG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBpc1ZpZGVvUGF1c2VkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvRWxlbWVudC5wYXVzZWQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSB2aWRlbyB0byBwbGF5IG9yIHBhdXNlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggIXZpZGVvICkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdmlkZW9bIHZpZGVvLnBhdXNlZCA/ICdwbGF5JyA6ICdwYXVzZScgXSgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdmlkZW8gY3VycmVudFRpbWVcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIEV2ZW50IGNvbnRhaW5zIHBlcmNlbnRhZ2UuIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICovXHJcbiAgICBzZXRWaWRlb0N1cnJlbnRUaW1lOiBmdW5jdGlvbiAoIHsgcGVyY2VudGFnZSB9ICkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICYmICFOdW1iZXIuaXNOYU4oIHBlcmNlbnRhZ2UgKSAmJiBwZXJjZW50YWdlICE9PSAxICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB2aWRlby5kdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAnb25WaWRlb1VwZGF0ZScsIGRhdGE6IHBlcmNlbnRhZ2UgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXkgdmlkZW9cclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BsYXlcclxuICAgICAqIEBmaXJlcyBWaWRlb1Bhbm9yYW1hI3BsYXktZXJyb3JcclxuICAgICAqL1xyXG4gICAgcGxheVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcGxheVZpZGVvID0gdGhpcy5wbGF5VmlkZW8uYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCggdGhpcyApO1xyXG4gICAgICAgIGNvbnN0IG9uU3VjY2VzcyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBQbGF5IGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BsYXlcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BsYXknIH0gKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvbkVycm9yID0gKCBlcnJvciApID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIEVycm9yIHBsYXlpbmcgdmlkZW8uIFJldHJ5IG5leHQgZnJhbWUuIFBvc3NpYmx5IFdhaXRpbmcgZm9yIHVzZXIgaW50ZXJhY3Rpb25cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcGxheVZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogUGxheSBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgVmlkZW9QYW5vcmFtYSNwbGF5LWVycm9yXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwbGF5LWVycm9yJywgZXJyb3IgfSApO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICYmIHZpZGVvLnBhdXNlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKS50aGVuKCBvblN1Y2Nlc3MgKS5jYXRjaCggb25FcnJvciApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhdXNlIHZpZGVvXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlkZW9QYW5vcmFtYSNwYXVzZVxyXG4gICAgICovXHJcbiAgICBwYXVzZVZpZGVvOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8gJiYgIXZpZGVvLnBhdXNlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUGF1c2UgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWRlb1Bhbm9yYW1hI3BhdXNlXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3BhdXNlJyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3VtZSB2aWRlb1xyXG4gICAgICogQG1lbWJlck9mIFZpZGVvUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZXN1bWVWaWRlb1Byb2dyZXNzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvID0gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ucmVhZHlTdGF0ZSA+PSA0ICYmIHZpZGVvLmF1dG9wbGF5ICYmICF0aGlzLmlzTW9iaWxlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBsYXlWaWRlbygpO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFZpZXdlciBoYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZXRob2QgLSAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJ1xyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgLSBQYXVzZSB2aWRlbyBvciBub3RcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICd1cGRhdGVWaWRlb1BsYXlCdXR0b24nLCBkYXRhOiBmYWxzZSB9ICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBWaWV3ZXIgaGFuZGxlciBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gbWV0aG9kIC0gJ3VwZGF0ZVZpZGVvUGxheUJ1dHRvbidcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBkYXRhIC0gUGF1c2UgdmlkZW8gb3Igbm90XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgbWV0aG9kOiAndXBkYXRlVmlkZW9QbGF5QnV0dG9uJywgZGF0YTogdHJ1ZSB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lKCB7IHBlcmNlbnRhZ2U6IHRoaXMudmlkZW9Qcm9ncmVzcyB9ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHZpZGVvIGF0IHN0YXRpbmcgcG9pbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVzZXRWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lKCB7IHBlcmNlbnRhZ2U6IDAgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHZpZGVvIGlzIG11dGVkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAtIGlzIHZpZGVvIG11dGVkIG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBpc1ZpZGVvTXV0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9FbGVtZW50Lm11dGVkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNdXRlIHZpZGVvXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG11dGVWaWRlbzogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlbyA9IHRoaXMudmlkZW9FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvICYmICF2aWRlby5tdXRlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZvbHVtZWNoYW5nZScgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbm11dGUgdmlkZW9cclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdW5tdXRlVmlkZW86IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW8gPSB0aGlzLnZpZGVvRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlbyAmJiB0aGlzLmlzVmlkZW9NdXRlZCgpICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZvbHVtZWNoYW5nZScgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2aWRlbyBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlkZW9QYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGdldFZpZGVvRWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb0VsZW1lbnQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgdmlkZW8gcGFub3JhbWFcclxuICAgICAqIEBtZW1iZXJPZiBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IG1hdGVyaWFsOiB7IG1hcCB9IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlVmlkZW8oKTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xlYXZlJywgdGhpcy5wYXVzZVZpZGVvLmJpbmQoIHRoaXMgKSApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnJlc3VtZVZpZGVvUHJvZ3Jlc3MuYmluZCggdGhpcyApICk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCAndmlkZW8tdG9nZ2xlJywgdGhpcy50b2dnbGVWaWRlby5iaW5kKCB0aGlzICkgKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd2aWRlby10aW1lJywgdGhpcy5zZXRWaWRlb0N1cnJlbnRUaW1lLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICBpZiAoIG1hcCApIHsgbWFwLmRpc3Bvc2UoKTsgfVxyXG5cclxuICAgICAgICBQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgVmlkZW9QYW5vcmFtYSB9OyIsIlxyXG5pbXBvcnQgeyBUZXh0dXJlTG9hZGVyIH0gZnJvbSAnLi9UZXh0dXJlTG9hZGVyJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBTdHJlZXQgVmlldyBMb2FkZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbWV0ZXJzIFxyXG4gKi9cclxuZnVuY3Rpb24gR29vZ2xlU3RyZWV0dmlld0xvYWRlciAoIHBhcmFtZXRlcnMgPSB7fSApIHtcclxuXHJcbiAgICB0aGlzLl9wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcclxuICAgIHRoaXMuX3pvb20gPSBudWxsO1xyXG4gICAgdGhpcy5fcGFub0lkID0gbnVsbDtcclxuICAgIHRoaXMuX3Bhbm9DbGllbnQgPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1NlcnZpY2UoKTtcclxuICAgIHRoaXMuX2NvdW50ID0gMDtcclxuICAgIHRoaXMuX3RvdGFsID0gMDtcclxuICAgIHRoaXMuX2NhbnZhcyA9IFtdO1xyXG4gICAgdGhpcy5fY3R4ID0gW107XHJcbiAgICB0aGlzLl93YyA9IDA7XHJcbiAgICB0aGlzLl9oYyA9IDA7XHJcbiAgICB0aGlzLnJlc3VsdCA9IG51bGw7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgIHRoaXMuY29weXJpZ2h0ID0gJyc7XHJcbiAgICB0aGlzLm9uU2l6ZUNoYW5nZSA9IG51bGw7XHJcbiAgICB0aGlzLm9uUGFub3JhbWFMb2FkID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmxldmVsc1cgPSBbIDEsIDIsIDQsIDcsIDEzLCAyNiBdO1xyXG4gICAgdGhpcy5sZXZlbHNIID0gWyAxLCAxLCAyLCA0LCA3LCAxMyBdO1xyXG5cclxuICAgIHRoaXMud2lkdGhzID0gWyA0MTYsIDgzMiwgMTY2NCwgMzMyOCwgNjY1NiwgMTMzMTIgXTtcclxuICAgIHRoaXMuaGVpZ2h0cyA9IFsgNDE2LCA0MTYsIDgzMiwgMTY2NCwgMzMyOCwgNjY1NiBdO1xyXG5cclxuICAgIHRoaXMubWF4VyA9IDY2NTY7XHJcbiAgICB0aGlzLm1heEggPSA2NjU2O1xyXG5cclxuICAgIGxldCBnbDtcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgICAgICBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJyApO1xyXG5cclxuICAgICAgICBpZiggIWdsICkge1xyXG5cclxuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCggJ3dlYmdsJyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlcnJvciApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tYXhXID0gTWF0aC5tYXgoIGdsLmdldFBhcmFtZXRlciggZ2wuTUFYX1RFWFRVUkVfU0laRSApLCB0aGlzLm1heFcgKTtcclxuICAgIHRoaXMubWF4SCA9IE1hdGgubWF4KCBnbC5nZXRQYXJhbWV0ZXIoIGdsLk1BWF9URVhUVVJFX1NJWkUgKSwgdGhpcy5tYXhIICk7XHJcblxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKCBHb29nbGVTdHJlZXR2aWV3TG9hZGVyLnByb3RvdHlwZSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHByb2dyZXNzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbG9hZGVkIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsIFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRQcm9ncmVzczogZnVuY3Rpb24gKCBsb2FkZWQsIHRvdGFsICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMub25Qcm9ncmVzcyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25Qcm9ncmVzcyggeyBsb2FkZWQ6IGxvYWRlZCwgdG90YWw6IHRvdGFsIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRhcHQgdGV4dHVyZSB0byB6b29tXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkYXB0VGV4dHVyZVRvWm9vbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB3ID0gdGhpcy53aWR0aHMgWyB0aGlzLl96b29tIF07XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0c1sgdGhpcy5fem9vbSBdO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhXID0gdGhpcy5tYXhXO1xyXG4gICAgICAgIGNvbnN0IG1heEggPSB0aGlzLm1heEg7XHJcblxyXG4gICAgICAgIHRoaXMuX3djID0gTWF0aC5jZWlsKCB3IC8gbWF4VyApO1xyXG4gICAgICAgIHRoaXMuX2hjID0gTWF0aC5jZWlsKCBoIC8gbWF4SCApO1xyXG5cclxuICAgICAgICBmb3IoIGxldCB5ID0gMDsgeSA8IHRoaXMuX2hjOyB5KysgKSB7XHJcbiAgICAgICAgICAgIGZvciggbGV0IHggPSAwOyB4IDwgdGhpcy5fd2M7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG4gICAgICAgICAgICAgICAgaWYoIHggPCAoIHRoaXMuX3djIC0gMSApICkgYy53aWR0aCA9IG1heFc7IGVsc2UgYy53aWR0aCA9IHcgLSAoIG1heFcgKiB4ICk7XHJcbiAgICAgICAgICAgICAgICBpZiggeSA8ICggdGhpcy5faGMgLSAxICkgKSBjLmhlaWdodCA9IG1heEg7IGVsc2UgYy5oZWlnaHQgPSBoIC0gKCBtYXhIICogeSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FudmFzLnB1c2goIGMgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5wdXNoKCBjLmdldENvbnRleHQoICcyZCcgKSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wb3NlIGZyb20gdGlsZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBcclxuICAgICAqIEBwYXJhbSB7Kn0gdGV4dHVyZSBcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY29tcG9zZUZyb21UaWxlOiBmdW5jdGlvbiAoIHgsIHksIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1heFcgPSB0aGlzLm1heFc7XHJcbiAgICAgICAgY29uc3QgbWF4SCA9IHRoaXMubWF4SDtcclxuXHJcbiAgICAgICAgeCAqPSA1MTI7XHJcbiAgICAgICAgeSAqPSA1MTI7XHJcblxyXG4gICAgICAgIGNvbnN0IHB4ID0gTWF0aC5mbG9vciggeCAvIG1heFcgKTtcclxuICAgICAgICBjb25zdCBweSA9IE1hdGguZmxvb3IoIHkgLyBtYXhIICk7XHJcblxyXG4gICAgICAgIHggLT0gcHggKiBtYXhXO1xyXG4gICAgICAgIHkgLT0gcHkgKiBtYXhIO1xyXG5cclxuICAgICAgICB0aGlzLl9jdHhbIHB5ICogdGhpcy5fd2MgKyBweCBdLmRyYXdJbWFnZSggdGV4dHVyZSwgMCwgMCwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQsIHgsIHksIDUxMiwgNTEyICk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MoKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2dyZXNzXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld0xvYWRlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHByb2dyZXNzOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fY291bnQrKztcclxuXHRcdFxyXG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoIHRoaXMuX2NvdW50LCB0aGlzLl90b3RhbCApO1xyXG5cdFx0XHJcbiAgICAgICAgaWYgKCB0aGlzLl9jb3VudCA9PT0gdGhpcy5fdG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5fY2FudmFzO1xyXG4gICAgICAgICAgICB0aGlzLnBhbm9JZCA9IHRoaXMuX3Bhbm9JZDtcclxuICAgICAgICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbTtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5vblBhbm9yYW1hTG9hZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGFub3JhbWFMb2FkKCB0aGlzLl9jYW52YXNbIDAgXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcG9zZSBwYW5vcmFtYVxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdMb2FkZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjb21wb3NlUGFub3JhbWE6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyggMCwgMSApO1xyXG5cdFx0XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMubGV2ZWxzV1sgdGhpcy5fem9vbSBdO1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLmxldmVsc0hbIHRoaXMuX3pvb20gXTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHRcdFx0XHJcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsID0gdyAqIGg7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgdXNlV2ViR0wgfSA9IHRoaXMuX3BhcmFtZXRlcnM7XHJcblxyXG4gICAgICAgIGZvciggbGV0IHkgPSAwOyB5IDwgaDsgeSsrICkge1xyXG4gICAgICAgICAgICBmb3IoIGxldCB4ID0gMDsgeCA8IHc7IHgrKyApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICdodHRwczovL2dlbzAuZ2dwaHQuY29tL2Niaz9jYl9jbGllbnQ9bWFwc19zdi50YWN0aWxlJmF1dGh1c2VyPTAmaGw9ZW4mb3V0cHV0PXRpbGUmem9vbT0nICsgdGhpcy5fem9vbSArICcmeD0nICsgeCArICcmeT0nICsgeSArICcmcGFub2lkPScgKyB0aGlzLl9wYW5vSWQgKyAnJm5idCZmb3Zlcj0yJztcclxuICAgICAgICAgICAgICAgICggZnVuY3Rpb24oIHgsIHkgKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB1c2VXZWJHTCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IFRleHR1cmVMb2FkZXIubG9hZCggdXJsLCBudWxsLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZUZyb21UaWxlKCB4LCB5LCB0ZXh0dXJlICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbXBvc2VGcm9tVGlsZSggeCwgeSwgdGhpcyApO1x0XHRcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gKSggeCwgeSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhbm9pZCBcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZDogZnVuY3Rpb24gKCBwYW5vaWQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFBhbm8oIHBhbm9pZCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHBhbm9yYW1hXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgbG9hZFBhbm86IGZ1bmN0aW9uKCBpZCApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fcGFub0NsaWVudC5nZXRQYW5vcmFtYUJ5SWQoIGlkLCBmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1N0YXR1cy5PSykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvcHlyaWdodCA9IHJlc3VsdC5jb3B5cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9wYW5vSWQgPSByZXN1bHQubG9jYXRpb24ucGFubztcclxuICAgICAgICAgICAgICAgIHNlbGYuY29tcG9zZVBhbm9yYW1hKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB6b29tIGxldmVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geiBcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3TG9hZGVyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0Wm9vbTogZnVuY3Rpb24oIHogKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3pvb20gPSB6O1xyXG4gICAgICAgIHRoaXMuYWRhcHRUZXh0dXJlVG9ab29tKCk7XHJcbiAgICB9XHJcblx0XHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdMb2FkZXIgfTsiLCJpbXBvcnQgeyBJbWFnZVBhbm9yYW1hIH0gZnJvbSAnLi9JbWFnZVBhbm9yYW1hJztcclxuaW1wb3J0IHsgR29vZ2xlU3RyZWV0dmlld0xvYWRlciB9IGZyb20gJy4uL2xvYWRlcnMvR29vZ2xlU3RyZWV0dmlld0xvYWRlcic7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEdvb2dsZSBzdHJlZXR2aWV3IHBhbm9yYW1hXHJcbiAqIEBkZXNjcmlwdGlvbiBbSG93IHRvIGdldCBQYW5vcmFtYSBJRF17QGxpbmsgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTkxNjE0OS9nb29nbGUtbWFwcy1zdHJlZXR2aWV3LWhvdy10by1nZXQtcGFub3JhbWEtaWR9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFub0lkIC0gUGFub3JhbWEgaWQgZnJvbSBHb29nbGUgU3RyZWV0dmlldyBcclxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlLZXldIC0gR29vZ2xlIFN0cmVldCBWaWV3IEFQSSBLZXlcclxuICovXHJcbmZ1bmN0aW9uIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSAoIHBhbm9JZCwgYXBpS2V5ICkge1xyXG5cclxuICAgIEltYWdlUGFub3JhbWEuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIHRoaXMucGFub0lkID0gcGFub0lkO1xyXG5cclxuICAgIHRoaXMuZ3N2TG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldHVwR29vZ2xlTWFwQVBJKCBhcGlLZXkgKTtcclxuXHJcbn1cclxuXHJcbkdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYS5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZSApLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgR29vZ2xlIFN0cmVldCBWaWV3IGJ5IHBhbm9yYW1hIGlkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFub0lkIC0gR29nb2dsZSBTdHJlZXQgVmlldyBwYW5vcmFtYSBpZFxyXG4gICAgICogQG1lbWJlck9mIEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYVxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWQ6IGZ1bmN0aW9uICggcGFub0lkICkge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRSZXF1ZXN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBwYW5vSWQgPSAoIHBhbm9JZCB8fCB0aGlzLnBhbm9JZCApIHx8IHt9O1xyXG5cclxuICAgICAgICBpZiAoIHBhbm9JZCAmJiB0aGlzLmdzdkxvYWRlciApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZEdTVkxvYWRlciggcGFub0lkICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dXAgR29vZ2xlIE1hcCBBUElcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgYXBpS2V5XHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc2V0dXBHb29nbGVNYXBBUEk6IGZ1bmN0aW9uICggYXBpS2V5ICkge1xyXG5cclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xyXG4gICAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyc7XHJcbiAgICAgICAgc2NyaXB0LnNyYyArPSBhcGlLZXkgPyAna2V5PScgKyBhcGlLZXkgOiAnJztcclxuICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gdGhpcy5zZXRHU1ZMb2FkZXIuYmluZCggdGhpcyApO1xyXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSB0aGlzLnNldEdTVkxvYWRlci5iaW5kKCB0aGlzICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdoZWFkJyApLmFwcGVuZENoaWxkKCBzY3JpcHQgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IEdTViBMb2FkZXJcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRHU1ZMb2FkZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIgPSBuZXcgR29vZ2xlU3RyZWV0dmlld0xvYWRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMubG9hZFJlcXVlc3RlZCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBHU1YgTG9hZGVyXHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0dvb2dsZVN0cmVldHZpZXdMb2FkZXJ9IEdTViBMb2FkZXIgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0R1NWTG9hZGVyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdzdkxvYWRlcjtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBHU1YgTG9hZGVyXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHBhbm9JZCAtIEdvZ29nbGUgU3RyZWV0IFZpZXcgcGFub3JhbWEgaWRcclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBsb2FkR1NWTG9hZGVyOiBmdW5jdGlvbiAoIHBhbm9JZCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkUmVxdWVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZ3N2TG9hZGVyLm9uUHJvZ3Jlc3MgPSB0aGlzLm9uUHJvZ3Jlc3MuYmluZCggdGhpcyApO1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlci5vblBhbm9yYW1hTG9hZCA9IHRoaXMub25Mb2FkLmJpbmQoIHRoaXMgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIuc2V0Wm9vbSggdGhpcy5nZXRab29tTGV2ZWwoKSApO1xyXG5cclxuICAgICAgICB0aGlzLmdzdkxvYWRlci5sb2FkKCBwYW5vSWQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIubG9hZGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW4gcGFub3JhbWEgaXMgbG9hZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gQ2FudmFzIHdoZXJlIHRoZSB0aWxlcyBoYXZlIGJlZW4gZHJhd25cclxuICAgICAqIEBtZW1iZXJPZiBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICggY2FudmFzICkge1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgbmV3IFRIUkVFLlRleHR1cmUoIGNhbnZhcyApICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nc3ZMb2FkZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLnJlc2V0LmNhbGwoIHRoaXMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBHb29nbGVTdHJlZXR2aWV3UGFub3JhbWEgfTsiLCIvKipcclxuICogU3RlcmVvZ3JhcGhpYyBwcm9qZWN0aW9uIHNoYWRlclxyXG4gKiBiYXNlZCBvbiBodHRwOi8vbm90bGlvbi5naXRodWIuaW8vc3RyZWV0dmlldy1zdGVyZW9ncmFwaGljXHJcbiAqIEBhdXRob3IgcGNoZW42NlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gU3RlcmVvZ3JhaHBpYyBTaGFkZXJcclxuICogQG1vZHVsZSBTdGVyZW9ncmFwaGljU2hhZGVyXHJcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSB1bmlmb3Jtc1xyXG4gKiBAcHJvcGVydHkge1RIUkVFLlRleHR1cmV9IHVuaWZvcm1zLnREaWZmdXNlIGRpZmZ1c2UgbWFwXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmlmb3Jtcy5yZXNvbHV0aW9uIGltYWdlIHJlc29sdXRpb25cclxuICogQHByb3BlcnR5IHtUSFJFRS5NYXRyaXg0fSB1bmlmb3Jtcy50cmFuc2Zvcm0gdHJhbnNmb3JtYXRpb24gbWF0cml4XHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmlmb3Jtcy56b29tIGltYWdlIHpvb20gZmFjdG9yXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB1bmlmb3Jtcy5vcGFjaXR5IGltYWdlIG9wYWNpdHlcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnRleFNoYWRlciB2ZXJ0ZXggc2hhZGVyXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmcmFnbWVudFNoYWRlciBmcmFnbWVudCBzaGFkZXJcclxuICovXHJcbmNvbnN0IFN0ZXJlb2dyYXBoaWNTaGFkZXIgPSB7XHJcblxyXG4gICAgdW5pZm9ybXM6IHtcclxuXHJcbiAgICAgICAgJ3REaWZmdXNlJzogeyB2YWx1ZTogbmV3IFRIUkVFLlRleHR1cmUoKSB9LFxyXG4gICAgICAgICdyZXNvbHV0aW9uJzogeyB2YWx1ZTogMS4wIH0sXHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6IHsgdmFsdWU6IG5ldyBUSFJFRS5NYXRyaXg0KCkgfSxcclxuICAgICAgICAnem9vbSc6IHsgdmFsdWU6IDEuMCB9LFxyXG4gICAgICAgICdvcGFjaXR5JzogeyB2YWx1ZTogMS4wIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHZlcnRleFNoYWRlcjogW1xyXG5cclxuICAgICAgICAndmFyeWluZyB2ZWMyIHZVdjsnLFxyXG5cclxuICAgICAgICAndm9pZCBtYWluKCkgeycsXHJcblxyXG4gICAgICAgICd2VXYgPSB1djsnLFxyXG4gICAgICAgICdnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTsnLFxyXG5cclxuICAgICAgICAnfScgXHJcblxyXG4gICAgXS5qb2luKCAnXFxuJyApLFxyXG5cclxuICAgIGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG4gICAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTsnLFxyXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHJlc29sdXRpb247JyxcclxuICAgICAgICAndW5pZm9ybSBtYXQ0IHRyYW5zZm9ybTsnLFxyXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHpvb207JyxcclxuICAgICAgICAndW5pZm9ybSBmbG9hdCBvcGFjaXR5OycsXHJcblxyXG4gICAgICAgICd2YXJ5aW5nIHZlYzIgdlV2OycsXHJcblxyXG4gICAgICAgICdjb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzOycsXHJcblxyXG4gICAgICAgICd2b2lkIG1haW4oKXsnLFxyXG5cclxuICAgICAgICAndmVjMiBwb3NpdGlvbiA9IC0xLjAgKyAgMi4wICogdlV2OycsXHJcblxyXG4gICAgICAgICdwb3NpdGlvbiAqPSB2ZWMyKCB6b29tICogcmVzb2x1dGlvbiwgem9vbSAqIDAuNSApOycsXHJcblxyXG4gICAgICAgICdmbG9hdCB4MnkyID0gcG9zaXRpb24ueCAqIHBvc2l0aW9uLnggKyBwb3NpdGlvbi55ICogcG9zaXRpb24ueTsnLFxyXG4gICAgICAgICd2ZWMzIHNwaGVyZV9wbnQgPSB2ZWMzKCAyLiAqIHBvc2l0aW9uLCB4MnkyIC0gMS4gKSAvICggeDJ5MiArIDEuICk7JyxcclxuXHJcbiAgICAgICAgJ3NwaGVyZV9wbnQgPSB2ZWMzKCB0cmFuc2Zvcm0gKiB2ZWM0KCBzcGhlcmVfcG50LCAxLjAgKSApOycsXHJcblxyXG4gICAgICAgICd2ZWMyIHNhbXBsZVVWID0gdmVjMignLFxyXG4gICAgICAgICcoYXRhbihzcGhlcmVfcG50LnksIHNwaGVyZV9wbnQueCkgLyBQSSArIDEuMCkgKiAwLjUsJyxcclxuICAgICAgICAnKGFzaW4oc3BoZXJlX3BudC56KSAvIFBJICsgMC41KScsXHJcbiAgICAgICAgJyk7JyxcclxuXHJcbiAgICAgICAgJ2dsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHNhbXBsZVVWICk7JyxcclxuXHJcbiAgICAgICAgJ2dsX0ZyYWdDb2xvci5hICo9IG9wYWNpdHk7JyxcclxuXHJcbiAgICAgICAgJ30nXHJcblxyXG4gICAgXS5qb2luKCAnXFxuJyApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RlcmVvZ3JhcGhpY1NoYWRlciB9OyIsImltcG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL0ltYWdlUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBJbmZvc3BvdCB9IGZyb20gJy4uL2luZm9zcG90L0luZm9zcG90JztcclxuaW1wb3J0IHsgQ09OVFJPTFMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBTdGVyZW9ncmFwaGljU2hhZGVyIH0gZnJvbSAnLi4vc2hhZGVycy9TdGVyZW9ncmFwaGljU2hhZGVyJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgTGl0dGxlIFBsYW5ldFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHRcdC0gVHlwZSBvZiBsaXR0bGUgcGxhbmV0IGJhc2ljIGNsYXNzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHRcdC0gVVJMIGZvciB0aGUgaW1hZ2Ugc291cmNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xMDAwMF0gLSBTaXplIG9mIHBsYW5lIGdlb21ldHJ5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXHJcbiAqL1xyXG5mdW5jdGlvbiBMaXR0bGVQbGFuZXQgKCB0eXBlID0gJ2ltYWdlJywgc291cmNlLCBzaXplID0gMTAwMDAsIHJhdGlvID0gMC41ICkge1xyXG5cclxuICAgIGlmICggdHlwZSA9PT0gJ2ltYWdlJyApIHtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5jYWxsKCB0aGlzLCBzb3VyY2UsIHRoaXMuY3JlYXRlR2VvbWV0cnkoIHNpemUsIHJhdGlvICksIHRoaXMuY3JlYXRlTWF0ZXJpYWwoIHNpemUgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xyXG4gICAgdGhpcy5FUFMgPSAwLjAwMDAwMTtcclxuICAgIHRoaXMuZnJhbWVJZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgdGhpcy51c2VyTW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuICAgIHRoaXMucXVhdEEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4gICAgdGhpcy5xdWF0QiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbiAgICB0aGlzLnF1YXRDdXIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG4gICAgdGhpcy5xdWF0U2xlcnAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICAgIHRoaXMudmVjdG9yWCA9IG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAwLCAwICk7XHJcbiAgICB0aGlzLnZlY3RvclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggJ3dpbmRvdy1yZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplICk7XHJcblxyXG59XHJcblxyXG5MaXR0bGVQbGFuZXQucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBMaXR0bGVQbGFuZXQsXHJcblxyXG4gICAgYWRkOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkgKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoIGFyZ3VtZW50c1sgaSBdICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIEluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0Lm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xyXG5cdFx0XHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLmFkZC5jYWxsKCB0aGlzLCBvYmplY3QgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZUdlb21ldHJ5OiBmdW5jdGlvbiAoIHNpemUsIHJhdGlvICkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIHNpemUsIHNpemUgKiByYXRpbyApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlTWF0ZXJpYWw6IGZ1bmN0aW9uICggc2l6ZSApIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gT2JqZWN0LmFzc2lnbigge30sIFN0ZXJlb2dyYXBoaWNTaGFkZXIgKSwgdW5pZm9ybXMgPSBzaGFkZXIudW5pZm9ybXM7XHJcblxyXG4gICAgICAgIHVuaWZvcm1zLnpvb20udmFsdWUgPSBzaXplO1xyXG4gICAgICAgIHVuaWZvcm1zLm9wYWNpdHkudmFsdWUgPSAwLjA7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgICAgIHVuaWZvcm1zOiB1bmlmb3JtcyxcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgICAgICBzaWRlOiBUSFJFRS5CYWNrU2lkZSxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWVcclxuXHJcbiAgICAgICAgfSApO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZ2lzdGVyTW91c2VFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIHRoaXMub25Nb3VzZVdoZWVsLmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgdGhpcy5vbkNvbnRleHRNZW51LmJpbmQoIHRoaXMgKSwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuXHRcdFxyXG4gICAgfSxcclxuXHJcbiAgICB1bnJlZ2lzdGVyTW91c2VFdmVudHM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24uYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCB0aGlzLm9uTW91c2VVcC5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5vbk1vdXNlV2hlZWwuYmluZCggdGhpcyApLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIHRoaXMub25Db250ZXh0TWVudS5iaW5kKCB0aGlzICksIGZhbHNlICk7XHJcblx0XHRcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q291bnQgPSAoIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggKSB8fCAxIDtcclxuXHJcbiAgICAgICAgc3dpdGNoICggaW5wdXRDb3VudCApIHtcclxuXHJcbiAgICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9ICggZXZlbnQuY2xpZW50WCA+PSAwICkgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoIGV2ZW50LmNsaWVudFkgPj0gMCApID8gZXZlbnQuY2xpZW50WSA6IGV2ZW50LnRvdWNoZXNbIDAgXS5jbGllbnRZO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnNldCggeCwgeSApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnBpbmNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRDb3VudCA9ICggZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCApIHx8IDEgO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBpbnB1dENvdW50ICkge1xyXG5cclxuICAgICAgICBjYXNlIDE6XHJcblxyXG4gICAgICAgICAgICBjb25zdCB4ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWyAwIF0uY2xpZW50WDtcclxuICAgICAgICAgICAgY29uc3QgeSA9ICggZXZlbnQuY2xpZW50WSA+PSAwICkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1sgMCBdLmNsaWVudFk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbmdsZVggPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCB4IC0gdGhpcy51c2VyTW91c2UueCApICogMC40O1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZVkgPSBUSFJFRS5NYXRoLmRlZ1RvUmFkKCB5IC0gdGhpcy51c2VyTW91c2UueSApICogMC40O1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmRyYWdnaW5nICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0QS5zZXRGcm9tQXhpc0FuZ2xlKCB0aGlzLnZlY3RvclksIGFuZ2xlWCApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0Qi5zZXRGcm9tQXhpc0FuZ2xlKCB0aGlzLnZlY3RvclgsIGFuZ2xlWSApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWF0Q3VyLm11bHRpcGx5KCB0aGlzLnF1YXRBICkubXVsdGlwbHkoIHRoaXMucXVhdEIgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlck1vdXNlLnNldCggeCwgeSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAyOlxyXG5cclxuICAgICAgICAgICAgY29uc3QgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkWm9vbURlbHRhKCB0aGlzLnVzZXJNb3VzZS5waW5jaERpc3RhbmNlIC0gZGlzdGFuY2UgKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlV2hlZWw6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCBkZWx0YSA9IDA7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQud2hlZWxEZWx0YSAhPT0gdW5kZWZpbmVkICkgeyAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcclxuXHJcbiAgICAgICAgICAgIGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuZGV0YWlsICE9PSB1bmRlZmluZWQgKSB7IC8vIEZpcmVmb3hcclxuXHJcbiAgICAgICAgICAgIGRlbHRhID0gLSBldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRab29tRGVsdGEoIGRlbHRhICk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRab29tRGVsdGE6IGZ1bmN0aW9uICggZGVsdGEgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0gdGhpcy5tYXRlcmlhbC51bmlmb3JtcztcclxuICAgICAgICBjb25zdCBsb3dlckJvdW5kID0gdGhpcy5zaXplICogMC4xO1xyXG4gICAgICAgIGNvbnN0IHVwcGVyQm91bmQgPSB0aGlzLnNpemUgKiAxMDtcclxuXHJcbiAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSArPSBkZWx0YTtcclxuXHJcbiAgICAgICAgaWYgKCB1bmlmb3Jtcy56b29tLnZhbHVlIDw9IGxvd2VyQm91bmQgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmlmb3Jtcy56b29tLnZhbHVlID0gbG93ZXJCb3VuZDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggdW5pZm9ybXMuem9vbS52YWx1ZSA+PSB1cHBlckJvdW5kICkge1xyXG5cclxuICAgICAgICAgICAgdW5pZm9ybXMuem9vbS52YWx1ZSA9IHVwcGVyQm91bmQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uVXBkYXRlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5vblVwZGF0ZUNhbGxiYWNrLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICB0aGlzLnF1YXRTbGVycC5zbGVycCggdGhpcy5xdWF0Q3VyLCAwLjEgKTtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm1hdGVyaWFsICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50cmFuc2Zvcm0udmFsdWUubWFrZVJvdGF0aW9uRnJvbVF1YXRlcm5pb24oIHRoaXMucXVhdFNsZXJwICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoICF0aGlzLmRyYWdnaW5nICYmIDEuMCAtIHRoaXMucXVhdFNsZXJwLmNsb25lKCkuZG90KCB0aGlzLnF1YXRDdXIgKSA8IHRoaXMuRVBTICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLmZyYW1lSWQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5xdWF0Q3VyLnNldCggMCwgMCwgMCwgMSApO1xyXG4gICAgICAgIHRoaXMucXVhdFNsZXJwLnNldCggMCwgMCwgMCwgMSApO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZSA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCBtZXRob2Q6ICdkaXNhYmxlQ29udHJvbCcgfSApO1xyXG5cclxuICAgICAgICBJbWFnZVBhbm9yYW1hLnByb3RvdHlwZS5vbkxvYWQuY2FsbCggdGhpcywgdGV4dHVyZSApO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTGVhdmU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwYW5vbGVucy12aWV3ZXItaGFuZGxlcicsIG1ldGhvZDogJ2VuYWJsZUNvbnRyb2wnLCBkYXRhOiBDT05UUk9MUy5PUkJJVCB9ICk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5mcmFtZUlkICk7XHJcblxyXG4gICAgICAgIEltYWdlUGFub3JhbWEucHJvdG90eXBlLm9uTGVhdmUuY2FsbCggdGhpcyApO1xyXG5cdFx0XHJcbiAgICB9LFxyXG5cclxuICAgIG9uV2luZG93UmVzaXplOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZSA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Db250ZXh0TWVudTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHRcclxuXHJcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyTW91c2VFdmVudHMoKTtcclxuXHJcbiAgICAgICAgSW1hZ2VQYW5vcmFtYS5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKCB0aGlzICk7XHJcblxyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgeyBMaXR0bGVQbGFuZXQgfTsiLCJpbXBvcnQgeyBMaXR0bGVQbGFuZXQgfSBmcm9tICcuL0xpdHRsZVBsYW5ldCc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIEltYWdlIExpdHRsZSBQbGFuZXRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHRcdC0gVVJMIGZvciB0aGUgaW1hZ2Ugc291cmNlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT0xMDAwMF0gLSBTaXplIG9mIHBsYW5lIGdlb21ldHJ5XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcmF0aW89MC41XSAgLSBSYXRpbyBvZiBwbGFuZSBnZW9tZXRyeSdzIGhlaWdodCBhZ2FpbnN0IHdpZHRoXHJcbiAqL1xyXG5mdW5jdGlvbiBJbWFnZUxpdHRsZVBsYW5ldCAoIHNvdXJjZSwgc2l6ZSwgcmF0aW8gKSB7XHJcblxyXG4gICAgTGl0dGxlUGxhbmV0LmNhbGwoIHRoaXMsICdpbWFnZScsIHNvdXJjZSwgc2l6ZSwgcmF0aW8gKTtcclxuXHJcbn1cclxuXHJcbkltYWdlTGl0dGxlUGxhbmV0LnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIExpdHRsZVBsYW5ldC5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBJbWFnZUxpdHRsZVBsYW5ldCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGxvYWRlZCB3aXRoIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVGV4dHVyZX0gdGV4dHVyZVxyXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSggdGV4dHVyZSApO1xyXG5cclxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLm9uTG9hZC5jYWxsKCB0aGlzLCB0ZXh0dXJlICk7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5UZXh0dXJlfSB0ZXh0dXJlIFxyXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgdXBkYXRlVGV4dHVyZTogZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xyXG5cclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtc1sgJ3REaWZmdXNlJyBdLnZhbHVlID0gdGV4dHVyZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZVxyXG4gICAgICogQG1lbWJlck9mIEltYWdlTGl0dGxlUGxhbmV0XHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB0RGlmZnVzZSA9IHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbICd0RGlmZnVzZScgXTtcclxuXHJcbiAgICAgICAgaWYgKCB0RGlmZnVzZSAmJiB0RGlmZnVzZS52YWx1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHREaWZmdXNlLnZhbHVlLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMaXR0bGVQbGFuZXQucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCggdGhpcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IEltYWdlTGl0dGxlUGxhbmV0IH07IiwiaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL1Bhbm9yYW1hJztcclxuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuLi9tZWRpYS9NZWRpYSc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIENhbWVyYSBwYW5vcmFtYVxyXG4gKiBAZGVzY3JpcHRpb24gU2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFTdHJlYW1Db25zdHJhaW50c3xNZWRpYVN0cmVhbUNvbnN0cmFpbnRzfSBmb3IgY29uc3RyYWludHNcclxuICogQHBhcmFtIHtvYmplY3R9IC0gY2FtZXJhIGNvbnN0cmFpbnRzXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gQ2FtZXJhUGFub3JhbWEgKCBjb25zdHJhaW50cyApIHtcclxuXHJcbiAgICBjb25zdCByYWRpdXMgPSA1MDAwO1xyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoIHJhZGl1cywgNjAsIDQwICk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyB2aXNpYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICBQYW5vcmFtYS5jYWxsKCB0aGlzLCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHJcbiAgICB0aGlzLm1lZGlhID0gbmV3IE1lZGlhKCBjb25zdHJhaW50cyApO1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXInLCB0aGlzLnN0YXJ0LmJpbmQoIHRoaXMgKSApO1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCB0aGlzLnN0b3AuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1jb250YWluZXInLCB0aGlzLm9uUGFub2xlbnNDb250YWluZXIuYmluZCggdGhpcyApICk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoICdwYW5vbGVucy1zY2VuZScsIHRoaXMub25QYW5vbGVuc1NjZW5lLmJpbmQoIHRoaXMgKSApO1xyXG5cclxufVxyXG5cclxuQ2FtZXJhUGFub3JhbWEucHJvdG90eXBlID0gT2JqZWN0LmFzc2lnbiggT2JqZWN0LmNyZWF0ZSggUGFub3JhbWEucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogQ2FtZXJhUGFub3JhbWEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBjb250YWluZXIgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudFxyXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25QYW5vbGVuc0NvbnRhaW5lcjogZnVuY3Rpb24gKCB7IGNvbnRhaW5lciB9ICkge1xyXG5cclxuICAgICAgICB0aGlzLm1lZGlhLnNldENvbnRhaW5lciggY29udGFpbmVyICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHNjZW5lIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvblBhbm9sZW5zU2NlbmU6IGZ1bmN0aW9uICggeyBzY2VuZSB9ICkge1xyXG5cclxuICAgICAgICB0aGlzLm1lZGlhLnNldFNjZW5lKCBzY2VuZSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBjYW1lcmEgc3RyZWFtaW5nXHJcbiAgICAgKiBAbWVtYmVyT2YgQ2FtZXJhUGFub3JhbWFcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhLnN0YXJ0KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3AgY2FtZXJhIHN0cmVhbWluZ1xyXG4gICAgICogQG1lbWJlck9mIENhbWVyYVBhbm9yYW1hXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1lZGlhLnN0b3AoKTtcclxuXHJcbiAgICB9LFxyXG5cclxufSApO1xyXG5cclxuZXhwb3J0IHsgQ2FtZXJhUGFub3JhbWEgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBPcmJpdCBDb250cm9sc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGV4dGVybmFsIE9yYml0Q29udHJvbHNcclxuICogQHBhcmFtIHtUSFJFRS5PYmplY3R9IG9iamVjdCBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZG9tRWxlbWVudCBcclxuICovXHJcbmZ1bmN0aW9uIE9yYml0Q29udHJvbHMgKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XHJcblxyXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xyXG4gICAgdGhpcy5mcmFtZUlkID0gbnVsbDtcclxuXHJcbiAgICAvLyBBUElcclxuXHJcbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLypcclxuICAgICAqIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBjb250cm9sIG9yYml0cyBhcm91bmRcclxuICAgICAqIGFuZCB3aGVyZSBpdCBwYW5zIHdpdGggcmVzcGVjdCB0by5cclxuICAgICAqL1xyXG4gICAgdGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIC8vIGNlbnRlciBpcyBvbGQsIGRlcHJlY2F0ZWQ7IHVzZSBcInRhcmdldFwiIGluc3RlYWRcclxuICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgLypcclxuICAgICAqIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3JcclxuICAgICAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcbiAgICAgKi9cclxuICAgIHRoaXMubm9ab29tID0gZmFsc2U7XHJcbiAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcclxuXHJcbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcclxuICAgIHRoaXMubWluRGlzdGFuY2UgPSAwO1xyXG4gICAgdGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIC8vIExpbWl0cyB0byBob3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxyXG4gICAgdGhpcy5taW5ab29tID0gMDtcclxuICAgIHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xyXG5cclxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcbiAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLnJvdGF0ZVNwZWVkID0gLTAuMTU7XHJcblxyXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuICAgIHRoaXMubm9QYW4gPSB0cnVlO1xyXG4gICAgdGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcclxuXHJcbiAgICAvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxyXG4gICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcclxuXHJcbiAgICAvKlxyXG4gICAgICogSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXHJcbiAgICAgKiBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xyXG4gICAgdGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xyXG5cclxuICAgIC8vIE1vbWVudHVtXHJcbiAgXHR0aGlzLm1vbWVudHVtRGFtcGluZ0ZhY3RvciA9IDAuOTA7XHJcbiAgXHR0aGlzLm1vbWVudHVtU2NhbGluZ0ZhY3RvciA9IC0wLjAwNTtcclxuICBcdHRoaXMubW9tZW50dW1LZXlkb3duRmFjdG9yID0gMjA7XHJcblxyXG4gIFx0Ly8gRm92XHJcbiAgXHR0aGlzLm1pbkZvdiA9IDMwO1xyXG4gIFx0dGhpcy5tYXhGb3YgPSAxMjA7XHJcblxyXG4gICAgLypcclxuICAgICAqIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXHJcbiAgICAgKiBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXHJcbiAgICAgKi9cclxuICAgIHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xyXG4gICAgdGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xyXG5cclxuICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXHJcbiAgICB0aGlzLm5vS2V5cyA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFRoZSBmb3VyIGFycm93IGtleXNcclxuICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XHJcblxyXG4gICAgLy8gTW91c2UgYnV0dG9uc1xyXG4gICAgdGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogLy8vLy8vLy8vL1xyXG4gICAgICogaW50ZXJuYWxzXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgIHZhciBFUFMgPSAxMGUtODtcclxuICAgIHZhciBNRVBTID0gMTBlLTU7XHJcblxyXG4gICAgdmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB2YXIgdGhldGEgPSAwO1xyXG4gICAgdmFyIHBoaSA9IDA7XHJcbiAgICB2YXIgcGhpRGVsdGEgPSAwO1xyXG4gICAgdmFyIHRoZXRhRGVsdGEgPSAwO1xyXG4gICAgdmFyIHNjYWxlID0gMTtcclxuICAgIHZhciBwYW4gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgdmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcbiAgICB2YXIgbW9tZW50dW1MZWZ0ID0gMCwgbW9tZW50dW1VcCA9IDA7XHJcbiAgICB2YXIgZXZlbnRQcmV2aW91cztcclxuICAgIHZhciBtb21lbnR1bU9uID0gZmFsc2U7XHJcblxyXG4gICAgdmFyIGtleVVwLCBrZXlCb3R0b20sIGtleUxlZnQsIGtleVJpZ2h0O1xyXG5cclxuICAgIHZhciBTVEFURSA9IHsgTk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1IH07XHJcblxyXG4gICAgdmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICAvLyBmb3IgcmVzZXRcclxuXHJcbiAgICB0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xyXG4gICAgdGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgdGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XHJcblxyXG4gICAgLy8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXHJcblxyXG4gICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XHJcbiAgICB2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuICAgIC8vIGV2ZW50c1xyXG5cclxuICAgIHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcclxuICAgIHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XHJcbiAgICB2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XHJcblxyXG4gICAgdGhpcy5zZXRMYXN0UXVhdGVybmlvbiA9IGZ1bmN0aW9uICggcXVhdGVybmlvbiApIHtcclxuICAgICAgICBsYXN0UXVhdGVybmlvbi5jb3B5KCBxdWF0ZXJuaW9uICk7XHJcbiAgICAgICAgc2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSggcXVhdGVybmlvbiApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldExhc3RQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbGFzdFBvc2l0aW9uO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJvdGF0ZUxlZnQgPSBmdW5jdGlvbiAoIGFuZ2xlICkge1xyXG5cclxuICAgICAgICBpZiAoIGFuZ2xlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBhbmdsZSA9IGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhldGFEZWx0YSAtPSBhbmdsZTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBoaURlbHRhIC09IGFuZ2xlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcclxuICAgIHRoaXMucGFuTGVmdCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcclxuXHJcbiAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxyXG4gICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyAwIF0sIHRlWyAxIF0sIHRlWyAyIF0gKTtcclxuICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcclxuXHJcbiAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcclxuICAgIHRoaXMucGFuVXAgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xyXG5cclxuICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XHJcblxyXG4gICAgICAgIC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcclxuICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgNCBdLCB0ZVsgNSBdLCB0ZVsgNiBdICk7XHJcbiAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xyXG5cclxuICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBwYXNzIGluIHgseSBvZiBjaGFuZ2UgZGVzaXJlZCBpbiBwaXhlbCBzcGFjZSxcclxuICAgICAqIHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLnBhbiA9IGZ1bmN0aW9uICggZGVsdGFYLCBkZWx0YVkgKSB7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgLy8gcGVyc3BlY3RpdmVcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cclxuICAgICAgICAgICAgdGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xyXG5cclxuICAgICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxyXG4gICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xyXG4gICAgICAgICAgICBzY29wZS5wYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgLy8gb3J0aG9ncmFwaGljXHJcbiAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIGRlbHRhWCAqIChzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCkgLyBlbGVtZW50LmNsaWVudFdpZHRoICk7XHJcbiAgICAgICAgICAgIHNjb3BlLnBhblVwKCBkZWx0YVkgKiAoc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20pIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vbWVudHVtID0gZnVuY3Rpb24oKXtcclxuXHRcdFxyXG4gICAgICAgIGlmICggIW1vbWVudHVtT24gKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIG1vbWVudHVtTGVmdCApIDwgTUVQUyAmJiBNYXRoLmFicyggbW9tZW50dW1VcCApIDwgTUVQUyApIHsgXHJcblxyXG4gICAgICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7IFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtb21lbnR1bVVwICAgKj0gdGhpcy5tb21lbnR1bURhbXBpbmdGYWN0b3I7XHJcbiAgICAgICAgbW9tZW50dW1MZWZ0ICo9IHRoaXMubW9tZW50dW1EYW1waW5nRmFjdG9yO1xyXG5cclxuICAgICAgICB0aGV0YURlbHRhIC09IHRoaXMubW9tZW50dW1TY2FsaW5nRmFjdG9yICogbW9tZW50dW1MZWZ0O1xyXG4gICAgICAgIHBoaURlbHRhICAgLT0gdGhpcy5tb21lbnR1bVNjYWxpbmdGYWN0b3IgKiBtb21lbnR1bVVwO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kb2xseUluID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xyXG5cclxuICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgc2NhbGUgLz0gZG9sbHlTY2FsZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xyXG5cclxuICAgICAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggdGhpcy5taW5ab29tLCBNYXRoLm1pbiggdGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIHNjYWxlICo9IGRvbGx5U2NhbGU7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHRoaXMubWluWm9vbSwgTWF0aC5taW4oIHRoaXMubWF4Wm9vbSwgdGhpcy5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCBpZ25vcmVVcGRhdGUgKSB7XHJcblxyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMub2JqZWN0LnBvc2l0aW9uO1xyXG5cclxuICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XHJcblxyXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxyXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcclxuXHJcbiAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xyXG5cclxuICAgICAgICB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xyXG5cclxuICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xyXG5cclxuICAgICAgICBwaGkgPSBNYXRoLmF0YW4yKCBNYXRoLnNxcnQoIG9mZnNldC54ICogb2Zmc2V0LnggKyBvZmZzZXQueiAqIG9mZnNldC56ICksIG9mZnNldC55ICk7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb21lbnR1bSgpO1xyXG5cclxuICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xyXG4gICAgICAgIHBoaSArPSBwaGlEZWx0YTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gICAgICAgIHRoZXRhID0gTWF0aC5tYXgoIHRoaXMubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhBemltdXRoQW5nbGUsIHRoZXRhICkgKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuICAgICAgICBwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xyXG5cclxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXHJcbiAgICAgICAgcGhpID0gTWF0aC5tYXgoIEVQUywgTWF0aC5taW4oIE1hdGguUEkgLSBFUFMsIHBoaSApICk7XHJcblxyXG4gICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuICAgICAgICByYWRpdXMgPSBNYXRoLm1heCggdGhpcy5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHRoaXMubWF4RGlzdGFuY2UsIHJhZGl1cyApICk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XHJcblxyXG4gICAgICAgIG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4oIHBoaSApICogTWF0aC5zaW4oIHRoZXRhICk7XHJcbiAgICAgICAgb2Zmc2V0LnkgPSByYWRpdXMgKiBNYXRoLmNvcyggcGhpICk7XHJcbiAgICAgICAgb2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcclxuXHJcbiAgICAgICAgLy8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXHJcbiAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb24uY29weSggdGhpcy50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xyXG5cclxuICAgICAgICB0aGlzLm9iamVjdC5sb29rQXQoIHRoaXMudGFyZ2V0ICk7XHJcblxyXG4gICAgICAgIHRoZXRhRGVsdGEgPSAwO1xyXG4gICAgICAgIHBoaURlbHRhID0gMDtcclxuICAgICAgICBzY2FsZSA9IDE7XHJcbiAgICAgICAgcGFuLnNldCggMCwgMCwgMCApO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIHVwZGF0ZSBjb25kaXRpb24gaXM6XHJcbiAgICAgICAgICogbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXHJcbiAgICAgICAgICogdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCBsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHRoaXMub2JqZWN0LnBvc2l0aW9uICkgPiBFUFNcclxuXHRcdCAgICB8fCA4ICogKDEgLSBsYXN0UXVhdGVybmlvbi5kb3QodGhpcy5vYmplY3QucXVhdGVybmlvbikpID4gRVBTICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpZ25vcmVVcGRhdGUgIT09IHRydWUgKSB7IHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTsgfVxyXG5cclxuICAgICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkoIHRoaXMub2JqZWN0LnBvc2l0aW9uICk7XHJcbiAgICAgICAgICAgIGxhc3RRdWF0ZXJuaW9uLmNvcHkgKHRoaXMub2JqZWN0LnF1YXRlcm5pb24gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQuY29weSggdGhpcy50YXJnZXQwICk7XHJcbiAgICAgICAgdGhpcy5vYmplY3QucG9zaXRpb24uY29weSggdGhpcy5wb3NpdGlvbjAgKTtcclxuICAgICAgICB0aGlzLm9iamVjdC56b29tID0gdGhpcy56b29tMDtcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBoaTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGV0YTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgbW9tZW50dW1PbiA9IGZhbHNlO1xyXG5cclxuICAgXHRcdG1vbWVudHVtTGVmdCA9IG1vbWVudHVtVXAgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuRE9MTFk7XHJcblxyXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlBBTjtcclxuXHJcbiAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xyXG4gICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xyXG5cclxuICAgICAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XHJcblxyXG4gICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBldmVudFByZXZpb3VzICl7XHJcbiAgICAgICAgICAgICAgICBtb21lbnR1bUxlZnQgPSBldmVudC5jbGllbnRYIC0gZXZlbnRQcmV2aW91cy5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgbW9tZW50dW1VcCA9IGV2ZW50LmNsaWVudFkgLSBldmVudFByZXZpb3VzLmNsaWVudFk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50UHJldmlvdXMgPSBldmVudDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcclxuICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlPdXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XHJcbiAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xyXG5cclxuICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoIC8qIGV2ZW50ICovICkge1xyXG5cclxuICAgICAgICBtb21lbnR1bU9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZXZlbnRQcmV2aW91cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xyXG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XHJcbiAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSB8fCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHJldHVybjtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGRlbHRhID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxyXG5cclxuICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxyXG5cclxuICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHNjb3BlLmRvbGx5T3V0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPCBzY29wZS5tYXhGb3YgKSBcclxuICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiArIDFcclxuICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBzY29wZS5kb2xseUluKCk7XHJcbiAgICAgICAgICAgIHNjb3BlLm9iamVjdC5mb3YgPSAoIHNjb3BlLm9iamVjdC5mb3YgPiBzY29wZS5taW5Gb3YgKSBcclxuICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiAtIDFcclxuICAgICAgICAgICAgICAgIDogc2NvcGUubWluRm92O1xyXG4gICAgICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xyXG4gICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uS2V5VXAgKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxyXG4gICAgICAgICAgICBrZXlVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcclxuICAgICAgICAgICAga2V5Qm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcclxuICAgICAgICAgICAga2V5TGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxyXG4gICAgICAgICAgICBrZXlSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vS2V5cyA9PT0gdHJ1ZSB8fCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxyXG4gICAgICAgICAgICBrZXlVcCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxyXG4gICAgICAgICAgICBrZXlCb3R0b20gPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLkxFRlQ6XHJcbiAgICAgICAgICAgIGtleUxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxyXG4gICAgICAgICAgICBrZXlSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrZXlVcCB8fCBrZXlCb3R0b20gfHwga2V5TGVmdCB8fCBrZXlSaWdodCkge1xyXG5cclxuICAgICAgICAgICAgbW9tZW50dW1PbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5VXApIG1vbWVudHVtVXAgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICBpZiAoa2V5Qm90dG9tKSBtb21lbnR1bVVwID0gc2NvcGUucm90YXRlU3BlZWQgKiBzY29wZS5tb21lbnR1bUtleWRvd25GYWN0b3I7XHJcbiAgICAgICAgICAgIGlmIChrZXlMZWZ0KSBtb21lbnR1bUxlZnQgPSAtIHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICBpZiAoa2V5UmlnaHQpIG1vbWVudHVtTGVmdCA9IHNjb3BlLnJvdGF0ZVNwZWVkICogc2NvcGUubW9tZW50dW1LZXlkb3duRmFjdG9yO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBtb21lbnR1bU9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG1vbWVudHVtTGVmdCA9IG1vbWVudHVtVXAgPSAwO1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgY2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcclxuICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xyXG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XHJcblxyXG4gICAgICAgICAgICBkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcclxuXHJcbiAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2htb3ZlKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xyXG5cclxuICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xyXG4gICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XHJcblxyXG4gICAgICAgICAgICAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xyXG4gICAgICAgICAgICAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcclxuICAgICAgICAgICAgc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcclxuXHJcbiAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xyXG5cclxuICAgICAgICAgICAgaWYoIGV2ZW50UHJldmlvdXMgKXtcclxuICAgICAgICAgICAgICAgIG1vbWVudHVtTGVmdCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50UHJldmlvdXMucGFnZVg7XHJcbiAgICAgICAgICAgICAgICBtb21lbnR1bVVwID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnRQcmV2aW91cy5wYWdlWTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnRQcmV2aW91cyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZ2VYOiBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsXHJcbiAgICAgICAgICAgICAgICBwYWdlWTogZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcclxuICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xyXG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XHJcblxyXG4gICAgICAgICAgICBkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XHJcbiAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vYmplY3QuZm92ID0gKCBzY29wZS5vYmplY3QuZm92IDwgc2NvcGUubWF4Rm92ICkgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzY29wZS5vYmplY3QuZm92ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2NvcGUubWF4Rm92O1xyXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUub2JqZWN0LmZvdiA9ICggc2NvcGUub2JqZWN0LmZvdiA+IHNjb3BlLm1pbkZvdiApIFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2NvcGUub2JqZWN0LmZvdiAtIDFcclxuICAgICAgICAgICAgICAgICAgICA6IHNjb3BlLm1pbkZvdjtcclxuICAgICAgICAgICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XHJcblxyXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgcGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcclxuICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XHJcblxyXG4gICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaGVuZCggLyogZXZlbnQgKi8gKSB7XHJcblxyXG4gICAgICAgIG1vbWVudHVtT24gPSB0cnVlO1xyXG5cclxuICAgICAgICBldmVudFByZXZpb3VzID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xyXG4gICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24gKTtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwgKTtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsICk7XHJcblxyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQgKTtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQgKTtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSApO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biApO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIGZ1bmN0aW9uICggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0sIGZhbHNlICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTsgLy8gZmlyZWZveFxyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoc3RhcnQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXVwJywgb25LZXlVcCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG5cclxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbn07XHJcblxyXG5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKSwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yOiBPcmJpdENvbnRyb2xzXHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBPcmJpdENvbnRyb2xzIH07IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgRGV2aWNlIE9yaWVudGF0aW9uIENvbnRyb2xcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlcm5hbCBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzXHJcbiAqIEBwYXJhbSB7VEhSRUUuQ2FtZXJhfSBjYW1lcmEgXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbUVsZW1lbnQgXHJcbiAqL1xyXG5mdW5jdGlvbiBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzICggY2FtZXJhLCBkb21FbGVtZW50ICkge1xyXG5cclxuICAgIHZhciBzY29wZSA9IHRoaXM7XHJcbiAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XHJcblxyXG4gICAgdmFyIHJvdFkgPSAwO1xyXG4gICAgdmFyIHJvdFggPSAwO1xyXG4gICAgdmFyIHRlbXBYID0gMDtcclxuICAgIHZhciB0ZW1wWSA9IDA7XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5yZW9yZGVyKCAnWVhaJyApO1xyXG4gICAgdGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcclxuXHJcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZGV2aWNlT3JpZW50YXRpb24gPSB7fTtcclxuICAgIHRoaXMuc2NyZWVuT3JpZW50YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuYWxwaGEgPSAwO1xyXG4gICAgdGhpcy5hbHBoYU9mZnNldEFuZ2xlID0gMDtcclxuXHJcblxyXG4gICAgdmFyIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgc2NvcGUuZGV2aWNlT3JpZW50YXRpb24gPSBldmVudDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPSB3aW5kb3cub3JpZW50YXRpb24gfHwgMDtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblRvdWNoU3RhcnRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0ZW1wWCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWDtcclxuICAgICAgICB0ZW1wWSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblRvdWNoTW92ZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHJvdFkgKz0gVEhSRUUuTWF0aC5kZWdUb1JhZCggKCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSB0ZW1wWCApIC8gNCApO1xyXG4gICAgICAgIHJvdFggKz0gVEhSRUUuTWF0aC5kZWdUb1JhZCggKCB0ZW1wWSAtIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApIC8gNCApO1xyXG5cclxuICAgICAgICBzY29wZS51cGRhdGVBbHBoYU9mZnNldEFuZ2xlKCByb3RZICk7XHJcblxyXG4gICAgICAgIHRlbXBYID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYO1xyXG4gICAgICAgIHRlbXBZID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgLy8gVGhlIGFuZ2xlcyBhbHBoYSwgYmV0YSBhbmQgZ2FtbWEgZm9ybSBhIHNldCBvZiBpbnRyaW5zaWMgVGFpdC1CcnlhbiBhbmdsZXMgb2YgdHlwZSBaLVgnLVknJ1xyXG5cclxuICAgIHZhciBzZXRDYW1lcmFRdWF0ZXJuaW9uID0gZnVuY3Rpb24oIHF1YXRlcm5pb24sIGFscGhhLCBiZXRhLCBnYW1tYSwgb3JpZW50ICkge1xyXG5cclxuICAgICAgICB2YXIgemVlID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDEgKTtcclxuXHJcbiAgICAgICAgdmFyIGV1bGVyID0gbmV3IFRIUkVFLkV1bGVyKCk7XHJcblxyXG4gICAgICAgIHZhciBxMCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcblxyXG4gICAgICAgIHZhciBxMSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCAtIE1hdGguc3FydCggMC41ICksIDAsIDAsIE1hdGguc3FydCggMC41ICkgKTsgLy8gLSBQSS8yIGFyb3VuZCB0aGUgeC1heGlzXHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JGaW5nZXJZO1xyXG4gICAgICAgIHZhciBmaW5nZXJRWSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIGZpbmdlclFYID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA9PSAwICkge1xyXG5cclxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAwLCAwICk7XHJcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDE4MCApIHtcclxuXHJcbiAgICAgICAgICAgIHZlY3RvckZpbmdlclkgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMCwgMCApO1xyXG4gICAgICAgICAgICBmaW5nZXJRWS5zZXRGcm9tQXhpc0FuZ2xlKCB2ZWN0b3JGaW5nZXJZLCByb3RYICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uID09IDkwICkge1xyXG5cclxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XHJcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIHJvdFggKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggc2NvcGUuc2NyZWVuT3JpZW50YXRpb24gPT0gLSA5MCkge1xyXG5cclxuICAgICAgICAgICAgdmVjdG9yRmluZ2VyWSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICk7XHJcbiAgICAgICAgICAgIGZpbmdlclFZLnNldEZyb21BeGlzQW5nbGUoIHZlY3RvckZpbmdlclksIC1yb3RYICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcTEubXVsdGlwbHkoIGZpbmdlclFZICk7XHJcbiAgICAgICAgcTEubXVsdGlwbHkoIGZpbmdlclFYICk7XHJcblxyXG4gICAgICAgIGV1bGVyLnNldCggYmV0YSwgYWxwaGEsIC0gZ2FtbWEsICdZWFonICk7IC8vICdaWFknIGZvciB0aGUgZGV2aWNlLCBidXQgJ1lYWicgZm9yIHVzXHJcblxyXG4gICAgICAgIHF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBldWxlciApOyAvLyBvcmllbnQgdGhlIGRldmljZVxyXG5cclxuICAgICAgICBxdWF0ZXJuaW9uLm11bHRpcGx5KCBxMSApOyAvLyBjYW1lcmEgbG9va3Mgb3V0IHRoZSBiYWNrIG9mIHRoZSBkZXZpY2UsIG5vdCB0aGUgdG9wXHJcblxyXG4gICAgICAgIHF1YXRlcm5pb24ubXVsdGlwbHkoIHEwLnNldEZyb21BeGlzQW5nbGUoIHplZSwgLSBvcmllbnQgKSApOyAvLyBhZGp1c3QgZm9yIHNjcmVlbiBvcmllbnRhdGlvblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb25uZWN0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIG9uU2NyZWVuT3JpZW50YXRpb25DaGFuZ2VFdmVudCgpOyAvLyBydW4gb25jZSBvbiBsb2FkXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb3JpZW50YXRpb25jaGFuZ2UnLCBvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIHsgcGFzc2l2ZTogdHJ1ZSB9ICk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIG9uRGV2aWNlT3JpZW50YXRpb25DaGFuZ2VFdmVudCwgeyBwYXNzaXZlOiB0cnVlIH0gKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2RldmljZW9yaWVudGF0aW9uJywgdGhpcy51cGRhdGUuYmluZCggdGhpcyApLCB7IHBhc3NpdmU6IHRydWUgfSApO1xyXG5cclxuICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0RXZlbnQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlRXZlbnQsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xyXG5cclxuICAgICAgICBzY29wZS5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ29yaWVudGF0aW9uY2hhbmdlJywgb25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZGV2aWNlb3JpZW50YXRpb24nLCBvbkRldmljZU9yaWVudGF0aW9uQ2hhbmdlRXZlbnQsIGZhbHNlICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdkZXZpY2VvcmllbnRhdGlvbicsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydEV2ZW50LCBmYWxzZSApO1xyXG4gICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIHNjb3BlLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24oIGlnbm9yZVVwZGF0ZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGFscGhhID0gc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uYWxwaGEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5hbHBoYSApICsgc2NvcGUuYWxwaGFPZmZzZXRBbmdsZSA6IDA7IC8vIFpcclxuICAgICAgICB2YXIgYmV0YSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmJldGEgPyBUSFJFRS5NYXRoLmRlZ1RvUmFkKCBzY29wZS5kZXZpY2VPcmllbnRhdGlvbi5iZXRhICkgOiAwOyAvLyBYJ1xyXG4gICAgICAgIHZhciBnYW1tYSA9IHNjb3BlLmRldmljZU9yaWVudGF0aW9uLmdhbW1hID8gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuZGV2aWNlT3JpZW50YXRpb24uZ2FtbWEgKSA6IDA7IC8vIFknJ1xyXG4gICAgICAgIHZhciBvcmllbnQgPSBzY29wZS5zY3JlZW5PcmllbnRhdGlvbiA/IFRIUkVFLk1hdGguZGVnVG9SYWQoIHNjb3BlLnNjcmVlbk9yaWVudGF0aW9uICkgOiAwOyAvLyBPXHJcblxyXG4gICAgICAgIHNldENhbWVyYVF1YXRlcm5pb24oIHNjb3BlLmNhbWVyYS5xdWF0ZXJuaW9uLCBhbHBoYSwgYmV0YSwgZ2FtbWEsIG9yaWVudCApO1xyXG4gICAgICAgIHNjb3BlLmFscGhhID0gYWxwaGE7XHJcblxyXG4gICAgICAgIGlmICggaWdub3JlVXBkYXRlICE9PSB0cnVlICkgeyBzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApOyB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUFscGhhT2Zmc2V0QW5nbGUgPSBmdW5jdGlvbiggYW5nbGUgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWxwaGFPZmZzZXRBbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbm5lY3QoKTtcclxuXHJcbn07XHJcblxyXG5EZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oIE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpLCB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IERldmljZU9yaWVudGF0aW9uQ29udHJvbHNcclxuXHJcbn0gKTtcclxuXHJcbmV4cG9ydCB7IERldmljZU9yaWVudGF0aW9uQ29udHJvbHMgfTsiLCJcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgR29vZ2xlIENhcmRib2FyZCBFZmZlY3QgQ29tcG9zZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBleHRlcm5hbCBDYXJkYm9hcmRFZmZlY3RcclxuICogQHBhcmFtIHtUSFJFRS5XZWJHTFJlbmRlcmVyfSByZW5kZXJlciBcclxuICovXHJcbmZ1bmN0aW9uIENhcmRib2FyZEVmZmVjdCAoIHJlbmRlcmVyICkge1xyXG5cclxuICAgIHZhciBfY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLSAxLCAxLCAxLCAtIDEsIDAsIDEgKTtcclxuXHJcbiAgICB2YXIgX3NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgdmFyIF9zdGVyZW8gPSBuZXcgVEhSRUUuU3RlcmVvQ2FtZXJhKCk7XHJcbiAgICBfc3RlcmVvLmFzcGVjdCA9IDAuNTtcclxuXHJcbiAgICB2YXIgX3BhcmFtcyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0IH07XHJcblxyXG4gICAgdmFyIF9yZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIDUxMiwgNTEyLCBfcGFyYW1zICk7XHJcbiAgICBfcmVuZGVyVGFyZ2V0LnNjaXNzb3JUZXN0ID0gdHJ1ZTtcclxuICAgIF9yZW5kZXJUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogRGlzdG9ydGlvbiBNZXNoIHBvcnRlZCBmcm9tOlxyXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLWJvaWxlcnBsYXRlL2Jsb2IvbWFzdGVyL3NyYy9kaXN0b3J0aW9uL2JhcnJlbC1kaXN0b3J0aW9uLWZyYWdtZW50LmpzXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgZGlzdG9ydGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjQ0MSwgMC4xNTYgKTtcclxuXHJcbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMSwgMSwgMTAsIDIwICkucmVtb3ZlQXR0cmlidXRlKCAnbm9ybWFsJyApLnRvTm9uSW5kZXhlZCgpO1xyXG5cclxuICAgIHZhciBwb3NpdGlvbnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgdmFyIHV2cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYuYXJyYXk7XHJcblxyXG4gICAgLy8gZHVwbGljYXRlXHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50ICo9IDI7XHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmNvdW50ICo9IDI7XHJcblxyXG4gICAgdmFyIHBvc2l0aW9uczIgPSBuZXcgRmxvYXQzMkFycmF5KCBwb3NpdGlvbnMubGVuZ3RoICogMiApO1xyXG4gICAgcG9zaXRpb25zMi5zZXQoIHBvc2l0aW9ucyApO1xyXG4gICAgcG9zaXRpb25zMi5zZXQoIHBvc2l0aW9ucywgcG9zaXRpb25zLmxlbmd0aCApO1xyXG5cclxuICAgIHZhciB1dnMyID0gbmV3IEZsb2F0MzJBcnJheSggdXZzLmxlbmd0aCAqIDIgKTtcclxuICAgIHV2czIuc2V0KCB1dnMgKTtcclxuICAgIHV2czIuc2V0KCB1dnMsIHV2cy5sZW5ndGggKTtcclxuXHJcbiAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBsZW5ndGggPSBwb3NpdGlvbnMubGVuZ3RoIC8gMztcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDAsIGwgPSBwb3NpdGlvbnMyLmxlbmd0aCAvIDM7IGkgPCBsOyBpICsrICkge1xyXG5cclxuICAgICAgICB2ZWN0b3IueCA9IHBvc2l0aW9uczJbIGkgKiAzICsgMCBdO1xyXG4gICAgICAgIHZlY3Rvci55ID0gcG9zaXRpb25zMlsgaSAqIDMgKyAxIF07XHJcblxyXG4gICAgICAgIHZhciBkb3QgPSB2ZWN0b3IuZG90KCB2ZWN0b3IgKTtcclxuICAgICAgICB2YXIgc2NhbGFyID0gMS41ICsgKCBkaXN0b3J0aW9uLnggKyBkaXN0b3J0aW9uLnkgKiBkb3QgKSAqIGRvdDtcclxuXHJcbiAgICAgICAgdmFyIG9mZnNldCA9IGkgPCBsZW5ndGggPyAwIDogMTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25zMlsgaSAqIDMgKyAwIF0gPSAoIHZlY3Rvci54IC8gc2NhbGFyICkgKiAxLjUgLSAwLjUgKyBvZmZzZXQ7XHJcbiAgICAgICAgcG9zaXRpb25zMlsgaSAqIDMgKyAxIF0gPSAoIHZlY3Rvci55IC8gc2NhbGFyICkgKiAzLjA7XHJcblxyXG4gICAgICAgIHV2czJbIGkgKiAyIF0gPSAoIHV2czJbIGkgKiAyIF0gKyBvZmZzZXQgKSAqIDAuNTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheSA9IHBvc2l0aW9uczI7XHJcbiAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2LmFycmF5ID0gdXZzMjtcclxuXHJcbiAgICAvL1xyXG5cclxuICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBtYXA6IF9yZW5kZXJUYXJnZXQudGV4dHVyZSB9ICk7XHJcbiAgICB2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuICAgIF9zY2VuZS5hZGQoIG1lc2ggKTtcclxuXHJcbiAgICAvL1xyXG5cclxuICAgIHRoaXMuc2V0U2l6ZSA9IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSggd2lkdGgsIGhlaWdodCApO1xyXG5cclxuICAgICAgICB2YXIgcGl4ZWxSYXRpbyA9IHJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKTtcclxuXHJcbiAgICAgICAgX3JlbmRlclRhcmdldC5zZXRTaXplKCB3aWR0aCAqIHBpeGVsUmF0aW8sIGhlaWdodCAqIHBpeGVsUmF0aW8gKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xyXG5cclxuICAgICAgICBzY2VuZS51cGRhdGVNYXRyaXhXb3JsZCgpO1xyXG5cclxuICAgICAgICBpZiAoIGNhbWVyYS5wYXJlbnQgPT09IG51bGwgKSBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcbiAgICAgICAgX3N0ZXJlby51cGRhdGUoIGNhbWVyYSApO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBfcmVuZGVyVGFyZ2V0LndpZHRoIC8gMjtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gX3JlbmRlclRhcmdldC5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggcmVuZGVyZXIuYXV0b0NsZWFyICkgcmVuZGVyZXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yLnNldCggMCwgMCwgd2lkdGgsIGhlaWdodCApO1xyXG4gICAgICAgIF9yZW5kZXJUYXJnZXQudmlld3BvcnQuc2V0KCAwLCAwLCB3aWR0aCwgaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KCBfcmVuZGVyVGFyZ2V0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgX3N0ZXJlby5jYW1lcmFMICk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLmNsZWFyRGVwdGgoKTtcclxuXHJcbiAgICAgICAgX3JlbmRlclRhcmdldC5zY2lzc29yLnNldCggd2lkdGgsIDAsIHdpZHRoLCBoZWlnaHQgKTtcclxuICAgICAgICBfcmVuZGVyVGFyZ2V0LnZpZXdwb3J0LnNldCggd2lkdGgsIDAsIHdpZHRoLCBoZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIF9yZW5kZXJUYXJnZXQgKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYVIgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQoIG51bGwgKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIF9zY2VuZSwgX2NhbWVyYSApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBDYXJkYm9hcmRFZmZlY3QgfTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBTdGVyZW8gRWZmZWN0IENvbXBvc2VyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZXh0ZXJuYWwgU3RlcmVvRWZmZWN0XHJcbiAqIEBwYXJhbSB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gcmVuZGVyZXIgXHJcbiAqL1xyXG5jb25zdCBTdGVyZW9FZmZlY3QgPSBmdW5jdGlvbiAoIHJlbmRlcmVyICkge1xyXG5cclxuICAgIHZhciBfc3RlcmVvID0gbmV3IFRIUkVFLlN0ZXJlb0NhbWVyYSgpO1xyXG4gICAgX3N0ZXJlby5hc3BlY3QgPSAwLjU7XHJcbiAgICB2YXIgc2l6ZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4gICAgdGhpcy5zZXRFeWVTZXBhcmF0aW9uID0gZnVuY3Rpb24gKCBleWVTZXAgKSB7XHJcblxyXG4gICAgICAgIF9zdGVyZW8uZXllU2VwID0gZXllU2VwO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKCB3aWR0aCwgaGVpZ2h0ICk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcclxuXHJcbiAgICAgICAgc2NlbmUudXBkYXRlTWF0cml4V29ybGQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBjYW1lcmEucGFyZW50ID09PSBudWxsICkgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XHJcblxyXG4gICAgICAgIF9zdGVyZW8udXBkYXRlKCBjYW1lcmEgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuZ2V0U2l6ZSggc2l6ZSApO1xyXG5cclxuICAgICAgICBpZiAoIHJlbmRlcmVyLmF1dG9DbGVhciApIHJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIHRydWUgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvciggMCwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIDAsIDAsIHNpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCApO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIF9zdGVyZW8uY2FtZXJhTCApO1xyXG5cclxuICAgICAgICByZW5kZXJlci5zZXRTY2lzc29yKCBzaXplLndpZHRoIC8gMiwgMCwgc2l6ZS53aWR0aCAvIDIsIHNpemUuaGVpZ2h0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0Vmlld3BvcnQoIHNpemUud2lkdGggLyAyLCAwLCBzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgKTtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBfc3RlcmVvLmNhbWVyYVIgKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2Npc3NvclRlc3QoIGZhbHNlICk7XHJcblxyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBTdGVyZW9FZmZlY3QgfTsiLCJpbXBvcnQgeyBNT0RFUywgQ09OVFJPTFMgfSBmcm9tICcuLi9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnLi4vbGliL2NvbnRyb2xzL09yYml0Q29udHJvbHMnO1xyXG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAnLi4vbGliL2NvbnRyb2xzL0RldmljZU9yaWVudGF0aW9uQ29udHJvbHMnO1xyXG5pbXBvcnQgeyBDYXJkYm9hcmRFZmZlY3QgfSBmcm9tICcuLi9saWIvZWZmZWN0cy9DYXJkYm9hcmRFZmZlY3QnO1xyXG5pbXBvcnQgeyBTdGVyZW9FZmZlY3QgfSBmcm9tICcuLi9saWIvZWZmZWN0cy9TdGVyZW9FZmZlY3QnO1xyXG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQvV2lkZ2V0JztcclxuaW1wb3J0IHsgUmV0aWNsZSB9IGZyb20gJy4uL2ludGVyZmFjZS9SZXRpY2xlJztcclxuaW1wb3J0IHsgSW5mb3Nwb3QgfSBmcm9tICcuLi9pbmZvc3BvdC9JbmZvc3BvdCc7XHJcbmltcG9ydCB7IERhdGFJbWFnZSB9IGZyb20gJy4uL0RhdGFJbWFnZSc7XHJcbmltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvUGFub3JhbWEnO1xyXG5pbXBvcnQgeyBWaWRlb1Bhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvVmlkZW9QYW5vcmFtYSc7XHJcbmltcG9ydCB7IENhbWVyYVBhbm9yYW1hIH0gZnJvbSAnLi4vcGFub3JhbWEvQ2FtZXJhUGFub3JhbWEnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBWaWV3ZXIgY29udGFpbnMgcHJlLWRlZmluZWQgc2NlbmUsIGNhbWVyYSBhbmQgcmVuZGVyZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBVc2UgY3VzdG9tIG9yIGRlZmF1bHQgY29uZmlnIG9wdGlvbnNcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW29wdGlvbnMuY29udGFpbmVyXSAtIEEgSFRNTEVsZW1lbnQgdG8gaG9zdCB0aGUgY2FudmFzXHJcbiAqIEBwYXJhbSB7VEhSRUUuU2NlbmV9IFtvcHRpb25zLnNjZW5lPVRIUkVFLlNjZW5lXSAtIEEgVEhSRUUuU2NlbmUgd2hpY2ggY29udGFpbnMgcGFub3JhbWEgYW5kIDNEIG9iamVjdHNcclxuICogQHBhcmFtIHtUSFJFRS5DYW1lcmF9IFtvcHRpb25zLmNhbWVyYT1USFJFRS5QZXJzcGVjdGl2ZUNhbWVyYV0gLSBBIFRIUkVFLkNhbWVyYSB0byB2aWV3IHRoZSBzY2VuZVxyXG4gKiBAcGFyYW0ge1RIUkVFLldlYkdMUmVuZGVyZXJ9IFtvcHRpb25zLnJlbmRlcmVyPVRIUkVFLldlYkdMUmVuZGVyZXJdIC0gQSBUSFJFRS5XZWJHTFJlbmRlcmVyIHRvIHJlbmRlciBjYW52YXNcclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb250cm9sQmFyPXRydWVdIC0gU2hvdy9oaWRlIGNvbnRyb2wgYmFyIG9uIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0ge2FycmF5fSAgIFtvcHRpb25zLmNvbnRyb2xCdXR0b25zPVtdXSAtIEJ1dHRvbiBuYW1lcyB0byBtb3VudCBvbiBjb250cm9sQmFyIGlmIGNvbnRyb2xCYXIgZXhpc3RzLCBEZWZhdWx0cyB0byBbJ2Z1bGxzY3JlZW4nLCAnc2V0dGluZycsICd2aWRlbyddXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyPWZhbHNlXSAtIEF1dG8gaGlkZSBjb250cm9sIGJhciB3aGVuIGNsaWNrIG9uIG5vbi1hY3RpdmUgYXJlYVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3Q9dHJ1ZV0gLSBBdXRvIGhpZGUgaW5mb3Nwb3RzIHdoZW4gY2xpY2sgb24gbm9uLWFjdGl2ZSBhcmVhXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaG9yaXpvbnRhbFZpZXc9ZmFsc2VdIC0gQWxsb3cgb25seSBob3Jpem9udGFsIGNhbWVyYSBjb250cm9sXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuY2xpY2tUb2xlcmFuY2U9MTBdIC0gRGlzdGFuY2UgdG9sZXJhbmNlIHRvIHRpZ2dlciBjbGljayAvIHRhcCBldmVudFxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmNhbWVyYUZvdj02MF0gLSBDYW1lcmEgZmllbGQgb2YgdmlldyB2YWx1ZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldmVyc2VEcmFnZ2luZz1mYWxzZV0gLSBSZXZlcnNlIGRyYWdnaW5nIGRpcmVjdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmVuYWJsZVJldGljbGU9ZmFsc2VdIC0gRW5hYmxlIHJldGljbGUgZm9yIG1vdXNlbGVzcyBpbnRlcmFjdGlvbiBvdGhlciB0aGFuIFZSIG1vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9ICBbb3B0aW9ucy5kd2VsbFRpbWU9MTUwMF0gLSBEd2VsbCB0aW1lIGZvciByZXRpY2xlIHNlbGVjdGlvbiBpbiBtc1xyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0PXRydWVdIC0gQXV0byBzZWxlY3QgYSBjbGlja2FibGUgdGFyZ2V0IGFmdGVyIGR3ZWxsVGltZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnZpZXdJbmRpY2F0b3I9ZmFsc2VdIC0gQWRkcyBhbiBhbmdsZSB2aWV3IGluZGljYXRvciBpbiB1cHBlciBsZWZ0IGNvcm5lclxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmluZGljYXRvclNpemU9MzBdIC0gU2l6ZSBvZiBWaWV3IEluZGljYXRvclxyXG4gKiBAcGFyYW0ge3N0cmluZ30gIFtvcHRpb25zLm91dHB1dD0nbm9uZSddIC0gV2hldGhlciBhbmQgd2hlcmUgdG8gb3V0cHV0IHJheWNhc3QgcG9zaXRpb24uIENvdWxkIGJlICdldmVudCcsICdjb25zb2xlJyBvciAnb3ZlcmxheScuXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b1JvdGF0ZT1mYWxzZV0gLSBBdXRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gIFtvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZD0yLjBdIC0gQXV0byByb3RhdGUgc3BlZWQgYXMgaW4gZGVncmVlIHBlciBzZWNvbmQuIFBvc2l0aXZlIGlzIGNvdW50ZXItY2xvY2t3aXNlIGFuZCBuZWdhdGl2ZSBpcyBjbG9ja3dpc2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSAgW29wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbj01MDAwXSAtIER1cmF0aW9uIGJlZm9yZSBhdXRvIHJvdGF0YXRpb24gd2hlbiBubyB1c2VyIGludGVyYWN0aXZpdHkgaW4gbXNcclxuICovXHJcbmZ1bmN0aW9uIFZpZXdlciAoIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lcjtcclxuXHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIG9wdGlvbnMuY29udHJvbEJhciA9IG9wdGlvbnMuY29udHJvbEJhciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250cm9sQmFyIDogdHJ1ZTtcclxuICAgIG9wdGlvbnMuY29udHJvbEJ1dHRvbnMgPSBvcHRpb25zLmNvbnRyb2xCdXR0b25zIHx8IFsgJ2Z1bGxzY3JlZW4nLCAnc2V0dGluZycsICd2aWRlbycgXTtcclxuICAgIG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyID0gb3B0aW9ucy5hdXRvSGlkZUNvbnRyb2xCYXIgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVDb250cm9sQmFyIDogZmFsc2U7XHJcbiAgICBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgPSBvcHRpb25zLmF1dG9IaWRlSW5mb3Nwb3QgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYXV0b0hpZGVJbmZvc3BvdCA6IHRydWU7XHJcbiAgICBvcHRpb25zLmhvcml6b250YWxWaWV3ID0gb3B0aW9ucy5ob3Jpem9udGFsVmlldyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5ob3Jpem9udGFsVmlldyA6IGZhbHNlO1xyXG4gICAgb3B0aW9ucy5jbGlja1RvbGVyYW5jZSA9IG9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgfHwgMTA7XHJcbiAgICBvcHRpb25zLmNhbWVyYUZvdiA9IG9wdGlvbnMuY2FtZXJhRm92IHx8IDYwO1xyXG4gICAgb3B0aW9ucy5yZXZlcnNlRHJhZ2dpbmcgPSBvcHRpb25zLnJldmVyc2VEcmFnZ2luZyB8fCBmYWxzZTtcclxuICAgIG9wdGlvbnMuZW5hYmxlUmV0aWNsZSA9IG9wdGlvbnMuZW5hYmxlUmV0aWNsZSB8fCBmYWxzZTtcclxuICAgIG9wdGlvbnMuZHdlbGxUaW1lID0gb3B0aW9ucy5kd2VsbFRpbWUgfHwgMTUwMDtcclxuICAgIG9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgPSBvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmF1dG9SZXRpY2xlU2VsZWN0IDogdHJ1ZTtcclxuICAgIG9wdGlvbnMudmlld0luZGljYXRvciA9IG9wdGlvbnMudmlld0luZGljYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy52aWV3SW5kaWNhdG9yIDogZmFsc2U7XHJcbiAgICBvcHRpb25zLmluZGljYXRvclNpemUgPSBvcHRpb25zLmluZGljYXRvclNpemUgfHwgMzA7XHJcbiAgICBvcHRpb25zLm91dHB1dCA9IG9wdGlvbnMub3V0cHV0ID8gb3B0aW9ucy5vdXRwdXQgOiAnbm9uZSc7XHJcbiAgICBvcHRpb25zLmF1dG9Sb3RhdGUgPSBvcHRpb25zLmF1dG9Sb3RhdGUgfHwgZmFsc2U7XHJcbiAgICBvcHRpb25zLmF1dG9Sb3RhdGVTcGVlZCA9IG9wdGlvbnMuYXV0b1JvdGF0ZVNwZWVkIHx8IDIuMDtcclxuICAgIG9wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbiA9IG9wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbiB8fCA1MDAwO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblxyXG4gICAgLypcclxuICAgICAqIENTUyBJY29uXHJcbiAgICAgKiBjb25zdCBzdHlsZUxvYWRlciA9IG5ldyBTdHlsZUxvYWRlcigpO1xyXG4gICAgICogc3R5bGVMb2FkZXIuaW5qZWN0KCAnaWNvbm8nICk7XHJcbiAgICAgKi9cclxuXHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIGlmICggb3B0aW9ucy5jb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnRhaW5lci5fd2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29udGFpbmVyLl9oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoICdwYW5vbGVucy1jb250YWluZXInICk7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgY29udGFpbmVyLl93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnRhaW5lci5faGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IG9wdGlvbnMuY2FtZXJhIHx8IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggdGhpcy5vcHRpb25zLmNhbWVyYUZvdiwgdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQsIDEsIDEwMDAwICk7XHJcbiAgICB0aGlzLnNjZW5lID0gb3B0aW9ucy5zY2VuZSB8fCBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBvcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IGZhbHNlIH0gKTtcclxuICAgIHRoaXMuc2NlbmVSZXRpY2xlID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy52aWV3SW5kaWNhdG9yU2l6ZSA9IHRoaXMub3B0aW9ucy5pbmRpY2F0b3JTaXplO1xyXG5cclxuICAgIHRoaXMucmV0aWNsZSA9IHt9O1xyXG4gICAgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSA9IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlO1xyXG5cclxuICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcclxuXHJcbiAgICB0aGlzLnBhbm9yYW1hID0gbnVsbDtcclxuICAgIHRoaXMud2lkZ2V0ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmhvdmVyT2JqZWN0ID0gbnVsbDtcclxuICAgIHRoaXMuaW5mb3Nwb3QgPSBudWxsO1xyXG4gICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IG51bGw7XHJcbiAgICB0aGlzLnByZXNzT2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcclxuICAgIHRoaXMucmF5Y2FzdGVyUG9pbnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdGhpcy51c2VyTW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdGhpcy51cGRhdGVDYWxsYmFja3MgPSBbXTtcclxuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbklkID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmNhbWVyYUZydXN0dW0gPSBuZXcgVEhSRUUuRnJ1c3R1bSgpO1xyXG4gICAgdGhpcy5jYW1lcmFWaWV3UHJvamVjdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XHJcblxyXG4gICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLm91dHB1dERpdkVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMudG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoO1xyXG5cclxuICAgIC8vIEhhbmRsZXIgcmVmZXJlbmNlc1xyXG4gICAgdGhpcy5IQU5ETEVSX01PVVNFX0RPV04gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9NT1VTRV9VUCA9IHRoaXMub25Nb3VzZVVwLmJpbmQoIHRoaXMgKTtcclxuICAgIHRoaXMuSEFORExFUl9NT1VTRV9NT1ZFID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSA9IHRoaXMub25XaW5kb3dSZXNpemUuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX0tFWV9ET1dOID0gdGhpcy5vbktleURvd24uYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5IQU5ETEVSX0tFWV9VUCA9IHRoaXMub25LZXlVcC5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLkhBTkRMRVJfVEFQID0gdGhpcy5vblRhcC5iaW5kKCB0aGlzLCB7XHJcbiAgICAgICAgY2xpZW50WDogdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggLyAyLFxyXG4gICAgICAgIGNsaWVudFk6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDJcclxuICAgIH0gKTtcclxuXHJcbiAgICAvLyBGbGFnIGZvciBpbmZvc3BvdCBvdXRwdXRcclxuICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5pbWF0aW9uc1xyXG4gICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxuICAgIC8vIFJlbmRlcmVyXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHgwMDAwMDAsIDAgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQXBwZW5kIFJlbmRlcmVyIEVsZW1lbnQgdG8gY29udGFpbmVyXHJcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhbm9sZW5zLWNhbnZhcycgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICAvLyBDYW1lcmEgQ29udHJvbHNcclxuICAgIHRoaXMuT3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKCB0aGlzLmNhbWVyYSwgdGhpcy5jb250YWluZXIgKTtcclxuICAgIHRoaXMuT3JiaXRDb250cm9scy5pZCA9ICdvcmJpdCc7XHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMubWluRGlzdGFuY2UgPSAxO1xyXG4gICAgdGhpcy5PcmJpdENvbnRyb2xzLm5vUGFuID0gdHJ1ZTtcclxuICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGU7XHJcbiAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGVTcGVlZDtcclxuXHJcbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgPSBuZXcgRGV2aWNlT3JpZW50YXRpb25Db250cm9scyggdGhpcy5jYW1lcmEsIHRoaXMuY29udGFpbmVyICk7XHJcbiAgICB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMuaWQgPSAnZGV2aWNlLW9yaWVudGF0aW9uJztcclxuICAgIHRoaXMuRGV2aWNlT3JpZW50YXRpb25Db250cm9scy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTtcclxuXHJcbiAgICAvLyBSZWdpc3RlciBjaGFuZ2UgZXZlbnQgaWYgcGFzc2l2ZVJlbmVyaW5nXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5wYXNzaXZlUmVuZGVyaW5nICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLndhcm4oICdwYXNzaXZlUmVuZGVyaW5nIGlzIG5vdyBkZXByZWNhdGVkJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250cm9sc1xyXG4gICAgdGhpcy5jb250cm9scyA9IFsgdGhpcy5PcmJpdENvbnRyb2xzLCB0aGlzLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHMgXTtcclxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMuT3JiaXRDb250cm9scztcclxuXHJcbiAgICAvLyBDYXJkYm9hcmQgZWZmZWN0XHJcbiAgICB0aGlzLkNhcmRib2FyZEVmZmVjdCA9IG5ldyBDYXJkYm9hcmRFZmZlY3QoIHRoaXMucmVuZGVyZXIgKTtcclxuICAgIHRoaXMuQ2FyZGJvYXJkRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcclxuXHJcbiAgICAvLyBTdGVyZW8gZWZmZWN0XHJcbiAgICB0aGlzLlN0ZXJlb0VmZmVjdCA9IG5ldyBTdGVyZW9FZmZlY3QoIHRoaXMucmVuZGVyZXIgKTtcclxuICAgIHRoaXMuU3RlcmVvRWZmZWN0LnNldFNpemUoIHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoLCB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKTtcclxuXHJcbiAgICB0aGlzLmVmZmVjdCA9IHRoaXMuQ2FyZGJvYXJkRWZmZWN0O1xyXG5cclxuICAgIC8vIEFkZCBkZWZhdWx0IGhpZGRlbiByZXRpY2xlXHJcbiAgICB0aGlzLmFkZFJldGljbGUoKTtcclxuXHJcbiAgICAvLyBMb2NrIGhvcml6b250YWwgdmlld1xyXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbFZpZXcgKSB7XHJcbiAgICAgICAgdGhpcy5PcmJpdENvbnRyb2xzLm1pblBvbGFyQW5nbGUgPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBDb250cm9sIFVJXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5jb250cm9sQmFyICE9PSBmYWxzZSApIHtcclxuICAgICAgICB0aGlzLmFkZERlZmF1bHRDb250cm9sQmFyKCB0aGlzLm9wdGlvbnMuY29udHJvbEJ1dHRvbnMgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgVmlldyBJbmRpY2F0b3JcclxuICAgIGlmICggdGhpcy5vcHRpb25zLnZpZXdJbmRpY2F0b3IgKSB7XHJcbiAgICAgICAgdGhpcy5hZGRWaWV3SW5kaWNhdG9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV2ZXJzZSBkcmFnZ2luZyBkaXJlY3Rpb25cclxuICAgIGlmICggdGhpcy5vcHRpb25zLnJldmVyc2VEcmFnZ2luZyApIHtcclxuICAgICAgICB0aGlzLnJldmVyc2VEcmFnZ2luZ0RpcmVjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGlmIHJldGljbGUgaXMgZW5hYmxlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG1vdXNlXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1vdXNlQW5kVG91Y2hFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRwdXQgaW5mb3Nwb3QgcG9zaXRpb24gdG8gYW4gb3ZlcmxheSBjb250YWluZXIgaWYgc3BlY2lmaWVkXHJcbiAgICBpZiAoIHRoaXMub3B0aW9ucy5vdXRwdXQgPT09ICdvdmVybGF5JyApIHtcclxuICAgICAgICB0aGlzLmFkZE91dHB1dEVsZW1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RlciBkb20gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAvLyBBbmltYXRlXHJcbiAgICB0aGlzLmFuaW1hdGUuY2FsbCggdGhpcyApO1xyXG5cclxufTtcclxuXHJcblZpZXdlci5wcm90b3R5cGUgPSBPYmplY3QuYXNzaWduKCBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICksIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcjogVmlld2VyLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFuIG9iamVjdCB0byB0aGUgc2NlbmVcclxuICAgICAqIEF1dG9tYXRpY2FsbHkgaG9va3VwIHdpdGggcGFub2xlbnMtdmlld2VyLWhhbmRsZXIgbGlzdGVuZXJcclxuICAgICAqIHRvIGNvbW11bmljYXRlIHdpdGggdmlld2VyIG1ldGhvZFxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBiZSBhZGRlZFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZDogZnVuY3Rpb24gKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpICsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKCBhcmd1bWVudHNbIGkgXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoIG9iamVjdCApO1xyXG5cclxuICAgICAgICAvLyBBbGwgb2JqZWN0IGFkZGVkIHRvIHNjZW5lIGhhcyAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInIGV2ZW50IHRvIGhhbmRsZSB2aWV3ZXIgY29tbXVuaWNhdGlvblxyXG4gICAgICAgIGlmICggb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWxsIG9iamVjdCBhZGRlZCB0byBzY2VuZSBiZWluZyBwYXNzZWQgd2l0aCBjb250YWluZXJcclxuICAgICAgICBpZiAoIG9iamVjdCBpbnN0YW5jZW9mIFBhbm9yYW1hICYmIG9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3Bhbm9sZW5zLWNvbnRhaW5lcicsIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIgfSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggb2JqZWN0IGluc3RhbmNlb2YgQ2FtZXJhUGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncGFub2xlbnMtc2NlbmUnLCBzY2VuZTogdGhpcy5zY2VuZSB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSG9va3VwIGRlZmF1bHQgcGFub3JhbWEgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICAgaWYgKCBvYmplY3QudHlwZSA9PT0gJ3Bhbm9yYW1hJyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkUGFub3JhbWFFdmVudExpc3RlbmVyKCBvYmplY3QgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggIXRoaXMucGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYW5vcmFtYSggb2JqZWN0ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGFuIG9iamVjdCBmcm9tIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtICB7VEhSRUUuT2JqZWN0M0R9IG9iamVjdCAtIE9iamVjdCB0byBiZSByZW1vdmVkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoIG9iamVjdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBvYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcclxuXHJcbiAgICAgICAgICAgIG9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCAncGFub2xlbnMtdmlld2VyLWhhbmRsZXInLCB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnJlbW92ZSggb2JqZWN0ICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBkZWZhdWx0IGNvbnRyb2wgYmFyXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJheSAtIFRoZSBjb250cm9sIGJ1dHRvbnMgYXJyYXlcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGREZWZhdWx0Q29udHJvbEJhcjogZnVuY3Rpb24gKCBhcnJheSApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLndpZGdldCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ0RlZmF1bHQgY29udHJvbCBiYXIgZXhpc3RzJyApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbmV3IFdpZGdldCggdGhpcy5jb250YWluZXIgKTtcclxuICAgICAgICB3aWRnZXQuYWRkRXZlbnRMaXN0ZW5lciggJ3Bhbm9sZW5zLXZpZXdlci1oYW5kbGVyJywgdGhpcy5ldmVudEhhbmRsZXIuYmluZCggdGhpcyApICk7XHJcbiAgICAgICAgd2lkZ2V0LmFkZENvbnRyb2xCYXIoKTtcclxuICAgICAgICBhcnJheS5mb3JFYWNoKCBidXR0b25OYW1lID0+IHtcclxuXHJcbiAgICAgICAgICAgIHdpZGdldC5hZGRDb250cm9sQnV0dG9uKCBidXR0b25OYW1lICk7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBhIHBhbm9yYW1hIHRvIGJlIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgICogQHBhcmFtIHtQYW5vcmFtYX0gcGFubyAtIFBhbm9yYW1hIHRvIGJlIHNldFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldFBhbm9yYW1hOiBmdW5jdGlvbiAoIHBhbm8gKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlYXZpbmdQYW5vcmFtYSA9IHRoaXMucGFub3JhbWE7XHJcblxyXG4gICAgICAgIGlmICggcGFuby50eXBlID09PSAncGFub3JhbWEnICYmIGxlYXZpbmdQYW5vcmFtYSAhPT0gcGFubyApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIENsZWFyIGV4aXNpdGluZyBpbmZvc3BvdFxyXG4gICAgICAgICAgICB0aGlzLmhpZGVJbmZvc3BvdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWZ0ZXJFbnRlckNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggbGVhdmluZ1Bhbm9yYW1hICkgeyBsZWF2aW5nUGFub3JhbWEub25MZWF2ZSgpOyB9XHJcbiAgICAgICAgICAgICAgICBwYW5vLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgYWZ0ZXJFbnRlckNvbXBsZXRlICk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnZW50ZXItZmFkZS1zdGFydCcsIGFmdGVyRW50ZXJDb21wbGV0ZSApO1xyXG5cclxuICAgICAgICAgICAgLy8gQXNzaWduIGFuZCBlbnRlciBwYW5vcmFtYVxyXG4gICAgICAgICAgICAodGhpcy5wYW5vcmFtYSA9IHBhbm8pLm9uRW50ZXIoKTtcclxuXHRcdFx0XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBoYW5kbGVyIHRvIGV4ZWN1dGUgY29tbWFuZHMgZnJvbSBjaGlsZCBvYmplY3RzXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgLSBUaGUgZGlzcGF0Y2hlZCBldmVudCB3aXRoIG1ldGhvZCBhcyBmdW5jdGlvbiBuYW1lIGFuZCBkYXRhIGFzIGFuIGFyZ3VtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50Lm1ldGhvZCAmJiB0aGlzWyBldmVudC5tZXRob2QgXSApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXNbIGV2ZW50Lm1ldGhvZCBdKCBldmVudC5kYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGF0Y2ggZXZlbnQgdG8gYWxsIGRlc2NlbmRhbnRzXHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IGV2ZW50IC0gRXZlbnQgdG8gYmUgcGFzc2VkIGFsb25nXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2hFdmVudFRvQ2hpbGRyZW46IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB3aWRnZXQgY29udGVudFxyXG4gICAgICogQG1ldGhvZCBhY3RpdmF0ZVdpZGdldEl0ZW1cclxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9IGNvbnRyb2xJbmRleCAtIENvbnRyb2wgaW5kZXhcclxuICAgICAqIEBwYXJhbSAge2ludGVnZXJ9IG1vZGUgLSBNb2RlcyBmb3IgZWZmZWN0c1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFjdGl2YXRlV2lkZ2V0SXRlbTogZnVuY3Rpb24gKCBjb250cm9sSW5kZXgsIG1vZGUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5NZW51ID0gdGhpcy53aWRnZXQubWFpbk1lbnU7XHJcbiAgICAgICAgY29uc3QgQ29udHJvbE1lbnVJdGVtID0gbWFpbk1lbnUuY2hpbGRyZW5bIDAgXTtcclxuICAgICAgICBjb25zdCBNb2RlTWVudUl0ZW0gPSBtYWluTWVudS5jaGlsZHJlblsgMSBdO1xyXG5cclxuICAgICAgICBsZXQgaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKCBjb250cm9sSW5kZXggIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoIGNvbnRyb2xJbmRleCApIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDEgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gQ29udHJvbE1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDIgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHRcdFx0XHRcdFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1x0XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDb250cm9sTWVudUl0ZW0uc3ViTWVudS5zZXRBY3RpdmVJdGVtKCBpdGVtICk7XHJcbiAgICAgICAgICAgIENvbnRyb2xNZW51SXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggaXRlbS50ZXh0Q29udGVudCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggbW9kZSAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKCBtb2RlICkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNT0RFUy5DQVJEQk9BUkQ6XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IE1vZGVNZW51SXRlbS5zdWJNZW51LmNoaWxkcmVuWyAyIF07XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1PREVTLlNURVJFTzpcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtID0gTW9kZU1lbnVJdGVtLnN1Yk1lbnUuY2hpbGRyZW5bIDMgXTtcclxuXHRcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBNb2RlTWVudUl0ZW0uc3ViTWVudS5jaGlsZHJlblsgMSBdO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBNb2RlTWVudUl0ZW0uc3ViTWVudS5zZXRBY3RpdmVJdGVtKCBpdGVtICk7XHJcbiAgICAgICAgICAgIE1vZGVNZW51SXRlbS5zZXRTZWxlY3Rpb25UaXRsZSggaXRlbS50ZXh0Q29udGVudCApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSByZW5kZXJpbmcgZWZmZWN0XHJcbiAgICAgKiBAcGFyYW0gIHtNT0RFU30gbW9kZSAtIE1vZGVzIGZvciBlZmZlY3RzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZW5hYmxlRWZmZWN0OiBmdW5jdGlvbiAoIG1vZGUgKSB7XHJcblxyXG4gICAgICAgIGlmICggdGhpcy5tb2RlID09PSBtb2RlICkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoIG1vZGUgPT09IE1PREVTLk5PUk1BTCApIHsgdGhpcy5kaXNhYmxlRWZmZWN0KCk7IHJldHVybjsgfVxyXG4gICAgICAgIGVsc2UgeyB0aGlzLm1vZGUgPSBtb2RlOyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdjtcclxuXHJcbiAgICAgICAgc3dpdGNoKCBtb2RlICkge1xyXG5cclxuICAgICAgICBjYXNlIE1PREVTLkNBUkRCT0FSRDpcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5DYXJkYm9hcmRFZmZlY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIE1PREVTLlNURVJFTzpcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0ID0gdGhpcy5TdGVyZW9FZmZlY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUmV0aWNsZUNvbnRyb2woKTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVJldGljbGVDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2lkZ2V0SXRlbSggdW5kZWZpbmVkLCB0aGlzLm1vZGUgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHVhbCBleWUgZWZmZWN0IGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XHJcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcclxuXHJcbiAgICAgICAgLy8gRm9yY2UgZWZmZWN0IHN0ZXJlbyBjYW1lcmEgdG8gdXBkYXRlIGJ5IHJlZnJlc2hpbmcgZm92XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZm92ID0gZm92ICsgMTBlLTM7XHJcbiAgICAgICAgdGhpcy5lZmZlY3Quc2V0U2l6ZSggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGgsIHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZm92ID0gZm92O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEaXNwYXRjaCBtb2RlIGNoYW5nZSBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciNtb2RlLWNoYW5nZVxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7TU9ERVN9IG1vZGUgLSBDdXJyZW50IGRpc3BsYXkgbW9kZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnbW9kZS1jaGFuZ2UnLCBtb2RlOiB0aGlzLm1vZGUgfSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIGFkZGl0aW9uYWwgcmVuZGVyaW5nIGVmZmVjdFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVFZmZlY3Q6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLk5PUk1BTCApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMubW9kZSA9IE1PREVTLk5PUk1BTDtcclxuICAgICAgICB0aGlzLmRpc2FibGVSZXRpY2xlQ29udHJvbCgpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2lkZ2V0SXRlbSggdW5kZWZpbmVkLCB0aGlzLm1vZGUgKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRHVhbCBleWUgZWZmZWN0IGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgSW5mb3Nwb3QjcGFub2xlbnMtZHVhbC1leWUtZWZmZWN0XHJcbiAgICAgICAgICogQHByb3BlcnR5IHtNT0RFU30gbW9kZSAtIEN1cnJlbnQgZGlzcGxheSBtb2RlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50VG9DaGlsZHJlbiggeyB0eXBlOiAncGFub2xlbnMtZHVhbC1leWUtZWZmZWN0JywgbW9kZTogdGhpcy5tb2RlIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKCB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCwgdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGlzcGF0Y2ggbW9kZSBjaGFuZ2UgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjbW9kZS1jaGFuZ2VcclxuICAgICAgICAgKiBAcHJvcGVydHkge01PREVTfSBtb2RlIC0gQ3VycmVudCBkaXNwbGF5IG1vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ21vZGUtY2hhbmdlJywgbW9kZTogdGhpcy5tb2RlIH0gKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmFibGUgcmV0aWNsZSBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZW5hYmxlUmV0aWNsZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnJldGljbGUudmlzaWJsZSApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMudGVtcEVuYWJsZVJldGljbGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBSZWdpc3RlciByZXRpY2xlIGV2ZW50IGFuZCB1bnJlZ2lzdGVyIG1vdXNlIGV2ZW50XHJcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMucmV0aWNsZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclJldGljbGVFdmVudCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmV0aWNsZUV2ZW50KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgcmV0aWNsZSBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZVJldGljbGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcEVuYWJsZVJldGljbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgbW91c2UgZXZlbnQgYW5kIHVucmVnaXN0ZXIgcmV0aWNsZSBldmVudFxyXG4gICAgICAgIGlmICggIXRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy51bnJlZ2lzdGVyUmV0aWNsZUV2ZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSBhdXRvIHJvdGF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZW5hYmxlQXV0b1JhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSBhdXRvIHJvdGF0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUF1dG9SYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCggdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkICk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgdmlkZW8gcGxheSBvciBzdG9wXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEBmaXJlcyBWaWV3ZXIjdmlkZW8tdG9nZ2xlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVZpZGVvUGxheTogZnVuY3Rpb24gKCBwYXVzZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnBhbm9yYW1hIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUb2dnbGUgdmlkZW8gZXZlbnRcclxuICAgICAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby10b2dnbGVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRoaXMucGFub3JhbWEuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdG9nZ2xlJywgcGF1c2U6IHBhdXNlIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY3VycmVudFRpbWUgaW4gYSB2aWRlb1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlld2VyI3ZpZGVvLXRpbWVcclxuICAgICAqL1xyXG4gICAgc2V0VmlkZW9DdXJyZW50VGltZTogZnVuY3Rpb24gKCBwZXJjZW50YWdlICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMucGFub3JhbWEgaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hICkge1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldHRpbmcgdmlkZW8gdGltZSBldmVudFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXRpbWVcclxuICAgICAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHBlcmNlbnRhZ2UgLSBQZXJjZW50YWdlIG9mIGEgdmlkZW8uIFJhbmdlIGZyb20gMC4wIHRvIDEuMFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICd2aWRlby10aW1lJywgcGVyY2VudGFnZTogcGVyY2VudGFnZSB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHZpZGVvIHVwZGF0ZXMgaWYgYW4gd2lkZ2V0IGlzIHByZXNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQGZpcmVzIFZpZXdlciN2aWRlby11cGRhdGVcclxuICAgICAqL1xyXG4gICAgb25WaWRlb1VwZGF0ZTogZnVuY3Rpb24gKCBwZXJjZW50YWdlICkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVmlkZW8gdXBkYXRlIGV2ZW50XHJcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cclxuICAgICAgICAgKiBAZXZlbnQgVmlld2VyI3ZpZGVvLXVwZGF0ZVxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwZXJjZW50YWdlIC0gUGVyY2VudGFnZSBvZiBhIHZpZGVvLiBSYW5nZSBmcm9tIDAuMCB0byAxLjBcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tdXBkYXRlJywgcGVyY2VudGFnZTogcGVyY2VudGFnZSB9ICk7IH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIHVwZGF0ZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgZXZlcnkgYW5pbWF0aW9uIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZFVwZGF0ZUNhbGxiYWNrOiBmdW5jdGlvbiAoIGZuICkge1xyXG5cclxuICAgICAgICBpZiAoIGZuICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxsYmFja3MucHVzaCggZm4gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gYmUgcmVtb3ZlZFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZVVwZGF0ZUNhbGxiYWNrOiBmdW5jdGlvbiAoIGZuICkge1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudXBkYXRlQ2FsbGJhY2tzLmluZGV4T2YoIGZuICk7XHJcblxyXG4gICAgICAgIGlmICggZm4gJiYgaW5kZXggPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHZpZGVvIHdpZGdldFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNob3dWaWRlb1dpZGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2hvdyB2aWRlbyB3aWRnZXQgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjdmlkZW8tY29udHJvbC1zaG93XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYoIHdpZGdldCApIHsgd2lkZ2V0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ZpZGVvLWNvbnRyb2wtc2hvdycgfSApOyB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgdmlkZW8gd2lkZ2V0XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgaGlkZVZpZGVvV2lkZ2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIaWRlIHZpZGVvIHdpZGdldFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN2aWRlby1jb250cm9sLWhpZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiggd2lkZ2V0ICkgeyB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAndmlkZW8tY29udHJvbC1oaWRlJyB9ICk7IH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHZpZGVvIHBsYXkgYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlZCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaWRlb1BsYXlCdXR0b246IGZ1bmN0aW9uICggcGF1c2VkICkge1xyXG5cclxuICAgICAgICBjb25zdCB7IHdpZGdldCB9ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCB3aWRnZXQgJiYgd2lkZ2V0LnZpZGVvRWxlbWVudCAmJiB3aWRnZXQudmlkZW9FbGVtZW50LmNvbnRyb2xCdXR0b24gKSB7XHJcblxyXG4gICAgICAgICAgICB3aWRnZXQudmlkZW9FbGVtZW50LmNvbnRyb2xCdXR0b24udXBkYXRlKCBwYXVzZWQgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZGVmYXVsdCBwYW5vcmFtYSBldmVudCBsaXN0ZW5lcnNcclxuICAgICAqIEBwYXJhbSB7UGFub3JhbWF9IHBhbm8gLSBUaGUgcGFub3JhbWEgdG8gYmUgYWRkZWQgd2l0aCBldmVudCBsaXN0ZW5lclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZFBhbm9yYW1hRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCBwYW5vICkge1xyXG5cclxuICAgICAgICAvLyBTZXQgY2FtZXJhIGNvbnRyb2wgb24gZXZlcnkgcGFub3JhbWFcclxuICAgICAgICBwYW5vLmFkZEV2ZW50TGlzdGVuZXIoICdlbnRlci1mYWRlLXN0YXJ0JywgdGhpcy5zZXRDYW1lcmFDb250cm9sLmJpbmQoIHRoaXMgKSApO1xyXG5cclxuICAgICAgICAvLyBTaG93IGFuZCBoaWRlIHdpZGdldCBldmVudCBvbmx5IHdoZW4gaXQncyBWaWRlb1Bhbm9yYW1hXHJcbiAgICAgICAgaWYgKCBwYW5vIGluc3RhbmNlb2YgVmlkZW9QYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgICAgIHBhbm8uYWRkRXZlbnRMaXN0ZW5lciggJ2VudGVyLWZhZGUtc3RhcnQnLCB0aGlzLnNob3dWaWRlb1dpZGdldC5iaW5kKCB0aGlzICkgKTtcclxuICAgICAgICAgICAgcGFuby5hZGRFdmVudExpc3RlbmVyKCAnbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAhKHRoaXMucGFub3JhbWEgaW5zdGFuY2VvZiBWaWRlb1Bhbm9yYW1hKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlVmlkZW9XaWRnZXQuY2FsbCggdGhpcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgY2FtZXJhIGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBzZXRDYW1lcmFDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy50YXJnZXQuY29weSggdGhpcy5wYW5vcmFtYS5wb3NpdGlvbiApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY3VycmVudCBjYW1lcmEgY29udHJvbFxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSAtIEN1cnJlbnQgbmF2aWdhdGlvbiBjb250cm9sXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm5zIHtUSFJFRS5PcmJpdENvbnRyb2xzfFRIUkVFLkRldmljZU9yaWVudGF0aW9uQ29udHJvbHN9XHJcbiAgICAgKi9cclxuICAgIGdldENvbnRyb2w6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHNjZW5lXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge1RIUkVFLlNjZW5lfSAtIEN1cnJlbnQgc2NlbmUgd2hpY2ggdGhlIHZpZXdlciBpcyBidWlsdCBvblxyXG4gICAgICovXHJcbiAgICBnZXRTY2VuZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNhbWVyYVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAcmV0dXJuIHtUSFJFRS5DYW1lcmF9IC0gVGhlIHNjZW5lIGNhbWVyYVxyXG4gICAgICovXHJcbiAgICBnZXRDYW1lcmE6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgcmVuZGVyZXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7VEhSRUUuV2ViR0xSZW5kZXJlcn0gLSBUaGUgcmVuZGVyZXIgdXNpbmcgd2ViZ2xcclxuICAgICAqL1xyXG4gICAgZ2V0UmVuZGVyZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gVGhlIGNvbnRhaW5lciBob2xkcyByZW5kZXJlcmQgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIGdldENvbnRhaW5lcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb250cm9sIGlkXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBDb250cm9sIGlkLiAnb3JiaXQnIG9yICdkZXZpY2Utb3JpZW50YXRpb24nXHJcbiAgICAgKi9cclxuICAgIGdldENvbnRyb2xJZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLmlkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbmV4dCBuYXZpZ2F0aW9uIGNvbnRyb2wgaWRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAtIE5leHQgY29udHJvbCBpZFxyXG4gICAgICovXHJcbiAgICBnZXROZXh0Q29udHJvbElkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xzWyB0aGlzLmdldE5leHRDb250cm9sSW5kZXgoKSBdLmlkO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbmV4dCBuYXZpZ2F0aW9uIGNvbnRyb2wgaW5kZXhcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIE5leHQgY29udHJvbCBpbmRleFxyXG4gICAgICovXHJcbiAgICBnZXROZXh0Q29udHJvbEluZGV4OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5jb250cm9scztcclxuICAgICAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGNvbnRyb2xzLmluZGV4T2YoIGNvbnRyb2wgKSArIDE7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5leHRJbmRleCA+PSBjb250cm9scy5sZW5ndGggKSA/IDAgOiBuZXh0SW5kZXg7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBmaWVsZCBvZiB2aWV3IG9mIGNhbWVyYVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZvdlxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIHNldENhbWVyYUZvdjogZnVuY3Rpb24gKCBmb3YgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhLmZvdiA9IGZvdjtcclxuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuYWJsZSBjb250cm9sIGJ5IGluZGV4XHJcbiAgICAgKiBAcGFyYW0gIHtDT05UUk9MU30gaW5kZXggLSBJbmRleCBvZiBjYW1lcmEgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUNvbnRyb2w6IGZ1bmN0aW9uICggaW5kZXggKSB7XHJcblxyXG4gICAgICAgIGluZGV4ID0gKCBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5jb250cm9scy5sZW5ndGggKSA/IGluZGV4IDogMDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5jb250cm9sc1sgaW5kZXggXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgICAgY2FzZSBDT05UUk9MUy5PUkJJVDpcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkoIHRoaXMucGFub3JhbWEucG9zaXRpb24gKTtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiArPSAxO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ09OVFJPTFMuREVWSUNFT1JJRU5UQVRJT046XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KCB0aGlzLnBhbm9yYW1hLnBvc2l0aW9uICk7XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2YXRlV2lkZ2V0SXRlbSggaW5kZXgsIHVuZGVmaW5lZCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNhYmxlIGN1cnJlbnQgY29udHJvbFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBuZXh0IGNvbnRyb2xcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVOZXh0Q29udHJvbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmVuYWJsZUNvbnRyb2woIHRoaXMuZ2V0TmV4dENvbnRyb2xJbmRleCgpICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcmVlbiBTcGFjZSBQcm9qZWN0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZ2V0U2NyZWVuVmVjdG9yOiBmdW5jdGlvbiAoIHdvcmxkVmVjdG9yICkge1xyXG5cclxuICAgICAgICBjb25zdCB2ZWN0b3IgPSB3b3JsZFZlY3Rvci5jbG9uZSgpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoSGFsZiA9ICggdGhpcy5jb250YWluZXIuY2xpZW50V2lkdGggKSAvIDI7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0SGFsZiA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIHZlY3Rvci5wcm9qZWN0KCB0aGlzLmNhbWVyYSApO1xyXG5cclxuICAgICAgICB2ZWN0b3IueCA9ICggdmVjdG9yLnggKiB3aWR0aEhhbGYgKSArIHdpZHRoSGFsZjtcclxuICAgICAgICB2ZWN0b3IueSA9IC0gKCB2ZWN0b3IueSAqIGhlaWdodEhhbGYgKSArIGhlaWdodEhhbGY7XHJcbiAgICAgICAgdmVjdG9yLnogPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVjdG9yO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBTcHJpdGUgaW4gVmlld3BvcnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBjaGVja1Nwcml0ZUluVmlld3BvcnQ6IGZ1bmN0aW9uICggc3ByaXRlICkge1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZ2V0SW52ZXJzZSggdGhpcy5jYW1lcmEubWF0cml4V29ybGQgKTtcclxuICAgICAgICB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4Lm11bHRpcGx5TWF0cmljZXMoIHRoaXMuY2FtZXJhLnByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZSApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhRnJ1c3R1bS5zZXRGcm9tTWF0cml4KCB0aGlzLmNhbWVyYVZpZXdQcm9qZWN0aW9uTWF0cml4ICk7XHJcblxyXG4gICAgICAgIHJldHVybiBzcHJpdGUudmlzaWJsZSAmJiB0aGlzLmNhbWVyYUZydXN0dW0uaW50ZXJzZWN0c1Nwcml0ZSggc3ByaXRlICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldmVyc2UgZHJhZ2dpbmcgZGlyZWN0aW9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmV2ZXJzZURyYWdnaW5nRGlyZWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuT3JiaXRDb250cm9scy5yb3RhdGVTcGVlZCAqPSAtMTtcclxuICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMubW9tZW50dW1TY2FsaW5nRmFjdG9yICo9IC0xO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgcmV0aWNsZSBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBhZGRSZXRpY2xlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmV0aWNsZSA9IG5ldyBSZXRpY2xlKCAweGZmZmZmZiwgdHJ1ZSwgdGhpcy5vcHRpb25zLmR3ZWxsVGltZSApO1xyXG4gICAgICAgIHRoaXMucmV0aWNsZS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYWRkKCB0aGlzLnJldGljbGUgKTtcclxuICAgICAgICB0aGlzLnNjZW5lUmV0aWNsZS5hZGQoIHRoaXMuY2FtZXJhICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR3ZWVuIGNvbnRyb2wgbG9va2luZyBjZW50ZXJcclxuICAgICAqIEBwYXJhbSB7VEhSRUUuVmVjdG9yM30gdmVjdG9yIC0gVmVjdG9yIHRvIGJlIGxvb2tlZCBhdCB0aGUgY2VudGVyXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlYXNpbmc9VFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dF0gLSBFYXNpbmcgZnVuY3Rpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0d2VlbkNvbnRyb2xDZW50ZXI6IGZ1bmN0aW9uICggdmVjdG9yLCBkdXJhdGlvbiwgZWFzaW5nICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMuY29udHJvbCAhPT0gdGhpcy5PcmJpdENvbnRyb2xzICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBhc3MgaW4gYXJndW1lbnRzIGFzIGFycmF5XHJcbiAgICAgICAgaWYgKCB2ZWN0b3IgaW5zdGFuY2VvZiBBcnJheSApIHtcclxuXHJcbiAgICAgICAgICAgIGR1cmF0aW9uID0gdmVjdG9yWyAxIF07XHJcbiAgICAgICAgICAgIGVhc2luZyA9IHZlY3RvclsgMiBdO1xyXG4gICAgICAgICAgICB2ZWN0b3IgPSB2ZWN0b3JbIDAgXTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBkdXJhdGlvbiA6IDEwMDA7XHJcbiAgICAgICAgZWFzaW5nID0gZWFzaW5nIHx8IFRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXQ7XHJcblxyXG4gICAgICAgIGxldCBzY29wZSwgaGEsIHZhLCBjaHYsIGN2diwgaHYsIHZ2LCB2cHRjLCBvdiwgbnY7XHJcblxyXG4gICAgICAgIHNjb3BlID0gdGhpcztcclxuXHJcbiAgICAgICAgY2h2ID0gdGhpcy5jYW1lcmEuZ2V0V29ybGREaXJlY3Rpb24oIG5ldyBUSFJFRS5WZWN0b3IzKCkgKTtcclxuICAgICAgICBjdnYgPSBjaHYuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgdnB0YyA9IHRoaXMucGFub3JhbWEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLnN1YiggdGhpcy5jYW1lcmEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApICk7XHJcblxyXG4gICAgICAgIGh2ID0gdmVjdG9yLmNsb25lKCk7XHJcbiAgICAgICAgLy8gU2NhbGUgZWZmZWN0XHJcbiAgICAgICAgaHYueCAqPSAtMTtcclxuICAgICAgICBodi5hZGQoIHZwdGMgKS5ub3JtYWxpemUoKTtcclxuICAgICAgICB2diA9IGh2LmNsb25lKCk7XHJcblxyXG4gICAgICAgIGNodi55ID0gMDtcclxuICAgICAgICBodi55ID0gMDtcclxuXHJcbiAgICAgICAgaGEgPSBNYXRoLmF0YW4yKCBodi56LCBodi54ICkgLSBNYXRoLmF0YW4yKCBjaHYueiwgY2h2LnggKTtcclxuICAgICAgICBoYSA9IGhhID4gTWF0aC5QSSA/IGhhIC0gMiAqIE1hdGguUEkgOiBoYTtcclxuICAgICAgICBoYSA9IGhhIDwgLU1hdGguUEkgPyBoYSArIDIgKiBNYXRoLlBJIDogaGE7XHJcbiAgICAgICAgdmEgPSBNYXRoLmFicyggY3Z2LmFuZ2xlVG8oIGNodiApICsgKCBjdnYueSAqIHZ2LnkgPD0gMCA/IHZ2LmFuZ2xlVG8oIGh2ICkgOiAtdnYuYW5nbGVUbyggaHYgKSApICk7XHJcbiAgICAgICAgdmEgKj0gdnYueSA8IGN2di55ID8gMSA6IC0xO1xyXG5cclxuICAgICAgICBvdiA9IHsgbGVmdDogMCwgdXA6IDAgfTtcclxuICAgICAgICBudiA9IHsgbGVmdDogMCwgdXA6IDAgfTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbkxlZnRBbmltYXRpb24uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uID0gbmV3IFRXRUVOLlR3ZWVuKCBvdiApXHJcbiAgICAgICAgICAgIC50byggeyBsZWZ0OiBoYSB9LCBkdXJhdGlvbiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIGVhc2luZyApXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbihvdil7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9sLnJvdGF0ZUxlZnQoIG92LmxlZnQgLSBudi5sZWZ0ICk7XHJcbiAgICAgICAgICAgICAgICBudi5sZWZ0ID0gb3YubGVmdDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5VcEFuaW1hdGlvbiA9IG5ldyBUV0VFTi5Ud2Vlbiggb3YgKVxyXG4gICAgICAgICAgICAudG8oIHsgdXA6IHZhIH0sIGR1cmF0aW9uIClcclxuICAgICAgICAgICAgLmVhc2luZyggZWFzaW5nIClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uKG92KXtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2wucm90YXRlVXAoIG92LnVwIC0gbnYudXAgKTtcclxuICAgICAgICAgICAgICAgIG52LnVwID0gb3YudXA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUd2VlbiBjb250cm9sIGxvb2tpbmcgY2VudGVyIGJ5IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHtUSFJFRS5PYmplY3QzRH0gb2JqZWN0IC0gT2JqZWN0IHRvIGJlIGxvb2tlZCBhdCB0aGUgY2VudGVyXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2R1cmF0aW9uPTEwMDBdIC0gRHVyYXRpb24gdG8gdHdlZW5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtlYXNpbmc9VFdFRU4uRWFzaW5nLkV4cG9uZW50aWFsLk91dF0gLSBFYXNpbmcgZnVuY3Rpb25cclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB0d2VlbkNvbnRyb2xDZW50ZXJCeU9iamVjdDogZnVuY3Rpb24gKCBvYmplY3QsIGR1cmF0aW9uLCBlYXNpbmcgKSB7XHJcblxyXG4gICAgICAgIGxldCBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBvYmplY3QudHJhdmVyc2VBbmNlc3RvcnMoIGZ1bmN0aW9uICggYW5jZXN0b3IgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGFuY2VzdG9yLnNjYWxlUGxhY2VIb2xkZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNVbmRlclNjYWxlUGxhY2VIb2xkZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBpc1VuZGVyU2NhbGVQbGFjZUhvbGRlciApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGludmVydFhWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggLTEsIDEsIDEgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5Db250cm9sQ2VudGVyKCBvYmplY3QuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLm11bHRpcGx5KCBpbnZlcnRYVmVjdG9yICksIGR1cmF0aW9uLCBlYXNpbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5Db250cm9sQ2VudGVyKCBvYmplY3QuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApLCBkdXJhdGlvbiwgZWFzaW5nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBjYWxsZWQgd2hlbiB3aW5kb3cgc2l6ZSBpcyBjaGFuZ2VkXHJcbiAgICAgKiBAZmlyZXMgVmlld2VyI3dpbmRvdy1yZXNpemVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2luZG93V2lkdGhdIC0gU3BlY2lmeSBpZiBjdXN0b20gZWxlbWVudCBoYXMgY2hhbmdlZCB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aW5kb3dIZWlnaHRdIC0gU3BlY2lmeSBpZiBjdXN0b20gZWxlbWVudCBoYXMgY2hhbmdlZCBoZWlnaHRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gKCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgd2lkdGgsIGhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgZXhwYW5kID0gdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGFub2xlbnMtY29udGFpbmVyJyApIHx8IHRoaXMuY29udGFpbmVyLmlzRnVsbHNjcmVlbjtcclxuXHJcbiAgICAgICAgaWYgKCB3aW5kb3dXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd0hlaWdodCAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICAgICAgd2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5fd2lkdGggPSB3aW5kb3dXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX2hlaWdodCA9IHdpbmRvd0hlaWdodDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQW5kcm9pZCA9IC8oYW5kcm9pZCkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFkanVzdFdpZHRoID0gaXNBbmRyb2lkIFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApIFxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWRqdXN0SGVpZ2h0ID0gaXNBbmRyb2lkIFxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1pbihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCkgXHJcbiAgICAgICAgICAgICAgICA6IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoID0gZXhwYW5kID8gYWRqdXN0V2lkdGggOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gZXhwYW5kID8gYWRqdXN0SGVpZ2h0IDogdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLl9oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2lkdGggLyBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoIHdpZHRoLCBoZWlnaHQgKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHJldGljbGVcclxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlIHx8IHRoaXMudGVtcEVuYWJsZVJldGljbGUgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJldGljbGVFdmVudCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbmRvdyByZXNpemluZyBldmVudFxyXG4gICAgICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgICAgICogQGV2ZW50IFZpZXdlciN3aW5kb3ctcmVzaXplXHJcbiAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoICAtIFdpZHRoIG9mIHRoZSB3aW5kb3dcclxuICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0IC0gSGVpZ2h0IG9mIHRoZSB3aW5kb3dcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3dpbmRvdy1yZXNpemUnLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnd2luZG93LXJlc2l6ZScsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIG91dHB1dCBlbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgYWRkT3V0cHV0RWxlbWVudDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gJzEwcHgnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzEwcHgnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI2ZmZic7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcclxuICAgICAgICB0aGlzLm91dHB1dERpdkVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXRwdXQgcG9zaXRpb24gaW4gZGV2ZWxvcGVyIGNvbnNvbGUgYnkgaG9sZGluZyBkb3duIEN0cmwgYnV0dG9uXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb3V0cHV0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0cyA9IHRoaXMucmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdCggdGhpcy5wYW5vcmFtYSwgdHJ1ZSApO1xyXG5cclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gaW50ZXJzZWN0c1sgMCBdLnBvaW50LmNsb25lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBUSFJFRS5WZWN0b3IzKCAtMSwgMSwgMSApO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IHRoaXMucGFub3JhbWEuZ2V0V29ybGRQb3NpdGlvbiggbmV3IFRIUkVFLlZlY3RvcjMoKSApO1xyXG4gICAgICAgICAgICBwb2ludC5zdWIoIHdvcmxkICkubXVsdGlwbHkoIGNvbnZlcnRlciApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54LnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICB5OiBwb2ludC55LnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgICAgICB6OiBwb2ludC56LnRvRml4ZWQoMiksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYCR7cG9zaXRpb24ueH0sICR7cG9zaXRpb24ueX0sICR7cG9zaXRpb24uen1gO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBwb2ludC5sZW5ndGgoKSA9PT0gMCApIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKCB0aGlzLm9wdGlvbnMub3V0cHV0ICkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZXZlbnQnOlxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBEaXNwYXRjaCByYXljYXN0IHBvc2l0aW9uIGFzIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAgICAgICAgICogQGV2ZW50IFZpZXdlciNwb3NpdGlvbi1vdXRwdXRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwb3NpdGlvbi1vdXRwdXQnLCBwb3NpdGlvbjogcG9zaXRpb24gfSApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdjb25zb2xlJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyggbWVzc2FnZSApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdvdmVybGF5JzpcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0RGl2RWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBtb3VzZSBkb3duXHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS54ID0gKCBldmVudC5jbGllbnRYID49IDAgKSA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UueSA9ICggZXZlbnQuY2xpZW50WSA+PSAwICkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbW91c2Vkb3duJztcclxuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBtb3VzZSBtb3ZlXHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMudXNlck1vdXNlLnR5cGUgPSAnbW91c2Vtb3ZlJztcclxuICAgICAgICB0aGlzLm9uVGFwKCBldmVudCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBtb3VzZSB1cFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBvblRhcmdldCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJNb3VzZS50eXBlID0gJ21vdXNldXAnO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gKCB0aGlzLnVzZXJNb3VzZS54ID49IGV2ZW50LmNsaWVudFggLSB0aGlzLm9wdGlvbnMuY2xpY2tUb2xlcmFuY2UgXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA+PSBldmVudC5jbGllbnRZIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueSA8PSBldmVudC5jbGllbnRZICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlICkgXHJcblx0XHRcdFx0fHwgICggZXZlbnQuY2hhbmdlZFRvdWNoZXMgXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueCA+PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlXHJcblx0XHRcdFx0JiYgdGhpcy51c2VyTW91c2UueCA8PSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgdGhpcy5vcHRpb25zLmNsaWNrVG9sZXJhbmNlIFxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnkgPj0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSAtIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZVxyXG5cdFx0XHRcdCYmIHRoaXMudXNlck1vdXNlLnkgPD0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSArIHRoaXMub3B0aW9ucy5jbGlja1RvbGVyYW5jZSApIFxyXG4gICAgICAgICAgICA/ICdjbGljaycgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50IHNob3VsZCBoYXBwZW4gb24gY2FudmFzXHJcbiAgICAgICAgaWYgKCBldmVudCAmJiBldmVudC50YXJnZXQgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICdwYW5vbGVucy1jYW52YXMnICkgKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gMSApIHtcclxuXHJcbiAgICAgICAgICAgIG9uVGFyZ2V0ID0gdGhpcy5vblRhcCggeyBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIH0sIHR5cGUgKTtcclxuXHRcdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBvblRhcmdldCA9IHRoaXMub25UYXAoIGV2ZW50LCB0eXBlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51c2VyTW91c2UudHlwZSA9ICdub25lJztcclxuXHJcbiAgICAgICAgaWYgKCBvblRhcmdldCApIHsgXHJcblxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ2NsaWNrJyApIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgb3B0aW9uczogeyBhdXRvSGlkZUluZm9zcG90LCBhdXRvSGlkZUNvbnRyb2xCYXIgfSwgcGFub3JhbWEsIHRvZ2dsZUNvbnRyb2xCYXIgfSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGF1dG9IaWRlSW5mb3Nwb3QgJiYgcGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFub3JhbWEudG9nZ2xlSW5mb3Nwb3RWaXNpYmlsaXR5KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGF1dG9IaWRlQ29udHJvbEJhciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVDb250cm9sQmFyKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gdGFwIGV2ZW55IGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50IFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25UYXA6IGZ1bmN0aW9uICggZXZlbnQsIHR5cGUgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgfSA9IHRoaXMuY29udGFpbmVyO1xyXG5cclxuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50LnggPSAoICggZXZlbnQuY2xpZW50WCAtIGxlZnQgKSAvIGNsaWVudFdpZHRoICkgKiAyIC0gMTtcclxuICAgICAgICB0aGlzLnJheWNhc3RlclBvaW50LnkgPSAtICggKCBldmVudC5jbGllbnRZIC0gdG9wICkgLyBjbGllbnRIZWlnaHQgKSAqIDIgKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKCB0aGlzLnJheWNhc3RlclBvaW50LCB0aGlzLmNhbWVyYSApO1xyXG5cclxuICAgICAgICAvLyBSZXR1cm4gaWYgbm8gcGFub3JhbWEgXHJcbiAgICAgICAgaWYgKCAhdGhpcy5wYW5vcmFtYSApIHsgXHJcblxyXG4gICAgICAgICAgICByZXR1cm47IFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG91dHB1dCBpbmZvc3BvdCBpbmZvcm1hdGlvblxyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gJ21vdXNlZG93bicgJiYgdGhpcy50b3VjaFN1cHBvcnRlZCB8fCB0aGlzLk9VVFBVVF9JTkZPU1BPVCApIHsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLm91dHB1dFBvc2l0aW9uKCk7IFxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggdGhpcy5wYW5vcmFtYS5jaGlsZHJlbiwgdHJ1ZSApO1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdF9lbnRpdHkgPSB0aGlzLmdldENvbnZlcnRlZEludGVyc2VjdCggaW50ZXJzZWN0cyApO1xyXG4gICAgICAgIGNvbnN0IGludGVyc2VjdCA9ICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkgPyBpbnRlcnNlY3RzWzBdLm9iamVjdCA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPT09IGludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdG9wLWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLnVzZXJNb3VzZS50eXBlID09PSAnbW91c2V1cCcgICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdCA9PT0gaW50ZXJzZWN0ICYmIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzc3RvcCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYW5vcmFtYS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljaycsIGludGVyc2VjdHM6IGludGVyc2VjdHMsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0X2VudGl0eSAmJiBpbnRlcnNlY3RfZW50aXR5LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0X2VudGl0eS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdjbGljay1lbnRpdHknLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY2xpY2snLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2hvdmVyJywgaW50ZXJzZWN0czogaW50ZXJzZWN0cywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAoIHRoaXMuaG92ZXJPYmplY3QgJiYgaW50ZXJzZWN0cy5sZW5ndGggPiAwICYmIHRoaXMuaG92ZXJPYmplY3QgIT09IGludGVyc2VjdF9lbnRpdHkgKVxyXG5cdFx0XHRcdHx8ICggdGhpcy5ob3Zlck9iamVjdCAmJiBpbnRlcnNlY3RzLmxlbmd0aCA9PT0gMCApICl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmhvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXJsZWF2ZScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRpY2xlLmVuZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBpbnRlcnNlY3RfZW50aXR5ICYmIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QgIT09IGludGVyc2VjdF9lbnRpdHkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QgPSBpbnRlcnNlY3RfZW50aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnaG92ZXJlbnRlcicsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHJldGljbGUgdGltZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuYXV0b1JldGljbGVTZWxlY3QgJiYgdGhpcy5vcHRpb25zLmVuYWJsZVJldGljbGUgfHwgdGhpcy50ZW1wRW5hYmxlUmV0aWNsZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0aWNsZS5zdGFydCggdGhpcy5vblRhcC5iaW5kKCB0aGlzLCBldmVudCwgJ2NsaWNrJyApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgIT0gaW50ZXJzZWN0X2VudGl0eSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdCA9IGludGVyc2VjdF9lbnRpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0YXJ0LWVudGl0eScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMucHJlc3NPYmplY3QgIT0gaW50ZXJzZWN0ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0ID0gaW50ZXJzZWN0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc3NPYmplY3QuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAncHJlc3NzdGFydCcsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMudXNlck1vdXNlLnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IHRoaXMub3B0aW9ucy5lbmFibGVSZXRpY2xlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGludGVyc2VjdCAmJiBpbnRlcnNlY3QuZGlzcGF0Y2hFdmVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyc2VjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdob3ZlcicsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc21vdmUtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5wcmVzc09iamVjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ3ByZXNzbW92ZScsIG1vdXNlRXZlbnQ6IGV2ZW50IH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggIWludGVyc2VjdF9lbnRpdHkgJiYgdGhpcy5wcmVzc0VudGl0eU9iamVjdCAmJiB0aGlzLnByZXNzRW50aXR5T2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc0VudGl0eU9iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AtZW50aXR5JywgbW91c2VFdmVudDogZXZlbnQgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3NFbnRpdHlPYmplY3QgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoICFpbnRlcnNlY3QgJiYgdGhpcy5wcmVzc09iamVjdCAmJiB0aGlzLnByZXNzT2JqZWN0LmRpc3BhdGNoRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdC5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdwcmVzc3N0b3AnLCBtb3VzZUV2ZW50OiBldmVudCB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc09iamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbmZvc3BvdCBoYW5kbGVyXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3QgJiYgaW50ZXJzZWN0IGluc3RhbmNlb2YgSW5mb3Nwb3QgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90ID0gaW50ZXJzZWN0O1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgaWYgKCB0eXBlID09PSAnY2xpY2snICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5pbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUluZm9zcG90KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXV0byByb3RhdGVcclxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5hdXRvUm90YXRlICYmIHRoaXMudXNlck1vdXNlLnR5cGUgIT09ICdtb3VzZW1vdmUnICkge1xyXG5cclxuICAgICAgICAgICAgLy8gQXV0by1yb3RhdGUgaWRsZSB0aW1lclxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoIHRoaXMuYXV0b1JvdGF0ZVJlcXVlc3RJZCApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmNvbnRyb2wgPT09IHRoaXMuT3JiaXRDb250cm9scyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLk9yYml0Q29udHJvbHMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvUm90YXRlUmVxdWVzdElkID0gd2luZG93LnNldFRpbWVvdXQoIHRoaXMuZW5hYmxlQXV0b1JhdGUuYmluZCggdGhpcyApLCB0aGlzLm9wdGlvbnMuYXV0b1JvdGF0ZUFjdGl2YXRpb25EdXJhdGlvbiApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHRcdFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY29udmVydGVkIGludGVyc2VjdFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaW50ZXJzZWN0cyBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBnZXRDb252ZXJ0ZWRJbnRlcnNlY3Q6IGZ1bmN0aW9uICggaW50ZXJzZWN0cyApIHtcclxuXHJcbiAgICAgICAgbGV0IGludGVyc2VjdDtcclxuXHJcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggaW50ZXJzZWN0c1tpXS5kaXN0YW5jZSA+PSAwICYmIGludGVyc2VjdHNbaV0ub2JqZWN0ICYmICFpbnRlcnNlY3RzW2ldLm9iamVjdC5wYXNzVGhyb3VnaCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eSAmJiBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkucGFzc1Rocm91Z2ggKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHkgJiYgIWludGVyc2VjdHNbaV0ub2JqZWN0LmVudGl0eS5wYXNzVGhyb3VnaCApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzW2ldLm9iamVjdC5lbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdCA9IGludGVyc2VjdHNbaV0ub2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Q7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgaW5mb3Nwb3RcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBoaWRlSW5mb3Nwb3Q6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLmluZm9zcG90ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmZvc3BvdC5vbkhvdmVyRW5kKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluZm9zcG90ID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBjb250cm9sIGJhclxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKiBAZmlyZXMgVmlld2VyI2NvbnRyb2wtYmFyLXRvZ2dsZVxyXG4gICAgICovXHJcbiAgICB0b2dnbGVDb250cm9sQmFyOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgd2lkZ2V0IH0gPSB0aGlzO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb2dnbGUgY29udHJvbCBiYXIgZXZlbnRcclxuICAgICAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICAgICAqIEBldmVudCBWaWV3ZXIjY29udHJvbC1iYXItdG9nZ2xlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKCB3aWRnZXQgKSB7XHJcblxyXG4gICAgICAgICAgICB3aWRnZXQuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnY29udHJvbC1iYXItdG9nZ2xlJyB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24ga2V5IGRvd25cclxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5vdXRwdXQgJiYgdGhpcy5vcHRpb25zLm91dHB1dCAhPT0gJ25vbmUnICYmIGV2ZW50LmtleSA9PT0gJ0NvbnRyb2wnICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5PVVRQVVRfSU5GT1NQT1QgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGtleSB1cFxyXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvbktleVVwOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuT1VUUFVUX0lORk9TUE9UID0gZmFsc2U7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSBjb250cm9sIGFuZCBjYWxsYmFja3NcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgVFdFRU4udXBkYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbGJhY2tzLmZvckVhY2goIGZ1bmN0aW9uKCBjYWxsYmFjayApeyBjYWxsYmFjaygpOyB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS50cmF2ZXJzZSggZnVuY3Rpb24oIGNoaWxkICl7XHJcbiAgICAgICAgICAgIGlmICggY2hpbGQgaW5zdGFuY2VvZiBJbmZvc3BvdCBcclxuXHRcdFx0XHQmJiBjaGlsZC5lbGVtZW50IFxyXG5cdFx0XHRcdCYmICggdGhpcy5ob3Zlck9iamVjdCA9PT0gY2hpbGQgXHJcblx0XHRcdFx0XHR8fCBjaGlsZC5lbGVtZW50LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyBcclxuXHRcdFx0XHRcdHx8IChjaGlsZC5lbGVtZW50LmxlZnQgJiYgY2hpbGQuZWxlbWVudC5sZWZ0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJylcclxuXHRcdFx0XHRcdHx8IChjaGlsZC5lbGVtZW50LnJpZ2h0ICYmIGNoaWxkLmVsZW1lbnQucmlnaHQuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSApICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNoZWNrU3ByaXRlSW5WaWV3cG9ydCggY2hpbGQgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuVmVjdG9yKCBjaGlsZC5nZXRXb3JsZFBvc2l0aW9uKCBuZXcgVEhSRUUuVmVjdG9yMygpICkgKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC50cmFuc2xhdGVFbGVtZW50KCB4LCB5ICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm9uRGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKCB0aGlzICkgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyaW5nIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBhbmltYXRpb24gZnJhbWVcclxuICAgICAqIFJlbmRlciByZXRpY2xlIGxhc3RcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCB0aGlzLm1vZGUgPT09IE1PREVTLkNBUkRCT0FSRCB8fCB0aGlzLm1vZGUgPT09IE1PREVTLlNURVJFTyApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3QucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdC5yZW5kZXIoIHRoaXMuc2NlbmVSZXRpY2xlLCB0aGlzLmNhbWVyYSApO1xyXG5cdFx0XHRcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXJEZXB0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZVJldGljbGUsIHRoaXMuY2FtZXJhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZVxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLmFuaW1hdGUuYmluZCggdGhpcyApICk7XHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gY2hhbmdlXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBtb3VzZSBhbmQgdG91Y2ggZXZlbnQgb24gY29udGFpbmVyXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJNb3VzZUFuZFRvdWNoRXZlbnRzOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHBhc3NpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgb3B0aW9ucyApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgb3B0aW9ucyApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJ1x0ICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgb3B0aW9ucyApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgXHR0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgb3B0aW9ucyApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgXHR0aGlzLkhBTkRMRVJfTU9VU0VfVVAgICwgb3B0aW9ucyApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIG1vdXNlIGFuZCB0b3VjaCBldmVudCBvbiBjb250YWluZXJcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyTW91c2VBbmRUb3VjaEV2ZW50czogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfRE9XTiwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJyAsICB0aGlzLkhBTkRMRVJfTU9VU0VfTU9WRSwgZmFsc2UgKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCdcdCwgIHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgIHRoaXMuSEFORExFUl9NT1VTRV9ET1dOLCBmYWxzZSApO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcgICwgIHRoaXMuSEFORExFUl9NT1VTRV9VUCAgLCBmYWxzZSApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciByZXRpY2xlIGV2ZW50XHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJSZXRpY2xlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRVcGRhdGVDYWxsYmFjayggdGhpcy5IQU5ETEVSX1RBUCApO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIHJldGljbGUgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyUmV0aWNsZUV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHJldGljbGUgZXZlbnRcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVSZXRpY2xlRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2xpZW50WCA9IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIC8gMiArIHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgY29uc3QgY2xpZW50WSA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcclxuICAgICAgICB0aGlzLkhBTkRMRVJfVEFQID0gdGhpcy5vblRhcC5iaW5kKCB0aGlzLCB7IGNsaWVudFgsIGNsaWVudFkgfSApO1xyXG4gICAgICAgIHRoaXMuYWRkVXBkYXRlQ2FsbGJhY2soIHRoaXMuSEFORExFUl9UQVAgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgY29udGFpbmVyIGFuZCB3aW5kb3cgbGlzdGVuZXJzXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJFdmVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyBSZXNpemUgRXZlbnRcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScgLCB0aGlzLkhBTkRMRVJfV0lORE9XX1JFU0laRSwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBLZXlib2FyZCBFdmVudFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIHRoaXMuSEFORExFUl9LRVlfRE9XTiwgdHJ1ZSApO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5dXAnICAsIHRoaXMuSEFORExFUl9LRVlfVVBcdCAsIHRydWUgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBjb250YWluZXIgYW5kIHdpbmRvdyBsaXN0ZW5lcnNcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gUmVzaXplIEV2ZW50XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnICwgdGhpcy5IQU5ETEVSX1dJTkRPV19SRVNJWkUsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gS2V5Ym9hcmQgRXZlbnRcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzLkhBTkRMRVJfS0VZX0RPV04sIHRydWUgKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXVwJyAgLCB0aGlzLkhBTkRMRVJfS0VZX1VQICAsIHRydWUgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcG9zZSBhbGwgc2NlbmUgb2JqZWN0cyBhbmQgY2xlYXIgY2FjaGVcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MZWZ0QW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnR3ZWVuVXBBbmltYXRpb24uc3RvcCgpO1xyXG5cclxuICAgICAgICAvLyBVbnJlZ2lzdGVyIGRvbSBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICAvLyByZWN1cnNpdmUgZGlzcG9zYWwgb24gM2Qgb2JqZWN0c1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZURpc3Bvc2UgKCBvYmplY3QgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IG9iamVjdC5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVEaXNwb3NlKCBvYmplY3QuY2hpbGRyZW5baV0gKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUoIG9iamVjdC5jaGlsZHJlbltpXSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBvYmplY3QgaW5zdGFuY2VvZiBQYW5vcmFtYSB8fCBvYmplY3QgaW5zdGFuY2VvZiBJbmZvc3BvdCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3QuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIG9iamVjdC5kaXNwYXRjaEV2ZW50ICl7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0LmRpc3BhdGNoRXZlbnQoICdkaXNwb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY3Vyc2l2ZURpc3Bvc2UoIHRoaXMuc2NlbmUgKTtcclxuXHJcbiAgICAgICAgLy8gZGlzcG9zZSB3aWRnZXRcclxuICAgICAgICBpZiAoIHRoaXMud2lkZ2V0ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy53aWRnZXQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLndpZGdldCA9IG51bGw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xlYXIgY2FjaGVcclxuICAgICAgICBpZiAoIFRIUkVFLkNhY2hlICYmIFRIUkVFLkNhY2hlLmVuYWJsZWQgKSB7XHJcblxyXG4gICAgICAgICAgICBUSFJFRS5DYWNoZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgdmlld2VyIGJ5IGRpc3Bvc2luZyBhbmQgc3RvcHBpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgKiBAbWVtYmVyT2YgVmlld2VyXHJcbiAgICAgKiBAaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGhpcy5yZXF1ZXN0QW5pbWF0aW9uSWQgKTtcdFx0XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHBhbm9yYW1hIGRpc3Bvc2VcclxuICAgICAqIEBtZW1iZXJPZiBWaWV3ZXJcclxuICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICovXHJcbiAgICBvblBhbm9yYW1hRGlzcG9zZTogZnVuY3Rpb24gKCBwYW5vcmFtYSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBwYW5vcmFtYSBpbnN0YW5jZW9mIFZpZGVvUGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhpZGVWaWRlb1dpZGdldCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggcGFub3JhbWEgPT09IHRoaXMucGFub3JhbWEgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhbm9yYW1hID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGFqYXggY2FsbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBiZSByZXF1ZXN0ZWRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBDYWxsYmFjayBhZnRlciByZXF1ZXN0IGNvbXBsZXRlc1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGxvYWRBc3luY1JlcXVlc3Q6IGZ1bmN0aW9uICggdXJsLCBjYWxsYmFjayA9ICgpID0+IHt9ICkge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gZnVuY3Rpb24gKCBldmVudCApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soIGV2ZW50ICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oICdHRVQnLCB1cmwsIHRydWUgKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoIG51bGwgKTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmlldyBpbmRpY2F0b3IgaW4gdXBwZXIgbGVmdFxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFkZFZpZXdJbmRpY2F0b3I6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkVmlld0luZGljYXRvciAoIGFzeW5jRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGFzeW5jRXZlbnQubG9hZGVkID09PSAwICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgdmlld0luZGljYXRvckRpdiA9IGFzeW5jRXZlbnQudGFyZ2V0LnJlc3BvbnNlWE1MLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS53aWR0aCA9IHNjb3BlLnZpZXdJbmRpY2F0b3JTaXplICsgJ3B4JztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5oZWlnaHQgPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLnRvcCA9ICcxMHB4JztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5sZWZ0ID0gJzEwcHgnO1xyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgdmlld0luZGljYXRvckRpdi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuaWQgPSAncGFub2xlbnMtdmlldy1pbmRpY2F0b3ItY29udGFpbmVyJztcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdmlld0luZGljYXRvckRpdiApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gdmlld0luZGljYXRvckRpdi5xdWVyeVNlbGVjdG9yKCAnI2luZGljYXRvcicgKTtcclxuICAgICAgICAgICAgY29uc3Qgc2V0SW5kaWNhdG9yRCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5yYWRpdXMgPSBzY29wZS52aWV3SW5kaWNhdG9yU2l6ZSAqIDAuMjI1O1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuY3VycmVudFBhbm9BbmdsZSA9IHNjb3BlLmNhbWVyYS5yb3RhdGlvbi55IC0gVEhSRUUuTWF0aC5kZWdUb1JhZCggOTAgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmZvdkFuZ2xlID0gVEhSRUUuTWF0aC5kZWdUb1JhZCggc2NvcGUuY2FtZXJhLmZvdiApIDtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmxlZnRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlIC0gc2NvcGUuZm92QW5nbGUgLyAyO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUucmlnaHRBbmdsZSA9IC1zY29wZS5jdXJyZW50UGFub0FuZ2xlICsgc2NvcGUuZm92QW5nbGUgLyAyO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUubGVmdFggPSBzY29wZS5yYWRpdXMgKiBNYXRoLmNvcyggc2NvcGUubGVmdEFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5sZWZ0WSA9IHNjb3BlLnJhZGl1cyAqIE1hdGguc2luKCBzY29wZS5sZWZ0QW5nbGUgKTtcclxuICAgICAgICAgICAgICAgIHNjb3BlLnJpZ2h0WCA9IHNjb3BlLnJhZGl1cyAqIE1hdGguY29zKCBzY29wZS5yaWdodEFuZ2xlICk7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5yaWdodFkgPSBzY29wZS5yYWRpdXMgKiBNYXRoLnNpbiggc2NvcGUucmlnaHRBbmdsZSApO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuaW5kaWNhdG9yRCA9ICdNICcgKyBzY29wZS5sZWZ0WCArICcgJyArIHNjb3BlLmxlZnRZICsgJyBBICcgKyBzY29wZS5yYWRpdXMgKyAnICcgKyBzY29wZS5yYWRpdXMgKyAnIDAgMCAxICcgKyBzY29wZS5yaWdodFggKyAnICcgKyBzY29wZS5yaWdodFk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5sZWZ0WCAmJiBzY29wZS5sZWZ0WSAmJiBzY29wZS5yaWdodFggJiYgc2NvcGUucmlnaHRZICYmIHNjb3BlLnJhZGl1cyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yLnNldEF0dHJpYnV0ZSggJ2QnLCBzY29wZS5pbmRpY2F0b3JEICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmFkZFVwZGF0ZUNhbGxiYWNrKCBzZXRJbmRpY2F0b3JEICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2F0b3JPbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljYXRvck9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2aWV3SW5kaWNhdG9yRGl2LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgaW5kaWNhdG9yT25Nb3VzZUVudGVyICk7XHJcbiAgICAgICAgICAgIHZpZXdJbmRpY2F0b3JEaXYuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBpbmRpY2F0b3JPbk1vdXNlTGVhdmUgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZEFzeW5jUmVxdWVzdCggRGF0YUltYWdlLlZpZXdJbmRpY2F0b3IsIGxvYWRWaWV3SW5kaWNhdG9yICk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGVuZCBjdXN0b20gY29udHJvbCBpdGVtIHRvIGV4aXN0aW5nIGNvbnRyb2wgYmFyXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbj17fV0gLSBTdHlsZSBvYmplY3QgdG8gb3ZlcndpcnRlIGRlZmF1bHQgZWxlbWVudCBzdHlsZS4gSXQgdGFrZXMgJ3N0eWxlJywgJ29uVGFwJyBhbmQgJ2dyb3VwJyBwcm9wZXJ0aWVzLlxyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGFwcGVuZENvbnRyb2xJdGVtOiBmdW5jdGlvbiAoIG9wdGlvbiApIHtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMud2lkZ2V0LmNyZWF0ZUN1c3RvbUl0ZW0oIG9wdGlvbiApO1x0XHRcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb24uZ3JvdXAgPT09ICd2aWRlbycgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndpZGdldC52aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoIGl0ZW0gKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0LmJhckVsZW1lbnQuYXBwZW5kQ2hpbGQoIGl0ZW0gKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgYWxsIGNhY2hlZCBmaWxlc1xyXG4gICAgICogQG1lbWJlck9mIFZpZXdlclxyXG4gICAgICogQGluc3RhbmNlXHJcbiAgICAgKi9cclxuICAgIGNsZWFyQWxsQ2FjaGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgVEhSRUUuQ2FjaGUuY2xlYXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG59ICk7XHJcblxyXG5leHBvcnQgeyBWaWV3ZXIgfTsiLCJpbXBvcnQgeyBUSFJFRV9SRVZJU0lPTiB9IGZyb20gJy4vQ29uc3RhbnRzJztcclxuXHJcbmlmICggVEhSRUUuUkVWSVNJT04gIT0gVEhSRUVfUkVWSVNJT04gKSB7XHJcblxyXG4gICAgY29uc29sZS53YXJuKCBgdGhyZWUuanMgdmVyc2lvbiBpcyBub3QgbWF0Y2hlZC4gUGxlYXNlIGNvbnNpZGVyIHVzZSB0aGUgdGFyZ2V0IHJldmlzaW9uICR7VEhSRUVfUkVWSVNJT059YCApO1xyXG5cclxufSIsIi8qKlxyXG4gKiBQYW5vbGVucy5qc1xyXG4gKiBAYXV0aG9yIHBjaGVuNjZcclxuICogQG5hbWVzcGFjZSBQQU5PTEVOU1xyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9Db25zdGFudHMnO1xyXG5leHBvcnQgeyBEYXRhSW1hZ2UgfSBmcm9tICcuL0RhdGFJbWFnZSc7XHJcbmV4cG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9sb2FkZXJzL0ltYWdlTG9hZGVyJztcclxuZXhwb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJy4vbG9hZGVycy9UZXh0dXJlTG9hZGVyJztcclxuZXhwb3J0IHsgQ3ViZVRleHR1cmVMb2FkZXIgfSBmcm9tICcuL2xvYWRlcnMvQ3ViZVRleHR1cmVMb2FkZXInO1xyXG5leHBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEvTWVkaWEnO1xyXG5leHBvcnQgeyBSZXRpY2xlIH0gZnJvbSAnLi9pbnRlcmZhY2UvUmV0aWNsZSc7XHJcbmV4cG9ydCB7IEluZm9zcG90IH0gZnJvbSAnLi9pbmZvc3BvdC9JbmZvc3BvdCc7XHJcbmV4cG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0L1dpZGdldCc7XHJcbmV4cG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9QYW5vcmFtYSc7XHJcbmV4cG9ydCB7IEltYWdlUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hL0ltYWdlUGFub3JhbWEnO1xyXG5leHBvcnQgeyBFbXB0eVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9FbXB0eVBhbm9yYW1hJztcclxuZXhwb3J0IHsgQ3ViZVBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9DdWJlUGFub3JhbWEnO1xyXG5leHBvcnQgeyBCYXNpY1Bhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYS9CYXNpY1Bhbm9yYW1hJztcclxuZXhwb3J0IHsgVmlkZW9QYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvVmlkZW9QYW5vcmFtYSc7XHJcbmV4cG9ydCB7IEdvb2dsZVN0cmVldHZpZXdQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvR29vZ2xlU3RyZWV0dmlld1Bhbm9yYW1hJztcclxuZXhwb3J0IHsgTGl0dGxlUGxhbmV0IH0gZnJvbSAnLi9wYW5vcmFtYS9MaXR0bGVQbGFuZXQnO1xyXG5leHBvcnQgeyBJbWFnZUxpdHRsZVBsYW5ldCB9IGZyb20gJy4vcGFub3JhbWEvSW1hZ2VMaXR0bGVQbGFuZXQnO1xyXG5leHBvcnQgeyBDYW1lcmFQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEvQ2FtZXJhUGFub3JhbWEnO1xyXG5leHBvcnQgeyBWaWV3ZXIgfSBmcm9tICcuL3ZpZXdlci9WaWV3ZXInO1xyXG5pbXBvcnQgJy4vQ2hlY2snO1xyXG5cclxuLy8gZXhwb3NlIFRXRUVOXHJcbmltcG9ydCBUV0VFTiBmcm9tICdAdHdlZW5qcy90d2Vlbi5qcyc7XHJcbndpbmRvdy5UV0VFTiA9IFRXRUVOOyJdLCJuYW1lcyI6WyJUSFJFRS5DYWNoZSIsIlRIUkVFLlRleHR1cmUiLCJUSFJFRS5SR0JGb3JtYXQiLCJUSFJFRS5SR0JBRm9ybWF0IiwiVEhSRUUuQ3ViZVRleHR1cmUiLCJUSFJFRS5FdmVudERpc3BhdGNoZXIiLCJUSFJFRS5WaWRlb1RleHR1cmUiLCJUSFJFRS5MaW5lYXJGaWx0ZXIiLCJUSFJFRS5TcHJpdGVNYXRlcmlhbCIsIlRIUkVFLlNwcml0ZSIsIlRIUkVFLkNvbG9yIiwiVEhSRUUuQ2FudmFzVGV4dHVyZSIsInRoaXMiLCJUSFJFRS5Eb3VibGVTaWRlIiwiVFdFRU4iLCJUSFJFRS5WZWN0b3IzIiwiVEhSRUUuTWVzaCIsIlRIUkVFLkJhY2tTaWRlIiwiVEhSRUUuT2JqZWN0M0QiLCJUSFJFRS5TcGhlcmVCdWZmZXJHZW9tZXRyeSIsIlRIUkVFLk1lc2hCYXNpY01hdGVyaWFsIiwiVEhSRUUuQnVmZmVyR2VvbWV0cnkiLCJUSFJFRS5CdWZmZXJBdHRyaWJ1dGUiLCJUSFJFRS5TaGFkZXJMaWIiLCJUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSIsIlRIUkVFLlNoYWRlck1hdGVyaWFsIiwiVEhSRUUuTWF0cml4NCIsIlRIUkVFLlZlY3RvcjIiLCJUSFJFRS5RdWF0ZXJuaW9uIiwiVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSIsIlRIUkVFLk1hdGgiLCJUSFJFRS5NT1VTRSIsIlRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhIiwiVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhIiwiVEhSRUUuRXVsZXIiLCJUSFJFRS5TY2VuZSIsIlRIUkVFLlN0ZXJlb0NhbWVyYSIsIlRIUkVFLk5lYXJlc3RGaWx0ZXIiLCJUSFJFRS5XZWJHTFJlbmRlclRhcmdldCIsIlRIUkVFLldlYkdMUmVuZGVyZXIiLCJUSFJFRS5SYXljYXN0ZXIiLCJUSFJFRS5GcnVzdHVtIiwiVEhSRUUuUkVWSVNJT04iXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7Ozs7O0FBTUEsQUFBWSxNQUFD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O0lBQ1osT0FBTyxDQUFDLENBQUM7SUFDVDs7R0FFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDWixPQUFPLENBQUMsQ0FBQztJQUNUOztHQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7R0FFdEU7O0VBRUQsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFOztHQUVqQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDWixPQUFPLENBQUMsQ0FBQztJQUNUOztHQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1Q7O0dBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7R0FFcEU7O0VBRUQsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFOztHQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDWixPQUFPLENBQUMsQ0FBQztJQUNUOztHQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1Q7O0dBRUQsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7R0FFUCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDVixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdB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QyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7R0FFM0UsTUFBTTs7R0FFTixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDVixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQ7O0dBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0lBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRTs7R0FFRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7R0FFN0Y7O0VBRUQ7O0NB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QUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztRQUVyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O1FBRXZCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQzs7UUFFakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFB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USxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDeEMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQzs7SUFFbEMsSUFBSSxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFFOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFFNUIsSUFBSSxNQUFNLEdBQUcsSUFBSUYsT0FBYSxFQUFFLENBQUM7SUFDakMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0lBRWxDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHOztRQUV0RCxNQUFNLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7O1FBRW5DLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxVQUFVLENB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
