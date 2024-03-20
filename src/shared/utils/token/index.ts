const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const Token = {
  Get: () => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '',
  Save: (token: string) => localStorage.setItem(AUTH_TOKEN_KEY_NAME, token),
  Drop: () => localStorage.removeItem(AUTH_TOKEN_KEY_NAME),
};
