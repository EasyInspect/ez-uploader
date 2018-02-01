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

    constructor(settings) {

        super();

        this.settings = Object.assign({}, {
            url: null,
            headers: {}
        }, settings);

        this.uploader = null;

        this.addUploaderToDOM();
        this.addResumable();
        this.addKeypressEventListeners();

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

    addUploaderToDOM() {

        this.cachedVDOM = this.getVDOM();
        this.modal = this.createElement(this.cachedVDOM);

        document.body.appendChild(this.modal);

    }

    getFileVDOM(file) {

        return (
            <div className="ez-uploader__modal-file">
                {file.fileName}
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
                        {this.files.map(this.getFileVDOM)}
                    </div>
                    <div className="ez-uploader__modal-footer">
                        <div className="ez-uploader__modal-footer-left">
                            <div className="ez-uploader__modal-button">
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

        const VDOM = this.getVDOM();

        console.log('update dom from:');
        console.log('old', this.cachedVDOM);
        console.log('to', VDOM);

        this.updateElement(this.modal, VDOM.children[0], this.cachedVDOM.children[0]);

        this.cachedVDOM = VDOM;

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
