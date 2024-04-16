type GameStatus =  {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    // Add other properties as needed
  }
  
   type Game =  {
    cover: string;
    description: string;
    favourite: number;
    gameId: number;
    game_status: GameStatus;
    name: string;
    __v: number;
    _id: string;
  }


export type customListType = {
  name: string;
  date: Date;
  games: Game[];
  isPrivate: boolean;
  _id: string;
  user: string;
};


