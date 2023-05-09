export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }

  // creating the benefit structure
  export interface BenefitType{
    icon : JSX.Element,
    title : string,
    description : string
  }