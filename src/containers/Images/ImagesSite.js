import { connect } from 'react-redux';
import actions from '../../actions';
import ImagesSite from '../../views/Images/ImagesSite';

const {
    images: { getImageList, selectedImage, selectedFileImage, uploadFile },
    handlers: { setError },
} = actions;

export default connect(
    ({ images }) => ({
        images:images.list,
        selected: images.selected,
        file: images.file,
        imagePreviewUrl: images.imagePreviewUrl
    }),
    dispatch => ({
        getImageList: () => dispatch(getImageList()),
        selectedImage: (selected) => dispatch(selectedImage(selected)),
        selectedFileImage: (file, imagePreviewUrl) => dispatch(selectedFileImage(file, imagePreviewUrl)),
        uploadFile: (file) => dispatch(uploadFile(file)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(ImagesSite);