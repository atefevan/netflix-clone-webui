import React from "react";

interface Props {
  items: any;
}

const Select = ({ items }: Props) => {
  return (
    <form className="w-36 px-4 rounded-lg">
      <fieldset>
        <div className="relative border border-gray-300 text-gray-800 bg-transparent shadow-lg rounded-md">
          <label className="sr-only">My field</label>
          <select
            className="appearance-none w-full py-1 px-2 bg-transparent rounded-md text-white"
            name="whatever"
            id="frm-whatever"
          >
            {items.map((item: any) => (
              <option key={item} value={item} className="text-white">
                {item}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-white">
            <svg
              className="h-4 w-4 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" fill="white"/>
            </svg>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Select;
