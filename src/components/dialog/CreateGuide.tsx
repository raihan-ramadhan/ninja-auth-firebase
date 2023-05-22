import TextareaAutosize from "react-textarea-autosize";

import { Input } from "../../ui/Input";

const CreateGuide = () => {
  return (
    <form className="flex flex-col gap-7 mt-7">
      <Input id="title" placeholder="Guide Title" type="text" required />
      <fieldset className="relative flex w-full">
        <TextareaAutosize
          className="peer text-gray-800 w-full text-[18px] leading-none outline-none border-b-2 border-gray-400 transition-colors duration-300 focus-within:border-main-accent placeholder:!text-transparent resize-none py-[12px]"
          id="content"
          placeholder=" " // this must have a value to make effect in label, because we use peer-placeholder-shown
          required
        />
        <label
          className="absolute top-0 text-xs font-medium text-gray-400 -translate-y-full select-none pointer-events-none w-full transition-[position_color] duration-300 peer-focus-within:top-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus-within:-translate-y-full peer-focus-within:text-xs peer-placeholder-shown:text-base peer-focus-within:font-medium peer-placeholder-shown:font-normal peer-focus-within:text-main-accent !leading-none"
          htmlFor="content"
        >
          Guide Content
        </label>
      </fieldset>
      <button className="buttonForm">CREATE</button>
    </form>
  );
};

export default CreateGuide;
