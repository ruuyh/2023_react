PropsCompCopy = () => {
  const { color, children } = this.props;
  return <div style={{ color: color }}>{children}</div>;
};

export default PropsCompCopy;