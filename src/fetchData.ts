const fetchData = async <T>(url: string, config: RequestInit): Promise<T> => {
  const response = await fetch(url, config);
  const data: Promise<T> = await response.json();

  return data;
};

export default fetchData;
