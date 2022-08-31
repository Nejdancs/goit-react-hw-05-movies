export function getLocalStorage(key) {
  try {
    const savedData = localStorage.getItem(key) ?? '[]';
    const parseDada = JSON.parse(savedData);
    return parseDada;
  } catch (error) {
    console.log(error.message);
  }
}

export function setLocalStorage(key, value) {
  try {
    const savedData = getLocalStorage(key);
    let newData;
    let isAded;

    if (savedData.some(data => data.id === value.id)) {
      newData = savedData.filter(data => data.id !== value.id);
      isAded = false;
    } else {
      newData = [...savedData, value];
      isAded = true;
    }
    localStorage.setItem(key, JSON.stringify(newData));
    return isAded;
  } catch (error) {
    console.log(error.message);
  }
}
