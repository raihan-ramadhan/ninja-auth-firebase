import * as AlertDialog from "@radix-ui/react-alert-dialog";

const LogoutDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none h-[300px] flex flex-col justify-between overflow-hidden">
          <AlertDialog.Title className="text-center text-[25px] font-medium h-[100px] flex items-center justify-center">
            Are you sure want to logout?
          </AlertDialog.Title>
          <div className="flex h-[100px]">
            <AlertDialog.Cancel asChild>
              <button className="w-1/2 bg-transparent hover:bg-[#f2f2f2] focus-within:bg-[#f2f2f2] transition-colors font-medium leading-none outline-none text-[18px] focus-within:shadow-[inset_0_0_3px_3px] focus-within:shadow-gray-600/10 rounded-bl-2xl">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button className="w-1/2 text-red-600 bg-red-100 hover:bg-red-200 focus-within:bg-red-200 transition-colors font-medium leading-none outline-none text-[18px] focus-within:shadow-[inset_0_0_3px_3px] focus-within:shadow-red-600/10 rounded-br-2xl">
                Yes, Logout!
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default LogoutDialog;
