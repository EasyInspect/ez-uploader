
import style from './scss/main.scss'
import EzUploader from './js/classes/EzUploader'

import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-regular/faUser'

fontawesome.library.add(faUser);

window.EzUploader = EzUploader;

export default  EzUploader;