import Resumable from 'resumablejs'
import EzVDOM from './VDOM'

function h(type, props, ...children) {

    if (props) {

        if (typeof props['ez-show'] !== 'undefined' || typeof props['ez-show-flex'] !== 'undefined') {

            const prop      = typeof props['ez-show'] !== 'undefined' ? 'ez-show' : 'ez-show-flex';
            const type      = prop === 'ez-show-flex' ? 'flex' : 'block';
            const display   = !!props[prop] ? type : 'none';
            const style     = `display:${display};`;

            props.style = props.style ? `${style};${props.style}` : style;

            delete props[prop];

        }

    }

    return {
        type,
        props,
        children: children.length ? [].concat(...children) : []
    };

}

export default class EzUploader extends EzVDOM {

    constructor({upload, ui} = {}) {

        super();

        this.settings = {
            upload: Object.assign({}, {
                target: null,
                headers: {},
                minFileSizeErrorCallback: this.minFileSizeErrorCallback.bind(this),
                maxFileSizeErrorCallback: this.maxFileSizeErrorCallback.bind(this),
                fileType: [],
                fileTypeErrorCallback: this.fileTypeErrorCallback.bind(this)
            }, upload),
            ui: Object.assign({}, {
                thumbnail: false
            }, ui)
        };

        this.uploading = false;
        this.uploader = null;
        this.error = null;
        this.fileErrors = {};
        this.mappedFiles = {};

        this.addUploaderToDOM();
        this.addResumable();
        this.addKeypressEventListeners();

        window.update = this.updateDOM.bind(this);

    }

    get files() {

        return this.uploader && this.uploader.files || []

    }

    addResumable() {

        const settings = this.settings.upload;
        const file = document.querySelectorAll("[ez-uploader-browse]");
        const directory = document.querySelectorAll("[ez-uploader-browse-directory]");
        const drop = document.querySelectorAll("[ez-uploader-drop]")[0];

        this.uploader = new Resumable(settings);

        this.uploader.assignBrowse(file);
        this.uploader.assignBrowse(directory, true);
        this.uploader.assignDrop(drop);
        this.addResumableEventListeners();

    }

    clearError() {

        this.error = null;

    }

    clearFileErrors() {

        this.fileErrors = {};

    }

    maxFileSizeErrorCallback(file, errorCount) {

        //console.log(file);
        this.error = `${file.name} is too large, the maximum file size allowed is ${this.convertBytesToMB(this.settings.upload.maxFileSize)}MB`;
        this.updateDOM();

    }

    minFileSizeErrorCallback(file, errorCount) {

        //console.log(file);
        this.error = `${file.name} is too small, the minimum file size allowed is ${this.convertBytesToMB(this.settings.upload.minFileSize)}MB`;
        this.updateDOM();

    }

    fileTypeErrorCallback(file, errorCount) {

        //console.log(file);

        const allowedTypes          = this.settings.upload.fileType;
        const allowedTypesString    = allowedTypes.reduce((result, type, index) => {

            if (index == allowedTypes.length - 2) {
                result += `${type} or `
            } else if (index == allowedTypes.length - 1) {
                result += `${type}`
            } else {
                result += `${type}, `
            }

            return result;

        }, '');

        this.error = `${file.name} isn't an allowed file type, please upload files of type ${allowedTypesString}`;
        this.updateDOM();

    }

    browseFiles() {

        //console.log('browse files boi');

        const browseButton = document.querySelectorAll("[ez-uploader-browse]")[0];

        browseButton.dispatchEvent(new Event('click'));

    }

    browseDirectory() {

        //console.log('browse files boi');

        const browseButton = document.querySelectorAll("[ez-uploader-browse-directory]")[0];

        browseButton.dispatchEvent(new Event('click'));

    }

    addKeypressEventListeners() {

        window.addEventListener('keyup', e => {

            if (e.keyCode === 27 && 1<1) {

                this.close();

            }

        })

    }

