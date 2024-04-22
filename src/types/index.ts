import * as z from "zod";

export type GameStatus =  {
    yet: string[];
    owned: string[];
    beaten: string[];
    toplay: string[];
    dropped: string[];
    // Add other properties as needed
  }
  
  export type Game =  {
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

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
  password: z.string().min(4, "Enter a valid password").trim(),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
});

export const signupFormSchema = z.object({
  username: z.string().min(2, "This Field is Required").trim(),
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
  password: z.string().min(6, "Enter a valid password").trim(),
});

export const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .min(2, "This Field is Required")
    .email("Enter a valid Email")
    .trim(),
});
