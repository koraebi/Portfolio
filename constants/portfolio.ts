export const Sections: string[] = ['projects', 'insights'];

export const Categories: PortfolioCategory[] = [
  {
    id: 'discovery',
    picture: '',
    background: 'bg-indigo-300',
    section: Sections[0],
  },
  {
    id: 'uxUiDesign',
    picture: '',
    background: 'bg-fuchsia-300',
    section: Sections[0],
  },
  {
    id: 'webDevelopment',
    picture: '',
    background: 'bg-cyan-300',
    section: Sections[0],
  },
  {
    id: 'mobileDevelopment',
    picture: '',
    background: 'bg-blue-300',
    section: Sections[0],
  },
  {
    id: 'apiDevelopment',
    picture: '',
    background: 'bg-orange-300',
    section: Sections[0],
  },
  {
    id: 'gameDevelopment',
    picture: '',
    background: 'bg-green-300',
    section: Sections[0],
  },
  {
    id: 'discovery',
    picture: '',
    background: 'bg-indigo-300',
    section: Sections[1],
  },
  {
    id: 'creativeConcepts',
    picture: '',
    background: 'bg-teal-300',
    section: Sections[1],
  },
  {
    id: 'caseStudies',
    picture: '',
    background: 'bg-yellow-300',
    section: Sections[1],
  },
  {
    id: 'independentResearch',
    picture: '',
    background: 'bg-violet-300',
    section: Sections[1],
  },
];

export const Projects: PortfolioProject[] = [
  {
    section: 'projects',
    name: 'Togethere',
    categories: Categories.filter(category => category.id === 'uxUiDesign'),
    skills: ['Design Thinking', 'Adobe XD'],
    picture: '/projects/togethere.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSDtViEljMu8jaCEy6ANrCG7ihRGlemUxc4xUeJBNQiMPce6psgvBgCO85K7Dyk3TpQEzrsAkRV6tM9/embed',
    description: '',
  },
  {
    section: 'projects',
    name: 'ScrumTable',
    categories: Categories.filter(category => ['uxUiDesign', 'webDevelopment', 'mobileDevelopment', "apiDevelopment"].includes(category.id)),
    skills: ['Adobe XD', 'React Native', 'Angular', 'NestJS'],
    picture: '/interactiveTable.jpg',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vTd0C0L43bjgitlfH_Ai0bT-IxD9gsZSr0Sp-fFojH_R2KkX50AGC7kbonNssz6UKX6UTh0zwC5I4Lt/embed',
    description: '',
  },
  {
    section: 'insights',
    name: "Tesla's Apples",
    categories: Categories.filter(category => category.id === 'creativeConcepts'),
    skills: ['Design Thinking', 'Adobe Photoshop', 'Adobe XD'],
    picture: '/teslaApple.png',
    link: 'https://docs.google.com/presentation/d/e/2PACX-1vSrNunTJippMtlNddxUrPSOtGu1Za-qxxqq1h5xa76QcC2joXmXMrRAbK2gel0rLBA34F4JqDPSMkGz/embed',
    description: 'What if Tesla started to sell apples. What kind of product would it be and how would it be sold ?',
  }
];