import {Router} from 'express';

import {upload} from './upload.post';
import {download} from './download.get';
import {remove} from './remove.delete';
import {metadata} from './metadata.get';
import {thumb} from './thumb.get';
import multer from 'multer';
import {config} from '../runtime';

const router = Router();

const appMulter = multer({...config.storage.multer});

router.post('/upload', appMulter.single('image'), upload);
router.get('/download', download);
router.delete('/remove', remove);
router.get('/metadata', metadata);
router.get('/thumb', thumb);

export {router};
