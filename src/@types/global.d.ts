// src/@types/global.d.ts

declare global {
  interface IUser {
    id: number;
    name: string;
    email: string;
  }
  type BaseFormState = {
    errors?: {
      email?: string[];
      password?: string[];
    };
    message?: string;
  };
  type LoginFormState = BaseFormState | undefined;

  type SignUpFormState =
    | (BaseFormState & {
        errors?: {
          email?: string[];
          password?: string[];
          username?: string[];
        };
      })
    | undefined;
}

export {};
