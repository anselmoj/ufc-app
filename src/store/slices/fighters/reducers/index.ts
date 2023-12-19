import createFailure from './create/failure';
import createRequest from './create/request';
import createSuccess from './create/success';
import detailsFailure from './details/failure';
import detailsRequest from './details/request';
import detailsSuccess from './details/success';
import editFailure from './edit/failure';
import editRequest from './edit/request';
import editSuccess from './edit/success';
import getAllFailure from './getAll/failure';
import getAllRequest from './getAll/request';
import getAllSuccessWithData from './getAll/successWithData';
import getAllSuccessWithoutData from './getAll/successWithoutData';

const reducers = {
  getAllFailure,
  getAllRequest,
  getAllSuccessWithoutData,
  getAllSuccessWithData,
  createFailure,
  createRequest,
  createSuccess,
  editFailure,
  editRequest,
  editSuccess,
  detailsFailure,
  detailsRequest,
  detailsSuccess,
};

export default reducers;