    addResumableEventListeners() {

        this.uploader.on('filesAdded', this.onFilesAdded.bind(this));
        this.uploader.on('fileSuccess', this.onFileSuccess.bind(this));
        this.uploader.on('fileProgress', this.onFileProgress.bind(this));
        this.uploader.on('fileRetry', this.onFileRetry.bind(this));
        this.uploader.on('fileError', this.onFileError.bind(this));
        this.uploader.on('uploadStart', this.onUploadStart.bind(this));
        this.uploader.on('complete', this.onComplete.bind(this));
        this.uploader.on('progress', this.onProgress.bind(this));
        this.uploader.on('error', this.onError.bind(this));
        this.uploader.on('pause', this.onPause.bind(this));
        this.uploader.on('cancel', this.onCancel.bind(this));
        this.uploader.on('catchAll', () => {
            /*console.log('update dom from catch all');
            this.updateDOM()*/
        });

    }

    onFilesAdded(files, event) {

        //console.log("multiple added", files, event);

        if (this.settings.ui.thumbnail) {

            files.forEach(file => {

                this.mappedFiles[file.uniqueIdentifier] = {};

                const fileReader = new FileReader();

                fileReader.readAsDataURL(file.file);
                fileReader.onload = event => {

                    this.mappedFiles[file.uniqueIdentifier].src = event.target.result;
                    //console.log('update dom from on load');
                    this.updateDOM();

                };

            });

        }

        //console.log('update dom from added');
        this.clearError();
        this.updateDOM();
    }

    onFileSuccess(file, event) {
        //console.log("onFileSuccess", file, event);
        delete this.fileErrors[file.uniqueIdentifier];
        this.updateDOM();
    }

    onFileProgress(file, event) {
        //console.log("onFileProgress", file, event);
        //this.updateDOM();
    }

    onFileRetry(file, event) {
        //console.log("onFileRetry", file, event);
        this.updateDOM();
    }

    onFileError(file, error) {

        //console.log('on error', error);
        let message = '';

        try {

            //console.log('setting error message try', JSON.parse(JSON.stringify(error)), JSON.parse(JSON.stringify(error)).message);
            message = JSON.parse(JSON.stringify(error)).message || 'An error occured';

        } catch (e) {

            //console.log('setting error message catch');
            message = 'An error occurred'

        }

        //console.log('final error message', message);

        this.fileErrors[file.uniqueIdentifier] = {
            file,
            error: message
        };

        this.updateDOM();

    }

    onUploadStart(file, event) {
        //console.log("onUploadStart", file, event);
        this.updateDOM();
    }

    onComplete(file, event) {
        //console.log("onComplete", file, event);
        this.uploading = false;
        this.updateDOM();
    }

    onProgress(file, event) {
        //console.log("onProgress", file, event);
        this.updateDOM();
    }

    onError(file, event) {
        //console.log("onError", file, event);
        this.updateDOM();
    }

    onPause(file, event) {
        //console.log("onPause", file, event);
        this.updateDOM();
    }

    onCancel(file, event) {
        //console.log("onCancel", file, event);
        this.updateDOM();
    }

    open() {

        //console.log('modal toggle', this.modal);

        if (this.modal) {

            this.modal.style.display = 'block';

        }

    }

    close() {

        //console.log('modal toggle', this, this.modal);

        if (this.modal) {

            this.modal.style.display = 'none';

        }

    }

    resetModal() {

        this.close();
        this.removeAllFiles();

    }

    startUploading() {

        this.uploading = true;
        this.clearError();
        this.uploader.upload();
        this.updateDOM();

    }

    pauseUploading() {

        this.uploading = false;
        this.uploader.pause();

    }

    removeFile(file) {

        //console.log('remove file', file.fileName);
        delete this.fileErrors[file.uniqueIdentifier];
        this.uploader.removeFile(file);
        //console.log('files after remove', this.uploader.files);

        //console.log('update dom from remove');
        this.updateDOM();

    }

    pauseFile(file) {

        file.pause();
        //console.log('update dom from pause');
        this.updateDOM();

    }

    retryFile(file) {

        this.uploading = true;
        delete this.fileErrors[file.uniqueIdentifier];
        file.retry();
        //console.log('update dom from retry');
        this.updateDOM();

    }

    removeAllFiles() {

        //console.log('remove all files');
        this.clearError();
        this.clearFileErrors();
        this.uploader.cancel();
        //console.log('files after remove all', this.uploader.files);

        //console.log('update dom from remove all');
        this.updateDOM();

    }

