import { connect } from 'react-redux';
import actions from '../../actions';
import ImageEdit from '../../views/ImageEdit';

const {
    images: { getImageList, selectedImage, selectedFileImage, uploadFile, updateProduct },
    handlers: { setError },
} = actions;

export default connect(
    ({ images, user }) => ({
        ...images,
        token: user.token,
    }),
    dispatch => ({
        getImageList: () => dispatch(getImageList()),
        selectedImage: (selected) => dispatch(selectedImage(selected)),
        selectedFileImage: (file, imagePreviewUrl) => dispatch(selectedFileImage(file, imagePreviewUrl)),
        uploadFile: (file) => dispatch(uploadFile(file)),
        setError: (txt) => dispatch(setError(txt)),
        updateProduct: (token,data) => dispatch(updateProduct(token,data)),
    })
)(ImageEdit);