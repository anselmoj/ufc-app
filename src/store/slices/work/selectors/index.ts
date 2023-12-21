import crateIsLoading from './createIsLoading'
import details from './details'
import editIsLoading from './editIsLoading'
import filterSearchStatus from './filterSearchStatus'
import filterSearchTitle from './filterSearchTitle'
import getAllEmptyMessage from './getAllEmptyMessage'
import getAllErrorMessage from './getAllErrorMessage'
import getAllIsLoading from './getAllIsLoading'
import getAllList from './getAllList'

const workSelectors = {
  getAllList,
  getAllIsLoading,
  getAllEmptyMessage,
  getAllErrorMessage,
  crateIsLoading,
  editIsLoading,
  details,
  filterSearchTitle,
  filterSearchStatus,
}

export default workSelectors
