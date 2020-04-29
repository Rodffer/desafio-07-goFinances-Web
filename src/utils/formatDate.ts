const formatDate = (date: Date): string => {
  return Intl.DateTimeFormat('pt-br').format(new Date(date));
};

export default formatDate;
