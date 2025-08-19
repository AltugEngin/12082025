import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function MyModal({ value, setValue }) {
  return (
    <>
      <Dialog
        open={value}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setValue(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-blue/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-yellow"
              >
                Inserting New Post Successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-green/50">
                Your post was added successfully
              </p>
              <div className="mt-4">
                <Button
                  onClick={() => setValue(false)}
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
