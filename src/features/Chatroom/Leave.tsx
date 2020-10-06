import React from 'react'

interface LeaveProps {
  onClick: CallableFunction
}

const Leave: React.FC<LeaveProps> = ({ onClick }) => (
  <button
    className="button self-end mb-4 bg-red-500 text-gray-100 hover:bg-red-700"
    onClick={() => onClick()}
    id="leave-btn"
  >
    Leave
  </button>
)

export default Leave
