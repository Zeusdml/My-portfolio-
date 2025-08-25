export const Input = ({ className = "", ...props }) => {
  return <input className={`border rounded ${className}`} {...props} />;
};
