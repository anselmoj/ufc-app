import {FormEvent, useCallback, useEffect, useRef, useState} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PublicStackParamList} from '@routes/public.routes';
import colors from '@styles/colors';
import Containers from '@styles/containers';
import * as Yup from 'yup';

import ComponentButtonBase from '@components/button/Base';
import ComponentInputBase, {IInputBaseRefProps} from '@components/input/Base';

import getValidationErrors from '@helpers/getValidationErrors';

import {ButtonContainer, Container, Form, InputContainer} from './styles';

interface IFormData {
  name: string;
  category: string;
  academy: string;
  city: string;
  position: string;
}

interface ISubmitFormData extends Required<IFormData> {}

interface IProps {
  initialData?: IFormData;
  isLoading: boolean;
  onSubmit(inputData: ISubmitFormData): void;
}

interface ISetErrors extends IFormData {}

const validation = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  category: Yup.string().required('Categoria é obrigatório'),
  academy: Yup.string().required('Academia é obrigatório'),
  city: Yup.string().required('Cidade é obrigatório'),
  position: Yup.string().required('Ranking é obrigatório'),
});

const FighterForm = ({initialData, isLoading, onSubmit}: IProps) => {
  const [keyboardSpace] = useState<number>(0);
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>();

  const inputNameRef = useRef<IInputBaseRefProps>(null);
  const inputCategoryRef = useRef<IInputBaseRefProps>(null);
  const inputAcademyRef = useRef<IInputBaseRefProps>(null);
  const inputCityRef = useRef<IInputBaseRefProps>(null);
  const inputPositionRef = useRef<IInputBaseRefProps>(null);

  function getFormData(): IFormData {
    if (!inputNameRef.current) {
      throw new Error('Error::FighterForm::inputNameRef');
    }
    if (!inputCategoryRef.current) {
      throw new Error('Error::FighterForm::inputCategoryRef');
    }
    if (!inputAcademyRef.current) {
      throw new Error('Error::FighterForm::inputAcademyRef');
    }
    if (!inputCityRef.current) {
      throw new Error('Error::FighterForm::inputCityRef');
    }
    if (!inputPositionRef.current) {
      throw new Error('Error::FighterForm::inputPositionRef');
    }
    return {
      name: inputNameRef.current.getValue(),
      category: inputCategoryRef.current.getValue(),
      academy: inputAcademyRef.current.getValue(),
      city: inputCityRef.current.getValue(),
      position: inputPositionRef.current.getValue(),
    };
  }

  function clearFormErrors(): void {
    inputNameRef.current?.setError('');
    inputCategoryRef.current?.setError('');
    inputAcademyRef.current?.setError('');
    inputCityRef.current?.setError('');
    inputPositionRef.current?.setError('');
  }

  function setFormErrors(errors: ISetErrors): void {
    inputNameRef.current?.setError(errors.name ?? '');
    inputCategoryRef.current?.setError(errors.category ?? '');
    inputAcademyRef.current?.setError(errors.academy ?? '');
    inputCityRef.current?.setError(errors.city ?? '');
    inputPositionRef.current?.setError(errors.position ?? '');
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();
    const formData = getFormData();
    clearFormErrors();
    try {
      await validation.validate(formData, {
        abortEarly: false,
      });
      onSubmit({
        name: formData.name,
        category: formData.category,
        academy: formData.academy,
        city: formData.city,
        position: formData.position,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        setFormErrors({
          name: validationErrors.name,
          academy: validationErrors.academy,
          category: validationErrors.category,
          city: validationErrors.city,
          position: validationErrors.position,
        });
        return;
      }
      throw new Error('Error::FighterForm::handleSubmit');
    }
  }

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!initialData) {
      return;
    }
    inputNameRef.current?.setValue(initialData.name || '');
    inputAcademyRef.current?.setValue(initialData.academy || '');
    inputCategoryRef.current?.setValue(initialData.category || '');
    inputCityRef.current?.setValue(initialData.city || '');
    inputPositionRef.current?.setValue(initialData.position || '');
  }, [initialData, isLoading]);

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

              <InputContainer width="48%">
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
                  ref={inputPositionRef}
                />
              </InputContainer>

              <ComponentInputBase
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect={false}
                blurOnSubmit
                label="Cidade"
                ref={inputCityRef}
                returnKeyType="done"
              />

              <ButtonContainer>
                <ComponentButtonBase
                  backgroundColor={colors.red500}
                  marginTop={1}
                  onPress={handleClose}
                  width={48}>
                  Cancelar
                </ComponentButtonBase>
                <ComponentButtonBase
                  backgroundColor={colors.blue500}
                  isLoading={isLoading}
                  marginTop={1}
                  onPress={handleSubmit}
                  width={48}>
                  Confirmar
                </ComponentButtonBase>
              </ButtonContainer>
            </Form>
          </Containers.Scroll>
        </Container>
      </Containers.SafeArea>
    </Containers.Main>
  );
};

export type {ISubmitFormData as SubmitFormData};
export default FighterForm;
