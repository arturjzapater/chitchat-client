import React from 'react'

interface SectionHeaderProps {
  title: string,
  text: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => (
  <section className="flex flex-col items-center m-4">
    <h2 className="text-xl">{title}</h2>
    <p className="text-sm">{text}</p>
  </section>
)

export default SectionHeader
