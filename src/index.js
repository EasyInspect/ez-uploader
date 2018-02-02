
import style from './scss/main.scss'
import EzUploader from './js/classes/EzUploader'
import fontawesome from '@fortawesome/fontawesome'
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay'
import faPause from '@fortawesome/fontawesome-free-solid/faPause'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

fontawesome.library.add(faPlay);
fontawesome.library.add(faPause);
fontawesome.library.add(faTrash);

window.EzUploader = EzUploader;

export default  EzUploader;