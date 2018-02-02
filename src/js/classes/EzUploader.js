import Resumable from 'resumablejs'
import EzVDOM from './VDOM'

function h(type, props, ...children) {
    return {
        type,
        props,
        children: children.length ? [].concat(...children) : []
    };
}

export default class EzUploader extends EzVDOM {

    constructor({ upload, ui } = {}) {

        super();

        this.settings = {
            uploader: Object.assign({}, {
                url: null,
                headers: {},
            }, upload),
            ui: Object.assign({}, {
                thumbnail: false
            }, ui)
        };

        this.uploader = null;
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

        const browse = document.querySelectorAll("[ez-uploader-browse]")[0];
        const drop = document.querySelectorAll("[ez-uploader-drop]")[0];

        this.uploader = new Resumable({
            target: this.settings.url,
            headers: this.settings.headers
        });

        this.uploader.assignBrowse(browse);
        this.uploader.assignDrop(drop);
        this.addResumableEventListeners();

    }

    addKeypressEventListeners() {

        window.addEventListener('keyup', e => {

            if (e.keyCode === 27) {

                this.closeUploader();

            }

        })

    }

    addResumableEventListeners() {

        this.uploader.on("filesAdded", this.onFilesAdded.bind(this));
        this.uploader.on("fileSuccess", this.onFileSuccess.bind(this));
        this.uploader.on("fileError", this.onFileError.bind(this));

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
                    console.log('-- updating dom from on load');
                    this.updateDOM();

                };

            });

        }

        console.log('-- updating dom from on added');
        this.updateDOM();
    }

    onFileSuccess(file, event) {
        console.log("success", file, event);
    }

    onFileError(file, event) {
        console.log("error", file, event);
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

    startUploading() {

        this.uploader.upload();

    }

    removeFile(file) {

        console.log('remove file', file.fileName);
        this.uploader.removeFile(file);
        console.log('files after remove', this.uploader.files);

        console.log('-- updating dom from on remove');
        this.updateDOM();

    }

    removeAllFiles() {

        console.log('remove all files');
        this.uploader.cancel();
        console.log('files after remove all', this.uploader.files);

        console.log('-- updating dom from on remove all');
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

    getFileImageVDOM(file) {

        if (this.settings.ui.thumbnail && this.mappedFiles[file.uniqueIdentifier] && this.mappedFiles[file.uniqueIdentifier].src) {

            const src = this.mappedFiles[file.uniqueIdentifier].src;

            return (
                <div className="ez-uploader__modal-file-image">
                    <img src={src}/>
                </div>
            )

        } else {

            return

        }

    }

    getFileVDOM(file) {

        return (
            <div forceUpdate className="ez-uploader__modal-file">
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
                    <div ez-on-click={() => this.removeFile(file)} className="ez-uploader__modal-button ez-uploader__modal-button-red">remove</div>
                </div>
            </div>
        )

    }

    getVDOM() {

        return (
            <div className="ez-uploader__backdrop">
                <div className="ez-uploader__modal">
                    <div className="ez-uploader__modal-header">
                        <div className="ez-uploader__modal-title">
                            You've chosen {this.files.length} files
                        </div>
                        <div ez-on-click="closeUploader" className="ez-uploader__modal-cross">
                            <span className="ez-uploader__modal-cross-line"></span>
                            <span className="ez-uploader__modal-cross-line"></span>
                        </div>
                    </div>
                    <div ez-uploader-drop className="ez-uploader__modal-body">
                        {this.files.map(this.getFileVDOM.bind(this))}
                    </div>
                    <div className="ez-uploader__modal-footer">
                        <div className="ez-uploader__modal-footer-left">
                            <div ez-on-click={() => this.removeAllFiles()} className="ez-uploader__modal-button">
                                Remove all files
                            </div>
                            <div ez-uploader-browse className="ez-uploader__modal-button ez-uploader__modal-button-lightblue">
                                Add more files
                            </div>
                        </div>
                        <div className="ez-uploader__modal-footer-right">
                            <div ez-on-click="startUploading" className="ez-uploader__modal-button ez-uploader__modal-button-blue">
                                Start uploading
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    updateDOM() {

        console.time('update dom');
        const VDOM = this.getVDOM();

        console.log('---- UPDATE DOM YO -----');
        console.log('old', this.cachedVDOM);
        console.log('to', VDOM);
        console.log('files', this.uploader.files);

        this.updateElement(this.modal, VDOM.children[0], this.cachedVDOM.children[0]);

        this.cachedVDOM = VDOM;
        console.timeEnd('update dom');

        console.log('// DONE UPDATING DOM //');

    }

    updateDOMPrimitive() {

        console.log('update modal');

        const VDOM = this.getVDOM();
        const oldModal = this.modal;
        const newModal = this.createElement(VDOM);

        console.log(newModal.childNodes[0]);
        console.log(oldModal.childNodes[0]);

        this.modal.replaceChild(newModal.childNodes[0], oldModal.childNodes[0]);
        //document.body.appendChild(newModal.childNodes[0]);
        this.cachedVDOM = this.getVDOM();
        //this.modal = newModal;

        //this.updateElement(this.modal, this.getVDOM(), this.cachedVDOM)

    }

}
