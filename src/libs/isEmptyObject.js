/**
 * Created by tao on 2016/11/30.
 */
export function isEmptyObject(e) {
  for (let t in e) {
    return !1
  }
  return !0
}