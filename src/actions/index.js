export const SET_ACCOUNT = 'SET_ACCOUNT';
export const setAccount = (appID, apiKey) => ({
  type: SET_ACCOUNT,
  appID,
  apiKey,
});

export const SET_META = 'SET_META';
export const setMeta = meta => ({
  type: SET_META,
  meta,
});

export const SET_THEME = 'SET_THEME';
export const setTheme = theme => ({
  type: SET_THEME,
  theme,
});
