export type Fn<Args extends any[] = [], Result = void> = (...args: Args) => Result

export type TypeArray<T, N extends number, R extends T[] = []> = R['length'] extends N
  ? R
  : TypeArray<T, N, [...R, T]>

export type Arguments<T extends (...args: any[]) => any> = T extends (...args: infer Args) => any
  ? Args
  : never
