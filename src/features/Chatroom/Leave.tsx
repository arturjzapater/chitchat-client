import React from 'react'

interface LeaveProps {
  fn: CallableFunction
}

const Leave: React.FC<LeaveProps> = ({ fn }) => (
  <button
    className="self-end"
    onClick={() => fn()}
  >
    Leave
  </button>
)

export default Leave
