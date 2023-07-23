export interface Image {
  _id: string;
  url: string;
}

export interface NavbarLink {
  id: string;
  title: string;
}

export interface Service {
  title: string;
  icon: Image;
}

export interface Experience {
  title: string;
  company: string;
  icon: Image;
  from_date: string;
  to_date: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: Image;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  image: Image;
  source_code_link: string;
  in_production: boolean;
}
