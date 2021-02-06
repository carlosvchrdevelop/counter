interface CounterProps {
  width?: string,
  centered?: boolean,
  gtz?: boolean,
  fn?(counter: number): void,
}

export default CounterProps;