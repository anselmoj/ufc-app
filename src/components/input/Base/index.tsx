import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {TextInput, TextInputProps, useColorScheme} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import colors from '@styles/colors';

import ComponentIsVisible from '@components/utils/IsVisible';

import {
  Container,
  ContainerInput,
  Input,
  Label,
  MessageError,
  ToggleTypeTouchable,
} from './styles';

export interface IInputBaseRefProps {
  focus: () => void;
  getValue: () => string;
  setError: (error: string) => void;
  setValue: (value: string) => void;
}

export interface IComponentInputBaseProps extends TextInputProps {
  icon?: ReactNode;
  isSecure?: boolean;
  label?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  shouldHasError?: boolean;
}

function IconTogglePassword({
  onPress,
  secureInput,
}: {
  onPress(): void;
  secureInput: boolean;
}) {
  if (secureInput) {
    return (
      <ToggleTypeTouchable onPress={onPress}>
        <Feather color={colors.gray200} name="eye" size={22} />
      </ToggleTypeTouchable>
    );
  }
  return (
    <ToggleTypeTouchable onPress={onPress}>
      <Feather color={colors.gray200} name="eye-off" size={22} />
    </ToggleTypeTouchable>
  );
}

const ComponentInputBase: React.ForwardRefRenderFunction<
  IInputBaseRefProps,
  IComponentInputBaseProps
> = (
  {
    icon,
    isSecure = false,
    label,
    marginBottom,
    marginLeft,
    marginRight,
    shouldHasError = true,
    ...rest
  },
  ref,
) => {
  const [secureInput, toggleSecureInput] = useState<boolean>(isSecure);
  const colorSchemaSmartphone = useColorScheme() || 'default';
  const inputRef = useRef<TextInput & TextInputProps>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (text: string): void => {
    if (inputRef.current) {
      inputRef.current.value = text;
    }
  };

  const handleToggleSecureInput = useCallback(() => {
    toggleSecureInput(!secureInput);
  }, [secureInput]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    getValue: (): string => {
      return inputRef.current?.value ?? '';
    },
    setError: (error: string): void => {
      setErrorMessage(error);
    },
    setValue: (value: string): void => {
      if (!inputRef.current) {
        return;
      }
      inputRef.current.value = value;
      inputRef.current.setNativeProps({text: value});
    },
  }));

  return (
    <Container
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <ComponentIsVisible when={!!label}>
        <Label>{label}</Label>
      </ComponentIsVisible>

      <ContainerInput hasError={!!errorMessage}>
        <ComponentIsVisible when={!!icon}>
          <ComponentIsVisible when={!!errorMessage}>
            <Feather color={colors.danger} name="x-circle" size={22} />
          </ComponentIsVisible>
          <ComponentIsVisible when={!errorMessage}>{icon}</ComponentIsVisible>
        </ComponentIsVisible>
        <Input
          {...rest}
          autoCorrect={false}
          keyboardAppearance={colorSchemaSmartphone}
          multiline={false}
          onChangeText={handleInputChange}
          ref={inputRef}
          secureTextEntry={secureInput}
          underlineColorAndroid="transparent"
        />

        <ComponentIsVisible when={isSecure}>
          <IconTogglePassword
            onPress={handleToggleSecureInput}
            secureInput={secureInput}
          />
        </ComponentIsVisible>
      </ContainerInput>
      <ComponentIsVisible when={shouldHasError}>
        <MessageError visible={!!errorMessage}>{errorMessage}</MessageError>
      </ComponentIsVisible>
    </Container>
  );
};

export default forwardRef(ComponentInputBase);
