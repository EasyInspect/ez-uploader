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

        if (typeof props['ez-on-click'] !== 'undefined') {

            const prop      = 'ez-on-click';
            const method    = props[prop];

            props[prop] = method.bind(EzUploader)

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
                url: null,
                headers: {},
            }, upload),
            ui: Object.assign({}, {
                thumbnail: false
            }, ui)
        };

        this.uploader = null;

        this.addUploaderToDOM();
        this.addResumable();
        this.addKeypressEventListeners();

        window.update = this.updateDOM.bind(this);

    }

    get files() {

        return this.uploader && this.uploader.files || []

    }

    addResumable() {

        const browse = document.querySelectorAll("[ez-uploader-browse]");
        const drop = document.querySelectorAll("[ez-uploader-drop]")[0];

        this.uploader = new Resumable({
            target: this.settings.upload.url,
            headers: this.settings.upload.headers
        });

        this.uploader.assignBrowse(browse);
        this.uploader.assignDrop(drop);
        this.addResumableEventListeners();

    }

    browseFiles() {

        console.log('browse files boi');
        const browseButton = document.querySelectorAll("[ez-uploader-browse]")[0];

        browseButton.dispatchEvent(new Event('click'));

    }

    addKeypressEventListeners() {

        window.addEventListener('keyup', e => {

            if (e.keyCode === 27) {

                this.closeUploader();

            }

        })

    }

    addResumableEventListeners() {

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
        this.uploader.on('catchAll', () => {
            /*console.log('update dom from catch all');
            this.updateDOM()*/
        });

    }

    onFilesAdded(files, event) {

        console.log("multiple added", files, event);

        if (this.settings.ui.thumbnail) {

            files.forEach(file => {

                this.mappedFiles[file.uniqueIdentifier] = {};

                const fileReader = new FileReader();

                fileReader.readAsDataURL(file.file);
                fileReader.onload = event => {

                    this.mappedFiles[file.uniqueIdentifier].src = event.target.result;
                    console.log('update dom from on load');
                    this.updateDOM();

                };

            });

        }

        console.log('update dom from added');
        this.updateDOM();
    }

    onFileSuccess(file, event) {
        console.log("onFileSuccess", file, event);
        this.updateDOM();
    }

    onFileProgress(file, event) {
        console.log("onFileProgress", file, event);
        this.updateDOM();
    }

    onFileError(file, event) {
        console.log("onFileError", file, event);
        this.updateDOM();
    }

    onUploadStart(file, event) {
        console.log("onUploadStart", file, event);
        this.updateDOM();
    }

    onComplete(file, event) {
        console.log("onComplete", file, event);
        this.updateDOM();
    }

    onProgress(file, event) {
        console.log("onProgress", file, event);
        this.updateDOM();
    }

    onError(file, event) {
        console.log("onError", file, event);
        this.updateDOM();
    }

    onPause(file, event) {
        console.log("onPause", file, event);
        this.updateDOM();
    }

    onCancel(file, event) {
        console.log("onCancel", file, event);
        this.updateDOM();
    }

    openUploader() {

        console.log('modal toggle', this.modal);

        if (this.modal) {

            this.modal.style.display = 'block';

        }

    }

    closeUploader() {

        console.log('modal toggle', this, this.modal);

        if (this.modal) {

            this.modal.style.display = 'none';

        }

    }

    resetModal() {

        this.removeAllFiles();

    }

    startUploading() {

        this.uploader.upload();

    }

    pauseUploading() {

        this.uploader.pause();

    }

    removeFile(file) {

        console.log('remove file', file.fileName);
        this.uploader.removeFile(file);
        console.log('files after remove', this.uploader.files);

        console.log('update dom from remove');
        this.updateDOM();

    }

    pauseFile(file) {

        file.pause();
        console.log('update dom from pause');
        this.updateDOM();

    }

    retryFile(file) {

        file.abort();
        console.log('update dom from retry');
        this.updateDOM();

    }

    removeAllFiles() {

        console.log('remove all files');
        this.uploader.cancel();
        console.log('files after remove all', this.uploader.files);

        console.log('update dom from remove all');
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

        console.log('cached', this.cachedVDOM);
        console.log('modal', this.modal);

        document.body.appendChild(this.modal);

    }

    getTitleVDOM() {

        if (!this.files.length) {

            return (
                <p>Select some files to get started</p>
            )

        } else if (this.uploader.isUploading()) {

            const progress = (this.uploader.progress() * 100).toFixed(2);

            return (
                <p>Uploading {this.files.length} <span className="ez-uploader__progress-text">({progress}%)</span></p>
            )

        } else if (this.uploader.progress() >= 1) {

            return (
                <p>All images has been uploaded</p>
            )

        } else {

            return (
                <p>You've chosen {this.files.length} files</p>
            )

        }

    }

    getFileImageVDOM(file) {

        if (this.settings.ui.thumbnail && this.mappedFiles[file.uniqueIdentifier] && this.mappedFiles[file.uniqueIdentifier].src) {

            const src = this.mappedFiles[file.uniqueIdentifier].src;

            return (
                <div className="ez-uploader__modal-file-image">
                    <img src={src}/>
                </div>
            )

        } else {

            return '';

        }

    }

    getFileOptionsVDOM(file) {

        let options = [];

        if (this.uploader && (this.uploader.isUploading() || this.uploader.progress())) {

            const progress  = file.progress() * 100;
            const style     = `width:${progress}%`;

            options.push(
                <div className="ez-uploader__modal-file-progress">
                    <div className="ez-uploader__modal-file-progress-inner" style={style}></div>
                </div>
            )

        } else if (!file.isComplete()) {

            options.push(
                <div ez-on-click={() => this.removeFile(file)} className="ez-uploader__modal-button--small ez-uploader__modal-button-red">
                    remove
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
            <div ez-show-flex={!this.files.length} className="ez-uploader__modal-placeholder">
                <h2>Drag and drop files</h2>
                <p>or</p>
                <div ez-on-click={this.browseFiles} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt">Click here</div>
            </div>
        );

        console.log('--- returning files', options, this.files);

        return options;

    }

    getFileVDOM(file) {

        return (
            <div className="ez-uploader__modal-file">
                {this.getFileImageVDOM(file)}
                <div className="ez-uploader__modal-file-text">
                    <div className="ez-uploader__modal-file-name">
                        {file.fileName}
                    </div>
                    <div className="ez-uploader__modal-file-description">
                        {this.convertBytesToMB(file.size)} MB
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

        if (this.uploader && this.uploader.progress() < 1 && !this.uploader.isUploading() && this.files.length) {

            options.push(
                <div forceUpdate ez-on-click={this.removeAllFiles} className="ez-uploader__modal-button">
                    Remove all files
                </div>
            );

            options.push(
                <div forceUpdate ez-on-click={this.browseFiles} className="ez-uploader__modal-button ez-uploader__modal-button-wet-asphalt">
                    Add more files
                </div>
            );

        }

        return options;

    }

    getUploaderRightOptionsVDOM() {

        let options = [];

        if (this.uploader) {

            if (this.uploader.progress() >= 1) {

                options.push(
                    <span>All of your images has now been uploaded</span>
                );

                options.push(
                    <div ez-on-click={this.closeUploader} className="ez-uploader__modal-button">
                        Close
                    </div>
                );

                options.push(
                    <div ez-on-click={this.resetModal} className="ez-uploader__modal-button ez-uploader__modal-button-blue">
                        Upload more
                    </div>
                );

            } else if (this.uploader.isUploading()) {

                options.push(
                    <div ez-on-click={this.pauseUploading}
                         className="ez-uploader__modal-button ez-uploader__modal-button-orange">
                        Pause uploading
                    </div>
                )

            } else {

                if (this.uploader.progress()) {

                    options.push(
                        <div ez-on-click={this.startUploading}
                             className="ez-uploader__modal-button ez-uploader__modal-button-blue">
                            Resume uploading
                        </div>
                    )

                } else if(this.files.length) {

                    options.push(
                        <div ez-on-click={this.startUploading}
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
        const style         = `width:${progress}%`;

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
                        <div ez-on-click={this.closeUploader} className="ez-uploader__modal-cross">
                            <span className="ez-uploader__modal-cross-line"></span>
                            <span className="ez-uploader__modal-cross-line"></span>
                        </div>
                    </div>
                    <div className="ez-uploader__total-progress">
                        {this.getProgressVDOM()}
                    </div>
                    <div ez-uploader-drop className="ez-uploader__modal-body">
                        <div ez-uploader-browse></div>
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

}