    convertBytesToMB(bytes) {

        const mb = !isNaN(bytes) ? bytes / 1024 / 1024 : 0;

        return parseFloat(mb).toFixed(2)

    }

    // VDOM/DOM methods

    addUploaderToDOM() {

        this.cachedVDOM = this.getVDOM();
        this.modal = this.createElement(this.cachedVDOM);

        //console.log('cached', this.cachedVDOM);
        //console.log('modal', this.modal);

        document.body.appendChild(this.modal);

    }

    getTitleVDOM() {

        //console.log('-- getting title dom', this.uploading);

        if (!this.files.length) {

            return (
                <p>Select some files to get started</p>
            )

        } else if (this.uploading) {

            const progress = (this.uploader.progress() * 100).toFixed(2);

            return (
                <p>Uploading {this.files.length} {this.files.length > 1 ? 'files' : 'file'} <span className="ez-uploader__progress-text">({progress}%)</span></p>
            )

        } else if (this.uploader.progress() >= 1) {

            return (
                <p>The upload has completed</p>
            )

        } else {

            return (
                <p>You've chosen {this.files.length} {this.files.length > 1 ? 'files' : 'file'}</p>
            )

        }

    }

    getErrorVDOM() {

        if (this.error) {

            return (
                <div className="ez-uploader__modal-header-error">{this.error}</div>
            )

        }

        return ''

    }

    getFileImageVDOM(file) {

        if (this.settings.ui.thumbnail) {

            if (this.mappedFiles[file.uniqueIdentifier] && this.mappedFiles[file.uniqueIdentifier].src) {

                const src = this.mappedFiles[file.uniqueIdentifier].src;

                return (
                    <div className="ez-uploader__modal-file-image">
                        <img src={src}/>
                    </div>
                )

            } else {

                return (
                    <div className="ez-uploader__modal-file-image"></div>
                )

            }

        } else {

            return '';

        }

    }

    getFileOptionsVDOM(file) {

        let options = [];

        if (this.uploader && !this.fileErrors[file.uniqueIdentifier] && (this.uploading || file.progress())) {

            const progress  = file.progress() * 100;
            const style     = `width:${progress}%`;

            options.push(
                <div className="ez-uploader__modal-file-progress">
                    <div className="ez-uploader__modal-file-progress-inner" style={style}></div>
                </div>
            )

        } else if (!this.uploading && file.progress() === 0) {

            options.push(
                <div ez-on-click={this.removeFile.bind(this, file)} className="ez-uploader__modal-button--small ez-uploader__modal-button-red">
                    remove
                </div>
            );

        } else if (this.fileErrors[file.uniqueIdentifier]) {

            options.push(
                <div ez-on-click={this.retryFile.bind(this, file)} className="ez-uploader__modal-button--small ez-uploader__modal-button-wet-asphalt">
                    retry
                </div>
            );

        }

        return options

    }

