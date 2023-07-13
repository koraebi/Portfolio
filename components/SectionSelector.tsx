'use client';

type Props = {
  translations: any,
  sections: string[],
  selectedSection: string,
  onSectionSelected: (section: string) => void
}

export default function SectionSelector({ 
  translations: t, 
  sections, 
  selectedSection, 
  onSectionSelected }: Props) {
  return (
    <div className="flex gap-10 px-10 justify-center lg:justify-start">
      {sections.map((section: string) => (
        <div key={section} className="cursor-pointer" onClick={() => onSectionSelected(section)}>
          <h1 
            className={`
              text-center 
              lg:text-left 
              font-extrabold 
              text-2xl 
              lg:text-5xl 
              ${selectedSection === section ? 'text-gray-800' : 'text-gray-400'}`}
          >
            {t(section)}
          </h1>
        </div>
      ))}
    </div>
  )
}