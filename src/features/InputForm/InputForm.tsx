import React, { useState } from 'react'

interface InputFormProps {
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined,
  onSubmit: CallableFunction,
  className?: string,
  submit: string,
  required?: boolean
}

const InputForm: React.FC<InputFormProps> = ({
  onBlur,
  onFocus,
  onSubmit,
  className = '',
  submit,
  required = false
}) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)
    setError(false)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (required) {
      setError(input === '')
    }
    if (!error) {
      onSubmit(input)
      setInput('')
    }
  }

  return (
    <form className={`flex ${className}`}>
      <div className="m-2 flex flex-grow">
        <input
          type="text"
          value={input}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          className="flex-grow bg-gray-100 border border-gray-100 focus:border-gray-500 px-2 py-1"
        />
        {error && <span className="text-red-500 text-xs italic">Please, fill this field.</span>}
      </div>
      <button
        className="py-1 px-4 m-2 font-semibold bg-gray-400 hover:bg-gray-100 transition duration-300"
        onClick={handleSubmit}
      >
        {submit}
      </button>
    </form>
  )
}

export default InputForm