    getBodyVDOM() {

        let options = [];

        if (this.uploader && this.uploader.files.length) {

            options = this.files.map(this.getFileVDOM.bind(this))

        }

        options.push(
            <div forceUpdate ez-show-flex={!this.files.length} className="ez-uploader__modal-placeholder">
                <h2>Drag and drop files</h2>
                <p>or</p>
                <div>
                    <div ez-on-click={this.browseDirectory.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt" style="margin-right:5px">Add directory</div>
                    <div ez-on-click={this.browseFiles.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt">Add files</div>
                </div>
            </div>
        );

        return options;

    }

    getFileVDOM(file) {

        let stateClass = '';

        if (this.fileErrors[file.uniqueIdentifier]) {

            stateClass = 'ez-uploader__modal-file--error'

        } else if (file.progress() === 1) {

            stateClass = 'ez-uploader__modal-file--success'

        }

        return (
            <div className={`ez-uploader__modal-file ${stateClass}`}>
                {this.getFileImageVDOM(file)}
                <div className="ez-uploader__modal-file-text">
                    <div className="ez-uploader__modal-file-name">
                        {file.fileName}
                        <span className="ez-uploader__modal-file-size">
                            {this.convertBytesToMB(file.size)} MB
                        </span>
                    </div>
                    <div className="ez-uploader__modal-file-error">
                        {this.fileErrors[file.uniqueIdentifier] ? this.fileErrors[file.uniqueIdentifier].error : ''}
                    </div>
                </div>
                <div className="ez-uploader__modal-file-options">
                    {this.getFileOptionsVDOM(file)}
                </div>
            </div>
        )

    }

    getUploaderLeftOptionsVDOM() {

        let options = [];

        if (this.uploader && !this.uploading && this.files.length) {

            if (this.uploader.progress() < 1) {

                options.push(
                    <div ez-on-click={this.removeAllFiles.bind(this)} className="ez-uploader__modal-button">
                        Clear
                    </div>
                );

            }

            options.push(
                <div ez-on-click={this.browseFiles.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt">
                    Add files
                </div>
            );

            options.push(
                <div ez-on-click={this.browseDirectory.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt">
                    Add directory
                </div>
            );

        }

        return options;

    }

    getUploaderRightOptionsVDOM() {

        let options = [];

        if (this.uploader) {

            if (this.uploader.progress() >= 1) {

                const errorCount = Object.keys(this.fileErrors).length;

                if (!errorCount) {

                    options.push(
                        <span className="ez-uploader__modal-footer-info">All of your images has now been uploaded</span>
                    );

                } else if (errorCount < this.files.length) {

                    options.push(
                        <span className="ez-uploader__modal-footer-info">{errorCount} out of {this.files.length} {this.files.length > 1 ? 'files' : 'file'} failed to upload</span>
                    );

                } else if (errorCount === this.files.length) {

                    options.push(
                        <span className="ez-uploader__modal-footer-info">All of your files failed to upload</span>
                    );

                }

                /*options.push(
                    <div ez-on-click={this.close.bind(this)} className="ez-uploader__modal-button">
                        Close
                    </div>
                );*/

                options.push(
                    <div ez-on-click={this.resetModal.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-green">
                        Done
                    </div>
                );

            } else if (this.uploading) {

                options.push(
                    <div ez-on-click={this.pauseUploading.bind(this)} className="ez-uploader__modal-button ez-uploader__modal-button-orange">
                        Pause uploading
                    </div>
                )

            } else {

                if (this.uploader.progress()) {

                    options.push(
                        <div ez-on-click={this.startUploading.bind(this)}
                             className="ez-uploader__modal-button ez-uploader__modal-button-blue">
                            Resume uploading
                        </div>
                    )

                } else if(this.files.length) {

                    options.push(
                        <div ez-on-click={this.startUploading.bind(this)}
                             className="ez-uploader__modal-button ez-uploader__modal-button-blue">
                            Start uploading
                        </div>
                    )

                }

            }

        }

        return options;

    }

    getProgressVDOM() {

        const progress      = this.uploader && this.uploader.progress() * 100 || 0;
        const background    = progress === 100 ? 'background:#27ae60' : '';
        const width         = `width:${progress}%`;
        const style         = `${width};${background}`;

        return (
            <div className="ez-uploader__total-progress-inner" style={style}></div>
        )

    }

    getVDOM() {

        return (
            <div className="ez-uploader__backdrop">
                <div className="ez-uploader__modal">
                    <div className="ez-uploader__modal-header">
                        <div className="ez-uploader__modal-title">
                            {this.getTitleVDOM()}
                        </div>
                        <div ez-on-click={this.close.bind(this)} className="ez-uploader__modal-cross">
                            <span className="ez-uploader__modal-cross-line"></span>
                            <span className="ez-uploader__modal-cross-line"></span>
                        </div>
                        {this.getErrorVDOM()}
                    </div>
                    <div className="ez-uploader__total-progress">
                        {this.getProgressVDOM()}
                    </div>
                    <div ez-uploader-drop className="ez-uploader__modal-body">
                        <div ez-uploader-browse></div>
                        <div ez-uploader-browse-directory></div>
                        {this.getBodyVDOM()}
                    </div>
                    <div ez-show-flex={this.files.length} className="ez-uploader__modal-footer">
                        <div className="ez-uploader__modal-footer-left">
                            {this.getUploaderLeftOptionsVDOM()}
                        </div>
                        <div className="ez-uploader__modal-footer-right">
                            {this.getUploaderRightOptionsVDOM()}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    updateDOM() {

        const VDOM = this.getVDOM();
        console.time('update dom');
        //console.log('-- update vdom', VDOM);

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

}
