import React, { useState } from 'react'

interface InputFormProps {
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined,
  onSubmit: CallableFunction,
  className?: string,
  submit: string,
  required?: boolean,
  id: string,
  label?: string,
  placeholder?: string
}

const InputForm: React.FC<InputFormProps> = ({
  onBlur,
  onChange,
  onSubmit,
  className = '',
  submit,
  required = false,
  id,
  label = '',
  placeholder = ''
}) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)
    setError(false)
    if (onChange) onChange(event)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (required && input === '') {
      setError(true)
      return
    }

    onSubmit(input)
    setInput('')
  }

  return (
    <form className={`flex bubble ${className}`} id={id}>
      <div className="m-2 flex flex-col flex-grow">
        <label htmlFor={`${id}-input`}>{label}</label>
        <input
          type="text"
          value={input}
          onBlur={onBlur}
          onChange={handleChange}
          className="flex-grow bg-gray-100 border border-gray-500 focus:border-gray-800 px-2 py-1"
          placeholder={placeholder}
          id={`${id}-input`}
        />
        {error && <span className="text-red-500 text-xs italic">Please, fill this field.</span>}
      </div>
      <button
        className="button m-2 bg-gray-800 text-gray-100 hover:bg-gray-500 hover:text-gray-800"
        onClick={handleSubmit}
      >
        {submit}
      </button>
    </form>
  )
}

export default InputForm
