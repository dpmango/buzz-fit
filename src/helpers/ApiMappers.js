export const responseMapperList = ({ info: list }) => ({
  list,
});

export const responseMapperData = ({ info: data }) => ({
  data,
});

export const responseMapperUpdated = ({ updated: data }) => ({
  data,
});

export const responseMapperInsert = ({ updated, error }) => ({
  updated,
  error,
});

export const responseMapperAuth = ({ info: token }) => ({
  token,
});
