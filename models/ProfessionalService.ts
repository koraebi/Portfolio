class ProfessionalService {
  name: string;
  locations: string[];
  prices: any;
  remoteOnly: boolean;
  period: string[];
  proficiencies: string[];
  section: string;
 
  constructor(
    name: string,
    locations: string[],
    prices: any,
    remoteOnly: boolean,
    period: string[],
    proficiencies: string[],
    section: string) {
    this.name = name;
    this.locations = locations;
    this.prices = prices;
    this.remoteOnly = remoteOnly;
    this.period = period;
    this.proficiencies = proficiencies;
    this.section = section;
  }
}