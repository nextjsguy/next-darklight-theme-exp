type ButtonProp = {
  children: React.ReactNode;
  classname?: String;
  onClick?: () => void;
};

const Button = ({ children, classname, onClick }: ButtonProp) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
