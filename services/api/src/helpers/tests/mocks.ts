export type MockClass<T> = { [K in keyof T]: T[K] };
