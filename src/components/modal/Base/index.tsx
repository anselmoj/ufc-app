import React, {
  forwardRef,
  type PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'

import { Platform } from 'react-native'
import Modal from 'react-native-modal'
import { RootSiblingParent } from 'react-native-root-siblings'

import { ModalStyles } from './styles'

export interface IComponentModalBaseRefProps {
  close: () => void
  open: () => void 
}

const ComponentModalBase: React.ForwardRefRenderFunction<
  IComponentModalBaseRefProps,
  PropsWithChildren
> = ({ children }, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const openModal = useCallback(() => {
    setIsVisible(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsVisible(false)
  }, [])

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }))

  return (
    <Modal
      animationIn="slideInUp"
      animationInTiming={500}
      animationOut="slideOutDown"
      animationOutTiming={500}
      backdropColor="#000"
      coverScreen
      hasBackdrop
      isVisible={isVisible}
      onModalHide={closeModal}
      style={ModalStyles.content}
      swipeThreshold={16}
      useNativeDriver={Platform.OS === 'android'}
      useNativeDriverForBackdrop={Platform.OS === 'android'}
    >
      <RootSiblingParent>{children}</RootSiblingParent>
    </Modal>
  )
}

export default forwardRef(ComponentModalBase)
