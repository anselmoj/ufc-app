import React, {
  FormEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ComponentInputBase, { IInputBaseRefProps } from '@components/input/Base'

import ComponentButtonBase from '@components/button/Base'

import ComponentModalBase, {
  type IComponentModalBaseRefProps,
} from '@components/modal/Base'

import colors from '@styles/colors'
import Containers from '@styles/containers'

import {
  ButtonContainer,
  CloseButton,
  CloseText,
  Container,
  Content,
  Header,
  HeaderContent,
  HorizontalContainer,
  Title,
} from './styles'
import { useReduxSelector } from '@hooks/useReduxSelector'
import workSelectors from '@store/slices/work/selectors'

export interface IFilterFormData {
  title: string
  status: string
}

type ISubmitFormData = Required<IFilterFormData>

export interface IFilterRefProps {
  close: () => void
  open: () => void
}

const Filter: React.ForwardRefRenderFunction<IFilterRefProps> = (_, ref) => {
  const insets = useSafeAreaInsets()
  const componentModalBaseRef = useRef<IComponentModalBaseRefProps>(null)
  const isLoading = useReduxSelector(workSelectors.getAllIsLoading)

  const inputTitleRef = useRef<IInputBaseRefProps>(null)
  const inputStatusRef = useRef<IInputBaseRefProps>(null)

  function getFormData(): IFilterFormData {
    if (!inputTitleRef.current) {
      throw new Error('Error::WorkForm::inputTitleRef')
    }
    if (!inputStatusRef.current) {
      throw new Error('Error::WorkForm::inputStatusRef')
    }
    return {
      title: inputTitleRef.current.getValue(),
      status: inputStatusRef.current.getValue(),
    }
  }

  const openModal = useCallback(() => {
    componentModalBaseRef.current?.open()
  }, [])

  const closeModal = useCallback(() => {
    componentModalBaseRef.current?.close()
  }, []) 


  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }))

  return (
    <ComponentModalBase ref={componentModalBaseRef}>
      <Container paddingBottom={insets.bottom}>
        <Containers.Scroll
          backgroundColor={colors.gray100}
          keyboardShouldPersistTaps="handled"
          paddingBottom={0}
          paddingTop={0}
        >
          <Header>
            <HeaderContent>
              <Title>Filtrar tarefa</Title>
            </HeaderContent>
            <CloseButton onPress={closeModal}>
              <CloseText>Fechar</CloseText>
            </CloseButton>
          </Header>

          <Content>
            <HorizontalContainer>
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Título"
                  ref={inputTitleRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Status"
                  ref={inputStatusRef}
                />
            </HorizontalContainer>

            <ButtonContainer>
              <ComponentButtonBase
                disabled={isLoading}
                isLoading={false}
                width={45}
              >
                Buscar
              </ComponentButtonBase>
            </ButtonContainer>
          </Content>
        </Containers.Scroll>
      </Container>
    </ComponentModalBase>
  )
}

export default forwardRef(Filter)
