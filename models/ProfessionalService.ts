class ProfessionalService {
  name: string;
  price: number;
  remote: string[];
  onSite: string[];
  period: string[];
  proficiencies: string[];
  section: string;
 
  constructor(
    name: string,
    price: number,
    remote: string[],
    onSite: string[],
    period: string[],
    proficiencies: string[],
    section: string) {
    this.name = name;
    this.price = price;
    this.remote = remote;
    this.onSite = onSite;
    this.period = period;
    this.proficiencies = proficiencies;
    this.section = section;
  }
}