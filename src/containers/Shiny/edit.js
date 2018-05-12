import { connect } from 'react-redux';
import actions from '../../actions';
import ShinyEdit from '../../views/Shiny/edit';

const {
    handlers: { setError },
    images: { getImageList, selectedImage, selectedFileImage, uploadFile, updateProduct },
    // shiny: { fetchSearch, startLoad },
} = actions;

export default connect(
    ({ images, shiny, user }) => ({
        ...images,
        shiny,
        token: user.token,
    }),
    dispatch => ({
        getImageList: () => dispatch(getImageList()),
        selectedImage: (selected) => dispatch(selectedImage(selected)),
        selectedFileImage: (file, imagePreviewUrl) => dispatch(selectedFileImage(file, imagePreviewUrl)),
        uploadFile: (file) => dispatch(uploadFile(file)),
        updateProduct: (token,data) => dispatch(updateProduct(token,data)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(ShinyEdit);