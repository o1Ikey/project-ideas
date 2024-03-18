export const InputBox = ({ icon, ...rest }) => {
  return (
    <div className="relative w-full mb-4">
      <input {...rest} className="input-box" />
      {icon}
    </div>
  );
};
