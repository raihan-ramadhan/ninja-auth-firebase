import { LinksUnion } from "../Navbar";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

import Login from "./Login";
import Signup from "./Signup";
import CreateGuide from "./CreateGuide";
import AccountDetails from "./AccountDetails";

interface DialogProps {
  title: LinksUnion;
  children: React.ReactNode;
}

const contentMap: Record<LinksUnion, JSX.Element> = {
  Login: <Login />,
  "Sign up": <Signup />,
  Account: <AccountDetails />,
  "Create Guide": <CreateGuide />,
};

const NavbarDialog = ({ title, children }: DialogProps): JSX.Element => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none gap-10 overflow-hidden flex flex-col">
        <div className="flex-1 p-[25px] overflow-x-hidden overflow-y-auto relative">
          <Dialog.Title className="text-gray-900 m-0 text-[23px] font-semibold">
            {title}
          </Dialog.Title>
          {contentMap[title]}
          <Dialog.Close asChild>
            <button
              className="text-main-accent transition-colors cursor-pointer hover:bg-main-accent/10 focus:shadow-main-accent/50 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NavbarDialog;
