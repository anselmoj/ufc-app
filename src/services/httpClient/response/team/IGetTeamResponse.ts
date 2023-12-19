interface IGetTeamResponse {
  TeamID: number;
  Key: string;
  Active: boolean;
  City: string;
  Name: string;
  LeagueID: number;
  StadiumID: number | null;
  Conference: string | null;
  Division: string | null;
  PrimaryColor: string | null;
  SecondaryColor: string | null;
  TertiaryColor: string | null;
  QuaternaryColor: string | null;
  WikipediaLogoUrl: string | null;
  WikipediaWordMarkUrl: string | null;
  GlobalTeamID: number;
  NbaDotComTeamID: number;
  HeadCoach: string | null;
}

export default IGetTeamResponse;
