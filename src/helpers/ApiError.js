export const buildCustomApiError = (data) => {
  return [
    {
      custom: true,
      text: `${data.code} : ${JSON.stringify(data.info)}`,
    },
    null,
  ];
};
