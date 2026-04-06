export const ImageField = (props) => {
  const { label, value, onChange, error, required = false, onCancel } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <div className="h-[180px] w-full bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-2 relative overflow-hidden">
        <input
          onChange={onChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          type="file"
          accept="image/*"
        />
        {!value ? (
          <>
            <img src="imgicon.svg"></img>
            <p className="text-[14px] font-medium">Add image</p>
          </>
        ) : (
          <>
            <img
              src={value}
              className="absolute w-full h-full object-cover"
              alt=""
            />
            <img
              src="removebutton.svg"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={onCancel}
            ></img>
          </>
        )}
      </div>
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};
