const getProgressByChallange = (complete, state) => {
  const onePercent = complete / 100;
  return Math.round(state / onePercent);
};

export { getProgressByChallange };
