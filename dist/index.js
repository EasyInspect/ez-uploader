(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ez-uploader"] = factory();
	else
		root["ez-uploader"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

var _EzUploader = __webpack_require__(2);

var _EzUploader2 = _interopRequireDefault(_EzUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.EzUploader = _EzUploader2.default;

exports.default = _EzUploader2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resumablejs = __webpack_require__(3);

var _resumablejs2 = _interopRequireDefault(_resumablejs);

var _VDOM = __webpack_require__(4);

var _VDOM2 = _interopRequireDefault(_VDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function h(type, props) {
    var _ref;

    if (props) {

        if (typeof props['ez-show'] !== 'undefined' || typeof props['ez-show-flex'] !== 'undefined') {

            var prop = typeof props['ez-show'] !== 'undefined' ? 'ez-show' : 'ez-show-flex';
            var _type = prop === 'ez-show-flex' ? 'flex' : 'block';
            var display = !!props[prop] ? _type : 'none';
            var style = 'display:' + display + ';';

            props.style = props.style ? style + ';' + props.style : style;

            delete props[prop];
        }

        if (typeof props['ez-on-click'] !== 'undefined') {

            var _prop = 'ez-on-click';
            var method = props[_prop];

            props[_prop] = method.bind(EzUploader);
        }
    }

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    return {
        type: type,
        props: props,
        children: children.length ? (_ref = []).concat.apply(_ref, children) : []
    };
}

var EzUploader = function (_EzVDOM) {
    _inherits(EzUploader, _EzVDOM);

    function EzUploader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            upload = _ref2.upload,
            ui = _ref2.ui;

        _classCallCheck(this, EzUploader);

        var _this = _possibleConstructorReturn(this, (EzUploader.__proto__ || Object.getPrototypeOf(EzUploader)).call(this));

        _this.settings = {
            upload: Object.assign({}, {
                url: null,
                headers: {}
            }, upload),
            ui: Object.assign({}, {
                thumbnail: false
            }, ui)
        };

        _this.uploader = null;

        _this.addUploaderToDOM();
        _this.addResumable();
        _this.addKeypressEventListeners();

        window.update = _this.updateDOM.bind(_this);

        return _this;
    }

    _createClass(EzUploader, [{
        key: 'addResumable',
        value: function addResumable() {

            var browse = document.querySelectorAll("[ez-uploader-browse]");
            var drop = document.querySelectorAll("[ez-uploader-drop]")[0];

            this.uploader = new _resumablejs2.default({
                target: this.settings.upload.url,
                headers: this.settings.upload.headers
            });

            this.uploader.assignBrowse(browse);
            this.uploader.assignDrop(drop);
            this.addResumableEventListeners();
        }
    }, {
        key: 'browseFiles',
        value: function browseFiles() {

            console.log('browse files boi');
            var browseButton = document.querySelectorAll("[ez-uploader-browse]")[0];

            browseButton.dispatchEvent(new Event('click'));
        }
    }, {
        key: 'addKeypressEventListeners',
        value: function addKeypressEventListeners() {
            var _this2 = this;

            window.addEventListener('keyup', function (e) {

                if (e.keyCode === 27) {

                    _this2.closeUploader();
                }
            });
        }
    }, {
        key: 'addResumableEventListeners',
        value: function addResumableEventListeners() {

            this.uploader.on('filesAdded', this.onFilesAdded.bind(this));
            this.uploader.on('fileSuccess', this.onFileSuccess.bind(this));
            this.uploader.on('fileProgress', this.onFileProgress.bind(this));
            this.uploader.on('fileError', this.onFileError.bind(this));
            this.uploader.on('uploadStart', this.onUploadStart.bind(this));
            this.uploader.on('complete', this.onComplete.bind(this));
            this.uploader.on('progress', this.onProgress.bind(this));
            this.uploader.on('error', this.onError.bind(this));
            this.uploader.on('pause', this.onPause.bind(this));
            this.uploader.on('cancel', this.onCancel.bind(this));
            this.uploader.on('catchAll', function () {
                /*console.log('update dom from catch all');
                this.updateDOM()*/
            });
        }
    }, {
        key: 'onFilesAdded',
        value: function onFilesAdded(files, event) {
            var _this3 = this;

            console.log("multiple added", files, event);

            if (this.settings.ui.thumbnail) {

                files.forEach(function (file) {

                    _this3.mappedFiles[file.uniqueIdentifier] = {};

                    var fileReader = new FileReader();

                    fileReader.readAsDataURL(file.file);
                    fileReader.onload = function (event) {

                        _this3.mappedFiles[file.uniqueIdentifier].src = event.target.result;
                        console.log('update dom from on load');
                        _this3.updateDOM();
                    };
                });
            }

            console.log('update dom from added');
            this.updateDOM();
        }
    }, {
        key: 'onFileSuccess',
        value: function onFileSuccess(file, event) {
            console.log("onFileSuccess", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onFileProgress',
        value: function onFileProgress(file, event) {
            console.log("onFileProgress", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onFileError',
        value: function onFileError(file, event) {
            console.log("onFileError", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onUploadStart',
        value: function onUploadStart(file, event) {
            console.log("onUploadStart", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onComplete',
        value: function onComplete(file, event) {
            console.log("onComplete", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onProgress',
        value: function onProgress(file, event) {
            console.log("onProgress", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onError',
        value: function onError(file, event) {
            console.log("onError", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onPause',
        value: function onPause(file, event) {
            console.log("onPause", file, event);
            this.updateDOM();
        }
    }, {
        key: 'onCancel',
        value: function onCancel(file, event) {
            console.log("onCancel", file, event);
            this.updateDOM();
        }
    }, {
        key: 'openUploader',
        value: function openUploader() {

            console.log('modal toggle', this.modal);

            if (this.modal) {

                this.modal.style.display = 'block';
            }
        }
    }, {
        key: 'closeUploader',
        value: function closeUploader() {

            console.log('modal toggle', this, this.modal);

            if (this.modal) {

                this.modal.style.display = 'none';
            }
        }
    }, {
        key: 'resetModal',
        value: function resetModal() {

            this.removeAllFiles();
        }
    }, {
        key: 'startUploading',
        value: function startUploading() {

            this.uploader.upload();
        }
    }, {
        key: 'pauseUploading',
        value: function pauseUploading() {

            this.uploader.pause();
        }
    }, {
        key: 'removeFile',
        value: function removeFile(file) {

            console.log('remove file', file.fileName);
            this.uploader.removeFile(file);
            console.log('files after remove', this.uploader.files);

            console.log('update dom from remove');
            this.updateDOM();
        }
    }, {
        key: 'pauseFile',
        value: function pauseFile(file) {

            file.pause();
            console.log('update dom from pause');
            this.updateDOM();
        }
    }, {
        key: 'retryFile',
        value: function retryFile(file) {

            file.abort();
            console.log('update dom from retry');
            this.updateDOM();
        }
    }, {
        key: 'removeAllFiles',
        value: function removeAllFiles() {

            console.log('remove all files');
            this.uploader.cancel();
            console.log('files after remove all', this.uploader.files);

            console.log('update dom from remove all');
            this.updateDOM();
        }
    }, {
        key: 'convertBytesToMB',
        value: function convertBytesToMB(bytes) {

            var mb = !isNaN(bytes) ? bytes / 1024 / 1024 : 0;

            return parseFloat(mb).toFixed(2);
        }

        // VDOM/DOM methods

    }, {
        key: 'addUploaderToDOM',
        value: function addUploaderToDOM() {

            this.cachedVDOM = this.getVDOM();
            this.modal = this.createElement(this.cachedVDOM);

            console.log('cached', this.cachedVDOM);
            console.log('modal', this.modal);

            document.body.appendChild(this.modal);
        }
    }, {
        key: 'getTitleVDOM',
        value: function getTitleVDOM() {

            if (!this.files.length) {

                return h(
                    'p',
                    null,
                    'Select some files to get started'
                );
            } else if (this.uploader.isUploading()) {

                var progress = (this.uploader.progress() * 100).toFixed(2);

                return h(
                    'p',
                    null,
                    'Uploading ',
                    this.files.length,
                    ' ',
                    h(
                        'span',
                        { className: 'ez-uploader__progress-text' },
                        '(',
                        progress,
                        '%)'
                    )
                );
            } else if (this.uploader.progress() >= 1) {

                return h(
                    'p',
                    null,
                    'All images has been uploaded'
                );
            } else {

                return h(
                    'p',
                    null,
                    'You\'ve chosen ',
                    this.files.length,
                    ' files'
                );
            }
        }
    }, {
        key: 'getFileImageVDOM',
        value: function getFileImageVDOM(file) {

            if (this.settings.ui.thumbnail && this.mappedFiles[file.uniqueIdentifier] && this.mappedFiles[file.uniqueIdentifier].src) {

                var src = this.mappedFiles[file.uniqueIdentifier].src;

                return h(
                    'div',
                    { className: 'ez-uploader__modal-file-image' },
                    h('img', { src: src })
                );
            } else {

                return '';
            }
        }
    }, {
        key: 'getFileOptionsVDOM',
        value: function getFileOptionsVDOM(file) {
            var _this4 = this;

            var options = [];

            if (this.uploader && (this.uploader.isUploading() || this.uploader.progress())) {

                var progress = file.progress() * 100;
                var style = 'width:' + progress + '%';

                options.push(h(
                    'div',
                    { className: 'ez-uploader__modal-file-progress' },
                    h('div', { className: 'ez-uploader__modal-file-progress-inner', style: style })
                ));
            } else if (!file.isComplete()) {

                options.push(h(
                    'div',
                    { 'ez-on-click': function ezOnClick() {
                            return _this4.removeFile(file);
                        }, className: 'ez-uploader__modal-button--small ez-uploader__modal-button-red' },
                    'remove'
                ));
            }

            return options;
        }
    }, {
        key: 'getBodyVDOM',
        value: function getBodyVDOM() {

            var options = [];

            if (this.uploader && this.uploader.files.length) {

                options = this.files.map(this.getFileVDOM.bind(this));
            }

            options.push(h(
                'div',
                { 'ez-show-flex': !this.files.length, className: 'ez-uploader__modal-placeholder' },
                h(
                    'h2',
                    null,
                    'Drag and drop files'
                ),
                h(
                    'p',
                    null,
                    'or'
                ),
                h(
                    'div',
                    { 'ez-on-click': this.browseFiles, className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt' },
                    'Click here'
                )
            ));

            console.log('--- returning files', options, this.files);

            return options;
        }
    }, {
        key: 'getFileVDOM',
        value: function getFileVDOM(file) {

            return h(
                'div',
                { className: 'ez-uploader__modal-file' },
                this.getFileImageVDOM(file),
                h(
                    'div',
                    { className: 'ez-uploader__modal-file-text' },
                    h(
                        'div',
                        { className: 'ez-uploader__modal-file-name' },
                        file.fileName
                    ),
                    h(
                        'div',
                        { className: 'ez-uploader__modal-file-description' },
                        this.convertBytesToMB(file.size),
                        ' MB'
                    )
                ),
                h(
                    'div',
                    { className: 'ez-uploader__modal-file-options' },
                    this.getFileOptionsVDOM(file)
                )
            );
        }
    }, {
        key: 'getUploaderLeftOptionsVDOM',
        value: function getUploaderLeftOptionsVDOM() {

            var options = [];

            if (this.uploader && this.uploader.progress() < 1 && !this.uploader.isUploading() && this.files.length) {

                options.push(h(
                    'div',
                    { forceUpdate: true, 'ez-on-click': this.removeAllFiles, className: 'ez-uploader__modal-button' },
                    'Remove all files'
                ));

                options.push(h(
                    'div',
                    { forceUpdate: true, 'ez-on-click': this.browseFiles, className: 'ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt' },
                    'Add more files'
                ));
            }

            return options;
        }
    }, {
        key: 'getUploaderRightOptionsVDOM',
        value: function getUploaderRightOptionsVDOM() {

            var options = [];

            if (this.uploader) {

                if (this.uploader.progress() >= 1) {

                    options.push(h(
                        'span',
                        null,
                        'All of your images has now been uploaded'
                    ));

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.closeUploader, className: 'ez-uploader__modal-button' },
                        'Close'
                    ));

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.resetModal, className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                        'Upload more'
                    ));
                } else if (this.uploader.isUploading()) {

                    options.push(h(
                        'div',
                        { 'ez-on-click': this.pauseUploading,
                            className: 'ez-uploader__modal-button ez-uploader__modal-button-orange' },
                        'Pause uploading'
                    ));
                } else {

                    if (this.uploader.progress()) {

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.startUploading,
                                className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'Resume uploading'
                        ));
                    } else if (this.files.length) {

                        options.push(h(
                            'div',
                            { 'ez-on-click': this.startUploading,
                                className: 'ez-uploader__modal-button ez-uploader__modal-button-blue' },
                            'Start uploading'
                        ));
                    }
                }
            }

            return options;
        }
    }, {
        key: 'getProgressVDOM',
        value: function getProgressVDOM() {

            var progress = this.uploader && this.uploader.progress() * 100 || 0;
            var style = 'width:' + progress + '%';

            return h('div', { className: 'ez-uploader__total-progress-inner', style: style });
        }
    }, {
        key: 'getVDOM',
        value: function getVDOM() {

            return h(
                'div',
                { className: 'ez-uploader__backdrop' },
                h(
                    'div',
                    { className: 'ez-uploader__modal' },
                    h(
                        'div',
                        { className: 'ez-uploader__modal-header' },
                        h(
                            'div',
                            { className: 'ez-uploader__modal-title' },
                            this.getTitleVDOM()
                        ),
                        h(
                            'div',
                            { 'ez-on-click': this.closeUploader, className: 'ez-uploader__modal-cross' },
                            h('span', { className: 'ez-uploader__modal-cross-line' }),
                            h('span', { className: 'ez-uploader__modal-cross-line' })
                        )
                    ),
                    h(
                        'div',
                        { className: 'ez-uploader__total-progress' },
                        this.getProgressVDOM()
                    ),
                    h(
                        'div',
                        { 'ez-uploader-drop': true, className: 'ez-uploader__modal-body' },
                        h('div', { 'ez-uploader-browse': true }),
                        this.getBodyVDOM()
                    ),
                    h(
                        'div',
                        { 'ez-show-flex': this.files.length, className: 'ez-uploader__modal-footer' },
                        h(
                            'div',
                            { className: 'ez-uploader__modal-footer-left' },
                            this.getUploaderLeftOptionsVDOM()
                        ),
                        h(
                            'div',
                            { className: 'ez-uploader__modal-footer-right' },
                            this.getUploaderRightOptionsVDOM()
                        )
                    )
                )
            );
        }
    }, {
        key: 'updateDOM',
        value: function updateDOM() {

            var VDOM = this.getVDOM();
            console.time('update dom');
            console.log('vdom', VDOM);
            /*
            console.log('---- UPDATE DOM YO -----');
            console.log('old', this.cachedVDOM);
            console.log('to', VDOM);
            console.log('files', this.uploader.files);
            */
            this.updateElement(this.modal, VDOM.children[0], this.cachedVDOM.children[0]);
            this.cachedVDOM = VDOM;

            console.timeEnd('update dom');
            /*
            console.log('// DONE UPDATING DOM //', this.cachedVDOM);
            */
        }
    }, {
        key: 'files',
        get: function get() {

            return this.uploader && this.uploader.files || [];
        }
    }]);

    return EzUploader;
}(_VDOM2.default);

exports.default = EzUploader;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
* MIT Licensed
* http://www.23developer.com/opensource
* http://github.com/23/resumable.js
* Steffen Tiedemann Christensen, steffen@23company.com
*/

(function(){
"use strict";

  var Resumable = function(opts){
    if ( !(this instanceof Resumable) ) {
      return new Resumable(opts);
    }
    this.version = 1.0;
    // SUPPORTED BY BROWSER?
    // Check if these features are support by the browser:
    // - File object type
    // - Blob object type
    // - FileList object type
    // - slicing files
    this.support = (
                   (typeof(File)!=='undefined')
                   &&
                   (typeof(Blob)!=='undefined')
                   &&
                   (typeof(FileList)!=='undefined')
                   &&
                   (!!Blob.prototype.webkitSlice||!!Blob.prototype.mozSlice||!!Blob.prototype.slice||false)
                   );
    if(!this.support) return(false);


    // PROPERTIES
    var $ = this;
    $.files = [];
    $.defaults = {
      chunkSize:1*1024*1024,
      forceChunkSize:false,
      simultaneousUploads:3,
      fileParameterName:'file',
      chunkNumberParameterName: 'resumableChunkNumber',
      chunkSizeParameterName: 'resumableChunkSize',
      currentChunkSizeParameterName: 'resumableCurrentChunkSize',
      totalSizeParameterName: 'resumableTotalSize',
      typeParameterName: 'resumableType',
      identifierParameterName: 'resumableIdentifier',
      fileNameParameterName: 'resumableFilename',
      relativePathParameterName: 'resumableRelativePath',
      totalChunksParameterName: 'resumableTotalChunks',
      throttleProgressCallbacks: 0.5,
      query:{},
      headers:{},
      preprocess:null,
      method:'multipart',
      uploadMethod: 'POST',
      testMethod: 'GET',
      prioritizeFirstAndLastChunk:false,
      target:'/',
      testTarget: null,
      parameterNamespace:'',
      testChunks:true,
      generateUniqueIdentifier:null,
      getTarget:null,
      maxChunkRetries:100,
      chunkRetryInterval:undefined,
      permanentErrors:[400, 404, 415, 500, 501],
      maxFiles:undefined,
      withCredentials:false,
      xhrTimeout:0,
      clearInput:true,
      chunkFormat:'blob',
      setChunkTypeFromFile:false,
      maxFilesErrorCallback:function (files, errorCount) {
        var maxFiles = $.getOpt('maxFiles');
        alert('Please upload no more than ' + maxFiles + ' file' + (maxFiles === 1 ? '' : 's') + ' at a time.');
      },
      minFileSize:1,
      minFileSizeErrorCallback:function(file, errorCount) {
        alert(file.fileName||file.name +' is too small, please upload files larger than ' + $h.formatSize($.getOpt('minFileSize')) + '.');
      },
      maxFileSize:undefined,
      maxFileSizeErrorCallback:function(file, errorCount) {
        alert(file.fileName||file.name +' is too large, please upload files less than ' + $h.formatSize($.getOpt('maxFileSize')) + '.');
      },
      fileType: [],
      fileTypeErrorCallback: function(file, errorCount) {
        alert(file.fileName||file.name +' has type not allowed, please upload files of type ' + $.getOpt('fileType') + '.');
      }
    };
    $.opts = opts||{};
    $.getOpt = function(o) {
      var $opt = this;
      // Get multiple option if passed an array
      if(o instanceof Array) {
        var options = {};
        $h.each(o, function(option){
          options[option] = $opt.getOpt(option);
        });
        return options;
      }
      // Otherwise, just return a simple option
      if ($opt instanceof ResumableChunk) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { $opt = $opt.fileObj; }
      }
      if ($opt instanceof ResumableFile) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { $opt = $opt.resumableObj; }
      }
      if ($opt instanceof Resumable) {
        if (typeof $opt.opts[o] !== 'undefined') { return $opt.opts[o]; }
        else { return $opt.defaults[o]; }
      }
    };

    // EVENTS
    // catchAll(event, ...)
    // fileSuccess(file), fileProgress(file), fileAdded(file, event), filesAdded(files, filesSkipped), fileRetry(file),
    // fileError(file, message), complete(), progress(), error(message, file), pause()
    $.events = [];
    $.on = function(event,callback){
      $.events.push(event.toLowerCase(), callback);
    };
    $.fire = function(){
      // `arguments` is an object, not array, in FF, so:
      var args = [];
      for (var i=0; i<arguments.length; i++) args.push(arguments[i]);
      // Find event listeners, and support pseudo-event `catchAll`
      var event = args[0].toLowerCase();
      for (var i=0; i<=$.events.length; i+=2) {
        if($.events[i]==event) $.events[i+1].apply($,args.slice(1));
        if($.events[i]=='catchall') $.events[i+1].apply(null,args);
      }
      if(event=='fileerror') $.fire('error', args[2], args[1]);
      if(event=='fileprogress') $.fire('progress');
    };


    // INTERNAL HELPER METHODS (handy, but ultimately not part of uploading)
    var $h = {
      stopEvent: function(e){
        e.stopPropagation();
        e.preventDefault();
      },
      each: function(o,callback){
        if(typeof(o.length)!=='undefined') {
          for (var i=0; i<o.length; i++) {
            // Array or FileList
            if(callback(o[i])===false) return;
          }
        } else {
          for (i in o) {
            // Object
            if(callback(i,o[i])===false) return;
          }
        }
      },
      generateUniqueIdentifier:function(file, event){
        var custom = $.getOpt('generateUniqueIdentifier');
        if(typeof custom === 'function') {
          return custom(file, event);
        }
        var relativePath = file.webkitRelativePath||file.fileName||file.name; // Some confusion in different versions of Firefox
        var size = file.size;
        return(size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, ''));
      },
      contains:function(array,test) {
        var result = false;

        $h.each(array, function(value) {
          if (value == test) {
            result = true;
            return false;
          }
          return true;
        });

        return result;
      },
      formatSize:function(size){
        if(size<1024) {
          return size + ' bytes';
        } else if(size<1024*1024) {
          return (size/1024.0).toFixed(0) + ' KB';
        } else if(size<1024*1024*1024) {
          return (size/1024.0/1024.0).toFixed(1) + ' MB';
        } else {
          return (size/1024.0/1024.0/1024.0).toFixed(1) + ' GB';
        }
      },
      getTarget:function(request, params){
        var target = $.getOpt('target');

        if (request === 'test' && $.getOpt('testTarget')) {
          target = $.getOpt('testTarget') === '/' ? $.getOpt('target') : $.getOpt('testTarget');
        }

        if (typeof target === 'function') {
          return target(params);
        }

        var separator = target.indexOf('?') < 0 ? '?' : '&';
        var joinedParams = params.join('&');

        return target + separator + joinedParams;
      }
    };

    var onDrop = function(event){
      $h.stopEvent(event);

      //handle dropped things as items if we can (this lets us deal with folders nicer in some cases)
      if (event.dataTransfer && event.dataTransfer.items) {
        loadFiles(event.dataTransfer.items, event);
      }
      //else handle them as files
      else if (event.dataTransfer && event.dataTransfer.files) {
        loadFiles(event.dataTransfer.files, event);
      }
    };
    var preventDefault = function(e) {
      e.preventDefault();
    };

    /**
     * processes a single upload item (file or directory)
     * @param {Object} item item to upload, may be file or directory entry
     * @param {string} path current file path
     * @param {File[]} items list of files to append new items to
     * @param {Function} cb callback invoked when item is processed
     */
    function processItem(item, path, items, cb) {
      var entry;
      if(item.isFile){
        // file provided
        return item.file(function(file){
          file.relativePath = path + file.name;
          items.push(file);
          cb();
        });
      }else if(item.isDirectory){
        // item is already a directory entry, just assign
        entry = item;
      }else if(item instanceof File) {
        items.push(item);
      }
      if('function' === typeof item.webkitGetAsEntry){
        // get entry from file object
        entry = item.webkitGetAsEntry();
      }
      if(entry && entry.isDirectory){
        // directory provided, process it
        return processDirectory(entry, path + entry.name + '/', items, cb);
      }
      if('function' === typeof item.getAsFile){
        // item represents a File object, convert it
        item = item.getAsFile();
        if(item instanceof File) {
          item.relativePath = path + item.name;
          items.push(item);
        }
      }
      cb(); // indicate processing is done
    }


    /**
     * cps-style list iteration.
     * invokes all functions in list and waits for their callback to be
     * triggered.
     * @param  {Function[]}   items list of functions expecting callback parameter
     * @param  {Function} cb    callback to trigger after the last callback has been invoked
     */
    function processCallbacks(items, cb){
      if(!items || items.length === 0){
        // empty or no list, invoke callback
        return cb();
      }
      // invoke current function, pass the next part as continuation
      items[0](function(){
        processCallbacks(items.slice(1), cb);
      });
    }

    /**
     * recursively traverse directory and collect files to upload
     * @param  {Object}   directory directory to process
     * @param  {string}   path      current path
     * @param  {File[]}   items     target list of items
     * @param  {Function} cb        callback invoked after traversing directory
     */
    function processDirectory (directory, path, items, cb) {
      var dirReader = directory.createReader();
      dirReader.readEntries(function(entries){
        if(!entries.length){
          // empty directory, skip
          return cb();
        }
        // process all conversion callbacks, finally invoke own one
        processCallbacks(
          entries.map(function(entry){
            // bind all properties except for callback
            return processItem.bind(null, entry, path, items);
          }),
          cb
        );
      });
    }

    /**
     * process items to extract files to be uploaded
     * @param  {File[]} items items to process
     * @param  {Event} event event that led to upload
     */
    function loadFiles(items, event) {
      if(!items.length){
        return; // nothing to do
      }
      $.fire('beforeAdd');
      var files = [];
      processCallbacks(
          Array.prototype.map.call(items, function(item){
            // bind all properties except for callback
            return processItem.bind(null, item, "", files);
          }),
          function(){
            if(files.length){
              // at least one file found
              appendFilesFromFileList(files, event);
            }
          }
      );
    };

    var appendFilesFromFileList = function(fileList, event){
      // check for uploading too many files
      var errorCount = 0;
      var o = $.getOpt(['maxFiles', 'minFileSize', 'maxFileSize', 'maxFilesErrorCallback', 'minFileSizeErrorCallback', 'maxFileSizeErrorCallback', 'fileType', 'fileTypeErrorCallback']);
      if (typeof(o.maxFiles)!=='undefined' && o.maxFiles<(fileList.length+$.files.length)) {
        // if single-file upload, file is already added, and trying to add 1 new file, simply replace the already-added file
        if (o.maxFiles===1 && $.files.length===1 && fileList.length===1) {
          $.removeFile($.files[0]);
        } else {
          o.maxFilesErrorCallback(fileList, errorCount++);
          return false;
        }
      }
      var files = [], filesSkipped = [], remaining = fileList.length;
      var decreaseReamining = function(){
        if(!--remaining){
          // all files processed, trigger event
          if(!files.length && !filesSkipped.length){
            // no succeeded files, just skip
            return;
          }
          window.setTimeout(function(){
            $.fire('filesAdded', files, filesSkipped);
          },0);
        }
      };
      $h.each(fileList, function(file){
        var fileName = file.name;
        if(o.fileType.length > 0){
          var fileTypeFound = false;
          for(var index in o.fileType){
            var extension = '.' + o.fileType[index];
			if(fileName.toLowerCase().indexOf(extension.toLowerCase(), fileName.length - extension.length) !== -1){
              fileTypeFound = true;
              break;
            }
          }
          if (!fileTypeFound) {
            o.fileTypeErrorCallback(file, errorCount++);
            return false;
          }
        }

        if (typeof(o.minFileSize)!=='undefined' && file.size<o.minFileSize) {
          o.minFileSizeErrorCallback(file, errorCount++);
          return false;
        }
        if (typeof(o.maxFileSize)!=='undefined' && file.size>o.maxFileSize) {
          o.maxFileSizeErrorCallback(file, errorCount++);
          return false;
        }

        function addFile(uniqueIdentifier){
          if (!$.getFromUniqueIdentifier(uniqueIdentifier)) {(function(){
            file.uniqueIdentifier = uniqueIdentifier;
            var f = new ResumableFile($, file, uniqueIdentifier);
            $.files.push(f);
            files.push(f);
            f.container = (typeof event != 'undefined' ? event.srcElement : null);
            window.setTimeout(function(){
              $.fire('fileAdded', f, event)
            },0);
          })()} else {
            filesSkipped.push(file);
          };
          decreaseReamining();
        }
        // directories have size == 0
        var uniqueIdentifier = $h.generateUniqueIdentifier(file, event);
        if(uniqueIdentifier && typeof uniqueIdentifier.then === 'function'){
          // Promise or Promise-like object provided as unique identifier
          uniqueIdentifier
          .then(
            function(uniqueIdentifier){
              // unique identifier generation succeeded
              addFile(uniqueIdentifier);
            },
           function(){
              // unique identifier generation failed
              // skip further processing, only decrease file count
              decreaseReamining();
            }
          );
        }else{
          // non-Promise provided as unique identifier, process synchronously
          addFile(uniqueIdentifier);
        }
      });
    };

    // INTERNAL OBJECT TYPES
    function ResumableFile(resumableObj, file, uniqueIdentifier){
      var $ = this;
      $.opts = {};
      $.getOpt = resumableObj.getOpt;
      $._prevProgress = 0;
      $.resumableObj = resumableObj;
      $.file = file;
      $.fileName = file.fileName||file.name; // Some confusion in different versions of Firefox
      $.size = file.size;
      $.relativePath = file.relativePath || file.webkitRelativePath || $.fileName;
      $.uniqueIdentifier = uniqueIdentifier;
      $._pause = false;
      $.container = '';
      var _error = uniqueIdentifier !== undefined;

      // Callback when something happens within the chunk
      var chunkEvent = function(event, message){
        // event can be 'progress', 'success', 'error' or 'retry'
        switch(event){
        case 'progress':
          $.resumableObj.fire('fileProgress', $, message);
          break;
        case 'error':
          $.abort();
          _error = true;
          $.chunks = [];
          $.resumableObj.fire('fileError', $, message);
          break;
        case 'success':
          if(_error) return;
          $.resumableObj.fire('fileProgress', $); // it's at least progress
          if($.isComplete()) {
            $.resumableObj.fire('fileSuccess', $, message);
          }
          break;
        case 'retry':
          $.resumableObj.fire('fileRetry', $);
          break;
        }
      };

      // Main code to set up a file object with chunks,
      // packaged to be able to handle retries if needed.
      $.chunks = [];
      $.abort = function(){
        // Stop current uploads
        var abortCount = 0;
        $h.each($.chunks, function(c){
          if(c.status()=='uploading') {
            c.abort();
            abortCount++;
          }
        });
        if(abortCount>0) $.resumableObj.fire('fileProgress', $);
      };
      $.cancel = function(){
        // Reset this file to be void
        var _chunks = $.chunks;
        $.chunks = [];
        // Stop current uploads
        $h.each(_chunks, function(c){
          if(c.status()=='uploading')  {
            c.abort();
            $.resumableObj.uploadNextChunk();
          }
        });
        $.resumableObj.removeFile($);
        $.resumableObj.fire('fileProgress', $);
      };
      $.retry = function(){
        $.bootstrap();
        var firedRetry = false;
        $.resumableObj.on('chunkingComplete', function(){
          if(!firedRetry) $.resumableObj.upload();
          firedRetry = true;
        });
      };
      $.bootstrap = function(){
        $.abort();
        _error = false;
        // Rebuild stack of chunks from file
        $.chunks = [];
        $._prevProgress = 0;
        var round = $.getOpt('forceChunkSize') ? Math.ceil : Math.floor;
        var maxOffset = Math.max(round($.file.size/$.getOpt('chunkSize')),1);
        for (var offset=0; offset<maxOffset; offset++) {(function(offset){
            window.setTimeout(function(){
                $.chunks.push(new ResumableChunk($.resumableObj, $, offset, chunkEvent));
                $.resumableObj.fire('chunkingProgress',$,offset/maxOffset);
            },0);
        })(offset)}
        window.setTimeout(function(){
            $.resumableObj.fire('chunkingComplete',$);
        },0);
      };
      $.progress = function(){
        if(_error) return(1);
        // Sum up progress across everything
        var ret = 0;
        var error = false;
        $h.each($.chunks, function(c){
          if(c.status()=='error') error = true;
          ret += c.progress(true); // get chunk progress relative to entire file
        });
        ret = (error ? 1 : (ret>0.99999 ? 1 : ret));
        ret = Math.max($._prevProgress, ret); // We don't want to lose percentages when an upload is paused
        $._prevProgress = ret;
        return(ret);
      };
      $.isUploading = function(){
        var uploading = false;
        $h.each($.chunks, function(chunk){
          if(chunk.status()=='uploading') {
            uploading = true;
            return(false);
          }
        });
        return(uploading);
      };
      $.isComplete = function(){
        var outstanding = false;
        $h.each($.chunks, function(chunk){
          var status = chunk.status();
          if(status=='pending' || status=='uploading' || chunk.preprocessState === 1) {
            outstanding = true;
            return(false);
          }
        });
        return(!outstanding);
      };
      $.pause = function(pause){
          if(typeof(pause)==='undefined'){
              $._pause = ($._pause ? false : true);
          }else{
              $._pause = pause;
          }
      };
      $.isPaused = function() {
        return $._pause;
      };


      // Bootstrap and return
      $.resumableObj.fire('chunkingStart', $);
      $.bootstrap();
      return(this);
    }


    function ResumableChunk(resumableObj, fileObj, offset, callback){
      var $ = this;
      $.opts = {};
      $.getOpt = resumableObj.getOpt;
      $.resumableObj = resumableObj;
      $.fileObj = fileObj;
      $.fileObjSize = fileObj.size;
      $.fileObjType = fileObj.file.type;
      $.offset = offset;
      $.callback = callback;
      $.lastProgressCallback = (new Date);
      $.tested = false;
      $.retries = 0;
      $.pendingRetry = false;
      $.preprocessState = 0; // 0 = unprocessed, 1 = processing, 2 = finished

      // Computed properties
      var chunkSize = $.getOpt('chunkSize');
      $.loaded = 0;
      $.startByte = $.offset*chunkSize;
      $.endByte = Math.min($.fileObjSize, ($.offset+1)*chunkSize);
      if ($.fileObjSize-$.endByte < chunkSize && !$.getOpt('forceChunkSize')) {
        // The last chunk will be bigger than the chunk size, but less than 2*chunkSize
        $.endByte = $.fileObjSize;
      }
      $.xhr = null;

      // test() makes a GET request without any data to see if the chunk has already been uploaded in a previous session
      $.test = function(){
        // Set up request and listen for event
        $.xhr = new XMLHttpRequest();

        var testHandler = function(e){
          $.tested = true;
          var status = $.status();
          if(status=='success') {
            $.callback(status, $.message());
            $.resumableObj.uploadNextChunk();
          } else {
            $.send();
          }
        };
        $.xhr.addEventListener('load', testHandler, false);
        $.xhr.addEventListener('error', testHandler, false);
        $.xhr.addEventListener('timeout', testHandler, false);

        // Add data from the query options
        var params = [];
        var parameterNamespace = $.getOpt('parameterNamespace');
        var customQuery = $.getOpt('query');
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);
        $h.each(customQuery, function(k,v){
          params.push([encodeURIComponent(parameterNamespace+k), encodeURIComponent(v)].join('='));
        });
        // Add extra data to identify chunk
        params = params.concat(
          [
            // define key/value pairs for additional parameters
            ['chunkNumberParameterName', $.offset + 1],
            ['chunkSizeParameterName', $.getOpt('chunkSize')],
            ['currentChunkSizeParameterName', $.endByte - $.startByte],
            ['totalSizeParameterName', $.fileObjSize],
            ['typeParameterName', $.fileObjType],
            ['identifierParameterName', $.fileObj.uniqueIdentifier],
            ['fileNameParameterName', $.fileObj.fileName],
            ['relativePathParameterName', $.fileObj.relativePath],
            ['totalChunksParameterName', $.fileObj.chunks.length]
          ].filter(function(pair){
            // include items that resolve to truthy values
            // i.e. exclude false, null, undefined and empty strings
            return $.getOpt(pair[0]);
          })
          .map(function(pair){
            // map each key/value pair to its final form
            return [
              parameterNamespace + $.getOpt(pair[0]),
              encodeURIComponent(pair[1])
            ].join('=');
          })
        );
        // Append the relevant chunk and send it
        $.xhr.open($.getOpt('testMethod'), $h.getTarget('test', params));
        $.xhr.timeout = $.getOpt('xhrTimeout');
        $.xhr.withCredentials = $.getOpt('withCredentials');
        // Add data from header options
        var customHeaders = $.getOpt('headers');
        if(typeof customHeaders === 'function') {
          customHeaders = customHeaders($.fileObj, $);
        }
        $h.each(customHeaders, function(k,v) {
          $.xhr.setRequestHeader(k, v);
        });
        $.xhr.send(null);
      };

      $.preprocessFinished = function(){
        $.preprocessState = 2;
        $.send();
      };

      // send() uploads the actual data in a POST call
      $.send = function(){
        var preprocess = $.getOpt('preprocess');
        if(typeof preprocess === 'function') {
          switch($.preprocessState) {
          case 0: $.preprocessState = 1; preprocess($); return;
          case 1: return;
          case 2: break;
          }
        }
        if($.getOpt('testChunks') && !$.tested) {
          $.test();
          return;
        }

        // Set up request and listen for event
        $.xhr = new XMLHttpRequest();

        // Progress
        $.xhr.upload.addEventListener('progress', function(e){
          if( (new Date) - $.lastProgressCallback > $.getOpt('throttleProgressCallbacks') * 1000 ) {
            $.callback('progress');
            $.lastProgressCallback = (new Date);
          }
          $.loaded=e.loaded||0;
        }, false);
        $.loaded = 0;
        $.pendingRetry = false;
        $.callback('progress');

        // Done (either done, failed or retry)
        var doneHandler = function(e){
          var status = $.status();
          if(status=='success'||status=='error') {
            $.callback(status, $.message());
            $.resumableObj.uploadNextChunk();
          } else {
            $.callback('retry', $.message());
            $.abort();
            $.retries++;
            var retryInterval = $.getOpt('chunkRetryInterval');
            if(retryInterval !== undefined) {
              $.pendingRetry = true;
              setTimeout($.send, retryInterval);
            } else {
              $.send();
            }
          }
        };
        $.xhr.addEventListener('load', doneHandler, false);
        $.xhr.addEventListener('error', doneHandler, false);
        $.xhr.addEventListener('timeout', doneHandler, false);

        // Set up the basic query data from Resumable
        var query = [
          ['chunkNumberParameterName', $.offset + 1],
          ['chunkSizeParameterName', $.getOpt('chunkSize')],
          ['currentChunkSizeParameterName', $.endByte - $.startByte],
          ['totalSizeParameterName', $.fileObjSize],
          ['typeParameterName', $.fileObjType],
          ['identifierParameterName', $.fileObj.uniqueIdentifier],
          ['fileNameParameterName', $.fileObj.fileName],
          ['relativePathParameterName', $.fileObj.relativePath],
          ['totalChunksParameterName', $.fileObj.chunks.length],
        ].filter(function(pair){
          // include items that resolve to truthy values
          // i.e. exclude false, null, undefined and empty strings
          return $.getOpt(pair[0]);
        })
        .reduce(function(query, pair){
          // assign query key/value
          query[$.getOpt(pair[0])] = pair[1];
          return query;
        }, {});
        // Mix in custom data
        var customQuery = $.getOpt('query');
        if(typeof customQuery == 'function') customQuery = customQuery($.fileObj, $);
        $h.each(customQuery, function(k,v){
          query[k] = v;
        });

        var func = ($.fileObj.file.slice ? 'slice' : ($.fileObj.file.mozSlice ? 'mozSlice' : ($.fileObj.file.webkitSlice ? 'webkitSlice' : 'slice')));
        var bytes = $.fileObj.file[func]($.startByte, $.endByte, $.getOpt('setChunkTypeFromFile') ? $.fileObj.file.type : "");
        var data = null;
        var params = [];

        var parameterNamespace = $.getOpt('parameterNamespace');
                if ($.getOpt('method') === 'octet') {
                    // Add data from the query options
                    data = bytes;
                    $h.each(query, function (k, v) {
                        params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));
                    });
                } else {
                    // Add data from the query options
                    data = new FormData();
                    $h.each(query, function (k, v) {
                        data.append(parameterNamespace + k, v);
                        params.push([encodeURIComponent(parameterNamespace + k), encodeURIComponent(v)].join('='));
                    });
                    if ($.getOpt('chunkFormat') == 'blob') {
                        data.append(parameterNamespace + $.getOpt('fileParameterName'), bytes, $.fileObj.fileName);
                    }
                    else if ($.getOpt('chunkFormat') == 'base64') {
                        var fr = new FileReader();
                        fr.onload = function (e) {
                            data.append(parameterNamespace + $.getOpt('fileParameterName'), fr.result);
                            $.xhr.send(data);
                        }
                        fr.readAsDataURL(bytes);
                    }
                }

        var target = $h.getTarget('upload', params);
        var method = $.getOpt('uploadMethod');

        $.xhr.open(method, target);
        if ($.getOpt('method') === 'octet') {
          $.xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        }
        $.xhr.timeout = $.getOpt('xhrTimeout');
        $.xhr.withCredentials = $.getOpt('withCredentials');
        // Add data from header options
        var customHeaders = $.getOpt('headers');
        if(typeof customHeaders === 'function') {
          customHeaders = customHeaders($.fileObj, $);
        }

        $h.each(customHeaders, function(k,v) {
          $.xhr.setRequestHeader(k, v);
        });

                if ($.getOpt('chunkFormat') == 'blob') {
                    $.xhr.send(data);
                }
      };
      $.abort = function(){
        // Abort and reset
        if($.xhr) $.xhr.abort();
        $.xhr = null;
      };
      $.status = function(){
        // Returns: 'pending', 'uploading', 'success', 'error'
        if($.pendingRetry) {
          // if pending retry then that's effectively the same as actively uploading,
          // there might just be a slight delay before the retry starts
          return('uploading');
        } else if(!$.xhr) {
          return('pending');
        } else if($.xhr.readyState<4) {
          // Status is really 'OPENED', 'HEADERS_RECEIVED' or 'LOADING' - meaning that stuff is happening
          return('uploading');
        } else {
          if($.xhr.status == 200 || $.xhr.status == 201) {
            // HTTP 200, 201 (created)
            return('success');
          } else if($h.contains($.getOpt('permanentErrors'), $.xhr.status) || $.retries >= $.getOpt('maxChunkRetries')) {
            // HTTP 415/500/501, permanent error
            return('error');
          } else {
            // this should never happen, but we'll reset and queue a retry
            // a likely case for this would be 503 service unavailable
            $.abort();
            return('pending');
          }
        }
      };
      $.message = function(){
        return($.xhr ? $.xhr.responseText : '');
      };
      $.progress = function(relative){
        if(typeof(relative)==='undefined') relative = false;
        var factor = (relative ? ($.endByte-$.startByte)/$.fileObjSize : 1);
        if($.pendingRetry) return(0);
        if(!$.xhr || !$.xhr.status) factor*=.95;
        var s = $.status();
        switch(s){
        case 'success':
        case 'error':
          return(1*factor);
        case 'pending':
          return(0*factor);
        default:
          return($.loaded/($.endByte-$.startByte)*factor);
        }
      };
      return(this);
    }

    // QUEUE
    $.uploadNextChunk = function(){
      var found = false;

      // In some cases (such as videos) it's really handy to upload the first
      // and last chunk of a file quickly; this let's the server check the file's
      // metadata and determine if there's even a point in continuing.
      if ($.getOpt('prioritizeFirstAndLastChunk')) {
        $h.each($.files, function(file){
          if(file.chunks.length && file.chunks[0].status()=='pending' && file.chunks[0].preprocessState === 0) {
            file.chunks[0].send();
            found = true;
            return(false);
          }
          if(file.chunks.length>1 && file.chunks[file.chunks.length-1].status()=='pending' && file.chunks[file.chunks.length-1].preprocessState === 0) {
            file.chunks[file.chunks.length-1].send();
            found = true;
            return(false);
          }
        });
        if(found) return(true);
      }

      // Now, simply look for the next, best thing to upload
      $h.each($.files, function(file){
        if(file.isPaused()===false){
         $h.each(file.chunks, function(chunk){
           if(chunk.status()=='pending' && chunk.preprocessState === 0) {
             chunk.send();
             found = true;
             return(false);
           }
          });
        }
        if(found) return(false);
      });
      if(found) return(true);

      // The are no more outstanding chunks to upload, check is everything is done
      var outstanding = false;
      $h.each($.files, function(file){
        if(!file.isComplete()) {
          outstanding = true;
          return(false);
        }
      });
      if(!outstanding) {
        // All chunks have been uploaded, complete
        $.fire('complete');
      }
      return(false);
    };


    // PUBLIC METHODS FOR RESUMABLE.JS
    $.assignBrowse = function(domNodes, isDirectory){
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        var input;
        if(domNode.tagName==='INPUT' && domNode.type==='file'){
          input = domNode;
        } else {
          input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.style.display = 'none';
          domNode.addEventListener('click', function(){
            input.style.opacity = 0;
            input.style.display='block';
            input.focus();
            input.click();
            input.style.display='none';
          }, false);
          domNode.appendChild(input);
        }
        var maxFiles = $.getOpt('maxFiles');
        if (typeof(maxFiles)==='undefined'||maxFiles!=1){
          input.setAttribute('multiple', 'multiple');
        } else {
          input.removeAttribute('multiple');
        }
        if(isDirectory){
          input.setAttribute('webkitdirectory', 'webkitdirectory');
        } else {
          input.removeAttribute('webkitdirectory');
        }
        var fileTypes = $.getOpt('fileType');
        if (typeof (fileTypes) !== 'undefined' && fileTypes.length >= 1) {
          input.setAttribute('accept', fileTypes.map(function (e) { return '.' + e }).join(','));
        }
        else {
          input.removeAttribute('accept');
        }
        // When new files are added, simply append them to the overall list
        input.addEventListener('change', function(e){
          appendFilesFromFileList(e.target.files,e);
          var clearInput = $.getOpt('clearInput');
          if (clearInput) {
            e.target.value = '';
          }
        }, false);
      });
    };
    $.assignDrop = function(domNodes){
      if(typeof(domNodes.length)=='undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        domNode.addEventListener('dragover', preventDefault, false);
        domNode.addEventListener('dragenter', preventDefault, false);
        domNode.addEventListener('drop', onDrop, false);
      });
    };
    $.unAssignDrop = function(domNodes) {
      if (typeof(domNodes.length) == 'undefined') domNodes = [domNodes];

      $h.each(domNodes, function(domNode) {
        domNode.removeEventListener('dragover', preventDefault);
        domNode.removeEventListener('dragenter', preventDefault);
        domNode.removeEventListener('drop', onDrop);
      });
    };
    $.isUploading = function(){
      var uploading = false;
      $h.each($.files, function(file){
        if (file.isUploading()) {
          uploading = true;
          return(false);
        }
      });
      return(uploading);
    };
    $.upload = function(){
      // Make sure we don't start too many uploads at once
      if($.isUploading()) return;
      // Kick off the queue
      $.fire('uploadStart');
      for (var num=1; num<=$.getOpt('simultaneousUploads'); num++) {
        $.uploadNextChunk();
      }
    };
    $.pause = function(){
      // Resume all chunks currently being uploaded
      $h.each($.files, function(file){
        file.abort();
      });
      $.fire('pause');
    };
    $.cancel = function(){
      $.fire('beforeCancel');
      for(var i = $.files.length - 1; i >= 0; i--) {
        $.files[i].cancel();
      }
      $.fire('cancel');
    };
    $.progress = function(){
      var totalDone = 0;
      var totalSize = 0;
      // Resume all chunks currently being uploaded
      $h.each($.files, function(file){
        totalDone += file.progress()*file.size;
        totalSize += file.size;
      });
      return(totalSize>0 ? totalDone/totalSize : 0);
    };
    $.addFile = function(file, event){
      appendFilesFromFileList([file], event);
    };
    $.addFiles = function(files, event){
      appendFilesFromFileList(files, event);
    };
    $.removeFile = function(file){
      for(var i = $.files.length - 1; i >= 0; i--) {
        if($.files[i] === file) {
          $.files.splice(i, 1);
        }
      }
    };
    $.getFromUniqueIdentifier = function(uniqueIdentifier){
      var ret = false;
      $h.each($.files, function(f){
        if(f.uniqueIdentifier==uniqueIdentifier) ret = f;
      });
      return(ret);
    };
    $.getSize = function(){
      var totalSize = 0;
      $h.each($.files, function(file){
        totalSize += file.size;
      });
      return(totalSize);
    };
    $.handleDropEvent = function (e) {
      onDrop(e);
    };
    $.handleChangeEvent = function (e) {
      appendFilesFromFileList(e.target.files, e);
      e.target.value = '';
    };
    $.updateQuery = function(query){
        $.opts.query = query;
    };

    return(this);
  };


  // Node.js-style export for Node and Component
  if (true) {
    module.exports = Resumable;
  } else if (typeof define === "function" && define.amd) {
    // AMD/requirejs: Define the module
    define(function(){
      return Resumable;
    });
  } else {
    // Browser: Expose to window
    window.Resumable = Resumable;
  }

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @jsx h */

var EzVDOM = function () {
        function EzVDOM() {
                _classCallCheck(this, EzVDOM);

                this.cachedVDOM = null;
        }

        _createClass(EzVDOM, [{
                key: 'setElementProps',
                value: function setElementProps($el, props) {
                        var _this = this;

                        if (props) {

                                var properties = Object.keys(props);

                                properties.forEach(function (name) {

                                        var value = props[name];

                                        _this.setElementProp($el, name, value);
                                });
                        }
                }
        }, {
                key: 'setElementProp',
                value: function setElementProp($el, name, value) {

                        if (this.isCustomProp(name)) {

                                return;
                        } else if (name === 'className') {

                                $el.setAttribute('class', value);
                        } else if (typeof value === 'boolean') {

                                this.setBooleanProp($el, name, value);
                        } else {

                                $el.setAttribute(name, value);
                        }
                }
        }, {
                key: 'setBooleanProp',
                value: function setBooleanProp($el, name, value) {

                        if (value) {

                                $el.setAttribute(name, value);
                                $el[name] = true;
                        } else {

                                $el[name] = false;
                        }
                }
        }, {
                key: 'removeBooleanProp',
                value: function removeBooleanProp($el, name) {

                        $el.removeAttribute(name);
                        $el[name] = false;
                }
        }, {
                key: 'removeProp',
                value: function removeProp($el, name, value) {

                        if (name === 'className') {

                                $el.removeAttribute('class');
                        } else if (typeof value === 'boolean') {

                                this.removeBooleanProp($el, name);
                        } else {

                                $el.removeAttribute(name);
                        }
                }
        }, {
                key: 'updateProp',
                value: function updateProp($el, name, newVal, oldVal) {

                        if (this.isConditionalProp(name)) {

                                this.setElementProp($el, name, newVal);
                        } else if (!newVal) {

                                this.removeProp($el, name, oldVal);
                        } else if (!oldVal || JSON.stringify(newVal) !== JSON.stringify(oldVal)) {

                                this.setElementProp($el, name, newVal);
                        }
                }
        }, {
                key: 'updateProps',
                value: function updateProps($el) {
                        var _this2 = this;

                        var newProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


                        if ($el && $el.setAttribute) {

                                var props = Object.assign({}, newProps, oldProps);

                                Object.keys(props).forEach(function (name) {

                                        var newProp = newProps && !_this2.isNil(newProps[name]) && newProps[name] || null;
                                        var oldProp = oldProps && !_this2.isNil(oldProps[name]) && oldProps[name] || null;

                                        _this2.updateProp($el, name, newProp, oldProp);
                                });
                        }
                }
        }, {
                key: 'isConditionalProp',
                value: function isConditionalProp(name) {

                        return (/^ez-show/.test(name)
                        );
                }
        }, {
                key: 'isEventProp',
                value: function isEventProp(name) {

                        return (/^ez-on-/.test(name)
                        );
                }
        }, {
                key: 'isCustomProp',
                value: function isCustomProp(name) {

                        return name === 'forceUpdate' || this.isEventProp(name);
                }
        }, {
                key: 'isNil',
                value: function isNil(value) {

                        return value === null || typeof value === 'undefined';
                }
        }, {
                key: 'extractEventName',
                value: function extractEventName(name) {

                        return name.replace(/^ez-on-/, '').toLowerCase();
                }
        }, {
                key: 'extractConditionalDisplayType',
                value: function extractConditionalDisplayType(name) {

                        if (name === 'ez-show') {

                                return name.replace(/^ez-show/, '').toLowerCase();
                        } else {

                                return name.replace(/^ez-show-/, '').toLowerCase();
                        }
                }
        }, {
                key: 'updateEventListenerFromProp',
                value: function updateEventListenerFromProp($el, event, newMethod, oldMethod) {

                        console.log('updating event listener from prop', $el, event, newMethod, oldMethod);

                        if ($el && $el.addEventListener) {

                                /*
                                const newMethod = this[newMethodName];
                                const oldMethod = this[oldMethodName];
                                */

                                console.log('methods', newMethod === oldMethod, newMethod, oldMethod);

                                if (oldMethod) {

                                        $el.removeEventListener(event, oldMethod.bind(this));
                                }

                                if (newMethod) {

                                        this.addEventListenerFromProp($el, event, newMethod);
                                }
                        }
                }
        }, {
                key: 'updateEventListenersFromProp',
                value: function updateEventListenersFromProp($el, newProps, oldProps) {
                        var _this3 = this;

                        var allProps = Object.assign({}, oldProps, newProps);
                        var properties = Object.keys(allProps);

                        properties.forEach(function (name) {

                                if (_this3.isEventProp(name)) {

                                        console.log('-- ez-on event being updated', $el, name, newProps, oldProps);

                                        var event = _this3.extractEventName(name);

                                        var newMethod = newProps[name];
                                        var oldMethod = oldProps[name];

                                        _this3.updateEventListenerFromProp($el, event, newMethod, oldMethod);
                                }
                        });
                }
        }, {
                key: 'addEventListenerFromProp',
                value: function addEventListenerFromProp($el, name, method) {

                        var event = this.extractEventName(name);

                        if (typeof method === 'string' && this[method]) {

                                method = this[method].bind(this);
                        }

                        $el.addEventListener(event, method.bind(this));
                }
        }, {
                key: 'addEventListenersFromProps',
                value: function addEventListenersFromProps($el, props) {
                        var _this4 = this;

                        if (props) {

                                var properties = Object.keys(props);

                                properties.forEach(function (name) {

                                        if (_this4.isEventProp(name)) {

                                                var method = props[name];

                                                _this4.addEventListenerFromProp($el, name, method);
                                        }
                                });
                        }
                }
        }, {
                key: 'addChildrenToElement',
                value: function addChildrenToElement($el, children) {
                        var _this5 = this;

                        if (children) {

                                children.forEach(function (child) {
                                        return $el.appendChild.bind($el)(_this5.createElement(child));
                                });
                        }
                }
        }, {
                key: 'createElement',
                value: function createElement(node) {

                        if (typeof node === 'undefined' || node === null) {
                                return document.createTextNode('');
                        }

                        if (typeof node === 'string' || typeof node === 'number' || typeof node === 'undefined' || node === null) {
                                return document.createTextNode(node);
                        }

                        var $el = document.createElement(node.type);

                        this.setElementProps($el, node.props);
                        this.addEventListenersFromProps($el, node.props);
                        this.addChildrenToElement($el, node.children);

                        return $el;
                }
        }, {
                key: 'changed',
                value: function changed(node1, node2) {

                        return (typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2)) || typeof node1 === 'string' || typeof node1 === 'number' && node1 !== node2 || node1.type !== node2.type || node1.props && node1.props.forceUpdate;
                }
        }, {
                key: 'updateElement',
                value: function updateElement($parent, newNode, oldNode) {
                        var $el = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : $parent.childNodes[0];


                        /*console.log('-- update element');
                        console.log($parent);
                        console.log(newNode);
                        console.log(oldNode);
                        console.log($el);
                        console.log('//--');*/

                        if (this.isNil(oldNode)) {

                                $parent.appendChild(this.createElement(newNode));
                        } else if (this.isNil(newNode)) {

                                $parent.removeChild($el);

                                return -1; // suggests that an element has been removed
                        } else if (this.changed(newNode, oldNode)) {

                                $parent.replaceChild(this.createElement(newNode), $el);
                        } else if (newNode.type) {

                                this.updateProps($el, newNode.props, oldNode.props);
                                this.updateEventListenersFromProp($el, newNode.props, oldNode.props);

                                var max = Math.max(newNode.children.length, oldNode.children.length);

                                var adjustment = 0;

                                for (var i = 0; i < max; i++) {

                                        adjustment += this.updateElement($el, newNode.children[i], oldNode.children[i], $el.childNodes[i + adjustment]);
                                }
                        }

                        return 0; // suggest that an element has not been removed
                }
        }]);

        return EzVDOM;
}();

exports.default = EzVDOM;

/***/ })
/******/ ]);
});