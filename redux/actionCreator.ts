export default function actionCreator<P>(
  type: string,
  payload: P = {} as any
): any {
  return { type, payload };
}
