export type Fn<Args extends any[] = [], Result = void> = (...args: Args) => Result

export type TypeArray<T, N extends number, R extends T[] = []> = R['length'] extends N
  ? R
  : TypeArray<T, N, [...R, T]>
