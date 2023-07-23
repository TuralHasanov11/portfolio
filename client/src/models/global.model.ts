export interface NavbarLink{
    id: string
    title: string
}

export interface Service{
    title: string
    icon: string
}

export interface Experience{
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: string[]
}

export interface Technology{
    name: string
    icon: unknown
}

export interface Project {
    name: string
    description: string
    tags: Tag[]
    image: string
    source_code_link: string
    is_production: boolean
  }
  
  export interface Tag {
    name: string
    color: string
  }