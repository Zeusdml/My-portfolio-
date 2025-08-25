export const Card = ({ children, className = "" }) => {
  return <div className={`border rounded-lg ${className}`}>{children}</div>;
};
