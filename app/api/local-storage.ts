import { DataType } from 'utils/global.interface';

function makeId(): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 24; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const getAll = <T>(type: DataType): T[] => {
  const localStorageData = localStorage.getItem(type);
  if (!localStorageData) {
    return [];
  }
  const allData: T[] = JSON.parse(localStorageData);
  return allData;
};

export const getById = <T>(id: string, type: DataType): T => {
  const localStorageData = localStorage.getItem(type);

  if (!localStorageData) {
    return {} as T;
  }

  const allData = JSON.parse(localStorageData);
  const currentObject: T = allData.find(item => item.id === id);

  return currentObject || ({} as T);
};

export const create = <T>(type: DataType, payload: T): string | null => {
  const localStorageData = localStorage.getItem(type);
  const newId = makeId();
  const newItem = { ...payload, id: newId };
  if (!localStorageData) {
    localStorage.setItem(type, JSON.stringify([newItem]));
    return newId;
  }

  const allData = JSON.parse(localStorageData);
  allData.unshift(newItem);
  localStorage.setItem(type, JSON.stringify(allData));

  return newId;
};

export const removeById = (id: string, type: DataType): boolean => {
  const localStorageData = localStorage.getItem(type);
  if (!localStorageData) {
    return false;
  }

  const allData = JSON.parse(localStorageData);
  const newObject = allData.filter(item => item.id !== id);

  localStorage.setItem(type, JSON.stringify(newObject));
  return true;
};

export const update = <T extends { id: string }>(
  data: T,
  type: DataType,
): boolean => {
  const localStorageData = localStorage.getItem(type);
  if (!localStorageData) {
    return false;
  }

  const allData = JSON.parse(localStorageData);
  const newList = allData.filter(item => item.id !== data.id);
  newList.unshift(data);

  localStorage.setItem(type, JSON.stringify(newList));
  return true;
};

export const clearByType = (type: DataType): boolean => {
  localStorage.removeItem(type);
  return true;
};

export const clearAll = (): boolean => {
  localStorage.clear();
  return true;
};
