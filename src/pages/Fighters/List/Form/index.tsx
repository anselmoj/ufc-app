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
  name: string
  category: string
  city: string
  academy: string
  ranking: string
  age: string
  height: string
  weight: string
  wins: string
  defeats: string
  finalization: string
  ko: string
  titleDefense: string
}

type ISubmitFormData = Required<IFormData>

interface IProps {
  initialData?: IFormData
  isLoading: boolean
  onSubmit(inputData: ISubmitFormData): void
}

type ISetErrors = IFormData

const validation = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  category: Yup.string().required('Categoria é obrigatório'),
  academy: Yup.string().required('Academia é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  ranking: Yup.string().required('Ranking é obrigatório'),
  age: Yup.string().required('Idade é obrigatório'),
  height: Yup.string().required('Altura é obrigatório'),
  weight: Yup.string().required('Peso é obrigatório'),
  wins: Yup.string().required('Vitórias é obrigatório'),
  defeats: Yup.string().required('Derrotas é obrigatório'),
  finalization: Yup.string().required('Finalização é obrigatório'),
  ko: Yup.string().required('KO é obrigatório'),
  titleDefense: Yup.string().required('Defesa de titulo é obrigatório'),
})

const FighterForm = ({ initialData, isLoading, onSubmit }: IProps) => {
  const [keyboardSpace] = useState<number>(0)
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

  const inputNameRef = useRef<IInputBaseRefProps>(null)
  const inputCategoryRef = useRef<IInputBaseRefProps>(null)
  const inputAcademyRef = useRef<IInputBaseRefProps>(null)
  const inputCityRef = useRef<IInputBaseRefProps>(null)
  const inputRankingRef = useRef<IInputBaseRefProps>(null)
  const inputAgeRef = useRef<IInputBaseRefProps>(null)
  const inputHeightRef = useRef<IInputBaseRefProps>(null)
  const inputWeightRef = useRef<IInputBaseRefProps>(null)
  const inputWinsRef = useRef<IInputBaseRefProps>(null)
  const inputDefeatsRef = useRef<IInputBaseRefProps>(null)
  const inputFinalizationRef = useRef<IInputBaseRefProps>(null)
  const inputKoRef = useRef<IInputBaseRefProps>(null)
  const inputTitleDefenseRef = useRef<IInputBaseRefProps>(null)

  function getFormData(): IFormData {
    if (!inputNameRef.current) {
      throw new Error('Error::FighterForm::inputNameRef')
    }
    if (!inputCategoryRef.current) {
      throw new Error('Error::FighterForm::inputCategoryRef')
    }
    if (!inputAcademyRef.current) {
      throw new Error('Error::FighterForm::inputAcademyRef')
    }
    if (!inputCityRef.current) {
      throw new Error('Error::FighterForm::inputCityRef')
    }
    if (!inputRankingRef.current) {
      throw new Error('Error::FighterForm::inputRankingRef')
    }
    if (!inputAgeRef.current) {
      throw new Error('Error::FighterForm::inputAgeRef')
    }
    if (!inputHeightRef.current) {
      throw new Error('Error::FighterForm::inputHeightRef')
    }
    if (!inputWeightRef.current) {
      throw new Error('Error::FighterForm::inputWeightRef')
    }
    if (!inputWinsRef.current) {
      throw new Error('Error::FighterForm::inputWinsRef')
    }
    if (!inputDefeatsRef.current) {
      throw new Error('Error::FighterForm::inputDefeatsRef')
    }
    if (!inputFinalizationRef.current) {
      throw new Error('Error::FighterForm::inputFinalizationRef')
    }
    if (!inputKoRef.current) {
      throw new Error('Error::FighterForm::inputKoRef')
    }
    if (!inputTitleDefenseRef.current) {
      throw new Error('Error::FighterForm::inputTitleDefenseRef')
    }
    return {
      name: inputNameRef.current.getValue(),
      category: inputCategoryRef.current.getValue(),
      academy: inputAcademyRef.current.getValue(),
      city: inputCityRef.current.getValue(),
      ranking: inputRankingRef.current.getValue(),
      age: inputAgeRef.current.getValue(),
      defeats: inputDefeatsRef.current.getValue(),
      finalization: inputFinalizationRef.current.getValue(),
      height: inputHeightRef.current.getValue(),
      weight: inputWeightRef.current.getValue(),
      ko: inputKoRef.current.getValue(),
      titleDefense: inputTitleDefenseRef.current.getValue(),
      wins: inputWinsRef.current.getValue(),
    }
  }

  function clearFormErrors(): void {
    inputNameRef.current?.setError('')
    inputCategoryRef.current?.setError('')
    inputAcademyRef.current?.setError('')
    inputCityRef.current?.setError('')
    inputRankingRef.current?.setError('')
    inputDefeatsRef.current?.setError('')
    inputAgeRef.current?.setError('')
    inputFinalizationRef.current?.setError('')
    inputHeightRef.current?.setError('')
    inputWeightRef.current?.setError('')
    inputKoRef.current?.setError('')
    inputWinsRef.current?.setError('')
    inputTitleDefenseRef.current?.setError('')
  }

  function setFormErrors(errors: ISetErrors): void {
    inputNameRef.current?.setError(errors.name ?? '')
    inputCategoryRef.current?.setError(errors.category ?? '')
    inputAcademyRef.current?.setError(errors.academy ?? '')
    inputCityRef.current?.setError(errors.city ?? '')
    inputRankingRef.current?.setError(errors.ranking ?? '')
    inputDefeatsRef.current?.setError(errors.defeats ?? '')
    inputAgeRef.current?.setError(errors.age ?? '')
    inputFinalizationRef.current?.setError(errors.finalization ?? '')
    inputHeightRef.current?.setError(errors.height ?? '')
    inputWeightRef.current?.setError(errors.weight ?? '')
    inputKoRef.current?.setError(errors.ko ?? '')
    inputWinsRef.current?.setError(errors.wins ?? '')
    inputTitleDefenseRef.current?.setError(errors.titleDefense ?? '')
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
        name: formData.name,
        category: formData.category,
        academy: formData.academy,
        city: formData.city,
        ranking: formData.ranking,
        age: formData.age,
        defeats: formData.defeats,
        finalization: formData.finalization,
        height: formData.height,
        ko: formData.ko,
        titleDefense: formData.titleDefense,
        weight: formData.weight,
        wins: formData.wins,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err)
        setFormErrors({
          name: validationErrors.name,
          academy: validationErrors.academy,
          category: validationErrors.category,
          city: validationErrors.city,
          ranking: validationErrors.ranking,
          age: validationErrors.age,
          defeats: validationErrors.defeats,
          finalization: validationErrors.finalization,
          height: validationErrors.height,
          ko: validationErrors.ko,
          titleDefense: validationErrors.titleDefense,
          weight: validationErrors.weight,
          wins: validationErrors.wins,
        })
        return
      }
      throw new Error('Error::FighterForm::handleSubmit')
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
    inputNameRef.current?.setValue(initialData.name || '')
    inputAcademyRef.current?.setValue(initialData.academy || '')
    inputCategoryRef.current?.setValue(initialData.category || '')
    inputCityRef.current?.setValue(initialData.city || '')
    inputRankingRef.current?.setValue(initialData.ranking || '')
    inputDefeatsRef.current?.setValue(initialData.defeats || '')
    inputFinalizationRef.current?.setValue(initialData.finalization || '')
    inputHeightRef.current?.setValue(initialData.height || '')
    inputWeightRef.current?.setValue(initialData.weight || '')
    inputKoRef.current?.setValue(initialData.ko || '')
    inputWinsRef.current?.setValue(initialData.wins || '')
    inputTitleDefenseRef.current?.setValue(initialData.titleDefense || '')
    inputAgeRef.current?.setValue(initialData.age || '')
  }, [initialData, isLoading])

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <Container keyboardSpace={keyboardSpace}>
          <Containers.Scroll>
            <Form>
              <InputContainer width="47%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Nome"
                  ref={inputNameRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Categoria"
                  ref={inputCategoryRef}
                />
              </InputContainer>

              <InputContainer width="29%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  keyboardType="numeric"
                  autoCorrect={false}
                  label="Peso"
                  ref={inputWeightRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Altura"
                  ref={inputHeightRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="numeric"
                  label="Idade"
                  ref={inputAgeRef}
                />
              </InputContainer>

              <InputContainer width="47%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Academia"
                  ref={inputAcademyRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="numeric"
                  label="Posição ranking"
                  ref={inputRankingRef}
                />
              </InputContainer>

              <InputContainer width="47%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Vitórias"
                  keyboardType="numeric"
                  ref={inputWinsRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="numeric"
                  label="Derrotas"
                  ref={inputDefeatsRef}
                />

              </InputContainer>

              <InputContainer width="47%">
                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  label="Nocautes"
                  keyboardType="numeric"
                  ref={inputKoRef}
                />

                <ComponentInputBase
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  keyboardType="numeric"
                  label="Finalizações"
                  ref={inputFinalizationRef}
                />
              </InputContainer>

              
              <InputContainer width="47%">

              <ComponentInputBase
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                blurOnSubmit
                keyboardType='numeric'
                label="Defesas por títulos"
                ref={inputTitleDefenseRef}
              />

              <ComponentInputBase
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                blurOnSubmit
                label="Cidade"
                ref={inputCityRef}
                returnKeyType="done"
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
export default FighterForm
