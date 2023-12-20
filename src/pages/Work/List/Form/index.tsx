import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'

import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'
import colors from '@styles/colors'
import Containers from '@styles/containers'
import * as Yup from 'yup'

import ComponentButtonBase from '@components/button/Base'
import ComponentInputBase, { IInputBaseRefProps } from '@components/input/Base'

import getValidationErrors from '@helpers/getValidationErrors'

import { ButtonContainer, Container, Form, InputContainer } from './styles'

interface IFormData {
  title: string
  description: string
  status: string
}

type ISubmitFormData = Required<IFormData>

interface IProps {
  initialData?: IFormData
  isLoading: boolean
  onSubmit(inputData: ISubmitFormData): void
}

type ISetErrors = IFormData

const validation = Yup.object().shape({
  title: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatório'),
  status: Yup.string().required('Status é obrigatório'),
})

const WorkForm = ({ initialData, isLoading, onSubmit }: IProps) => {
  const [keyboardSpace] = useState<number>(0)
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

  const inputTitleRef = useRef<IInputBaseRefProps>(null)
  const inputDescriptionRef = useRef<IInputBaseRefProps>(null)
  const inputStatusRef = useRef<IInputBaseRefProps>(null)

  function getFormData(): IFormData {
    if (!inputTitleRef.current) {
      throw new Error('Error::WorkForm::inputTitleRef')
    }
    if (!inputDescriptionRef.current) {
      throw new Error('Error::WorkForm::inputDescriptionRef')
    }
    if (!inputStatusRef.current) {
      throw new Error('Error::WorkForm::inputStatusRef')
    }

    return {
      title: inputTitleRef.current.getValue(),
      description: inputDescriptionRef.current.getValue(),
      status: inputStatusRef.current.getValue(),
    }
  }

  function clearFormErrors(): void {
    inputTitleRef.current?.setError('')
    inputDescriptionRef.current?.setError('')
    inputStatusRef.current?.setError('')
  }

  function setFormErrors(errors: ISetErrors): void {
    inputTitleRef.current?.setError(errors.title ?? '')
    inputDescriptionRef.current?.setError(errors.description ?? '')
    inputStatusRef.current?.setError(errors.status ?? '')
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault()
    const formData = getFormData()
    clearFormErrors()
    try {
      await validation.validate(formData, {
        abortEarly: false,
      })
      onSubmit({
        title: formData.title,
        description: formData.description,
        status: formData.status,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err)
        setFormErrors({
          title: validationErrors.title,
          description: validationErrors.description,
          status: validationErrors.status,
        })
        return
      }
      throw new Error('Error::WorkForm::handleSubmit')
    }
  }

  const handleClose = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (!initialData) {
      return
    }
    inputTitleRef.current?.setValue(initialData.title || '')
    inputDescriptionRef.current?.setValue(initialData.description || '')
    inputStatusRef.current?.setValue(initialData.status || '')
  }, [initialData, isLoading])

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <Container keyboardSpace={keyboardSpace}>
          <Containers.Scroll>
            <Form>
              <InputContainer width="48%">
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
                  label="Descrição"
                  ref={inputDescriptionRef}
                />
              </InputContainer>

              <InputContainer width="48%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Status"
                  ref={inputStatusRef}
                />
              </InputContainer>

              <ButtonContainer>
                <ComponentButtonBase
                  backgroundColor={colors.red500}
                  marginTop={1}
                  onPress={handleClose}
                  width={48}
                >
                  Cancelar
                </ComponentButtonBase>
                <ComponentButtonBase
                  backgroundColor={colors.blue500}
                  isLoading={isLoading}
                  marginTop={1}
                  onPress={handleSubmit}
                  width={48}
                >
                  Confirmar
                </ComponentButtonBase>
              </ButtonContainer>
            </Form>
          </Containers.Scroll>
        </Container>
      </Containers.SafeArea>
    </Containers.Main>
  )
}

export type { ISubmitFormData as SubmitFormData }
export default WorkForm
