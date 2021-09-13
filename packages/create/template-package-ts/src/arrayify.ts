import isNil from 'lodash/isNil'

type None = null | undefined

type Arrayify<T = unknown> = T extends None ? [] : T extends unknown[] ? T : [T]

/**
 * 数组化操作
 *
 * @param value - 值
 * @returns 返回数组
 *
 * @example <caption>基础数据</caption>
 * ```ts
 * arrayify(1)
 * // [1]
 *
 * arrayify('foo')
 * // ['foo']
 *
 * arrayify(['foo', 'bar'])
 * // ['foo', 'bar']
 * ```
 *
 * @example <caption>空值</caption>
 * ```ts
 * arrayify(null)
 * // []
 *
 * arrayify(null)
 * // []
 * ```
 */
export function arrayify<T, U = Arrayify<T>>(value?: T): U {
  if (isNil(value)) return [] as unknown as U
  if (Array.isArray(value)) return value as unknown as U
  return [value] as unknown as U
}
