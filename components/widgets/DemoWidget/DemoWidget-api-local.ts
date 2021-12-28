const LOCAL_STORAGE_KEY = 'DemoWidget';

export function persistData(data: number): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export function getPersistedData(): number | undefined {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}
