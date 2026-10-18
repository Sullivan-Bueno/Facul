const Input = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="text-sm font-bold text-[#303030]">
        {props.children}
      </label>

      <input
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        type={props.type}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        className="
                  h-13
                  rounded-lg
                  border
                  border-[#d8d8d8]
                  bg-white
                  px-4
                  text-[#303030]
                  outline-none
                  transition
                  placeholder:text-[#aaa]
                  focus:border-[#303030]
                  focus:ring-2
                  focus:ring-[#f4c400]/40
                "
      />
    </div>
  );
};

export default Input;
