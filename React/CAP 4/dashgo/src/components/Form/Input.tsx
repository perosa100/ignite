import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label: string
}

export const Input = ({ label, name, ...rest }: InputProps) => (
  <FormControl>
    {!!label && <FormLabel html={name}>{label}</FormLabel>}

    <ChakraInput
      id={name}
      name={name}
      focusBorderColor="green.900"
      bgColor="gray.100"
      _hover={{
        bgColor: 'gray.100'
      }}
      color="gray.900"
      {...rest}
    />
  </FormControl>
)
