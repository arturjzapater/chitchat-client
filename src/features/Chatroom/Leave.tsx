import React from 'react'

interface LeaveProps {
  fn: CallableFunction
}

const Leave: React.FC<LeaveProps> = ({ fn }) => (
  <button
    className="button self-end bg-red-500 text-gray-100 hover:bg-red-700"
    onClick={() => fn()}
  >
    Leave
  </button>
)

export default Leave
