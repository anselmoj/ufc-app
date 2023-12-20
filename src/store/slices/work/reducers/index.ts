import createFailure from './create/failure'
import createRequest from './create/request'
import createSuccess from './create/success'
import getAllFailure from './getAll/failure'
import getAllRequest from './getAll/request'
import getAllSuccessWithData from './getAll/successWithData'
import getAllSuccessWithoutData from './getAll/successWithoutData'

const reducers = {
  getAllFailure,
  getAllRequest,
  getAllSuccessWithoutData,
  getAllSuccessWithData,
  createFailure,
  createRequest,
  createSuccess,
}

export default reducers
